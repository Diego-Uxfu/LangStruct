import tkinter as tk
from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice
import tagSentence

# Create main window
root = tk.Tk()
root.title("LangStruct")
root.geometry("700x500")

# Create a Frame (the container)
container = tk.Frame(root, bg="lightblue", padx=5, pady=5)
container.pack(fill="both", expand=True, padx=5, pady=5)

# Add widgets *inside* the container
label = tk.Label(container, text="Hello inside the container!", bg="lightblue")
label.pack(pady=5)

# changed code: replace button with an input Entry
entry = tk.Entry(container, width=40)
entry.pack(pady=5)
entry.insert(0, "Type here...")

def on_enter(event):
    tagSentence(entry.get())

# Run the application
root.mainloop()

