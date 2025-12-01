from flask import Flask, request, jsonify
from flask_cors import CORS

# --- IMPORT YOUR SCRIPTS ---
from tagSentence import tagSentence 
from cfg import CheckSentence

from fsm import SentenceGenerator 
from verb_fsm import *
from pydantic import BaseModel
import random
app = Flask(__name__)
CORS(app)

# --- INITIALIZATION ---
print("Initializing resources...")
checker = CheckSentence()
generator = SentenceGenerator() # Initialize the FSM once
print("Ready.")

# --- ENDPOINTS ---

@app.route('/generate', methods=['GET'])
def generate_sentence():
    """
    Generates a random valid sentence structure and returns the words.
    Used by the frontend for the Drag-and-Drop game.
    """
    try:
        # Get raw token list from the generator
        # (Ensure your SentenceGenerator has the generate_data method we added earlier)
        # If it only has generate(), we can split the string.
        
        if hasattr(generator, 'generate_data'):
            words = generator.generate_data()
        else:
            sentence_str = generator.generate()
            # Remove period and split
            words = sentence_str.replace('.', '').split()

        return jsonify({
            "words": words,
            "sentence": " ".join(words) + "."
        })
    except Exception as e:
        print(f"Generation Error: {e}")
        return jsonify({"error": "Failed to generate sentence"}), 500


@app.route('/analyze', methods=['POST'])
def analyze():
    # 1. Get text from Next.js
    data = request.json
    text = data.get('text', '')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # 2. Call your existing function to tag the sentence

    tags = tagSentence(text)


    # 3. Check Validity using your CFG script
    print(text)
    print (tags)

    is_valid = checker.check(tags)
    
    # 4. Prepare data for Frontend
    words = text.split()

    response_tags = list(zip(words, tags))

    return jsonify({
        "tags": response_tags,
        "isValid": is_valid
    })
irregulars = get_irregulars()
all_verbs = list_all_verbs()

class CheckRequest(BaseModel):
    verb: str
    user_answer: str

@app.get("/random_verb")

def random_verb():
    verb = random.choice(all_verbs)
    return {"verb": verb}


@app.route('/check', methods=['POST'])
def check_answer():
    # 1. Parse Data MANUALLY from Flask's global request object
    try:
        # We pass request.json into the Pydantic model here
        data = CheckRequest(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400
    except TypeError:
        return jsonify({"error": "Invalid JSON or missing body"}), 400

    # 2. Logic
    verb = data.verb.lower()
    user_input = data.user_answer.strip().lower()
    correct = conjugate(verb, irregulars)
    print(correct)
    correct = correct.replace('"', '').replace("'", '').replace(',', '')    
    correct.lower()
    print(user_input+ " " + correct)

    # 3. Response
    return jsonify({
        "verb": verb,
        "correct_answer": correct,
        "user_answer": user_input,
        "is_correct": user_input == correct
    })

if __name__ == '__main__':
    print("Starting Flask Server on Port 5000...")
    app.run(port=5000, debug=True)