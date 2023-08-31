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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n\n\n\n\n\n\n\n\n\n\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\"\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                    summary: \"In the digital age, the web has become an integral part of our lives, and understanding the technologies that power it is essential.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    summary: \". In this article, we'll delve into some of the more advanced aspects of HTML, CSS, and JavaScript that can elevate your web development skills to the next level.\",\n                                    time: \"25 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c;\n$RefreshReg$(_c, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZjtBQUNHO0FBQzBCO0FBQzFCO0FBQ0U7QUFDNkI7QUFDQTtBQUNBO0FBRTVELE1BQU1TLGtCQUFrQixTQUE0QztRQUEzQyxFQUFFQyxTQUFRLEVBQUVDLFFBQU8sRUFBRUMsSUFBRyxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRTtJQUM3RCxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNaLGtEQUFJQTtnQkFDSGEsTUFBTUo7Z0JBQ05LLFFBQU87Z0JBQ1BGLFdBQVU7MEJBRVYsNEVBQUNYLG1EQUFLQTtvQkFBQ2MsS0FBS1A7b0JBQUtRLEtBQUtWO29CQUFVTSxXQUFVOzs7Ozs7Ozs7OzswQkFFNUMsOERBQUNaLGtEQUFJQTtnQkFBQ2EsTUFBTUo7Z0JBQU1LLFFBQU87Z0JBQVNGLFdBQVU7MEJBQzFDLDRFQUFDSztvQkFBR0wsV0FBVTs4QkFDWE47Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDWTtnQkFBRU4sV0FBVTswQkFBZ0JMOzs7Ozs7MEJBQzdCLDhEQUFDWTtnQkFBS1AsV0FBVTswQkFBK0JGOzs7Ozs7Ozs7Ozs7QUFHckQ7S0FuQk1MO0FBcUJOLE1BQU1lLFdBQVcsSUFBTTtJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUN0QixrREFBSUE7O2tDQUNILDhEQUFDdUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVlDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUNDO2dCQUFLYixXQUFVOzBCQUNkLDRFQUFDaEIsMERBQU1BO29CQUFDZ0IsV0FBVTs7c0NBQ2hCLDhEQUFDYixpRUFBYUE7NEJBQ1oyQixNQUFLOzRCQUNMZCxXQUFVOzs7Ozs7c0NBRVosOERBQUNlOzRCQUFHZixXQUFVOzs4Q0FDWiw4REFBQ1A7b0NBQ0NDLFVBQVM7b0NBQ1RDLFNBQVE7b0NBQ1JHLE1BQUs7b0NBQ0xELE1BQUs7b0NBQ0xELEtBQUtOLDRFQUFRQTs7Ozs7OzhDQUVmLDhEQUFDRztvQ0FDQ0MsVUFBUztvQ0FDVEMsU0FBUTtvQ0FDUkcsTUFBSztvQ0FDTEQsTUFBSztvQ0FDTEQsS0FBS0wsNEVBQVFBOzs7Ozs7OENBRWYsOERBQUNFO29DQUNDQyxVQUFTO29DQUNUQyxTQUFRO29DQUNSRyxNQUFLO29DQUNMRCxNQUFLO29DQUNMRCxLQUFLSiw0RUFBUUE7Ozs7Ozs4Q0FFZiw4REFBQ0M7b0NBQ0NDLFVBQVM7b0NBQ1RDLFNBQVE7b0NBQ1JHLE1BQUs7b0NBQ0xELE1BQUs7b0NBQ0xELEtBQUtOLDRFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQjtBQUVBLCtEQUFla0IsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0cyBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGFydGljbGUxIGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlMS5wbmdcIjtcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTIucG5nXCI7XG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUzLnBuZ1wiO1xuXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoeyBhcnRUaXRsZSwgc3VtbWFyeSwgaW1nLCBsaW5rLCB0aW1lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGNvbC1zcGFuLTEgcC04IGJvcmRlciBib3JkZXItc29saWQgYmctbGlnaHQgYm9yZGVyLWRhcmsgcm91bmRlZC0yeGxcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBcIlxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGFsdD17YXJ0VGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0yIHRleHQtMnhsIGZvbnQtYm9sZCBjYXBpdGFsaXplIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIHthcnRUaXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbVwiPntzdW1tYXJ5fTwvcD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5IFwiPnt0aW1lfTwvc3Bhbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QUggfHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJQb3J0Zm9saW9cIiBjb250ZW50PVwiY3YgcG9ydGZvbGlvIG1hZGUgd2l0aCByZWFjdC9uZXh0anNcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1iLTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dHNcbiAgICAgICAgICAgIHRleHQ9XCLigJxUaGFua3MgdG8gVGVjaCwgd2UgY2FuIG5vdyBsZWFybiBhbnl0aGluZyBhbnl3aGVyZS7igJ1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMTZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTE2XCI+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiU28geW91IHdhbnQgdG8gYmUgYSBTb2Z0d2FyZSBFbmdpbmVlcj9cIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiV2hldGhlciB5b3UncmUganVzdCBzdGFydGluZyBvdXQgb3IgY29uc2lkZXJpbmcgYSBjYXJlZXIgc3dpdGNoLCBoZXJlIGFyZSB0aGUgZXNzZW50aWFsIGZpcnN0IHN0ZXBzIHRvIGd1aWRlIHlvdSBvbiB5b3VyIHBhdGggdG8gYmVjb21pbmcgYSBzdWNjZXNzZnVsIHNvZnR3YXJlIGVuZ2luZWVyLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgICBpbWc9e2FydGljbGUxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcbiAgICAgICAgICAgICAgYXJ0VGl0bGU9XCJGcm9udC1lbmQsIEJhY2stZW5kLCBhbmQgRGF0YWJhc2VzIEV4cGxhaW5lZFwiXG4gICAgICAgICAgICAgIHN1bW1hcnk9XCJUaGlzIGFydGljbGUgc2VydmVzIGFzIHlvdXIgZ3VpZGUgdG8gY29tcHJlaGVuZGluZyB0aGUgcm9sZXMsIHRlY2hub2xvZ2llcywgYW5kIHNraWxscyBhc3NvY2lhdGVkIHdpdGggZnJvbnQtZW5kLCBiYWNrLWVuZCwgYW5kIGRhdGFiYXNlcywgaGVscGluZyB5b3UgbWFrZSBhbiBpbmZvcm1lZCBkZWNpc2lvbiBhYm91dCB5b3VyIHNwZWNpYWxpemF0aW9uIHBhdGguXCJcbiAgICAgICAgICAgICAgdGltZT1cIjE1IG1pbnV0ZXNcIlxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgICBhcnRUaXRsZT1cIkhUTUwsIENTUywgSmF2YVNjcmlwdCwgYW5kIFJlYWN0IGZvciBCZWdpbm5lcnNcIlxuICAgICAgICAgICAgICBzdW1tYXJ5PVwiSW4gdGhlIGRpZ2l0YWwgYWdlLCB0aGUgd2ViIGhhcyBiZWNvbWUgYW4gaW50ZWdyYWwgcGFydCBvZiBvdXIgbGl2ZXMsIGFuZCB1bmRlcnN0YW5kaW5nIHRoZSB0ZWNobm9sb2dpZXMgdGhhdCBwb3dlciBpdCBpcyBlc3NlbnRpYWwuXCJcbiAgICAgICAgICAgICAgdGltZT1cIjE1IG1pbnV0ZXNcIlxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgICBhcnRUaXRsZT1cIk1hc3RlcmluZyB0aGUgV2ViIFRyaW5pdHk6IEFkdmFuY2VkIFRlY2huaXF1ZXMgaW4gSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdFwiXG4gICAgICAgICAgICAgIHN1bW1hcnk9XCIuIEluIHRoaXMgYXJ0aWNsZSwgd2UnbGwgZGVsdmUgaW50byBzb21lIG9mIHRoZSBtb3JlIGFkdmFuY2VkIGFzcGVjdHMgb2YgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdCB0aGF0IGNhbiBlbGV2YXRlIHlvdXIgd2ViIGRldmVsb3BtZW50IHNraWxscyB0byB0aGUgbmV4dCBsZXZlbC5cIlxuICAgICAgICAgICAgICB0aW1lPVwiMjUgbWludXRlc1wiXG4gICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlcztcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIkhlYWQiLCJBbmltYXRlZFRleHRzIiwiTGluayIsIkltYWdlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwiRmVhdHVyZWRBcnRpY2xlIiwiYXJ0VGl0bGUiLCJzdW1tYXJ5IiwiaW1nIiwibGluayIsInRpbWUiLCJsaSIsImNsYXNzTmFtZSIsImhyZWYiLCJ0YXJnZXQiLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJzcGFuIiwiYXJ0aWNsZXMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});