"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n/* harmony import */ var _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/images/articles/article4.png */ \"./public/images/articles/article4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n    }\n    function handleMouseLeave(event) {\n        console.log(event.pageX);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold capitilize hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"absolute hidden h-auto rounded-lg w-96\"\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded=xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                img: img,\n                title: title,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pl-4 font-semibold text-primary\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-b-4 border-r-4 border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"inline-block w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.02\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    summary: \". In this article, we'll delve into some of the more advanced aspects of HTML, CSS, and JavaScript that can elevate your web development skills to the next level.\",\n                                    time: \"25 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"w-full my-16 mt-32 text-4xl font-bold text-center\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                date: \"15 minutes\",\n                                link: \"\",\n                                img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsV0FBVTs7OENBQ1osOERBQUNRO29DQUNDQyxVQUFTO29DQUNUQyxTQUFRO29DQUNSQyxNQUFLO29DQUNMOUIsTUFBSztvQ0FDTEQsS0FBS1YsNEVBQVFBOzs7Ozs7OENBRWYsOERBQUNzQztvQ0FDQ0MsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkMsTUFBSztvQ0FDTDlCLE1BQUs7b0NBQ0xELEtBQUtULDRFQUFRQTs7Ozs7OzhDQUVmLDhEQUFDcUM7b0NBQ0NDLFVBQVM7b0NBQ1RDLFNBQVE7b0NBQ1JDLE1BQUs7b0NBQ0w5QixNQUFLO29DQUNMRCxLQUFLUCw2RUFBUUE7Ozs7Ozs7Ozs7OztzQ0FHakIsOERBQUMwQjs0QkFBR0MsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDbEUsOERBQUN1QjtzQ0FDQyw0RUFBQ25CO2dDQUNEekIsT0FBTTtnQ0FDTjBCLE1BQUs7Z0NBQ0x4QixNQUFLO2dDQUNMRCxLQUFLUiw0RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QjtBQUVBLCtEQUFlNkMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0cyBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGFydGljbGUxIGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlMS5wbmdcIjtcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTIucG5nXCI7XG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUzLnBuZ1wiO1xuaW1wb3J0IGFydGljbGU0IGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlNC5wbmdcIlxuaW1wb3J0IHsgdXNlTW90aW9uVmFsdWUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBGcmFtZXJJbWFnZSA9IG1vdGlvbihJbWFnZSk7XG5jb25zdCBNb3ZpbmdJbWcgPSAoe3RpdGxlLCBpbWcsIGxpbmt9KSA9PiB7XG4gICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2UoZXZlbnQpe1xuICAgICAgICBpbWdSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgeC5zZXQoZXZlbnQucGFnZVgpXG4gICAgICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQucGFnZVgpXG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgY2FwaXRpbGl6ZSBob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxJbWFnZSByZWY9e2ltZ1JlZn0gc3JjPXtpbWd9IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cImFic29sdXRlIGhpZGRlbiBoLWF1dG8gcm91bmRlZC1sZyB3LTk2XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbiAgICBcbn1cblxuY29uc3QgQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSAsIGRhdGUgLCBsaW5rfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQ9eGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0IHRleHQtZGFyayBmaXJzdDptdC0wIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYm9yZGVyLXItNCBib3JkZXItYi00XCI+XG4gICAgICAgIDxNb3ZpbmdJbWcgaW1nPXtpbWd9IHRpdGxlPXt0aXRsZX0gbGluaz17bGlua30gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtNCBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeVwiPntkYXRlfTwvc3Bhbj5cbiAgICA8L2xpPlxuXG4gICAgXG4gICAgICAgIClcbiAgICBcbn1cblxuY29uc3QgRmVhdHVyZWRBcnRpY2xlID0gKHsgYXJ0VGl0bGUsIHN1bW1hcnksIGltZywgbGluaywgdGltZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCBjb2wtc3Bhbi0xIHAtOCBib3JkZXIgYm9yZGVyLWItNCBib3JkZXItci00IGJvcmRlci1zb2xpZCBiZy1saWdodCBib3JkZXItZGFyayByb3VuZGVkLTJ4bFwiPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgPlxuICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17YXJ0VGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxuICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAyIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0yIHRleHQtMnhsIGZvbnQtYm9sZCBjYXBpdGFsaXplIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIHthcnRUaXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbVwiPntzdW1tYXJ5fTwvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5IFwiPnt0aW1lfTwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QUggfHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJQb3J0Zm9saW9cIiBjb250ZW50PVwiY3YgcG9ydGZvbGlvIG1hZGUgd2l0aCByZWFjdC9uZXh0anNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1iLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dHNcbiAgICAgICAgICAgIHRleHQ9XCLigJxUaGFua3MgdG8gVGVjaCwgd2UgY2FuIG5vdyBsZWFybiBhbnl0aGluZyBhbnl3aGVyZS7igJ1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiU28geW91IHdhbnQgdG8gYmUgYSBTb2Z0d2FyZSBFbmdpbmVlcj9cIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiV2hldGhlciB5b3UncmUganVzdCBzdGFydGluZyBvdXQgb3IgY29uc2lkZXJpbmcgYSBjYXJlZXIgc3dpdGNoLCBoZXJlIGFyZSB0aGUgZXNzZW50aWFsIGZpcnN0IHN0ZXBzIHRvIGd1aWRlIHlvdSBvbiB5b3VyIHBhdGggdG8gYmVjb21pbmcgYSBzdWNjZXNzZnVsIHNvZnR3YXJlIGVuZ2luZWVyLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgICBpbWc9e2FydGljbGUxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcbiAgICAgICAgICAgICAgYXJ0VGl0bGU9XCJGcm9udC1lbmQsIEJhY2stZW5kLCBhbmQgRGF0YWJhc2VzIEV4cGxhaW5lZFwiXG4gICAgICAgICAgICAgIHN1bW1hcnk9XCJUaGlzIGFydGljbGUgc2VydmVzIGFzIHlvdXIgZ3VpZGUgdG8gY29tcHJlaGVuZGluZyB0aGUgcm9sZXMsIHRlY2hub2xvZ2llcywgYW5kIHNraWxscyBhc3NvY2lhdGVkIHdpdGggZnJvbnQtZW5kLCBiYWNrLWVuZCwgYW5kIGRhdGFiYXNlcywgaGVscGluZyB5b3UgbWFrZSBhbiBpbmZvcm1lZCBkZWNpc2lvbiBhYm91dCB5b3VyIHNwZWNpYWxpemF0aW9uIHBhdGguXCJcbiAgICAgICAgICAgICAgdGltZT1cIjE1IG1pbnV0ZXNcIlxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgICBhcnRUaXRsZT1cIk1hc3RlcmluZyB0aGUgV2ViIFRyaW5pdHk6IEFkdmFuY2VkIFRlY2huaXF1ZXMgaW4gSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdFwiXG4gICAgICAgICAgICAgIHN1bW1hcnk9XCIuIEluIHRoaXMgYXJ0aWNsZSwgd2UnbGwgZGVsdmUgaW50byBzb21lIG9mIHRoZSBtb3JlIGFkdmFuY2VkIGFzcGVjdHMgb2YgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdCB0aGF0IGNhbiBlbGV2YXRlIHlvdXIgd2ViIGRldmVsb3BtZW50IHNraWxscyB0byB0aGUgbmV4dCBsZXZlbC5cIlxuICAgICAgICAgICAgICB0aW1lPVwiMjUgbWludXRlc1wiXG4gICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlNH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTE2IG10LTMyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkFsbCBBcnRpY2xlczwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPEFydGljbGVcbiAgICAgICAgICAgIHRpdGxlPVwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QgZm9yIEJlZ2lubmVyc1wiXG4gICAgICAgICAgICBkYXRlPVwiMTUgbWludXRlc1wiXG4gICAgICAgICAgICBsaW5rPVwiXCJcbiAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9ICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXM7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJIZWFkIiwiQW5pbWF0ZWRUZXh0cyIsIkxpbmsiLCJJbWFnZSIsImFydGljbGUxIiwiYXJ0aWNsZTIiLCJhcnRpY2xlMyIsImFydGljbGU0IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VSZWYiLCJtb3Rpb24iLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW91c2UiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdXNlTGVhdmUiLCJjb25zb2xlIiwibG9nIiwiaHJlZiIsInRhcmdldCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJjbGFzc05hbWUiLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiZGF0ZSIsImxpIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsImFydFRpdGxlIiwic3VtbWFyeSIsInRpbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJwIiwiYXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});