module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerbLessonPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/projectnlp/LangStruct/landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function VerbLessonPage() {
    const [currentVerb, setCurrentVerb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Use 127.0.0.1 to avoid localhost resolution issues on Mac
    const API_BASE = "http://127.0.0.1:5000";
    // Fetch a new random verb
    const loadVerb = async ()=>{
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadVerb();
    }, []);
    // Submit the user's answer
    const checkAnswer = async ()=>{
        if (!text) return; // Don't submit empty answers
        try {
            // FIX: Changed endpoint from /random_verb to /check
            const res = await fetch(`${API_BASE}/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    verb: currentVerb,
                    user_answer: text
                })
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
            setTimeout(()=>loadVerb(), 2000);
        } catch (error) {
            console.error("Error checking answer:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-5xl flex gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1/3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700   rounded-xl shadow-md p-6 h-[600px] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold mb-4 text-black dark:text-zinc-50",
                            children: "Verb Rules (Regular Past Tense)"
                        }, void 0, false, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 text-zinc-700 dark:text-zinc-300 leading-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "If verb ends in: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "e"
                                                }, void 0, false, {
                                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 65
                                        }, this),
                                        "→ Add ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "d"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 76
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 90
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "love → loved"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 95
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "If verb ends in: any vowel except ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "e"
                                                }, void 0, false, {
                                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 82
                                        }, this),
                                        "→ Add ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "ed"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 93
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 108
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "echo → echoed"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "vowel + x/y/z"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 47
                                        }, this),
                                        "→ Add ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "ed"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 58
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "play → played"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 78
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "consonant + y"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 47
                                        }, this),
                                        "→ y → i + ed",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "cry → cried"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "vowel + vowel + consonant"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 59
                                        }, this),
                                        "→ +ed",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 69
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "recruit → recruited"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 74
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "stressed CVC"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 46
                                        }, this),
                                        "→ double + ed",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "occur → occurred"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "unstressed CVC"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 48
                                        }, this),
                                        "→ +ed",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 58
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "happen → happened"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 63
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center bg-white dark:bg-zinc-900   rounded-xl shadow-md p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-6 text-black dark:text-zinc-50",
                            children: "Verb Forms Lesson"
                        }, void 0, false, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl mb-4 text-zinc-600 dark:text-zinc-300",
                            children: [
                                "Conjugate the verb: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-blue-600 dark:text-blue-400",
                                    children: currentVerb || "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 w-full max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: text,
                                    onChange: (e)=>setText(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && checkAnswer(),
                                    placeholder: "Type past form here...",
                                    className: "flex-1 p-4 border border-gray-300 dark:border-zinc-700   rounded-lg text-black dark:text-white bg-white dark:bg-zinc-800   focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: checkAnswer,
                                    className: "px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-8 p-4 rounded-lg border w-full max-w-md text-center ${result.is_correct ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold",
                                children: result.is_correct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-700 dark:text-green-400",
                                    children: "Correct!"
                                }, void 0, false, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-700 dark:text-red-400 mb-1",
                                            children: "Incorrect"
                                        }, void 0, false, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                                            children: [
                                                "The correct answer is: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$projectnlp$2f$LangStruct$2f$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: result.correct_answer
                                                }, void 0, false, {
                                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/projectnlp/LangStruct/landing-page/app/verb_lesson/page.tsx",
        lineNumber: 68,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0803d948._.js.map