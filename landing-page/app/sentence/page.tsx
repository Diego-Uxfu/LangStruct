"use client";

import { useState } from "react";

export default function SentenceAnalysisPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);

    try {
      // Connects to your Flask backend (api.py)
      const res = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Could not connect to the Python backend. Is api.py running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6">
      <div className="w-full max-w-5xl flex gap-8">

        {/* LEFT SIDEBAR - Keeping your rules as reference */}
        <div className="w-1/3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700
                        rounded-xl shadow-md p-6 h-[600px] overflow-y-auto hidden md:block">

          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
            Reference Rules
          </h2>

          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-7 text-sm">
            <li><strong>Subject-Verb Agreement</strong><br/>Simple sentences usually follow Noun → Verb.<br/><em>The cat sleeps.</em></li>
            <li><strong>Determiners</strong><br/>Articles (the, a) usually precede Nouns.<br/><em>The dog...</em></li>
            <li><strong>Prepositions</strong><br/>Link nouns to other words.<br/><em>...jumps over the fence.</em></li>
            <li><strong>Verb Forms</strong><br/>Verbs ending in 's' are usually 3rd person singular.<br/><em>He runs.</em></li>
            <li><strong>Morphology</strong><br/>Words ending in 'ed' are often past tense verbs.<br/><em>It happened.</em></li>
          </ul>
        </div>

        {/* RIGHT CONTENT AREA - The Analyzer */}
        <div className="flex-1 flex flex-col items-center bg-white dark:bg-zinc-900
                        rounded-xl shadow-md p-10 min-h-[600px]">

          <h1 className="text-3xl font-bold mb-2 text-black dark:text-zinc-50">
            NLP Sentence Analyzer
          </h1>
          <p className="text-zinc-500 mb-8">
            Type a sentence to see how the CRF model tags it.
          </p>

          {/* Submission Form */}
          <div className="w-full max-w-lg flex gap-2 mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., The quick fox jumps over the dog"
              className="flex-1 p-3 border border-gray-300 dark:border-zinc-700
                       rounded-lg text-black dark:text-white bg-white dark:bg-zinc-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
            />
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium 
                         hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loading ? "..." : "Analyze"}
            </button>
          </div>

          {/* Results Display */}
          {result && (
            <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Tags Visualization */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {result.tags?.map(([word, tag]: [string, string], i: number) => (
                  <div key={i} className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 
                                          px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <span className="font-bold text-lg text-black dark:text-white">{word}</span>
                    <span className={`text-xs font-mono font-bold mt-1 px-2 py-0.5 rounded
                      ${tag.startsWith('V') ? 'bg-green-100 text-green-700' : 
                        tag.startsWith('N') ? 'bg-blue-100 text-blue-700' :
                        tag === 'DET' || tag === 'DT' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Validity Check */}
              <div className={`p-4 rounded-lg border text-center font-medium
                ${result.isValid 
                  ? "bg-green-50 border-green-200 text-green-700" 
                  : "bg-red-50 border-red-200 text-red-700"
                }`}>
                Grammatical Validity: {result.isValid ? "Valid Structure" : "Invalid Structure"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}