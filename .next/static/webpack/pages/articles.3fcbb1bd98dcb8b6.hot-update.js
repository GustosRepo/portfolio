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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n\n\n\n\n\n\n\n\n\n\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\"\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                    summary: \"In the digital age, the web has become an integral part of our lives, and understanding the technologies that power it is essential.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c;\n$RefreshReg$(_c, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZjtBQUNHO0FBQzBCO0FBQzFCO0FBQ0U7QUFDNEI7QUFDQTtBQUNBO0FBRTNELE1BQU1TLGtCQUFrQixTQUE0QztRQUEzQyxFQUFFQyxTQUFRLEVBQUVDLFFBQU8sRUFBRUMsSUFBRyxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRTtJQUM3RCxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNaLGtEQUFJQTtnQkFDSGEsTUFBTUo7Z0JBQ05LLFFBQU87Z0JBQ1BGLFdBQVU7MEJBRWQsNEVBQUNYLG1EQUFLQTtvQkFBQ2MsS0FBS1A7b0JBQUtRLEtBQUtWO29CQUFVTSxXQUFVOzs7Ozs7Ozs7OzswQkFFeEMsOERBQUNaLGtEQUFJQTtnQkFBQ2EsTUFBTUo7Z0JBQU1LLFFBQU87Z0JBQVNGLFdBQVU7MEJBQzVDLDRFQUFDSztvQkFBR0wsV0FBVTs4QkFBc0ROOzs7Ozs7Ozs7OzswQkFFcEUsOERBQUNZO2dCQUFFTixXQUFVOzBCQUFnQkw7Ozs7OzswQkFDN0IsOERBQUNZO2dCQUFLUCxXQUFVOzBCQUErQkY7Ozs7Ozs7Ozs7OztBQUdyRDtLQWpCTUw7QUFtQk4sTUFBTWUsV0FBVyxJQUFNO0lBQ3JCLHFCQUNFOzswQkFDRSw4REFBQ3RCLGtEQUFJQTs7a0NBQ0gsOERBQUN1QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBWUMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ0M7Z0JBQUtiLFdBQVU7MEJBQ2QsNEVBQUNoQiwwREFBTUE7b0JBQUNnQixXQUFVOztzQ0FDaEIsOERBQUNiLGlFQUFhQTs0QkFDWjJCLE1BQUs7NEJBQ0xkLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ2U7NEJBQUdmLFdBQVU7OzhDQUNaLDhEQUFDUDtvQ0FDREMsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkcsTUFBSztvQ0FDTEQsTUFBSztvQ0FDTEQsS0FBS04sNEVBQVFBOzs7Ozs7OENBRUQsOERBQUNHO29DQUNiQyxVQUFTO29DQUNUQyxTQUFRO29DQUNSRyxNQUFLO29DQUNMRCxNQUFLO29DQUNMRCxLQUFLTCw0RUFBUUE7Ozs7Ozs4Q0FFRCw4REFBQ0U7b0NBQ2JDLFVBQVM7b0NBQ1RDLFNBQVE7b0NBQ1JHLE1BQUs7b0NBQ0xELE1BQUs7b0NBQ0xELEtBQUtKLDRFQUFRQTs7Ozs7OzhDQUVELDhEQUFDQztvQ0FDYkMsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkcsTUFBSztvQ0FDTEQsTUFBSztvQ0FDTEQsS0FBS04sNEVBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0FBRUEsK0RBQWVrQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hcnRpY2xlcy5qcz9mNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBbmltYXRlZFRleHRzIGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0c1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXJ0aWNsZTEgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUxLnBuZ1wiXG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUyLnBuZ1wiXG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUzLnBuZ1wiXG5cbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZSA9ICh7IGFydFRpdGxlLCBzdW1tYXJ5LCBpbWcsIGxpbmssIHRpbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3LWZ1bGwgY29sLXNwYW4tMSBwLTggYm9yZGVyIGJvcmRlci1zb2xpZCBiZy1saWdodCBib3JkZXItZGFyayByb3VuZGVkLTJ4bFwiPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17bGlua31cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIFwiXG4gICAgICA+XG4gICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9e2FydFRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTIgdGV4dC0yeGwgZm9udC1ib2xkIGNhcGl0YWxpemUgaG92ZXI6dW5kZXJsaW5lXCI+e2FydFRpdGxlfTwvaDI+ICBcbiAgICAgIDwvTGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbVwiPntzdW1tYXJ5fTwvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5IFwiPnt0aW1lfTwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QUggfHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJQb3J0Zm9saW9cIiBjb250ZW50PVwiY3YgcG9ydGZvbGlvIG1hZGUgd2l0aCByZWFjdC9uZXh0anNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1iLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dHNcbiAgICAgICAgICAgIHRleHQ9XCLigJxUaGFua3MgdG8gVGVjaCwgd2UgY2FuIG5vdyBsZWFybiBhbnl0aGluZyBhbnl3aGVyZS7igJ1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICBhcnRUaXRsZT1cIlNvIHlvdSB3YW50IHRvIGJlIGEgU29mdHdhcmUgRW5naW5lZXI/XCJcbiAgICAgICAgICAgIHN1bW1hcnk9XCJXaGV0aGVyIHlvdSdyZSBqdXN0IHN0YXJ0aW5nIG91dCBvciBjb25zaWRlcmluZyBhIGNhcmVlciBzd2l0Y2gsIGhlcmUgYXJlIHRoZSBlc3NlbnRpYWwgZmlyc3Qgc3RlcHMgdG8gZ3VpZGUgeW91IG9uIHlvdXIgcGF0aCB0byBiZWNvbWluZyBhIHN1Y2Nlc3NmdWwgc29mdHdhcmUgZW5naW5lZXIuXCJcbiAgICAgICAgICAgIHRpbWU9XCIxMCBtaW51dGVzXCJcbiAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgIGltZz17YXJ0aWNsZTF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgYXJ0VGl0bGU9XCJGcm9udC1lbmQsIEJhY2stZW5kLCBhbmQgRGF0YWJhc2VzIEV4cGxhaW5lZFwiXG4gICAgICAgICAgICBzdW1tYXJ5PVwiVGhpcyBhcnRpY2xlIHNlcnZlcyBhcyB5b3VyIGd1aWRlIHRvIGNvbXByZWhlbmRpbmcgdGhlIHJvbGVzLCB0ZWNobm9sb2dpZXMsIGFuZCBza2lsbHMgYXNzb2NpYXRlZCB3aXRoIGZyb250LWVuZCwgYmFjay1lbmQsIGFuZCBkYXRhYmFzZXMsIGhlbHBpbmcgeW91IG1ha2UgYW4gaW5mb3JtZWQgZGVjaXNpb24gYWJvdXQgeW91ciBzcGVjaWFsaXphdGlvbiBwYXRoLlwiXG4gICAgICAgICAgICB0aW1lPVwiMTUgbWludXRlc1wiXG4gICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICBpbWc9e2FydGljbGUyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcbiAgICAgICAgICAgIGFydFRpdGxlPVwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QgZm9yIEJlZ2lubmVyc1wiXG4gICAgICAgICAgICBzdW1tYXJ5PVwiSW4gdGhlIGRpZ2l0YWwgYWdlLCB0aGUgd2ViIGhhcyBiZWNvbWUgYW4gaW50ZWdyYWwgcGFydCBvZiBvdXIgbGl2ZXMsIGFuZCB1bmRlcnN0YW5kaW5nIHRoZSB0ZWNobm9sb2dpZXMgdGhhdCBwb3dlciBpdCBpcyBlc3NlbnRpYWwuXCJcbiAgICAgICAgICAgIHRpbWU9XCIxNSBtaW51dGVzXCJcbiAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgYXJ0VGl0bGU9XCJNYXN0ZXJpbmcgdGhlIFdlYiBUcmluaXR5OiBBZHZhbmNlZCBUZWNobmlxdWVzIGluIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHRcIlxuICAgICAgICAgICAgc3VtbWFyeT1cIldoZXRoZXIgeW91J3JlIGp1c3Qgc3RhcnRpbmcgb3V0IG9yIGNvbnNpZGVyaW5nIGEgY2FyZWVyIHN3aXRjaCwgaGVyZSBhcmUgdGhlIGVzc2VudGlhbCBmaXJzdCBzdGVwcyB0byBndWlkZSB5b3Ugb24geW91ciBwYXRoIHRvIGJlY29taW5nIGEgc3VjY2Vzc2Z1bCBzb2Z0d2FyZSBlbmdpbmVlci5cIlxuICAgICAgICAgICAgdGltZT1cIjEwIG1pbnV0ZXNcIlxuICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlcztcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIkhlYWQiLCJBbmltYXRlZFRleHRzIiwiTGluayIsIkltYWdlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwiRmVhdHVyZWRBcnRpY2xlIiwiYXJ0VGl0bGUiLCJzdW1tYXJ5IiwiaW1nIiwibGluayIsInRpbWUiLCJsaSIsImNsYXNzTmFtZSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJzcGFuIiwiYXJ0aWNsZXMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});