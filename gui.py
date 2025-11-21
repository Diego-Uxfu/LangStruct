import tkinter as tk
from nltk import CFG
from nltk.parse import EarleyChartParser
from nltk.grammar import Nonterminal
from random import choice

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

button = tk.Button(container, text="Click Me")
button.pack(pady=5)

# Run the application
root.mainloop()
