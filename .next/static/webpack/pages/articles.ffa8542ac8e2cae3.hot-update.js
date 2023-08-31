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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/AnimatedTexts */ \"./src/components/AnimatedTexts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../public/images/articles/article1.png */ \"./public/images/articles/article1.png\");\n/* harmony import */ var _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../public/images/articles/article2.png */ \"./public/images/articles/article2.png\");\n/* harmony import */ var _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../public/images/articles/article3.png */ \"./public/images/articles/article3.png\");\n/* harmony import */ var _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../public/images/articles/article4.png */ \"./public/images/articles/article4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion)((next_image__WEBPACK_IMPORTED_MODULE_6___default()));\n_c = FramerImage;\nconst MovingImg = (param)=>{\n    let { title , img , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: link,\n        target: \"_blank\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"capitilize text-\"\n        }, void 0, false, {\n            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = MovingImg;\nconst Article = (param)=>{\n    let { img , title , date , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative w-full p-4 py-6 my-4 rounded=xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingImg, {\n                img: img,\n                title: title,\n                link: link\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"pl-4 font-semibold text-primary\",\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Article;\nconst FeaturedArticle = (param)=>{\n    let { artTitle , summary , img , link , time  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"w-full col-span-1 p-8 border border-b-4 border-r-4 border-solid bg-light border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"inline-block w-full overflow-hidden rounded-lg cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: artTitle,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.02\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"hover:underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"my-2 text-2xl font-bold capitalize hover:underline\",\n                    children: artTitle\n                }, void 0, false, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mb-2 text-sm\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"font-semibold text-primary \",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = FeaturedArticle;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"AH || Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Portfolio\",\n                        content: \"cv portfolio made with react/nextjs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center w-full mb-16 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedTexts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            text: \"“Thanks to Tech, we can now learn anything anywhere.”\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"So you want to be a Software Engineer?\",\n                                    summary: \"Whether you're just starting out or considering a career switch, here are the essential first steps to guide you on your path to becoming a successful software engineer.\",\n                                    time: \"10 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Front-end, Back-end, and Databases Explained\",\n                                    summary: \"This article serves as your guide to comprehending the roles, technologies, and skills associated with front-end, back-end, and databases, helping you make an informed decision about your specialization path.\",\n                                    time: \"15 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticle, {\n                                    artTitle: \"Mastering the Web Trinity: Advanced Techniques in HTML, CSS, and JavaScript\",\n                                    summary: \". In this article, we'll delve into some of the more advanced aspects of HTML, CSS, and JavaScript that can elevate your web development skills to the next level.\",\n                                    time: \"25 minutes\",\n                                    link: \"/\",\n                                    img: _public_images_articles_article4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"w-full my-16 mt-32 text-4xl font-bold text-center\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"HTML, CSS, JavaScript, and React for Beginners\",\n                                date: \"15 minutes\",\n                                link: \"\",\n                                img: _public_images_articles_article3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/agyhern/Desktop/portfolio/portfolio/src/pages/articles.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"MovingImg\");\n$RefreshReg$(_c2, \"Article\");\n$RefreshReg$(_c3, \"FeaturedArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0cyBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGFydGljbGUxIGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlMS5wbmdcIjtcbmltcG9ydCBhcnRpY2xlMiBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvYXJ0aWNsZTIucG5nXCI7XG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2FydGljbGUzLnBuZ1wiO1xuaW1wb3J0IGFydGljbGU0IGZyb20gXCIvcHVibGljL2ltYWdlcy9hcnRpY2xlcy9hcnRpY2xlNC5wbmdcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgRnJhbWVySW1hZ2UgPSBtb3Rpb24oSW1hZ2UpO1xuY29uc3QgTW92aW5nSW1nID0gKHt0aXRsZSwgaW1nLCBsaW5rfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcGl0aWxpemUgdGV4dC1cIj48L2gyPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxuICAgIFxufVxuXG5jb25zdCBBcnRpY2xlID0gKHtpbWcsIHRpdGxlICwgZGF0ZSAsIGxpbmt9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHAtNCBweS02IG15LTQgcm91bmRlZD14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctbGlnaHQgdGV4dC1kYXJrIGZpcnN0Om10LTAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBib3JkZXItci00IGJvcmRlci1iLTRcIj5cbiAgICAgICAgPE1vdmluZ0ltZyBpbWc9e2ltZ30gdGl0bGU9e3RpdGxlfSBsaW5rPXtsaW5rfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC00IGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5XCI+e2RhdGV9PC9zcGFuPlxuICAgIDwvbGk+XG5cbiAgICBcbiAgICAgICAgKVxuICAgIFxufVxuXG5jb25zdCBGZWF0dXJlZEFydGljbGUgPSAoeyBhcnRUaXRsZSwgc3VtbWFyeSwgaW1nLCBsaW5rLCB0aW1lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGNvbC1zcGFuLTEgcC04IGJvcmRlciBib3JkZXItYi00IGJvcmRlci1yLTQgYm9yZGVyLXNvbGlkIGJnLWxpZ2h0IGJvcmRlci1kYXJrIHJvdW5kZWQtMnhsXCI+XG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIFwiXG4gICAgICA+XG4gICAgICAgIDxGcmFtZXJJbWFnZSBzcmM9e2ltZ30gYWx0PXthcnRUaXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiXG4gICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTIgdGV4dC0yeGwgZm9udC1ib2xkIGNhcGl0YWxpemUgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAge2FydFRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtXCI+e3N1bW1hcnl9PC9wPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnkgXCI+e3RpbWV9PC9zcGFuPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5jb25zdCBhcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BSCB8fCBBcnRpY2xlcyBQYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIlBvcnRmb2xpb1wiIGNvbnRlbnQ9XCJjdiBwb3J0Zm9saW8gbWFkZSB3aXRoIHJlYWN0L25leHRqc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWItMTYgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwicHQtMTZcIj5cbiAgICAgICAgICA8QW5pbWF0ZWRUZXh0c1xuICAgICAgICAgICAgdGV4dD1cIuKAnFRoYW5rcyB0byBUZWNoLCB3ZSBjYW4gbm93IGxlYXJuIGFueXRoaW5nIGFueXdoZXJlLuKAnVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTZcIj5cbiAgICAgICAgICAgIDxGZWF0dXJlZEFydGljbGVcbiAgICAgICAgICAgICAgYXJ0VGl0bGU9XCJTbyB5b3Ugd2FudCB0byBiZSBhIFNvZnR3YXJlIEVuZ2luZWVyP1wiXG4gICAgICAgICAgICAgIHN1bW1hcnk9XCJXaGV0aGVyIHlvdSdyZSBqdXN0IHN0YXJ0aW5nIG91dCBvciBjb25zaWRlcmluZyBhIGNhcmVlciBzd2l0Y2gsIGhlcmUgYXJlIHRoZSBlc3NlbnRpYWwgZmlyc3Qgc3RlcHMgdG8gZ3VpZGUgeW91IG9uIHlvdXIgcGF0aCB0byBiZWNvbWluZyBhIHN1Y2Nlc3NmdWwgc29mdHdhcmUgZW5naW5lZXIuXCJcbiAgICAgICAgICAgICAgdGltZT1cIjEwIG1pbnV0ZXNcIlxuICAgICAgICAgICAgICBsaW5rPVwiL1wiXG4gICAgICAgICAgICAgIGltZz17YXJ0aWNsZTF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZVxuICAgICAgICAgICAgICBhcnRUaXRsZT1cIkZyb250LWVuZCwgQmFjay1lbmQsIGFuZCBEYXRhYmFzZXMgRXhwbGFpbmVkXCJcbiAgICAgICAgICAgICAgc3VtbWFyeT1cIlRoaXMgYXJ0aWNsZSBzZXJ2ZXMgYXMgeW91ciBndWlkZSB0byBjb21wcmVoZW5kaW5nIHRoZSByb2xlcywgdGVjaG5vbG9naWVzLCBhbmQgc2tpbGxzIGFzc29jaWF0ZWQgd2l0aCBmcm9udC1lbmQsIGJhY2stZW5kLCBhbmQgZGF0YWJhc2VzLCBoZWxwaW5nIHlvdSBtYWtlIGFuIGluZm9ybWVkIGRlY2lzaW9uIGFib3V0IHlvdXIgc3BlY2lhbGl6YXRpb24gcGF0aC5cIlxuICAgICAgICAgICAgICB0aW1lPVwiMTUgbWludXRlc1wiXG4gICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgaW1nPXthcnRpY2xlMn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlXG4gICAgICAgICAgICAgIGFydFRpdGxlPVwiTWFzdGVyaW5nIHRoZSBXZWIgVHJpbml0eTogQWR2YW5jZWQgVGVjaG5pcXVlcyBpbiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0XCJcbiAgICAgICAgICAgICAgc3VtbWFyeT1cIi4gSW4gdGhpcyBhcnRpY2xlLCB3ZSdsbCBkZWx2ZSBpbnRvIHNvbWUgb2YgdGhlIG1vcmUgYWR2YW5jZWQgYXNwZWN0cyBvZiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0IHRoYXQgY2FuIGVsZXZhdGUgeW91ciB3ZWIgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsLlwiXG4gICAgICAgICAgICAgIHRpbWU9XCIyNSBtaW51dGVzXCJcbiAgICAgICAgICAgICAgbGluaz1cIi9cIlxuICAgICAgICAgICAgICBpbWc9e2FydGljbGU0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktMTYgbXQtMzIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+QWxsIEFydGljbGVzPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8QXJ0aWNsZVxuICAgICAgICAgICAgdGl0bGU9XCJIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGFuZCBSZWFjdCBmb3IgQmVnaW5uZXJzXCJcbiAgICAgICAgICAgIGRhdGU9XCIxNSBtaW51dGVzXCJcbiAgICAgICAgICAgIGxpbms9XCJcIlxuICAgICAgICAgICAgaW1nPXthcnRpY2xlM30gICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlcztcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIkhlYWQiLCJBbmltYXRlZFRleHRzIiwiTGluayIsIkltYWdlIiwiYXJ0aWNsZTEiLCJhcnRpY2xlMiIsImFydGljbGUzIiwiYXJ0aWNsZTQiLCJtb3Rpb24iLCJGcmFtZXJJbWFnZSIsIk1vdmluZ0ltZyIsInRpdGxlIiwiaW1nIiwibGluayIsImhyZWYiLCJ0YXJnZXQiLCJoMiIsImNsYXNzTmFtZSIsIkFydGljbGUiLCJkYXRlIiwibGkiLCJzcGFuIiwiRmVhdHVyZWRBcnRpY2xlIiwiYXJ0VGl0bGUiLCJzdW1tYXJ5IiwidGltZSIsInNyYyIsImFsdCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInAiLCJhcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});