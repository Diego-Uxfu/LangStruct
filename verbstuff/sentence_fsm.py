import random

# Grammar definition
GRAMMAR = {
    "S": [
        ["NP", "VP"],
        ["NP", "VP", "PP"],
        ["NP", "VP", "NP"],
        ["NP", "VP", "NP", "PP"]
    ],
    "NP": [
        ["DT", "NN"],
        ["DT", "JJ", "NN"],
        ["JJ", "NN"],
        ["NN"],
        ["PRP"]
    ],
    "VP": [
        ["VB"],
        ["VB", "NP"],
        ["VB", "PP"],
        ["VB", "NP", "PP"]
    ],
    "PP": [
        ["IN", "NP"]
    ]
}

# Example placeholder vocabulary
LEXICON = {
    "DT": ["the", "a"],
    "NN": ["dog", "car", "teacher", "cat"],
    "JJ": ["red", "big", "funny"],
    "PRP": ["he", "she", "they"],
    "VB": ["sees", "drives", "likes", "finds"],
    "IN": ["with", "near", "under", "beside"]
}

def expand(symbol):
    """Expand a non-terminal recursively until all terminals are words."""
    if symbol in LEXICON:  # terminal POS -> word list
        return random.choice(LEXICON[symbol])

    # non-terminal → choose rule
    rule = random.choice(GRAMMAR[symbol])

    result = []
    for part in rule:
        result.append(expand(part))  # recursive expansion

    return " ".join(result)

def generate_sentence():
    sentence = expand("S")
    return sentence[0].upper() + sentence[1:]  # capitalize

def main():
    sentence = generate_sentence()
    print(sentence)
if __name__ == "__main__":
    main()