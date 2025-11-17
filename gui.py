import tkinter as tk

from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice


# Create main window
root = tk.Tk()
root.title("Simple Container Example")
root.geometry("300x200")

# Create a Frame (the container)
container = tk.Frame(root, bg="lightblue", padx=10, pady=10)
container.pack(padx=20, pady=20, fill="both", expand=True)

# Add widgets *inside* the container
label = tk.Label(container, text="Hello inside the container!", bg="lightblue")
label.pack(pady=5)

button = tk.Button(container, text="Click Me")
button.pack(pady=5)

# Run the application
root.mainloop()



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

