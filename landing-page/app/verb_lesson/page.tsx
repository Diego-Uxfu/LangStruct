"use client";

import { useState, useEffect } from "react";

export default function VerbLessonPage() {
  const [currentVerb, setCurrentVerb] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | { is_correct: boolean; correct_answer: string }>(null);

  // Use 127.0.0.1 to avoid localhost resolution issues on Mac
  const API_BASE = "http://127.0.0.1:5000";

  // Fetch a new random verb
  const loadVerb = async () => {
    try {
      const res = await fetch(`${API_BASE}/random_verb`);
      if (!res.ok) throw new Error("Failed to fetch verb");
      const data = await res.json();
      setCurrentVerb(data.verb);
      setText("");
      setResult(null);
    } catch (error) {
      console.error("Error loading verb:", error);
    }
  };

  // Load first verb on page load
  useEffect(() => {
    loadVerb();
  }, []);

  // Submit the user's answer
  const checkAnswer = async () => {
    if (!text) return; // Don't submit empty answers

    try {
      // FIX: Changed endpoint from /random_verb to /check
      const res = await fetch(`${API_BASE}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verb: currentVerb,
          user_answer: text,
        }),
      });

      if (!res.ok) throw new Error("Failed to check answer");

      const data = await res.json();
      setResult(data);

      // Automatically load next verb after 2 seconds if correct (optional UX choice)
      // or just wait for user to click next.
      // Uncomment below if you want auto-advance on correct answer only:
      // if (data.is_correct) {
      //   setTimeout(() => loadVerb(), 1500);
      // }
      
      // Current behavior: Auto advance regardless of result
      setTimeout(() => loadVerb(), 2000);

    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6">
      <div className="w-full max-w-5xl flex gap-8">

        {/* LEFT SIDEBAR */}
        <div className="w-1/3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700
                        rounded-xl shadow-md p-6 h-[600px] overflow-y-auto">

          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
            Verb Rules (Regular Past Tense)
          </h2>

          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-7">
            <li><strong>If verb ends in: <code>e</code></strong><br/>→ Add <code>d</code><br/><em>love → loved</em></li>
            <li><strong>If verb ends in: any vowel except <code>e</code></strong><br/>→ Add <code>ed</code><br/><em>echo → echoed</em></li>
            <li><strong>vowel + x/y/z</strong><br/>→ Add <code>ed</code><br/><em>play → played</em></li>
            <li><strong>consonant + y</strong><br/>→ y → i + ed<br/><em>cry → cried</em></li>
            <li><strong>vowel + vowel + consonant</strong><br/>→ +ed<br/><em>recruit → recruited</em></li>
            <li><strong>stressed CVC</strong><br/>→ double + ed<br/><em>occur → occurred</em></li>
            <li><strong>unstressed CVC</strong><br/>→ +ed<br/><em>happen → happened</em></li>
          </ul>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-900
                        rounded-xl shadow-md p-10">

          <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">
            Verb Forms Lesson
          </h1>

          {/* Display current verb */}
          <p className="text-xl mb-4 text-zinc-600 dark:text-zinc-300">
            Conjugate the verb: <span className="font-bold text-blue-600 dark:text-blue-400">{currentVerb || "Loading..."}</span>
          </p>

          {/* User input */}
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
              placeholder="Type past form here..."
              className="flex-1 p-4 border border-gray-300 dark:border-zinc-700
                         rounded-lg text-black dark:text-white bg-white dark:bg-zinc-800
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Submit Button */}
            <button
              onClick={checkAnswer}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold"
            >
              Submit
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className={`mt-8 p-4 rounded-lg border w-full max-w-md text-center ${
              result.is_correct 
                ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" 
                : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
            }`}>
              <p className="text-xl font-bold">
                {result.is_correct ? (
                  <span className="text-green-700 dark:text-green-400">Correct!</span>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-red-700 dark:text-red-400 mb-1">Incorrect</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      The correct answer is: <strong>{result.correct_answer}</strong>
                    </span>
                  </div>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}