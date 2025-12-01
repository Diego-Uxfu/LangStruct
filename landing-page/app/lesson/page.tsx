"use client";

import { useState, useEffect } from "react";

export default function SentenceBuilderPage() {
  const [words, setWords] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // --- 1. Fetch & Scramble New Sentence ---
  const loadNewGame = async () => {
    setLoading(true);
    setResult(null);
    try {
      // Fetch from the generator endpoint
      const res = await fetch("http://127.0.0.1:5000/generate");
      const data = await res.json();
      
      // The backend might return a string "sentence" or a list "words"
      let rawWords: string[] = [];
      if (data.words) {
        rawWords = data.words;
      } else if (data.sentence) {
        // Strip the period for the game tiles
        rawWords = data.sentence.replace('.', '').split(' '); 
      } else {
        // Fallback if backend isn't connected yet
        rawWords = ["The", "cat", "sleeps", "quickly"]; 
      }

      // Scramble the words randomly
      const scrambled = [...rawWords].sort(() => Math.random() - 0.5);
      setWords(scrambled);

    } catch (error) {
      console.error("Error fetching sentence:", error);
      // Fallback UI to prevent blank screen
      setWords(["Error:", "Backend", "Not", "Connected"]);
    } finally {
      setLoading(false);
    }
  };

  // Load a new game immediately when the page opens
  useEffect(() => {
    loadNewGame();
  }, []);

  // --- 2. Drag & Drop Logic ---
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newWords = [...words];
    // Remove the dragged word from its old position
    const [draggedWord] = newWords.splice(draggedIndex, 1);
    // Insert it at the new position
    newWords.splice(dropIndex, 0, draggedWord);

    setWords(newWords);
    setDraggedIndex(null);
  };

  // --- 3. Check Sentence Validity ---
  const handleCheck = async () => {
    setLoading(true);
    // Reconstruct the sentence string and add a period for validity checking
    const sentence = words.join(" ") + "."; 

    try {
      const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: sentence }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error checking sentence:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6 font-sans">
      
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          Sentence Scramble
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Drag the words to fix the sentence structure.
        </p>
      </div>

      {/* --- Game Board --- */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
                      rounded-2xl shadow-xl p-8 w-full max-w-4xl min-h-[400px] flex flex-col items-center">
        
        {/* Draggable Words Container */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 p-6 bg-zinc-100 dark:bg-zinc-950 
                        rounded-xl w-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 min-h-[120px] items-center">
          {words.map((word, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className={`
                px-6 py-3 bg-white dark:bg-zinc-800 text-lg font-bold rounded-lg shadow-sm
                cursor-grab active:cursor-grabbing border border-zinc-300 dark:border-zinc-600
                transition-all hover:scale-105 select-none
                ${draggedIndex === index ? "opacity-50 scale-95 border-blue-500" : "opacity-100"}
              `}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={loadNewGame}
            className="px-6 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
          >
            New Sentence
          </button>
          
          <button
            onClick={handleCheck}
            disabled={loading}
            className="px-8 py-2 rounded-lg bg-blue-600 text-white font-semibold 
                       hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:bg-gray-400"
          >
            {loading ? "Checking..." : "Check Syntax"}
          </button>
        </div>

        {/* --- Results Section --- */}
        {result && (
          <div className="mt-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Success/Fail Banner */}
            <div className={`p-4 rounded-xl border text-center mb-6 
              ${result.isValid 
                ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300" 
                : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
              }`}>
              <h3 className="text-xl font-bold">
                {result.isValid ? "🎉 Correct Structure!" : "❌ Invalid Structure"}
              </h3>
            </div>

            {/* POS Tag Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {result.tags?.map(([word, tag]: [string, string], i: number) => (
                <div key={i} className="flex flex-col items-center bg-zinc-50 dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700">
                  <span className="font-medium text-black dark:text-white">{word}</span>
                  <span className={`text-xs font-mono font-bold mt-1 px-2 py-0.5 rounded
                      ${tag.startsWith('V') ? 'bg-green-100 text-green-700' : 
                        tag.startsWith('N') ? 'bg-blue-100 text-blue-700' :
                        tag === 'DET' || tag === 'DT' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-200 text-gray-500'
                      }`}>
                      {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}