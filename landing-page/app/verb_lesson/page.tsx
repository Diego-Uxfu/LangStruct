"use client";

import { useState, useEffect } from "react";

export default function VerbLessonPage() {
  const [currentVerb, setCurrentVerb] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | { is_correct: boolean; correct_answer: string }>(null);

  // Fetch a new random verb
  const loadVerb = async () => {
    const res = await fetch("http://localhost:5000/random_verb");
    const data = await res.json();
    setCurrentVerb(data.verb);
    setText("");
    setResult(null);
  };

  // Load first verb on page load
  useEffect(() => {
    loadVerb();
  }, []);

  // Submit the user's answer
  const checkAnswer = async () => {
    const res = await fetch("http://localhost:5000/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verb: currentVerb,
        user_answer: text,
      }),
    });

    const data = await res.json();
    setResult(data);

    // Automatically load next verb after 2 seconds
    setTimeout(() => loadVerb(), 2000);
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

          {/* (your rules list unchanged) */}
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
            Conjugate the verb: <span className="font-bold">{currentVerb || "Loading..."}</span>
          </p>

          {/* User input */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type past form here..."
            className="w-full max-w-md p-4 border border-gray-300 dark:border-zinc-700
                       rounded-lg text-black dark:text-white bg-white dark:bg-zinc-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <button
            onClick={checkAnswer}
            className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </button>

          {/* Result */}
          {result && (
            <p className="mt-6 text-2xl font-semibold">
              {result.is_correct ? (
                <span className="text-green-600">Correct!</span>
              ) : (
                <span className="text-red-600">
                  Incorrect — correct answer: {result.correct_answer}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
