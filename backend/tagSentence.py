import joblib
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet as wn

def get_wordnet_pos(universal_tag):
    if universal_tag == 'ADJ': return wn.ADJ
    elif universal_tag == 'VERB': return wn.VERB
    elif universal_tag == 'ADV': return wn.ADV
    return wn.NOUN

def word2features(sent, i):
    word = sent[i][0]
    word_lower = word.lower()
    lemmatizer = WordNetLemmatizer()

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
        'word.endswith_s': word_lower.endswith('s') and len(word_lower) > 1, # Catches the 'jumps' issue
        'word.endswith_ed': word_lower.endswith('ed'),
        'word.endswith_ing': word_lower.endswith('ing'),

        #     2-Grams
        'char_2gram_prefix': word_lower[:2] if len(word_lower) >= 2 else '',
        'char_2gram_suffix': word_lower[-2:] if len(word_lower) >= 2 else '',
        
        # 3-Grams
        'char_3gram_prefix': word_lower[:3] if len(word_lower) >= 3 else '',
        'char_3gram_suffix': word_lower[-3:] if len(word_lower) >= 3 else '',

        #default features provided by Geeks4Geeks
        'is_first': i == 0,
        'is_last': i == len(sent) - 1,
        'is_capitalized': word[0].upper() == word[0],
        'is_all_caps': word.upper() == word,
        'is_all_lower': word.lower() == word,
        
  
        
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

def tagSentence(s):
    """
    Loads the trained CRF model and predicts the Part-of-Speech tags for the input sentence.
    """
    # Load trained CRF model
    try:
        crf = joblib.load("pos_crf_model.pkl") 
    except FileNotFoundError:
        print("Error: Model file 'pos_crf_model.pkl' not found. Please ensure the trained file is in the current directory.")
        return []
    
    # Split string into words
    words = s.split() 
    
    sent = [(w, None) for w in words]
        
    # Generate features for CRF

    features = sent2features(sent)
    
    # Predict POS tags
    # crf.predict returns a list of tag sequences (one for each sentence), 
    # so we take the first element [0] for our single sentence.
    tags = crf.predict([features])[0]
    
    return tags

# --- Example Usage ---
# If you run tagSentence("the cat sleeps"), it will return the predicted tags 
# (e.g., ['DET', 'NOUN', 'VERB']) if the model is correctly loaded.