"use client";
import { useState } from "react";

export default function MyPage() {
  const [text, setText] = useState("");

  return (
    <div className="p-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
        className="w-full p-3 border rounded-lg text-black"
      />

      <p className="mt-3">You typed: {text}</p>
    </div>
  );
}
