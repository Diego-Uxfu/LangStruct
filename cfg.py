from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice


class SentenceGenerator:
    def __init__(self):
        self.grammar = CFG.fromstring("""
            S -> NP VP
            S -> NP VP PP
            S -> NP VP NP
            S -> NP VP NP PP

            NP -> Det N
            NP -> Det Adj N
            NP -> Adj N
            NP -> N
            NP -> Pronoun

            VP -> V
            VP -> V NP
            VP -> V PP
            VP -> V NP PP

            PP -> Prep NP

        """)
        self.parser = EarleyChartParser(self.grammar)