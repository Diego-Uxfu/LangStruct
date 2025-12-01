import joblib
import nltk
from nltk.corpus import treebank
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet as wn
import sklearn_crfsuite

# --- 1. Setup ---
nltk.download('treebank')
nltk.download('universal_tagset') # Crucial for simplified tags
nltk.download('wordnet')
lemmatizer = WordNetLemmatizer()
def get_wordnet_pos(universal_tag):
    if universal_tag == 'ADJ': return wn.ADJ
    elif universal_tag == 'VERB': return wn.VERB
    elif universal_tag == 'ADV': return wn.ADV
    return wn.NOUN

# --- 2. Feature Functions ---
def word2features(sent, i):
    word = sent[i][0]
    word_lower = word.lower()

    # --- LEMMA CALCULATION (Heuristic) ---
    # The heuristic: Check if the word changes when treated as a Verb. 
    # If yes, use the verb lemma. Otherwise, default to the noun lemma.
    # This captures inflections like "sleeps" -> "sleep" (Verb) but leaves "cat" -> "cat" (Noun).
    lemma_verb = lemmatizer.lemmatize(word_lower, wn.VERB)
    
    if lemma_verb != word_lower:
        lemma = lemma_verb
    else:
        lemma = lemmatizer.lemmatize(word_lower, wn.NOUN)

    # --- Feature Dictionary (Updated) ---
    features = {
        'word': word,
        'word.lower()': word_lower,
        
        # THE NEW LEMMA FEATURE
        'word.lemma': lemma,  
        
        
        'is_first': i == 0,
        'is_last': i == len(sent) - 1,
        'is_capitalized': word[0].upper() == word[0],
        'is_all_caps': word.upper() == word,
        'is_all_lower': word.lower() == word,

        #verb endings
        'word.endswith_s': word_lower.endswith('s') and len(word_lower) > 1, 
        'word.endswith_ed': word_lower.endswith('ed'),
        'word.endswith_ing': word_lower.endswith('ing'),
        'word.endswith_ies': word_lower.endswith('ies'),
        'word.endswith_y': word_lower.endswith('y'),
        

        # 2-Grams
        'char_2gram_prefix': word_lower[:2] if len(word_lower) >= 2 else '',
        'char_2gram_suffix': word_lower[-2:] if len(word_lower) >= 2 else '',
        
        # 3-Grams
        'char_3gram_prefix': word_lower[:3] if len(word_lower) >= 3 else '',
        'char_3gram_suffix': word_lower[-3:] if len(word_lower) >= 3 else '',

        
        
        # contextual features
        'prev_word': '' if i == 0 else sent[i-1][0],
        'next_word': '' if i == len(sent)-1 else sent[i+1][0],
        
        'has_hyphen': '-' in word,
        'is_numeric': word.isdigit(),
        'capitals_inside': word[1:].lower() != word[1:]
    }

    return features

def sent2features(sent):
    return [word2features(sent, i) for i in range(len(sent))]

def sent2labels(sent):
    return [pos for (w,pos) in sent]


sentences = treebank.tagged_sents(tagset='universal')
train_sents = list(sentences)
print(f"Training on {len(train_sents)} sentences of General English.")


#inject our own training data 
simple_sentences = [

    [('The', 'DET'), ('dog', 'NOUN'), ('jumps', 'VERB'), ('over', 'ADP'), ('the', 'DET'), ('fence', 'NOUN'), ('.', '.')],
    [('The', 'DET'), ('cat', 'NOUN'), ('runs', 'VERB'), ('through', 'ADP'), ('the', 'DET'), ('grass', 'NOUN'), ('.', '.')],
    [('The', 'DET'), ('cat', 'NOUN'), ('sleeps', 'VERB')],
    [('The', 'DET'), ('dog', 'NOUN'), ('runs', 'VERB')],
    [('He', 'NOUN'), ('jumps', 'VERB')], 
    [('She', 'NOUN'), ('walks', 'VERB')], 
    [('The', 'DET'), ('fox', 'NOUN'), ('jumps', 'VERB')],
    [('It', 'NOUN'), ('rains', 'VERB')],
    [('A', 'DET'), ('man', 'NOUN'), ('eats', 'VERB')],
    [('The', 'DET'), ('car', 'NOUN'), ('stops', 'VERB')],
    [('The', 'DET'), ('cats', 'NOUN'), ('sleep', 'VERB')], 
    [('The', 'DET'), ('baby', 'NOUN'), ('cries', 'VERB'), ('loudly','ADV')],
    [('They', 'NOUN'), ('run', 'VERB')], 
]
train_sents.extend(simple_sentences)

X_train = [sent2features(s) for s in train_sents]
y_train = [sent2labels(s) for s in train_sents] # No need for map_coarse anymore!

# --- 4. Train CRF ---
print("Training model... (This might take a minute)")
crf = sklearn_crfsuite.CRF(
    algorithm='lbfgs',
    c1=0.05,
    c2=0.5,
    max_iterations=2000,
    all_possible_transitions=True,
    verbose = True,



)
crf.fit(X_train, y_train)

# --- 5. Save ---
joblib.dump(crf, "pos_crf_model.pkl")
print("Saved as pos_crf_model.pkl!")