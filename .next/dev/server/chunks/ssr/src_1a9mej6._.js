module.exports = [
"[project]/src/components/AboutView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutView",
    ()=>AboutView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CvModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CvModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProcessModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProcessModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const AboutView = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isCvOpen, setIsCvOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessOpen, setIsProcessOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 sm:mb-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-7 order-2 md:order-1 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-hanken text-xs uppercase tracking-widest text-[#B5573B] font-bold block mb-3",
                                children: "BIOGRAPHY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-garamond text-4xl sm:text-6xl lg:text-7xl text-[#2B211A] font-bold mb-6 leading-[1.1]",
                                children: [
                                    "The Person",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 24,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Behind The Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-hanken text-base sm:text-lg text-[#55423d] max-w-2xl mb-8 leading-relaxed",
                                children: "I believe that exceptional digital experiences are born from a deep understanding of human behavior, married with rigorous technical execution. My approach is rooted in minimalism, prioritizing clarity and tactile feedback over superficial decoration."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsCvOpen(true),
                                        className: "bg-[#B5573B] text-white font-hanken text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#963f26] transition-all active:scale-95 cursor-pointer shadow-sm",
                                        children: "Download CV"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsProcessOpen(true),
                                        className: "bg-[#F5F1EA] text-[#2B211A] border border-[#D9D3C7] font-hanken text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#E8E3DB] transition-all active:scale-95 cursor-pointer",
                                        children: "View Process"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutView.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-5 order-1 md:order-2 relative mb-6 md:mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(43,33,26,0.12)] border border-[#D9D3C7]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ABOUT_IMAGE"],
                                    alt: "ahmtstia",
                                    loading: "eager",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#B5573B] rounded-full opacity-50 -z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 -left-4 w-16 h-16 bg-[#B5573B] opacity-20 rounded-full blur-xl -z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutView.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "border-[#D9D3C7] mb-16 sm:mb-20 w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/AboutView.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-garamond text-3xl sm:text-4xl text-[#2B211A] font-bold mb-10",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative timeline-line pl-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXPERIENCES"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-12 pl-12 group last:mb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F5F1EA] border-2 border-[#B5573B] z-10 group-hover:bg-[#B5573B] transition-colors duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutView.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-hanken text-lg font-bold text-[#2B211A]",
                                                        children: exp.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutView.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-hanken text-[11px] font-bold tracking-widest text-[#55423d] bg-[#E8E3DB] px-3 py-1 rounded-full w-fit border border-[#D9D3C7]/60",
                                                        children: exp.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutView.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutView.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-hanken text-sm sm:text-base text-[#55423d] leading-relaxed",
                                                children: exp.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutView.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, exp.id, true, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutView.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-5 mt-6 md:mt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-garamond text-3xl sm:text-4xl text-[#2B211A] font-bold mb-10",
                                children: "Toolkit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#E8E3DB] rounded-2xl p-6 sm:p-8 border border-[#D9D3C7] shadow-[0_4px_20px_rgba(43,33,26,0.06)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-hanken text-sm text-[#55423d] mb-6 italic font-medium",
                                        children: "Proficiencies graded by visual weight."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SKILLS"].map((skill)=>{
                                            if (skill.level === 'expert') {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-hanken text-sm sm:text-base text-[#B5573B] bg-[#B5573B]/10 px-4 py-2 rounded-full font-bold border border-[#B5573B]/30 hover:bg-[#B5573B] hover:text-white transition-all cursor-default",
                                                    children: skill.name
                                                }, skill.name, false, {
                                                    fileName: "[project]/src/components/AboutView.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                            if (skill.level === 'advanced') {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-hanken text-xs sm:text-sm text-[#2B211A] bg-[#2B211A]/10 px-3.5 py-1.5 rounded-full font-semibold border border-[#2B211A]/20 hover:bg-[#2B211A] hover:text-white transition-all cursor-default",
                                                    children: skill.name
                                                }, skill.name, false, {
                                                    fileName: "[project]/src/components/AboutView.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-hanken text-xs text-[#65584f] bg-[#65584f]/10 px-3 py-1 rounded-full font-medium border border-[#65584f]/20 hover:bg-[#65584f] hover:text-white transition-all cursor-default",
                                                children: skill.name
                                            }, skill.name, false, {
                                                fileName: "[project]/src/components/AboutView.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutView.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutView.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutView.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutView.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CvModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CvModal"], {
                isOpen: isCvOpen,
                onClose: ()=>setIsCvOpen(false),
                onContactClick: ()=>router.push('/contact')
            }, void 0, false, {
                fileName: "[project]/src/components/AboutView.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProcessModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessModal"], {
                isOpen: isProcessOpen,
                onClose: ()=>setIsProcessOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutView.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutView.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/CvModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvModal",
    ()=>CvModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CvModal = ({ isOpen, onClose, onContactClick })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#F5F1EA] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-[#D9D3C7] shadow-[0_12px_40px_rgba(43,33,26,0.2)] relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-5 right-5 w-10 h-10 rounded-full bg-[#E8E3DB] hover:bg-[#B5573B] hover:text-white transition-colors flex items-center justify-center text-[#2B211A] cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-xl",
                        children: "close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CvModal.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-[#D9D3C7] pb-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-hanken text-xs uppercase tracking-widest text-[#B5573B] font-bold block mb-1",
                            children: "CURRICULUM VITAE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-garamond text-3xl font-bold text-[#2B211A]",
                            children: "ahmtstia"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-hanken text-sm text-[#55423d]",
                            children: "Fullstack Developer & Creative Technologist • San Francisco, CA"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-2",
                            children: "Executive Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-hanken text-sm text-[#55423d] leading-relaxed",
                            children: "Fullstack engineer with 8+ years of experience engineering high-throughput React/Next.js and WebGL web applications. Specialized in editorial design systems, micro-interactions, and mobile architecture."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-3",
                            children: "Key Accomplishments"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-sm text-[#55423d] font-hanken",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[#B5573B] text-base mt-0.5",
                                            children: "check_circle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CvModal.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Architected MOMA web application redesign boosting visitor engagement by 42%."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[#B5573B] text-base mt-0.5",
                                            children: "check_circle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CvModal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Built FinTech React Native banking suite serving 120,000+ active daily users."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[#B5573B] text-base mt-0.5",
                                            children: "check_circle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CvModal.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Maintained 100/100 Lighthouse performance scores across all client production deployments."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-hanken text-xs uppercase tracking-wider text-[#B5573B] font-bold mb-2",
                            children: "Education"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-baseline font-hanken text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-[#2B211A]",
                                    children: "B.S. in Computer Science & Interaction Design"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#65584f]",
                                    children: "UC Berkeley • 2011 — 2015"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D9D3C7]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "data:text/plain;charset=utf-8,ahmtstia%20-%20Fullstack%20Developer%20CV",
                            download: "ahmtstia_CV.txt",
                            className: "flex-1 bg-[#B5573B] text-white font-hanken text-sm font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#963f26] transition-all text-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-lg",
                                    children: "download"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CvModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Download Full PDF/CV"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onClose();
                                onContactClick();
                            },
                            className: "flex-1 bg-[#E8E3DB] text-[#2B211A] font-hanken text-sm font-semibold py-3 rounded-full border border-[#D9D3C7] hover:bg-[#D9D3C7] transition-all text-center cursor-pointer",
                            children: "Hire ahmtstia"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CvModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CvModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CvModal.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CvModal.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/ProcessModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessModal",
    ()=>ProcessModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ProcessModal = ({ isOpen, onClose })=>{
    if (!isOpen) return null;
    const steps = [
        {
            number: '01',
            title: 'Architectural Discovery',
            description: 'Understanding core business motives, target audience ergonomics, and defining precise technical boundaries.'
        },
        {
            number: '02',
            title: 'Editorial Typography & Design',
            description: 'Crafting bespoke visual hierarchies using high-contrast serif headlines, tactile warm neutrals, and crisp spacing.'
        },
        {
            number: '03',
            title: 'Tactile Engineering',
            description: 'Building robust React & Next.js architectures with fluid WebGL graphics, micro-interactions, and instant state handling.'
        },
        {
            number: '04',
            title: 'Performance & Delivery',
            description: 'Conducting Lighthouse audits, sub-second cold starts, accessibility checks, and automated Cloud Run deployments.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#F5F1EA] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-[#D9D3C7] shadow-[0_12px_40px_rgba(43,33,26,0.2)] relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-5 right-5 w-10 h-10 rounded-full bg-[#E8E3DB] hover:bg-[#B5573B] hover:text-white transition-colors flex items-center justify-center text-[#2B211A] cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-xl",
                        children: "close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProcessModal.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProcessModal.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-hanken text-xs uppercase tracking-widest text-[#B5573B] font-bold block mb-1",
                    children: "METHODOLOGY"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProcessModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-garamond text-3xl font-bold text-[#2B211A] mb-6",
                    children: "Development Process"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProcessModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 mb-8",
                    children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#E8E3DB] p-5 rounded-xl border border-[#D9D3C7] flex gap-4 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-garamond text-3xl font-bold text-[#B5573B]",
                                    children: step.number
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProcessModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-garamond text-xl font-bold text-[#2B211A] mb-1",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProcessModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-hanken text-sm text-[#55423d]",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProcessModal.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProcessModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, step.number, true, {
                            fileName: "[project]/src/components/ProcessModal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProcessModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "w-full bg-[#B5573B] text-white font-hanken text-sm font-semibold py-3 rounded-full hover:bg-[#963f26] transition-all cursor-pointer",
                    children: "Close Process Overview"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProcessModal.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProcessModal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProcessModal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/portfolioData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUT_IMAGE",
    ()=>ABOUT_IMAGE,
    "EXPERIENCES",
    ()=>EXPERIENCES,
    "HERO_IMAGE",
    ()=>HERO_IMAGE,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILLS",
    ()=>SKILLS
]);
const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIPCHTCqix-hDNIBgBaIaISeQKUFf_bzVn3xBzwDzZU7-9NfgmkIn860SMWtVeZC9Iz99DiP2YNElGDqeJEk3EK4yaZtYYrqRGrSV8_Qt9Ep7qo9X_7MFRKEXR4b3vuaBDX1z_sirG8JGcKqrmF996iZ4_0-Yj6GWwiZgTHdK2PcremNj5ipgfW3204LDoW3LQ96yIBEsCDFaroVhIDHJWSuCNGI9EXKsdDyENpd7zcfBKvsV2-4OHg';
const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbfNXevURvOJpyMKwBAOpYdk24jpV55HFHjEutVvvZ_FjiUKWkT1mMb59qFTTTd5Yzp__xjGslgQRPHHM3lFSsv3V7QMEbHD8LBQgce8jkuaMzmrFTpwIPqciD3hO1_lV6pEGgp0ldaZwKFP70GZvt9sYqldunGvLKbNzemdCC2ZKnEIc6xV-975jH9rRNQNgzgAoKFWxpdadapW4HHL-DeC4AcTG3-wr8NCQ_xY6-q4p-9hV9J3YAA';
const PROJECTS = [
    {
        id: 'moma-redesign',
        title: 'Modern Art Museum Redesign',
        client: 'MOMA',
        role: 'Lead Designer & Engineer',
        year: '2023',
        category: 'WEB',
        tags: [
            'REACT',
            'NEXT.JS',
            'TAILWIND CSS'
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBELrkP6OdLGR536ftsPv6dTKWp-9cNyfjev3TqFLXdRt1kiFPn5vd8PkyNouAZoM48HqV65RoDbF0XL7eMz5ZjfMV0SbK8zsDmezLDX9Cfuxqa-Y4YugEYuss4Cf7GIx6ISuS_v1otuI2S0yqi_xyulLuIj_EPti3nrr-3fDosg0mTiIQ6j-4ukxsw346jRJ_KrxWIGPLigVYyuspJLohbLBFCL9eeFTCJ_82DoTY2qr8fNKUVUKkH5g',
        shortDescription: 'A complete digital transformation focusing on a tactile, app-like experience for web visitors.',
        fullDescription: 'A complete digital transformation for the Modern Art Museum, focusing on a tactile, app-like experience for web visitors. The project involved rethinking the ticketing flow, digitizing the archival collection, and creating an immersive editorial experience that mirrors the physical space\'s architectural elegance.',
        techStack: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Framer Motion',
            'Three.js'
        ],
        highlights: [
            {
                title: 'Immersive Discovery',
                description: 'Created a fluid, spatial navigation system allowing users to browse the collection as if walking through the physical galleries.',
                icon: 'auto_awesome'
            },
            {
                title: 'Optimized Performance',
                description: 'Achieved a perfect lighthouse score despite heavy WebGL usage, ensuring a smooth experience across all devices.',
                icon: 'speed'
            }
        ],
        liveUrl: 'https://moma.org',
        caseStudyUrl: '#case-study-moma',
        featured: true
    },
    {
        id: 'fintech-vision',
        title: 'Fintech Vision',
        client: 'Apex Financial',
        role: 'Mobile Architect',
        year: '2023',
        category: 'MOBILE',
        tags: [
            'REACT NATIVE',
            'UX DESIGN'
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy88xSWe9mEiPhUEuPLoNpLN7kjBjWtD3d3cKy-hv-vz6iU8tmuEtFpJZtah2HKnP0RjgUtBuT1jrCLhet5czse9vLIwBhnWOl4kXtBveE4f3sYhTEGeuUlWAdIH_slDrB-TQwLu3Mdd7G4WkfidqqCqnGaI5gqYzBfXfoXA0bmbtwQpIEAQN32YcgfqZK9528RX-CGTnce4_30lFgHOE6LxV8U780kastLxsEzVZM4yKSUzxg7C3Lgg',
        shortDescription: 'Next-generation mobile banking experience built with warm cream aesthetics and biometrics.',
        fullDescription: 'A sleek, modern mobile banking application interface built with warm cream backgrounds, bold serif typography, and tactile burnt terracotta buttons. Features real-time transaction streaming and effortless international fund transfers.',
        techStack: [
            'React Native',
            'Expo',
            'TypeScript',
            'Tailwind',
            'Reanimated'
        ],
        highlights: [
            {
                title: 'Biometric Security',
                description: 'Zero-friction FaceID & TouchID authentication pipeline with hardware enclave encryption.',
                icon: 'fingerprint'
            },
            {
                title: 'Tactile Micro-interactions',
                description: 'Haptic feedback tuned to feel like physical button presses on high-frequency transactions.',
                icon: 'touch_app'
            }
        ],
        liveUrl: 'https://fintechvision.app',
        featured: true
    },
    {
        id: 'artisan-roasters',
        title: 'Artisan Roasters',
        client: 'Stillwater Coffee',
        role: 'Creative Developer',
        year: '2023',
        category: 'WEB',
        tags: [
            'NEXT.JS',
            'TAILWIND'
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABrlbBYDwad3f8_qMnzni7CtClZU6WJlkE-nhiba5ZTcL9mvpzSm_IPgcCNJmRGTb6qgW5V9Dw4PeBu1ilsHgOeKBSkhuQj0RunLXxsyhRSy82AtoGsxDkC_Q7TfOOl-lydIAPNJRLGRJCTbmAmdfkdojXz3KBtzBVCX1OHKZx7UrrN_K2jAHyKUatVvte8mwaXpMJU5frI6YZZ2UMp2aceidhw5DpgXsO8b_bhgaWnl2TT75242O8tQ',
        shortDescription: 'An artisanal coffee e-commerce showcase featuring rich storytelling and single-origin roast selector.',
        fullDescription: 'An editorial showcase of an artisanal coffee shop website shown on a minimalist tablet. The design uses heavy whitespace, fluid grid layouts, and high-contrast espresso-colored serif text over warm cream backgrounds.',
        techStack: [
            'Next.js 14',
            'Tailwind CSS',
            'Shopify Storefront API',
            'Framer Motion'
        ],
        highlights: [
            {
                title: 'Roast Selector',
                description: 'Interactive flavor profile radar chart helping customers find their exact single-origin bean preferences.',
                icon: 'coffee'
            },
            {
                title: 'Sub-second Checkout',
                description: 'Integrated Apple Pay & Google Pay for seamless mobile single-tap coffee subscriptions.',
                icon: 'shopping_bag'
            }
        ],
        liveUrl: 'https://artisanroasters.com',
        featured: true
    },
    {
        id: 'luxe-real-estate',
        title: 'Luxe Real Estate',
        client: 'Elite Estates',
        role: 'Fullstack Lead',
        year: '2022',
        category: 'UI',
        tags: [
            'VUE.JS',
            'WEBGL'
        ],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQpoWDS-JlsM1WlhW1czMC37s7MfiKhRG6kMFKB66lxfSZBmFUJotHlFoAjCmVrKbIpQcqn0OPjDTFdE9yIuE0HfJPLqkWSakryKKPLkXcd5nchwR59CjwBwi_5fxGqzC4xHNPPgH98R--sY2qNWlZtd3ALb2exWsekW5iPieWvRjDffg6tSMNBeorPtSozkYkBBqtSa5iZ3iV2i0CMBal85zRc6rCcCssZyQYldR3gjcbqPCCGm3pwA',
        shortDescription: 'A luxury real estate dashboard with interactive 3D spatial walkthroughs and real-time telemetry.',
        fullDescription: 'A sophisticated dashboard interface for a luxury real estate platform. The UI features asymmetrical bento grid layouts, glassmorphism cards, and thin warm gray dividers against a soft cream background.',
        techStack: [
            'Vue.js 3',
            'Three.js',
            'WebGL',
            'Tailwind CSS',
            'D3.js'
        ],
        highlights: [
            {
                title: '3D Floorplan Viewer',
                description: 'Photorealistic WebGL render of high-value architectural properties with ambient light simulations.',
                icon: 'view_in_ar'
            },
            {
                title: 'Market Intelligence',
                description: 'Predictive valuation analytics with interactive charts and regional demographic heatmaps.',
                icon: 'insights'
            }
        ],
        liveUrl: 'https://luxerealestate.com',
        featured: true
    },
    {
        id: 'tactile-synth',
        title: 'Tactile Sound Engine',
        client: 'AudioLab Studio',
        role: 'Audio/UI Engineer',
        year: '2022',
        category: 'WEB',
        tags: [
            'REACT',
            'WEB AUDIO'
        ],
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
        shortDescription: 'In-browser analog synthesizer synthesizer with real-time WebAudio WebGL waveform visualizers.',
        fullDescription: 'An interactive audio workstation built natively for browser environments. Features multi-oscillator polyphonic synthesis, physical modeled filters, and customizable macro knobs.',
        techStack: [
            'React',
            'Web Audio API',
            'Canvas API',
            'Tailwind CSS'
        ],
        highlights: [
            {
                title: 'Low Latency Audio',
                description: 'Sub-10ms audio buffer processing using AudioWorklet nodes for immediate keyboard response.',
                icon: 'graphic_eq'
            }
        ],
        liveUrl: 'https://tactilesynth.io',
        featured: false
    },
    {
        id: 'editorial-journal',
        title: 'Editorial Publishing CMS',
        client: 'Monocle Press',
        role: 'Fullstack Engineer',
        year: '2021',
        category: 'UI',
        tags: [
            'TYPESCRIPT',
            'GRAPHQL'
        ],
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
        shortDescription: 'Headless publishing engine designed specifically for long-form editorial essays and digital zines.',
        fullDescription: 'Designed and engineered for prestigious publishing houses requiring rich typography controls, real-time co-authoring, and automated print PDF layout generation.',
        techStack: [
            'TypeScript',
            'GraphQL',
            'Tailwind CSS',
            'PostgreSQL'
        ],
        highlights: [
            {
                title: 'Distraction-Free Editor',
                description: 'ProseMirror powered block editor supporting custom typographical scales and footnotes.',
                icon: 'edit_note'
            }
        ],
        liveUrl: 'https://editorialjournal.dev',
        featured: false
    }
];
const EXPERIENCES = [
    {
        id: 'exp-1',
        role: 'Senior Frontend Engineer',
        period: '2021 — PRESENT',
        description: 'Leading UI architecture for premium FinTech applications. Focused on micro-interactions, performance optimization, and bridging the gap between design and engineering.'
    },
    {
        id: 'exp-2',
        role: 'Creative Developer',
        period: '2018 — 2021',
        description: 'Developed award-winning marketing sites and interactive web experiences for boutique agencies. Specialized in WebGL and complex CSS animations.'
    },
    {
        id: 'exp-3',
        role: 'UI Designer',
        period: '2015 — 2018',
        description: 'Started career in product design, establishing a strong foundation in typography, layout, and user empathy before transitioning to code.'
    }
];
const SKILLS = [
    {
        name: 'React & Next.js',
        level: 'expert',
        category: 'Frontend'
    },
    {
        name: 'TypeScript',
        level: 'expert',
        category: 'Language'
    },
    {
        name: 'CSS Architecture',
        level: 'expert',
        category: 'Styling'
    },
    {
        name: 'WebGL & Three.js',
        level: 'advanced',
        category: 'Creative'
    },
    {
        name: 'Figma',
        level: 'advanced',
        category: 'Design'
    },
    {
        name: 'Framer Motion',
        level: 'advanced',
        category: 'Animation'
    },
    {
        name: 'Node.js & Express',
        level: 'advanced',
        category: 'Backend'
    },
    {
        name: 'Python',
        level: 'proficient',
        category: 'Language'
    },
    {
        name: 'GraphQL',
        level: 'proficient',
        category: 'Data'
    },
    {
        name: 'AWS & Cloud Run',
        level: 'proficient',
        category: 'DevOps'
    },
    {
        name: 'Docker',
        level: 'proficient',
        category: 'DevOps'
    }
];
}),
];

//# sourceMappingURL=src_1a9mej6._.js.map