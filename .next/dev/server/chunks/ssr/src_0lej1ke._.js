module.exports = [
"[project]/src/components/ProjectsView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsView",
    ()=>ProjectsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ProjectsView = ()=>{
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].filter((p)=>{
        if (activeFilter === 'ALL') return true;
        return p.category === activeFilter;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-[#D9D3C7]/40 pb-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[#B5573B]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-xl",
                                children: "terminal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsView.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-garamond text-2xl font-bold tracking-tight text-[#2B211A]",
                                children: "AHMTSTIA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsView.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsView.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-hanken text-xs uppercase tracking-widest text-[#55423d] font-bold",
                        children: "PORTFOLIO ARCHIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsView.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsView.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-2 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-baseline border-b border-[#D9D3C7]/40 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-garamond text-3xl sm:text-5xl font-bold text-[#2B211A]",
                            children: "Selected Work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsView.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-hanken text-xs sm:text-sm font-bold text-[#625e52]",
                            children: [
                                "01 / 0",
                                filteredProjects.length || 6
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsView.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectsView.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsView.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-8 overflow-x-auto hide-scrollbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 whitespace-nowrap min-w-max pb-2",
                    children: [
                        'ALL',
                        'WEB',
                        'MOBILE',
                        'UI'
                    ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveFilter(filter),
                            className: `px-5 py-2.5 rounded-full font-hanken text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${activeFilter === filter ? 'bg-[#B5573B] text-white shadow-[0_4px_12px_rgba(181,87,59,0.25)]' : 'bg-[#E8E3DB] text-[#55423d] border border-[#D9D3C7] hover:bg-[#F5F1EA]'}`,
                            children: filter
                        }, filter, false, {
                            fileName: "[project]/src/components/ProjectsView.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsView.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsView.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-16",
                children: filteredProjects.map((project, index)=>{
                    // Add asymmetric layout variation for desktop
                    const isOffsetRight = index % 3 === 1;
                    const isWideCard = index % 3 === 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${project.id}`,
                        className: `group cursor-pointer block ${isOffsetRight ? 'md:translate-y-4' : ''} ${isWideCard ? 'lg:col-span-1' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-[#E8E3DB] p-3 border border-[#D9D3C7] shadow-[0_4px_20px_rgba(43,33,26,0.06)] hover:shadow-[0_8px_30px_rgba(43,33,26,0.12)] transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#F5F1EA]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.image,
                                            alt: project.title,
                                            loading: "lazy",
                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 bg-[#F5F1EA]/90 backdrop-blur-sm rounded-full p-2.5 text-[#B5573B] shadow-sm group-hover:bg-[#B5573B] group-hover:text-white transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-lg",
                                                children: "arrow_outward"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectsView.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4 bg-[#B5573B] text-white text-[10px] uppercase font-hanken font-bold tracking-widest px-3 py-1 rounded-full shadow-sm",
                                            children: "Featured"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsView.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-garamond text-2xl font-bold text-[#2B211A] group-hover:text-[#B5573B] transition-colors leading-tight",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsView.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-hanken text-xs font-bold text-[#89726c]",
                                                    children: project.year
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsView.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-hanken text-xs text-[#55423d] mb-4 line-clamp-2 leading-relaxed",
                                            children: project.shortDescription
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-wrap",
                                            children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full bg-[#E6DFD0]/80 text-[#676256] font-hanken text-[10px] font-bold tracking-wider border border-[#D9D3C7]",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/src/components/ProjectsView.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectsView.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectsView.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsView.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, project.id, false, {
                        fileName: "[project]/src/components/ProjectsView.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsView.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsView.tsx",
        lineNumber: 16,
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

//# sourceMappingURL=src_0lej1ke._.js.map