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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n/* harmony import */ var _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/images/articles/article4.png */ \"./public/images/articles/article4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    _s();\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue)(0);\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function handleMouse(event) {\n        imgRef.current.style.display = \"inline-block\";\n        x.set(event.pageX);\n        y.set(-350);\n    }\n    function handleMouseLeave(event) {\n        imgRef.current.style.display = \"none\";\n        x.set(0);\n        y.set(10);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: link,\n        target: \"_blank\",\n        onMouseMove: handleMouse,\n        onMouseLeave: handleMouseLeave,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold capitilize hover:underline\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                style: {\n                    x: x,\n                    y: y\n                },\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1,\n                    transition: {\n                        duration: 0.5\n                    }\n                },\n                ref: imgRef,\n                src: img,\n                alt: title,\n                className: \"absolute z-10 hidden h-auto rounded-lg w-96\"\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MovingImg, \"WZcY1P9IKPlGBwzo5Ljx/w8yISw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useMotionValue\n    ];\n});\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded=xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                img: img,\n                title: title,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pl-4 font-semibold text-primary\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-b-4 border-r-4 border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"inline-block w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.02\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/articleOne\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/articleTwo\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"w-full my-16 mt-32 text-4xl font-bold text-center\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                    date: \"15 minutes\",\n                                    link: \"/articleThree\",\n                                    img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                    title: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    date: \"15 minutes\",\n                                    link: \"\",\n                                    img: _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTs7a0NBQ0gsOERBQUNhO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUN3Qzt3QkFBS0MsTUFBSzt3QkFBWUMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ0M7Z0JBQUt4QixXQUFVOzBCQUNkLDRFQUFDbEMsMERBQU1BO29CQUFDa0MsV0FBVTs7c0NBQ2hCLDhEQUFDL0IsaUVBQWFBOzRCQUNad0QsTUFBSzs0QkFDTHpCLFdBQVU7Ozs7OztzQ0FFWiw4REFBQzBCOzRCQUFHMUIsV0FBVTs7OENBQ1osOERBQUNhO29DQUNDQyxVQUFTO29DQUNUQyxTQUFRO29DQUNSQyxNQUFLO29DQUNMakMsTUFBSztvQ0FDTEQsS0FBS1YsNEVBQVFBOzs7Ozs7OENBRWYsOERBQUN5QztvQ0FDQ0MsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkMsTUFBSztvQ0FDTGpDLE1BQUs7b0NBQ0xELEtBQUtULDRFQUFRQTs7Ozs7Ozs7Ozs7O3NDQUdqQiw4REFBQzBCOzRCQUFHQyxXQUFVO3NDQUFvRDs7Ozs7O3NDQUNsRSw4REFBQzBCOzs4Q0FDQyw4REFBQ2pCO29DQUNENUIsT0FBTTtvQ0FDTjZCLE1BQUs7b0NBQ0wzQixNQUFLO29DQUNMRCxLQUFLUiw0RUFBUUE7Ozs7Ozs4Q0FFRCw4REFBQ21DO29DQUNiNUIsT0FBTTtvQ0FDTjZCLE1BQUs7b0NBQ0wzQixNQUFLO29DQUNMRCxLQUFLUCw2RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekI7QUFFQSwrREFBZTZDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzLmpzP2Y1YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFuaW1hdGVkVGV4dHMgZnJvbSBcIkAvY29tcG9uZW50cy9BbmltYXRlZFRleHRzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBhcnRpY2xlMSBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTEucG5nXCI7XG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUyLnBuZ1wiO1xuaW1wb3J0IGFydGljbGUzIGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlMy5wbmdcIjtcbmltcG9ydCBhcnRpY2xlNCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTQucG5nXCJcbmltcG9ydCB7IHVzZU1vdGlvblZhbHVlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgRnJhbWVySW1hZ2UgPSBtb3Rpb24oSW1hZ2UpO1xuY29uc3QgTW92aW5nSW1nID0gKHt0aXRsZSwgaW1nLCBsaW5rfSkgPT4ge1xuICAgIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlKGV2ZW50KXtcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICAgIHguc2V0KGV2ZW50LnBhZ2VYKVxuICAgICAgICB5LnNldCgtMzUwKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KXtcbiAgICAgICAgaW1nUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB4LnNldCgwKVxuICAgICAgICB5LnNldCgxMClcblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2V9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBjYXBpdGlsaXplIGhvdmVyOnVuZGVybGluZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPEZyYW1lckltYWdlXG4gICAgICAgICAgICBzdHlsZT17e3g6eCwgeTp5fX1cbiAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OjB9fVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3tvcGFjaXR5OjEsIHRyYW5zaXRpb246e2R1cmF0aW9uOjAuNX19fVxuICAgICAgICAgICAgcmVmPXtpbWdSZWZ9IHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIGhpZGRlbiBoLWF1dG8gcm91bmRlZC1sZyB3LTk2XCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbiAgICBcbn1cblxuY29uc3QgQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSAsIGRhdGUgLCBsaW5rfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBwLTQgcHktNiBteS00IHJvdW5kZWQ9eGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWxpZ2h0IHRleHQtZGFyayBmaXJzdDptdC0wIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWRhcmsgYm9yZGVyLXItNCBib3JkZXItYi00XCI+XG4gICAgICAgIDxNb3ZpbmdJbWcgaW1nPXtpbWd9IHRpdGxlPXt0aXRsZX0gbGluaz17bGlua30gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtNCBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeVwiPntkYXRlfTwvc3Bhbj5cbiAgICA8L2xpPlxuXG4gICAgXG4gICAgICAgIClcbiAgICBcbn1cblxuY29uc3QgRmVhdHVyZWRBcnRpY2xlID0gKHsgYXJ0VGl0bGUsIHN1bW1hcnksIGltZywgbGluaywgdGltZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCBjb2wtc3Bhbi0xIHAtOCBib3JkZXIgYm9yZGVyLWItNCBib3JkZXItci00IGJvcmRlci1zb2xpZCBiZy1saWdodCBib3JkZXItZGFyayByb3VuZGVkLTJ4bFwiPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgPlxuICAgICAgICA8RnJhbWVySW1hZ2Ugc3JjPXtpbWd9IGFsdD17YXJ0VGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIlxuICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAyIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0yIHRleHQtMnhsIGZvbnQtYm9sZCBjYXBpdGFsaXplIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIHthcnRUaXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbVwiPntzdW1tYXJ5fTwvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5IFwiPnt0aW1lfTwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QUggfHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJQb3J0Zm9saW9cIiBjb250ZW50PVwiY3YgcG9ydGZvbGlvIG1hZGUgd2l0aCByZWFjdC9uZXh0anNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1iLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dHNcbiAgICAgICAgICAgIHRleHQ9XCLigJxUaGFua3MgdG8gVGVjaCwgd2UgY2FuIG5vdyBsZWFybiBhbnl0aGluZyBhbnl3aGVyZS7igJ1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiU28geW91IHdhbnQgdG8gYmUgYSBTb2Z0d2FyZSBFbmdpbmVlcj9cIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiV2hldGhlciB5b3UncmUganVzdCBzdGFydGluZyBvdXQgb3IgY29uc2lkZXJpbmcgYSBjYXJlZXIgc3dpdGNoLCBoZXJlIGFyZSB0aGUgZXNzZW50aWFsIGZpcnN0IHN0ZXBzIHRvIGd1aWRlIHlvdSBvbiB5b3VyIHBhdGggdG8gYmVjb21pbmcgYSBzdWNjZXNzZnVsIHNvZnR3YXJlIGVuZ2luZWVyLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9hcnRpY2xlT25lXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiRnJvbnQtZW5kLCBCYWNrLWVuZCwgYW5kIERhdGFiYXNlcyBFeHBsYWluZWRcIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiVGhpcyBhcnRpY2xlIHNlcnZlcyBhcyB5b3VyIGd1aWRlIHRvIGNvbXByZWhlbmRpbmcgdGhlIHJvbGVzLCB0ZWNobm9sb2dpZXMsIGFuZCBza2lsbHMgYXNzb2NpYXRlZCB3aXRoIGZyb250LWVuZCwgYmFjay1lbmQsIGFuZCBkYXRhYmFzZXMsIGhlbHBpbmcgeW91IG1ha2UgYW4gaW5mb3JtZWQgZGVjaXNpb24gYWJvdXQgeW91ciBzcGVjaWFsaXphdGlvbiBwYXRoLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIxNSBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9hcnRpY2xlVHdvXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidy1mdWxsIG15LTE2IG10LTMyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkFsbCBBcnRpY2xlczwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPEFydGljbGVcbiAgICAgICAgICAgIHRpdGxlPVwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QgZm9yIEJlZ2lubmVyc1wiXG4gICAgICAgICAgICBkYXRlPVwiMTUgbWludXRlc1wiXG4gICAgICAgICAgICBsaW5rPVwiL2FydGljbGVUaHJlZVwiXG4gICAgICAgICAgICBpbWc9e2FydGljbGUzfSAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlXG4gICAgICAgICAgICB0aXRsZT1cIk1hc3RlcmluZyB0aGUgV2ViIFRyaW5pdHk6IEFkdmFuY2VkIFRlY2huaXF1ZXMgaW4gSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdFwiXG4gICAgICAgICAgICBkYXRlPVwiMTUgbWludXRlc1wiXG4gICAgICAgICAgICBsaW5rPVwiXCJcbiAgICAgICAgICAgIGltZz17YXJ0aWNsZTR9ICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXM7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJIZWFkIiwiQW5pbWF0ZWRUZXh0cyIsIkxpbmsiLCJJbWFnZSIsImFydGljbGUxIiwiYXJ0aWNsZTIiLCJhcnRpY2xlMyIsImFydGljbGU0IiwidXNlTW90aW9uVmFsdWUiLCJ1c2VSZWYiLCJtb3Rpb24iLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsIngiLCJ5IiwiaW1nUmVmIiwiaGFuZGxlTW91c2UiLCJldmVudCIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXQiLCJwYWdlWCIsImhhbmRsZU1vdXNlTGVhdmUiLCJocmVmIiwidGFyZ2V0Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJoMiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZWYiLCJzcmMiLCJhbHQiLCJBcnRpY2xlIiwiZGF0ZSIsImxpIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZSIsImFydFRpdGxlIiwic3VtbWFyeSIsInRpbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwiYXJ0aWNsZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});