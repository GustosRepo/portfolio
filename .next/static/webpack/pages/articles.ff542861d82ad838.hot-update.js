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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n/* harmony import */ var _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/images/articles/article4.png */ \"./public/images/articles/article4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-10);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(0);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold capitilize hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"absolute hidden h-auto rounded-lg w-96\"\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded=xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                img: img,\n                title: title,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pl-4 font-semibold text-primary\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-b-4 border-r-4 border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"inline-block w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.02\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    summary: \". In this article, we'll delve into some of the more advanced aspects of HTML, CSS, and JavaScript that can elevate your web development skills to the next level.\",\n                                    time: \"25 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"w-full my-16 mt-32 text-4xl font-bold text-center\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                date: \"15 minutes\",\n                                link: \"\",\n                                img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFVOztzQ0FDaEIsOERBQUMvQixpRUFBYUE7NEJBQ1pxRCxNQUFLOzRCQUNMdEIsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDdUI7NEJBQUd2QixXQUFVOzs4Q0FDWiw4REFBQ1E7b0NBQ0NDLFVBQVM7b0NBQ1RDLFNBQVE7b0NBQ1JDLE1BQUs7b0NBQ0w1QixNQUFLO29DQUNMRCxLQUFLViw0RUFBUUE7Ozs7Ozs4Q0FFZiw4REFBQ29DO29DQUNDQyxVQUFTO29DQUNUQyxTQUFRO29DQUNSQyxNQUFLO29DQUNMNUIsTUFBSztvQ0FDTEQsS0FBS1QsNEVBQVFBOzs7Ozs7OENBRWYsOERBQUNtQztvQ0FDQ0MsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkMsTUFBSztvQ0FDTDVCLE1BQUs7b0NBQ0xELEtBQUtQLDZFQUFRQTs7Ozs7Ozs7Ozs7O3NDQUdqQiw4REFBQ3dCOzRCQUFHQyxXQUFVO3NDQUFvRDs7Ozs7O3NDQUNsRSw4REFBQ3VCO3NDQUNDLDRFQUFDbkI7Z0NBQ0R2QixPQUFNO2dDQUNOd0IsTUFBSztnQ0FDTHRCLE1BQUs7Z0NBQ0xELEtBQUtSLDRFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0FBRUEsK0RBQWUyQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnRpY2xlcy5qcz9mNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBbmltYXRlZFRleHRzIGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUxLnBuZ1wiO1xuaW1wb3J0IGFydGljbGUyIGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlMi5wbmdcIjtcbmltcG9ydCBhcnRpY2xlMyBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTMucG5nXCI7XG5pbXBvcnQgYXJ0aWNsZTQgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGU0LnBuZ1wiXG5pbXBvcnQgeyB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcbmNvbnN0IE1vdmluZ0ltZyA9ICh7dGl0bGUsIGltZywgbGlua30pID0+IHtcbiAgICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZShldmVudCl7XG4gICAgICAgIGltZ1JlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB4LnNldChldmVudC5wYWdlWClcbiAgICAgICAgeS5zZXQoLTEwKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KXtcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB4LnNldCgwKVxuICAgICAgICB5LnNldCgwKVxuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIGNhcGl0aWxpemUgaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICA8SW1hZ2UgcmVmPXtpbWdSZWZ9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gaC1hdXRvIHJvdW5kZWQtbGcgdy05NlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG4gICAgXG59XG5cbmNvbnN0IEFydGljbGUgPSAoe2ltZywgdGl0bGUgLCBkYXRlICwgbGlua30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcC00IHB5LTYgbXktNCByb3VuZGVkPXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1saWdodCB0ZXh0LWRhcmsgZmlyc3Q6bXQtMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrIGJvcmRlci1yLTQgYm9yZGVyLWItNFwiPlxuICAgICAgICA8TW92aW5nSW1nIGltZz17aW1nfSB0aXRsZT17dGl0bGV9IGxpbms9e2xpbmt9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTQgZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnlcIj57ZGF0ZX08L3NwYW4+XG4gICAgPC9saT5cblxuICAgIFxuICAgICAgICApXG4gICAgXG59XG5cbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZSA9ICh7IGFydFRpdGxlLCBzdW1tYXJ5LCBpbWcsIGxpbmssIHRpbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3LWZ1bGwgY29sLXNwYW4tMSBwLTggYm9yZGVyIGJvcmRlci1iLTQgYm9yZGVyLXItNCBib3JkZXItc29saWQgYmctbGlnaHQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGxcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgXCJcbiAgICAgID5cbiAgICAgICAgPEZyYW1lckltYWdlIHNyYz17aW1nfSBhbHQ9e2FydFRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCJcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMiB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMiB0ZXh0LTJ4bCBmb250LWJvbGQgY2FwaXRhbGl6ZSBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICB7YXJ0VGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQtc21cIj57c3VtbWFyeX08L3A+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeSBcIj57dGltZX08L3NwYW4+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmNvbnN0IGFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFIIHx8IEFydGljbGVzIFBhZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiUG9ydGZvbGlvXCIgY29udGVudD1cImN2IHBvcnRmb2xpbyBtYWRlIHdpdGggcmVhY3QvbmV4dGpzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtYi0xNiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJwdC0xNlwiPlxuICAgICAgICAgIDxBbmltYXRlZFRleHRzXG4gICAgICAgICAgICB0ZXh0PVwi4oCcVGhhbmtzIHRvIFRlY2gsIHdlIGNhbiBub3cgbGVhcm4gYW55dGhpbmcgYW55d2hlcmUu4oCdXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xNlwiPlxuICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgICBhcnRUaXRsZT1cIlNvIHlvdSB3YW50IHRvIGJlIGEgU29mdHdhcmUgRW5naW5lZXI/XCJcbiAgICAgICAgICAgICAgc3VtbWFyeT1cIldoZXRoZXIgeW91J3JlIGp1c3Qgc3RhcnRpbmcgb3V0IG9yIGNvbnNpZGVyaW5nIGEgY2FyZWVyIHN3aXRjaCwgaGVyZSBhcmUgdGhlIGVzc2VudGlhbCBmaXJzdCBzdGVwcyB0byBndWlkZSB5b3Ugb24geW91ciBwYXRoIHRvIGJlY29taW5nIGEgc3VjY2Vzc2Z1bCBzb2Z0d2FyZSBlbmdpbmVlci5cIlxuICAgICAgICAgICAgICB0aW1lPVwiMTAgbWludXRlc1wiXG4gICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiRnJvbnQtZW5kLCBCYWNrLWVuZCwgYW5kIERhdGFiYXNlcyBFeHBsYWluZWRcIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiVGhpcyBhcnRpY2xlIHNlcnZlcyBhcyB5b3VyIGd1aWRlIHRvIGNvbXByZWhlbmRpbmcgdGhlIHJvbGVzLCB0ZWNobm9sb2dpZXMsIGFuZCBza2lsbHMgYXNzb2NpYXRlZCB3aXRoIGZyb250LWVuZCwgYmFjay1lbmQsIGFuZCBkYXRhYmFzZXMsIGhlbHBpbmcgeW91IG1ha2UgYW4gaW5mb3JtZWQgZGVjaXNpb24gYWJvdXQgeW91ciBzcGVjaWFsaXphdGlvbiBwYXRoLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIxNSBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgICBpbWc9e2FydGljbGUyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcbiAgICAgICAgICAgICAgYXJ0VGl0bGU9XCJNYXN0ZXJpbmcgdGhlIFdlYiBUcmluaXR5OiBBZHZhbmNlZCBUZWNobmlxdWVzIGluIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHRcIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiLiBJbiB0aGlzIGFydGljbGUsIHdlJ2xsIGRlbHZlIGludG8gc29tZSBvZiB0aGUgbW9yZSBhZHZhbmNlZCBhc3BlY3RzIG9mIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQgdGhhdCBjYW4gZWxldmF0ZSB5b3VyIHdlYiBkZXZlbG9wbWVudCBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWwuXCJcbiAgICAgICAgICAgICAgdGltZT1cIjI1IG1pbnV0ZXNcIlxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgIGltZz17YXJ0aWNsZTR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInctZnVsbCBteS0xNiBtdC0zMiB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5BbGwgQXJ0aWNsZXM8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxBcnRpY2xlXG4gICAgICAgICAgICB0aXRsZT1cIkhUTUwsIENTUywgSmF2YVNjcmlwdCwgYW5kIFJlYWN0IGZvciBCZWdpbm5lcnNcIlxuICAgICAgICAgICAgZGF0ZT1cIjE1IG1pbnV0ZXNcIlxuICAgICAgICAgICAgbGluaz1cIlwiXG4gICAgICAgICAgICBpbWc9e2FydGljbGUzfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiSGVhZCIsIkFuaW1hdGVkVGV4dHMiLCJMaW5rIiwiSW1hZ2UiLCJhcnRpY2xlMSIsImFydGljbGUyIiwiYXJ0aWNsZTMiLCJhcnRpY2xlNCIsInVzZU1vdGlvblZhbHVlIiwidXNlUmVmIiwibW90aW9uIiwiRnJhbWVySW1hZ2UiLCJNb3ZpbmdJbWciLCJ0aXRsZSIsImltZyIsImxpbmsiLCJ4IiwieSIsImltZ1JlZiIsImhhbmRsZU1vdXNlIiwiZXZlbnQiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0IiwicGFnZVgiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaHJlZiIsInRhcmdldCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJjbGFzc05hbWUiLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiZGF0ZSIsImxpIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsImFydFRpdGxlIiwic3VtbWFyeSIsInRpbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJwIiwiYXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});