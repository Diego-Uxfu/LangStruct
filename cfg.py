from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice


class CheckSentence:
    def __init__(self):
        self.grammar = CFG.fromstring("""
            S -> NP VP
            S -> NP VP PP
            S -> NP VP NP
            S -> NP VP NP PP

            NP -> DT NN
            NP -> DT JJ NN
            NP -> JJ NN
            NP -> NN
            NP -> PRP

            VP -> VB
            VP -> VB NP
            VP -> VB PP
            VP -> VB NP PP

            PP -> IN NP

        """)
        self.parser = EarleyChartParser(self.grammar)


    #check sentence for grammatical accuracy
    def check(self, tag):
        for tree in self.parser.parse(tag):
            # if we can generate at least one parse, it's valid
            return True
        return False
