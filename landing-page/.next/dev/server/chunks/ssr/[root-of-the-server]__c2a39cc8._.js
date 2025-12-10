module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SentenceBuilderPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SentenceBuilderPage() {
    const [words, setWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedIndex, setDraggedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- 1. Fetch & Scramble New Sentence ---
    const loadNewGame = async ()=>{
        setLoading(true);
        setResult(null);
        try {
            // Fetch from the generator endpoint
            const res = await fetch("http://127.0.0.1:5000/generate");
            const data = await res.json();
            // The backend might return a string "sentence" or a list "words"
            let rawWords = [];
            if (data.words) {
                rawWords = data.words;
            } else if (data.sentence) {
                // Strip the period for the game tiles
                rawWords = data.sentence.replace('.', '').split(' ');
            } else {
                // Fallback if backend isn't connected yet
                rawWords = [
                    "The",
                    "cat",
                    "sleeps",
                    "quickly"
                ];
            }
            // Scramble the words randomly
            const scrambled = [
                ...rawWords
            ].sort(()=>Math.random() - 0.5);
            setWords(scrambled);
        } catch (error) {
            console.error("Error fetching sentence:", error);
            // Fallback UI to prevent blank screen
            setWords([
                "Error:",
                "Backend",
                "Not",
                "Connected"
            ]);
        } finally{
            setLoading(false);
        }
    };
    // Load a new game immediately when the page opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadNewGame();
    }, []);
    // --- 2. Drag & Drop Logic ---
    const handleDragStart = (index)=>{
        setDraggedIndex(index);
    };
    const handleDragOver = (e)=>{
        e.preventDefault(); // Necessary to allow dropping
    };
    const handleDrop = (dropIndex)=>{
        if (draggedIndex === null || draggedIndex === dropIndex) return;
        const newWords = [
            ...words
        ];
        // Remove the dragged word from its old position
        const [draggedWord] = newWords.splice(draggedIndex, 1);
        // Insert it at the new position
        newWords.splice(dropIndex, 0, draggedWord);
        setWords(newWords);
        setDraggedIndex(null);
    };
    // --- 3. Check Sentence Validity ---
    const handleCheck = async ()=>{
        setLoading(true);
        // Reconstruct the sentence string and add a period for validity checking
        const sentence = words.join(" ") + ".";
        try {
            const res = await fetch("http://127.0.0.1:5000/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: sentence
                })
            });
            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error("Error checking sentence:", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl w-full text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4 text-black dark:text-white",
                        children: "Sentence Scramble"
                    }, void 0, false, {
                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600 dark:text-zinc-400",
                        children: "Drag the words to fix the sentence structure."
                    }, void 0, false, {
                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800    rounded-2xl shadow-xl p-8 w-full max-w-4xl min-h-[400px] flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-3 mb-10 p-6 bg-zinc-100 dark:bg-zinc-950    rounded-xl w-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 min-h-[120px] items-center",
                        children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                draggable: true,
                                onDragStart: ()=>handleDragStart(index),
                                onDragOver: handleDragOver,
                                onDrop: ()=>handleDrop(index),
                                className: `
                px-6 py-3 bg-white dark:bg-zinc-800 text-lg font-bold rounded-lg shadow-sm
                cursor-grab active:cursor-grabbing border border-zinc-300 dark:border-zinc-600
                transition-all hover:scale-105 select-none
                ${draggedIndex === index ? "opacity-50 scale-95 border-blue-500" : "opacity-100"}
              `,
                                children: word
                            }, index, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadNewGame,
                                className: "px-6 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors",
                                children: "New Sentence"
                            }, void 0, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCheck,
                                disabled: loading,
                                className: "px-8 py-2 rounded-lg bg-blue-600 text-white font-semibold    hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-95 disabled:bg-gray-400",
                                children: loading ? "Checking..." : "Check Syntax"
                            }, void 0, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-xl border text-center mb-6 
              ${result.isValid ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300" : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    children: result.isValid ? "🎉 Correct Structure!" : "❌ Invalid Structure"
                                }, void 0, false, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                                children: result.tags?.map(([word, tag], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center bg-zinc-50 dark:bg-zinc-800 p-3 rounded border border-zinc-200 dark:border-zinc-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-black dark:text-white",
                                                children: word
                                            }, void 0, false, {
                                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-mono font-bold mt-1 px-2 py-0.5 rounded
                      ${tag.startsWith('V') ? 'bg-green-100 text-green-700' : tag.startsWith('N') ? 'bg-blue-100 text-blue-700' : tag === 'DET' || tag === 'DT' ? 'bg-purple-100 text-purple-700' : 'bg-gray-200 text-gray-500'}`,
                                                children: tag
                                            }, void 0, false, {
                                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/projectnlp/LangStruct/landing-page/app/lesson/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c2a39cc8._.js.map