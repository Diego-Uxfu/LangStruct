from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice


class CheckSentence:
    def __init__(self):
        self.grammar = CFG.fromstring("""
           S -> NP VP
            S -> NP VP PP

            NP -> 'DT' 'NN'
            NP -> 'DT' 'JJ' 'NN'
            NP -> 'JJ' 'NN'
            NP -> 'NN'
            NP -> 'PRP'
            NP -> 'PRP$'
            NP -> 'DT' 'JJ' 'NN' 'NN'
            NP -> 'DT' 'NN' 'NN'

            VP -> 'VB'
            VP -> 'VB' NP
            VP -> 'VB' PP
            VP -> 'VB' NP PP

            PP -> 'IN' NP

        """)
        self.parser = EarleyChartParser(self.grammar)


    #check sentence for grammatical accuracy
    def check(self, tags):
        """
        Input: tags = list of POS tags, e.g. ['DT','JJ','NN','VB']
        Output: True if sentence can be parsed by CFG, False otherwise
        """
        try:
            for tree in self.parser.parse(tags):
                return True  # at least one parse exists
            return False   # no parses found
        except ValueError:
            # if tags include a POS not in CFG terminals
            return False