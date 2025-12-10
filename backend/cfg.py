from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice

class CheckSentence:
    def __init__(self):

        self.grammar = CFG.fromstring("""
            S -> NP VP
            S -> NP VP PP
            S -> NP VP ADV

            S -> NP VP
            S -> NP VP PP
            S -> NP VP ADV

            # --- Noun Phrases (NP) ---
            NP -> 'DET' 'NOUN'
            NP -> 'DET' 'ADJ' 'NOUN'
            NP -> 'ADJ' 'NOUN'
            NP -> 'NOUN'
            NP -> 'DET' 'ADJ' 'NOUN' 'NOUN'
            NP -> 'DET' 'NOUN' 'NOUN'
            NP -> 'PRON'
            NP -> 'PRON' 'NOUN'            
            NP -> 'PRON' 'ADJ' 'NOUN'

                                      
            NP -> NP PP 
            
            # --- Verb Phrases (VP) ---
            VP -> 'VERB'            
            VP -> 'VERB' NP
            VP -> 'VERB' PP
            VP -> 'VERB' NP PP
            VP -> 'VERB' 'ADV'
            VP ->  'ADV'  'VERB'                                    
                                      
            #recursive VP 
            VP -> VP PP
                                      

            # --- Prepositional Phrases (PP) ---

            PP -> 'ADP' NP 

            # --- Adverb (ADV) ---

            ADV -> 'ADV'
            """)
            
        # 2. Parser Initialization (Must also be indented inside __init__)
        self.parser = EarleyChartParser(self.grammar)
    #check sentence for grammatical accuracy
    def check(self, tags):
        """
        Input: tags = list of POS tags, e.g. ['DT','JJ','NN','VB']
        Output: True if sentence can be parsed by CFG, False otherwise
        """
        print(tags)
        
        try:
            for tree in self.parser.parse(tags):
                return True  # at least one parse exists
            return False   # no parses found
        except ValueError:
            # if tags include a POS not in CFG terminals
            return False