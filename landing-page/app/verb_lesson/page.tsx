"use client";

import { useState } from "react";

export default function VerbLessonPage() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6">

      {/* Main container: 2 columns */}
      <div className="w-full max-w-5xl flex gap-8">

        {/* LEFT SIDEBAR */}
        <div className="w-1/3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700
                        rounded-xl shadow-md p-6 h-[600px] overflow-y-auto">

          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
            Verb Rules (Regular Past Tense)
          </h2>

          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-7">

            <li>
              <strong>If verb ends in: <code>e</code></strong><br />
              → Add <code>d</code> to the end
              <br />
              <em>Example:</em> <code>love → loved</code>
            </li>

            <li>
              <strong>If verb ends in: any vowel except <code>e</code></strong><br />
              → Add <code>ed</code>
              <br />
              <em>Example:</em> <code>echo → echoed</code>
            </li>

            <li>
              <strong>If verb ends in: vowel + <code>x, y, z</code></strong><br />
              → Add <code>ed</code>
              <br />
              <em>Examples:</em> <code>play → played</code>, <code>fix → fixed</code>
            </li>

            <li>
              <strong>If verb ends in: consonant + <code>y</code></strong><br />
              → Change <code>y → i</code> + <code>ed</code>
              <br />
              <em>Example:</em> <code>cry → cried</code>
            </li>

            <li>
              <strong>If verb ends in: vowel + vowel + consonant</strong><br />
              → Add <code>ed</code>
              <br />
              <em>Example:</em> <code>recruit → recruited</code>
            </li>

            <li>
              <strong>If verb ends in: stressed C + V + C</strong><br />
              → Double final consonant + <code>ed</code>
              <br />
              <em>Example:</em> <code>occur → occurred</code>
            </li>

            <li>
              <strong>If verb ends in: **unstressed** C + V + C</strong><br />
              → Add <code>ed</code> (no doubling)
              <br />
              <em>Example:</em> <code>happen → happened</code>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE (Main Lesson Area) */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-900
                        rounded-xl shadow-md p-10">

          <h1 className="text-3xl font-bold mb-6 text-black dark:text-zinc-50">
            Verb Forms Lesson
          </h1>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your verb here..."
            className="w-full max-w-md p-4 border border-gray-300 dark:border-zinc-700
                       rounded-lg text-black dark:text-white bg-white dark:bg-zinc-800
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            You typed: <span className="font-medium">{text || "..."}</span>
          </p>

        </div>
      </div>
    </div>
  );
}
