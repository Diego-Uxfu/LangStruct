import random

class SentenceGenerator:
    def __init__(self):
        # 1. Wordbank: A collection of words categorized by Part of Speech
        self.wordbank = {
            'DET': ['The', 'This', 'That', 'My', 'Your'],
            
            'ADJ': ['happy', 'sad', 'quick', 'lazy', 'red', 'tall', 'ancient', 'young'],
            
            # All Singular Nouns
            'NOUN': ['cat', 'dog', 'man', 'woman', 'bird', 'park', 'fox', 'student'],

            'VERB': ['sleeps', 'runs', 'jumps', 'walks', 'sits', 'stands', 
                     'sees', 'chases', 'likes', 'found', 'ate', 'watched'],     
            
            'ADV': ['quickly', 'quietly', 'happily', 'eagerly', 'slowly'],
            'PREP': ['in', 'on', 'with', 'under', 'over', 'by']
        }

        # 2 Paths: Different valid grammatical structures 
        self.paths = [
            ['DET', 'NOUN', 'VERB'],

            ['DET', 'NOUN', 'VERB', 'DET', 'NOUN'],

            ['DET', 'ADJ', 'NOUN', 'VERB', 'DET', 'ADJ', 'NOUN'],

            ['DET', 'NOUN', 'VERB', 'ADV'],

            ['DET', 'NOUN', 'VERB', 'PREP', 'DET', 'NOUN'],
            
            ['DET', 'NOUN', 'VERB', 'ADV'],
        ]

    def get_word(self, pos_tag):
        """Retrieves a random word for a given POS tag."""
        wordbank_list = self.wordbank.get(pos_tag)
        
        if wordbank_list:
            return random.choice(wordbank_list)

    def generate(self):
        """
        1. Picks a random structural path.
        2. Fills the path with words from the wordbank.
        3. Formats the sentence.
        """
        # Step 1: Choose a path at random
        chosen_path = random.choice(self.paths)
        
        # Step 2: Build the sentence list
        sentence_words = []
        for tag in chosen_path:
            word = self.get_word(tag)
            sentence_words.append(word)

        # Step 3: Format (Capitalize first letter, add period)
        sentence_str = " ".join(sentence_words)

        
        return sentence_str 

