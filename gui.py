import tkinter as tk


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


