import tkinter as tk
from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice
import tagSentence
import cfg

# Create main window
root = tk.Tk()
root.title("LangStruct")
root.geometry("700x500")

# Create a Frame (the container)
container = tk.Frame(root, bg="white", padx=5, pady=5)
container.pack(fill="both", expand=True, padx=5, pady=5)

# Add widgets *inside* the container
label = tk.Label(container, text="Hello inside the container!", bg="lightblue")
label.pack(pady=5)
checker = cfg.CheckSentence()
# changed code: replace button with an input Entry
entry = tk.Entry(container, width=40)
entry.pack(pady=5)
entry.insert(0, "")

def on_enter(event):
      # Get the text
    sentence = entry.get()
    
    # Run POS tagger
    print(sentence)
    tags = tagSentence.tagSentence(sentence)
    tag_strs = [t for t in tags]

    
    print("Tags:", tags)

    # Run CFG checker
    valid = checker.check(tag_strs)
    print("Valid sentence?", valid)
entry.bind("<Return>", on_enter)


# Run the application
root.mainloop()

