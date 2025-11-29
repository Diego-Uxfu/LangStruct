from nltk.corpus import treebank
import joblib


def word2features(sent, i):
    word = sent[i][0]

    features = {
        'bias': 1.0,
        'word.lower()': word.lower(),
        'word[-3:]': word[-3:],
        'word[-2:]': word[-2:],
        'word.isupper()': word.isupper(),
        'word.istitle()': word.istitle(),
        'word.isdigit()': word.isdigit(),
    }

    if i > 0:
        prev_word = sent[i-1][0]
        features.update({
            '-1:word.lower()': prev_word.lower(),
            '-1:word.istitle()': prev_word.istitle(),
            '-1:word.isupper()': prev_word.isupper(),
        })
    else:
        features['BOS'] = True

    if i < len(sent)-1:
        next_word = sent[i+1][0]
        features.update({
            '+1:word.lower()': next_word.lower(),
            '+1:word.istitle()': next_word.istitle(),
            '+1:word.isupper()': next_word.isupper(),
        })
    else:
        features['EOS'] = True

    return features



#we'll send this into the cfg to determine sentence validity

def tagSentence(s):
    """
    Input: s = sentence string, e.g. "The cat sleeps"
    Output: list of POS tags, e.g. ['DT', 'NN', 'VBZ']
    """
    # Load trained CRF model
    crf = joblib.load("pos_crf_model.pkl")
    
    # Split string into words
    words = s.split(" ")
    
    # Create  structure for feature extraction
    sent = []
    for w in words:
        sent.append((w, None))
        
    # Generate features for CRF
    features = sent2features(sent)
    
    # Predict POS tags
    tags = crf.predict([features])[0]
    
    return tags
