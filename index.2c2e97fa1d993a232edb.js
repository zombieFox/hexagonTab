/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auto-suggest {\n  position: relative;\n  z-index: 1;\n  font-size: 1em;\n}\n\n.auto-suggest {\n  background-color: hsl(var(--theme-primary-200));\n  margin-top: 0.5em;\n  padding: 1em;\n  position: absolute;\n  top: calc(var(--auto-suggest-top) * 1px);\n  left: calc(var(--auto-suggest-left) * 1px);\n  width: calc(var(--auto-suggest-width) * 1px);\n  max-height: 40vh;\n  border-radius: var(--theme-radius-base);\n  overflow-y: auto;\n  z-index: var(--z-index-auto-suggest);\n  box-shadow: var(--theme-shadow-bottom-large);\n  opacity: 0;\n  transition: opacity var(--layout-transition-extra-fast);\n}\n\n.auto-suggest-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));\n  grid-gap: calc(var(--form-space) / 2);\n}\n\n.auto-suggest-item {\n  padding: 0.5em;\n  width: 100%;\n  height: 100%;\n  min-height: 6em;\n  display: flex;\n  position: relative;\n  white-space: inherit;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: background-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\n.auto-suggest-icon {\n  font-size: 2em;\n}\n\n.auto-suggest-icon-text {\n  margin-top: 1em;\n  font-size: 0.6em;\n  text-align: center;\n  line-height: 1.6;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes shake {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10% {\n    transform: translate3d(-1.2em, 0, 0);\n  }\n\n  20% {\n    transform: translate3d(1.2em, 0, 0);\n  }\n\n  30% {\n    transform: translate3d(-1em, 0, 0);\n  }\n\n  40% {\n    transform: translate3d(1em, 0, 0);\n  }\n\n  50% {\n    transform: translate3d(-0.8em, 0, 0);\n  }\n\n  60% {\n    transform: translate3d(0.8em, 0, 0);\n  }\n\n  70% {\n    transform: translate3d(-0.3em, 0, 0);\n  }\n\n  80% {\n    transform: translate3d(0.3em, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-0.1em, 0, 0);\n  }\n\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes pop {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(1.1);\n  }\n\n  50% {\n    transform: scale(0.9);\n  }\n\n  75% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes jello {\n  0% {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::selection {\n  background-color: rgb(var(--theme-accent));\n  color: hsl(var(--theme-accent-text));\n}\n\n:root {\n  --font-size: 14px;\n}\n\n@media (min-width: 700px) {\n  :root {\n    --font-size: 16px;\n  }\n}\n\nhtml {\n  font-size: var(--font-size);\n}\n\nbody {\n  font-size: 1rem;\n  min-width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-content: stretch;\n}\n\nhtml,\nbody {\n  transition: background-color var(--layout-transition-extra-fast);\n}\n\nhtml.is-theme-style-dark,\n.is-theme-style-dark body,\nhtml.is-theme-style-light,\n.is-theme-style-light body {\n  background-color: hsl(var(--theme-primary-200));\n  color: hsl(var(--theme-primary-text-200));\n}\n\n@media (prefers-color-scheme: light) {\n\n  html.is-theme-style-system,\n  .is-theme-style-system body {\n    background-color: hsl(var(--theme-primary-200));\n    color: hsl(var(--theme-primary-text-200));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n\n  html.is-theme-style-system,\n  .is-theme-style-system body {\n    background-color: hsl(var(--theme-primary-200));\n    color: hsl(var(--theme-primary-text-200));\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_open_sans_open_sans_300_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);
/* harmony import */ var _font_open_sans_open_sans_300_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314);
/* harmony import */ var _font_open_sans_open_sans_300_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _font_open_sans_open_sans_400_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5557);
/* harmony import */ var _font_open_sans_open_sans_400_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _font_open_sans_open_sans_400_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2565);
/* harmony import */ var _font_open_sans_open_sans_600_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2223);
/* harmony import */ var _font_open_sans_open_sans_600_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5578);
/* harmony import */ var _font_open_sans_open_sans_600_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4221);
/* harmony import */ var _font_open_sans_open_sans_700_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1807);
/* harmony import */ var _font_open_sans_open_sans_700_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(875);
/* harmony import */ var _font_open_sans_open_sans_700_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2292);
/* harmony import */ var _font_open_sans_open_sans_800_woff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5358);
/* harmony import */ var _font_open_sans_open_sans_800_woff2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8741);
/* harmony import */ var _font_open_sans_open_sans_800_ttf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7046);
/* harmony import */ var _font_open_sans_open_sans_italic_300_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6900);
/* harmony import */ var _font_open_sans_open_sans_italic_300_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1743);
/* harmony import */ var _font_open_sans_open_sans_italic_300_ttf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4756);
/* harmony import */ var _font_open_sans_open_sans_italic_400_woff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3835);
/* harmony import */ var _font_open_sans_open_sans_italic_400_woff2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9938);
/* harmony import */ var _font_open_sans_open_sans_italic_400_ttf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2253);
/* harmony import */ var _font_open_sans_open_sans_italic_600_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5944);
/* harmony import */ var _font_open_sans_open_sans_italic_600_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4628);
/* harmony import */ var _font_open_sans_open_sans_italic_600_ttf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7002);
/* harmony import */ var _font_open_sans_open_sans_italic_700_woff__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3272);
/* harmony import */ var _font_open_sans_open_sans_italic_700_woff2__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9567);
/* harmony import */ var _font_open_sans_open_sans_italic_700_ttf__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4186);
/* harmony import */ var _font_open_sans_open_sans_italic_800_woff__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3447);
/* harmony import */ var _font_open_sans_open_sans_italic_800_woff2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5308);
/* harmony import */ var _font_open_sans_open_sans_italic_800_ttf__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(6146);
/* harmony import */ var _font_fjalla_one_fjalla_one_400_woff__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2901);
/* harmony import */ var _font_fjalla_one_fjalla_one_400_woff2__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2108);
/* harmony import */ var _font_fjalla_one_fjalla_one_400_ttf__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(8282);
// Imports



































var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_300_woff__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_300_woff2__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_300_ttf__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_400_woff__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_400_woff2__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_400_ttf__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_600_woff__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_600_woff2__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_600_ttf__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_700_woff__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_700_woff2__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_700_ttf__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_800_woff__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_800_woff2__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_800_ttf__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_300_woff__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_300_woff2__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_300_ttf__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_400_woff__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_400_woff2__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_400_ttf__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_600_woff__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_600_woff2__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_600_ttf__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_700_woff__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_700_woff2__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_700_ttf__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_800_woff__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_800_woff2__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_open_sans_open_sans_italic_800_ttf__WEBPACK_IMPORTED_MODULE_31__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fjalla_one_fjalla_one_400_woff__WEBPACK_IMPORTED_MODULE_32__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fjalla_one_fjalla_one_400_woff2__WEBPACK_IMPORTED_MODULE_33__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fjalla_one_fjalla_one_400_ttf__WEBPACK_IMPORTED_MODULE_34__/* .default */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* open sans */\n/* normal */\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Open Sans Light\"),\n    local(\"OpenSans-Light\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Open Sans Regular\"),\n    local(\"OpenSans-Regular\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Open Sans SemiBold\"),\n    local(\"OpenSans-SemiBold\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Open Sans Bold\"),\n    local(\"OpenSans-Bold\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Open Sans ExtraBold\"),\n    local(\"OpenSans-ExtraBold\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"truetype\");\n}\n\n/* italic */\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 300;\n  font-style: italic;\n  font-display: swap;\n  src:\n    local(\"Open Sans Light Italic\"),\n    local(\"OpenSans-LightItalic\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  font-style: italic;\n  font-display: swap;\n  src:\n    local(\"Open Sans Italic\"),\n    local(\"OpenSans-Italic\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 600;\n  font-style: italic;\n  font-display: swap;\n  src:\n    local(\"Open Sans SemiBold Italic\"),\n    local(\"OpenSans-SemiBoldItalic\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  font-style: italic;\n  font-display: swap;\n  src:\n    local(\"Open Sans Bold Italic\"),\n    local(\"OpenSans-BoldItalic\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"truetype\");\n}\n\n@font-face {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n  font-style: italic;\n  font-display: swap;\n  src:\n    local(\"Open Sans ExtraBold Italic\"),\n    local(\"OpenSans-ExtraBoldItalic\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format(\"truetype\");\n}\n\n/* fjalla one */\n/* normal */\n@font-face {\n  font-family: \"Fjalla One\";\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n  src:\n    local(\"Fjalla One\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format(\"truetype\");\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, Noto Sans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus {\n  outline: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 550px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 700px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 900px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1100px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".is-hidden {\n  display: none !important;\n}\n\n.is-inline-block {\n  display: inline-block !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n.is-transparent {\n  opacity: 0 !important;\n}\n\n.is-opaque {\n  opacity: 1 !important;\n}\n\n.is-invisible {\n  visibility: hidden !important;\n}\n\n.is-visible {\n  visibility: visible !important;\n}\n\n.is-scrolll-disabled {\n  overflow: hidden !important;\n}\n\n.is-small {\n  transform: scale(0.5) !important;\n}\n\n.is-large {\n  transform: scale(1.5) !important;\n}\n\n.is-scroll-disabled {\n  overflow: hidden;\n}\n\n.is-scroll-x-disabled {\n  overflow-x: hidden;\n}\n\n.is-scroll-y-disabled {\n  overflow-y: hidden;\n}\n\n.is-shake {\n  animation: shake var(--layout-transition-slow) 1;\n}\n\n.is-pop {\n  animation: pop var(--layout-transition-medium) 1;\n}\n\n.is-jello {\n  animation: jello var(--layout-transition-slow) 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 1em 0;\n  font-weight: normal;\n  line-height: 1.6;\n  color: hsl(var(--theme-primary-text-100));\n}\n\nh1 {\n  font-size: 1.5em;\n  font-family: var(--theme-font-display-name);\n  font-weight: var(--theme-font-display-weight);\n  font-style: var(--theme-font-display-style);\n}\n\nh2 {\n  font-size: 1.3em;\n  font-family: var(--theme-font-display-name);\n  font-weight: var(--theme-font-display-weight);\n  font-style: var(--theme-font-display-style);\n}\n\nh3 {\n  font-size: 1.1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n}\n\nh4 {\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n}\n\nh5 {\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  font-weight: bold;\n}\n\nh6 {\n  font-size: 0.75em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  font-weight: bold;\n}\n\np {\n  color: hsl(var(--theme-primary-text-100));\n  margin: 0;\n  line-height: 1.6;\n}\n\np:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\nhr {\n  border: 0;\n  border-top: var(--layout-horizontal-rule-small);\n  border-radius: var(--theme-radius-base);\n  margin: calc(var(--form-space) * 2) 0;\n  clear: both;\n  transition: border-color var(--layout-transition-extra-fast);\n}\n\nb,\ncaption,\nstrong {\n  color: hsl(var(--theme-primary-text-100));\n  font-family: var(--theme-font-ui-name);\n  font-weight: 600;\n}\n\ni {\n  font-style: italic;\n}\n\na {\n  color: hsl(var(--theme-primary-text-100));\n  text-decoration: underline;\n  transition: text-decoration var(--layout-transition-extra-fast);\n}\n\na:link,\na:visited {\n  color: hsl(var(--theme-primary-text-100));\n}\n\na:focus {\n  text-decoration-color: hsl(var(--theme-primary-text-100));\n  outline: none;\n}\n\na:hover {\n  color: hsl(var(--theme-primary-text-100));\n  text-decoration-color: rgb(var(--theme-accent));\n}\n\na:active {\n  color: hsl(var(--theme-primary-text-100));\n  text-decoration-color: hsl(var(--theme-primary-text-100));\n}\n\nol,\nul {\n  margin: 0;\n  padding: 0 0 0 1.5em;\n}\n\nol:not(:last-child),\nul:not(:last-child) {\n  margin-bottom: 1em;\n}\n\nli {\n  margin: 0;\n}\n\nli>ul,\nli>ol {\n  margin: 0;\n}\n\nli:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\nli>ul:not(:last-child),\nli>ol:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n\ntable {\n  border: 0;\n  margin: 0 0 1em;\n  padding: 0;\n  width: 100%;\n  border-spacing: 0;\n}\n\ntable thead tr td,\ntable thead tr th {\n  background-color: hsl(var(--theme-primary-300));\n  border: 0;\n  border-bottom: 1px solid hsl(var(--theme-primary-400));\n  padding: 0.5em;\n  margin: 0;\n  text-align: left;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  font-weight: bold;\n  box-sizing: border-box;\n}\n\ntable tr:nth-child(odd) {\n  background-color: hsl(var(--theme-primary-200));\n}\n\ntable tbody tr td,\ntable tbody tr th {\n  padding: 0.25em 0.5em;\n  margin: 0;\n  border: 0;\n  text-align: left;\n  box-sizing: border-box;\n}\n\ncode {\n  background-color: hsl(var(--theme-primary-400));\n  padding: 0.2em 0.5em;\n  border-radius: var(--theme-radius-base);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --utility-muted: var(--theme-primary-700);\n  --utility-muted-hover: var(--theme-primary-700);\n  --utility-muted-focus-active: var(--theme-primary-700);\n  --utility-muted-checked: var(--theme-primary-700);\n  --utility-muted-disabled: var(--theme-primary-300);\n}\n\n.list-unstyled {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-unstyled li {\n  list-style-type: none;\n}\n\n.list-unstyled li:not(:last-child) {\n  margin-bottom: 0;\n}\n\n.list-inline li {\n  display: inline-block;\n}\n\n.small {\n  font-size: 0.8em;\n}\n\n.muted {\n  color: hsl(var(--utility-muted));\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.color-demo {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.baseline-alignment-icon-character {\n  width: 0;\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  padding: 0;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".version {\n  font-size: 1rem;\n  display: inline-grid;\n  grid-template-columns: auto auto;\n  grid-gap: 1em;\n  align-items: center;\n}\n\n.version-icon {\n  width: 4em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --z-index-background: 1000;\n  --z-index-layout: 2000;\n  --z-index-toolbar: 3000;\n  --z-index-shade: 4000;\n  --z-index-menu: 5000;\n  --z-index-modal: 6000;\n  --z-index-auto-suggest: 7000;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bookmark-color: var(--theme-primary-100);\n  --bookmark-color-focus-hover: var(--theme-primary-100);\n  --bookmark-display-visual-color: var(--theme-accent);\n  --bookmark-display-visual-color-focus-hover: var(--theme-accent);\n  --bookmark-display-name-color: var(--theme-primary-text-100);\n  --bookmark-display-name-color-focus-hover: var(--theme-primary-text-100);\n  /* --bookmark-shape: circle(45% at 50% 50%); */\n  /* --bookmark-shape: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0); */\n  --bookmark-shape: url(#bookmark-mask);\n}\n\n.bookmark {\n  position: relative;\n  height: 0;\n  padding-bottom: 86.5%;\n  z-index: 1;\n  transform-style: preserve-3d;\n  grid-row: var(--bookmark-row-start) / span 2;\n  grid-column: var(--bookmark-column-start) / span 3;\n}\n\n.bookmark:focus,\n.bookmark:hover,\n.bookmark:focus-within {\n  z-index: 2;\n}\n\n.bookmark-shadow-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: calc(var(--theme-bookmark-shadow-opacity) / 100);\n  pointer-events: none;\n  transition: transform var(--layout-transition-extra-fast), filter var(--layout-transition-extra-fast);\n  filter: blur(calc(var(--bookmark-shadow-blur) * 0.01em));\n  transform: translateZ(calc(var(--bookmark-shadow-distance) * -0.1em)) scale(calc(1 - calc(var(--bookmark-shadow-distance) / 2000)));\n}\n\n.bookmark:hover .bookmark-shadow-wrap,\n.bookmark-shadow-wrap:hover {\n  transform: translateZ(calc(var(--bookmark-shadow-distance) * -0.1em)) scale(calc(1 - calc(var(--bookmark-shadow-distance) / 2000) - calc(var(--bookmark-hover-distance) / 1000) + calc(var(--bookmark-hover-size) / 100)));\n}\n\n.is-bookmark-edit .bookmark-shadow-wrap,\n.is-bookmark-edit .bookmark:hover .bookmark-shadow-wrap,\n.is-bookmark-edit .bookmark-shadow-wrap:hover {\n  filter: blur(0);\n  transform: translateZ(0) scale(0.2);\n}\n\n.bookmark-shadow {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  clip-path: var(--bookmark-shape);\n}\n\n.is-theme-bookmark-shadow-color-type-theme .bookmark-shadow {\n  background: rgb(var(--theme-accent));\n}\n\n.is-theme-bookmark-shadow-color-type-custom .bookmark-shadow {\n  background: rgb(var(--theme-bookmark-shadow-color));\n}\n\n.bookmark-content-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  pointer-events: none;\n  user-select: none;\n  transition: transform var(--layout-transition-extra-fast);\n  transform: translateZ(0) scale(1);\n}\n\n.bookmark:hover .bookmark-content-wrap,\n.bookmark-content-wrap:hover {\n  transform: translateZ(calc(var(--bookmark-hover-distance) * 0.1em)) scale(calc(1 + calc(var(--bookmark-hover-size) / 100)));\n}\n\n.is-bookmark-edit .bookmark:hover .bookmark-content-wrap,\n.is-bookmark-edit .bookmark-content-wrap:hover {\n  transform: translateZ(0) scale(1);\n}\n\nhtml:not(.is-bookmark-edit) .bookmark:before,\nhtml:not(.is-bookmark-edit) .bookmark:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0;\n  height: 100%;\n  transition: transform var(--layout-transition-extra-fast), width var(--layout-transition-extra-fast);\n}\n\nhtml:not(.is-bookmark-edit) .bookmark:before {\n  transform: translateX(-50%) translateY(-50%) translateZ(0) rotateX(90deg) rotateY(90deg) rotateZ(90deg);\n}\n\nhtml:not(.is-bookmark-edit) .bookmark:after {\n  transform: translateX(-50%) translateY(-50%) translateZ(0) rotateX(90deg) rotateY(0deg) rotateZ(90deg);\n}\n\nhtml:not(.is-bookmark-edit) .bookmark:hover:before {\n  transform: translateX(-50%) translateY(-50%) translateZ(calc(var(--bookmark-hover-distance) * 0.05em)) rotateX(90deg) rotateY(90deg) rotateZ(90deg);\n  width: calc(var(--bookmark-hover-distance) * 0.1em);\n}\n\nhtml:not(.is-bookmark-edit) .bookmark:hover:after {\n  transform: translateX(-50%) translateY(-50%) translateZ(calc(var(--bookmark-hover-distance) * 0.05em)) rotateX(90deg) rotateY(0deg) rotateZ(90deg);\n  width: calc(var(--bookmark-hover-distance) * 0.1em);\n}\n\n.bookmark-link {\n  background-color: hsla(var(--bookmark-color), var(--bookmark-color-opacity));\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  pointer-events: all;\n  overflow: hidden;\n  clip-path: var(--bookmark-shape);\n  transition: background-color var(--layout-transition-extra-fast);\n  text-decoration: none;\n}\n\n.bookmark-link:focus,\n.bookmark-link:hover,\n.bookmark-link:active {\n  text-decoration: none;\n}\n\n.bookmark-link:focus,\n.bookmark-link:hover {\n  background-color: hsla(var(--bookmark-color-focus-hover), var(--bookmark-color-opacity));\n}\n\n.is-bookmark-edit .bookmark-link {\n  pointer-events: none;\n}\n\n.bookmark-display-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: all;\n  z-index: 2;\n}\n\n.bookmark-display {\n  display: flex;\n  flex-direction: var(--bookmark-display-direction);\n  align-items: center;\n  justify-content: center;\n  gap: calc(var(--bookmark-display-gutter) * 0.01em);\n  font-size: 1em;\n  transition: font-size var(--layout-transition-extra-fast);\n  transition-delay: calc(var(--bookmark-transition-delay) * 0.05s);\n  transform: translateX(calc(var(--bookmark-display-translate-x) * 0.1em)) translateY(calc(var(--bookmark-display-translate-y) * 0.1em)) rotate(calc(var(--bookmark-display-rotate) * 1deg));\n}\n\n.is-bookmark-edit .bookmark-display {\n  font-size: 0.5em;\n}\n\n.bookmark-display-visual {\n  color: rgb(var(--bookmark-display-visual-color));\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  transition: color var(--layout-transition-extra-fast);\n}\n\n.bookmark:focus .bookmark-display-visual,\n.bookmark:hover .bookmark-display-visual,\n.bookmark:focus-within .bookmark-display-visual {\n  color: rgb(var(--bookmark-display-visual-color-focus-hover));\n}\n\n.bookmark-display-visual-letter {\n  font-family: var(--theme-font-display-name);\n  font-weight: var(--theme-font-display-weight);\n  font-style: var(--theme-font-display-style);\n  font-size: calc(var(--bookmark-display-visual-size) * 0.1em);\n}\n\n.bookmark-display-visual-icon {\n  font-size: calc(var(--bookmark-display-visual-size) * 0.1em);\n}\n\n.bookmark-display-visual-image {\n  background-image: var(--bookmark-display-visual-image-url);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 1em;\n  height: 1em;\n  font-size: calc(var(--bookmark-display-visual-size) * 0.1em);\n}\n\n.bookmark-display-name {\n  color: hsl(var(--bookmark-display-name-color));\n  font-size: calc(var(--bookmark-display-name-size) * 0.1em);\n  display: flex;\n  justify-content: center;\n  transition: color var(--layout-transition-extra-fast);\n}\n\n.bookmark:focus .bookmark-display-name,\n.bookmark:hover .bookmark-display-name,\n.bookmark:focus-within .bookmark-display-name {\n  color: hsl(var(--bookmark-display-name-color-focus-hover));\n}\n\n.bookmark-display-name-text {\n  text-align: center;\n}\n\n.bookmark-background-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: calc(var(--bookmark-background-opacity) / 100);\n  pointer-events: none;\n  z-index: 1;\n}\n\n.bookmark-background-image {\n  background-image: var(--bookmark-background-image-url);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.bookmark-background-video {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.bookmark-background-video video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n}\n\n.bookmark-control {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  overflow: hidden;\n  clip-path: var(--bookmark-shape);\n  pointer-events: none;\n}\n\n.bookmark-control .bookmark-control-button {\n  padding: 0;\n  border-radius: 0;\n  position: relative;\n  transition: background-color var(--layout-transition-fast), border-color var(--layout-transition-fast), color var(--layout-transition-fast), top var(--layout-transition-fast), right var(--layout-transition-fast), bottom var(--layout-transition-fast), left var(--layout-transition-fast);\n}\n\n.bookmark-control-edit {\n  grid-row: 1;\n  grid-column: 3 / span 2;\n  top: -100%;\n}\n\n.bookmark-control-right {\n  grid-row: 2;\n  grid-column: 5 / span 2;\n  right: -100%;\n}\n\n.bookmark-control-remove {\n  grid-row: 3;\n  grid-column: 3 / span 2;\n  bottom: -100%;\n}\n\n.bookmark-control-left {\n  grid-row: 2;\n  grid-column: 1 / span 2;\n  left: -100%;\n}\n\n.is-bookmark-edit .bookmark-control-edit {\n  top: 0;\n  transition-delay: calc(var(--layout-duration-02) + calc(var(--bookmark-transition-delay) * 0.05s));\n}\n\n.is-bookmark-edit .bookmark-control-right {\n  right: 0;\n  transition-delay: calc(var(--layout-duration-04) + calc(var(--bookmark-transition-delay) * 0.05s));\n}\n\n.is-bookmark-edit .bookmark-control-remove {\n  bottom: 0;\n  transition-delay: calc(var(--layout-duration-02) + calc(var(--bookmark-transition-delay) * 0.05s));\n}\n\n.is-bookmark-edit .bookmark-control-left {\n  left: 0;\n  transition-delay: calc(var(--layout-duration-04) + calc(var(--bookmark-transition-delay) * 0.05s));\n}\n\n.is-bookmark-edit .bookmark-control .bookmark-control-button {\n  pointer-events: all;\n}\n\n.bookmark-form {\n  display: block;\n}\n\n@media (min-width: 900px) {\n  .bookmark-form {\n    display: grid;\n    grid-template-columns: 6fr 3fr;\n    grid-gap: var(--modal-space);\n    align-items: stretch;\n  }\n}\n\n.bookmark-form-main {\n  padding-bottom: calc(var(--form-space) * 20);\n}\n\n.bookmark-form-preview {\n  background-color: hsl(var(--theme-primary-200));\n  padding: var(--modal-space);\n  border-radius: var(--theme-radius-base);\n  position: sticky;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.bookmark-form-aside {\n  display: none;\n}\n\n@media (min-width: 900px) {\n  .bookmark-form-aside {\n    display: block;\n  }\n}\n\n.bookmark-form-text-icon {\n  position: relative;\n}\n\n.bookmark-form-text-icon:empty:before {\n  content: \"\";\n  background-color: hsl(var(--theme-primary-400));\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  display: block;\n  transform: translate(-50%, -50%);\n}\n\n.bookmark-form-text-icon .bookmark-form-icon {\n  transform: scale(1) rotate(0deg);\n  transition: transform var(--layout-transition-extra-fast);\n}\n\n.bookmark-form-text-icon:not(.disabled):hover .bookmark-form-icon {\n  transform: scale(2) rotate(360deg);\n  z-index: 1;\n}\n\n.bookmark-form-text-icon:not(.disabled):active .bookmark-form-icon {\n  transform: scale(4) rotate(360deg);\n}\n\n.bookmark-form-icon {\n  font-size: 1.5em;\n}\n\n.bookmark.bookmark-preview {\n  pointer-events: none;\n}\n\n.bookmark.bookmark-preview .bookmark-control {\n  display: none;\n}\n\n.bookmark.bookmark-preview .bookmark-display {\n  font-size: 1em;\n}\n\n.bookmark.bookmark-preview .bookmark-shadow-wrap {\n  display: none;\n}\n\n.bookmark-mask {\n  position: absolute;\n  width: 0;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --button-background: var(--theme-primary-200);\n  --button-background-focus-hover: var(--theme-primary-300);\n  --button-background-active: var(--theme-primary-400);\n  --button-background-disabled: var(--theme-primary-100);\n}\n\n:root {\n  --button-border: var(--theme-primary-300);\n  --button-border-focus-hover: var(--theme-primary-500);\n  --button-border-active: var(--theme-accent);\n  --button-border-disabled: var(--theme-primary-100);\n}\n\n:root {\n  --button-text: var(--theme-primary-text-200);\n  --button-text-focus-hover: var(--theme-primary-text-300);\n  --button-text-active: var(--theme-primary-text-300);\n  --button-text-disabled: var(--theme-primary-300);\n}\n\n:root {\n  --button-link-text: var(--theme-primary-text-100);\n  --button-link-text-focus-hover: var(--theme-primary-text-100);\n  --button-link-text-active: var(--theme-primary-text-100);\n  --button-link-text-disabled: var(--theme-primary-300);\n}\n\nbutton,\n.button,\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  background-color: hsl(var(--button-background));\n  padding: 0.25em 1.25em;\n  margin: 0;\n  color: hsl(var(--button-text));\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  min-height: 2.5em;\n  line-height: 1;\n  border: 0;\n  border-radius: var(--theme-radius-base);\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-flex;\n  gap: 0.5em;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast);\n}\n\nbutton:focus,\nbutton:hover,\n.button:focus,\n.button:hover,\ninput[type=\"button\"]:focus,\ninput[type=\"button\"]:hover,\ninput[type=\"reset\"]:focus,\ninput[type=\"reset\"]:hover,\ninput[type=\"submit\"]:focus,\ninput[type=\"submit\"]:hover {\n  background-color: hsl(var(--button-background-focus-hover));\n  color: hsl(var(--button-text-focus-hover));\n  outline: none;\n  text-decoration: none;\n}\n\nbutton:active,\n.button:active,\ninput[type=\"button\"]:active,\ninput[type=\"reset\"]:active,\ninput[type=\"submit\"]:active {\n  background-color: hsl(var(--button-background-active));\n  color: hsl(var(--button-text-active));\n  outline: none;\n  text-decoration: none;\n  transition: none;\n}\n\nbutton.active,\n.button.active {\n  background-color: hsl(var(--button-background-active));\n  color: hsl(var(--button-text-active));\n}\n\nbutton.disabled,\nbutton.disabled:hover,\nbutton.disabled:focus,\nbutton.disabled:active,\n.button.disabled,\n.button.disabled:hover,\n.button.disabled:focus,\n.button.disabled:active,\nbutton:disabled,\nbutton:disabled:hover,\nbutton:disabled:focus,\nbutton:disabled:active,\n.button:disabled,\n.button:disabled:hover,\n.button:disabled:focus,\n.button:disabled:active {\n  background-color: hsl(var(--button-background-disabled));\n  color: hsl(var(--button-text-disabled));\n  cursor: default;\n  text-decoration: none;\n}\n\n.button-line:after {\n  content: \"\";\n  background: transparent;\n  border-radius: var(--theme-radius-base);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(0 calc(100% - var(--layout-line-width)), 100% calc(100% - var(--layout-line-width)), 100% 100%, 0% 100%);\n  transition: background-color var(--layout-transition-extra-fast);\n  pointer-events: none;\n}\n\n.button-line:focus:after,\n.button-line:hover:after {\n  background-color: hsl(var(--button-border-focus-hover));\n}\n\n.button-line:active:after,\n.button-line.active:after {\n  background-color: rgb(var(--button-border-active));\n  transition: none;\n}\n\n.button-line.disabled:after,\n.button-line.disabled:hover:after,\n.button-line.disabled:focus:after,\n.button-line.disabled:active:after,\n.button-line:disabled:after,\n.button-line:disabled:hover:after,\n.button-line:disabled:focus:after,\n.button-line:disabled:active:after {\n  background-color: hsl(var(--button-border-disabled));\n}\n\n.button-ring {\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\n.button-ring:focus,\n.button-ring:hover {\n  box-shadow: var(--form-ring-hover);\n}\n\n.button-ring:active,\n.button-ring.active {\n  box-shadow: var(--form-ring-accent);\n}\n\n.button-ring.disabled,\n.button-ring:disabled,\n.button-ring.disabled:focus,\n.button-ring:disabled:focus,\n.button-ring.disabled:hover,\n.button-ring:disabled:hover,\n.button-ring.disabled:active,\n.button-ring:disabled:active {\n  box-shadow: none;\n}\n\n.button-text {\n  pointer-events: none;\n}\n\nbutton .icon,\n.button .icon {\n  line-height: 1;\n  font-size: 1.5em;\n}\n\n.button-small {\n  font-size: 0.8em;\n}\n\n.button-large {\n  font-size: 1.2em;\n}\n\n.button-block {\n  display: flex;\n  width: 100%;\n}\n\nbutton [class^=\"button-\"],\nbutton [class*=\" button-\"],\n.button [class^=\"button-\"],\n.button [class*=\" button-\"] {\n  margin-left: 0.25em;\n  margin-right: 0.25em;\n}\n\nbutton [class^=\"button-\"]:first-child,\nbutton [class*=\" button-\"]:first-child,\n.button [class^=\"button-\"]:first-child,\n.button [class*=\" button-\"]:first-child {\n  margin-left: 0;\n}\n\nbutton [class^=\"button-\"]:last-child,\nbutton [class*=\" button-\"]:last-child,\n.button [class^=\"button-\"]:last-child,\n.button [class*=\" button-\"]:last-child {\n  margin-right: 0;\n}\n\n.button-link {\n  background-color: transparent;\n  border: 0;\n  color: hsl(var(--button-link-text));\n}\n\n.button-link:hover,\n.button-link:focus {\n  background-color: transparent;\n  color: hsl(var(--button-link-text-focus-hover));\n}\n\n.button-link.active,\n.button-link:active {\n  background-color: transparent;\n  color: hsl(var(--button-link-text-active));\n}\n\n.button-link.disabled,\n.button-link:disabled {\n  background-color: transparent;\n  pointer-events: none;\n}\n\n.button-link.disabled:hover,\n.button-link.disabled:focus,\n.button-link:hover:disabled,\n.button-link:focus:disabled {\n  background-color: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".collapse {\n  margin-bottom: -1em;\n  position: relative;\n  display: grid;\n  transition: margin var(--layout-transition-fast);\n}\n\n.collapse-area {\n  margin-top: -1em;\n  margin-bottom: 0;\n  margin-right: -1em;\n  margin-left: -1em;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  transition: margin var(--layout-transition-fast);\n}\n\n.collapse-area.is-collapsed {\n  margin-bottom: -1em;\n}\n\n.collapse-spacer {\n  padding: 1em;\n  transition: margin var(--layout-transition-fast);\n}\n\n.collapse-spacer hr:first-child {\n  margin-top: calc(var(--form-space) * 1);\n}\n\n.collapse-area.is-collapsed .collapse-spacer {\n  margin-bottom: -100vh;\n  position: relative;\n}\n\n.collapse-toggle .icon {\n  transition: transform var(--layout-transition-fast);\n}\n\n.collapse-toggle.is-collapsed .icon {\n  transform: rotate(180deg);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_fa_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6096);
/* harmony import */ var _font_fa_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7460);
/* harmony import */ var _font_fa_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1178);
/* harmony import */ var _font_fa_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6360);
/* harmony import */ var _font_fa_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5374);
/* harmony import */ var _font_fa_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2875);
/* harmony import */ var _font_fa_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1759);
/* harmony import */ var _font_fa_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9342);
/* harmony import */ var _font_fa_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7959);
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_brands_400_woff__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_regular_400_woff__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_solid_900_woff__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_fa_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Font Awesome Free 5.14.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em;\n}\n\n.fa-xs {\n  font-size: .75em;\n}\n\n.fa-sm {\n  font-size: .875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n\n.fa-ul>li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em;\n}\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n  transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n  filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n}\n\n.fa-stack-1x {\n  line-height: inherit;\n}\n\n.fa-stack-2x {\n  font-size: 2em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n\n.fa-accessible-icon:before {\n  content: \"\\f368\";\n}\n\n.fa-accusoft:before {\n  content: \"\\f369\";\n}\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\";\n}\n\n.fa-ad:before {\n  content: \"\\f641\";\n}\n\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n\n.fa-adn:before {\n  content: \"\\f170\";\n}\n\n.fa-adobe:before {\n  content: \"\\f778\";\n}\n\n.fa-adversal:before {\n  content: \"\\f36a\";\n}\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\";\n}\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\";\n}\n\n.fa-airbnb:before {\n  content: \"\\f834\";\n}\n\n.fa-algolia:before {\n  content: \"\\f36c\";\n}\n\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n\n.fa-alipay:before {\n  content: \"\\f642\";\n}\n\n.fa-allergies:before {\n  content: \"\\f461\";\n}\n\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\";\n}\n\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n\n.fa-amilia:before {\n  content: \"\\f36d\";\n}\n\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n\n.fa-android:before {\n  content: \"\\f17b\";\n}\n\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n\n.fa-angry:before {\n  content: \"\\f556\";\n}\n\n.fa-angrycreative:before {\n  content: \"\\f36e\";\n}\n\n.fa-angular:before {\n  content: \"\\f420\";\n}\n\n.fa-ankh:before {\n  content: \"\\f644\";\n}\n\n.fa-app-store:before {\n  content: \"\\f36f\";\n}\n\n.fa-app-store-ios:before {\n  content: \"\\f370\";\n}\n\n.fa-apper:before {\n  content: \"\\f371\";\n}\n\n.fa-apple:before {\n  content: \"\\f179\";\n}\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\";\n}\n\n.fa-apple-pay:before {\n  content: \"\\f415\";\n}\n\n.fa-archive:before {\n  content: \"\\f187\";\n}\n\n.fa-archway:before {\n  content: \"\\f557\";\n}\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\";\n}\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\";\n}\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\";\n}\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\";\n}\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\";\n}\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\";\n}\n\n.fa-artstation:before {\n  content: \"\\f77a\";\n}\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n\n.fa-asymmetrik:before {\n  content: \"\\f372\";\n}\n\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n\n.fa-atlas:before {\n  content: \"\\f558\";\n}\n\n.fa-atlassian:before {\n  content: \"\\f77b\";\n}\n\n.fa-atom:before {\n  content: \"\\f5d2\";\n}\n\n.fa-audible:before {\n  content: \"\\f373\";\n}\n\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\";\n}\n\n.fa-avianex:before {\n  content: \"\\f374\";\n}\n\n.fa-aviato:before {\n  content: \"\\f421\";\n}\n\n.fa-award:before {\n  content: \"\\f559\";\n}\n\n.fa-aws:before {\n  content: \"\\f375\";\n}\n\n.fa-baby:before {\n  content: \"\\f77c\";\n}\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\";\n}\n\n.fa-backspace:before {\n  content: \"\\f55a\";\n}\n\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n\n.fa-bacon:before {\n  content: \"\\f7e5\";\n}\n\n.fa-bacteria:before {\n  content: \"\\e059\";\n}\n\n.fa-bacterium:before {\n  content: \"\\e05a\";\n}\n\n.fa-bahai:before {\n  content: \"\\f666\";\n}\n\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n\n.fa-balance-scale-left:before {\n  content: \"\\f515\";\n}\n\n.fa-balance-scale-right:before {\n  content: \"\\f516\";\n}\n\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n\n.fa-band-aid:before {\n  content: \"\\f462\";\n}\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n\n.fa-baseball-ball:before {\n  content: \"\\f433\";\n}\n\n.fa-basketball-ball:before {\n  content: \"\\f434\";\n}\n\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n\n.fa-battle-net:before {\n  content: \"\\f835\";\n}\n\n.fa-bed:before {\n  content: \"\\f236\";\n}\n\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\";\n}\n\n.fa-bible:before {\n  content: \"\\f647\";\n}\n\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n\n.fa-biking:before {\n  content: \"\\f84a\";\n}\n\n.fa-bimobject:before {\n  content: \"\\f378\";\n}\n\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n\n.fa-biohazard:before {\n  content: \"\\f780\";\n}\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n\n.fa-bitcoin:before {\n  content: \"\\f379\";\n}\n\n.fa-bity:before {\n  content: \"\\f37a\";\n}\n\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n\n.fa-blackberry:before {\n  content: \"\\f37b\";\n}\n\n.fa-blender:before {\n  content: \"\\f517\";\n}\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\";\n}\n\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n\n.fa-blog:before {\n  content: \"\\f781\";\n}\n\n.fa-blogger:before {\n  content: \"\\f37c\";\n}\n\n.fa-blogger-b:before {\n  content: \"\\f37d\";\n}\n\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n\n.fa-bold:before {\n  content: \"\\f032\";\n}\n\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n\n.fa-bone:before {\n  content: \"\\f5d7\";\n}\n\n.fa-bong:before {\n  content: \"\\f55c\";\n}\n\n.fa-book:before {\n  content: \"\\f02d\";\n}\n\n.fa-book-dead:before {\n  content: \"\\f6b7\";\n}\n\n.fa-book-medical:before {\n  content: \"\\f7e6\";\n}\n\n.fa-book-open:before {\n  content: \"\\f518\";\n}\n\n.fa-book-reader:before {\n  content: \"\\f5da\";\n}\n\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n\n.fa-bootstrap:before {\n  content: \"\\f836\";\n}\n\n.fa-border-all:before {\n  content: \"\\f84c\";\n}\n\n.fa-border-none:before {\n  content: \"\\f850\";\n}\n\n.fa-border-style:before {\n  content: \"\\f853\";\n}\n\n.fa-bowling-ball:before {\n  content: \"\\f436\";\n}\n\n.fa-box:before {\n  content: \"\\f466\";\n}\n\n.fa-box-open:before {\n  content: \"\\f49e\";\n}\n\n.fa-box-tissue:before {\n  content: \"\\e05b\";\n}\n\n.fa-boxes:before {\n  content: \"\\f468\";\n}\n\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n\n.fa-brain:before {\n  content: \"\\f5dc\";\n}\n\n.fa-bread-slice:before {\n  content: \"\\f7ec\";\n}\n\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\";\n}\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\";\n}\n\n.fa-broom:before {\n  content: \"\\f51a\";\n}\n\n.fa-brush:before {\n  content: \"\\f55d\";\n}\n\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n\n.fa-buffer:before {\n  content: \"\\f837\";\n}\n\n.fa-bug:before {\n  content: \"\\f188\";\n}\n\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n\n.fa-burn:before {\n  content: \"\\f46a\";\n}\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\";\n}\n\n.fa-bus:before {\n  content: \"\\f207\";\n}\n\n.fa-bus-alt:before {\n  content: \"\\f55e\";\n}\n\n.fa-business-time:before {\n  content: \"\\f64a\";\n}\n\n.fa-buy-n-large:before {\n  content: \"\\f8a6\";\n}\n\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n\n.fa-calendar:before {\n  content: \"\\f133\";\n}\n\n.fa-calendar-alt:before {\n  content: \"\\f073\";\n}\n\n.fa-calendar-check:before {\n  content: \"\\f274\";\n}\n\n.fa-calendar-day:before {\n  content: \"\\f783\";\n}\n\n.fa-calendar-minus:before {\n  content: \"\\f272\";\n}\n\n.fa-calendar-plus:before {\n  content: \"\\f271\";\n}\n\n.fa-calendar-times:before {\n  content: \"\\f273\";\n}\n\n.fa-calendar-week:before {\n  content: \"\\f784\";\n}\n\n.fa-camera:before {\n  content: \"\\f030\";\n}\n\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n\n.fa-campground:before {\n  content: \"\\f6bb\";\n}\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\";\n}\n\n.fa-candy-cane:before {\n  content: \"\\f786\";\n}\n\n.fa-cannabis:before {\n  content: \"\\f55f\";\n}\n\n.fa-capsules:before {\n  content: \"\\f46b\";\n}\n\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n\n.fa-car-alt:before {\n  content: \"\\f5de\";\n}\n\n.fa-car-battery:before {\n  content: \"\\f5df\";\n}\n\n.fa-car-crash:before {\n  content: \"\\f5e1\";\n}\n\n.fa-car-side:before {\n  content: \"\\f5e4\";\n}\n\n.fa-caravan:before {\n  content: \"\\f8ff\";\n}\n\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n\n.fa-caret-square-down:before {\n  content: \"\\f150\";\n}\n\n.fa-caret-square-left:before {\n  content: \"\\f191\";\n}\n\n.fa-caret-square-right:before {\n  content: \"\\f152\";\n}\n\n.fa-caret-square-up:before {\n  content: \"\\f151\";\n}\n\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n\n.fa-carrot:before {\n  content: \"\\f787\";\n}\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n\n.fa-cash-register:before {\n  content: \"\\f788\";\n}\n\n.fa-cat:before {\n  content: \"\\f6be\";\n}\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\";\n}\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\";\n}\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n\n.fa-centercode:before {\n  content: \"\\f380\";\n}\n\n.fa-centos:before {\n  content: \"\\f789\";\n}\n\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n\n.fa-chair:before {\n  content: \"\\f6c0\";\n}\n\n.fa-chalkboard:before {\n  content: \"\\f51b\";\n}\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\";\n}\n\n.fa-charging-station:before {\n  content: \"\\f5e7\";\n}\n\n.fa-chart-area:before {\n  content: \"\\f1fe\";\n}\n\n.fa-chart-bar:before {\n  content: \"\\f080\";\n}\n\n.fa-chart-line:before {\n  content: \"\\f201\";\n}\n\n.fa-chart-pie:before {\n  content: \"\\f200\";\n}\n\n.fa-check:before {\n  content: \"\\f00c\";\n}\n\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n\n.fa-check-double:before {\n  content: \"\\f560\";\n}\n\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n\n.fa-cheese:before {\n  content: \"\\f7ef\";\n}\n\n.fa-chess:before {\n  content: \"\\f439\";\n}\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\";\n}\n\n.fa-chess-board:before {\n  content: \"\\f43c\";\n}\n\n.fa-chess-king:before {\n  content: \"\\f43f\";\n}\n\n.fa-chess-knight:before {\n  content: \"\\f441\";\n}\n\n.fa-chess-pawn:before {\n  content: \"\\f443\";\n}\n\n.fa-chess-queen:before {\n  content: \"\\f445\";\n}\n\n.fa-chess-rook:before {\n  content: \"\\f447\";\n}\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n\n.fa-chromecast:before {\n  content: \"\\f838\";\n}\n\n.fa-church:before {\n  content: \"\\f51d\";\n}\n\n.fa-circle:before {\n  content: \"\\f111\";\n}\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\";\n}\n\n.fa-city:before {\n  content: \"\\f64f\";\n}\n\n.fa-clinic-medical:before {\n  content: \"\\f7f2\";\n}\n\n.fa-clipboard:before {\n  content: \"\\f328\";\n}\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\";\n}\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\";\n}\n\n.fa-clock:before {\n  content: \"\\f017\";\n}\n\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\";\n}\n\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\";\n}\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\";\n}\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\";\n}\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\";\n}\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\";\n}\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\";\n}\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\";\n}\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\";\n}\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\";\n}\n\n.fa-cloudscale:before {\n  content: \"\\f383\";\n}\n\n.fa-cloudsmith:before {\n  content: \"\\f384\";\n}\n\n.fa-cloudversify:before {\n  content: \"\\f385\";\n}\n\n.fa-cocktail:before {\n  content: \"\\f561\";\n}\n\n.fa-code:before {\n  content: \"\\f121\";\n}\n\n.fa-code-branch:before {\n  content: \"\\f126\";\n}\n\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n\n.fa-cog:before {\n  content: \"\\f013\";\n}\n\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n\n.fa-coins:before {\n  content: \"\\f51e\";\n}\n\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n\n.fa-comment:before {\n  content: \"\\f075\";\n}\n\n.fa-comment-alt:before {\n  content: \"\\f27a\";\n}\n\n.fa-comment-dollar:before {\n  content: \"\\f651\";\n}\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\";\n}\n\n.fa-comment-medical:before {\n  content: \"\\f7f5\";\n}\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\";\n}\n\n.fa-comments:before {\n  content: \"\\f086\";\n}\n\n.fa-comments-dollar:before {\n  content: \"\\f653\";\n}\n\n.fa-compact-disc:before {\n  content: \"\\f51f\";\n}\n\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n\n.fa-compress:before {\n  content: \"\\f066\";\n}\n\n.fa-compress-alt:before {\n  content: \"\\f422\";\n}\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\";\n}\n\n.fa-concierge-bell:before {\n  content: \"\\f562\";\n}\n\n.fa-confluence:before {\n  content: \"\\f78d\";\n}\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n\n.fa-cookie:before {\n  content: \"\\f563\";\n}\n\n.fa-cookie-bite:before {\n  content: \"\\f564\";\n}\n\n.fa-copy:before {\n  content: \"\\f0c5\";\n}\n\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\";\n}\n\n.fa-couch:before {\n  content: \"\\f4b8\";\n}\n\n.fa-cpanel:before {\n  content: \"\\f388\";\n}\n\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\";\n}\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\";\n}\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\";\n}\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\";\n}\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\";\n}\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\";\n}\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\";\n}\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\";\n}\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\";\n}\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\";\n}\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\";\n}\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\";\n}\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\";\n}\n\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n\n.fa-critical-role:before {\n  content: \"\\f6c9\";\n}\n\n.fa-crop:before {\n  content: \"\\f125\";\n}\n\n.fa-crop-alt:before {\n  content: \"\\f565\";\n}\n\n.fa-cross:before {\n  content: \"\\f654\";\n}\n\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n\n.fa-crow:before {\n  content: \"\\f520\";\n}\n\n.fa-crown:before {\n  content: \"\\f521\";\n}\n\n.fa-crutch:before {\n  content: \"\\f7f7\";\n}\n\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n\n.fa-css3-alt:before {\n  content: \"\\f38b\";\n}\n\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n\n.fa-cut:before {\n  content: \"\\f0c4\";\n}\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\";\n}\n\n.fa-d-and-d:before {\n  content: \"\\f38d\";\n}\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\";\n}\n\n.fa-dailymotion:before {\n  content: \"\\e052\";\n}\n\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n\n.fa-deezer:before {\n  content: \"\\e077\";\n}\n\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n\n.fa-democrat:before {\n  content: \"\\f747\";\n}\n\n.fa-deploydog:before {\n  content: \"\\f38e\";\n}\n\n.fa-deskpro:before {\n  content: \"\\f38f\";\n}\n\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n\n.fa-dev:before {\n  content: \"\\f6cc\";\n}\n\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n\n.fa-dharmachakra:before {\n  content: \"\\f655\";\n}\n\n.fa-dhl:before {\n  content: \"\\f790\";\n}\n\n.fa-diagnoses:before {\n  content: \"\\f470\";\n}\n\n.fa-diaspora:before {\n  content: \"\\f791\";\n}\n\n.fa-dice:before {\n  content: \"\\f522\";\n}\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\";\n}\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\";\n}\n\n.fa-dice-five:before {\n  content: \"\\f523\";\n}\n\n.fa-dice-four:before {\n  content: \"\\f524\";\n}\n\n.fa-dice-one:before {\n  content: \"\\f525\";\n}\n\n.fa-dice-six:before {\n  content: \"\\f526\";\n}\n\n.fa-dice-three:before {\n  content: \"\\f527\";\n}\n\n.fa-dice-two:before {\n  content: \"\\f528\";\n}\n\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n\n.fa-digital-ocean:before {\n  content: \"\\f391\";\n}\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\";\n}\n\n.fa-directions:before {\n  content: \"\\f5eb\";\n}\n\n.fa-discord:before {\n  content: \"\\f392\";\n}\n\n.fa-discourse:before {\n  content: \"\\f393\";\n}\n\n.fa-disease:before {\n  content: \"\\f7fa\";\n}\n\n.fa-divide:before {\n  content: \"\\f529\";\n}\n\n.fa-dizzy:before {\n  content: \"\\f567\";\n}\n\n.fa-dna:before {\n  content: \"\\f471\";\n}\n\n.fa-dochub:before {\n  content: \"\\f394\";\n}\n\n.fa-docker:before {\n  content: \"\\f395\";\n}\n\n.fa-dog:before {\n  content: \"\\f6d3\";\n}\n\n.fa-dollar-sign:before {\n  content: \"\\f155\";\n}\n\n.fa-dolly:before {\n  content: \"\\f472\";\n}\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\";\n}\n\n.fa-donate:before {\n  content: \"\\f4b9\";\n}\n\n.fa-door-closed:before {\n  content: \"\\f52a\";\n}\n\n.fa-door-open:before {\n  content: \"\\f52b\";\n}\n\n.fa-dot-circle:before {\n  content: \"\\f192\";\n}\n\n.fa-dove:before {\n  content: \"\\f4ba\";\n}\n\n.fa-download:before {\n  content: \"\\f019\";\n}\n\n.fa-draft2digital:before {\n  content: \"\\f396\";\n}\n\n.fa-drafting-compass:before {\n  content: \"\\f568\";\n}\n\n.fa-dragon:before {\n  content: \"\\f6d5\";\n}\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\";\n}\n\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n\n.fa-dribbble-square:before {\n  content: \"\\f397\";\n}\n\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n\n.fa-drum:before {\n  content: \"\\f569\";\n}\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\";\n}\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\";\n}\n\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n\n.fa-dumbbell:before {\n  content: \"\\f44b\";\n}\n\n.fa-dumpster:before {\n  content: \"\\f793\";\n}\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\";\n}\n\n.fa-dungeon:before {\n  content: \"\\f6d9\";\n}\n\n.fa-dyalog:before {\n  content: \"\\f399\";\n}\n\n.fa-earlybirds:before {\n  content: \"\\f39a\";\n}\n\n.fa-ebay:before {\n  content: \"\\f4f4\";\n}\n\n.fa-edge:before {\n  content: \"\\f282\";\n}\n\n.fa-edge-legacy:before {\n  content: \"\\e078\";\n}\n\n.fa-edit:before {\n  content: \"\\f044\";\n}\n\n.fa-egg:before {\n  content: \"\\f7fb\";\n}\n\n.fa-eject:before {\n  content: \"\\f052\";\n}\n\n.fa-elementor:before {\n  content: \"\\f430\";\n}\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n\n.fa-ello:before {\n  content: \"\\f5f1\";\n}\n\n.fa-ember:before {\n  content: \"\\f423\";\n}\n\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\";\n}\n\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n\n.fa-envira:before {\n  content: \"\\f299\";\n}\n\n.fa-equals:before {\n  content: \"\\f52c\";\n}\n\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n\n.fa-erlang:before {\n  content: \"\\f39d\";\n}\n\n.fa-ethereum:before {\n  content: \"\\f42e\";\n}\n\n.fa-ethernet:before {\n  content: \"\\f796\";\n}\n\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n\n.fa-euro-sign:before {\n  content: \"\\f153\";\n}\n\n.fa-evernote:before {\n  content: \"\\f839\";\n}\n\n.fa-exchange-alt:before {\n  content: \"\\f362\";\n}\n\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n\n.fa-expand:before {\n  content: \"\\f065\";\n}\n\n.fa-expand-alt:before {\n  content: \"\\f424\";\n}\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\";\n}\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\";\n}\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\";\n}\n\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\";\n}\n\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n\n.fa-facebook-f:before {\n  content: \"\\f39e\";\n}\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\";\n}\n\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n\n.fa-fan:before {\n  content: \"\\f863\";\n}\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\";\n}\n\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n\n.fa-faucet:before {\n  content: \"\\e005\";\n}\n\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n\n.fa-feather:before {\n  content: \"\\f52d\";\n}\n\n.fa-feather-alt:before {\n  content: \"\\f56b\";\n}\n\n.fa-fedex:before {\n  content: \"\\f797\";\n}\n\n.fa-fedora:before {\n  content: \"\\f798\";\n}\n\n.fa-female:before {\n  content: \"\\f182\";\n}\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n\n.fa-figma:before {\n  content: \"\\f799\";\n}\n\n.fa-file:before {\n  content: \"\\f15b\";\n}\n\n.fa-file-alt:before {\n  content: \"\\f15c\";\n}\n\n.fa-file-archive:before {\n  content: \"\\f1c6\";\n}\n\n.fa-file-audio:before {\n  content: \"\\f1c7\";\n}\n\n.fa-file-code:before {\n  content: \"\\f1c9\";\n}\n\n.fa-file-contract:before {\n  content: \"\\f56c\";\n}\n\n.fa-file-csv:before {\n  content: \"\\f6dd\";\n}\n\n.fa-file-download:before {\n  content: \"\\f56d\";\n}\n\n.fa-file-excel:before {\n  content: \"\\f1c3\";\n}\n\n.fa-file-export:before {\n  content: \"\\f56e\";\n}\n\n.fa-file-image:before {\n  content: \"\\f1c5\";\n}\n\n.fa-file-import:before {\n  content: \"\\f56f\";\n}\n\n.fa-file-invoice:before {\n  content: \"\\f570\";\n}\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\";\n}\n\n.fa-file-medical:before {\n  content: \"\\f477\";\n}\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\";\n}\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\";\n}\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\";\n}\n\n.fa-file-prescription:before {\n  content: \"\\f572\";\n}\n\n.fa-file-signature:before {\n  content: \"\\f573\";\n}\n\n.fa-file-upload:before {\n  content: \"\\f574\";\n}\n\n.fa-file-video:before {\n  content: \"\\f1c8\";\n}\n\n.fa-file-word:before {\n  content: \"\\f1c2\";\n}\n\n.fa-fill:before {\n  content: \"\\f575\";\n}\n\n.fa-fill-drip:before {\n  content: \"\\f576\";\n}\n\n.fa-film:before {\n  content: \"\\f008\";\n}\n\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n\n.fa-fingerprint:before {\n  content: \"\\f577\";\n}\n\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\";\n}\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n\n.fa-firefox-browser:before {\n  content: \"\\e007\";\n}\n\n.fa-first-aid:before {\n  content: \"\\f479\";\n}\n\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\";\n}\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\";\n}\n\n.fa-fish:before {\n  content: \"\\f578\";\n}\n\n.fa-fist-raised:before {\n  content: \"\\f6de\";\n}\n\n.fa-flag:before {\n  content: \"\\f024\";\n}\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n\n.fa-flag-usa:before {\n  content: \"\\f74d\";\n}\n\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n\n.fa-flipboard:before {\n  content: \"\\f44d\";\n}\n\n.fa-flushed:before {\n  content: \"\\f579\";\n}\n\n.fa-fly:before {\n  content: \"\\f417\";\n}\n\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n\n.fa-folder-minus:before {\n  content: \"\\f65d\";\n}\n\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n\n.fa-folder-plus:before {\n  content: \"\\f65e\";\n}\n\n.fa-font:before {\n  content: \"\\f031\";\n}\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\";\n}\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\";\n}\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\";\n}\n\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\";\n}\n\n.fa-football-ball:before {\n  content: \"\\f44e\";\n}\n\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\";\n}\n\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n\n.fa-freebsd:before {\n  content: \"\\f3a4\";\n}\n\n.fa-frog:before {\n  content: \"\\f52e\";\n}\n\n.fa-frown:before {\n  content: \"\\f119\";\n}\n\n.fa-frown-open:before {\n  content: \"\\f57a\";\n}\n\n.fa-fulcrum:before {\n  content: \"\\f50b\";\n}\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\";\n}\n\n.fa-futbol:before {\n  content: \"\\f1e3\";\n}\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\";\n}\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\";\n}\n\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n\n.fa-gas-pump:before {\n  content: \"\\f52f\";\n}\n\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n\n.fa-gem:before {\n  content: \"\\f3a5\";\n}\n\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n\n.fa-gg:before {\n  content: \"\\f260\";\n}\n\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n\n.fa-ghost:before {\n  content: \"\\f6e2\";\n}\n\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n\n.fa-gifts:before {\n  content: \"\\f79c\";\n}\n\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n\n.fa-git-alt:before {\n  content: \"\\f841\";\n}\n\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n\n.fa-github:before {\n  content: \"\\f09b\";\n}\n\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\";\n}\n\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n\n.fa-gitter:before {\n  content: \"\\f426\";\n}\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\";\n}\n\n.fa-glass-martini:before {\n  content: \"\\f000\";\n}\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\";\n}\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\";\n}\n\n.fa-glasses:before {\n  content: \"\\f530\";\n}\n\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n\n.fa-globe-africa:before {\n  content: \"\\f57c\";\n}\n\n.fa-globe-americas:before {\n  content: \"\\f57d\";\n}\n\n.fa-globe-asia:before {\n  content: \"\\f57e\";\n}\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\";\n}\n\n.fa-gofore:before {\n  content: \"\\f3a7\";\n}\n\n.fa-golf-ball:before {\n  content: \"\\f450\";\n}\n\n.fa-goodreads:before {\n  content: \"\\f3a8\";\n}\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\";\n}\n\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n\n.fa-google-drive:before {\n  content: \"\\f3aa\";\n}\n\n.fa-google-pay:before {\n  content: \"\\e079\";\n}\n\n.fa-google-play:before {\n  content: \"\\f3ab\";\n}\n\n.fa-google-plus:before {\n  content: \"\\f2b3\";\n}\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\";\n}\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n\n.fa-gopuram:before {\n  content: \"\\f664\";\n}\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n\n.fa-greater-than:before {\n  content: \"\\f531\";\n}\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\";\n}\n\n.fa-grimace:before {\n  content: \"\\f57f\";\n}\n\n.fa-grin:before {\n  content: \"\\f580\";\n}\n\n.fa-grin-alt:before {\n  content: \"\\f581\";\n}\n\n.fa-grin-beam:before {\n  content: \"\\f582\";\n}\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\";\n}\n\n.fa-grin-hearts:before {\n  content: \"\\f584\";\n}\n\n.fa-grin-squint:before {\n  content: \"\\f585\";\n}\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\";\n}\n\n.fa-grin-stars:before {\n  content: \"\\f587\";\n}\n\n.fa-grin-tears:before {\n  content: \"\\f588\";\n}\n\n.fa-grin-tongue:before {\n  content: \"\\f589\";\n}\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\";\n}\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\";\n}\n\n.fa-grin-wink:before {\n  content: \"\\f58c\";\n}\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\";\n}\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\";\n}\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\";\n}\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\";\n}\n\n.fa-gripfire:before {\n  content: \"\\f3ac\";\n}\n\n.fa-grunt:before {\n  content: \"\\f3ad\";\n}\n\n.fa-guitar:before {\n  content: \"\\f7a6\";\n}\n\n.fa-gulp:before {\n  content: \"\\f3ae\";\n}\n\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\";\n}\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\";\n}\n\n.fa-hamburger:before {\n  content: \"\\f805\";\n}\n\n.fa-hammer:before {\n  content: \"\\f6e3\";\n}\n\n.fa-hamsa:before {\n  content: \"\\f665\";\n}\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\";\n}\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\";\n}\n\n.fa-hand-holding-medical:before {\n  content: \"\\e05c\";\n}\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\";\n}\n\n.fa-hand-holding-water:before {\n  content: \"\\f4c1\";\n}\n\n.fa-hand-lizard:before {\n  content: \"\\f258\";\n}\n\n.fa-hand-middle-finger:before {\n  content: \"\\f806\";\n}\n\n.fa-hand-paper:before {\n  content: \"\\f256\";\n}\n\n.fa-hand-peace:before {\n  content: \"\\f25b\";\n}\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\";\n}\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\";\n}\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\";\n}\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\";\n}\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\";\n}\n\n.fa-hand-rock:before {\n  content: \"\\f255\";\n}\n\n.fa-hand-scissors:before {\n  content: \"\\f257\";\n}\n\n.fa-hand-sparkles:before {\n  content: \"\\e05d\";\n}\n\n.fa-hand-spock:before {\n  content: \"\\f259\";\n}\n\n.fa-hands:before {\n  content: \"\\f4c2\";\n}\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\";\n}\n\n.fa-hands-wash:before {\n  content: \"\\e05e\";\n}\n\n.fa-handshake:before {\n  content: \"\\f2b5\";\n}\n\n.fa-handshake-alt-slash:before {\n  content: \"\\e05f\";\n}\n\n.fa-handshake-slash:before {\n  content: \"\\e060\";\n}\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\";\n}\n\n.fa-hard-hat:before {\n  content: \"\\f807\";\n}\n\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n\n.fa-hat-cowboy:before {\n  content: \"\\f8c0\";\n}\n\n.fa-hat-cowboy-side:before {\n  content: \"\\f8c1\";\n}\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\";\n}\n\n.fa-hdd:before {\n  content: \"\\f0a0\";\n}\n\n.fa-head-side-cough:before {\n  content: \"\\e061\";\n}\n\n.fa-head-side-cough-slash:before {\n  content: \"\\e062\";\n}\n\n.fa-head-side-mask:before {\n  content: \"\\e063\";\n}\n\n.fa-head-side-virus:before {\n  content: \"\\e064\";\n}\n\n.fa-heading:before {\n  content: \"\\f1dc\";\n}\n\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\";\n}\n\n.fa-headset:before {\n  content: \"\\f590\";\n}\n\n.fa-heart:before {\n  content: \"\\f004\";\n}\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\";\n}\n\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n\n.fa-helicopter:before {\n  content: \"\\f533\";\n}\n\n.fa-highlighter:before {\n  content: \"\\f591\";\n}\n\n.fa-hiking:before {\n  content: \"\\f6ec\";\n}\n\n.fa-hippo:before {\n  content: \"\\f6ed\";\n}\n\n.fa-hips:before {\n  content: \"\\f452\";\n}\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\";\n}\n\n.fa-history:before {\n  content: \"\\f1da\";\n}\n\n.fa-hockey-puck:before {\n  content: \"\\f453\";\n}\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\";\n}\n\n.fa-home:before {\n  content: \"\\f015\";\n}\n\n.fa-hooli:before {\n  content: \"\\f427\";\n}\n\n.fa-hornbill:before {\n  content: \"\\f592\";\n}\n\n.fa-horse:before {\n  content: \"\\f6f0\";\n}\n\n.fa-horse-head:before {\n  content: \"\\f7ab\";\n}\n\n.fa-hospital:before {\n  content: \"\\f0f8\";\n}\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\";\n}\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\";\n}\n\n.fa-hospital-user:before {\n  content: \"\\f80d\";\n}\n\n.fa-hot-tub:before {\n  content: \"\\f593\";\n}\n\n.fa-hotdog:before {\n  content: \"\\f80f\";\n}\n\n.fa-hotel:before {\n  content: \"\\f594\";\n}\n\n.fa-hotjar:before {\n  content: \"\\f3b1\";\n}\n\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n\n.fa-house-damage:before {\n  content: \"\\f6f1\";\n}\n\n.fa-house-user:before {\n  content: \"\\e065\";\n}\n\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\";\n}\n\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n\n.fa-hubspot:before {\n  content: \"\\f3b2\";\n}\n\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n\n.fa-ice-cream:before {\n  content: \"\\f810\";\n}\n\n.fa-icicles:before {\n  content: \"\\f7ad\";\n}\n\n.fa-icons:before {\n  content: \"\\f86d\";\n}\n\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\";\n}\n\n.fa-ideal:before {\n  content: \"\\e013\";\n}\n\n.fa-igloo:before {\n  content: \"\\f7ae\";\n}\n\n.fa-image:before {\n  content: \"\\f03e\";\n}\n\n.fa-images:before {\n  content: \"\\f302\";\n}\n\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n\n.fa-industry:before {\n  content: \"\\f275\";\n}\n\n.fa-infinity:before {\n  content: \"\\f534\";\n}\n\n.fa-info:before {\n  content: \"\\f129\";\n}\n\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n\n.fa-instagram-square:before {\n  content: \"\\e055\";\n}\n\n.fa-intercom:before {\n  content: \"\\f7af\";\n}\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n\n.fa-invision:before {\n  content: \"\\f7b0\";\n}\n\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n\n.fa-italic:before {\n  content: \"\\f033\";\n}\n\n.fa-itch-io:before {\n  content: \"\\f83a\";\n}\n\n.fa-itunes:before {\n  content: \"\\f3b4\";\n}\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\";\n}\n\n.fa-java:before {\n  content: \"\\f4e4\";\n}\n\n.fa-jedi:before {\n  content: \"\\f669\";\n}\n\n.fa-jedi-order:before {\n  content: \"\\f50e\";\n}\n\n.fa-jenkins:before {\n  content: \"\\f3b6\";\n}\n\n.fa-jira:before {\n  content: \"\\f7b1\";\n}\n\n.fa-joget:before {\n  content: \"\\f3b7\";\n}\n\n.fa-joint:before {\n  content: \"\\f595\";\n}\n\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n\n.fa-journal-whills:before {\n  content: \"\\f66a\";\n}\n\n.fa-js:before {\n  content: \"\\f3b8\";\n}\n\n.fa-js-square:before {\n  content: \"\\f3b9\";\n}\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n\n.fa-kaaba:before {\n  content: \"\\f66b\";\n}\n\n.fa-kaggle:before {\n  content: \"\\f5fa\";\n}\n\n.fa-key:before {\n  content: \"\\f084\";\n}\n\n.fa-keybase:before {\n  content: \"\\f4f5\";\n}\n\n.fa-keyboard:before {\n  content: \"\\f11c\";\n}\n\n.fa-keycdn:before {\n  content: \"\\f3ba\";\n}\n\n.fa-khanda:before {\n  content: \"\\f66d\";\n}\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\";\n}\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\";\n}\n\n.fa-kiss:before {\n  content: \"\\f596\";\n}\n\n.fa-kiss-beam:before {\n  content: \"\\f597\";\n}\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\";\n}\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\";\n}\n\n.fa-korvue:before {\n  content: \"\\f42f\";\n}\n\n.fa-landmark:before {\n  content: \"\\f66f\";\n}\n\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\";\n}\n\n.fa-laptop-house:before {\n  content: \"\\e066\";\n}\n\n.fa-laptop-medical:before {\n  content: \"\\f812\";\n}\n\n.fa-laravel:before {\n  content: \"\\f3bd\";\n}\n\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n\n.fa-laugh:before {\n  content: \"\\f599\";\n}\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\";\n}\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\";\n}\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\";\n}\n\n.fa-layer-group:before {\n  content: \"\\f5fd\";\n}\n\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n\n.fa-lemon:before {\n  content: \"\\f094\";\n}\n\n.fa-less:before {\n  content: \"\\f41d\";\n}\n\n.fa-less-than:before {\n  content: \"\\f536\";\n}\n\n.fa-less-than-equal:before {\n  content: \"\\f537\";\n}\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\";\n}\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\";\n}\n\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\";\n}\n\n.fa-line:before {\n  content: \"\\f3c0\";\n}\n\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n\n.fa-linkedin:before {\n  content: \"\\f08c\";\n}\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\";\n}\n\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n\n.fa-lira-sign:before {\n  content: \"\\f195\";\n}\n\n.fa-list:before {\n  content: \"\\f03a\";\n}\n\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n\n.fa-lock:before {\n  content: \"\\f023\";\n}\n\n.fa-lock-open:before {\n  content: \"\\f3c1\";\n}\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\";\n}\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\";\n}\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\";\n}\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\";\n}\n\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\";\n}\n\n.fa-lungs:before {\n  content: \"\\f604\";\n}\n\n.fa-lungs-virus:before {\n  content: \"\\e067\";\n}\n\n.fa-lyft:before {\n  content: \"\\f3c3\";\n}\n\n.fa-magento:before {\n  content: \"\\f3c4\";\n}\n\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n\n.fa-mail-bulk:before {\n  content: \"\\f674\";\n}\n\n.fa-mailchimp:before {\n  content: \"\\f59e\";\n}\n\n.fa-male:before {\n  content: \"\\f183\";\n}\n\n.fa-mandalorian:before {\n  content: \"\\f50f\";\n}\n\n.fa-map:before {\n  content: \"\\f279\";\n}\n\n.fa-map-marked:before {\n  content: \"\\f59f\";\n}\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\";\n}\n\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\";\n}\n\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n\n.fa-markdown:before {\n  content: \"\\f60f\";\n}\n\n.fa-marker:before {\n  content: \"\\f5a1\";\n}\n\n.fa-mars:before {\n  content: \"\\f222\";\n}\n\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n\n.fa-mask:before {\n  content: \"\\f6fa\";\n}\n\n.fa-mastodon:before {\n  content: \"\\f4f6\";\n}\n\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n\n.fa-mdb:before {\n  content: \"\\f8ca\";\n}\n\n.fa-medal:before {\n  content: \"\\f5a2\";\n}\n\n.fa-medapps:before {\n  content: \"\\f3c6\";\n}\n\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n\n.fa-medium-m:before {\n  content: \"\\f3c7\";\n}\n\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n\n.fa-medrt:before {\n  content: \"\\f3c8\";\n}\n\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n\n.fa-megaport:before {\n  content: \"\\f5a3\";\n}\n\n.fa-meh:before {\n  content: \"\\f11a\";\n}\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\";\n}\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\";\n}\n\n.fa-memory:before {\n  content: \"\\f538\";\n}\n\n.fa-mendeley:before {\n  content: \"\\f7b3\";\n}\n\n.fa-menorah:before {\n  content: \"\\f676\";\n}\n\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n\n.fa-meteor:before {\n  content: \"\\f753\";\n}\n\n.fa-microblog:before {\n  content: \"\\e01a\";\n}\n\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\";\n}\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\";\n}\n\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n\n.fa-microscope:before {\n  content: \"\\f610\";\n}\n\n.fa-microsoft:before {\n  content: \"\\f3ca\";\n}\n\n.fa-minus:before {\n  content: \"\\f068\";\n}\n\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n\n.fa-mitten:before {\n  content: \"\\f7b5\";\n}\n\n.fa-mix:before {\n  content: \"\\f3cb\";\n}\n\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n\n.fa-mixer:before {\n  content: \"\\e056\";\n}\n\n.fa-mizuni:before {\n  content: \"\\f3cc\";\n}\n\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\";\n}\n\n.fa-modx:before {\n  content: \"\\f285\";\n}\n\n.fa-monero:before {\n  content: \"\\f3d0\";\n}\n\n.fa-money-bill:before {\n  content: \"\\f0d6\";\n}\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\";\n}\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\";\n}\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\";\n}\n\n.fa-money-check:before {\n  content: \"\\f53c\";\n}\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\";\n}\n\n.fa-monument:before {\n  content: \"\\f5a6\";\n}\n\n.fa-moon:before {\n  content: \"\\f186\";\n}\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\";\n}\n\n.fa-mosque:before {\n  content: \"\\f678\";\n}\n\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n\n.fa-mountain:before {\n  content: \"\\f6fc\";\n}\n\n.fa-mouse:before {\n  content: \"\\f8cc\";\n}\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\";\n}\n\n.fa-music:before {\n  content: \"\\f001\";\n}\n\n.fa-napster:before {\n  content: \"\\f3d2\";\n}\n\n.fa-neos:before {\n  content: \"\\f612\";\n}\n\n.fa-network-wired:before {\n  content: \"\\f6ff\";\n}\n\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n\n.fa-newspaper:before {\n  content: \"\\f1ea\";\n}\n\n.fa-nimblr:before {\n  content: \"\\f5a8\";\n}\n\n.fa-node:before {\n  content: \"\\f419\";\n}\n\n.fa-node-js:before {\n  content: \"\\f3d3\";\n}\n\n.fa-not-equal:before {\n  content: \"\\f53e\";\n}\n\n.fa-notes-medical:before {\n  content: \"\\f481\";\n}\n\n.fa-npm:before {\n  content: \"\\f3d4\";\n}\n\n.fa-ns8:before {\n  content: \"\\f3d5\";\n}\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\";\n}\n\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n\n.fa-oil-can:before {\n  content: \"\\f613\";\n}\n\n.fa-old-republic:before {\n  content: \"\\f510\";\n}\n\n.fa-om:before {\n  content: \"\\f679\";\n}\n\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n\n.fa-orcid:before {\n  content: \"\\f8d2\";\n}\n\n.fa-osi:before {\n  content: \"\\f41a\";\n}\n\n.fa-otter:before {\n  content: \"\\f700\";\n}\n\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n\n.fa-page4:before {\n  content: \"\\f3d7\";\n}\n\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n\n.fa-pager:before {\n  content: \"\\f815\";\n}\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\";\n}\n\n.fa-palette:before {\n  content: \"\\f53f\";\n}\n\n.fa-palfed:before {\n  content: \"\\f3d8\";\n}\n\n.fa-pallet:before {\n  content: \"\\f482\";\n}\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\";\n}\n\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n\n.fa-parking:before {\n  content: \"\\f540\";\n}\n\n.fa-passport:before {\n  content: \"\\f5ab\";\n}\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\";\n}\n\n.fa-paste:before {\n  content: \"\\f0ea\";\n}\n\n.fa-patreon:before {\n  content: \"\\f3d9\";\n}\n\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n\n.fa-peace:before {\n  content: \"\\f67c\";\n}\n\n.fa-pen:before {\n  content: \"\\f304\";\n}\n\n.fa-pen-alt:before {\n  content: \"\\f305\";\n}\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\";\n}\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\";\n}\n\n.fa-pen-square:before {\n  content: \"\\f14b\";\n}\n\n.fa-pencil-alt:before {\n  content: \"\\f303\";\n}\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\";\n}\n\n.fa-penny-arcade:before {\n  content: \"\\f704\";\n}\n\n.fa-people-arrows:before {\n  content: \"\\e068\";\n}\n\n.fa-people-carry:before {\n  content: \"\\f4ce\";\n}\n\n.fa-pepper-hot:before {\n  content: \"\\f816\";\n}\n\n.fa-percent:before {\n  content: \"\\f295\";\n}\n\n.fa-percentage:before {\n  content: \"\\f541\";\n}\n\n.fa-periscope:before {\n  content: \"\\f3da\";\n}\n\n.fa-person-booth:before {\n  content: \"\\f756\";\n}\n\n.fa-phabricator:before {\n  content: \"\\f3db\";\n}\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\";\n}\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\";\n}\n\n.fa-phone:before {\n  content: \"\\f095\";\n}\n\n.fa-phone-alt:before {\n  content: \"\\f879\";\n}\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\";\n}\n\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n\n.fa-phone-square-alt:before {\n  content: \"\\f87b\";\n}\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\";\n}\n\n.fa-photo-video:before {\n  content: \"\\f87c\";\n}\n\n.fa-php:before {\n  content: \"\\f457\";\n}\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\";\n}\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n\n.fa-pied-piper-square:before {\n  content: \"\\e01e\";\n}\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\";\n}\n\n.fa-pills:before {\n  content: \"\\f484\";\n}\n\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n\n.fa-pizza-slice:before {\n  content: \"\\f818\";\n}\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\";\n}\n\n.fa-plane:before {\n  content: \"\\f072\";\n}\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\";\n}\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\";\n}\n\n.fa-plane-slash:before {\n  content: \"\\e069\";\n}\n\n.fa-play:before {\n  content: \"\\f04b\";\n}\n\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n\n.fa-playstation:before {\n  content: \"\\f3df\";\n}\n\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n\n.fa-plus:before {\n  content: \"\\f067\";\n}\n\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n\n.fa-poll:before {\n  content: \"\\f681\";\n}\n\n.fa-poll-h:before {\n  content: \"\\f682\";\n}\n\n.fa-poo:before {\n  content: \"\\f2fe\";\n}\n\n.fa-poo-storm:before {\n  content: \"\\f75a\";\n}\n\n.fa-poop:before {\n  content: \"\\f619\";\n}\n\n.fa-portrait:before {\n  content: \"\\f3e0\";\n}\n\n.fa-pound-sign:before {\n  content: \"\\f154\";\n}\n\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n\n.fa-pray:before {\n  content: \"\\f683\";\n}\n\n.fa-praying-hands:before {\n  content: \"\\f684\";\n}\n\n.fa-prescription:before {\n  content: \"\\f5b1\";\n}\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\";\n}\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\";\n}\n\n.fa-print:before {\n  content: \"\\f02f\";\n}\n\n.fa-procedures:before {\n  content: \"\\f487\";\n}\n\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n\n.fa-project-diagram:before {\n  content: \"\\f542\";\n}\n\n.fa-pump-medical:before {\n  content: \"\\e06a\";\n}\n\n.fa-pump-soap:before {\n  content: \"\\e06b\";\n}\n\n.fa-pushed:before {\n  content: \"\\f3e1\";\n}\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n\n.fa-python:before {\n  content: \"\\f3e2\";\n}\n\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n\n.fa-question:before {\n  content: \"\\f128\";\n}\n\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n\n.fa-quidditch:before {\n  content: \"\\f458\";\n}\n\n.fa-quinscape:before {\n  content: \"\\f459\";\n}\n\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n\n.fa-quran:before {\n  content: \"\\f687\";\n}\n\n.fa-r-project:before {\n  content: \"\\f4f7\";\n}\n\n.fa-radiation:before {\n  content: \"\\f7b9\";\n}\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\";\n}\n\n.fa-rainbow:before {\n  content: \"\\f75b\";\n}\n\n.fa-random:before {\n  content: \"\\f074\";\n}\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\";\n}\n\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n\n.fa-react:before {\n  content: \"\\f41b\";\n}\n\n.fa-reacteurope:before {\n  content: \"\\f75d\";\n}\n\n.fa-readme:before {\n  content: \"\\f4d5\";\n}\n\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n\n.fa-receipt:before {\n  content: \"\\f543\";\n}\n\n.fa-record-vinyl:before {\n  content: \"\\f8d9\";\n}\n\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n\n.fa-red-river:before {\n  content: \"\\f3e3\";\n}\n\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n\n.fa-redhat:before {\n  content: \"\\f7bc\";\n}\n\n.fa-redo:before {\n  content: \"\\f01e\";\n}\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\";\n}\n\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n\n.fa-remove-format:before {\n  content: \"\\f87d\";\n}\n\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n\n.fa-reply:before {\n  content: \"\\f3e5\";\n}\n\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n\n.fa-replyd:before {\n  content: \"\\f3e6\";\n}\n\n.fa-republican:before {\n  content: \"\\f75e\";\n}\n\n.fa-researchgate:before {\n  content: \"\\f4f8\";\n}\n\n.fa-resolving:before {\n  content: \"\\f3e7\";\n}\n\n.fa-restroom:before {\n  content: \"\\f7bd\";\n}\n\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n\n.fa-rev:before {\n  content: \"\\f5b2\";\n}\n\n.fa-ribbon:before {\n  content: \"\\f4d6\";\n}\n\n.fa-ring:before {\n  content: \"\\f70b\";\n}\n\n.fa-road:before {\n  content: \"\\f018\";\n}\n\n.fa-robot:before {\n  content: \"\\f544\";\n}\n\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\";\n}\n\n.fa-rockrms:before {\n  content: \"\\f3e9\";\n}\n\n.fa-route:before {\n  content: \"\\f4d7\";\n}\n\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n\n.fa-ruble-sign:before {\n  content: \"\\f158\";\n}\n\n.fa-ruler:before {\n  content: \"\\f545\";\n}\n\n.fa-ruler-combined:before {\n  content: \"\\f546\";\n}\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\";\n}\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\";\n}\n\n.fa-running:before {\n  content: \"\\f70c\";\n}\n\n.fa-rupee-sign:before {\n  content: \"\\f156\";\n}\n\n.fa-rust:before {\n  content: \"\\e07a\";\n}\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\";\n}\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\";\n}\n\n.fa-safari:before {\n  content: \"\\f267\";\n}\n\n.fa-salesforce:before {\n  content: \"\\f83b\";\n}\n\n.fa-sass:before {\n  content: \"\\f41e\";\n}\n\n.fa-satellite:before {\n  content: \"\\f7bf\";\n}\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\";\n}\n\n.fa-save:before {\n  content: \"\\f0c7\";\n}\n\n.fa-schlix:before {\n  content: \"\\f3ea\";\n}\n\n.fa-school:before {\n  content: \"\\f549\";\n}\n\n.fa-screwdriver:before {\n  content: \"\\f54a\";\n}\n\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n\n.fa-scroll:before {\n  content: \"\\f70e\";\n}\n\n.fa-sd-card:before {\n  content: \"\\f7c2\";\n}\n\n.fa-search:before {\n  content: \"\\f002\";\n}\n\n.fa-search-dollar:before {\n  content: \"\\f688\";\n}\n\n.fa-search-location:before {\n  content: \"\\f689\";\n}\n\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n\n.fa-searchengin:before {\n  content: \"\\f3eb\";\n}\n\n.fa-seedling:before {\n  content: \"\\f4d8\";\n}\n\n.fa-sellcast:before {\n  content: \"\\f2da\";\n}\n\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n\n.fa-server:before {\n  content: \"\\f233\";\n}\n\n.fa-servicestack:before {\n  content: \"\\f3ec\";\n}\n\n.fa-shapes:before {\n  content: \"\\f61f\";\n}\n\n.fa-share:before {\n  content: \"\\f064\";\n}\n\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\";\n}\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\";\n}\n\n.fa-shield-virus:before {\n  content: \"\\e06c\";\n}\n\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\";\n}\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\";\n}\n\n.fa-shopify:before {\n  content: \"\\e057\";\n}\n\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n\n.fa-shopware:before {\n  content: \"\\f5b5\";\n}\n\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\";\n}\n\n.fa-sign:before {\n  content: \"\\f4d9\";\n}\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\";\n}\n\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\";\n}\n\n.fa-signal:before {\n  content: \"\\f012\";\n}\n\n.fa-signature:before {\n  content: \"\\f5b7\";\n}\n\n.fa-sim-card:before {\n  content: \"\\f7c4\";\n}\n\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n\n.fa-sink:before {\n  content: \"\\e06d\";\n}\n\n.fa-sistrix:before {\n  content: \"\\f3ee\";\n}\n\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n\n.fa-sith:before {\n  content: \"\\f512\";\n}\n\n.fa-skating:before {\n  content: \"\\f7c5\";\n}\n\n.fa-sketch:before {\n  content: \"\\f7c6\";\n}\n\n.fa-skiing:before {\n  content: \"\\f7c9\";\n}\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\";\n}\n\n.fa-skull:before {\n  content: \"\\f54c\";\n}\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\";\n}\n\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n\n.fa-slack:before {\n  content: \"\\f198\";\n}\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\";\n}\n\n.fa-slash:before {\n  content: \"\\f715\";\n}\n\n.fa-sleigh:before {\n  content: \"\\f7cc\";\n}\n\n.fa-sliders-h:before {\n  content: \"\\f1de\";\n}\n\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n\n.fa-smile:before {\n  content: \"\\f118\";\n}\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\";\n}\n\n.fa-smile-wink:before {\n  content: \"\\f4da\";\n}\n\n.fa-smog:before {\n  content: \"\\f75f\";\n}\n\n.fa-smoking:before {\n  content: \"\\f48d\";\n}\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\";\n}\n\n.fa-sms:before {\n  content: \"\\f7cd\";\n}\n\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\";\n}\n\n.fa-snowflake:before {\n  content: \"\\f2dc\";\n}\n\n.fa-snowman:before {\n  content: \"\\f7d0\";\n}\n\n.fa-snowplow:before {\n  content: \"\\f7d2\";\n}\n\n.fa-soap:before {\n  content: \"\\e06e\";\n}\n\n.fa-socks:before {\n  content: \"\\f696\";\n}\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\";\n}\n\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\";\n}\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\\f881\";\n}\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\";\n}\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\\f882\";\n}\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\";\n}\n\n.fa-sort-amount-down-alt:before {\n  content: \"\\f884\";\n}\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\";\n}\n\n.fa-sort-amount-up-alt:before {\n  content: \"\\f885\";\n}\n\n.fa-sort-down:before {\n  content: \"\\f0dd\";\n}\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\";\n}\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\\f886\";\n}\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\";\n}\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\\f887\";\n}\n\n.fa-sort-up:before {\n  content: \"\\f0de\";\n}\n\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\";\n}\n\n.fa-spa:before {\n  content: \"\\f5bb\";\n}\n\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n\n.fa-speakap:before {\n  content: \"\\f3f3\";\n}\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\";\n}\n\n.fa-spell-check:before {\n  content: \"\\f891\";\n}\n\n.fa-spider:before {\n  content: \"\\f717\";\n}\n\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n\n.fa-splotch:before {\n  content: \"\\f5bc\";\n}\n\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n\n.fa-spray-can:before {\n  content: \"\\f5bd\";\n}\n\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n\n.fa-square-full:before {\n  content: \"\\f45c\";\n}\n\n.fa-square-root-alt:before {\n  content: \"\\f698\";\n}\n\n.fa-squarespace:before {\n  content: \"\\f5be\";\n}\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n\n.fa-stackpath:before {\n  content: \"\\f842\";\n}\n\n.fa-stamp:before {\n  content: \"\\f5bf\";\n}\n\n.fa-star:before {\n  content: \"\\f005\";\n}\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\";\n}\n\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\";\n}\n\n.fa-star-of-david:before {\n  content: \"\\f69a\";\n}\n\n.fa-star-of-life:before {\n  content: \"\\f621\";\n}\n\n.fa-staylinked:before {\n  content: \"\\f3f5\";\n}\n\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\";\n}\n\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\";\n}\n\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\";\n}\n\n.fa-stopwatch-20:before {\n  content: \"\\e06f\";\n}\n\n.fa-store:before {\n  content: \"\\f54e\";\n}\n\n.fa-store-alt:before {\n  content: \"\\f54f\";\n}\n\n.fa-store-alt-slash:before {\n  content: \"\\e070\";\n}\n\n.fa-store-slash:before {\n  content: \"\\e071\";\n}\n\n.fa-strava:before {\n  content: \"\\f428\";\n}\n\n.fa-stream:before {\n  content: \"\\f550\";\n}\n\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n\n.fa-stripe:before {\n  content: \"\\f429\";\n}\n\n.fa-stripe-s:before {\n  content: \"\\f42a\";\n}\n\n.fa-stroopwafel:before {\n  content: \"\\f551\";\n}\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\";\n}\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n\n.fa-subway:before {\n  content: \"\\f239\";\n}\n\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\";\n}\n\n.fa-sun:before {\n  content: \"\\f185\";\n}\n\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n\n.fa-supple:before {\n  content: \"\\f3f9\";\n}\n\n.fa-surprise:before {\n  content: \"\\f5c2\";\n}\n\n.fa-suse:before {\n  content: \"\\f7d6\";\n}\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\";\n}\n\n.fa-swift:before {\n  content: \"\\f8e1\";\n}\n\n.fa-swimmer:before {\n  content: \"\\f5c4\";\n}\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\";\n}\n\n.fa-symfony:before {\n  content: \"\\f83d\";\n}\n\n.fa-synagogue:before {\n  content: \"\\f69b\";\n}\n\n.fa-sync:before {\n  content: \"\\f021\";\n}\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\";\n}\n\n.fa-syringe:before {\n  content: \"\\f48e\";\n}\n\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n\n.fa-table-tennis:before {\n  content: \"\\f45d\";\n}\n\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\";\n}\n\n.fa-tablets:before {\n  content: \"\\f490\";\n}\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\";\n}\n\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n\n.fa-tape:before {\n  content: \"\\f4db\";\n}\n\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\";\n}\n\n.fa-teeth:before {\n  content: \"\\f62e\";\n}\n\n.fa-teeth-open:before {\n  content: \"\\f62f\";\n}\n\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\";\n}\n\n.fa-temperature-high:before {\n  content: \"\\f769\";\n}\n\n.fa-temperature-low:before {\n  content: \"\\f76b\";\n}\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n\n.fa-tenge:before {\n  content: \"\\f7d7\";\n}\n\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n\n.fa-th:before {\n  content: \"\\f00a\";\n}\n\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\";\n}\n\n.fa-theater-masks:before {\n  content: \"\\f630\";\n}\n\n.fa-themeco:before {\n  content: \"\\f5c6\";\n}\n\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n\n.fa-thermometer:before {\n  content: \"\\f491\";\n}\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n\n.fa-think-peaks:before {\n  content: \"\\f731\";\n}\n\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n\n.fa-thumbtack:before {\n  content: \"\\f08d\";\n}\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\";\n}\n\n.fa-tiktok:before {\n  content: \"\\e07b\";\n}\n\n.fa-times:before {\n  content: \"\\f00d\";\n}\n\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n\n.fa-tint:before {\n  content: \"\\f043\";\n}\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\";\n}\n\n.fa-tired:before {\n  content: \"\\f5c8\";\n}\n\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n\n.fa-toilet:before {\n  content: \"\\f7d8\";\n}\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\";\n}\n\n.fa-toilet-paper-slash:before {\n  content: \"\\e072\";\n}\n\n.fa-toolbox:before {\n  content: \"\\f552\";\n}\n\n.fa-tools:before {\n  content: \"\\f7d9\";\n}\n\n.fa-tooth:before {\n  content: \"\\f5c9\";\n}\n\n.fa-torah:before {\n  content: \"\\f6a0\";\n}\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\";\n}\n\n.fa-tractor:before {\n  content: \"\\f722\";\n}\n\n.fa-trade-federation:before {\n  content: \"\\f513\";\n}\n\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n\n.fa-traffic-light:before {\n  content: \"\\f637\";\n}\n\n.fa-trailer:before {\n  content: \"\\e041\";\n}\n\n.fa-train:before {\n  content: \"\\f238\";\n}\n\n.fa-tram:before {\n  content: \"\\f7da\";\n}\n\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\";\n}\n\n.fa-trash-restore:before {\n  content: \"\\f829\";\n}\n\n.fa-trash-restore-alt:before {\n  content: \"\\f82a\";\n}\n\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n\n.fa-trello:before {\n  content: \"\\f181\";\n}\n\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n\n.fa-truck-loading:before {\n  content: \"\\f4de\";\n}\n\n.fa-truck-monster:before {\n  content: \"\\f63b\";\n}\n\n.fa-truck-moving:before {\n  content: \"\\f4df\";\n}\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\";\n}\n\n.fa-tshirt:before {\n  content: \"\\f553\";\n}\n\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n\n.fa-tv:before {\n  content: \"\\f26c\";\n}\n\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n\n.fa-typo3:before {\n  content: \"\\f42b\";\n}\n\n.fa-uber:before {\n  content: \"\\f402\";\n}\n\n.fa-ubuntu:before {\n  content: \"\\f7df\";\n}\n\n.fa-uikit:before {\n  content: \"\\f403\";\n}\n\n.fa-umbraco:before {\n  content: \"\\f8e8\";\n}\n\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\";\n}\n\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\";\n}\n\n.fa-uniregistry:before {\n  content: \"\\f404\";\n}\n\n.fa-unity:before {\n  content: \"\\e049\";\n}\n\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n\n.fa-university:before {\n  content: \"\\f19c\";\n}\n\n.fa-unlink:before {\n  content: \"\\f127\";\n}\n\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n\n.fa-unsplash:before {\n  content: \"\\e07c\";\n}\n\n.fa-untappd:before {\n  content: \"\\f405\";\n}\n\n.fa-upload:before {\n  content: \"\\f093\";\n}\n\n.fa-ups:before {\n  content: \"\\f7e0\";\n}\n\n.fa-usb:before {\n  content: \"\\f287\";\n}\n\n.fa-user:before {\n  content: \"\\f007\";\n}\n\n.fa-user-alt:before {\n  content: \"\\f406\";\n}\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\";\n}\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\";\n}\n\n.fa-user-check:before {\n  content: \"\\f4fc\";\n}\n\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n\n.fa-user-clock:before {\n  content: \"\\f4fd\";\n}\n\n.fa-user-cog:before {\n  content: \"\\f4fe\";\n}\n\n.fa-user-edit:before {\n  content: \"\\f4ff\";\n}\n\n.fa-user-friends:before {\n  content: \"\\f500\";\n}\n\n.fa-user-graduate:before {\n  content: \"\\f501\";\n}\n\n.fa-user-injured:before {\n  content: \"\\f728\";\n}\n\n.fa-user-lock:before {\n  content: \"\\f502\";\n}\n\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n\n.fa-user-minus:before {\n  content: \"\\f503\";\n}\n\n.fa-user-ninja:before {\n  content: \"\\f504\";\n}\n\n.fa-user-nurse:before {\n  content: \"\\f82f\";\n}\n\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n\n.fa-user-shield:before {\n  content: \"\\f505\";\n}\n\n.fa-user-slash:before {\n  content: \"\\f506\";\n}\n\n.fa-user-tag:before {\n  content: \"\\f507\";\n}\n\n.fa-user-tie:before {\n  content: \"\\f508\";\n}\n\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n\n.fa-users-cog:before {\n  content: \"\\f509\";\n}\n\n.fa-users-slash:before {\n  content: \"\\e073\";\n}\n\n.fa-usps:before {\n  content: \"\\f7e1\";\n}\n\n.fa-ussunnah:before {\n  content: \"\\f407\";\n}\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\";\n}\n\n.fa-utensils:before {\n  content: \"\\f2e7\";\n}\n\n.fa-vaadin:before {\n  content: \"\\f408\";\n}\n\n.fa-vector-square:before {\n  content: \"\\f5cb\";\n}\n\n.fa-venus:before {\n  content: \"\\f221\";\n}\n\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n\n.fa-vial:before {\n  content: \"\\f492\";\n}\n\n.fa-vials:before {\n  content: \"\\f493\";\n}\n\n.fa-viber:before {\n  content: \"\\f409\";\n}\n\n.fa-video:before {\n  content: \"\\f03d\";\n}\n\n.fa-video-slash:before {\n  content: \"\\f4e2\";\n}\n\n.fa-vihara:before {\n  content: \"\\f6a7\";\n}\n\n.fa-vimeo:before {\n  content: \"\\f40a\";\n}\n\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\";\n}\n\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n\n.fa-virus:before {\n  content: \"\\e074\";\n}\n\n.fa-virus-slash:before {\n  content: \"\\e075\";\n}\n\n.fa-viruses:before {\n  content: \"\\e076\";\n}\n\n.fa-vk:before {\n  content: \"\\f189\";\n}\n\n.fa-vnv:before {\n  content: \"\\f40b\";\n}\n\n.fa-voicemail:before {\n  content: \"\\f897\";\n}\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\";\n}\n\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\";\n}\n\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n\n.fa-vote-yea:before {\n  content: \"\\f772\";\n}\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\";\n}\n\n.fa-vuejs:before {\n  content: \"\\f41f\";\n}\n\n.fa-walking:before {\n  content: \"\\f554\";\n}\n\n.fa-wallet:before {\n  content: \"\\f555\";\n}\n\n.fa-warehouse:before {\n  content: \"\\f494\";\n}\n\n.fa-water:before {\n  content: \"\\f773\";\n}\n\n.fa-wave-square:before {\n  content: \"\\f83e\";\n}\n\n.fa-waze:before {\n  content: \"\\f83f\";\n}\n\n.fa-weebly:before {\n  content: \"\\f5cc\";\n}\n\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n\n.fa-weight:before {\n  content: \"\\f496\";\n}\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\";\n}\n\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\";\n}\n\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n\n.fa-whmcs:before {\n  content: \"\\f40d\";\n}\n\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n\n.fa-wind:before {\n  content: \"\\f72e\";\n}\n\n.fa-window-close:before {\n  content: \"\\f410\";\n}\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\";\n}\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\";\n}\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\";\n}\n\n.fa-wix:before {\n  content: \"\\f5cf\";\n}\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\";\n}\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\";\n}\n\n.fa-won-sign:before {\n  content: \"\\f159\";\n}\n\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\";\n}\n\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n\n.fa-wpressr:before {\n  content: \"\\f3e4\";\n}\n\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n\n.fa-x-ray:before {\n  content: \"\\f497\";\n}\n\n.fa-xbox:before {\n  content: \"\\f412\";\n}\n\n.fa-xing:before {\n  content: \"\\f168\";\n}\n\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n\n.fa-yammer:before {\n  content: \"\\f840\";\n}\n\n.fa-yandex:before {\n  content: \"\\f413\";\n}\n\n.fa-yandex-international:before {\n  content: \"\\f414\";\n}\n\n.fa-yarn:before {\n  content: \"\\f7e3\";\n}\n\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n\n.fa-yen-sign:before {\n  content: \"\\f157\";\n}\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\";\n}\n\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n\n.fa-youtube-square:before {\n  content: \"\\f431\";\n}\n\n.fa-zhihu:before {\n  content: \"\\f63f\";\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n@font-face {\n  font-family: 'Font Awesome 5 Brands';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n\n.fab {\n  font-family: 'Font Awesome 5 Brands';\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");\n}\n\n.far {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src:\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\");\n}\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-feedback-background: var(--theme-primary-200);\n  --form-feedback-background-disabled: var(--theme-primary-100);\n  --form-feedback-text: var(--theme-primary-text-200);\n  --form-feedback-text-muted: var(--theme-primary-700);\n  --form-feedback-text-disabled: var(--theme-primary-300);\n  --form-feedback-border: var(--theme-primary-300);\n  --form-feedback-border-disabled: var(--theme-primary-100);\n}\n\n.form-feedback {\n  padding: 0.75em 1.25em;\n  background-color: hsl(var(--form-feedback-background));\n  border: 0;\n  border-left-width: calc(var(--layout-line-width) * 2);\n  border-left-style: solid;\n  border-left-color: hsl(var(--form-feedback-border));\n  border-top-right-radius: var(--theme-radius-base);\n  border-bottom-right-radius: var(--theme-radius-base);\n  width: 100%;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast);\n}\n\n.form-feedback p {\n  color: hsl(var(--form-feedback-text));\n}\n\n.form-feedback p.muted {\n  color: hsl(var(--form-feedback-text-muted));\n}\n\n.form-feedback.disabled {\n  background-color: hsl(var(--form-feedback-background-disabled));\n  border-color: hsl(var(--form-feedback-border-disabled));\n}\n\n.form-feedback.disabled p {\n  color: hsl(var(--form-feedback-text-disabled));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-fieldset {\n  position: relative;\n  width: 100%;\n  display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-grid-background: var(--theme-primary-200);\n  --form-grid-background-hover: var(--theme-primary-200);\n  --form-grid-background-focus: var(--theme-primary-200);\n  --form-grid-background-disabled: var(--theme-primary-100);\n  --form-grid-border: var(--theme-primary-300);\n  --form-grid-border-hover-focus: var(--theme-primary-300);\n  --form-grid-border-active: var(--theme-accent);\n  --form-grid-border-checked: var(--theme-accent);\n  --form-grid-border-disabled: var(--theme-primary-100);\n}\n\n.form-grid {\n  background-color: hsl(var(--form-grid-background));\n  padding: calc(var(--form-thumb-size) / 2);\n  display: inline-grid;\n  overflow: hidden;\n  transition: background-color var(--layout-transition-extra-fast);\n}\n\n.form-grid:hover {\n  outline: none;\n  background-color: hsl(var(--form-grid-background-hover));\n}\n\n.form-grid:focus,\n.form-grid:focus-within {\n  outline: none;\n  background-color: hsl(var(--form-grid-background-focus));\n}\n\n.form-grid.disabled,\n.form-grid.disabled:focus,\n.form-grid.disabled:focus-within {\n  background-color: hsl(var(--form-grid-background-disabled));\n}\n\n.form-grid-2x2 {\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  border-radius: var(--theme-radius-base);\n  grid-template-areas:\n    \"cell-1 cell-2\"\n    \"cell-3 cell-4\";\n}\n\n.form-grid-3x3 {\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: var(--theme-radius-base);\n  grid-template-areas:\n    \"cell-1 cell-2 cell-3\"\n    \"cell-4 cell-5 cell-6\"\n    \"cell-7 cell-8 cell-9\";\n}\n\n.form-grid-3x1 {\n  grid-template-columns: repeat(3, 1fr);\n  border-radius: var(--theme-radius-base);\n  grid-template-areas:\n    \"cell-1 cell-2 cell-3\";\n}\n\n.form-grid-1x3 {\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: var(--theme-radius-base);\n  grid-template-areas:\n    \"cell-1\"\n    \"cell-2\"\n    \"cell-3\";\n}\n\n.form-grid-3x3>*,\n.form-grid-3x1>*,\n.form-grid-1x3>* {\n  grid-area: var(--form-grid-cell);\n}\n\n.form-grid .form-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.form-grid input[type=\"checkbox\"]+label,\n.form-grid input[type=\"radio\"]+label {\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  display: block;\n  width: calc(var(--form-thumb-size) * 1.75);\n  height: calc(var(--form-thumb-size) * 1.75);\n  position: relative;\n  transition: none;\n  z-index: 1;\n}\n\n.form-grid input[type=\"checkbox\"]:hover+label,\n.form-grid input[type=\"checkbox\"]:focus+label,\n.form-grid input[type=\"radio\"]:hover+label,\n.form-grid input[type=\"radio\"]:focus+label {\n  box-shadow: none;\n}\n\n.form-grid input[type=\"checkbox\"]+label .label-icon,\n.form-grid input[type=\"radio\"]+label .label-icon {\n  margin-right: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form-grid-3x3 {\n  --radiusPart: calc(var(--theme-radius-base) / 20);\n  --responsivePos: calc(var(--radiusPart) + -50%);\n  --responsiveNeg: calc(calc(var(--radiusPart) * -1) + -50%);\n}\n\n.form-grid-3x3 .form-wrap:nth-child(1) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(1) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsivePos), var(--responsivePos));\n}\n\n.form-grid-3x3 .form-wrap:nth-child(2) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(2) input[type=\"radio\"]+label .label-icon {\n  transform: translate(-50%, var(--responsivePos));\n}\n\n.form-grid-3x3 .form-wrap:nth-child(3) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(3) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsiveNeg), var(--responsivePos));\n}\n\n.form-grid-3x3 .form-wrap:nth-child(4) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(4) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsivePos), -50%);\n}\n\n.form-grid-3x3 .form-wrap:nth-child(6) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(6) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsiveNeg), -50%);\n}\n\n.form-grid-3x3 .form-wrap:nth-child(7) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(7) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsivePos), var(--responsiveNeg));\n}\n\n.form-grid-3x3 .form-wrap:nth-child(8) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(8) input[type=\"radio\"]+label .label-icon {\n  transform: translate(-50%, var(--responsiveNeg));\n}\n\n.form-grid-3x3 .form-wrap:nth-child(9) input[type=\"checkbox\"]+label .label-icon,\n.form-grid-3x3 .form-wrap:nth-child(9) input[type=\"radio\"]+label .label-icon {\n  transform: translate(var(--responsiveNeg), var(--responsiveNeg));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-group-border: var(--theme-primary-500);\n}\n\n.form-group {\n  position: relative;\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.form-group-horizontal {\n  flex-direction: row;\n}\n\n.form-group-vertical {\n  flex-direction: column;\n}\n\n.form-group-horizontal.form-group-reverse {\n  flex-direction: row-reverse;\n}\n\n.form-group-vertical.form-group-reverse {\n  flex-direction: column-reverse;\n}\n\n.form-group .form-wrap {\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: var(--form-space);\n  display: flex;\n  align-items: center;\n}\n\n.form-group-block {\n  display: flex;\n  width: 100%;\n}\n\n.form-group .form-group-text,\n.form-group .button,\n.form-group .form-input-button input[type=\"checkbox\"]+label,\n.form-group .form-input-button input[type=\"radio\"]+label,\n.form-group .form-input-button input[type=\"color\"]+label,\n.form-group .form-input-button input[type=\"file\"]+label,\n.form-group>select,\n.form-group>input[type=\"email\"],\n.form-group>input[type=\"number\"],\n.form-group>input[type=\"password\"],\n.form-group>input[type=\"search\"],\n.form-group>input[type=\"tel\"],\n.form-group>input[type=\"text\"],\n.form-group>input[type=\"color\"],\n.form-group>input[type=\"range\"] {\n  margin: 0;\n  border-radius: 0;\n  height: inherit;\n  min-height: 2.5em;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: auto;\n  z-index: 1;\n}\n\n.form-group .form-group-text {\n  flex-shrink: 0;\n}\n\n.form-group .form-group-text:focus,\n.form-group .button:focus,\n.form-group .form-input-button input[type=\"checkbox\"]:focus+label,\n.form-group .form-input-button input[type=\"radio\"]:focus+label,\n.form-group .form-input-button input[type=\"color\"]:focus+label,\n.form-group .form-input-button input[type=\"file\"]:focus+label,\n.form-group>select:focus,\n.form-group>input[type=\"email\"]:focus,\n.form-group>input[type=\"number\"]:focus,\n.form-group>input[type=\"password\"]:focus,\n.form-group>input[type=\"search\"]:focus,\n.form-group>input[type=\"tel\"]:focus,\n.form-group>input[type=\"text\"]:focus,\n.form-group>input[type=\"color\"]:focus,\n.form-group>input[type=\"range\"]:focus {\n  z-index: 2;\n}\n\n.form-group .form-group-text:hover,\n.form-group .form-group-text:active,\n.form-group .button:hover,\n.form-group .button:active,\n.form-group .form-input-button input[type=\"checkbox\"]:hover+label,\n.form-group .form-input-button input[type=\"checkbox\"]:active+label,\n.form-group .form-input-button input[type=\"radio\"]:hover+label,\n.form-group .form-input-button input[type=\"radio\"]:active+label,\n.form-group .form-input-button input[type=\"color\"]:hover+label,\n.form-group .form-input-button input[type=\"color\"]:active+label,\n.form-group .form-input-button input[type=\"file\"]:hover+label,\n.form-group .form-input-button input[type=\"file\"]:active+label,\n.form-group>select:hover,\n.form-group>select:active,\n.form-group>input[type=\"email\"]:hover,\n.form-group>input[type=\"email\"]:active,\n.form-group>input[type=\"number\"]:hover,\n.form-group>input[type=\"number\"]:active,\n.form-group>input[type=\"password\"]:hover,\n.form-group>input[type=\"password\"]:active,\n.form-group>input[type=\"search\"]:hover,\n.form-group>input[type=\"search\"]:active,\n.form-group>input[type=\"tel\"]:hover,\n.form-group>input[type=\"tel\"]:active,\n.form-group>input[type=\"text\"]:hover,\n.form-group>input[type=\"text\"]:active,\n.form-group>input[type=\"color\"]:hover,\n.form-group>input[type=\"color\"]:active,\n.form-group>input[type=\"range\"]:hover,\n.form-group>input[type=\"range\"]:active {\n  z-index: 3;\n}\n\n.form-group .form-input-button input[type=\"checkbox\"]:checked+label,\n.form-group .form-input-button input[type=\"radio\"]:checked+label,\n.form-group .form-input-button input[type=\"color\"]:checked+label,\n.form-group .form-input-button input[type=\"file\"]:checked+label {\n  z-index: 3;\n}\n\n.form-group .button-line:after,\n.form-group .form-input-button-line input[type=\"checkbox\"]+label:after,\n.form-group .form-input-button-line input[type=\"radio\"]+label:after,\n.form-group .form-input-button-line input[type=\"color\"]+label:after,\n.form-group .form-input-button-line input[type=\"file\"]+label:after {\n  border-radius: 0;\n}\n\n.form-group.form-group-horizontal .form-group-text:first-child,\n.form-group.form-group-horizontal .button:first-child,\n.form-group.form-group-horizontal .button-line:first-child:after,\n.form-group.form-group-horizontal .form-input-button:first-child input[type=\"checkbox\"]+label,\n.form-group.form-group-horizontal .form-input-button:first-child input[type=\"radio\"]+label,\n.form-group.form-group-horizontal .form-input-button:first-child input[type=\"color\"]+label,\n.form-group.form-group-horizontal .form-input-button:first-child input[type=\"file\"]+label,\n.form-group.form-group-horizontal .form-input-button-line:first-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:first-child input[type=\"radio\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:first-child input[type=\"color\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:first-child input[type=\"file\"]+label:after,\n.form-group.form-group-horizontal>select:first-child,\n.form-group.form-group-horizontal>input[type=\"email\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"number\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"password\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"search\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"tel\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"text\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"color\"]:first-child,\n.form-group.form-group-horizontal>input[type=\"range\"]:first-child {\n  border-radius: var(--theme-radius-base) 0 0 var(--theme-radius-base);\n}\n\n.form-group.form-group-horizontal .form-group-text:last-child,\n.form-group.form-group-horizontal .button:last-child,\n.form-group.form-group-horizontal .button-line:last-child:after,\n.form-group.form-group-horizontal .form-input-button:last-child input[type=\"checkbox\"]+label,\n.form-group.form-group-horizontal .form-input-button:last-child input[type=\"radio\"]+label,\n.form-group.form-group-horizontal .form-input-button:last-child input[type=\"color\"]+label,\n.form-group.form-group-horizontal .form-input-button:last-child input[type=\"file\"]+label,\n.form-group.form-group-horizontal .form-input-button-line:last-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:last-child input[type=\"radio\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:last-child input[type=\"color\"]+label:after,\n.form-group.form-group-horizontal .form-input-button-line:last-child input[type=\"file\"]+label:after,\n.form-group.form-group-horizontal>select:last-child,\n.form-group.form-group-horizontal>input[type=\"email\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"number\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"password\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"search\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"tel\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"text\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"color\"]:last-child,\n.form-group.form-group-horizontal>input[type=\"range\"]:last-child {\n  border-radius: 0 var(--theme-radius-base) var(--theme-radius-base) 0;\n}\n\n.form-group.form-group-vertical .form-group-text:first-child,\n.form-group.form-group-vertical .button:first-child,\n.form-group.form-group-vertical .button-line:first-child:after,\n.form-group.form-group-vertical .form-input-button:first-child input[type=\"checkbox\"]+label,\n.form-group.form-group-vertical .form-input-button:first-child input[type=\"radio\"]+label,\n.form-group.form-group-vertical .form-input-button:first-child input[type=\"color\"]+label,\n.form-group.form-group-vertical .form-input-button:first-child input[type=\"file\"]+label,\n.form-group.form-group-vertical .form-input-button-line:first-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:first-child input[type=\"radio\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:first-child input[type=\"color\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:first-child input[type=\"file\"]+label:after,\n.form-group.form-group-vertical>select:first-child,\n.form-group.form-group-vertical>input[type=\"email\"]:first-child,\n.form-group.form-group-vertical>input[type=\"number\"]:first-child,\n.form-group.form-group-vertical>input[type=\"password\"]:first-child,\n.form-group.form-group-vertical>input[type=\"search\"]:first-child,\n.form-group.form-group-vertical>input[type=\"tel\"]:first-child,\n.form-group.form-group-vertical>input[type=\"text\"]:first-child,\n.form-group.form-group-vertical>input[type=\"color\"]:first-child,\n.form-group.form-group-vertical>input[type=\"range\"]:first-child {\n  border-radius: var(--theme-radius-base) var(--theme-radius-base) 0 0;\n}\n\n.form-group.form-group-vertical .form-group-text:last-child,\n.form-group.form-group-vertical .button:last-child,\n.form-group.form-group-vertical .button-line:last-child:after,\n.form-group.form-group-vertical .form-input-button:last-child input[type=\"checkbox\"]+label,\n.form-group.form-group-vertical .form-input-button:last-child input[type=\"radio\"]+label,\n.form-group.form-group-vertical .form-input-button:last-child input[type=\"color\"]+label,\n.form-group.form-group-vertical .form-input-button:last-child input[type=\"file\"]+label,\n.form-group.form-group-vertical .form-input-button-line:last-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:last-child input[type=\"radio\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:last-child input[type=\"color\"]+label:after,\n.form-group.form-group-vertical .form-input-button-line:last-child input[type=\"file\"]+label:after,\n.form-group.form-group-vertical>select:last-child,\n.form-group.form-group-vertical>input[type=\"email\"]:last-child,\n.form-group.form-group-vertical>input[type=\"number\"]:last-child,\n.form-group.form-group-vertical>input[type=\"password\"]:last-child,\n.form-group.form-group-vertical>input[type=\"search\"]:last-child,\n.form-group.form-group-vertical>input[type=\"tel\"]:last-child,\n.form-group.form-group-vertical>input[type=\"text\"]:last-child,\n.form-group.form-group-vertical>input[type=\"color\"]:last-child,\n.form-group.form-group-vertical>input[type=\"range\"]:last-child {\n  border-radius: 0 0 var(--theme-radius-base) var(--theme-radius-base);\n}\n\n.form-group.form-group-horizontal .form-group-text:only-child,\n.form-group.form-group-horizontal .button:only-child,\n.form-group.form-group-horizontal .button-line:only-child:after,\n.form-group.form-group-horizontal>select:only-child,\n.form-group.form-group-horizontal>input[type=\"email\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"number\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"password\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"search\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"tel\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"text\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"color\"]:only-child,\n.form-group.form-group-horizontal>input[type=\"range\"]:only-child,\n.form-group.form-group-vertical .form-group-text:only-child,\n.form-group.form-group-vertical .button:only-child,\n.form-group.form-group-vertical .button-line:only-child:after,\n.form-group.form-group-vertical>select:only-child,\n.form-group.form-group-vertical>input[type=\"email\"]:only-child,\n.form-group.form-group-vertical>input[type=\"number\"]:only-child,\n.form-group.form-group-vertical>input[type=\"password\"]:only-child,\n.form-group.form-group-vertical>input[type=\"search\"]:only-child,\n.form-group.form-group-vertical>input[type=\"tel\"]:only-child,\n.form-group.form-group-vertical>input[type=\"text\"]:only-child,\n.form-group.form-group-vertical>input[type=\"color\"]:only-child,\n.form-group.form-group-vertical>input[type=\"range\"]:only-child {\n  border-radius: var(--theme-radius-base);\n}\n\n.form-group.form-group-nested-button * .button,\n.form-group.form-group-nested-button * .button-line:after,\n.form-group.form-group-nested-button * input[type=\"checkbox\"]+label,\n.form-group.form-group-nested-button * input[type=\"radio\"]+label,\n.form-group.form-group-nested-button * input[type=\"color\"]+label {\n  border-radius: 0;\n}\n\n.form-group.form-group-nested-button *:first-child .button,\n.form-group.form-group-nested-button *:first-child .button-line:after,\n.form-group.form-group-nested-button *:first-child input[type=\"checkbox\"]+label,\n.form-group.form-group-nested-button *:first-child input[type=\"radio\"]+label,\n.form-group.form-group-nested-button *:first-child input[type=\"color\"]+label {\n  border-radius: var(--theme-radius-base) 0 0 var(--theme-radius-base);\n}\n\n.form-group.form-group-nested-button *:last-child .button,\n.form-group.form-group-nested-button *:last-child .button-line:after,\n.form-group.form-group-nested-button *:last-child input[type=\"checkbox\"]+label,\n.form-group.form-group-nested-button *:last-child input[type=\"radio\"]+label,\n.form-group.form-group-nested-button *:last-child input[type=\"color\"]+label {\n  border-radius: 0 var(--theme-radius-base) var(--theme-radius-base) 0;\n}\n\n.form-group .form-group-radius-left.form-group-text,\n.form-group .form-group-radius-left.button,\n.form-group .form-group-radius-left.button-line:after,\n.form-group>select.form-group-radius-left,\n.form-group>input.form-group-radius-left[type=\"email\"],\n.form-group>input.form-group-radius-left[type=\"number\"],\n.form-group>input.form-group-radius-left[type=\"password\"],\n.form-group>input.form-group-radius-left[type=\"search\"],\n.form-group>input.form-group-radius-left[type=\"tel\"],\n.form-group>input.form-group-radius-left[type=\"text\"],\n.form-group>input.form-group-radius-left[type=\"color\"],\n.form-group>input.form-group-radius-left[type=\"range\"] {\n  border-top-left-radius: var(--theme-radius-base);\n  border-bottom-left-radius: var(--theme-radius-base);\n}\n\n.form-group .form-group-radius-right.form-group-text,\n.form-group .form-group-radius-right.button,\n.form-group .form-group-radius-right.butbutton-lineton:after,\n.form-group>select.form-group-radius-right,\n.form-group>input.form-group-radius-right[type=\"email\"],\n.form-group>input.form-group-radius-right[type=\"number\"],\n.form-group>input.form-group-radius-right[type=\"password\"],\n.form-group>input.form-group-radius-right[type=\"search\"],\n.form-group>input.form-group-radius-right[type=\"tel\"],\n.form-group>input.form-group-radius-right[type=\"text\"],\n.form-group>input.form-group-radius-right[type=\"color\"],\n.form-group>input.form-group-radius-right[type=\"range\"] {\n  border-top-right-radius: var(--theme-radius-base);\n  border-bottom-right-radius: var(--theme-radius-base);\n}\n\n.form-group.form-group-reverse .form-group-text:first-child,\n.form-group.form-group-reverse .button:first-child,\n.form-group.form-group-reverse .button-line:first-child:after,\n.form-group.form-group-reverse .form-input-button:first-child input[type=\"checkbox\"]+label,\n.form-group.form-group-reverse .form-input-button:first-child input[type=\"radio\"]+label,\n.form-group.form-group-reverse .form-input-button:first-child input[type=\"color\"]+label,\n.form-group.form-group-reverse .form-input-button:first-child input[type=\"file\"]+label,\n.form-group.form-group-reverse .form-input-button-line:first-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:first-child input[type=\"radio\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:first-child input[type=\"color\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:first-child input[type=\"file\"]+label:after,\n.form-group.form-group-reverse>select:first-child,\n.form-group.form-group-reverse>input[type=\"email\"]:first-child,\n.form-group.form-group-reverse>input[type=\"number\"]:first-child,\n.form-group.form-group-reverse>input[type=\"password\"]:first-child,\n.form-group.form-group-reverse>input[type=\"search\"]:first-child,\n.form-group.form-group-reverse>input[type=\"tel\"]:first-child,\n.form-group.form-group-reverse>input[type=\"text\"]:first-child,\n.form-group.form-group-reverse>input[type=\"color\"]:first-child,\n.form-group.form-group-reverse>input[type=\"range\"]:first-child {\n  border-radius: 0 var(--theme-radius-base) var(--theme-radius-base) 0;\n}\n\n.form-group.form-group-reverse .form-group-text:last-child,\n.form-group.form-group-reverse .button:last-child,\n.form-group.form-group-reverse .button-line:last-child:after,\n.form-group.form-group-reverse .form-input-button:last-child input[type=\"checkbox\"]+label,\n.form-group.form-group-reverse .form-input-button:last-child input[type=\"radio\"]+label,\n.form-group.form-group-reverse .form-input-button:last-child input[type=\"color\"]+label,\n.form-group.form-group-reverse .form-input-button:last-child input[type=\"file\"]+label,\n.form-group.form-group-reverse .form-input-button-line:last-child input[type=\"checkbox\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:last-child input[type=\"radio\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:last-child input[type=\"color\"]+label:after,\n.form-group.form-group-reverse .form-input-button-line:last-child input[type=\"file\"]+label:after,\n.form-group.form-group-reverse>select:last-child,\n.form-group.form-group-reverse>input[type=\"email\"]:last-child,\n.form-group.form-group-reverse>input[type=\"number\"]:last-child,\n.form-group.form-group-reverse>input[type=\"password\"]:last-child,\n.form-group.form-group-reverse>input[type=\"search\"]:last-child,\n.form-group.form-group-reverse>input[type=\"tel\"]:last-child,\n.form-group.form-group-reverse>input[type=\"text\"]:last-child,\n.form-group.form-group-reverse>input[type=\"color\"]:last-child,\n.form-group.form-group-reverse>input[type=\"range\"]:last-child {\n  border-radius: var(--theme-radius-base) 0 0 var(--theme-radius-base);\n}\n\n.form-group.form-group-reverse .form-group-text:only-child,\n.form-group.form-group-reverse .button:only-child,\n.form-group.form-group-reverse .button-line:only-child:after,\n.form-group.form-group-reverse>select:only-child,\n.form-group.form-group-reverse>input[type=\"email\"]:only-child,\n.form-group.form-group-reverse>input[type=\"number\"]:only-child,\n.form-group.form-group-reverse>input[type=\"password\"]:only-child,\n.form-group.form-group-reverse>input[type=\"search\"]:only-child,\n.form-group.form-group-reverse>input[type=\"tel\"]:only-child,\n.form-group.form-group-reverse>input[type=\"text\"]:only-child,\n.form-group.form-group-reverse>input[type=\"color\"]:only-child,\n.form-group.form-group-reverse>input[type=\"range\"]:only-child {\n  border-radius: var(--theme-radius-base);\n}\n\n.form-group.form-group-reverse.form-group-nested-button * .button,\n.form-group.form-group-reverse.form-group-nested-button * .button-line:after,\n.form-group.form-group-reverse.form-group-nested-button * input[type=\"checkbox\"]+label,\n.form-group.form-group-reverse.form-group-nested-button * input[type=\"radio\"]+label,\n.form-group.form-group-reverse.form-group-nested-button * input[type=\"color\"]+label {\n  border-radius: 0;\n}\n\n.form-group.form-group-reverse.form-group-nested-button *:first-child .button,\n.form-group.form-group-reverse.form-group-nested-button *:first-child .button-line:after,\n.form-group.form-group-reverse.form-group-nested-button *:first-child input[type=\"checkbox\"]+label,\n.form-group.form-group-reverse.form-group-nested-button *:first-child input[type=\"radio\"]+label,\n.form-group.form-group-reverse.form-group-nested-button *:first-child input[type=\"color\"]+label {\n  border-radius: 0 var(--theme-radius-base) var(--theme-radius-base) 0;\n}\n\n.form-group.form-group-reverse.form-group-nested-button *:last-child .button,\n.form-group.form-group-reverse.form-group-nested-button *:last-child .button-line:after,\n.form-group.form-group-reverse.form-group-nested-button *:last-child input[type=\"checkbox\"]+label,\n.form-group.form-group-reverse.form-group-nested-button *:last-child input[type=\"radio\"]+label,\n.form-group.form-group-reverse.form-group-nested-button *:last-child input[type=\"color\"]+label {\n  border-radius: var(--theme-radius-base) 0 0 var(--theme-radius-base);\n}\n\n.form-group-border {\n  border-radius: var(--theme-radius-base);\n  border-width: var(--layout-line-width);\n  border-color: hsl(var(--form-group-border));\n  border-style: solid;\n  overflow: hidden;\n}\n\n.form-group-border-theme-color {\n  border-color: hsl(var(--theme-primary-500));\n}\n\n.form-group.form-group-border .form-group-text,\n.form-group.form-group-border .button,\n.form-group.form-group-border .button-line:after,\n.form-group.form-group-border>select,\n.form-group.form-group-border>input[type=\"email\"],\n.form-group.form-group-border>input[type=\"number\"],\n.form-group.form-group-border>input[type=\"password\"],\n.form-group.form-group-border>input[type=\"search\"],\n.form-group.form-group-border>input[type=\"tel\"],\n.form-group.form-group-border>input[type=\"text\"],\n.form-group.form-group-border>input[type=\"color\"],\n.form-group.form-group-border>input[type=\"range\"],\n.form-group.form-group-border.form-group-nested-button * .button,\n.form-group.form-group-border.form-group-nested-button * .button-line:after,\n.form-group.form-group-border.form-group-nested-button * input[type=\"checkbox\"]+label,\n.form-group.form-group-border.form-group-nested-button * input[type=\"radio\"]+label,\n.form-group.form-group-border.form-group-nested-button * input[type=\"file\"]+label,\n.form-group.form-group-border.form-group-nested-button * input[type=\"color\"]+label {\n  border-radius: 0;\n}\n\n.form-group-item-small,\n.form-group-item-medium,\n.form-group-item-large,\n.form-group>.button.form-group-item-small,\n.form-group>.button.form-group-item-medium,\n.form-group>.button.form-group-item-large,\n.form-group>select.form-group-item-small,\n.form-group>select.form-group-item-medium,\n.form-group>select.form-group-item-large,\n.form-group>input[type].form-group-item-small,\n.form-group>input[type].form-group-item-medium,\n.form-group>input[type].form-group-item-large {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n}\n\n.form-group-item-small,\n.form-group>.button.form-group-item-small,\n.form-group>select.form-group-item-small,\n.form-group>input[type].form-group-item-small {\n  width: 4em;\n  flex-shrink: 0;\n}\n\n.form-group-item-medium,\n.form-group>.button.form-group-item-medium,\n.form-group>select.form-group-item-medium,\n.form-group>input[type].form-group-item-medium {\n  width: 6em;\n  flex-shrink: 0;\n}\n\n.form-group-item-large,\n.form-group>.button.form-group-item-large,\n.form-group>select.form-group-item-large,\n.form-group>input[type].form-group-item-large {\n  width: 8em;\n  flex-shrink: 0;\n}\n\n.form-group-item-shrink,\n.form-group>.button.form-group-item-shrink,\n.form-group>select.form-group-item-shrink,\n.form-group>input[type].form-group-item-shrink {\n  flex-grow: 0;\n}\n\n.form-group-item-grow,\n.form-group>.button.form-group-item-grow,\n.form-group>select.form-group-item-grow,\n.form-group>input[type].form-group-item-grow {\n  flex-grow: 1;\n}\n\n.form-group-item-half,\n.form-group>.button.form-group-item-half,\n.form-group>select.form-group-item-half,\n.form-group>input[type].form-group-item-half {\n  flex-basis: 50%;\n}\n\n.form-group-item-equal,\n.form-group>.button.form-group-item-equal,\n.form-group>select.form-group-item-equal,\n.form-group>input[type].form-group-item-equal {\n  flex-basis: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-group-text-background: var(--theme-primary-200);\n  --form-group-text-background-focus-hover: var(--theme-primary-200);\n  --form-group-text-background-active: var(--theme-primary-200);\n  --form-group-text-background-disabled: var(--theme-primary-100);\n  --form-group-text-border: var(--theme-primary-200);\n  --form-group-text-border-focus-hover: var(--theme-primary-200);\n  --form-group-text-border-active: var(--theme-primary-200);\n  --form-group-text-border-disabled: var(--theme-primary-100);\n}\n\n.form-group-text {\n  background-color: hsl(var(--form-group-text-background));\n  padding: 0 1.25em;\n  margin: 0;\n  color: hsl(var(--form-input-text));\n  min-width: 4em;\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  border-width: var(--layout-line-width);\n  border-color: hsl(var(--form-group-text-border));\n  border-style: solid;\n  border-radius: var(--theme-radius-base);\n  white-space: nowrap;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast);\n}\n\n.form-group-text:hover,\n.form-group-text:focus {\n  background-color: hsl(var(--form-group-text-background-focus-hover));\n  border-color: hsl(var(--form-group-text-border-focus-hover));\n  color: hsl(var(--form-input-text-hover));\n  outline: none;\n}\n\n.form-group-text:active {\n  background-color: hsl(var(--form-group-text-background-active));\n  border-color: hsl(var(--form-group-text-border-active));\n  color: hsl(var(--form-input-text-hover));\n  outline: none;\n}\n\n.form-group-text.disabled,\n.form-group-text.disabled:hover,\n.form-group-text.disabled:focus,\n.form-group-text.disable:active {\n  background-color: hsl(var(--form-group-text-background-disabled));\n  border-color: hsl(var(--form-group-text-border-disabled));\n  color: hsl(var(--form-input-text-disabled));\n  box-shadow: none;\n  cursor: default;\n}\n\n.form-group-text-left {\n  justify-content: flex-start;\n}\n\n.form-group-text-right {\n  justify-content: flex-end;\n}\n\n.form-group-text-borderless {\n  padding: 0;\n  border-width: 0;\n  min-width: inherit;\n}\n\n.form-group-text-transparent,\n.form-group-text-transparent:hover,\n.form-group-text-transparent:focus,\n.form-group-text-transparent:active {\n  background-color: hsl(var(--theme-primary-100));\n  color: hsl(var(--theme-primary-text-100));\n}\n\n.form-group-text-transparent.disabled,\n.form-group-text-transparent.disabled:hover,\n.form-group-text-transparent.disabled:focus,\n.form-group-text-transparent.disable:active {\n  background-color: hsl(var(--theme-primary-100));\n  color: hsl(var(--form-label-disabled));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-helper: var(--theme-primary-text-100);\n  --form-helper-disabled: var(--theme-primary-300);\n}\n\n.form-helper-item {\n  font-size: 0.8em;\n  color: hsl(var(--form-helper));\n  transition: color var(--layout-transition-extra-fast);\n}\n\n.form-helper-item.disabled {\n  color: hsl(var(--form-helper-disabled));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-indent {\n  margin-left: calc(var(--form-space) * 2.25);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-space: 1em;\n}\n\n:root {\n  --form-placeholder: var(--theme-primary-400);\n  --form-placeholder-focus-hover: var(--theme-primary-400);\n  --form-placeholder-disabled: var(--theme-primary-200);\n}\n\n:root {\n  --form-ring-hover: 0 0 0 var(--layout-line-width) hsl(var(--theme-primary-800));\n  --form-ring-focus:\n    0 0 0 var(--layout-line-width) hsl(var(--theme-primary-900)),\n    0 0 0 calc(var(--layout-line-width) * 2) hsla(var(--theme-primary-900), 0.25);\n  --form-ring-accent: 0 0 0 var(--layout-line-width) rgb(var(--theme-accent)),\n    0 0 0 calc(var(--layout-line-width) * 2) rgba(var(--theme-accent), 0.25);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-inline {\n  position: relative;\n  display: inline-flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.form-inline-horizontal {\n  flex-direction: row;\n}\n\n.form-inline-vertical {\n  flex-direction: column;\n}\n\n.form-inline-gap-small,\n.form-inline-gap-medium,\n.form-inline-gap-large {\n  row-gap: var(--form-space);\n}\n\n.form-inline-gap-small {\n  column-gap: calc(var(--form-space) * 1);\n}\n\n.form-inline-gap-medium {\n  column-gap: calc(var(--form-space) * 2);\n}\n\n.form-inline-gap-large {\n  column-gap: calc(var(--form-space) * 3);\n}\n\n.form-inline-wrap {\n  flex-wrap: wrap;\n}\n\n.form-inline-block {\n  display: flex;\n}\n\n.form-inline .form-wrap:not(:first-child),\n.form-inline .form-wrap:not(:last-child) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.form-inline .form-wrap {\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.form-inline .form-wrap label {\n  white-space: nowrap;\n}\n\n.form-inline label:not(:only-child):not(:last-child) {\n  padding-bottom: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[type=\"checkbox\"] {\n  margin-bottom: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  display: block;\n  font-size: 1em;\n  line-height: 1;\n  cursor: pointer;\n  pointer-events: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]+label {\n  padding: 0;\n  margin: 0;\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  color: hsl(var(--form-label));\n  cursor: pointer;\n  display: inline-flex;\n  gap: 1em;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  transition: transform var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]:hover+label,\ninput[type=\"checkbox\"]:focus+label {\n  color: hsl(var(--form-label-hover));\n}\n\ninput[type=\"checkbox\"]:active+label {\n  color: hsl(var(--form-label-focus-active));\n}\n\ninput[type=\"checkbox\"]:checked+label {\n  color: hsl(var(--form-label-checked));\n}\n\ninput[type=\"checkbox\"]:disabled+label,\ninput[type=\"checkbox\"]:disabled:hover+label,\ninput[type=\"checkbox\"]:disabled:focus+label {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n\ninput[type=\"checkbox\"]+label .label-icon {\n  background-color: hsl(var(--form-icon));\n  width: var(--form-thumb-size);\n  height: var(--form-thumb-size);\n  position: relative;\n  top: 0.125em;\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  box-shadow: none;\n  transition: background-color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]+label .label-icon {\n  border-radius: 0.25em;\n}\n\ninput[type=\"checkbox\"]:hover+label .label-icon,\ninput[type=\"checkbox\"]:focus+label .label-icon {\n  background-color: hsl(var(--form-icon-hover));\n  box-shadow: var(--form-ring-hover);\n}\n\ninput[type=\"checkbox\"]:active+label .label-icon {\n  background-color: hsl(var(--form-icon-active));\n  box-shadow: var(--form-ring-accent);\n  transition: none;\n}\n\ninput[type=\"checkbox\"]:checked+label .label-icon {\n  background-color: hsl(var(--form-icon-checked));\n}\n\ninput[type=\"checkbox\"]:checked:focus+label .label-icon,\ninput[type=\"checkbox\"]:checked:active+label .label-icon {\n  box-shadow: var(--form-ring-accent);\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-icon,\ninput[type=\"checkbox\"]:disabled:hover+label .label-icon,\ninput[type=\"checkbox\"]:disabled:focus+label .label-icon,\ninput[type=\"checkbox\"]:checked:disabled+label .label-icon,\ninput[type=\"checkbox\"]:checked:disabled:hover+label .label-icon,\ninput[type=\"checkbox\"]:checked:disabled:focus+label .label-icon {\n  background-color: hsl(var(--form-icon-disabled));\n  box-shadow: none;\n}\n\ninput[type=\"checkbox\"]+label .label-icon:before {\n  content: \"\";\n  background-color: hsl(var(--form-icon-symbol));\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0.7);\n  transform-origin: center;\n  z-index: 2;\n  transition: background-color var(--layout-transition-extra-fast), border-radius var(--layout-transition-extra-fast), transform var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]+label .label-icon:before {\n  border-radius: 0.1em;\n}\n\ninput[type=\"checkbox\"]:active+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-active));\n  transition: none;\n}\n\ninput[type=\"checkbox\"]:checked+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-active));\n  border-radius: 50%;\n}\n\ninput[type=\"checkbox\"]:checked+label .label-icon:before {\n  transform: scale(0);\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-icon:before,\ninput[type=\"checkbox\"]:disabled:hover+label .label-icon:before,\ninput[type=\"checkbox\"]:disabled:focus+label .label-icon:before,\ninput[type=\"checkbox\"]:disabled:active+label .label-icon:before,\ninput[type=\"checkbox\"]:checked:disabled+label .label-icon:before,\ninput[type=\"checkbox\"]:checked:disabled:hover+label .label-icon:before,\ninput[type=\"checkbox\"]:checked:disabled:focus+label .label-icon:before,\ninput[type=\"checkbox\"]:checked:disabled:active+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-disabled));\n}\n\ninput[type=\"checkbox\"]+label .label-icon:after {\n  content: \"\";\n  background-color: hsl(var(--form-icon-symbol));\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  transform-origin: center;\n  z-index: 2;\n  transition: transform var(--layout-transition-extra-fast);\n  clip-path: polygon(7% 56%, 37% 86%, 95% 27%, 84% 16%, 37% 64%, 18% 45%);\n}\n\ninput[type=\"checkbox\"]:checked+label .label-icon:after {\n  background-color: hsl(var(--form-icon-symbol-active));\n  transform: scale(0.8);\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-icon:after,\ninput[type=\"checkbox\"]:disabled:hover+label .label-icon:after,\ninput[type=\"checkbox\"]:disabled:focus+label .label-icon:after,\ninput[type=\"checkbox\"]:disabled:active+label .label-icon:after,\ninput[type=\"checkbox\"]:checked:disabled+label .label-icon:after,\ninput[type=\"checkbox\"]:checked:disabled:hover+label .label-icon:after,\ninput[type=\"checkbox\"]:checked:disabled:focus+label .label-icon:after,\ninput[type=\"checkbox\"]:checked:disabled:active+label .label-icon:after {\n  background-color: hsl(var(--form-icon-symbol-disabled));\n}\n\ninput[type=\"checkbox\"]+label .label-block-item {\n  color: hsl(var(--form-label));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]:hover+label .label-block-item,\ninput[type=\"checkbox\"]:focus+label .label-block-item {\n  color: hsl(var(--form-label-hover));\n}\n\ninput[type=\"checkbox\"]:active+label .label-block-item {\n  color: hsl(var(--form-label-focus-active));\n}\n\ninput[type=\"checkbox\"]:checked+label .label-block-item {\n  color: hsl(var(--form-label-checked));\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-block-item,\ninput[type=\"checkbox\"]:disabled:hover+label .label-block-item,\ninput[type=\"checkbox\"]:disabled:focus+label .label-block-item {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n\ninput[type=\"checkbox\"]+label .label-block-item.muted {\n  color: hsl(var(--utility-muted));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"checkbox\"]:hover+label .label-block-item.muted,\ninput[type=\"checkbox\"]:focus+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-hover));\n}\n\ninput[type=\"checkbox\"]:active+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-focus-active));\n}\n\ninput[type=\"checkbox\"]:checked+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-checked));\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-block-item.muted,\ninput[type=\"checkbox\"]:disabled:hover+label .label-block-item.muted,\ninput[type=\"checkbox\"]:disabled:focus+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-disabled));\n  cursor: default;\n}\n\ninput[type=\"checkbox\"]:disabled+label .label-block-item,\ninput[type=\"checkbox\"]:disabled:hover+label .label-block-item,\ninput[type=\"checkbox\"]:disabled:focus+label .label-block-item {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9755:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[type=\"color\"] {\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  min-width: 4em;\n  height: 2.5em;\n  display: block;\n  border: 0;\n  border-radius: var(--theme-radius-base);\n  overflow: hidden;\n  cursor: pointer;\n  opacity: 1;\n  transition: box-shadow var(--layout-transition-extra-fast), opacity var(--layout-transition-extra-fast);\n}\n\ninput[type=\"color\"]:hover {\n  outline: none;\n  box-shadow: var(--form-ring-hover);\n}\n\ninput[type=\"color\"]:focus {\n  outline: none;\n  box-shadow: var(--form-ring-focus);\n}\n\ninput[type=\"color\"]:disabled {\n  opacity: 0.25;\n  cursor: default;\n}\n\ninput[type=\"color\"]:disabled:hover,\ninput[type=\"color\"]:disabled:focus {\n  box-shadow: none;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n  border: 0;\n  padding: 0;\n  outline: none;\n}\n\ninput[type=\"color\"]::-webkit-color-swatch {\n  border: 0;\n  padding: 0;\n  outline: none;\n}\n\ninput[type=\"color\"]::-moz-color-swatch-wrapper {\n  border: 0;\n  padding: 0;\n  outline: none;\n}\n\ninput[type=\"color\"]::-moz-color-swatch {\n  border: 0;\n  padding: 0;\n  outline: none;\n}\n\ninput[type=\"color\"]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n  outline: none;\n}\n\n.input-color-dot input[type=\"color\"] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  right: 1em;\n  width: calc(var(--form-thumb-size) * 0.8);\n  height: calc(var(--form-thumb-size) * 0.8);\n  min-width: inherit;\n  z-index: 4;\n  border-radius: 50%;\n  transform: translateY(-50%);\n  transition: none;\n}\n\n.input-color-dot input[type=\"color\"]:hover {\n  outline: none;\n  box-shadow: none;\n}\n\n.input-color-dot input[type=\"color\"]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.input-color-dot input[type=\"color\"]+label {\n  padding-right: calc(calc(var(--form-thumb-size) * 0.8) + 2em);\n  position: relative;\n}\n\n.form-input-button-link.input-color-dot input[type=\"color\"] {\n  transition: box-shadow var(--layout-transition-extra-fast);\n  box-shadow: 0 0 0 2px hsl(var(--button-link-text));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-input-background: var(--theme-primary-200);\n  --form-input-background-hover: var(--theme-primary-200);\n  --form-input-background-focus-active: var(--theme-primary-100);\n  --form-input-background-disabled: var(--theme-primary-100);\n  --form-input-text: var(--theme-primary-text-200);\n  --form-input-text-hover: var(--theme-primary-text-200);\n  --form-input-text-focus-active: var(--theme-primary-text-400);\n  --form-input-text-disabled: var(--theme-primary-300);\n}\n\n:root {\n  --form-icon: var(--theme-primary-400);\n  --form-icon-hover: var(--theme-primary-300);\n  --form-icon-focus: var(--theme-primary-300);\n  --form-icon-active: var(--theme-primary-text-100);\n  --form-icon-checked: var(--theme-primary-text-100);\n  --form-icon-disabled: var(--theme-primary-300);\n  --form-icon-symbol: var(--theme-primary-100);\n  --form-icon-symbol-active: var(--theme-primary-100);\n  --form-icon-symbol-disabled: var(--theme-primary-100);\n}\n\n:root {\n  --form-thumb-size: 1.25em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-input-button {\n  position: relative;\n  display: flex;\n}\n\n.form-input-button input[type=\"checkbox\"]+label,\n.form-input-button input[type=\"radio\"]+label,\n.form-input-button input[type=\"color\"]+label,\n.form-input-button input[type=\"file\"]+label {\n  background-color: hsl(var(--button-background));\n  padding: 0.25em 1.25em;\n  margin: 0;\n  color: hsl(var(--button-text));\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  min-height: 2.5em;\n  line-height: 1;\n  border: 0;\n  border-radius: var(--theme-radius-base);\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: none;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast);\n}\n\n.form-input-button input[type=\"checkbox\"]:focus+label,\n.form-input-button input[type=\"checkbox\"]:hover+label,\n.form-input-button input[type=\"radio\"]:focus+label,\n.form-input-button input[type=\"radio\"]:hover+label,\n.form-input-button input[type=\"color\"]:focus+label,\n.form-input-button input[type=\"color\"]:hover+label,\n.form-input-button input[type=\"file\"]:focus+label,\n.form-input-button input[type=\"file\"]:hover+label {\n  background-color: hsl(var(--button-background-focus-hover));\n  color: hsl(var(--button-text-focus-hover));\n  outline: none;\n  text-decoration: none;\n}\n\n.form-input-button input[type=\"checkbox\"]:active+label,\n.form-input-button input[type=\"radio\"]:active+label,\n.form-input-button input[type=\"color\"]:active+label,\n.form-input-button input[type=\"file\"]:active+label {\n  background-color: hsl(var(--button-background-active));\n  color: hsl(var(--button-text-active));\n  outline: none;\n  text-decoration: none;\n  transition: none;\n}\n\n.form-input-button input[type=\"checkbox\"]:checked+label,\n.form-input-button input[type=\"radio\"]:checked+label,\n.form-input-button input[type=\"color\"]:checked+label,\n.form-input-button input[type=\"file\"]:checked+label {\n  background-color: hsl(var(--button-background-active));\n  color: hsl(var(--button-text-active));\n  outline: none;\n  text-decoration: none;\n}\n\n.form-input-button input[type=\"checkbox\"]:disabled+label,\n.form-input-button input[type=\"checkbox\"]:disabled:hover+label,\n.form-input-button input[type=\"checkbox\"]:disabled:focus+label,\n.form-input-button input[type=\"checkbox\"]:disabled:active+label,\n.form-input-button input[type=\"radio\"]:disabled+label,\n.form-input-button input[type=\"radio\"]:disabled:hover+label,\n.form-input-button input[type=\"radio\"]:disabled:focus+label,\n.form-input-button input[type=\"radio\"]:disabled:active+label,\n.form-input-button input[type=\"color\"]:disabled+label,\n.form-input-button input[type=\"color\"]:disabled:hover+label,\n.form-input-button input[type=\"color\"]:disabled:focus+label,\n.form-input-button input[type=\"color\"]:disabled:active+label,\n.form-input-button input[type=\"file\"]:disabled+label,\n.form-input-button input[type=\"file\"]:disabled:hover+label,\n.form-input-button input[type=\"file\"]:disabled:focus+label,\n.form-input-button input[type=\"file\"]:disabled:active+label {\n  background-color: hsl(var(--button-background-disabled));\n  color: hsl(var(--button-text-disabled));\n  cursor: default;\n  text-decoration: none;\n}\n\n.form-input-button input[type=\"checkbox\"]+label .label-icon,\n.form-input-button input[type=\"radio\"]+label .label-icon {\n  top: inherit;\n}\n\n.form-input-button-ring input[type=\"checkbox\"]+label,\n.form-input-button-ring input[type=\"radio\"]+label,\n.form-input-button-ring input[type=\"color\"]+label,\n.form-input-button-ring input[type=\"file\"]+label {\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\n.form-input-button-ring input[type=\"checkbox\"]:focus+label,\n.form-input-button-ring input[type=\"checkbox\"]:hover+label,\n.form-input-button-ring input[type=\"radio\"]:focus+label,\n.form-input-button-ring input[type=\"radio\"]:hover+label,\n.form-input-button-ring input[type=\"color\"]:focus+label,\n.form-input-button-ring input[type=\"color\"]:hover+label,\n.form-input-button-ring input[type=\"file\"]:focus+label,\n.form-input-button-ring input[type=\"file\"]:hover+label {\n  box-shadow: var(--form-ring-hover);\n}\n\n.form-input-button-ring input[type=\"checkbox\"]:active+label,\n.form-input-button-ring input[type=\"radio\"]:active+label,\n.form-input-button-ring input[type=\"color\"]:active+label,\n.form-input-button-ring input[type=\"file\"]:active+label {\n  box-shadow: var(--form-ring-accent);\n}\n\n.form-input-button-ring input[type=\"checkbox\"]:checked+label,\n.form-input-button-ring input[type=\"radio\"]:checked+label,\n.form-input-button-ring input[type=\"color\"]:checked+label,\n.form-input-button-ring input[type=\"file\"]:checked+label {\n  box-shadow: var(--form-ring-accent);\n}\n\n.form-input-button-ring input[type=\"checkbox\"]:disabled+label,\n.form-input-button-ring input[type=\"checkbox\"]:disabled:hover+label,\n.form-input-button-ring input[type=\"checkbox\"]:disabled:focus+label,\n.form-input-button-ring input[type=\"checkbox\"]:disabled:active+label,\n.form-input-button-ring input[type=\"radio\"]:disabled+label,\n.form-input-button-ring input[type=\"radio\"]:disabled:hover+label,\n.form-input-button-ring input[type=\"radio\"]:disabled:focus+label,\n.form-input-button-ring input[type=\"radio\"]:disabled:active+label,\n.form-input-button-ring input[type=\"color\"]:disabled+label,\n.form-input-button-ring input[type=\"color\"]:disabled:hover+label,\n.form-input-button-ring input[type=\"color\"]:disabled:focus+label,\n.form-input-button-ring input[type=\"color\"]:disabled:active+label,\n.form-input-button-ring input[type=\"file\"]:disabled+label,\n.form-input-button-ring input[type=\"file\"]:disabled:hover+label,\n.form-input-button-ring input[type=\"file\"]:disabled:focus+label,\n.form-input-button-ring input[type=\"file\"]:disabled:active+label {\n  box-shadow: none;\n}\n\n.form-input-button-line input[type=\"checkbox\"]+label:after,\n.form-input-button-line input[type=\"radio\"]+label:after,\n.form-input-button-line input[type=\"color\"]+label:after,\n.form-input-button-line input[type=\"file\"]+label:after {\n  content: \"\";\n  background: transparent;\n  border-radius: var(--theme-radius-base);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  clip-path: polygon(0 calc(100% - var(--layout-line-width)), 100% calc(100% - var(--layout-line-width)), 100% 100%, 0% 100%);\n  transition: background-color var(--layout-transition-extra-fast);\n  pointer-events: none;\n}\n\n.form-input-button-line input[type=\"checkbox\"]:focus+label:after,\n.form-input-button-line input[type=\"checkbox\"]:hover+label:after,\n.form-input-button-line input[type=\"radio\"]:focus+label:after,\n.form-input-button-line input[type=\"radio\"]:hover+label:after,\n.form-input-button-line input[type=\"color\"]:focus+label:after,\n.form-input-button-line input[type=\"color\"]:hover+label:after,\n.form-input-button-line input[type=\"file\"]:focus+label:after,\n.form-input-button-line input[type=\"file\"]:hover+label:after {\n  background-color: hsl(var(--button-border-focus-hover));\n}\n\n.form-input-button-line input[type=\"checkbox\"]:active+label:after,\n.form-input-button-line input[type=\"radio\"]:active+label:after,\n.form-input-button-line input[type=\"color\"]:active+label:after,\n.form-input-button-line input[type=\"file\"]:active+label:after {\n  background-color: hsl(var(--button-border-active));\n  transition: none;\n}\n\n.form-input-button-line input[type=\"checkbox\"]:checked+label:after,\n.form-input-button-line input[type=\"radio\"]:checked+label:after,\n.form-input-button-line input[type=\"color\"]:checked+label:after,\n.form-input-button-line input[type=\"file\"]:checked+label:after {\n  background-color: hsl(var(--button-border-active));\n  transition: none;\n}\n\n.form-input-button-line input[type=\"checkbox\"]:disabled+label:after,\n.form-input-button-line input[type=\"checkbox\"]:disabled:hover+label:after,\n.form-input-button-line input[type=\"checkbox\"]:disabled:focus+label:after,\n.form-input-button-line input[type=\"checkbox\"]:disabled:active+label:after,\n.form-input-button-line input[type=\"radio\"]:disabled+label:after,\n.form-input-button-line input[type=\"radio\"]:disabled:hover+label:after,\n.form-input-button-line input[type=\"radio\"]:disabled:focus+label:after,\n.form-input-button-line input[type=\"radio\"]:disabled:active+label:after,\n.form-input-button-line input[type=\"color\"]:disabled+label:after,\n.form-input-button-line input[type=\"color\"]:disabled:hover+label:after,\n.form-input-button-line input[type=\"color\"]:disabled:focus+label:after,\n.form-input-button-line input[type=\"color\"]:disabled:active+label:after,\n.form-input-button-line input[type=\"file\"]:disabled+label:after,\n.form-input-button-line input[type=\"file\"]:disabled:hover+label:after,\n.form-input-button-line input[type=\"file\"]:disabled:focus+label:after,\n.form-input-button-line input[type=\"file\"]:disabled:active+label:after {\n  background-color: hsl(var(--button-border-disabled));\n}\n\n/* form input button link */\n.form-input-button-link input[type=\"checkbox\"]+label,\n.form-input-button-link input[type=\"radio\"]+label,\n.form-input-button-link input[type=\"color\"]+label,\n.form-input-button-link input[type=\"file\"]+label {\n  background-color: transparent;\n}\n\n.form-input-button-link input[type=\"checkbox\"]:hover+label,\n.form-input-button-link input[type=\"checkbox\"]:focus+label,\n.form-input-button-link input[type=\"checkbox\"]:checked+label,\n.form-input-button-link input[type=\"radio\"]:hover+label,\n.form-input-button-link input[type=\"radio\"]:focus+label,\n.form-input-button-link input[type=\"radio\"]:checked+label,\n.form-input-button-link input[type=\"color\"]:hover+label,\n.form-input-button-link input[type=\"color\"]:focus+label,\n.form-input-button-link input[type=\"color\"]:checked+label,\n.form-input-button-link input[type=\"file\"]:hover+label,\n.form-input-button-link input[type=\"file\"]:focus+label,\n.form-input-button-link input[type=\"file\"]:checked+label {\n  background-color: transparent;\n}\n\n.form-input-button-link input[type=\"checkbox\"]:active+label,\n.form-input-button-link input[type=\"radio\"]:active+label,\n.form-input-button-link input[type=\"color\"]:active+label,\n.form-input-button-link input[type=\"file\"]:active+label {\n  background-color: transparent;\n}\n\n.form-input-button-link input:disabled[type=\"checkbox\"]+label,\n.form-input-button-link input:disabled[type=\"radio\"]+label,\n.form-input-button-link input:disabled[type=\"color\"]+label,\n.form-input-button-link input:disabled[type=\"file\"]+label {\n  background-color: transparent;\n  pointer-events: none;\n}\n\n.form-input-button-link input:disabled[type=\"checkbox\"]:hover+label,\n.form-input-button-link input:disabled[type=\"checkbox\"]:focus+label,\n.form-input-button-link input:disabled[type=\"radio\"]:hover+label,\n.form-input-button-link input:disabled[type=\"radio\"]:focus+label,\n.form-input-button-link input:disabled[type=\"color\"]:hover+label,\n.form-input-button-link input:disabled[type=\"color\"]:focus+label,\n.form-input-button-link input:disabled[type=\"file\"]:hover+label,\n.form-input-button-link input:disabled[type=\"file\"]:focus+label {\n  background-color: transparent;\n}\n\n.form-input-button-sr-only input[type=\"checkbox\"]+label,\n.form-input-button-sr-only input[type=\"radio\"]+label,\n.form-input-button-sr-only input[type=\"color\"]+label,\n.form-input-button-sr-only input[type=\"file\"]+label {\n  display: block;\n}\n\n.form-input-button-sr-only input[type=\"checkbox\"]+label .label-block,\n.form-input-button-sr-only input[type=\"radio\"]+label .label-block,\n.form-input-button-sr-only input[type=\"color\"]+label .label-block,\n.form-input-button-sr-only input[type=\"file\"]+label .label-block {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.form-input-button-sr-only.input-color-dot input[type=\"color\"]+label {\n  padding: 0.25em 1.75em;\n}\n\n.form-input-button-sr-only.input-color-dot input[type=\"color\"] {\n  top: 50%;\n  left: 50%;\n  right: initial;\n  transform: translate(-50%, -50%);\n}\n\n.form-input-hide input[type=\"checkbox\"]+label .label-icon,\n.form-input-hide input[type=\"checkbox\"]:checked+label .label-icon,\n.form-input-hide input[type=\"radio\"]+label .label-icon,\n.form-input-hide input[type=\"radio\"]:checked+label .label-icon,\n.form-input-hide input[type=\"file\"]+label .label-icon,\n.form-input-hide input[type=\"file\"]:checked+label .label-icon {\n  display: none;\n}\n\n.form-input-hide input[type=\"color\"],\n.form-input-hide input[type=\"file\"] {\n  margin: 0;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  min-width: 1px;\n  min-height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  -webkit-appearance: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[type=\"radio\"] {\n  margin-bottom: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  display: block;\n  font-size: 1em;\n  line-height: 1;\n  cursor: pointer;\n  pointer-events: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]+label {\n  padding: 0;\n  margin: 0;\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  color: hsl(var(--form-label));\n  cursor: pointer;\n  display: inline-flex;\n  gap: 1em;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  transition: transform var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]:hover+label,\ninput[type=\"radio\"]:focus+label {\n  color: hsl(var(--form-label-hover));\n}\n\ninput[type=\"radio\"]:active+label {\n  color: hsl(var(--form-label-focus-active));\n}\n\ninput[type=\"radio\"]:checked+label {\n  color: hsl(var(--form-label-checked));\n}\n\ninput[type=\"radio\"]:disabled+label,\ninput[type=\"radio\"]:disabled:hover+label,\ninput[type=\"radio\"]:disabled:focus+label {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n\ninput[type=\"radio\"]+label .label-icon {\n  background-color: hsl(var(--form-icon));\n  width: var(--form-thumb-size);\n  height: var(--form-thumb-size);\n  position: relative;\n  top: 0.125em;\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  box-shadow: none;\n  transition: background-color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]+label .label-icon {\n  border-radius: 50%;\n}\n\ninput[type=\"radio\"]:hover+label .label-icon,\ninput[type=\"radio\"]:focus+label .label-icon {\n  background-color: hsl(var(--form-icon-hover));\n  box-shadow: var(--form-ring-hover);\n}\n\ninput[type=\"radio\"]:active+label .label-icon {\n  background-color: hsl(var(--form-icon-active));\n  box-shadow: var(--form-ring-accent);\n  transition: none;\n}\n\ninput[type=\"radio\"]:checked+label .label-icon {\n  background-color: hsl(var(--form-icon-checked));\n}\n\ninput[type=\"radio\"]:checked:focus+label .label-icon,\ninput[type=\"radio\"]:checked:active+label .label-icon {\n  box-shadow: var(--form-ring-accent);\n}\n\ninput[type=\"radio\"]:disabled+label .label-icon,\ninput[type=\"radio\"]:disabled:hover+label .label-icon,\ninput[type=\"radio\"]:disabled:focus+label .label-icon,\ninput[type=\"radio\"]:checked:disabled+label .label-icon,\ninput[type=\"radio\"]:checked:disabled:hover+label .label-icon,\ninput[type=\"radio\"]:checked:disabled:focus+label .label-icon {\n  background-color: hsl(var(--form-icon-disabled));\n  box-shadow: none;\n}\n\ninput[type=\"radio\"]+label .label-icon:before {\n  content: \"\";\n  background-color: hsl(var(--form-icon-symbol));\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0.7);\n  transform-origin: center;\n  z-index: 2;\n  transition: background-color var(--layout-transition-extra-fast), border-radius var(--layout-transition-extra-fast), transform var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]+label .label-icon:before {\n  border-radius: 50%;\n}\n\ninput[type=\"radio\"]:active+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-active));\n  transition: none;\n}\n\ninput[type=\"radio\"]:checked+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-active));\n  border-radius: 50%;\n}\n\ninput[type=\"radio\"]:checked+label .label-icon:before {\n  transform: scale(0.2);\n}\n\ninput[type=\"radio\"]:disabled+label .label-icon:before,\ninput[type=\"radio\"]:disabled:hover+label .label-icon:before,\ninput[type=\"radio\"]:disabled:focus+label .label-icon:before,\ninput[type=\"radio\"]:disabled:active+label .label-icon:before,\ninput[type=\"radio\"]:checked:disabled+label .label-icon:before,\ninput[type=\"radio\"]:checked:disabled:hover+label .label-icon:before,\ninput[type=\"radio\"]:checked:disabled:focus+label .label-icon:before,\ninput[type=\"radio\"]:checked:disabled:active+label .label-icon:before {\n  background-color: hsl(var(--form-icon-symbol-disabled));\n}\n\ninput[type=\"radio\"]+label .label-block-item {\n  color: hsl(var(--form-label));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]:hover+label .label-block-item,\ninput[type=\"radio\"]:focus+label .label-block-item {\n  color: hsl(var(--form-label-hover));\n}\n\ninput[type=\"radio\"]:active+label .label-block-item {\n  color: hsl(var(--form-label-focus-active));\n}\n\ninput[type=\"radio\"]:checked+label .label-block-item {\n  color: hsl(var(--form-label-checked));\n}\n\ninput[type=\"radio\"]:disabled+label .label-block-item,\ninput[type=\"radio\"]:disabled:hover+label .label-block-item,\ninput[type=\"radio\"]:disabled:focus+label .label-block-item {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n\ninput[type=\"radio\"]+label .label-block-item.muted {\n  color: hsl(var(--utility-muted));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"radio\"]:hover+label .label-block-item.muted,\ninput[type=\"radio\"]:focus+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-hover));\n}\n\ninput[type=\"radio\"]:active+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-focus-active));\n}\n\ninput[type=\"radio\"]:checked+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-checked));\n}\n\ninput[type=\"radio\"]:disabled+label .label-block-item.muted,\ninput[type=\"radio\"]:disabled:hover+label .label-block-item.muted,\ninput[type=\"radio\"]:disabled:focus+label .label-block-item.muted {\n  color: hsl(var(--utility-muted-disabled));\n  cursor: default;\n}\n\ninput[type=\"radio\"]:disabled+label .label-block-item,\ninput[type=\"radio\"]:disabled:hover+label .label-block-item,\ninput[type=\"radio\"]:disabled:focus+label .label-block-item {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-range-track-background: var(--theme-primary-200);\n  --form-range-track-background-hover: var(--theme-primary-200);\n  --form-range-track-background-focus: var(--theme-primary-200);\n  --form-range-track-background-disabled: var(--theme-primary-100);\n  --form-range-thumb-size: 1.5em;\n  --form-range-thumb-background: var(--theme-primary-text-100);\n  --form-range-thumb-background-disabled: var(--theme-primary-300);\n  --form-range-thumb-border: var(--theme-primary-100);\n  --form-range-thumb-border-focus: var(--theme-primary-text-100);\n  --form-range-thumb-border-disabled: var(--theme-primary-100);\n  --form-range-hue: linear-gradient(to right,\n      hsl(0, 100%, 50%),\n      hsl(30, 100%, 50%),\n      hsl(60, 100%, 50%),\n      hsl(90, 100%, 50%),\n      hsl(120, 100%, 50%),\n      hsl(150, 100%, 50%),\n      hsl(180, 100%, 50%),\n      hsl(210, 100%, 50%),\n      hsl(240, 100%, 50%),\n      hsl(270, 100%, 50%),\n      hsl(300, 100%, 50%),\n      hsl(330, 100%, 50%),\n      hsl(360, 100%, 50%));\n}\n\ninput[type=\"range\"] {\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  font-size: 1em;\n  display: block;\n  height: 2.5em;\n  width: 100%;\n  position: relative;\n  border: 0;\n  cursor: pointer;\n  touch-action: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-appearance: none;\n}\n\ninput[type=\"range\"],\ninput[type=\"range\"]:hover,\ninput[type=\"range\"]:focus,\ninput[type=\"range\"]:active {\n  outline: 0;\n}\n\ninput[type=\"range\"]:disabled,\ninput[type=\"range\"]:disabled:hover,\ninput[type=\"range\"]:disabled:focus,\ninput[type=\"range\"]:disabled:active {\n  cursor: default;\n}\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  background-color: hsl(var(--form-range-track-background));\n  padding: 0;\n  margin: 0;\n  height: calc(var(--layout-line-width) * 1.5);\n  border: 0;\n  border-radius: 10em;\n  transition: background-color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"range\"]:hover::-webkit-slider-runnable-track {\n  background-color: hsl(var(--form-range-track-background-hover));\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n  background-color: hsl(var(--form-range-track-background-focus));\n}\n\ninput[type=\"range\"]:disabled::-webkit-slider-runnable-track,\ninput[type=\"range\"]:disabled:hover::-webkit-slider-runnable-track,\ninput[type=\"range\"]:disabled:focus::-webkit-slider-runnable-track {\n  background-color: hsl(var(--form-range-track-background-disabled));\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  background-color: hsl(var(--form-range-thumb-background));\n  margin: 0;\n  padding: 0;\n  border: calc(var(--layout-line-width) * 1) solid hsl(var(--form-range-thumb-border));\n  border-radius: 100%;\n  width: var(--form-range-thumb-size);\n  height: var(--form-range-thumb-size);\n  top: 50%;\n  transform: translateY(-50%);\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  transition: background-color var(--layout-transition-extra-fast), border var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  box-shadow: var(--form-ring-accent);\n  border-color: hsl(var(--form-range-thumb-border-focus));\n}\n\ninput[type=\"range\"]:disabled::-webkit-slider-thumb,\ninput[type=\"range\"]:disabled:hover::-webkit-slider-thumb,\ninput[type=\"range\"]:disabled:focus::-webkit-slider-thumb {\n  background-color: hsl(var(--form-range-thumb-background-disabled));\n  border-color: hsl(var(--form-range-thumb-border-disabled));\n  box-shadow: none;\n  cursor: default;\n}\n\ninput[type=\"range\"].input-range-hue-spectrum::-webkit-slider-runnable-track {\n  background-image: var(--form-range-hue);\n}\n\ninput[type=\"range\"]:disabled.input-range-hue-spectrum::-webkit-slider-runnable-track {\n  background-image: none;\n  background-color: hsl(var(--form-range-track-background-disabled));\n}\n\ninput[type=\"range\"]::-moz-range-track {\n  background-color: hsl(var(--form-range-track-background));\n  padding: 0;\n  margin: 0;\n  height: calc(var(--layout-line-width) * 1.5);\n  border: 0;\n  border-radius: 10em;\n  transition: background-color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"range\"]:hover::-moz-range-track {\n  background-color: hsl(var(--form-range-track-background-hover));\n}\n\ninput[type=\"range\"]:focus::-moz-range-track {\n  background-color: hsl(var(--form-range-track-background-focus));\n}\n\ninput[type=\"range\"]:disabled::-moz-range-track,\ninput[type=\"range\"]:disabled:hover::-moz-range-track,\ninput[type=\"range\"]:disabled:focus::-moz-range-track {\n  background-color: hsl(var(--form-range-track-background-disabled));\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n  background-color: hsl(var(--form-range-thumb-background));\n  margin: 0;\n  padding: 0;\n  border: calc(var(--layout-line-width) * 1) solid hsl(var(--form-range-thumb-border));\n  border-radius: 100%;\n  width: var(--form-range-thumb-size);\n  height: var(--form-range-thumb-size);\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  transition: background-color var(--layout-transition-extra-fast), border var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"range\"]:focus::-moz-range-thumb {\n  box-shadow: var(--form-ring-accent);\n  border-color: hsl(var(--form-range-thumb-border-focus));\n}\n\ninput[type=\"range\"]:disabled::-moz-range-thumb,\ninput[type=\"range\"]:disabled:hover::-moz-range-thumb,\ninput[type=\"range\"]:disabled:focus::-moz-range-thumb {\n  background-color: hsl(var(--form-range-thumb-background-disabled));\n  border-color: hsl(var(--form-range-thumb-border-disabled));\n  box-shadow: none;\n  cursor: default;\n}\n\ninput[type=\"range\"].input-range-hue-spectrum::-moz-range-track {\n  background-image: var(--form-range-hue);\n}\n\ninput[type=\"range\"]:disabled.input-range-hue-spectrum::-moz-range-track {\n  background-image: none;\n  background-color: hsl(var(--form-range-track-background-disabled));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "input[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"password\"],\ninput[type=\"search\"],\ninput[type=\"tel\"],\ninput[type=\"text\"] {\n  background-color: hsl(var(--form-input-background));\n  padding: 0 1.25em;\n  margin: 0;\n  color: hsl(var(--form-input-text));\n  font-size: 1em;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  line-height: 1.6;\n  height: 2.5em;\n  min-width: 0;\n  width: 100%;\n  border-width: 0;\n  border-radius: var(--theme-radius-base);\n  cursor: text;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n  -moz-appearance: textfield;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\ninput[type=\"number\"] {\n  text-align: center;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"email\"]:hover,\ninput[type=\"number\"]:hover,\ninput[type=\"password\"]:hover,\ninput[type=\"search\"]:hover,\ninput[type=\"tel\"]:hover,\ninput[type=\"text\"]:hover {\n  background-color: hsl(var(--form-input-background-hover));\n  color: hsl(var(--form-input-text-hover));\n  outline: none;\n  box-shadow: var(--form-ring-hover);\n}\n\ninput[type=\"email\"]:focus,\ninput[type=\"email\"]:active,\ninput[type=\"number\"]:focus,\ninput[type=\"number\"]:active,\ninput[type=\"password\"]:focus,\ninput[type=\"password\"]:active,\ninput[type=\"search\"]:focus,\ninput[type=\"search\"]:active,\ninput[type=\"tel\"]:focus,\ninput[type=\"tel\"]:active,\ninput[type=\"text\"]:focus,\ninput[type=\"text\"]:active {\n  background-color: hsl(var(--form-input-background-focus-active));\n  color: hsl(var(--form-input-text-focus-active));\n  outline: none;\n  z-index: 2;\n  box-shadow: var(--form-ring-accent);\n}\n\ninput[type=\"email\"]:disabled,\ninput[type=\"number\"]:disabled,\ninput[type=\"password\"]:disabled,\ninput[type=\"search\"]:disabled,\ninput[type=\"tel\"]:disabled,\ninput[type=\"text\"]:disabled {\n  background-color: hsl(var(--form-input-background-disabled));\n  color: hsl(var(--form-input-text-disabled));\n  cursor: default;\n  box-shadow: none;\n}\n\ninput[type=\"email\"]:disabled:hover,\ninput[type=\"email\"]:disabled:focus,\ninput[type=\"number\"]:disabled:hover,\ninput[type=\"number\"]:disabled:focus,\ninput[type=\"password\"]:disabled:hover,\ninput[type=\"password\"]:disabled:focus,\ninput[type=\"search\"]:disabled:hover,\ninput[type=\"search\"]:disabled:focus,\ninput[type=\"tel\"]:disabled:hover,\ninput[type=\"tel\"]:disabled:focus,\ninput[type=\"text\"]:disabled:hover,\ninput[type=\"text\"]:disabled:focus {\n  color: hsl(var(--form-input-text-disabled));\n}\n\ninput[type=\"email\"]::placeholder,\ninput[type=\"number\"]::placeholder,\ninput[type=\"password\"]::placeholder,\ninput[type=\"search\"]::placeholder,\ninput[type=\"tel\"]::placeholder,\ninput[type=\"text\"]::placeholder {\n  color: hsl(var(--form-placeholder));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ninput[type=\"email\"]:hover::placeholder,\ninput[type=\"number\"]:hover::placeholder,\ninput[type=\"password\"]:hover::placeholder,\ninput[type=\"search\"]:hover::placeholder,\ninput[type=\"tel\"]:hover::placeholder,\ninput[type=\"text\"]:hover::placeholder {\n  color: hsl(var(--form-placeholder-focus-hover));\n}\n\ninput[type=\"email\"]:focus::placeholder,\ninput[type=\"number\"]:focus::placeholder,\ninput[type=\"password\"]:focus::placeholder,\ninput[type=\"search\"]:focus::placeholder,\ninput[type=\"tel\"]:focus::placeholder,\ninput[type=\"text\"]:focus::placeholder {\n  color: hsl(var(--form-placeholder-focus-hover));\n}\n\ninput[type=\"email\"]:disabled::placeholder,\ninput[type=\"email\"]:disabled:hover::placeholder,\ninput[type=\"email\"]:disabled:focus::placeholder,\ninput[type=\"number\"]:disabled::placeholder,\ninput[type=\"number\"]:disabled:hover::placeholder,\ninput[type=\"number\"]:disabled:focus::placeholder,\ninput[type=\"password\"]:disabled::placeholder,\ninput[type=\"password\"]:disabled:hover::placeholder,\ninput[type=\"password\"]:disabled:focus::placeholder,\ninput[type=\"search\"]:disabled::placeholder,\ninput[type=\"search\"]:disabled:hover::placeholder,\ninput[type=\"search\"]:disabled:focus::placeholder,\ninput[type=\"tel\"]:disabled::placeholder,\ninput[type=\"tel\"]:disabled:hover::placeholder,\ninput[type=\"tel\"]:disabled:focus::placeholder,\ninput[type=\"text\"]:disabled::placeholder,\ninput[type=\"text\"]:disabled:hover::placeholder,\ninput[type=\"text\"]:disabled:focus::placeholder {\n  color: hsl(var(--form-placeholder-disabled));\n}\n\n.input-clear[type=\"email\"],\n.input-clear[type=\"number\"],\n.input-clear[type=\"password\"],\n.input-clear[type=\"search\"],\n.input-clear[type=\"tel\"],\n.input-clear[type=\"text\"] {\n  background-color: transparent;\n}\n\n.input-clear[type=\"email\"]:hover,\n.input-clear[type=\"number\"]:hover,\n.input-clear[type=\"password\"]:hover,\n.input-clear[type=\"search\"]:hover,\n.input-clear[type=\"tel\"]:hover,\n.input-clear[type=\"text\"]:hover {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.input-clear[type=\"email\"]:focus,\n.input-clear[type=\"email\"]:active,\n.input-clear[type=\"number\"]:focus,\n.input-clear[type=\"number\"]:active,\n.input-clear[type=\"password\"]:focus,\n.input-clear[type=\"password\"]:active,\n.input-clear[type=\"search\"]:focus,\n.input-clear[type=\"search\"]:active,\n.input-clear[type=\"tel\"]:focus,\n.input-clear[type=\"tel\"]:active,\n.input-clear[type=\"text\"]:focus,\n.input-clear[type=\"text\"]:active {\n  background-color: transparent;\n  box-shadow: var(--form-ring-accent);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "textarea {\n  background-color: hsl(var(--form-input-background));\n  padding: 0.5em 1.25em;\n  margin: 0;\n  color: hsl(var(--form-input-text));\n  font-size: 1em;\n  line-height: 1.6;\n  font-family: var(--theme-font-ui-name);\n  font-weight: var(--theme-font-ui-weight);\n  font-style: var(--theme-font-ui-style);\n  height: 10em;\n  min-height: 2.5em;\n  min-width: 0;\n  width: 100%;\n  border-width: 0;\n  border-radius: var(--theme-radius-base);\n  cursor: text;\n  resize: vertical;\n  display: block;\n  transition: background-color var(--layout-transition-extra-fast), border-color var(--layout-transition-extra-fast), color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n  -moz-appearance: textfield;\n}\n\ntextarea:hover {\n  background-color: hsl(var(--form-input-background-hover));\n  color: hsl(var(--form-input-text-hover));\n  outline: none;\n  box-shadow: var(--form-ring-hover);\n}\n\ntextarea:focus,\ntextarea:active {\n  background-color: hsl(var(--form-input-background-focus-active));\n  color: hsl(var(--form-input-text-focus-active));\n  outline: none;\n  box-shadow: var(--form-ring-accent);\n}\n\ntextarea:disabled {\n  background-color: hsl(var(--form-input-background-disabled));\n  color: hsl(var(--form-input-text-disabled));\n  cursor: default;\n  box-shadow: none;\n  resize: none;\n}\n\ntextarea:disabled:hover,\ntextarea:disabled:focus {\n  color: hsl(var(--form-input-text-disabled));\n}\n\ntextarea::placeholder {\n  color: hsl(var(--form-placeholder));\n  transition: color var(--layout-transition-extra-fast);\n}\n\ntextarea:hover::placeholder {\n  color: hsl(var(--form-placeholder-focus-hover));\n}\n\ntextarea:focus::placeholder {\n  color: hsl(var(--form-placeholder-focus-hover));\n}\n\ntextarea:disabled::placeholder,\ntextarea:disabled:hover::placeholder,\ntextarea:disabled:focus::placeholder {\n  color: hsl(var(--form-placeholder-disabled));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --form-label: var(--theme-primary-text-100);\n  --form-label-hover: var(--theme-primary-text-100);\n  --form-label-focus-active: var(--theme-primary-text-100);\n  --form-label-checked: var(--theme-primary-text-100);\n  --form-label-disabled: var(--theme-primary-300);\n}\n\nlabel {\n  padding: 0;\n  color: hsl(var(--form-label));\n  margin-bottom: 0;\n  font-size: 1em;\n  display: block;\n  transition: color var(--layout-transition-extra-fast);\n}\n\nlabel:not(:only-child):not(:last-child) {\n  padding-bottom: var(--form-space);\n}\n\nlabel.disabled {\n  color: hsl(var(--form-label-disabled));\n}\n\n.label-block {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  gap: calc(var(--form-space) / 4);\n}\n\ninput:disabled+label .label-block-item,\ninput:disabled:hover+label .label-block-item,\ninput:disabled:focus+label .label-block-item {\n  color: hsl(var(--form-label-disabled));\n  cursor: default;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-sticky {\n  background-color: hsl(var(--theme-primary-100));\n  margin: -1.5em -1em 0 -1em;\n  padding: 1.5em 1em 1em 1em;\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  transition: background-color var(--layout-transition-extra-fast);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-wrap {\n  position: relative;\n  width: 100%;\n  display: block;\n}\n\n.form-wrap:not(:first-child) {\n  margin-top: var(--form-space);\n}\n\n.form-wrap:not(:last-child) {\n  margin-bottom: var(--form-space);\n}\n\n.form-wrap-hide-space:not(:first-child),\n.form-wrap-hide-space:not(:last-child) {\n  margin-top: calc(var(--form-space) * -1);\n  margin-bottom: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --grid-cell-size: calc(var(--bookmark-size) - calc(var(--grid-gap) / 5));\n}\n\n.grid-area {\n  perspective: calc(var(--grid-perspective) * 1em);\n  font-size: calc(var(--grid-size) * 0.01rem);\n  position: relative;\n  right: 0;\n  transition: right var(--layout-transition-extra-fast);\n}\n\n.grid-list {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(var(--grid-column), calc(calc(var(--grid-cell-size) / 2) * 0.1em) calc(var(--grid-cell-size) * 0.1em)) calc(calc(var(--grid-cell-size) / 2) * 0.1em);\n  grid-gap: calc(var(--grid-gap) * 0.01em) calc(calc(var(--grid-gap) * 2) * 0.01em);\n  transform: rotateX(calc(var(--grid-transform-rotate-x) * 1deg)) rotateY(calc(var(--grid-transform-rotate-y) * 1deg)) rotateZ(calc(var(--grid-transform-rotate-z) * 1deg));\n  transition: transform var(--layout-transition-medium);\n  transform-style: preserve-3d;\n  transform-origin: center;\n}\n\n.is-bookmark-edit .grid-list {\n  transform: rotateX(0) rotateY(0) rotateZ(0);\n}\n\n@media (min-width: 1200px) {\n  .is-menu-open .grid-area {\n    right: 20vw;\n    transition: right var(--layout-transition-extra-fast) var(--layout-duration-02);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon {\n  width: 1em;\n  height: 1em;\n  font-size: 1.5em;\n  display: flex;\n}\n\n.icon svg {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n  vertical-align: middle;\n  overflow: hidden;\n  display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --layout-size: 1;\n}\n\n:root {\n  --layout-line-width: 0.2em;\n}\n\n:root {\n  --layout-duration-01: 0.1s;\n  --layout-duration-02: 0.2s;\n  --layout-duration-03: 0.3s;\n  --layout-duration-04: 0.4s;\n  --layout-duration-05: 0.5s;\n  --layout-duration-06: 0.6s;\n  --layout-duration-07: 0.7s;\n  --layout-duration-08: 0.8s;\n  --layout-duration-09: 0.9s;\n  --layout-duration-10: 1s;\n  --layout-timing-ease: ease-in-out;\n  --layout-timing-bounce: cubic-bezier(0.8, 0.8, 0.4, 1.4);\n  --layout-transition-extra-fast: var(--layout-duration-02) var(--layout-timing-ease);\n  --layout-transition-fast: var(--layout-duration-04) var(--layout-timing-ease);\n  --layout-transition-medium: var(--layout-duration-06) var(--layout-timing-ease);\n  --layout-transition-slow: var(--layout-duration-08) var(--layout-timing-ease);\n  --layout-transition-extra-slow: var(--layout-duration-10) var(--layout-timing-ease);\n}\n\n:root {\n  --layout-horizontal-rule-small: 1px solid hsl(var(--theme-primary-200));\n  --layout-horizontal-rule-large: 2px solid hsl(var(--theme-primary-200));\n}\n\n.layout-wrap {\n  z-index: var(--z-index-layout);\n}\n\n.layout-area {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  margin: calc(var(--grid-gap) * 0.01em);\n}\n\n.is-presentation-mode .layout-area {\n  grid-gap: calc(var(--grid-gap) * 0.02em);\n  grid-template-columns: auto auto;\n  align-items: stretch;\n}\n\n.is-presentation-mode .presentation-name-wrap {\n  margin-top: calc(-1 * calc(var(--grid-gap) * 0.01em));\n  margin-bottom: calc(-1 * calc(var(--grid-gap) * 0.01em));\n}\n\n.is-presentation-mode .presentation-name {\n  margin-bottom: 0;\n  color: hsl(var(--theme-primary-100));\n  font-size: calc(var(--grid-size) * 0.04rem);\n  position: sticky;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.is-presentation-mode.is-theme-bookmark-shadow-color-type-theme .presentation-name {\n  text-shadow: 0 calc(var(--bookmark-shadow-distance) * 0.0025em) calc(var(--bookmark-shadow-blur) * 0.01em) rgba(var(--theme-accent), calc(var(--theme-bookmark-shadow-opacity) / 100));\n}\n\n.is-presentation-mode.is-theme-bookmark-shadow-color-type-custom .presentation-name {\n  text-shadow: 0 calc(var(--bookmark-shadow-distance) * 0.0025em) calc(var(--bookmark-shadow-blur) * 0.01em) rgba(var(--theme-bookmark-shadow-color), calc(var(--theme-bookmark-shadow-opacity) / 100));\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".logo {\n  transform: scale(1) rotate(0deg);\n  transition: transform var(--layout-transition-extra-fast);\n}\n\n.logo:hover {\n  transform: scale(1.2) rotate(180deg);\n}\n\n.logo:active {\n  transform: scale(1.4) rotate(180deg);\n}\n\n.logo,\n.logo-hexagon,\n.logo-cross {\n  transform-origin: center;\n}\n\n.logo {\n  animation-name: spin-down;\n  animation-duration: 0.4s;\n  animation-timing-function: var(--layout-timing-bounce);\n  animation-iteration-count: 1;\n  animation-delay: 1.2s;\n  animation-fill-mode: backwards;\n}\n\n.logo-hexagon {\n  animation-name: grow;\n  animation-duration: 0.4s;\n  animation-timing-function: var(--layout-timing-ease);\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.logo-cross {\n  animation-name: grow, spin;\n  animation-duration: 0.4s, 0.6s;\n  animation-timing-function: var(--layout-timing-bounce), var(--layout-timing-ease);\n  animation-iteration-count: 1, 1;\n  animation-delay: 0.4s, 0.8s;\n  animation-fill-mode: backwards, forwards;\n}\n\n.logo-hexagon,\n.logo-cross {\n  fill: hsl(var(--theme-primary-900));\n}\n\n@keyframes grow {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes spin-down {\n  0% {\n    transform: scale(1.2) rotate(-90deg);\n  }\n\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(-360deg);\n  }\n\n  100% {\n    transform: rotate(0);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --menu-background: var(--theme-primary-100);\n  --menu-text: var(--theme-primary-text-100);\n  --menu-space: 0.75em;\n  --menu-content-multiplier: 4;\n  --menu-content-gap: calc(var(--menu-space) * var(--menu-content-multiplier));\n}\n\n.menu {\n  padding: 1em;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100vw;\n  height: 90vh;\n  opacity: 0;\n  z-index: var(--z-index-menu);\n  pointer-events: none;\n  transition: opacity var(--layout-transition-extra-fast);\n}\n\n.menu:focus {\n  outline: none;\n}\n\n.menu-area {\n  background-color: hsl(var(--menu-background));\n  border-radius: var(--theme-radius-base);\n  width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr auto;\n  justify-items: stretch;\n  align-items: stretch;\n  overflow-y: auto;\n  pointer-events: all;\n  box-shadow: var(--theme-shadow-bottom-large);\n  transition: background-color var(--layout-transition-extra-fast), box-shadow var(--layout-transition-extra-fast);\n}\n\n.menu-nav {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.menu-nav-item {\n  flex-grow: 1;\n  flex-basis: 33.33333333%;\n}\n\n.menu-nav-tab {\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  height: calc(var(--menu-space) * 5);\n  width: 100%;\n  line-height: 1;\n}\n\n.menu-nav-tab:focus,\n.menu-nav-tab:hover {\n  background-color: hsl(var(--theme-primary-200));\n}\n\n.menu-nav-tab:active {\n  background-color: hsl(var(--theme-primary-300));\n}\n\n.menu-nav-tab.active {\n  background-color: hsl(var(--menu-background));\n  color: hsl(var(--menu-text));\n}\n\n.menu-nav-tab.active:hover {\n  background-color: hsl(var(--theme-primary-200));\n}\n\n.menu-nav-tab.active:active {\n  background-color: hsl(var(--theme-primary-300));\n}\n\n.menu-nav-tab:after {\n  border-radius: 0;\n}\n\n.menu-close-button {\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  border-radius: 0;\n  height: calc(var(--menu-space) * 5);\n  width: calc(var(--menu-space) * 5);\n  line-height: 1;\n}\n\n.menu-subnav {\n  display: none;\n}\n\n.menu-nav-area-tab {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  flex-grow: 1;\n}\n\n.menu-list {\n  display: none;\n}\n\n.menu-content {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.menu-content-item {\n  padding-top: var(--menu-content-gap);\n  padding-right: var(--menu-content-gap);\n  padding-left: var(--menu-content-gap);\n  position: relative;\n  z-index: 1;\n}\n\n.menu-content-item:last-child {\n  padding-bottom: var(--menu-content-gap);\n}\n\n.menu-content-overscroll .menu-content-item:last-child {\n  padding-bottom: calc(var(--menu-content-gap) * 10);\n}\n\n.menu-item-header {\n  margin-bottom: var(--menu-space);\n}\n\n.menu-item-header-text {\n  margin-bottom: 0;\n}\n\n.menu-item-form {\n  padding-left: calc(var(--menu-space) * 3);\n  z-index: 1;\n}\n\n@media (min-width: 550px) {\n  .menu {\n    width: 90vw;\n  }\n}\n\n@media (min-width: 700px) {\n  :root {\n    --menu-content-multiplier: 5;\n  }\n\n  .menu {\n    width: 100%;\n    height: 100%;\n    max-height: initial;\n  }\n\n  .menu-area {\n    max-height: 100%;\n    grid-template-rows: 1fr;\n    grid-template-columns: 4fr 10fr auto;\n    overflow: hidden;\n    position: relative;\n  }\n\n  .menu-nav {\n    background-color: hsla(var(--theme-primary-200), 0.75);\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: nowrap;\n    overflow-y: auto;\n    z-index: 1;\n    transition: background-color var(--layout-transition-extra-fast);\n  }\n\n  .menu-content {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    scroll-behavior: smooth;\n    overflow-y: auto;\n    z-index: 2;\n  }\n\n  .menu-close {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    align-self: start;\n    z-index: 3;\n  }\n\n  .menu-item-header {\n    margin-bottom: calc(var(--menu-space) * 2);\n  }\n\n  .menu-nav-item {\n    flex-grow: 0;\n    flex-basis: auto;\n    position: relative;\n  }\n\n  .menu-nav-item:before {\n    content: \"\";\n    position: absolute;\n    background-color: transparent;\n    top: 0;\n    left: 0;\n    width: var(--layout-line-width);\n    height: 100%;\n    z-index: 1;\n    transition: background-color var(--layout-transition-extra-fast);\n  }\n\n  .menu-nav-item.active:before {\n    background-color: rgb(var(--theme-accent));\n  }\n\n  .menu-nav-tab {\n    padding-left: calc(calc(var(--menu-space) * 2) + calc(var(--theme-radius-base) / 3));\n    padding-right: calc(var(--menu-space) * 2);\n    height: calc(var(--menu-space) * 4);\n    justify-content: flex-start;\n  }\n\n  .menu-nav-tab:after {}\n\n  .menu-subnav {\n    background-color: hsl(var(--theme-primary-100));\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    overflow: hidden;\n    height: 0;\n    transition: background-color var(--layout-transition-extra-fast), height var(--layout-transition-extra-fast);\n  }\n\n  .menu-subnav.active {\n    height: var(--menu-subnav-height);\n  }\n\n  .menu-nav-sub {\n    background-color: transparent;\n    margin: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: calc(calc(var(--menu-space) * 4) + calc(var(--theme-radius-base) / 3));\n    border-radius: 0;\n    height: 3em;\n    min-height: 3em;\n    width: 100%;\n    line-height: 1;\n    justify-content: flex-start;\n  }\n\n  .menu-nav-sub:focus,\n  .menu-nav-sub:hover {\n    background-color: hsl(var(--theme-primary-200));\n  }\n\n  .menu-nav-sub:active {\n    background-color: hsl(var(--theme-primary-300));\n  }\n\n  .menu-nav-sub:after,\n  .menu-nav-sub:after {\n    border-radius: 0;\n  }\n\n  .menu-close-button {\n    border-radius: var(--theme-radius-base);\n    height: calc(var(--menu-space) * 4);\n    width: calc(var(--menu-space) * 4);\n    position: relative;\n    top: calc(var(--theme-radius-base) / 6);\n    right: calc(var(--theme-radius-base) / 6);\n  }\n\n  .menu-item-form {\n    padding-left: calc(var(--menu-space) * 4);\n  }\n}\n\n@media (min-width: 900px) {\n  :root {\n    --menu-content-multiplier: 6;\n  }\n\n  .menu {\n    width: 90vw;\n  }\n\n  .menu-close-button {\n    height: calc(var(--menu-space) * 5);\n    width: calc(var(--menu-space) * 5);\n  }\n\n  .menu-item-form {\n    padding-left: calc(var(--menu-space) * 5);\n  }\n}\n\n@media (min-width: 1100px) {\n  .menu {\n    width: 80vw;\n    max-width: 60em;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --modal-small: 30em;\n  --modal-medium: 50em;\n  --modal-large: 70em;\n  --modal-size: var(--modal-medium);\n  --modal-space: 2em;\n}\n\n.modal {\n  background-color: hsl(var(--theme-primary-100));\n  border-radius: var(--theme-radius-base);\n  box-shadow: var(--theme-shadow-bottom-large);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  font-size: 1em;\n  max-height: calc(100vh - 2em);\n  width: var(--modal-size);\n  max-width: calc(100% - 2em);\n  min-width: 10em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: background-color var(--layout-transition-extra-fast), opacity var(--layout-transition-extra-fast);\n  z-index: var(--z-index-modal);\n}\n\n.modal.modal-max-height {\n  min-height: calc(100vh - 2em);\n}\n\n.modal-content-wrapper {\n  padding: calc(var(--modal-space) * 1.75);\n  position: relative;\n  overflow-y: auto;\n}\n\n.modal-overscroll .modal-content-wrapper {\n  padding-bottom: calc(var(--form-space) * 14);\n}\n\n.modal-content {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n  justify-items: stretch;\n  align-items: stretch;\n  gap: var(--modal-space);\n}\n\n.modal-body {\n  border-radius: var(--theme-radius-base) var(--theme-radius-base) 0 0;\n  position: relative;\n}\n\n.modal-body-spacer {\n  margin: var(--modal-space);\n}\n\n.modal-heading-text {\n  margin-bottom: 0;\n}\n\n.modal-heading-text:focus {\n  outline: none;\n}\n\n.modal-container {\n  max-width: 100%;\n}\n\n.modal-container:focus {\n  outline: none;\n}\n\n.modal-controls {\n  background-color: hsl(var(--theme-primary-100));\n  border-radius: 0 0 var(--theme-radius-base) var(--theme-radius-base);\n  position: relative;\n  z-index: 2;\n  display: flex;\n  transition: background-color var(--layout-transition-extra-fast);\n}\n\n.modal-button {\n  background-color: transparent;\n  margin: 0;\n  border-radius: 0;\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  flex-basis: 50%;\n}\n\n.modal-controls .modal-button:first-child {\n  border-radius: 0 0 0 var(--theme-radius-base);\n}\n\n.modal-controls .modal-button:last-child {\n  border-radius: 0 0 var(--theme-radius-base) 0\n}\n\n.modal-shade {\n  background-color: rgba(var(--theme-accent), 0.5);\n  position: fixed;\n  top: -1em;\n  left: -1em;\n  width: calc(100vw + 2em);\n  height: calc(100vh + 2em);\n  opacity: 0;\n  z-index: var(--z-index-shade);\n  transition: background-color var(--layout-transition-extra-fast), opacity var(--layout-transition-extra-fast);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --tab-space: 2em;\n}\n\n.tab {\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-areas:\n    \"nav\"\n    \"content\";\n  gap: var(--tab-space);\n  width: 100%;\n}\n\n.tab-nav {\n  grid-area: nav;\n  display: flex;\n}\n\n.tab-nav>* {\n  flex: 1 1 50%;\n}\n\n.tab-content {\n  grid-area: content;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* calculates perceived lightness using the sRGB Luma method */\n  --theme-t: 0.55;\n  --theme-t-r: 0.2721;\n  --theme-t-g: 0.7152;\n  --theme-t-b: 0.1255;\n}\n\n:root {\n  --theme-accent-r: 25;\n  --theme-accent-g: 25;\n  --theme-accent-b: 25;\n  --theme-accent: var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b);\n  --theme-accent-text: 0, 0%, calc(((((var(--theme-accent-r) * var(--theme-t-r)) + (var(--theme-accent-g) * var(--theme-t-g)) + (var(--theme-accent-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n}\n\n:root {\n  --theme-background-accent: var(--theme-accent);\n}\n\n:root {\n  --theme-font-display-name: \"Fjalla One\", sans-serif;\n  --theme-font-display-weight: 400;\n  --theme-font-display-style: \"normal\";\n  --theme-font-ui-name: \"Open Sans\", sans-serif;\n  --theme-font-ui-weight: 400;\n  --theme-font-ui-style: \"normal\";\n}\n\n:root {\n  --theme-black: 0, 0, 0;\n  --theme-white: 255, 255, 255;\n}\n\n:root {\n  --theme-radius-base: calc(calc(var(--theme-radius) / 100) * 1em);\n}\n\n:root {\n  --theme-background-theme: var(--theme-primary-100);\n}\n\n:root {\n  --theme-primary-1: var(--theme-primary-1-h), calc(var(--theme-primary-1-s) * 1%), calc(var(--theme-primary-1-l) * 1%);\n  --theme-primary-2: var(--theme-primary-2-h), calc(var(--theme-primary-2-s) * 1%), calc(var(--theme-primary-2-l) * 1%);\n  --theme-primary-3: var(--theme-primary-3-h), calc(var(--theme-primary-3-s) * 1%), calc(var(--theme-primary-3-l) * 1%);\n  --theme-primary-4: var(--theme-primary-4-h), calc(var(--theme-primary-4-s) * 1%), calc(var(--theme-primary-4-l) * 1%);\n  --theme-primary-5: var(--theme-primary-5-h), calc(var(--theme-primary-5-s) * 1%), calc(var(--theme-primary-5-l) * 1%);\n  --theme-primary-6: var(--theme-primary-6-h), calc(var(--theme-primary-6-s) * 1%), calc(var(--theme-primary-6-l) * 1%);\n  --theme-primary-7: var(--theme-primary-7-h), calc(var(--theme-primary-7-s) * 1%), calc(var(--theme-primary-7-l) * 1%);\n  --theme-primary-8: var(--theme-primary-8-h), calc(var(--theme-primary-8-s) * 1%), calc(var(--theme-primary-8-l) * 1%);\n  --theme-primary-9: var(--theme-primary-9-h), calc(var(--theme-primary-9-s) * 1%), calc(var(--theme-primary-9-l) * 1%);\n}\n\n.is-theme-style-light {\n  --theme-primary-100: var(--theme-primary-9);\n  --theme-primary-200: var(--theme-primary-8);\n  --theme-primary-300: var(--theme-primary-7);\n  --theme-primary-400: var(--theme-primary-6);\n  --theme-primary-500: var(--theme-primary-5);\n  --theme-primary-600: var(--theme-primary-4);\n  --theme-primary-700: var(--theme-primary-3);\n  --theme-primary-800: var(--theme-primary-2);\n  --theme-primary-900: var(--theme-primary-1);\n}\n\n.is-theme-style-dark {\n  --theme-primary-100: var(--theme-primary-1);\n  --theme-primary-200: var(--theme-primary-2);\n  --theme-primary-300: var(--theme-primary-3);\n  --theme-primary-400: var(--theme-primary-4);\n  --theme-primary-500: var(--theme-primary-5);\n  --theme-primary-600: var(--theme-primary-6);\n  --theme-primary-700: var(--theme-primary-7);\n  --theme-primary-800: var(--theme-primary-8);\n  --theme-primary-900: var(--theme-primary-9);\n}\n\n@media (prefers-color-scheme: light) {\n  .is-theme-style-system {\n    --theme-primary-100: var(--theme-primary-9);\n    --theme-primary-200: var(--theme-primary-8);\n    --theme-primary-300: var(--theme-primary-7);\n    --theme-primary-400: var(--theme-primary-6);\n    --theme-primary-500: var(--theme-primary-5);\n    --theme-primary-600: var(--theme-primary-4);\n    --theme-primary-700: var(--theme-primary-3);\n    --theme-primary-800: var(--theme-primary-2);\n    --theme-primary-900: var(--theme-primary-1);\n  }\n\n  .is-theme-style-system {\n    --theme-primary-text-100: 0, 0%, calc(((((var(--theme-primary-9-r) * var(--theme-t-r)) + (var(--theme-primary-9-g) * var(--theme-t-g)) + (var(--theme-primary-9-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-200: 0, 0%, calc(((((var(--theme-primary-8-r) * var(--theme-t-r)) + (var(--theme-primary-8-g) * var(--theme-t-g)) + (var(--theme-primary-8-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-300: 0, 0%, calc(((((var(--theme-primary-7-r) * var(--theme-t-r)) + (var(--theme-primary-7-g) * var(--theme-t-g)) + (var(--theme-primary-7-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-400: 0, 0%, calc(((((var(--theme-primary-6-r) * var(--theme-t-r)) + (var(--theme-primary-6-g) * var(--theme-t-g)) + (var(--theme-primary-6-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-500: 0, 0%, calc(((((var(--theme-primary-5-r) * var(--theme-t-r)) + (var(--theme-primary-5-g) * var(--theme-t-g)) + (var(--theme-primary-5-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-600: 0, 0%, calc(((((var(--theme-primary-4-r) * var(--theme-t-r)) + (var(--theme-primary-4-g) * var(--theme-t-g)) + (var(--theme-primary-4-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-700: 0, 0%, calc(((((var(--theme-primary-3-r) * var(--theme-t-r)) + (var(--theme-primary-3-g) * var(--theme-t-g)) + (var(--theme-primary-3-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-800: 0, 0%, calc(((((var(--theme-primary-2-r) * var(--theme-t-r)) + (var(--theme-primary-2-g) * var(--theme-t-g)) + (var(--theme-primary-2-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-900: 0, 0%, calc(((((var(--theme-primary-1-r) * var(--theme-t-r)) + (var(--theme-primary-1-g) * var(--theme-t-g)) + (var(--theme-primary-1-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .is-theme-style-system {\n    --theme-primary-100: var(--theme-primary-1);\n    --theme-primary-200: var(--theme-primary-2);\n    --theme-primary-300: var(--theme-primary-3);\n    --theme-primary-400: var(--theme-primary-4);\n    --theme-primary-500: var(--theme-primary-5);\n    --theme-primary-600: var(--theme-primary-6);\n    --theme-primary-700: var(--theme-primary-7);\n    --theme-primary-800: var(--theme-primary-8);\n    --theme-primary-900: var(--theme-primary-9);\n  }\n\n  .is-theme-style-system {\n    --theme-primary-text-100: 0, 0%, calc(((((var(--theme-primary-1-r) * var(--theme-t-r)) + (var(--theme-primary-1-g) * var(--theme-t-g)) + (var(--theme-primary-1-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-200: 0, 0%, calc(((((var(--theme-primary-2-r) * var(--theme-t-r)) + (var(--theme-primary-2-g) * var(--theme-t-g)) + (var(--theme-primary-2-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-300: 0, 0%, calc(((((var(--theme-primary-3-r) * var(--theme-t-r)) + (var(--theme-primary-3-g) * var(--theme-t-g)) + (var(--theme-primary-3-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-400: 0, 0%, calc(((((var(--theme-primary-4-r) * var(--theme-t-r)) + (var(--theme-primary-4-g) * var(--theme-t-g)) + (var(--theme-primary-4-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-500: 0, 0%, calc(((((var(--theme-primary-5-r) * var(--theme-t-r)) + (var(--theme-primary-5-g) * var(--theme-t-g)) + (var(--theme-primary-5-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-600: 0, 0%, calc(((((var(--theme-primary-6-r) * var(--theme-t-r)) + (var(--theme-primary-6-g) * var(--theme-t-g)) + (var(--theme-primary-6-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-700: 0, 0%, calc(((((var(--theme-primary-7-r) * var(--theme-t-r)) + (var(--theme-primary-7-g) * var(--theme-t-g)) + (var(--theme-primary-7-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-800: 0, 0%, calc(((((var(--theme-primary-8-r) * var(--theme-t-r)) + (var(--theme-primary-8-g) * var(--theme-t-g)) + (var(--theme-primary-8-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n    --theme-primary-text-900: 0, 0%, calc(((((var(--theme-primary-9-r) * var(--theme-t-r)) + (var(--theme-primary-9-g) * var(--theme-t-g)) + (var(--theme-primary-9-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  }\n}\n\n.is-theme-style-light {\n  --theme-primary-text-100: 0, 0%, calc(((((var(--theme-primary-9-r) * var(--theme-t-r)) + (var(--theme-primary-9-g) * var(--theme-t-g)) + (var(--theme-primary-9-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-200: 0, 0%, calc(((((var(--theme-primary-8-r) * var(--theme-t-r)) + (var(--theme-primary-8-g) * var(--theme-t-g)) + (var(--theme-primary-8-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-300: 0, 0%, calc(((((var(--theme-primary-7-r) * var(--theme-t-r)) + (var(--theme-primary-7-g) * var(--theme-t-g)) + (var(--theme-primary-7-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-400: 0, 0%, calc(((((var(--theme-primary-6-r) * var(--theme-t-r)) + (var(--theme-primary-6-g) * var(--theme-t-g)) + (var(--theme-primary-6-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-500: 0, 0%, calc(((((var(--theme-primary-5-r) * var(--theme-t-r)) + (var(--theme-primary-5-g) * var(--theme-t-g)) + (var(--theme-primary-5-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-600: 0, 0%, calc(((((var(--theme-primary-4-r) * var(--theme-t-r)) + (var(--theme-primary-4-g) * var(--theme-t-g)) + (var(--theme-primary-4-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-700: 0, 0%, calc(((((var(--theme-primary-3-r) * var(--theme-t-r)) + (var(--theme-primary-3-g) * var(--theme-t-g)) + (var(--theme-primary-3-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-800: 0, 0%, calc(((((var(--theme-primary-2-r) * var(--theme-t-r)) + (var(--theme-primary-2-g) * var(--theme-t-g)) + (var(--theme-primary-2-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-900: 0, 0%, calc(((((var(--theme-primary-1-r) * var(--theme-t-r)) + (var(--theme-primary-1-g) * var(--theme-t-g)) + (var(--theme-primary-1-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n}\n\n.is-theme-style-dark {\n  --theme-primary-text-100: 0, 0%, calc(((((var(--theme-primary-1-r) * var(--theme-t-r)) + (var(--theme-primary-1-g) * var(--theme-t-g)) + (var(--theme-primary-1-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-200: 0, 0%, calc(((((var(--theme-primary-2-r) * var(--theme-t-r)) + (var(--theme-primary-2-g) * var(--theme-t-g)) + (var(--theme-primary-2-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-300: 0, 0%, calc(((((var(--theme-primary-3-r) * var(--theme-t-r)) + (var(--theme-primary-3-g) * var(--theme-t-g)) + (var(--theme-primary-3-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-400: 0, 0%, calc(((((var(--theme-primary-4-r) * var(--theme-t-r)) + (var(--theme-primary-4-g) * var(--theme-t-g)) + (var(--theme-primary-4-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-500: 0, 0%, calc(((((var(--theme-primary-5-r) * var(--theme-t-r)) + (var(--theme-primary-5-g) * var(--theme-t-g)) + (var(--theme-primary-5-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-600: 0, 0%, calc(((((var(--theme-primary-6-r) * var(--theme-t-r)) + (var(--theme-primary-6-g) * var(--theme-t-g)) + (var(--theme-primary-6-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-700: 0, 0%, calc(((((var(--theme-primary-7-r) * var(--theme-t-r)) + (var(--theme-primary-7-g) * var(--theme-t-g)) + (var(--theme-primary-7-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-800: 0, 0%, calc(((((var(--theme-primary-8-r) * var(--theme-t-r)) + (var(--theme-primary-8-g) * var(--theme-t-g)) + (var(--theme-primary-8-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n  --theme-primary-text-900: 0, 0%, calc(((((var(--theme-primary-9-r) * var(--theme-t-r)) + (var(--theme-primary-9-g) * var(--theme-t-g)) + (var(--theme-primary-9-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%);\n}\n\n:root {\n  --theme-shadow: 1;\n  --theme-shadow-size-small: calc(calc(var(--theme-shadow) / 100) * 1);\n  --theme-shadow-size-medium: calc(calc(var(--theme-shadow) / 100) * 2);\n  --theme-shadow-size-large: calc(calc(var(--theme-shadow) / 100) * 3);\n  --theme-shadow-offset-base: 20;\n  --theme-shadow-offset-y: calc(calc(var(--theme-shadow-offset-base) / 1000) * 1em);\n  --theme-shadow-blur-base: 30;\n  --theme-shadow-blur: calc(calc(var(--theme-shadow-blur-base) / 1000) * 1em);\n  --theme-shadow-opacity-base: 20;\n  --theme-shadow-opacity: calc(var(--theme-shadow-opacity-base) / 1000);\n  --theme-shadow-bottom-small:\n    0 calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-offset-y) * 2)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-offset-y) * 4)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-offset-y) * 8)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-offset-y) * 16)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 4)));\n  --theme-shadow-bottom-medium:\n    0 calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-offset-y) * 2)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-offset-y) * 4)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-offset-y) * 8)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-offset-y) * 16)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 4)));\n  --theme-shadow-bottom-large:\n    0 calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-offset-y) * 2)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-offset-y) * 4)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-offset-y) * 8)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-offset-y) * 16)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 4)));\n  --theme-shadow-top-small:\n    0 calc(var(--theme-shadow-size-small) * calc(calc(var(--theme-shadow-offset-y) * -1) * 2)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-small) * calc(calc(var(--theme-shadow-offset-y) * -1) * 4)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-small) * calc(calc(var(--theme-shadow-offset-y) * -1) * 8)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-small) * calc(calc(var(--theme-shadow-offset-y) * -1) * 16)) calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-small) * calc(var(--theme-shadow-opacity) * 4)));\n  --theme-shadow-top-medium:\n    0 calc(var(--theme-shadow-size-medium) * calc(calc(var(--theme-shadow-offset-y) * -1) * 2)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-medium) * calc(calc(var(--theme-shadow-offset-y) * -1) * 4)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-medium) * calc(calc(var(--theme-shadow-offset-y) * -1) * 8)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-medium) * calc(calc(var(--theme-shadow-offset-y) * -1) * 16)) calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-medium) * calc(var(--theme-shadow-opacity) * 4)));\n  --theme-shadow-top-large:\n    0 calc(var(--theme-shadow-size-large) * calc(calc(var(--theme-shadow-offset-y) * -1) * 2)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 4)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 1))),\n    0 calc(var(--theme-shadow-size-large) * calc(calc(var(--theme-shadow-offset-y) * -1) * 4)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 8)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 2))),\n    0 calc(var(--theme-shadow-size-large) * calc(calc(var(--theme-shadow-offset-y) * -1) * 8)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 16)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 3))),\n    0 calc(var(--theme-shadow-size-large) * calc(calc(var(--theme-shadow-offset-y) * -1) * 16)) calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-blur) * 32)) rgba(0, 0, 0, calc(var(--theme-shadow-size-large) * calc(var(--theme-shadow-opacity) * 4)));\n}\n\n.theme-color-box {\n  width: 100%;\n  height: 100%;\n}\n\n.theme-color-shade-01 {\n  background-color: hsl(var(--theme-primary-100));\n}\n\n.theme-color-shade-02 {\n  background-color: hsl(var(--theme-primary-200));\n}\n\n.theme-color-shade-03 {\n  background-color: hsl(var(--theme-primary-300));\n}\n\n.theme-color-shade-04 {\n  background-color: hsl(var(--theme-primary-400));\n}\n\n.theme-color-shade-05 {\n  background-color: hsl(var(--theme-primary-500));\n}\n\n.theme-color-shade-06 {\n  background-color: hsl(var(--theme-primary-600));\n}\n\n.theme-color-shade-07 {\n  background-color: hsl(var(--theme-primary-700));\n}\n\n.theme-color-shade-08 {\n  background-color: hsl(var(--theme-primary-800));\n}\n\n.theme-color-shade-09 {\n  background-color: hsl(var(--theme-primary-900));\n}\n\n.theme-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: var(--z-index-background);\n}\n\n.theme-background-type {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  display: block;\n  opacity: 0;\n  transition: background-color var(--layout-transition-extra-fast), opacity var(--layout-transition-medium);\n}\n\n.theme-background-type-theme {\n  background-color: rgb(var(--theme-background-theme));\n}\n\n.theme-background-type-accent {\n  background-color: rgb(var(--theme-background-accent));\n}\n\n.theme-background-type-color {\n  background-color: rgb(var(--theme-background-color));\n}\n\n.theme-background-type-gradient {\n  background-image: linear-gradient(calc(var(--theme-background-gradient-angle) * 1deg), rgb(var(--theme-background-gradient-start)), rgb(var(--theme-background-gradient-end)));\n}\n\n.theme-background-type-image {\n  background-image: var(--theme-background-image);\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  transform: scale(calc(calc(var(--theme-background-image-scale) / 100) + calc(var(--theme-background-image-blur) / 400)));\n  filter: blur(calc(var(--theme-background-image-blur) * 1px));\n}\n\n.theme-background-type-video {\n  transform: scale(calc(var(--theme-background-video-scale) / 100));\n  filter: blur(calc(var(--theme-background-video-blur) * 1px));\n}\n\n.theme-background-type-video video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  pointer-events: none;\n}\n\n.is-theme-background-type-theme .theme-background-type-theme {\n  opacity: 1;\n}\n\n.is-theme-background-type-accent .theme-background-type-accent {\n  opacity: 1;\n}\n\n.is-theme-background-type-color .theme-background-type-color {\n  opacity: 1;\n}\n\n.is-theme-background-type-gradient .theme-background-type-gradient {\n  opacity: 1;\n}\n\n.is-theme-background-type-image .theme-background-type-image {\n  opacity: calc(var(--theme-background-image-opacity) / 100);\n}\n\n.is-theme-background-type-video .theme-background-type-video {\n  opacity: calc(var(--theme-background-video-opacity) / 100);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --toolbar-position-offset: 1.25em;\n}\n\n.toolbar {\n  display: flex;\n  position: fixed;\n  z-index: var(--z-index-toolbar);\n}\n\n.is-toolbar-position-top-left .toolbar {\n  top: var(--toolbar-position-offset);\n  left: var(--toolbar-position-offset);\n}\n\n.is-toolbar-position-top-right .toolbar {\n  top: var(--toolbar-position-offset);\n  right: var(--toolbar-position-offset);\n}\n\n.is-toolbar-position-bottom-left .toolbar {\n  bottom: var(--toolbar-position-offset);\n  left: var(--toolbar-position-offset);\n}\n\n.is-toolbar-position-bottom-right .toolbar {\n  bottom: var(--toolbar-position-offset);\n  right: var(--toolbar-position-offset);\n}\n\n.toolbar-control {\n  display: flex;\n  transition: opacity var(--layout-transition-extra-fast);\n}\n\n.toolbar-item {\n  padding: 0;\n  width: 3.5em;\n  min-width: initial;\n}\n\n.is-presentation-mode .toolbar {\n  opacity: 0;\n}\n\n.is-presentation-mode .toolbar:hover {\n  opacity: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 1667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 1178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-brands-400.ttf");

/***/ }),

/***/ 7460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-brands-400.woff");

/***/ }),

/***/ 6096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-brands-400.woff2");

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-regular-400.ttf");

/***/ }),

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-regular-400.woff");

/***/ }),

/***/ 6360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-regular-400.woff2");

/***/ }),

/***/ 7959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-solid-900.ttf");

/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-solid-900.woff");

/***/ }),

/***/ 1759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fa-solid-900.woff2");

/***/ }),

/***/ 8282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fjalla-one-400.ttf");

/***/ }),

/***/ 2901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fjalla-one-400.woff");

/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/fjalla-one-400.woff2");

/***/ }),

/***/ 7462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-300.ttf");

/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-300.woff");

/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-300.woff2");

/***/ }),

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-400.ttf");

/***/ }),

/***/ 5557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-400.woff");

/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-400.woff2");

/***/ }),

/***/ 4221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-600.ttf");

/***/ }),

/***/ 2223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-600.woff");

/***/ }),

/***/ 5578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-600.woff2");

/***/ }),

/***/ 2292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-700.ttf");

/***/ }),

/***/ 1807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-700.woff");

/***/ }),

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-700.woff2");

/***/ }),

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-800.ttf");

/***/ }),

/***/ 5358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-800.woff");

/***/ }),

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-800.woff2");

/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-300.ttf");

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-300.woff");

/***/ }),

/***/ 1743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-300.woff2");

/***/ }),

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-400.ttf");

/***/ }),

/***/ 3835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-400.woff");

/***/ }),

/***/ 9938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-400.woff2");

/***/ }),

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-600.ttf");

/***/ }),

/***/ 5944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-600.woff");

/***/ }),

/***/ 4628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-600.woff2");

/***/ }),

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-700.ttf");

/***/ }),

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-700.woff");

/***/ }),

/***/ 9567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-700.woff2");

/***/ }),

/***/ 6146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-800.ttf");

/***/ }),

/***/ 3447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-800.woff");

/***/ }),

/***/ 5308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "font/open-sans-italic-800.woff2");

/***/ }),

/***/ 3379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// NAMESPACE OBJECT: ./src/component/form/input/index.js
var form_input_namespaceObject = {};
__webpack_require__.r(form_input_namespaceObject);
__webpack_require__.d(form_input_namespaceObject, {
  "checkbox": () => (checkbox_checkbox),
  "color": () => (color_color),
  "file": () => (file_file),
  "inputButton": () => (inputButton_inputButton),
  "number": () => (number_number),
  "radio": () => (radio_radio),
  "range": () => (range_range),
  "text": () => (text_text),
  "textarea": () => (textarea_textarea)
});

// NAMESPACE OBJECT: ./src/component/form/index.js
var component_form_namespaceObject = {};
__webpack_require__.r(component_form_namespaceObject);
__webpack_require__.d(component_form_namespaceObject, {
  "feedback": () => (feedback_feedback),
  "fieldset": () => (fieldset_fieldset),
  "grid": () => (form_grid_grid),
  "group": () => (group_group),
  "groupText": () => (groupText_groupText),
  "helper": () => (helper_helper),
  "indent": () => (indent_indent),
  "inline": () => (inline_inline),
  "input": () => (form_input_namespaceObject),
  "label": () => (label_label),
  "sticky": () => (sticky_sticky),
  "wrap": () => (wrap_wrap)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/reset/index.css
var base_reset = __webpack_require__(2034);
;// CONCATENATED MODULE: ./src/component/base/reset/index.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(base_reset/* default */.Z, options);



/* harmony default export */ const component_base_reset = (base_reset/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/base/index.css
var base = __webpack_require__(8179);
;// CONCATENATED MODULE: ./src/component/base/base/index.css

            

var base_options = {};

base_options.insert = "head";
base_options.singleton = false;

var base_update = injectStylesIntoStyleTag_default()(base/* default */.Z, base_options);



/* harmony default export */ const base_base = (base/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/font/index.css
var font = __webpack_require__(4548);
;// CONCATENATED MODULE: ./src/component/base/font/index.css

            

var font_options = {};

font_options.insert = "head";
font_options.singleton = false;

var font_update = injectStylesIntoStyleTag_default()(font/* default */.Z, font_options);



/* harmony default export */ const base_font = (font/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/animation/index.css
var animation = __webpack_require__(7208);
;// CONCATENATED MODULE: ./src/component/base/animation/index.css

            

var animation_options = {};

animation_options.insert = "head";
animation_options.singleton = false;

var animation_update = injectStylesIntoStyleTag_default()(animation/* default */.Z, animation_options);



/* harmony default export */ const base_animation = (animation/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/spacing/index.css
var spacing = __webpack_require__(4325);
;// CONCATENATED MODULE: ./src/component/base/spacing/index.css

            

var spacing_options = {};

spacing_options.insert = "head";
spacing_options.singleton = false;

var spacing_update = injectStylesIntoStyleTag_default()(spacing/* default */.Z, spacing_options);



/* harmony default export */ const base_spacing = (spacing/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/state/index.css
var state = __webpack_require__(5000);
;// CONCATENATED MODULE: ./src/component/base/state/index.css

            

var state_options = {};

state_options.insert = "head";
state_options.singleton = false;

var state_update = injectStylesIntoStyleTag_default()(state/* default */.Z, state_options);



/* harmony default export */ const base_state = (state/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/typography/index.css
var typography = __webpack_require__(5327);
;// CONCATENATED MODULE: ./src/component/base/typography/index.css

            

var typography_options = {};

typography_options.insert = "head";
typography_options.singleton = false;

var typography_update = injectStylesIntoStyleTag_default()(typography/* default */.Z, typography_options);



/* harmony default export */ const base_typography = (typography/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/version/index.css
var version = __webpack_require__(4975);
;// CONCATENATED MODULE: ./src/component/base/version/index.css

            

var version_options = {};

version_options.insert = "head";
version_options.singleton = false;

var version_update = injectStylesIntoStyleTag_default()(version/* default */.Z, version_options);



/* harmony default export */ const base_version = (version/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/zindex/index.css
var zindex = __webpack_require__(710);
;// CONCATENATED MODULE: ./src/component/base/zindex/index.css

            

var zindex_options = {};

zindex_options.insert = "head";
zindex_options.singleton = false;

var zindex_update = injectStylesIntoStyleTag_default()(zindex/* default */.Z, zindex_options);



/* harmony default export */ const base_zindex = (zindex/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/base/utility/index.css
var utility = __webpack_require__(6368);
;// CONCATENATED MODULE: ./src/component/base/utility/index.css

            

var utility_options = {};

utility_options.insert = "head";
utility_options.singleton = false;

var utility_update = injectStylesIntoStyleTag_default()(utility/* default */.Z, utility_options);



/* harmony default export */ const base_utility = (utility/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/base/index.js











const component_base_base = {};

;// CONCATENATED MODULE: ./src/component/state/index.js
const state_state = {};

let presentationMode = false;

state_state.current = {};

state_state.default = {
  grid: {
    size: 100,
    column: 4,
    gap: 100,
    perspective: 90,
    transform: {
      focus: 15,
      refresh: 10,
      rotate: { x: 15, y: 15, z: 0 }
    }
  },
  bookmark: {
    size: 70,
    hover: { size: 0, distance: 15 },
    shadow: { blur: 15, distance: 30 },
    edit: false,
    add: false
  },
  theme: {
    color: {
      range: { primary: { h: 210, s: 10 } },
      lightness: { contrast: 32, offset: null, start: null, end: null },
      shades: 9
    },
    accent: { hsl: { h: 15, s: 90, l: 50 }, rgb: { r: 242, g: 70, b: 13 } },
    font: {
      display: { name: '', weight: 400, style: 'normal' },
      ui: { name: '', weight: 400, style: 'normal' }
    },
    style: 'light',
    bookmark: {
      shadow: { opacity: 25, color: { type: 'custom', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } }
    },
    background: {
      type: 'gradient',
      color: { hsl: { h: 213, s: 40, l: 65 }, rgb: { r: 130, g: 162, b: 201 } },
      gradient: {
        angle: 160,
        start: { hsl: { h: 191, s: 66, l: 62 }, rgb: { r: 94, g: 199, b: 222 } },
        end: { hsl: { h: 243, s: 59, l: 22 }, rgb: { r: 26, g: 23, b: 89 } }
      },
      image: { url: '', blur: 0, scale: 100, opacity: 100 },
      video: { url: '', blur: 0, scale: 100, opacity: 100 }
    },
    radius: 25,
    shadow: 75
  },
  toolbar: { style: 'transparent', position: 'bottom-right' },
  edit: false,
  modal: false,
  menu: false,
  autoSuggest: false
};

state_state.minMax = {
  grid: {
    size: { min: 10, max: 200 },
    column: { min: 1, max: 20 },
    gap: { min: 0, max: 300 },
    perspective: { min: 30, max: 400 },
    transform: {
      focus: { min: 0, max: 200 },
      rotate: {
        x: { min: -80, max: 80 },
        y: { min: -80, max: 80 },
        z: { min: -80, max: 80 }
      }
    }
  },
  bookmark: {
    hover: {
      size: { min: 0, max: 100 },
      distance: { min: 0, max: 300 }
    },
    shadow: {
      blur: { min: 0, max: 200 },
      distance: { min: 0, max: 300 }
    }
  },
  theme: {
    color: {
      range: { primary: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 } } },
      lightness: { contrast: { min: 5, max: 45 } }
    },
    accent: {
      hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
      rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    },
    bookmark: {
      shadow: {
        opacity: { min: 0, max: 100 },
        color: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        }
      }
    },
    background: {
      color: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
      },
      gradient: {
        angle: { min: 0, max: 360 },
        start: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
        end: {
          hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
          rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
        },
      },
      image: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } },
      video: { blur: { min: 0, max: 200 }, scale: { min: 100, max: 400 }, opacity: { min: 0, max: 100 } }
    }
  }
};

state_state.default.theme.color.lightness.offset = state_state.minMax.theme.color.lightness.contrast.max - state_state.default.theme.color.lightness.contrast;

state_state.default.theme.color.lightness.start = state_state.default.theme.color.lightness.offset;

state_state.default.theme.color.lightness.end = 100 - state_state.default.theme.color.lightness.offset;

state_state.get = {
  current: () => { return state_state.current },
  default: () => { return JSON.parse(JSON.stringify(state_state.default)) },
  minMax: () => { return JSON.parse(JSON.stringify(state_state.minMax)) }
};

state_state.set = {
  restore: (dataToRestore) => {
    state_state.current = dataToRestore.state;
    console.log('state restored');
  },
  default: () => {
    state_state.current = state_state.get.default();
    console.log('state set to default');
  }
};



;// CONCATENATED MODULE: ./src/utility/node.js
const node = function(string, node) {
  // set element
  let tag;
  if (string.indexOf('|') > 0) {
    tag = string.slice(0, string.indexOf('|'));
  } else {
    tag = string;
  };
  var text = false;
  if (tag.indexOf(':') > 0) {
    // regex
    // find all : and split
    // ignore all \:
    var pair = tag.split(/:(?!.*:\\)/);
    tag = pair[0];
    // replace \: with :
    text = pair[1].replace('\\', ':');
  };
  var element = document.createElement(tag);
  if (text && text != '') {
    element.innerHTML = text;
  };
  var attributes = string.slice(string.indexOf('|') + 1, string.length).split(',');
  // set attributes
  if (string.indexOf('|') > 0 && string.indexOf('|') < string.length - 1) {

    attributes.forEach((item, i) => {
      if (item.indexOf(':') > 0) {
        // if key and value
        var pair = item.substring(0, item.indexOf(':')) + ',' + item.substring(item.indexOf(':') + 1, item.length);
        pair = pair.split(',');
        attributes[i] = {
          key: pair[0],
          value: pair[1]
        };
      } else {
        // if key only
        attributes[i] = {
          key: item,
          value: undefined
        };
      }
    });

    attributes.forEach((item, i) => {
      if ('key' in item && item.key != undefined && 'value' in item && item.value != undefined) {
        element.setAttribute(item.key, item.value);
      } else if ('key' in item && item.key != undefined) {
        element.setAttribute(item.key, '');
      }
    });

  };

  if (node) {
    if (typeof node != 'string') {
      if (node.length > 0) {

        node.forEach((item, i) => {
          if (item instanceof HTMLElement) {
            element.appendChild(item);
          } else {
            let div = document.createElement('div');
            div.innerHTML = item;
            element.appendChild(div.firstChild);
          };
        });

      } else {

        if (node instanceof HTMLElement) {
          element.appendChild(node);
        } else {
          let div = document.createElement('div');
          div.innerHTML = node;
          element.appendChild(div.firstChild);
        };

      };
    };
  };

  return element;
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/layout/index.css
var layout = __webpack_require__(9209);
;// CONCATENATED MODULE: ./src/component/layout/index.css

            

var layout_options = {};

layout_options.insert = "head";
layout_options.singleton = false;

var layout_update = injectStylesIntoStyleTag_default()(layout/* default */.Z, layout_options);



/* harmony default export */ const component_layout = (layout/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/layout/index.js






const layoutWrap = node('div|class:layout-wrap');

const layoutArea = node('div|class:layout-area');

const layout_layout = {}

layout_layout.render = function() {
  layoutWrap.appendChild(layoutArea);

  if (presentationMode) {
    layoutArea.appendChild(node('div|class:presentation-name-wrap', node('h1:' + data.saveName + '|class:presentation-name')));
  };

  document.querySelector('body').appendChild(layoutWrap);
};

layout_layout.class = function() {
  const html = document.querySelector('html');

  if (presentationMode) {
    html.classList.add('is-presentation-mode');
  } else {
    html.classList.remove('is-presentation-mode');
  };
};

layout_layout.init = function() {
  layout_layout.render();
  layout_layout.class();
};


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/grid/index.css
var grid = __webpack_require__(3742);
;// CONCATENATED MODULE: ./src/component/grid/index.css

            

var grid_options = {};

grid_options.insert = "head";
grid_options.singleton = false;

var grid_update = injectStylesIntoStyleTag_default()(grid/* default */.Z, grid_options);



/* harmony default export */ const component_grid = (grid/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/grid/index.js







const grid_grid = {};

const gridArea = node('div|class:grid-area');

const gridList = node('div|class:grid-list');

grid_grid.mod = {};

grid_grid.render = {};

grid_grid.render.area = function() {
  gridArea.appendChild(gridList);
  layoutArea.appendChild(gridArea);
};

grid_grid.render.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--grid-size', state_state.get.current().grid.size);
  html.style.setProperty('--grid-column', state_state.get.current().grid.column);
  html.style.setProperty('--grid-perspective', state_state.get.current().grid.perspective);
  html.style.setProperty('--grid-gap', state_state.get.current().grid.gap);
};

grid_grid.render.rotate = {
  bind: function() {
    gridArea.addEventListener('mouseenter', function(event) {
      grid_grid.render.rotate.position.origin.set();
      grid_grid.render.rotate.update(event);
    });
    gridArea.addEventListener('mouseleave', function(event) {
      grid_grid.render.rotate.position.origin.set();
      grid_grid.render.rotate.style(state_state.get.current().grid.transform.rotate.x, state_state.get.current().grid.transform.rotate.y, state_state.get.current().grid.transform.rotate.z);
    });
    gridArea.addEventListener('mousemove', function(event) {
      if (grid_grid.render.rotate.delay.check()) {
        grid_grid.render.rotate.position.origin.set();
        grid_grid.render.rotate.update(event);
      }
    });
  },
  position: {
    origin: {
      set: function() {
        // set center point of grid area from top left of viewport
        grid_grid.render.rotate.position.origin.get.x = gridArea.offsetLeft + Math.floor(gridArea.offsetWidth / 2);
        grid_grid.render.rotate.position.origin.get.y = gridArea.offsetTop + Math.floor(gridArea.offsetHeight / 2);
      },
      get: { x: 0, y: 0 }
    },
    current: {
      set: function() {
        // set mouse position from center of grid area
        grid_grid.render.rotate.position.current.get.x = (event.clientX - grid_grid.render.rotate.position.origin.get.x) * -1;
        grid_grid.render.rotate.position.current.get.y = (event.clientY - grid_grid.render.rotate.position.origin.get.y);
      },
      get: { x: 0, y: 0 }
    }
  },
  delay: {
    counter: 0,
    check: function() {
      let refreshRate = state_state.get.current().grid.transform.refresh;
      grid_grid.render.rotate.delay.counter++
      if (grid_grid.render.rotate.delay.counter % refreshRate === 0) {
        grid_grid.render.rotate.delay.counter = 0;
        return true;
      } else {
        return false;
      };
    }
  },
  update: function() {
    grid_grid.render.rotate.position.current.set(event);
    grid_grid.render.rotate.style(
      state_state.get.current().grid.transform.rotate.x + ((grid_grid.render.rotate.position.current.get.y / gridList.offsetHeight / 2).toFixed(4) * state_state.get.current().grid.transform.focus),
      state_state.get.current().grid.transform.rotate.y + ((grid_grid.render.rotate.position.current.get.x / gridList.offsetWidth / 2).toFixed(4) * state_state.get.current().grid.transform.focus),
      state_state.get.current().grid.transform.rotate.z
    );
  },
  style: function(x, y, z) {
    const html = document.querySelector('html');
    html.style.setProperty('--grid-transform-rotate-x', x);
    html.style.setProperty('--grid-transform-rotate-y', y);
    html.style.setProperty('--grid-transform-rotate-z', z);
  }
};

grid_grid.init = function() {
  grid_grid.render.style();
  grid_grid.render.area();
  grid_grid.render.rotate.style(state_state.get.current().grid.transform.rotate.x, state_state.get.current().grid.transform.rotate.y, state_state.get.current().grid.transform.rotate.z);
  grid_grid.render.rotate.position.origin.set();
  grid_grid.render.rotate.bind();
};


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/fontawesome/index.css
var fontawesome = __webpack_require__(3831);
;// CONCATENATED MODULE: ./src/component/fontawesome/index.css

            

var fontawesome_options = {};

fontawesome_options.insert = "head";
fontawesome_options.singleton = false;

var fontawesome_update = injectStylesIntoStyleTag_default()(fontawesome/* default */.Z, fontawesome_options);



/* harmony default export */ const component_fontawesome = (fontawesome/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/fontawesome/index.js


const fontawesome_fontawesome = [{
  name: "500px",
  search: [],
  styles: ["brands"],
  label: "500px"
}, {
  name: "accessible-icon",
  search: ["accessibility", "handicap", "person", "wheelchair", "wheelchair-alt"],
  styles: ["brands"],
  label: "Accessible Icon"
}, {
  name: "accusoft",
  search: [],
  styles: ["brands"],
  label: "Accusoft"
}, {
  name: "acquisitions-incorporated",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
  styles: ["brands"],
  label: "Acquisitions Incorporated"
}, {
  name: "ad",
  search: ["advertisement", "media", "newspaper", "promotion", "publicity"],
  styles: ["solid"],
  label: "Ad"
}, {
  name: "address-book",
  search: ["contact", "directory", "index", "little black book", "rolodex"],
  styles: ["solid", "regular"],
  label: "Address Book"
}, {
  name: "address-card",
  search: ["about", "contact", "id", "identification", "postcard", "profile"],
  styles: ["solid", "regular"],
  label: "Address Card"
}, {
  name: "adjust",
  search: ["contrast", "dark", "light", "saturation"],
  styles: ["solid"],
  label: "adjust"
}, {
  name: "adn",
  search: [],
  styles: ["brands"],
  label: "App.net"
}, {
  name: "adobe",
  search: ["acrobat", "app", "design", "illustrator", "indesign", "photoshop"],
  styles: ["brands"],
  label: "Adobe"
}, {
  name: "adversal",
  search: [],
  styles: ["brands"],
  label: "Adversal"
}, {
  name: "affiliatetheme",
  search: [],
  styles: ["brands"],
  label: "affiliatetheme"
}, {
  name: "air-freshener",
  search: ["car", "deodorize", "fresh", "pine", "scent"],
  styles: ["solid"],
  label: "Air Freshener"
}, {
  name: "airbnb",
  search: [],
  styles: ["brands"],
  label: "Airbnb"
}, {
  name: "algolia",
  search: [],
  styles: ["brands"],
  label: "Algolia"
}, {
  name: "align-center",
  search: ["format", "middle", "paragraph", "text"],
  styles: ["solid"],
  label: "align-center"
}, {
  name: "align-justify",
  search: ["format", "paragraph", "text"],
  styles: ["solid"],
  label: "align-justify"
}, {
  name: "align-left",
  search: ["format", "paragraph", "text"],
  styles: ["solid"],
  label: "align-left"
}, {
  name: "align-right",
  search: ["format", "paragraph", "text"],
  styles: ["solid"],
  label: "align-right"
}, {
  name: "alipay",
  search: [],
  styles: ["brands"],
  label: "Alipay"
}, {
  name: "allergies",
  search: ["allergy", "freckles", "hand", "hives", "pox", "skin", "spots"],
  styles: ["solid"],
  label: "Allergies"
}, {
  name: "amazon",
  search: [],
  styles: ["brands"],
  label: "Amazon"
}, {
  name: "amazon-pay",
  search: [],
  styles: ["brands"],
  label: "Amazon Pay"
}, {
  name: "ambulance",
  search: ["covid-19", "emergency", "emt", "er", "help", "hospital", "support", "vehicle"],
  styles: ["solid"],
  label: "ambulance"
}, {
  name: "american-sign-language-interpreting",
  search: ["asl", "deaf", "finger", "hand", "interpret", "speak"],
  styles: ["solid"],
  label: "American Sign Language Interpreting"
}, {
  name: "amilia",
  search: [],
  styles: ["brands"],
  label: "Amilia"
}, {
  name: "anchor",
  search: ["berth", "boat", "dock", "embed", "link", "maritime", "moor", "secure"],
  styles: ["solid"],
  label: "Anchor"
}, {
  name: "android",
  search: ["robot"],
  styles: ["brands"],
  label: "Android"
}, {
  name: "angellist",
  search: [],
  styles: ["brands"],
  label: "AngelList"
}, {
  name: "angle-double-down",
  search: ["arrows", "caret", "download", "expand"],
  styles: ["solid"],
  label: "Angle Double Down"
}, {
  name: "angle-double-left",
  search: ["arrows", "back", "caret", "laquo", "previous", "quote"],
  styles: ["solid"],
  label: "Angle Double Left"
}, {
  name: "angle-double-right",
  search: ["arrows", "caret", "forward", "more", "next", "quote", "raquo"],
  styles: ["solid"],
  label: "Angle Double Right"
}, {
  name: "angle-double-up",
  search: ["arrows", "caret", "collapse", "upload"],
  styles: ["solid"],
  label: "Angle Double Up"
}, {
  name: "angle-down",
  search: ["arrow", "caret", "download", "expand"],
  styles: ["solid"],
  label: "angle-down"
}, {
  name: "angle-left",
  search: ["arrow", "back", "caret", "less", "previous"],
  styles: ["solid"],
  label: "angle-left"
}, {
  name: "angle-right",
  search: ["arrow", "care", "forward", "more", "next"],
  styles: ["solid"],
  label: "angle-right"
}, {
  name: "angle-up",
  search: ["arrow", "caret", "collapse", "upload"],
  styles: ["solid"],
  label: "angle-up"
}, {
  name: "angry",
  search: ["disapprove", "emoticon", "face", "mad", "upset"],
  styles: ["solid", "regular"],
  label: "Angry Face"
}, {
  name: "angrycreative",
  search: [],
  styles: ["brands"],
  label: "Angry Creative"
}, {
  name: "angular",
  search: [],
  styles: ["brands"],
  label: "Angular"
}, {
  name: "ankh",
  search: ["amulet", "copper", "coptic christianity", "copts", "crux ansata", "egypt", "venus"],
  styles: ["solid"],
  label: "Ankh"
}, {
  name: "app-store",
  search: [],
  styles: ["brands"],
  label: "App Store"
}, {
  name: "app-store-ios",
  search: [],
  styles: ["brands"],
  label: "iOS App Store"
}, {
  name: "apper",
  search: [],
  styles: ["brands"],
  label: "Apper Systems AB"
}, {
  name: "apple",
  search: ["fruit", "ios", "mac", "operating system", "os", "osx"],
  styles: ["brands"],
  label: "Apple"
}, {
  name: "apple-alt",
  search: ["fall", "fruit", "fuji", "macintosh", "orchard", "seasonal", "vegan"],
  styles: ["solid"],
  label: "Fruit Apple"
}, {
  name: "apple-pay",
  search: [],
  styles: ["brands"],
  label: "Apple Pay"
}, {
  name: "archive",
  search: ["box", "package", "save", "storage"],
  styles: ["solid"],
  label: "Archive"
}, {
  name: "archway",
  search: ["arc", "monument", "road", "street", "tunnel"],
  styles: ["solid"],
  label: "Archway"
}, {
  name: "arrow-alt-circle-down",
  search: ["arrow-circle-o-down", "download"],
  styles: ["solid", "regular"],
  label: "Alternate Arrow Circle Down"
}, {
  name: "arrow-alt-circle-left",
  search: ["arrow-circle-o-left", "back", "previous"],
  styles: ["solid", "regular"],
  label: "Alternate Arrow Circle Left"
}, {
  name: "arrow-alt-circle-right",
  search: ["arrow-circle-o-right", "forward", "next"],
  styles: ["solid", "regular"],
  label: "Alternate Arrow Circle Right"
}, {
  name: "arrow-alt-circle-up",
  search: ["arrow-circle-o-up"],
  styles: ["solid", "regular"],
  label: "Alternate Arrow Circle Up"
}, {
  name: "arrow-circle-down",
  search: ["download"],
  styles: ["solid"],
  label: "Arrow Circle Down"
}, {
  name: "arrow-circle-left",
  search: ["back", "previous"],
  styles: ["solid"],
  label: "Arrow Circle Left"
}, {
  name: "arrow-circle-right",
  search: ["forward", "next"],
  styles: ["solid"],
  label: "Arrow Circle Right"
}, {
  name: "arrow-circle-up",
  search: ["upload"],
  styles: ["solid"],
  label: "Arrow Circle Up"
}, {
  name: "arrow-down",
  search: ["download"],
  styles: ["solid"],
  label: "arrow-down"
}, {
  name: "arrow-left",
  search: ["back", "previous"],
  styles: ["solid"],
  label: "arrow-left"
}, {
  name: "arrow-right",
  search: ["forward", "next"],
  styles: ["solid"],
  label: "arrow-right"
}, {
  name: "arrow-up",
  search: ["forward", "upload"],
  styles: ["solid"],
  label: "arrow-up"
}, {
  name: "arrows-alt",
  search: ["arrow", "arrows", "bigger", "enlarge", "expand", "fullscreen", "move", "position", "reorder", "resize"],
  styles: ["solid"],
  label: "Alternate Arrows"
}, {
  name: "arrows-alt-h",
  search: ["arrows-h", "expand", "horizontal", "landscape", "resize", "wide"],
  styles: ["solid"],
  label: "Alternate Arrows Horizontal"
}, {
  name: "arrows-alt-v",
  search: ["arrows-v", "expand", "portrait", "resize", "tall", "vertical"],
  styles: ["solid"],
  label: "Alternate Arrows Vertical"
}, {
  name: "artstation",
  search: [],
  styles: ["brands"],
  label: "Artstation"
}, {
  name: "assistive-listening-systems",
  search: ["amplify", "audio", "deaf", "ear", "headset", "hearing", "sound"],
  styles: ["solid"],
  label: "Assistive Listening Systems"
}, {
  name: "asterisk",
  search: ["annotation", "details", "reference", "star"],
  styles: ["solid"],
  label: "asterisk"
}, {
  name: "asymmetrik",
  search: [],
  styles: ["brands"],
  label: "Asymmetrik, Ltd."
}, {
  name: "at",
  search: ["address", "author", "e-mail", "email", "handle"],
  styles: ["solid"],
  label: "At"
}, {
  name: "atlas",
  search: ["book", "directions", "geography", "globe", "map", "travel", "wayfinding"],
  styles: ["solid"],
  label: "Atlas"
}, {
  name: "atlassian",
  search: [],
  styles: ["brands"],
  label: "Atlassian"
}, {
  name: "atom",
  search: ["atheism", "chemistry", "electron", "ion", "isotope", "neutron", "nuclear", "proton", "science"],
  styles: ["solid"],
  label: "Atom"
}, {
  name: "audible",
  search: [],
  styles: ["brands"],
  label: "Audible"
}, {
  name: "audio-description",
  search: ["blind", "narration", "video", "visual"],
  styles: ["solid"],
  label: "Audio Description"
}, {
  name: "autoprefixer",
  search: [],
  styles: ["brands"],
  label: "Autoprefixer"
}, {
  name: "avianex",
  search: [],
  styles: ["brands"],
  label: "avianex"
}, {
  name: "aviato",
  search: [],
  styles: ["brands"],
  label: "Aviato"
}, {
  name: "award",
  search: ["honor", "praise", "prize", "recognition", "ribbon", "trophy"],
  styles: ["solid"],
  label: "Award"
}, {
  name: "aws",
  search: [],
  styles: ["brands"],
  label: "Amazon Web Services (AWS)"
}, {
  name: "baby",
  search: ["child", "diaper", "doll", "human", "infant", "kid", "offspring", "person", "sprout"],
  styles: ["solid"],
  label: "Baby"
}, {
  name: "baby-carriage",
  search: ["buggy", "carrier", "infant", "push", "stroller", "transportation", "walk", "wheels"],
  styles: ["solid"],
  label: "Baby Carriage"
}, {
  name: "backspace",
  search: ["command", "delete", "erase", "keyboard", "undo"],
  styles: ["solid"],
  label: "Backspace"
}, {
  name: "backward",
  search: ["previous", "rewind"],
  styles: ["solid"],
  label: "backward"
}, {
  name: "bacon",
  search: ["blt", "breakfast", "ham", "lard", "meat", "pancetta", "pork", "rasher"],
  styles: ["solid"],
  label: "Bacon"
}, {
  name: "bahai",
  search: ["bahai", "bahá'í", "star"],
  styles: ["solid"],
  label: "Bahá'í"
}, {
  name: "balance-scale",
  search: ["balanced", "justice", "legal", "measure", "weight"],
  styles: ["solid"],
  label: "Balance Scale"
}, {
  name: "balance-scale-left",
  search: ["justice", "legal", "measure", "unbalanced", "weight"],
  styles: ["solid"],
  label: "Balance Scale (Left-Weighted)"
}, {
  name: "balance-scale-right",
  search: ["justice", "legal", "measure", "unbalanced", "weight"],
  styles: ["solid"],
  label: "Balance Scale (Right-Weighted)"
}, {
  name: "ban",
  search: ["abort", "ban", "block", "cancel", "delete", "hide", "prohibit", "remove", "stop", "trash"],
  styles: ["solid"],
  label: "ban"
}, {
  name: "band-aid",
  search: ["bandage", "boo boo", "first aid", "ouch"],
  styles: ["solid"],
  label: "Band-Aid"
}, {
  name: "bandcamp",
  search: [],
  styles: ["brands"],
  label: "Bandcamp"
}, {
  name: "barcode",
  search: ["info", "laser", "price", "scan", "upc"],
  styles: ["solid"],
  label: "barcode"
}, {
  name: "bars",
  search: ["checklist", "drag", "hamburger", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "todo", "ul"],
  styles: ["solid"],
  label: "Bars"
}, {
  name: "baseball-ball",
  search: ["foul", "hardball", "league", "leather", "mlb", "softball", "sport"],
  styles: ["solid"],
  label: "Baseball Ball"
}, {
  name: "basketball-ball",
  search: ["dribble", "dunk", "hoop", "nba"],
  styles: ["solid"],
  label: "Basketball Ball"
}, {
  name: "bath",
  search: ["clean", "shower", "tub", "wash"],
  styles: ["solid"],
  label: "Bath"
}, {
  name: "battery-empty",
  search: ["charge", "dead", "power", "status"],
  styles: ["solid"],
  label: "Battery Empty"
}, {
  name: "battery-full",
  search: ["charge", "power", "status"],
  styles: ["solid"],
  label: "Battery Full"
}, {
  name: "battery-half",
  search: ["charge", "power", "status"],
  styles: ["solid"],
  label: "Battery 1/2 Full"
}, {
  name: "battery-quarter",
  search: ["charge", "low", "power", "status"],
  styles: ["solid"],
  label: "Battery 1/4 Full"
}, {
  name: "battery-three-quarters",
  search: ["charge", "power", "status"],
  styles: ["solid"],
  label: "Battery 3/4 Full"
}, {
  name: "battle-net",
  search: [],
  styles: ["brands"],
  label: "Battle.net"
}, {
  name: "bed",
  search: ["lodging", "mattress", "rest", "sleep", "travel"],
  styles: ["solid"],
  label: "Bed"
}, {
  name: "beer",
  search: ["alcohol", "ale", "bar", "beverage", "brewery", "drink", "lager", "liquor", "mug", "stein"],
  styles: ["solid"],
  label: "beer"
}, {
  name: "behance",
  search: [],
  styles: ["brands"],
  label: "Behance"
}, {
  name: "behance-square",
  search: [],
  styles: ["brands"],
  label: "Behance Square"
}, {
  name: "bell",
  search: ["alarm", "alert", "chime", "notification", "reminder"],
  styles: ["solid", "regular"],
  label: "bell"
}, {
  name: "bell-slash",
  search: ["alert", "cancel", "disabled", "notification", "off", "reminder"],
  styles: ["solid", "regular"],
  label: "Bell Slash"
}, {
  name: "bezier-curve",
  search: ["curves", "illustrator", "lines", "path", "vector"],
  styles: ["solid"],
  label: "Bezier Curve"
}, {
  name: "bible",
  search: ["book", "catholicism", "christianity", "god", "holy"],
  styles: ["solid"],
  label: "Bible"
}, {
  name: "bicycle",
  search: ["bike", "gears", "pedal", "transportation", "vehicle"],
  styles: ["solid"],
  label: "Bicycle"
}, {
  name: "biking",
  search: ["bicycle", "bike", "cycle", "cycling", "ride", "wheel"],
  styles: ["solid"],
  label: "Biking"
}, {
  name: "bimobject",
  search: [],
  styles: ["brands"],
  label: "BIMobject"
}, {
  name: "binoculars",
  search: ["glasses", "magnify", "scenic", "spyglass", "view"],
  styles: ["solid"],
  label: "Binoculars"
}, {
  name: "biohazard",
  search: ["covid-19", "danger", "dangerous", "hazmat", "medical", "radioactive", "toxic", "waste", "zombie"],
  styles: ["solid"],
  label: "Biohazard"
}, {
  name: "birthday-cake",
  search: ["anniversary", "bakery", "candles", "celebration", "dessert", "frosting", "holiday", "party", "pastry"],
  styles: ["solid"],
  label: "Birthday Cake"
}, {
  name: "bitbucket",
  search: ["atlassian", "bitbucket-square", "git"],
  styles: ["brands"],
  label: "Bitbucket"
}, {
  name: "bitcoin",
  search: [],
  styles: ["brands"],
  label: "Bitcoin"
}, {
  name: "bity",
  search: [],
  styles: ["brands"],
  label: "Bity"
}, {
  name: "black-tie",
  search: [],
  styles: ["brands"],
  label: "Font Awesome Black Tie"
}, {
  name: "blackberry",
  search: [],
  styles: ["brands"],
  label: "BlackBerry"
}, {
  name: "blender",
  search: ["cocktail", "milkshake", "mixer", "puree", "smoothie"],
  styles: ["solid"],
  label: "Blender"
}, {
  name: "blender-phone",
  search: ["appliance", "cocktail", "communication", "fantasy", "milkshake", "mixer", "puree", "silly", "smoothie"],
  styles: ["solid"],
  label: "Blender Phone"
}, {
  name: "blind",
  search: ["cane", "disability", "person", "sight"],
  styles: ["solid"],
  label: "Blind"
}, {
  name: "blog",
  search: ["journal", "log", "online", "personal", "post", "web 2.0", "wordpress", "writing"],
  styles: ["solid"],
  label: "Blog"
}, {
  name: "blogger",
  search: [],
  styles: ["brands"],
  label: "Blogger"
}, {
  name: "blogger-b",
  search: [],
  styles: ["brands"],
  label: "Blogger B"
}, {
  name: "bluetooth",
  search: [],
  styles: ["brands"],
  label: "Bluetooth"
}, {
  name: "bluetooth-b",
  search: [],
  styles: ["brands"],
  label: "Bluetooth"
}, {
  name: "bold",
  search: ["emphasis", "format", "text"],
  styles: ["solid"],
  label: "bold"
}, {
  name: "bolt",
  search: ["electricity", "lightning", "weather", "zap"],
  styles: ["solid"],
  label: "Lightning Bolt"
}, {
  name: "bomb",
  search: ["error", "explode", "fuse", "grenade", "warning"],
  styles: ["solid"],
  label: "Bomb"
}, {
  name: "bone",
  search: ["calcium", "dog", "skeletal", "skeleton", "tibia"],
  styles: ["solid"],
  label: "Bone"
}, {
  name: "bong",
  search: ["aparatus", "cannabis", "marijuana", "pipe", "smoke", "smoking"],
  styles: ["solid"],
  label: "Bong"
}, {
  name: "book",
  search: ["diary", "documentation", "journal", "library", "read"],
  styles: ["solid"],
  label: "book"
}, {
  name: "book-dead",
  search: ["Dungeons & Dragons", "crossbones", "d&d", "dark arts", "death", "dnd", "documentation", "evil", "fantasy", "halloween", "holiday", "necronomicon", "read", "skull", "spell"],
  styles: ["solid"],
  label: "Book of the Dead"
}, {
  name: "book-medical",
  search: ["diary", "documentation", "health", "history", "journal", "library", "read", "record"],
  styles: ["solid"],
  label: "Medical Book"
}, {
  name: "book-open",
  search: ["flyer", "library", "notebook", "open book", "pamphlet", "reading"],
  styles: ["solid"],
  label: "Book Open"
}, {
  name: "book-reader",
  search: ["flyer", "library", "notebook", "open book", "pamphlet", "reading"],
  styles: ["solid"],
  label: "Book Reader"
}, {
  name: "bookmark",
  search: ["favorite", "marker", "read", "remember", "save"],
  styles: ["solid", "regular"],
  label: "bookmark"
}, {
  name: "bootstrap",
  search: [],
  styles: ["brands"],
  label: "Bootstrap"
}, {
  name: "border-all",
  search: ["cell", "grid", "outline", "stroke", "table"],
  styles: ["solid"],
  label: "Border All"
}, {
  name: "border-none",
  search: ["cell", "grid", "outline", "stroke", "table"],
  styles: ["solid"],
  label: "Border None"
}, {
  name: "border-style",
  search: [],
  styles: ["solid"],
  label: "Border Style"
}, {
  name: "bowling-ball",
  search: ["alley", "candlepin", "gutter", "lane", "strike", "tenpin"],
  styles: ["solid"],
  label: "Bowling Ball"
}, {
  name: "box",
  search: ["archive", "container", "package", "storage"],
  styles: ["solid"],
  label: "Box"
}, {
  name: "box-open",
  search: ["archive", "container", "package", "storage", "unpack"],
  styles: ["solid"],
  label: "Box Open"
}, {
  name: "box-tissue",
  search: ["cough", "covid-19", "kleenex", "mucus", "nose", "sneeze", "snot"],
  styles: ["solid"],
  label: "Tissue Box"
}, {
  name: "boxes",
  search: ["archives", "inventory", "storage", "warehouse"],
  styles: ["solid"],
  label: "Boxes"
}, {
  name: "braille",
  search: ["alphabet", "blind", "dots", "raised", "vision"],
  styles: ["solid"],
  label: "Braille"
}, {
  name: "brain",
  search: ["cerebellum", "gray matter", "intellect", "medulla oblongata", "mind", "noodle", "wit"],
  styles: ["solid"],
  label: "Brain"
}, {
  name: "bread-slice",
  search: ["bake", "bakery", "baking", "dough", "flour", "gluten", "grain", "sandwich", "sourdough", "toast", "wheat", "yeast"],
  styles: ["solid"],
  label: "Bread Slice"
}, {
  name: "briefcase",
  search: ["bag", "business", "luggage", "office", "work"],
  styles: ["solid"],
  label: "Briefcase"
}, {
  name: "briefcase-medical",
  search: ["doctor", "emt", "first aid", "health"],
  styles: ["solid"],
  label: "Medical Briefcase"
}, {
  name: "broadcast-tower",
  search: ["airwaves", "antenna", "radio", "reception", "waves"],
  styles: ["solid"],
  label: "Broadcast Tower"
}, {
  name: "broom",
  search: ["clean", "firebolt", "fly", "halloween", "nimbus 2000", "quidditch", "sweep", "witch"],
  styles: ["solid"],
  label: "Broom"
}, {
  name: "brush",
  search: ["art", "bristles", "color", "handle", "paint"],
  styles: ["solid"],
  label: "Brush"
}, {
  name: "btc",
  search: [],
  styles: ["brands"],
  label: "BTC"
}, {
  name: "buffer",
  search: [],
  styles: ["brands"],
  label: "Buffer"
}, {
  name: "bug",
  search: ["beetle", "error", "insect", "report"],
  styles: ["solid"],
  label: "Bug"
}, {
  name: "building",
  search: ["apartment", "business", "city", "company", "office", "work"],
  styles: ["solid", "regular"],
  label: "Building"
}, {
  name: "bullhorn",
  search: ["announcement", "broadcast", "louder", "megaphone", "share"],
  styles: ["solid"],
  label: "bullhorn"
}, {
  name: "bullseye",
  search: ["archery", "goal", "objective", "target"],
  styles: ["solid"],
  label: "Bullseye"
}, {
  name: "burn",
  search: ["caliente", "energy", "fire", "flame", "gas", "heat", "hot"],
  styles: ["solid"],
  label: "Burn"
}, {
  name: "buromobelexperte",
  search: [],
  styles: ["brands"],
  label: "Büromöbel-Experte GmbH & Co. KG."
}, {
  name: "bus",
  search: ["public transportation", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Bus"
}, {
  name: "bus-alt",
  search: ["mta", "public transportation", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Bus Alt"
}, {
  name: "business-time",
  search: ["alarm", "briefcase", "business socks", "clock", "flight of the conchords", "reminder", "wednesday"],
  styles: ["solid"],
  label: "Business Time"
}, {
  name: "buy-n-large",
  search: [],
  styles: ["brands"],
  label: "Buy n Large"
}, {
  name: "buysellads",
  search: [],
  styles: ["brands"],
  label: "BuySellAds"
}, {
  name: "calculator",
  search: ["abacus", "addition", "arithmetic", "counting", "math", "multiplication", "subtraction"],
  styles: ["solid"],
  label: "Calculator"
}, {
  name: "calendar",
  search: ["calendar-o", "date", "event", "schedule", "time", "when"],
  styles: ["solid", "regular"],
  label: "Calendar"
}, {
  name: "calendar-alt",
  search: ["calendar", "date", "event", "schedule", "time", "when"],
  styles: ["solid", "regular"],
  label: "Alternate Calendar"
}, {
  name: "calendar-check",
  search: ["accept", "agree", "appointment", "confirm", "correct", "date", "done", "event", "ok", "schedule", "select", "success", "tick", "time", "todo", "when"],
  styles: ["solid", "regular"],
  label: "Calendar Check"
}, {
  name: "calendar-day",
  search: ["date", "detail", "event", "focus", "schedule", "single day", "time", "today", "when"],
  styles: ["solid"],
  label: "Calendar with Day Focus"
}, {
  name: "calendar-minus",
  search: ["calendar", "date", "delete", "event", "negative", "remove", "schedule", "time", "when"],
  styles: ["solid", "regular"],
  label: "Calendar Minus"
}, {
  name: "calendar-plus",
  search: ["add", "calendar", "create", "date", "event", "new", "positive", "schedule", "time", "when"],
  styles: ["solid", "regular"],
  label: "Calendar Plus"
}, {
  name: "calendar-times",
  search: ["archive", "calendar", "date", "delete", "event", "remove", "schedule", "time", "when", "x"],
  styles: ["solid", "regular"],
  label: "Calendar Times"
}, {
  name: "calendar-week",
  search: ["date", "detail", "event", "focus", "schedule", "single week", "time", "today", "when"],
  styles: ["solid"],
  label: "Calendar with Week Focus"
}, {
  name: "camera",
  search: ["image", "lens", "photo", "picture", "record", "shutter", "video"],
  styles: ["solid"],
  label: "camera"
}, {
  name: "camera-retro",
  search: ["image", "lens", "photo", "picture", "record", "shutter", "video"],
  styles: ["solid"],
  label: "Retro Camera"
}, {
  name: "campground",
  search: ["camping", "fall", "outdoors", "teepee", "tent", "tipi"],
  styles: ["solid"],
  label: "Campground"
}, {
  name: "canadian-maple-leaf",
  search: ["canada", "flag", "flora", "nature", "plant"],
  styles: ["brands"],
  label: "Canadian Maple Leaf"
}, {
  name: "candy-cane",
  search: ["candy", "christmas", "holiday", "mint", "peppermint", "striped", "xmas"],
  styles: ["solid"],
  label: "Candy Cane"
}, {
  name: "cannabis",
  search: ["bud", "chronic", "drugs", "endica", "endo", "ganja", "marijuana", "mary jane", "pot", "reefer", "sativa", "spliff", "weed", "whacky-tabacky"],
  styles: ["solid"],
  label: "Cannabis"
}, {
  name: "capsules",
  search: ["drugs", "medicine", "pills", "prescription"],
  styles: ["solid"],
  label: "Capsules"
}, {
  name: "car",
  search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Car"
}, {
  name: "car-alt",
  search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Alternate Car"
}, {
  name: "car-battery",
  search: ["auto", "electric", "mechanic", "power"],
  styles: ["solid"],
  label: "Car Battery"
}, {
  name: "car-crash",
  search: ["accident", "auto", "automobile", "insurance", "sedan", "transportation", "vehicle", "wreck"],
  styles: ["solid"],
  label: "Car Crash"
}, {
  name: "car-side",
  search: ["auto", "automobile", "sedan", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Car Side"
}, {
  name: "caravan",
  search: ["camper", "motor home", "rv", "trailer", "travel"],
  styles: ["solid"],
  label: "Caravan"
}, {
  name: "caret-down",
  search: ["arrow", "dropdown", "expand", "menu", "more", "triangle"],
  styles: ["solid"],
  label: "Caret Down"
}, {
  name: "caret-left",
  search: ["arrow", "back", "previous", "triangle"],
  styles: ["solid"],
  label: "Caret Left"
}, {
  name: "caret-right",
  search: ["arrow", "forward", "next", "triangle"],
  styles: ["solid"],
  label: "Caret Right"
}, {
  name: "caret-square-down",
  search: ["arrow", "caret-square-o-down", "dropdown", "expand", "menu", "more", "triangle"],
  styles: ["solid", "regular"],
  label: "Caret Square Down"
}, {
  name: "caret-square-left",
  search: ["arrow", "back", "caret-square-o-left", "previous", "triangle"],
  styles: ["solid", "regular"],
  label: "Caret Square Left"
}, {
  name: "caret-square-right",
  search: ["arrow", "caret-square-o-right", "forward", "next", "triangle"],
  styles: ["solid", "regular"],
  label: "Caret Square Right"
}, {
  name: "caret-square-up",
  search: ["arrow", "caret-square-o-up", "collapse", "triangle", "upload"],
  styles: ["solid", "regular"],
  label: "Caret Square Up"
}, {
  name: "caret-up",
  search: ["arrow", "collapse", "triangle"],
  styles: ["solid"],
  label: "Caret Up"
}, {
  name: "carrot",
  search: ["bugs bunny", "orange", "vegan", "vegetable"],
  styles: ["solid"],
  label: "Carrot"
}, {
  name: "cart-arrow-down",
  search: ["download", "save", "shopping"],
  styles: ["solid"],
  label: "Shopping Cart Arrow Down"
}, {
  name: "cart-plus",
  search: ["add", "create", "new", "positive", "shopping"],
  styles: ["solid"],
  label: "Add to Shopping Cart"
}, {
  name: "cash-register",
  search: ["buy", "cha-ching", "change", "checkout", "commerce", "leaerboard", "machine", "pay", "payment", "purchase", "store"],
  styles: ["solid"],
  label: "Cash Register"
}, {
  name: "cat",
  search: ["feline", "halloween", "holiday", "kitten", "kitty", "meow", "pet"],
  styles: ["solid"],
  label: "Cat"
}, {
  name: "cc-amazon-pay",
  search: [],
  styles: ["brands"],
  label: "Amazon Pay Credit Card"
}, {
  name: "cc-amex",
  search: ["amex"],
  styles: ["brands"],
  label: "American Express Credit Card"
}, {
  name: "cc-apple-pay",
  search: [],
  styles: ["brands"],
  label: "Apple Pay Credit Card"
}, {
  name: "cc-diners-club",
  search: [],
  styles: ["brands"],
  label: "Diner's Club Credit Card"
}, {
  name: "cc-discover",
  search: [],
  styles: ["brands"],
  label: "Discover Credit Card"
}, {
  name: "cc-jcb",
  search: [],
  styles: ["brands"],
  label: "JCB Credit Card"
}, {
  name: "cc-mastercard",
  search: [],
  styles: ["brands"],
  label: "MasterCard Credit Card"
}, {
  name: "cc-paypal",
  search: [],
  styles: ["brands"],
  label: "Paypal Credit Card"
}, {
  name: "cc-stripe",
  search: [],
  styles: ["brands"],
  label: "Stripe Credit Card"
}, {
  name: "cc-visa",
  search: [],
  styles: ["brands"],
  label: "Visa Credit Card"
}, {
  name: "centercode",
  search: [],
  styles: ["brands"],
  label: "Centercode"
}, {
  name: "centos",
  search: ["linux", "operating system", "os"],
  styles: ["brands"],
  label: "Centos"
}, {
  name: "certificate",
  search: ["badge", "star", "verified"],
  styles: ["solid"],
  label: "certificate"
}, {
  name: "chair",
  search: ["furniture", "seat", "sit"],
  styles: ["solid"],
  label: "Chair"
}, {
  name: "chalkboard",
  search: ["blackboard", "learning", "school", "teaching", "whiteboard", "writing"],
  styles: ["solid"],
  label: "Chalkboard"
}, {
  name: "chalkboard-teacher",
  search: ["blackboard", "instructor", "learning", "professor", "school", "whiteboard", "writing"],
  styles: ["solid"],
  label: "Chalkboard Teacher"
}, {
  name: "charging-station",
  search: ["electric", "ev", "tesla", "vehicle"],
  styles: ["solid"],
  label: "Charging Station"
}, {
  name: "chart-area",
  search: ["analytics", "area", "chart", "graph"],
  styles: ["solid"],
  label: "Area Chart"
}, {
  name: "chart-bar",
  search: ["analytics", "bar", "chart", "graph"],
  styles: ["solid", "regular"],
  label: "Bar Chart"
}, {
  name: "chart-line",
  search: ["activity", "analytics", "chart", "dashboard", "gain", "graph", "increase", "line"],
  styles: ["solid"],
  label: "Line Chart"
}, {
  name: "chart-pie",
  search: ["analytics", "chart", "diagram", "graph", "pie"],
  styles: ["solid"],
  label: "Pie Chart"
}, {
  name: "check",
  search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "notice", "notification", "notify", "ok", "select", "success", "tick", "todo", "yes"],
  styles: ["solid"],
  label: "Check"
}, {
  name: "check-circle",
  search: ["accept", "agree", "confirm", "correct", "done", "ok", "select", "success", "tick", "todo", "yes"],
  styles: ["solid", "regular"],
  label: "Check Circle"
}, {
  name: "check-double",
  search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "notice", "notification", "notify", "ok", "select", "success", "tick", "todo"],
  styles: ["solid"],
  label: "Double Check"
}, {
  name: "check-square",
  search: ["accept", "agree", "checkmark", "confirm", "correct", "done", "ok", "select", "success", "tick", "todo", "yes"],
  styles: ["solid", "regular"],
  label: "Check Square"
}, {
  name: "cheese",
  search: ["cheddar", "curd", "gouda", "melt", "parmesan", "sandwich", "swiss", "wedge"],
  styles: ["solid"],
  label: "Cheese"
}, {
  name: "chess",
  search: ["board", "castle", "checkmate", "game", "king", "rook", "strategy", "tournament"],
  styles: ["solid"],
  label: "Chess"
}, {
  name: "chess-bishop",
  search: ["board", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess Bishop"
}, {
  name: "chess-board",
  search: ["board", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess Board"
}, {
  name: "chess-king",
  search: ["board", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess King"
}, {
  name: "chess-knight",
  search: ["board", "checkmate", "game", "horse", "strategy"],
  styles: ["solid"],
  label: "Chess Knight"
}, {
  name: "chess-pawn",
  search: ["board", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess Pawn"
}, {
  name: "chess-queen",
  search: ["board", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess Queen"
}, {
  name: "chess-rook",
  search: ["board", "castle", "checkmate", "game", "strategy"],
  styles: ["solid"],
  label: "Chess Rook"
}, {
  name: "chevron-circle-down",
  search: ["arrow", "download", "dropdown", "menu", "more"],
  styles: ["solid"],
  label: "Chevron Circle Down"
}, {
  name: "chevron-circle-left",
  search: ["arrow", "back", "previous"],
  styles: ["solid"],
  label: "Chevron Circle Left"
}, {
  name: "chevron-circle-right",
  search: ["arrow", "forward", "next"],
  styles: ["solid"],
  label: "Chevron Circle Right"
}, {
  name: "chevron-circle-up",
  search: ["arrow", "collapse", "upload"],
  styles: ["solid"],
  label: "Chevron Circle Up"
}, {
  name: "chevron-down",
  search: ["arrow", "download", "expand"],
  styles: ["solid"],
  label: "chevron-down"
}, {
  name: "chevron-left",
  search: ["arrow", "back", "bracket", "previous"],
  styles: ["solid"],
  label: "chevron-left"
}, {
  name: "chevron-right",
  search: ["arrow", "bracket", "forward", "next"],
  styles: ["solid"],
  label: "chevron-right"
}, {
  name: "chevron-up",
  search: ["arrow", "collapse", "upload"],
  styles: ["solid"],
  label: "chevron-up"
}, {
  name: "child",
  search: ["boy", "girl", "kid", "toddler", "young"],
  styles: ["solid"],
  label: "Child"
}, {
  name: "chrome",
  search: ["browser"],
  styles: ["brands"],
  label: "Chrome"
}, {
  name: "chromecast",
  search: [],
  styles: ["brands"],
  label: "Chromecast"
}, {
  name: "church",
  search: ["building", "cathedral", "chapel", "community", "religion"],
  styles: ["solid"],
  label: "Church"
}, {
  name: "circle",
  search: ["circle-thin", "diameter", "dot", "ellipse", "notification", "round"],
  styles: ["solid", "regular"],
  label: "Circle"
}, {
  name: "circle-notch",
  search: ["circle-o-notch", "diameter", "dot", "ellipse", "round", "spinner"],
  styles: ["solid"],
  label: "Circle Notched"
}, {
  name: "city",
  search: ["buildings", "busy", "skyscrapers", "urban", "windows"],
  styles: ["solid"],
  label: "City"
}, {
  name: "clinic-medical",
  search: ["covid-19", "doctor", "general practitioner", "hospital", "infirmary", "medicine", "office", "outpatient"],
  styles: ["solid"],
  label: "Medical Clinic"
}, {
  name: "clipboard",
  search: ["copy", "notes", "paste", "record"],
  styles: ["solid", "regular"],
  label: "Clipboard"
}, {
  name: "clipboard-check",
  search: ["accept", "agree", "confirm", "done", "ok", "select", "success", "tick", "todo", "yes"],
  styles: ["solid"],
  label: "Clipboard with Check"
}, {
  name: "clipboard-list",
  search: ["checklist", "completed", "done", "finished", "intinerary", "ol", "schedule", "tick", "todo", "ul"],
  styles: ["solid"],
  label: "Clipboard List"
}, {
  name: "clock",
  search: ["date", "late", "schedule", "time", "timer", "timestamp", "watch"],
  styles: ["solid", "regular"],
  label: "Clock"
}, {
  name: "clone",
  search: ["arrange", "copy", "duplicate", "paste"],
  styles: ["solid", "regular"],
  label: "Clone"
}, {
  name: "closed-captioning",
  search: ["cc", "deaf", "hearing", "subtitle", "subtitling", "text", "video"],
  styles: ["solid", "regular"],
  label: "Closed Captioning"
}, {
  name: "cloud",
  search: ["atmosphere", "fog", "overcast", "save", "upload", "weather"],
  styles: ["solid"],
  label: "Cloud"
}, {
  name: "cloud-download-alt",
  search: ["download", "export", "save"],
  styles: ["solid"],
  label: "Alternate Cloud Download"
}, {
  name: "cloud-meatball",
  search: ["FLDSMDFR", "food", "spaghetti", "storm"],
  styles: ["solid"],
  label: "Cloud with (a chance of) Meatball"
}, {
  name: "cloud-moon",
  search: ["crescent", "evening", "lunar", "night", "partly cloudy", "sky"],
  styles: ["solid"],
  label: "Cloud with Moon"
}, {
  name: "cloud-moon-rain",
  search: ["crescent", "evening", "lunar", "night", "partly cloudy", "precipitation", "rain", "sky", "storm"],
  styles: ["solid"],
  label: "Cloud with Moon and Rain"
}, {
  name: "cloud-rain",
  search: ["precipitation", "rain", "sky", "storm"],
  styles: ["solid"],
  label: "Cloud with Rain"
}, {
  name: "cloud-showers-heavy",
  search: ["precipitation", "rain", "sky", "storm"],
  styles: ["solid"],
  label: "Cloud with Heavy Showers"
}, {
  name: "cloud-sun",
  search: ["clear", "day", "daytime", "fall", "outdoors", "overcast", "partly cloudy"],
  styles: ["solid"],
  label: "Cloud with Sun"
}, {
  name: "cloud-sun-rain",
  search: ["day", "overcast", "precipitation", "storm", "summer", "sunshower"],
  styles: ["solid"],
  label: "Cloud with Sun and Rain"
}, {
  name: "cloud-upload-alt",
  search: ["cloud-upload", "import", "save", "upload"],
  styles: ["solid"],
  label: "Alternate Cloud Upload"
}, {
  name: "cloudscale",
  search: [],
  styles: ["brands"],
  label: "cloudscale.ch"
}, {
  name: "cloudsmith",
  search: [],
  styles: ["brands"],
  label: "Cloudsmith"
}, {
  name: "cloudversify",
  search: [],
  styles: ["brands"],
  label: "cloudversify"
}, {
  name: "cocktail",
  search: ["alcohol", "beverage", "drink", "gin", "glass", "margarita", "martini", "vodka"],
  styles: ["solid"],
  label: "Cocktail"
}, {
  name: "code",
  search: ["brackets", "code", "development", "html"],
  styles: ["solid"],
  label: "Code"
}, {
  name: "code-branch",
  search: ["branch", "code-fork", "fork", "git", "github", "rebase", "svn", "vcs", "version"],
  styles: ["solid"],
  label: "Code Branch"
}, {
  name: "codepen",
  search: [],
  styles: ["brands"],
  label: "Codepen"
}, {
  name: "codiepie",
  search: [],
  styles: ["brands"],
  label: "Codie Pie"
}, {
  name: "coffee",
  search: ["beverage", "breakfast", "cafe", "drink", "fall", "morning", "mug", "seasonal", "tea"],
  styles: ["solid"],
  label: "Coffee"
}, {
  name: "cog",
  search: ["gear", "mechanical", "settings", "sprocket", "wheel"],
  styles: ["solid"],
  label: "cog"
}, {
  name: "cogs",
  search: ["gears", "mechanical", "settings", "sprocket", "wheel"],
  styles: ["solid"],
  label: "cogs"
}, {
  name: "coins",
  search: ["currency", "dime", "financial", "gold", "money", "penny"],
  styles: ["solid"],
  label: "Coins"
}, {
  name: "columns",
  search: ["browser", "dashboard", "organize", "panes", "split"],
  styles: ["solid"],
  label: "Columns"
}, {
  name: "comment",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
  styles: ["solid", "regular"],
  label: "comment"
}, {
  name: "comment-alt",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
  styles: ["solid", "regular"],
  label: "Alternate Comment"
}, {
  name: "comment-dollar",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "money", "note", "notification", "pay", "sms", "speech", "spend", "texting", "transfer"],
  styles: ["solid"],
  label: "Comment Dollar"
}, {
  name: "comment-dots",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "more", "note", "notification", "reply", "sms", "speech", "texting"],
  styles: ["solid", "regular"],
  label: "Comment Dots"
}, {
  name: "comment-medical",
  search: ["advice", "bubble", "chat", "commenting", "conversation", "diagnose", "feedback", "message", "note", "notification", "prescription", "sms", "speech", "texting"],
  styles: ["solid"],
  label: "Alternate Medical Chat"
}, {
  name: "comment-slash",
  search: ["bubble", "cancel", "chat", "commenting", "conversation", "feedback", "message", "mute", "note", "notification", "quiet", "sms", "speech", "texting"],
  styles: ["solid"],
  label: "Comment Slash"
}, {
  name: "comments",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "note", "notification", "sms", "speech", "texting"],
  styles: ["solid", "regular"],
  label: "comments"
}, {
  name: "comments-dollar",
  search: ["bubble", "chat", "commenting", "conversation", "feedback", "message", "money", "note", "notification", "pay", "sms", "speech", "spend", "texting", "transfer"],
  styles: ["solid"],
  label: "Comments Dollar"
}, {
  name: "compact-disc",
  search: ["album", "bluray", "cd", "disc", "dvd", "media", "movie", "music", "record", "video", "vinyl"],
  styles: ["solid"],
  label: "Compact Disc"
}, {
  name: "compass",
  search: ["directions", "directory", "location", "menu", "navigation", "safari", "travel"],
  styles: ["solid", "regular"],
  label: "Compass"
}, {
  name: "compress",
  search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
  styles: ["solid"],
  label: "Compress"
}, {
  name: "compress-alt",
  search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
  styles: ["solid"],
  label: "Alternate Compress"
}, {
  name: "compress-arrows-alt",
  search: ["collapse", "fullscreen", "minimize", "move", "resize", "shrink", "smaller"],
  styles: ["solid"],
  label: "Alternate Compress Arrows"
}, {
  name: "concierge-bell",
  search: ["attention", "hotel", "receptionist", "service", "support"],
  styles: ["solid"],
  label: "Concierge Bell"
}, {
  name: "confluence",
  search: ["atlassian"],
  styles: ["brands"],
  label: "Confluence"
}, {
  name: "connectdevelop",
  search: [],
  styles: ["brands"],
  label: "Connect Develop"
}, {
  name: "contao",
  search: [],
  styles: ["brands"],
  label: "Contao"
}, {
  name: "cookie",
  search: ["baked good", "chips", "chocolate", "eat", "snack", "sweet", "treat"],
  styles: ["solid"],
  label: "Cookie"
}, {
  name: "cookie-bite",
  search: ["baked good", "bitten", "chips", "chocolate", "eat", "snack", "sweet", "treat"],
  styles: ["solid"],
  label: "Cookie Bite"
}, {
  name: "copy",
  search: ["clone", "duplicate", "file", "files-o", "paper", "paste"],
  styles: ["solid", "regular"],
  label: "Copy"
}, {
  name: "copyright",
  search: ["brand", "mark", "register", "trademark"],
  styles: ["solid", "regular"],
  label: "Copyright"
}, {
  name: "cotton-bureau",
  search: ["clothing", "t-shirts", "tshirts"],
  styles: ["brands"],
  label: "Cotton Bureau"
}, {
  name: "couch",
  search: ["chair", "cushion", "furniture", "relax", "sofa"],
  styles: ["solid"],
  label: "Couch"
}, {
  name: "cpanel",
  search: [],
  styles: ["brands"],
  label: "cPanel"
}, {
  name: "creative-commons",
  search: [],
  styles: ["brands"],
  label: "Creative Commons"
}, {
  name: "creative-commons-by",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Attribution"
}, {
  name: "creative-commons-nc",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Noncommercial"
}, {
  name: "creative-commons-nc-eu",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Noncommercial (Euro Sign)"
}, {
  name: "creative-commons-nc-jp",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Noncommercial (Yen Sign)"
}, {
  name: "creative-commons-nd",
  search: [],
  styles: ["brands"],
  label: "Creative Commons No Derivative Works"
}, {
  name: "creative-commons-pd",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Public Domain"
}, {
  name: "creative-commons-pd-alt",
  search: [],
  styles: ["brands"],
  label: "Alternate Creative Commons Public Domain"
}, {
  name: "creative-commons-remix",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Remix"
}, {
  name: "creative-commons-sa",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Share Alike"
}, {
  name: "creative-commons-sampling",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Sampling"
}, {
  name: "creative-commons-sampling-plus",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Sampling +"
}, {
  name: "creative-commons-share",
  search: [],
  styles: ["brands"],
  label: "Creative Commons Share"
}, {
  name: "creative-commons-zero",
  search: [],
  styles: ["brands"],
  label: "Creative Commons CC0"
}, {
  name: "credit-card",
  search: ["buy", "checkout", "credit-card-alt", "debit", "money", "payment", "purchase"],
  styles: ["solid", "regular"],
  label: "Credit Card"
}, {
  name: "critical-role",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
  styles: ["brands"],
  label: "Critical Role"
}, {
  name: "crop",
  search: ["design", "frame", "mask", "resize", "shrink"],
  styles: ["solid"],
  label: "crop"
}, {
  name: "crop-alt",
  search: ["design", "frame", "mask", "resize", "shrink"],
  styles: ["solid"],
  label: "Alternate Crop"
}, {
  name: "cross",
  search: ["catholicism", "christianity", "church", "jesus"],
  styles: ["solid"],
  label: "Cross"
}, {
  name: "crosshairs",
  search: ["aim", "bullseye", "gpd", "picker", "position"],
  styles: ["solid"],
  label: "Crosshairs"
}, {
  name: "crow",
  search: ["bird", "bullfrog", "fauna", "halloween", "holiday", "toad"],
  styles: ["solid"],
  label: "Crow"
}, {
  name: "crown",
  search: ["award", "favorite", "king", "queen", "royal", "tiara"],
  styles: ["solid"],
  label: "Crown"
}, {
  name: "crutch",
  search: ["cane", "injury", "mobility", "wheelchair"],
  styles: ["solid"],
  label: "Crutch"
}, {
  name: "css3",
  search: ["code"],
  styles: ["brands"],
  label: "CSS 3 Logo"
}, {
  name: "css3-alt",
  search: [],
  styles: ["brands"],
  label: "Alternate CSS3 Logo"
}, {
  name: "cube",
  search: ["3d", "block", "dice", "package", "square", "tesseract"],
  styles: ["solid"],
  label: "Cube"
}, {
  name: "cubes",
  search: ["3d", "block", "dice", "package", "pyramid", "square", "stack", "tesseract"],
  styles: ["solid"],
  label: "Cubes"
}, {
  name: "cut",
  search: ["clip", "scissors", "snip"],
  styles: ["solid"],
  label: "Cut"
}, {
  name: "cuttlefish",
  search: [],
  styles: ["brands"],
  label: "Cuttlefish"
}, {
  name: "d-and-d",
  search: [],
  styles: ["brands"],
  label: "Dungeons & Dragons"
}, {
  name: "d-and-d-beyond",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "gaming", "tabletop"],
  styles: ["brands"],
  label: "D&D Beyond"
}, {
  name: "dailymotion",
  search: [],
  styles: ["brands"],
  label: "dailymotion"
}, {
  name: "dashcube",
  search: [],
  styles: ["brands"],
  label: "DashCube"
}, {
  name: "database",
  search: ["computer", "development", "directory", "memory", "storage"],
  styles: ["solid"],
  label: "Database"
}, {
  name: "deaf",
  search: ["ear", "hearing", "sign language"],
  styles: ["solid"],
  label: "Deaf"
}, {
  name: "delicious",
  search: [],
  styles: ["brands"],
  label: "Delicious"
}, {
  name: "democrat",
  search: ["american", "democratic party", "donkey", "election", "left", "left-wing", "liberal", "politics", "usa"],
  styles: ["solid"],
  label: "Democrat"
}, {
  name: "deploydog",
  search: [],
  styles: ["brands"],
  label: "deploy.dog"
}, {
  name: "deskpro",
  search: [],
  styles: ["brands"],
  label: "Deskpro"
}, {
  name: "desktop",
  search: ["computer", "cpu", "demo", "desktop", "device", "imac", "machine", "monitor", "pc", "screen"],
  styles: ["solid"],
  label: "Desktop"
}, {
  name: "dev",
  search: [],
  styles: ["brands"],
  label: "DEV"
}, {
  name: "deviantart",
  search: [],
  styles: ["brands"],
  label: "deviantART"
}, {
  name: "dharmachakra",
  search: ["buddhism", "buddhist", "wheel of dharma"],
  styles: ["solid"],
  label: "Dharmachakra"
}, {
  name: "dhl",
  search: ["Dalsey", "Hillblom and Lynn", "german", "package", "shipping"],
  styles: ["brands"],
  label: "DHL"
}, {
  name: "diagnoses",
  search: ["analyze", "detect", "diagnosis", "examine", "medicine"],
  styles: ["solid"],
  label: "Diagnoses"
}, {
  name: "diaspora",
  search: [],
  styles: ["brands"],
  label: "Diaspora"
}, {
  name: "dice",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice"
}, {
  name: "dice-d20",
  search: ["Dungeons & Dragons", "chance", "d&d", "dnd", "fantasy", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice D20"
}, {
  name: "dice-d6",
  search: ["Dungeons & Dragons", "chance", "d&d", "dnd", "fantasy", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice D6"
}, {
  name: "dice-five",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice Five"
}, {
  name: "dice-four",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice Four"
}, {
  name: "dice-one",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice One"
}, {
  name: "dice-six",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice Six"
}, {
  name: "dice-three",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice Three"
}, {
  name: "dice-two",
  search: ["chance", "gambling", "game", "roll"],
  styles: ["solid"],
  label: "Dice Two"
}, {
  name: "digg",
  search: [],
  styles: ["brands"],
  label: "Digg Logo"
}, {
  name: "digital-ocean",
  search: [],
  styles: ["brands"],
  label: "Digital Ocean"
}, {
  name: "digital-tachograph",
  search: ["data", "distance", "speed", "tachometer"],
  styles: ["solid"],
  label: "Digital Tachograph"
}, {
  name: "directions",
  search: ["map", "navigation", "sign", "turn"],
  styles: ["solid"],
  label: "Directions"
}, {
  name: "discord",
  search: [],
  styles: ["brands"],
  label: "Discord"
}, {
  name: "discourse",
  search: [],
  styles: ["brands"],
  label: "Discourse"
}, {
  name: "disease",
  search: ["bacteria", "cancer", "covid-19", "illness", "infection", "sickness", "virus"],
  styles: ["solid"],
  label: "Disease"
}, {
  name: "divide",
  search: ["arithmetic", "calculus", "division", "math"],
  styles: ["solid"],
  label: "Divide"
}, {
  name: "dizzy",
  search: ["dazed", "dead", "disapprove", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Dizzy Face"
}, {
  name: "dna",
  search: ["double helix", "genetic", "helix", "molecule", "protein"],
  styles: ["solid"],
  label: "DNA"
}, {
  name: "dochub",
  search: [],
  styles: ["brands"],
  label: "DocHub"
}, {
  name: "docker",
  search: [],
  styles: ["brands"],
  label: "Docker"
}, {
  name: "dog",
  search: ["animal", "canine", "fauna", "mammal", "pet", "pooch", "puppy", "woof"],
  styles: ["solid"],
  label: "Dog"
}, {
  name: "dollar-sign",
  search: ["$", "cost", "dollar-sign", "money", "price", "usd"],
  styles: ["solid"],
  label: "Dollar Sign"
}, {
  name: "dolly",
  search: ["carry", "shipping", "transport"],
  styles: ["solid"],
  label: "Dolly"
}, {
  name: "dolly-flatbed",
  search: ["carry", "inventory", "shipping", "transport"],
  styles: ["solid"],
  label: "Dolly Flatbed"
}, {
  name: "donate",
  search: ["contribute", "generosity", "gift", "give"],
  styles: ["solid"],
  label: "Donate"
}, {
  name: "door-closed",
  search: ["enter", "exit", "locked"],
  styles: ["solid"],
  label: "Door Closed"
}, {
  name: "door-open",
  search: ["enter", "exit", "welcome"],
  styles: ["solid"],
  label: "Door Open"
}, {
  name: "dot-circle",
  search: ["bullseye", "notification", "target"],
  styles: ["solid", "regular"],
  label: "Dot Circle"
}, {
  name: "dove",
  search: ["bird", "fauna", "flying", "peace", "war"],
  styles: ["solid"],
  label: "Dove"
}, {
  name: "download",
  search: ["export", "hard drive", "save", "transfer"],
  styles: ["solid"],
  label: "Download"
}, {
  name: "draft2digital",
  search: [],
  styles: ["brands"],
  label: "Draft2digital"
}, {
  name: "drafting-compass",
  search: ["design", "map", "mechanical drawing", "plot", "plotting"],
  styles: ["solid"],
  label: "Drafting Compass"
}, {
  name: "dragon",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "fire", "lizard", "serpent"],
  styles: ["solid"],
  label: "Dragon"
}, {
  name: "draw-polygon",
  search: ["anchors", "lines", "object", "render", "shape"],
  styles: ["solid"],
  label: "Draw Polygon"
}, {
  name: "dribbble",
  search: [],
  styles: ["brands"],
  label: "Dribbble"
}, {
  name: "dribbble-square",
  search: [],
  styles: ["brands"],
  label: "Dribbble Square"
}, {
  name: "dropbox",
  search: [],
  styles: ["brands"],
  label: "Dropbox"
}, {
  name: "drum",
  search: ["instrument", "music", "percussion", "snare", "sound"],
  styles: ["solid"],
  label: "Drum"
}, {
  name: "drum-steelpan",
  search: ["calypso", "instrument", "music", "percussion", "reggae", "snare", "sound", "steel", "tropical"],
  styles: ["solid"],
  label: "Drum Steelpan"
}, {
  name: "drumstick-bite",
  search: ["bone", "chicken", "leg", "meat", "poultry", "turkey"],
  styles: ["solid"],
  label: "Drumstick with Bite Taken Out"
}, {
  name: "drupal",
  search: [],
  styles: ["brands"],
  label: "Drupal Logo"
}, {
  name: "dumbbell",
  search: ["exercise", "gym", "strength", "weight", "weight-lifting"],
  styles: ["solid"],
  label: "Dumbbell"
}, {
  name: "dumpster",
  search: ["alley", "bin", "commercial", "trash", "waste"],
  styles: ["solid"],
  label: "Dumpster"
}, {
  name: "dumpster-fire",
  search: ["alley", "bin", "commercial", "danger", "dangerous", "euphemism", "flame", "heat", "hot", "trash", "waste"],
  styles: ["solid"],
  label: "Dumpster Fire"
}, {
  name: "dungeon",
  search: ["Dungeons & Dragons", "building", "d&d", "dnd", "door", "entrance", "fantasy", "gate"],
  styles: ["solid"],
  label: "Dungeon"
}, {
  name: "dyalog",
  search: [],
  styles: ["brands"],
  label: "Dyalog"
}, {
  name: "earlybirds",
  search: [],
  styles: ["brands"],
  label: "Earlybirds"
}, {
  name: "ebay",
  search: [],
  styles: ["brands"],
  label: "eBay"
}, {
  name: "edge",
  search: ["browser", "ie"],
  styles: ["brands"],
  label: "Edge Browser"
}, {
  name: "edit",
  search: ["edit", "pen", "pencil", "update", "write"],
  styles: ["solid", "regular"],
  label: "Edit"
}, {
  name: "egg",
  search: ["breakfast", "chicken", "easter", "shell", "yolk"],
  styles: ["solid"],
  label: "Egg"
}, {
  name: "eject",
  search: ["abort", "cancel", "cd", "discharge"],
  styles: ["solid"],
  label: "eject"
}, {
  name: "elementor",
  search: [],
  styles: ["brands"],
  label: "Elementor"
}, {
  name: "ellipsis-h",
  search: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"],
  styles: ["solid"],
  label: "Horizontal Ellipsis"
}, {
  name: "ellipsis-v",
  search: ["dots", "drag", "kebab", "list", "menu", "nav", "navigation", "ol", "reorder", "settings", "ul"],
  styles: ["solid"],
  label: "Vertical Ellipsis"
}, {
  name: "ello",
  search: [],
  styles: ["brands"],
  label: "Ello"
}, {
  name: "ember",
  search: [],
  styles: ["brands"],
  label: "Ember"
}, {
  name: "empire",
  search: [],
  styles: ["brands"],
  label: "Galactic Empire"
}, {
  name: "envelope",
  search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
  styles: ["solid", "regular"],
  label: "Envelope"
}, {
  name: "envelope-open",
  search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
  styles: ["solid", "regular"],
  label: "Envelope Open"
}, {
  name: "envelope-open-text",
  search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
  styles: ["solid"],
  label: "Envelope Open-text"
}, {
  name: "envelope-square",
  search: ["e-mail", "email", "letter", "mail", "message", "notification", "support"],
  styles: ["solid"],
  label: "Envelope Square"
}, {
  name: "envira",
  search: ["leaf"],
  styles: ["brands"],
  label: "Envira Gallery"
}, {
  name: "equals",
  search: ["arithmetic", "even", "match", "math"],
  styles: ["solid"],
  label: "Equals"
}, {
  name: "eraser",
  search: ["art", "delete", "remove", "rubber"],
  styles: ["solid"],
  label: "eraser"
}, {
  name: "erlang",
  search: [],
  styles: ["brands"],
  label: "Erlang"
}, {
  name: "ethereum",
  search: [],
  styles: ["brands"],
  label: "Ethereum"
}, {
  name: "ethernet",
  search: ["cable", "cat 5", "cat 6", "connection", "hardware", "internet", "network", "wired"],
  styles: ["solid"],
  label: "Ethernet"
}, {
  name: "etsy",
  search: [],
  styles: ["brands"],
  label: "Etsy"
}, {
  name: "euro-sign",
  search: ["currency", "dollar", "exchange", "money"],
  styles: ["solid"],
  label: "Euro Sign"
}, {
  name: "evernote",
  search: [],
  styles: ["brands"],
  label: "Evernote"
}, {
  name: "exchange-alt",
  search: ["arrow", "arrows", "exchange", "reciprocate", "return", "swap", "transfer"],
  styles: ["solid"],
  label: "Alternate Exchange"
}, {
  name: "exclamation",
  search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
  styles: ["solid"],
  label: "exclamation"
}, {
  name: "exclamation-circle",
  search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
  styles: ["solid"],
  label: "Exclamation Circle"
}, {
  name: "exclamation-triangle",
  search: ["alert", "danger", "error", "important", "notice", "notification", "notify", "problem", "warning"],
  styles: ["solid"],
  label: "Exclamation Triangle"
}, {
  name: "expand",
  search: ["arrow", "bigger", "enlarge", "resize"],
  styles: ["solid"],
  label: "Expand"
}, {
  name: "expand-alt",
  search: ["arrow", "bigger", "enlarge", "resize"],
  styles: ["solid"],
  label: "Alternate Expand"
}, {
  name: "expand-arrows-alt",
  search: ["arrows-alt", "bigger", "enlarge", "move", "resize"],
  styles: ["solid"],
  label: "Alternate Expand Arrows"
}, {
  name: "expeditedssl",
  search: [],
  styles: ["brands"],
  label: "ExpeditedSSL"
}, {
  name: "external-link-alt",
  search: ["external-link", "new", "open", "share"],
  styles: ["solid"],
  label: "Alternate External Link"
}, {
  name: "external-link-square-alt",
  search: ["external-link-square", "new", "open", "share"],
  styles: ["solid"],
  label: "Alternate External Link Square"
}, {
  name: "eye",
  search: ["look", "optic", "see", "seen", "show", "sight", "views", "visible"],
  styles: ["solid", "regular"],
  label: "Eye"
}, {
  name: "eye-dropper",
  search: ["beaker", "clone", "color", "copy", "eyedropper", "pipette"],
  styles: ["solid"],
  label: "Eye Dropper"
}, {
  name: "eye-slash",
  search: ["blind", "hide", "show", "toggle", "unseen", "views", "visible", "visiblity"],
  styles: ["solid", "regular"],
  label: "Eye Slash"
}, {
  name: "facebook",
  search: ["facebook-official", "social network"],
  styles: ["brands"],
  label: "Facebook"
}, {
  name: "facebook-f",
  search: ["facebook"],
  styles: ["brands"],
  label: "Facebook F"
}, {
  name: "facebook-messenger",
  search: [],
  styles: ["brands"],
  label: "Facebook Messenger"
}, {
  name: "facebook-square",
  search: ["social network"],
  styles: ["brands"],
  label: "Facebook Square"
}, {
  name: "fan",
  search: ["ac", "air conditioning", "blade", "blower", "cool", "hot"],
  styles: ["solid"],
  label: "Fan"
}, {
  name: "fantasy-flight-games",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
  styles: ["brands"],
  label: "Fantasy Flight-games"
}, {
  name: "fast-backward",
  search: ["beginning", "first", "previous", "rewind", "start"],
  styles: ["solid"],
  label: "fast-backward"
}, {
  name: "fast-forward",
  search: ["end", "last", "next"],
  styles: ["solid"],
  label: "fast-forward"
}, {
  name: "faucet",
  search: ["covid-19", "drip", "house", "hygiene", "kitchen", "sink", "water"],
  styles: ["solid"],
  label: "Faucet"
}, {
  name: "fax",
  search: ["business", "communicate", "copy", "facsimile", "send"],
  styles: ["solid"],
  label: "Fax"
}, {
  name: "feather",
  search: ["bird", "light", "plucked", "quill", "write"],
  styles: ["solid"],
  label: "Feather"
}, {
  name: "feather-alt",
  search: ["bird", "light", "plucked", "quill", "write"],
  styles: ["solid"],
  label: "Alternate Feather"
}, {
  name: "fedex",
  search: ["Federal Express", "package", "shipping"],
  styles: ["brands"],
  label: "FedEx"
}, {
  name: "fedora",
  search: ["linux", "operating system", "os"],
  styles: ["brands"],
  label: "Fedora"
}, {
  name: "female",
  search: ["human", "person", "profile", "user", "woman"],
  styles: ["solid"],
  label: "Female"
}, {
  name: "fighter-jet",
  search: ["airplane", "fast", "fly", "goose", "maverick", "plane", "quick", "top gun", "transportation", "travel"],
  styles: ["solid"],
  label: "fighter-jet"
}, {
  name: "figma",
  search: ["app", "design", "interface"],
  styles: ["brands"],
  label: "Figma"
}, {
  name: "file",
  search: ["document", "new", "page", "pdf", "resume"],
  styles: ["solid", "regular"],
  label: "File"
}, {
  name: "file-alt",
  search: ["document", "file-text", "invoice", "new", "page", "pdf"],
  styles: ["solid", "regular"],
  label: "Alternate File"
}, {
  name: "file-archive",
  search: [".zip", "bundle", "compress", "compression", "download", "zip"],
  styles: ["solid", "regular"],
  label: "Archive File"
}, {
  name: "file-audio",
  search: ["document", "mp3", "music", "page", "play", "sound"],
  styles: ["solid", "regular"],
  label: "Audio File"
}, {
  name: "file-code",
  search: ["css", "development", "document", "html"],
  styles: ["solid", "regular"],
  label: "Code File"
}, {
  name: "file-contract",
  search: ["agreement", "binding", "document", "legal", "signature"],
  styles: ["solid"],
  label: "File Contract"
}, {
  name: "file-csv",
  search: ["document", "excel", "numbers", "spreadsheets", "table"],
  styles: ["solid"],
  label: "File CSV"
}, {
  name: "file-download",
  search: ["document", "export", "save"],
  styles: ["solid"],
  label: "File Download"
}, {
  name: "file-excel",
  search: ["csv", "document", "numbers", "spreadsheets", "table"],
  styles: ["solid", "regular"],
  label: "Excel File"
}, {
  name: "file-export",
  search: ["download", "save"],
  styles: ["solid"],
  label: "File Export"
}, {
  name: "file-image",
  search: ["document", "image", "jpg", "photo", "png"],
  styles: ["solid", "regular"],
  label: "Image File"
}, {
  name: "file-import",
  search: ["copy", "document", "send", "upload"],
  styles: ["solid"],
  label: "File Import"
}, {
  name: "file-invoice",
  search: ["account", "bill", "charge", "document", "payment", "receipt"],
  styles: ["solid"],
  label: "File Invoice"
}, {
  name: "file-invoice-dollar",
  search: ["$", "account", "bill", "charge", "document", "dollar-sign", "money", "payment", "receipt", "usd"],
  styles: ["solid"],
  label: "File Invoice with US Dollar"
}, {
  name: "file-medical",
  search: ["document", "health", "history", "prescription", "record"],
  styles: ["solid"],
  label: "Medical File"
}, {
  name: "file-medical-alt",
  search: ["document", "health", "history", "prescription", "record"],
  styles: ["solid"],
  label: "Alternate Medical File"
}, {
  name: "file-pdf",
  search: ["acrobat", "document", "preview", "save"],
  styles: ["solid", "regular"],
  label: "PDF File"
}, {
  name: "file-powerpoint",
  search: ["display", "document", "keynote", "presentation"],
  styles: ["solid", "regular"],
  label: "Powerpoint File"
}, {
  name: "file-prescription",
  search: ["document", "drugs", "medical", "medicine", "rx"],
  styles: ["solid"],
  label: "File Prescription"
}, {
  name: "file-signature",
  search: ["John Hancock", "contract", "document", "name"],
  styles: ["solid"],
  label: "File Signature"
}, {
  name: "file-upload",
  search: ["document", "import", "page", "save"],
  styles: ["solid"],
  label: "File Upload"
}, {
  name: "file-video",
  search: ["document", "m4v", "movie", "mp4", "play"],
  styles: ["solid", "regular"],
  label: "Video File"
}, {
  name: "file-word",
  search: ["document", "edit", "page", "text", "writing"],
  styles: ["solid", "regular"],
  label: "Word File"
}, {
  name: "fill",
  search: ["bucket", "color", "paint", "paint bucket"],
  styles: ["solid"],
  label: "Fill"
}, {
  name: "fill-drip",
  search: ["bucket", "color", "drop", "paint", "paint bucket", "spill"],
  styles: ["solid"],
  label: "Fill Drip"
}, {
  name: "film",
  search: ["cinema", "movie", "strip", "video"],
  styles: ["solid"],
  label: "Film"
}, {
  name: "filter",
  search: ["funnel", "options", "separate", "sort"],
  styles: ["solid"],
  label: "Filter"
}, {
  name: "fingerprint",
  search: ["human", "id", "identification", "lock", "smudge", "touch", "unique", "unlock"],
  styles: ["solid"],
  label: "Fingerprint"
}, {
  name: "fire",
  search: ["burn", "caliente", "flame", "heat", "hot", "popular"],
  styles: ["solid"],
  label: "fire"
}, {
  name: "fire-alt",
  search: ["burn", "caliente", "flame", "heat", "hot", "popular"],
  styles: ["solid"],
  label: "Alternate Fire"
}, {
  name: "fire-extinguisher",
  search: ["burn", "caliente", "fire fighter", "flame", "heat", "hot", "rescue"],
  styles: ["solid"],
  label: "fire-extinguisher"
}, {
  name: "firefox",
  search: ["browser"],
  styles: ["brands"],
  label: "Firefox"
}, {
  name: "firefox-browser",
  search: ["browser"],
  styles: ["brands"],
  label: "Firefox Browser"
}, {
  name: "first-aid",
  search: ["emergency", "emt", "health", "medical", "rescue"],
  styles: ["solid"],
  label: "First Aid"
}, {
  name: "first-order",
  search: [],
  styles: ["brands"],
  label: "First Order"
}, {
  name: "first-order-alt",
  search: [],
  styles: ["brands"],
  label: "Alternate First Order"
}, {
  name: "firstdraft",
  search: [],
  styles: ["brands"],
  label: "firstdraft"
}, {
  name: "fish",
  search: ["fauna", "gold", "seafood", "swimming"],
  styles: ["solid"],
  label: "Fish"
}, {
  name: "fist-raised",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "hand", "ki", "monk", "resist", "strength", "unarmed combat"],
  styles: ["solid"],
  label: "Raised Fist"
}, {
  name: "flag",
  search: ["country", "notice", "notification", "notify", "pole", "report", "symbol"],
  styles: ["solid", "regular"],
  label: "flag"
}, {
  name: "flag-checkered",
  search: ["notice", "notification", "notify", "pole", "racing", "report", "symbol"],
  styles: ["solid"],
  label: "flag-checkered"
}, {
  name: "flag-usa",
  search: ["betsy ross", "country", "old glory", "stars", "stripes", "symbol"],
  styles: ["solid"],
  label: "United States of America Flag"
}, {
  name: "flask",
  search: ["beaker", "experimental", "labs", "science"],
  styles: ["solid"],
  label: "Flask"
}, {
  name: "flickr",
  search: [],
  styles: ["brands"],
  label: "Flickr"
}, {
  name: "flipboard",
  search: [],
  styles: ["brands"],
  label: "Flipboard"
}, {
  name: "flushed",
  search: ["embarrassed", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Flushed Face"
}, {
  name: "fly",
  search: [],
  styles: ["brands"],
  label: "Fly"
}, {
  name: "folder",
  search: ["archive", "directory", "document", "file"],
  styles: ["solid", "regular"],
  label: "Folder"
}, {
  name: "folder-minus",
  search: ["archive", "delete", "directory", "document", "file", "negative", "remove"],
  styles: ["solid"],
  label: "Folder Minus"
}, {
  name: "folder-open",
  search: ["archive", "directory", "document", "empty", "file", "new"],
  styles: ["solid", "regular"],
  label: "Folder Open"
}, {
  name: "folder-plus",
  search: ["add", "archive", "create", "directory", "document", "file", "new", "positive"],
  styles: ["solid"],
  label: "Folder Plus"
}, {
  name: "font",
  search: ["alphabet", "glyph", "text", "type", "typeface"],
  styles: ["solid"],
  label: "font"
}, {
  name: "font-awesome",
  search: ["meanpath"],
  styles: ["brands"],
  label: "Font Awesome"
}, {
  name: "font-awesome-alt",
  search: [],
  styles: ["brands"],
  label: "Alternate Font Awesome"
}, {
  name: "font-awesome-flag",
  search: [],
  styles: ["brands"],
  label: "Font Awesome Flag"
}, {
  name: "fonticons",
  search: [],
  styles: ["brands"],
  label: "Fonticons"
}, {
  name: "fonticons-fi",
  search: [],
  styles: ["brands"],
  label: "Fonticons Fi"
}, {
  name: "football-ball",
  search: ["ball", "fall", "nfl", "pigskin", "seasonal"],
  styles: ["solid"],
  label: "Football Ball"
}, {
  name: "fort-awesome",
  search: ["castle"],
  styles: ["brands"],
  label: "Fort Awesome"
}, {
  name: "fort-awesome-alt",
  search: ["castle"],
  styles: ["brands"],
  label: "Alternate Fort Awesome"
}, {
  name: "forumbee",
  search: [],
  styles: ["brands"],
  label: "Forumbee"
}, {
  name: "forward",
  search: ["forward", "next", "skip"],
  styles: ["solid"],
  label: "forward"
}, {
  name: "foursquare",
  search: [],
  styles: ["brands"],
  label: "Foursquare"
}, {
  name: "free-code-camp",
  search: [],
  styles: ["brands"],
  label: "freeCodeCamp"
}, {
  name: "freebsd",
  search: [],
  styles: ["brands"],
  label: "FreeBSD"
}, {
  name: "frog",
  search: ["amphibian", "bullfrog", "fauna", "hop", "kermit", "kiss", "prince", "ribbit", "toad", "wart"],
  styles: ["solid"],
  label: "Frog"
}, {
  name: "frown",
  search: ["disapprove", "emoticon", "face", "rating", "sad"],
  styles: ["solid", "regular"],
  label: "Frowning Face"
}, {
  name: "frown-open",
  search: ["disapprove", "emoticon", "face", "rating", "sad"],
  styles: ["solid", "regular"],
  label: "Frowning Face With Open Mouth"
}, {
  name: "fulcrum",
  search: [],
  styles: ["brands"],
  label: "Fulcrum"
}, {
  name: "funnel-dollar",
  search: ["filter", "money", "options", "separate", "sort"],
  styles: ["solid"],
  label: "Funnel Dollar"
}, {
  name: "futbol",
  search: ["ball", "football", "mls", "soccer"],
  styles: ["solid", "regular"],
  label: "Futbol"
}, {
  name: "galactic-republic",
  search: ["politics", "star wars"],
  styles: ["brands"],
  label: "Galactic Republic"
}, {
  name: "galactic-senate",
  search: ["star wars"],
  styles: ["brands"],
  label: "Galactic Senate"
}, {
  name: "gamepad",
  search: ["arcade", "controller", "d-pad", "joystick", "video", "video game"],
  styles: ["solid"],
  label: "Gamepad"
}, {
  name: "gas-pump",
  search: ["car", "fuel", "gasoline", "petrol"],
  styles: ["solid"],
  label: "Gas Pump"
}, {
  name: "gavel",
  search: ["hammer", "judge", "law", "lawyer", "opinion"],
  styles: ["solid"],
  label: "Gavel"
}, {
  name: "gem",
  search: ["diamond", "jewelry", "sapphire", "stone", "treasure"],
  styles: ["solid", "regular"],
  label: "Gem"
}, {
  name: "genderless",
  search: ["androgynous", "asexual", "sexless"],
  styles: ["solid"],
  label: "Genderless"
}, {
  name: "get-pocket",
  search: [],
  styles: ["brands"],
  label: "Get Pocket"
}, {
  name: "gg",
  search: [],
  styles: ["brands"],
  label: "GG Currency"
}, {
  name: "gg-circle",
  search: [],
  styles: ["brands"],
  label: "GG Currency Circle"
}, {
  name: "ghost",
  search: ["apparition", "blinky", "clyde", "floating", "halloween", "holiday", "inky", "pinky", "spirit"],
  styles: ["solid"],
  label: "Ghost"
}, {
  name: "gift",
  search: ["christmas", "generosity", "giving", "holiday", "party", "present", "wrapped", "xmas"],
  styles: ["solid"],
  label: "gift"
}, {
  name: "gifts",
  search: ["christmas", "generosity", "giving", "holiday", "party", "present", "wrapped", "xmas"],
  styles: ["solid"],
  label: "Gifts"
}, {
  name: "git",
  search: [],
  styles: ["brands"],
  label: "Git"
}, {
  name: "git-alt",
  search: [],
  styles: ["brands"],
  label: "Git Alt"
}, {
  name: "git-square",
  search: [],
  styles: ["brands"],
  label: "Git Square"
}, {
  name: "github",
  search: ["octocat"],
  styles: ["brands"],
  label: "GitHub"
}, {
  name: "github-alt",
  search: ["octocat"],
  styles: ["brands"],
  label: "Alternate GitHub"
}, {
  name: "github-square",
  search: ["octocat"],
  styles: ["brands"],
  label: "GitHub Square"
}, {
  name: "gitkraken",
  search: [],
  styles: ["brands"],
  label: "GitKraken"
}, {
  name: "gitlab",
  search: ["Axosoft"],
  styles: ["brands"],
  label: "GitLab"
}, {
  name: "gitter",
  search: [],
  styles: ["brands"],
  label: "Gitter"
}, {
  name: "glass-cheers",
  search: ["alcohol", "bar", "beverage", "celebration", "champagne", "clink", "drink", "holiday", "new year's eve", "party", "toast"],
  styles: ["solid"],
  label: "Glass Cheers"
}, {
  name: "glass-martini",
  search: ["alcohol", "bar", "beverage", "drink", "liquor"],
  styles: ["solid"],
  label: "Martini Glass"
}, {
  name: "glass-martini-alt",
  search: ["alcohol", "bar", "beverage", "drink", "liquor"],
  styles: ["solid"],
  label: "Alternate Glass Martini"
}, {
  name: "glass-whiskey",
  search: ["alcohol", "bar", "beverage", "bourbon", "drink", "liquor", "neat", "rye", "scotch", "whisky"],
  styles: ["solid"],
  label: "Glass Whiskey"
}, {
  name: "glasses",
  search: ["hipster", "nerd", "reading", "sight", "spectacles", "vision"],
  styles: ["solid"],
  label: "Glasses"
}, {
  name: "glide",
  search: [],
  styles: ["brands"],
  label: "Glide"
}, {
  name: "glide-g",
  search: [],
  styles: ["brands"],
  label: "Glide G"
}, {
  name: "globe",
  search: ["all", "coordinates", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
  styles: ["solid"],
  label: "Globe"
}, {
  name: "globe-africa",
  search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
  styles: ["solid"],
  label: "Globe with Africa shown"
}, {
  name: "globe-americas",
  search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
  styles: ["solid"],
  label: "Globe with Americas shown"
}, {
  name: "globe-asia",
  search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
  styles: ["solid"],
  label: "Globe with Asia shown"
}, {
  name: "globe-europe",
  search: ["all", "country", "earth", "global", "gps", "language", "localize", "location", "map", "online", "place", "planet", "translate", "travel", "world"],
  styles: ["solid"],
  label: "Globe with Europe shown"
}, {
  name: "gofore",
  search: [],
  styles: ["brands"],
  label: "Gofore"
}, {
  name: "golf-ball",
  search: ["caddy", "eagle", "putt", "tee"],
  styles: ["solid"],
  label: "Golf Ball"
}, {
  name: "goodreads",
  search: [],
  styles: ["brands"],
  label: "Goodreads"
}, {
  name: "goodreads-g",
  search: [],
  styles: ["brands"],
  label: "Goodreads G"
}, {
  name: "google",
  search: [],
  styles: ["brands"],
  label: "Google Logo"
}, {
  name: "google-drive",
  search: [],
  styles: ["brands"],
  label: "Google Drive"
}, {
  name: "google-play",
  search: [],
  styles: ["brands"],
  label: "Google Play"
}, {
  name: "google-plus",
  search: ["google-plus-circle", "google-plus-official"],
  styles: ["brands"],
  label: "Google Plus"
}, {
  name: "google-plus-g",
  search: ["google-plus", "social network"],
  styles: ["brands"],
  label: "Google Plus G"
}, {
  name: "google-plus-square",
  search: ["social network"],
  styles: ["brands"],
  label: "Google Plus Square"
}, {
  name: "google-wallet",
  search: [],
  styles: ["brands"],
  label: "Google Wallet"
}, {
  name: "gopuram",
  search: ["building", "entrance", "hinduism", "temple", "tower"],
  styles: ["solid"],
  label: "Gopuram"
}, {
  name: "graduation-cap",
  search: ["ceremony", "college", "graduate", "learning", "school", "student"],
  styles: ["solid"],
  label: "Graduation Cap"
}, {
  name: "gratipay",
  search: ["favorite", "heart", "like", "love"],
  styles: ["brands"],
  label: "Gratipay (Gittip)"
}, {
  name: "grav",
  search: [],
  styles: ["brands"],
  label: "Grav"
}, {
  name: "greater-than",
  search: ["arithmetic", "compare", "math"],
  styles: ["solid"],
  label: "Greater Than"
}, {
  name: "greater-than-equal",
  search: ["arithmetic", "compare", "math"],
  styles: ["solid"],
  label: "Greater Than Equal To"
}, {
  name: "grimace",
  search: ["cringe", "emoticon", "face", "teeth"],
  styles: ["solid", "regular"],
  label: "Grimacing Face"
}, {
  name: "grin",
  search: ["emoticon", "face", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Face"
}, {
  name: "grin-alt",
  search: ["emoticon", "face", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Alternate Grinning Face"
}, {
  name: "grin-beam",
  search: ["emoticon", "face", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Face With Smiling Eyes"
}, {
  name: "grin-beam-sweat",
  search: ["embarass", "emoticon", "face", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Face With Sweat"
}, {
  name: "grin-hearts",
  search: ["emoticon", "face", "love", "smile"],
  styles: ["solid", "regular"],
  label: "Smiling Face With Heart-Eyes"
}, {
  name: "grin-squint",
  search: ["emoticon", "face", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Squinting Face"
}, {
  name: "grin-squint-tears",
  search: ["emoticon", "face", "happy", "smile"],
  styles: ["solid", "regular"],
  label: "Rolling on the Floor Laughing"
}, {
  name: "grin-stars",
  search: ["emoticon", "face", "star-struck"],
  styles: ["solid", "regular"],
  label: "Star-Struck"
}, {
  name: "grin-tears",
  search: ["LOL", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Face With Tears of Joy"
}, {
  name: "grin-tongue",
  search: ["LOL", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Face With Tongue"
}, {
  name: "grin-tongue-squint",
  search: ["LOL", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Squinting Face With Tongue"
}, {
  name: "grin-tongue-wink",
  search: ["LOL", "emoticon", "face"],
  styles: ["solid", "regular"],
  label: "Winking Face With Tongue"
}, {
  name: "grin-wink",
  search: ["emoticon", "face", "flirt", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Winking Face"
}, {
  name: "grip-horizontal",
  search: ["affordance", "drag", "drop", "grab", "handle"],
  styles: ["solid"],
  label: "Grip Horizontal"
}, {
  name: "grip-lines",
  search: ["affordance", "drag", "drop", "grab", "handle"],
  styles: ["solid"],
  label: "Grip Lines"
}, {
  name: "grip-lines-vertical",
  search: ["affordance", "drag", "drop", "grab", "handle"],
  styles: ["solid"],
  label: "Grip Lines Vertical"
}, {
  name: "grip-vertical",
  search: ["affordance", "drag", "drop", "grab", "handle"],
  styles: ["solid"],
  label: "Grip Vertical"
}, {
  name: "gripfire",
  search: [],
  styles: ["brands"],
  label: "Gripfire, Inc."
}, {
  name: "grunt",
  search: [],
  styles: ["brands"],
  label: "Grunt"
}, {
  name: "guitar",
  search: ["acoustic", "instrument", "music", "rock", "rock and roll", "song", "strings"],
  styles: ["solid"],
  label: "Guitar"
}, {
  name: "gulp",
  search: [],
  styles: ["brands"],
  label: "Gulp"
}, {
  name: "h-square",
  search: ["directions", "emergency", "hospital", "hotel", "map"],
  styles: ["solid"],
  label: "H Square"
}, {
  name: "hacker-news",
  search: [],
  styles: ["brands"],
  label: "Hacker News"
}, {
  name: "hacker-news-square",
  search: [],
  styles: ["brands"],
  label: "Hacker News Square"
}, {
  name: "hackerrank",
  search: [],
  styles: ["brands"],
  label: "Hackerrank"
}, {
  name: "hamburger",
  search: ["bacon", "beef", "burger", "burger king", "cheeseburger", "fast food", "grill", "ground beef", "mcdonalds", "sandwich"],
  styles: ["solid"],
  label: "Hamburger"
}, {
  name: "hammer",
  search: ["admin", "fix", "repair", "settings", "tool"],
  styles: ["solid"],
  label: "Hammer"
}, {
  name: "hamsa",
  search: ["amulet", "christianity", "islam", "jewish", "judaism", "muslim", "protection"],
  styles: ["solid"],
  label: "Hamsa"
}, {
  name: "hand-holding",
  search: ["carry", "lift"],
  styles: ["solid"],
  label: "Hand Holding"
}, {
  name: "hand-holding-heart",
  search: ["carry", "charity", "gift", "lift", "package"],
  styles: ["solid"],
  label: "Hand Holding Heart"
}, {
  name: "hand-holding-medical",
  search: ["care", "covid-19", "donate", "help"],
  styles: ["solid"],
  label: "Hand Holding Medical Cross"
}, {
  name: "hand-holding-usd",
  search: ["$", "carry", "dollar sign", "donation", "giving", "lift", "money", "price"],
  styles: ["solid"],
  label: "Hand Holding US Dollar"
}, {
  name: "hand-holding-water",
  search: ["carry", "covid-19", "drought", "grow", "lift"],
  styles: ["solid"],
  label: "Hand Holding Water"
}, {
  name: "hand-lizard",
  search: ["game", "roshambo"],
  styles: ["solid", "regular"],
  label: "Lizard (Hand)"
}, {
  name: "hand-middle-finger",
  search: ["flip the bird", "gesture", "hate", "rude"],
  styles: ["solid"],
  label: "Hand with Middle Finger Raised"
}, {
  name: "hand-paper",
  search: ["game", "halt", "roshambo", "stop"],
  styles: ["solid", "regular"],
  label: "Paper (Hand)"
}, {
  name: "hand-peace",
  search: ["rest", "truce"],
  styles: ["solid", "regular"],
  label: "Peace (Hand)"
}, {
  name: "hand-point-down",
  search: ["finger", "hand-o-down", "point"],
  styles: ["solid", "regular"],
  label: "Hand Pointing Down"
}, {
  name: "hand-point-left",
  search: ["back", "finger", "hand-o-left", "left", "point", "previous"],
  styles: ["solid", "regular"],
  label: "Hand Pointing Left"
}, {
  name: "hand-point-right",
  search: ["finger", "forward", "hand-o-right", "next", "point", "right"],
  styles: ["solid", "regular"],
  label: "Hand Pointing Right"
}, {
  name: "hand-point-up",
  search: ["finger", "hand-o-up", "point"],
  styles: ["solid", "regular"],
  label: "Hand Pointing Up"
}, {
  name: "hand-pointer",
  search: ["arrow", "cursor", "select"],
  styles: ["solid", "regular"],
  label: "Pointer (Hand)"
}, {
  name: "hand-rock",
  search: ["fist", "game", "roshambo"],
  styles: ["solid", "regular"],
  label: "Rock (Hand)"
}, {
  name: "hand-scissors",
  search: ["cut", "game", "roshambo"],
  styles: ["solid", "regular"],
  label: "Scissors (Hand)"
}, {
  name: "hand-sparkles",
  search: ["clean", "covid-19", "hygiene", "magic", "soap", "wash"],
  styles: ["solid"],
  label: "Hand Sparkles"
}, {
  name: "hand-spock",
  search: ["live long", "prosper", "salute", "star trek", "vulcan"],
  styles: ["solid", "regular"],
  label: "Spock (Hand)"
}, {
  name: "hands",
  search: ["carry", "hold", "lift"],
  styles: ["solid"],
  label: "Hands"
}, {
  name: "hands-helping",
  search: ["aid", "assistance", "handshake", "partnership", "volunteering"],
  styles: ["solid"],
  label: "Helping Hands"
}, {
  name: "hands-wash",
  search: ["covid-19", "hygiene", "soap", "wash"],
  styles: ["solid"],
  label: "Hands Wash"
}, {
  name: "handshake",
  search: ["agreement", "greeting", "meeting", "partnership"],
  styles: ["solid", "regular"],
  label: "Handshake"
}, {
  name: "handshake-alt-slash",
  search: ["broken", "covid-19", "social distance"],
  styles: ["solid"],
  label: "Handshake Alternate Slash"
}, {
  name: "handshake-slash",
  search: ["broken", "covid-19", "social distance"],
  styles: ["solid"],
  label: "Handshake Slash"
}, {
  name: "hanukiah",
  search: ["candle", "hanukkah", "jewish", "judaism", "light"],
  styles: ["solid"],
  label: "Hanukiah"
}, {
  name: "hard-hat",
  search: ["construction", "hardhat", "helmet", "safety"],
  styles: ["solid"],
  label: "Hard Hat"
}, {
  name: "hashtag",
  search: ["Twitter", "instagram", "pound", "social media", "tag"],
  styles: ["solid"],
  label: "Hashtag"
}, {
  name: "hat-cowboy",
  search: ["buckaroo", "horse", "jackeroo", "john b.", "old west", "pardner", "ranch", "rancher", "rodeo", "western", "wrangler"],
  styles: ["solid"],
  label: "Cowboy Hat"
}, {
  name: "hat-cowboy-side",
  search: ["buckaroo", "horse", "jackeroo", "john b.", "old west", "pardner", "ranch", "rancher", "rodeo", "western", "wrangler"],
  styles: ["solid"],
  label: "Cowboy Hat Side"
}, {
  name: "hat-wizard",
  search: ["Dungeons & Dragons", "accessory", "buckle", "clothing", "d&d", "dnd", "fantasy", "halloween", "head", "holiday", "mage", "magic", "pointy", "witch"],
  styles: ["solid"],
  label: "Wizard's Hat"
}, {
  name: "hdd",
  search: ["cpu", "hard drive", "harddrive", "machine", "save", "storage"],
  styles: ["solid", "regular"],
  label: "HDD"
}, {
  name: "head-side-cough",
  search: ["cough", "covid-19", "germs", "lungs", "respiratory", "sick"],
  styles: ["solid"],
  label: "Head Side Cough"
}, {
  name: "head-side-cough-slash",
  search: ["cough", "covid-19", "germs", "lungs", "respiratory", "sick"],
  styles: ["solid"],
  label: "Head Side-cough-slash"
}, {
  name: "head-side-mask",
  search: ["breath", "covid-19", "filter", "respirator", "virus"],
  styles: ["solid"],
  label: "Head Side Mask"
}, {
  name: "head-side-virus",
  search: ["cold", "covid-19", "flu", "sick"],
  styles: ["solid"],
  label: "Head Side Virus"
}, {
  name: "heading",
  search: ["format", "header", "text", "title"],
  styles: ["solid"],
  label: "heading"
}, {
  name: "headphones",
  search: ["audio", "listen", "music", "sound", "speaker"],
  styles: ["solid"],
  label: "headphones"
}, {
  name: "headphones-alt",
  search: ["audio", "listen", "music", "sound", "speaker"],
  styles: ["solid"],
  label: "Alternate Headphones"
}, {
  name: "headset",
  search: ["audio", "gamer", "gaming", "listen", "live chat", "microphone", "shot caller", "sound", "support", "telemarketer"],
  styles: ["solid"],
  label: "Headset"
}, {
  name: "heart",
  search: ["favorite", "like", "love", "relationship", "valentine"],
  styles: ["solid", "regular"],
  label: "Heart"
}, {
  name: "heart-broken",
  search: ["breakup", "crushed", "dislike", "dumped", "grief", "love", "lovesick", "relationship", "sad"],
  styles: ["solid"],
  label: "Heart Broken"
}, {
  name: "heartbeat",
  search: ["ekg", "electrocardiogram", "health", "lifeline", "vital signs"],
  styles: ["solid"],
  label: "Heartbeat"
}, {
  name: "helicopter",
  search: ["airwolf", "apache", "chopper", "flight", "fly", "travel"],
  styles: ["solid"],
  label: "Helicopter"
}, {
  name: "highlighter",
  search: ["edit", "marker", "sharpie", "update", "write"],
  styles: ["solid"],
  label: "Highlighter"
}, {
  name: "hiking",
  search: ["activity", "backpack", "fall", "fitness", "outdoors", "person", "seasonal", "walking"],
  styles: ["solid"],
  label: "Hiking"
}, {
  name: "hippo",
  search: ["animal", "fauna", "hippopotamus", "hungry", "mammal"],
  styles: ["solid"],
  label: "Hippo"
}, {
  name: "hips",
  search: [],
  styles: ["brands"],
  label: "Hips"
}, {
  name: "hire-a-helper",
  search: [],
  styles: ["brands"],
  label: "HireAHelper"
}, {
  name: "history",
  search: ["Rewind", "clock", "reverse", "time", "time machine"],
  styles: ["solid"],
  label: "History"
}, {
  name: "hockey-puck",
  search: ["ice", "nhl", "sport"],
  styles: ["solid"],
  label: "Hockey Puck"
}, {
  name: "holly-berry",
  search: ["catwoman", "christmas", "decoration", "flora", "halle", "holiday", "ororo munroe", "plant", "storm", "xmas"],
  styles: ["solid"],
  label: "Holly Berry"
}, {
  name: "home",
  search: ["abode", "building", "house", "main"],
  styles: ["solid"],
  label: "home"
}, {
  name: "hooli",
  search: [],
  styles: ["brands"],
  label: "Hooli"
}, {
  name: "hornbill",
  search: [],
  styles: ["brands"],
  label: "Hornbill"
}, {
  name: "horse",
  search: ["equus", "fauna", "mammmal", "mare", "neigh", "pony"],
  styles: ["solid"],
  label: "Horse"
}, {
  name: "horse-head",
  search: ["equus", "fauna", "mammmal", "mare", "neigh", "pony"],
  styles: ["solid"],
  label: "Horse Head"
}, {
  name: "hospital",
  search: ["building", "covid-19", "emergency room", "medical center"],
  styles: ["solid", "regular"],
  label: "hospital"
}, {
  name: "hospital-alt",
  search: ["building", "covid-19", "emergency room", "medical center"],
  styles: ["solid"],
  label: "Alternate Hospital"
}, {
  name: "hospital-symbol",
  search: ["clinic", "covid-19", "emergency", "map"],
  styles: ["solid"],
  label: "Hospital Symbol"
}, {
  name: "hospital-user",
  search: ["covid-19", "doctor", "network", "patient", "primary care"],
  styles: ["solid"],
  label: "Hospital with User"
}, {
  name: "hot-tub",
  search: ["bath", "jacuzzi", "massage", "sauna", "spa"],
  styles: ["solid"],
  label: "Hot Tub"
}, {
  name: "hotdog",
  search: ["bun", "chili", "frankfurt", "frankfurter", "kosher", "polish", "sandwich", "sausage", "vienna", "weiner"],
  styles: ["solid"],
  label: "Hot Dog"
}, {
  name: "hotel",
  search: ["building", "inn", "lodging", "motel", "resort", "travel"],
  styles: ["solid"],
  label: "Hotel"
}, {
  name: "hotjar",
  search: [],
  styles: ["brands"],
  label: "Hotjar"
}, {
  name: "hourglass",
  search: ["hour", "minute", "sand", "stopwatch", "time"],
  styles: ["solid", "regular"],
  label: "Hourglass"
}, {
  name: "hourglass-end",
  search: ["hour", "minute", "sand", "stopwatch", "time"],
  styles: ["solid"],
  label: "Hourglass End"
}, {
  name: "hourglass-half",
  search: ["hour", "minute", "sand", "stopwatch", "time"],
  styles: ["solid"],
  label: "Hourglass Half"
}, {
  name: "hourglass-start",
  search: ["hour", "minute", "sand", "stopwatch", "time"],
  styles: ["solid"],
  label: "Hourglass Start"
}, {
  name: "house-damage",
  search: ["building", "devastation", "disaster", "home", "insurance"],
  styles: ["solid"],
  label: "Damaged House"
}, {
  name: "house-user",
  search: ["covid-19", "home", "isolation", "quarantine"],
  styles: ["solid"],
  label: "House User"
}, {
  name: "houzz",
  search: [],
  styles: ["brands"],
  label: "Houzz"
}, {
  name: "hryvnia",
  search: ["currency", "money", "ukraine", "ukrainian"],
  styles: ["solid"],
  label: "Hryvnia"
}, {
  name: "html5",
  search: [],
  styles: ["brands"],
  label: "HTML 5 Logo"
}, {
  name: "hubspot",
  search: [],
  styles: ["brands"],
  label: "HubSpot"
}, {
  name: "i-cursor",
  search: ["editing", "i-beam", "type", "writing"],
  styles: ["solid"],
  label: "I Beam Cursor"
}, {
  name: "ice-cream",
  search: ["chocolate", "cone", "dessert", "frozen", "scoop", "sorbet", "vanilla", "yogurt"],
  styles: ["solid"],
  label: "Ice Cream"
}, {
  name: "icicles",
  search: ["cold", "frozen", "hanging", "ice", "seasonal", "sharp"],
  styles: ["solid"],
  label: "Icicles"
}, {
  name: "icons",
  search: ["bolt", "emoji", "heart", "image", "music", "photo", "symbols"],
  styles: ["solid"],
  label: "Icons"
}, {
  name: "id-badge",
  search: ["address", "contact", "identification", "license", "profile"],
  styles: ["solid", "regular"],
  label: "Identification Badge"
}, {
  name: "id-card",
  search: ["contact", "demographics", "document", "identification", "issued", "profile"],
  styles: ["solid", "regular"],
  label: "Identification Card"
}, {
  name: "id-card-alt",
  search: ["contact", "demographics", "document", "identification", "issued", "profile"],
  styles: ["solid"],
  label: "Alternate Identification Card"
}, {
  name: "ideal",
  search: [],
  styles: ["brands"],
  label: "iDeal"
}, {
  name: "igloo",
  search: ["dome", "dwelling", "eskimo", "home", "house", "ice", "snow"],
  styles: ["solid"],
  label: "Igloo"
}, {
  name: "image",
  search: ["album", "landscape", "photo", "picture"],
  styles: ["solid", "regular"],
  label: "Image"
}, {
  name: "images",
  search: ["album", "landscape", "photo", "picture"],
  styles: ["solid", "regular"],
  label: "Images"
}, {
  name: "imdb",
  search: [],
  styles: ["brands"],
  label: "IMDB"
}, {
  name: "inbox",
  search: ["archive", "desk", "email", "mail", "message"],
  styles: ["solid"],
  label: "inbox"
}, {
  name: "indent",
  search: ["align", "justify", "paragraph", "tab"],
  styles: ["solid"],
  label: "Indent"
}, {
  name: "industry",
  search: ["building", "factory", "industrial", "manufacturing", "mill", "warehouse"],
  styles: ["solid"],
  label: "Industry"
}, {
  name: "infinity",
  search: ["eternity", "forever", "math"],
  styles: ["solid"],
  label: "Infinity"
}, {
  name: "info",
  search: ["details", "help", "information", "more", "support"],
  styles: ["solid"],
  label: "Info"
}, {
  name: "info-circle",
  search: ["details", "help", "information", "more", "support"],
  styles: ["solid"],
  label: "Info Circle"
}, {
  name: "instagram",
  search: [],
  styles: ["brands"],
  label: "Instagram"
}, {
  name: "instagram-square",
  search: [],
  styles: ["brands"],
  label: "Instagram Square"
}, {
  name: "intercom",
  search: ["app", "customer", "messenger"],
  styles: ["brands"],
  label: "Intercom"
}, {
  name: "internet-explorer",
  search: ["browser", "ie"],
  styles: ["brands"],
  label: "Internet-explorer"
}, {
  name: "invision",
  search: ["app", "design", "interface"],
  styles: ["brands"],
  label: "InVision"
}, {
  name: "ioxhost",
  search: [],
  styles: ["brands"],
  label: "ioxhost"
}, {
  name: "italic",
  search: ["edit", "emphasis", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "italic"
}, {
  name: "itch-io",
  search: [],
  styles: ["brands"],
  label: "itch.io"
}, {
  name: "itunes",
  search: [],
  styles: ["brands"],
  label: "iTunes"
}, {
  name: "itunes-note",
  search: [],
  styles: ["brands"],
  label: "Itunes Note"
}, {
  name: "java",
  search: [],
  styles: ["brands"],
  label: "Java"
}, {
  name: "jedi",
  search: ["crest", "force", "sith", "skywalker", "star wars", "yoda"],
  styles: ["solid"],
  label: "Jedi"
}, {
  name: "jedi-order",
  search: ["star wars"],
  styles: ["brands"],
  label: "Jedi Order"
}, {
  name: "jenkins",
  search: [],
  styles: ["brands"],
  label: "Jenkis"
}, {
  name: "jira",
  search: ["atlassian"],
  styles: ["brands"],
  label: "Jira"
}, {
  name: "joget",
  search: [],
  styles: ["brands"],
  label: "Joget"
}, {
  name: "joint",
  search: ["blunt", "cannabis", "doobie", "drugs", "marijuana", "roach", "smoke", "smoking", "spliff"],
  styles: ["solid"],
  label: "Joint"
}, {
  name: "joomla",
  search: [],
  styles: ["brands"],
  label: "Joomla Logo"
}, {
  name: "journal-whills",
  search: ["book", "force", "jedi", "sith", "star wars", "yoda"],
  styles: ["solid"],
  label: "Journal of the Whills"
}, {
  name: "js",
  search: [],
  styles: ["brands"],
  label: "JavaScript (JS)"
}, {
  name: "js-square",
  search: [],
  styles: ["brands"],
  label: "JavaScript (JS) Square"
}, {
  name: "jsfiddle",
  search: [],
  styles: ["brands"],
  label: "jsFiddle"
}, {
  name: "kaaba",
  search: ["building", "cube", "islam", "muslim"],
  styles: ["solid"],
  label: "Kaaba"
}, {
  name: "kaggle",
  search: [],
  styles: ["brands"],
  label: "Kaggle"
}, {
  name: "key",
  search: ["lock", "password", "private", "secret", "unlock"],
  styles: ["solid"],
  label: "key"
}, {
  name: "keybase",
  search: [],
  styles: ["brands"],
  label: "Keybase"
}, {
  name: "keyboard",
  search: ["accessory", "edit", "input", "text", "type", "write"],
  styles: ["solid", "regular"],
  label: "Keyboard"
}, {
  name: "keycdn",
  search: [],
  styles: ["brands"],
  label: "KeyCDN"
}, {
  name: "khanda",
  search: ["chakkar", "sikh", "sikhism", "sword"],
  styles: ["solid"],
  label: "Khanda"
}, {
  name: "kickstarter",
  search: [],
  styles: ["brands"],
  label: "Kickstarter"
}, {
  name: "kickstarter-k",
  search: [],
  styles: ["brands"],
  label: "Kickstarter K"
}, {
  name: "kiss",
  search: ["beso", "emoticon", "face", "love", "smooch"],
  styles: ["solid", "regular"],
  label: "Kissing Face"
}, {
  name: "kiss-beam",
  search: ["beso", "emoticon", "face", "love", "smooch"],
  styles: ["solid", "regular"],
  label: "Kissing Face With Smiling Eyes"
}, {
  name: "kiss-wink-heart",
  search: ["beso", "emoticon", "face", "love", "smooch"],
  styles: ["solid", "regular"],
  label: "Face Blowing a Kiss"
}, {
  name: "kiwi-bird",
  search: ["bird", "fauna", "new zealand"],
  styles: ["solid"],
  label: "Kiwi Bird"
}, {
  name: "korvue",
  search: [],
  styles: ["brands"],
  label: "KORVUE"
}, {
  name: "landmark",
  search: ["building", "historic", "memorable", "monument", "politics"],
  styles: ["solid"],
  label: "Landmark"
}, {
  name: "language",
  search: ["dialect", "idiom", "localize", "speech", "translate", "vernacular"],
  styles: ["solid"],
  label: "Language"
}, {
  name: "laptop",
  search: ["computer", "cpu", "dell", "demo", "device", "mac", "macbook", "machine", "pc"],
  styles: ["solid"],
  label: "Laptop"
}, {
  name: "laptop-code",
  search: ["computer", "cpu", "dell", "demo", "develop", "device", "mac", "macbook", "machine", "pc"],
  styles: ["solid"],
  label: "Laptop Code"
}, {
  name: "laptop-house",
  search: ["computer", "covid-19", "device", "office", "remote", "work from home"],
  styles: ["solid"],
  label: "Laptop House"
}, {
  name: "laptop-medical",
  search: ["computer", "device", "ehr", "electronic health records", "history"],
  styles: ["solid"],
  label: "Laptop Medical"
}, {
  name: "laravel",
  search: [],
  styles: ["brands"],
  label: "Laravel"
}, {
  name: "lastfm",
  search: [],
  styles: ["brands"],
  label: "last.fm"
}, {
  name: "lastfm-square",
  search: [],
  styles: ["brands"],
  label: "last.fm Square"
}, {
  name: "laugh",
  search: ["LOL", "emoticon", "face", "laugh", "smile"],
  styles: ["solid", "regular"],
  label: "Grinning Face With Big Eyes"
}, {
  name: "laugh-beam",
  search: ["LOL", "emoticon", "face", "happy", "smile"],
  styles: ["solid", "regular"],
  label: "Laugh Face with Beaming Eyes"
}, {
  name: "laugh-squint",
  search: ["LOL", "emoticon", "face", "happy", "smile"],
  styles: ["solid", "regular"],
  label: "Laughing Squinting Face"
}, {
  name: "laugh-wink",
  search: ["LOL", "emoticon", "face", "happy", "smile"],
  styles: ["solid", "regular"],
  label: "Laughing Winking Face"
}, {
  name: "layer-group",
  search: ["arrange", "develop", "layers", "map", "stack"],
  styles: ["solid"],
  label: "Layer Group"
}, {
  name: "leaf",
  search: ["eco", "flora", "nature", "plant", "vegan"],
  styles: ["solid"],
  label: "leaf"
}, {
  name: "leanpub",
  search: [],
  styles: ["brands"],
  label: "Leanpub"
}, {
  name: "lemon",
  search: ["citrus", "lemonade", "lime", "tart"],
  styles: ["solid", "regular"],
  label: "Lemon"
}, {
  name: "less",
  search: [],
  styles: ["brands"],
  label: "Less"
}, {
  name: "less-than",
  search: ["arithmetic", "compare", "math"],
  styles: ["solid"],
  label: "Less Than"
}, {
  name: "less-than-equal",
  search: ["arithmetic", "compare", "math"],
  styles: ["solid"],
  label: "Less Than Equal To"
}, {
  name: "level-down-alt",
  search: ["arrow", "level-down"],
  styles: ["solid"],
  label: "Alternate Level Down"
}, {
  name: "level-up-alt",
  search: ["arrow", "level-up"],
  styles: ["solid"],
  label: "Alternate Level Up"
}, {
  name: "life-ring",
  search: ["coast guard", "help", "overboard", "save", "support"],
  styles: ["solid", "regular"],
  label: "Life Ring"
}, {
  name: "lightbulb",
  search: ["energy", "idea", "inspiration", "light"],
  styles: ["solid", "regular"],
  label: "Lightbulb"
}, {
  name: "line",
  search: [],
  styles: ["brands"],
  label: "Line"
}, {
  name: "link",
  search: ["attach", "attachment", "chain", "connect"],
  styles: ["solid"],
  label: "Link"
}, {
  name: "linkedin",
  search: ["linkedin-square"],
  styles: ["brands"],
  label: "LinkedIn"
}, {
  name: "linkedin-in",
  search: ["linkedin"],
  styles: ["brands"],
  label: "LinkedIn In"
}, {
  name: "linode",
  search: [],
  styles: ["brands"],
  label: "Linode"
}, {
  name: "linux",
  search: ["tux"],
  styles: ["brands"],
  label: "Linux"
}, {
  name: "lira-sign",
  search: ["currency", "money", "try", "turkish"],
  styles: ["solid"],
  label: "Turkish Lira Sign"
}, {
  name: "list",
  search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
  styles: ["solid"],
  label: "List"
}, {
  name: "list-alt",
  search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
  styles: ["solid", "regular"],
  label: "Alternate List"
}, {
  name: "list-ol",
  search: ["checklist", "completed", "done", "finished", "numbers", "ol", "todo", "ul"],
  styles: ["solid"],
  label: "list-ol"
}, {
  name: "list-ul",
  search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
  styles: ["solid"],
  label: "list-ul"
}, {
  name: "location-arrow",
  search: ["address", "compass", "coordinate", "direction", "gps", "map", "navigation", "place"],
  styles: ["solid"],
  label: "location-arrow"
}, {
  name: "lock",
  search: ["admin", "lock", "open", "password", "private", "protect", "security"],
  styles: ["solid"],
  label: "lock"
}, {
  name: "lock-open",
  search: ["admin", "lock", "open", "password", "private", "protect", "security"],
  styles: ["solid"],
  label: "Lock Open"
}, {
  name: "long-arrow-alt-down",
  search: ["download", "long-arrow-down"],
  styles: ["solid"],
  label: "Alternate Long Arrow Down"
}, {
  name: "long-arrow-alt-left",
  search: ["back", "long-arrow-left", "previous"],
  styles: ["solid"],
  label: "Alternate Long Arrow Left"
}, {
  name: "long-arrow-alt-right",
  search: ["forward", "long-arrow-right", "next"],
  styles: ["solid"],
  label: "Alternate Long Arrow Right"
}, {
  name: "long-arrow-alt-up",
  search: ["long-arrow-up", "upload"],
  styles: ["solid"],
  label: "Alternate Long Arrow Up"
}, {
  name: "low-vision",
  search: ["blind", "eye", "sight"],
  styles: ["solid"],
  label: "Low Vision"
}, {
  name: "luggage-cart",
  search: ["bag", "baggage", "suitcase", "travel"],
  styles: ["solid"],
  label: "Luggage Cart"
}, {
  name: "lungs",
  search: ["air", "breath", "covid-19", "organ", "respiratory"],
  styles: ["solid"],
  label: "Lungs"
}, {
  name: "lungs-virus",
  search: ["breath", "covid-19", "respiratory", "sick"],
  styles: ["solid"],
  label: "Lungs Virus"
}, {
  name: "lyft",
  search: [],
  styles: ["brands"],
  label: "lyft"
}, {
  name: "magento",
  search: [],
  styles: ["brands"],
  label: "Magento"
}, {
  name: "magic",
  search: ["autocomplete", "automatic", "mage", "magic", "spell", "wand", "witch", "wizard"],
  styles: ["solid"],
  label: "magic"
}, {
  name: "magnet",
  search: ["Attract", "lodestone", "tool"],
  styles: ["solid"],
  label: "magnet"
}, {
  name: "mail-bulk",
  search: ["archive", "envelope", "letter", "post office", "postal", "postcard", "send", "stamp", "usps"],
  styles: ["solid"],
  label: "Mail Bulk"
}, {
  name: "mailchimp",
  search: [],
  styles: ["brands"],
  label: "Mailchimp"
}, {
  name: "male",
  search: ["human", "man", "person", "profile", "user"],
  styles: ["solid"],
  label: "Male"
}, {
  name: "mandalorian",
  search: [],
  styles: ["brands"],
  label: "Mandalorian"
}, {
  name: "map",
  search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
  styles: ["solid", "regular"],
  label: "Map"
}, {
  name: "map-marked",
  search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
  styles: ["solid"],
  label: "Map Marked"
}, {
  name: "map-marked-alt",
  search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
  styles: ["solid"],
  label: "Alternate Map Marked"
}, {
  name: "map-marker",
  search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
  styles: ["solid"],
  label: "map-marker"
}, {
  name: "map-marker-alt",
  search: ["address", "coordinates", "destination", "gps", "localize", "location", "map", "navigation", "paper", "pin", "place", "point of interest", "position", "route", "travel"],
  styles: ["solid"],
  label: "Alternate Map Marker"
}, {
  name: "map-pin",
  search: ["address", "agree", "coordinates", "destination", "gps", "localize", "location", "map", "marker", "navigation", "pin", "place", "position", "travel"],
  styles: ["solid"],
  label: "Map Pin"
}, {
  name: "map-signs",
  search: ["directions", "directory", "map", "signage", "wayfinding"],
  styles: ["solid"],
  label: "Map Signs"
}, {
  name: "markdown",
  search: [],
  styles: ["brands"],
  label: "Markdown"
}, {
  name: "marker",
  search: ["design", "edit", "sharpie", "update", "write"],
  styles: ["solid"],
  label: "Marker"
}, {
  name: "mars",
  search: ["male"],
  styles: ["solid"],
  label: "Mars"
}, {
  name: "mars-double",
  search: [],
  styles: ["solid"],
  label: "Mars Double"
}, {
  name: "mars-stroke",
  search: [],
  styles: ["solid"],
  label: "Mars Stroke"
}, {
  name: "mars-stroke-h",
  search: [],
  styles: ["solid"],
  label: "Mars Stroke Horizontal"
}, {
  name: "mars-stroke-v",
  search: [],
  styles: ["solid"],
  label: "Mars Stroke Vertical"
}, {
  name: "mask",
  search: ["carnivale", "costume", "disguise", "halloween", "secret", "super hero"],
  styles: ["solid"],
  label: "Mask"
}, {
  name: "mastodon",
  search: [],
  styles: ["brands"],
  label: "Mastodon"
}, {
  name: "maxcdn",
  search: [],
  styles: ["brands"],
  label: "MaxCDN"
}, {
  name: "mdb",
  search: [],
  styles: ["brands"],
  label: "Material Design for Bootstrap"
}, {
  name: "medal",
  search: ["award", "ribbon", "star", "trophy"],
  styles: ["solid"],
  label: "Medal"
}, {
  name: "medapps",
  search: [],
  styles: ["brands"],
  label: "MedApps"
}, {
  name: "medium",
  search: [],
  styles: ["brands"],
  label: "Medium"
}, {
  name: "medium-m",
  search: [],
  styles: ["brands"],
  label: "Medium M"
}, {
  name: "medkit",
  search: ["first aid", "firstaid", "health", "help", "support"],
  styles: ["solid"],
  label: "medkit"
}, {
  name: "medrt",
  search: [],
  styles: ["brands"],
  label: "MRT"
}, {
  name: "meetup",
  search: [],
  styles: ["brands"],
  label: "Meetup"
}, {
  name: "megaport",
  search: [],
  styles: ["brands"],
  label: "Megaport"
}, {
  name: "meh",
  search: ["emoticon", "face", "neutral", "rating"],
  styles: ["solid", "regular"],
  label: "Neutral Face"
}, {
  name: "meh-blank",
  search: ["emoticon", "face", "neutral", "rating"],
  styles: ["solid", "regular"],
  label: "Face Without Mouth"
}, {
  name: "meh-rolling-eyes",
  search: ["emoticon", "face", "neutral", "rating"],
  styles: ["solid", "regular"],
  label: "Face With Rolling Eyes"
}, {
  name: "memory",
  search: ["DIMM", "RAM", "hardware", "storage", "technology"],
  styles: ["solid"],
  label: "Memory"
}, {
  name: "mendeley",
  search: [],
  styles: ["brands"],
  label: "Mendeley"
}, {
  name: "menorah",
  search: ["candle", "hanukkah", "jewish", "judaism", "light"],
  styles: ["solid"],
  label: "Menorah"
}, {
  name: "mercury",
  search: ["transgender"],
  styles: ["solid"],
  label: "Mercury"
}, {
  name: "meteor",
  search: ["armageddon", "asteroid", "comet", "shooting star", "space"],
  styles: ["solid"],
  label: "Meteor"
}, {
  name: "microblog",
  search: [],
  styles: ["brands"],
  label: "Micro.blog"
}, {
  name: "microchip",
  search: ["cpu", "hardware", "processor", "technology"],
  styles: ["solid"],
  label: "Microchip"
}, {
  name: "microphone",
  search: ["audio", "podcast", "record", "sing", "sound", "voice"],
  styles: ["solid"],
  label: "microphone"
}, {
  name: "microphone-alt",
  search: ["audio", "podcast", "record", "sing", "sound", "voice"],
  styles: ["solid"],
  label: "Alternate Microphone"
}, {
  name: "microphone-alt-slash",
  search: ["audio", "disable", "mute", "podcast", "record", "sing", "sound", "voice"],
  styles: ["solid"],
  label: "Alternate Microphone Slash"
}, {
  name: "microphone-slash",
  search: ["audio", "disable", "mute", "podcast", "record", "sing", "sound", "voice"],
  styles: ["solid"],
  label: "Microphone Slash"
}, {
  name: "microscope",
  search: ["covid-19", "electron", "lens", "optics", "science", "shrink"],
  styles: ["solid"],
  label: "Microscope"
}, {
  name: "microsoft",
  search: [],
  styles: ["brands"],
  label: "Microsoft"
}, {
  name: "minus",
  search: ["collapse", "delete", "hide", "minify", "negative", "remove", "trash"],
  styles: ["solid"],
  label: "minus"
}, {
  name: "minus-circle",
  search: ["delete", "hide", "negative", "remove", "shape", "trash"],
  styles: ["solid"],
  label: "Minus Circle"
}, {
  name: "minus-square",
  search: ["collapse", "delete", "hide", "minify", "negative", "remove", "shape", "trash"],
  styles: ["solid", "regular"],
  label: "Minus Square"
}, {
  name: "mitten",
  search: ["clothing", "cold", "glove", "hands", "knitted", "seasonal", "warmth"],
  styles: ["solid"],
  label: "Mitten"
}, {
  name: "mix",
  search: [],
  styles: ["brands"],
  label: "Mix"
}, {
  name: "mixcloud",
  search: [],
  styles: ["brands"],
  label: "Mixcloud"
}, {
  name: "mixer",
  search: [],
  styles: ["brands"],
  label: "Mixer"
}, {
  name: "mizuni",
  search: [],
  styles: ["brands"],
  label: "Mizuni"
}, {
  name: "mobile",
  search: ["apple", "call", "cell phone", "cellphone", "device", "iphone", "number", "screen", "telephone"],
  styles: ["solid"],
  label: "Mobile Phone"
}, {
  name: "mobile-alt",
  search: ["apple", "call", "cell phone", "cellphone", "device", "iphone", "number", "screen", "telephone"],
  styles: ["solid"],
  label: "Alternate Mobile"
}, {
  name: "modx",
  search: [],
  styles: ["brands"],
  label: "MODX"
}, {
  name: "monero",
  search: [],
  styles: ["brands"],
  label: "Monero"
}, {
  name: "money-bill",
  search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
  styles: ["solid"],
  label: "Money Bill"
}, {
  name: "money-bill-alt",
  search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
  styles: ["solid", "regular"],
  label: "Alternate Money Bill"
}, {
  name: "money-bill-wave",
  search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
  styles: ["solid"],
  label: "Wavy Money Bill"
}, {
  name: "money-bill-wave-alt",
  search: ["buy", "cash", "checkout", "money", "payment", "price", "purchase"],
  styles: ["solid"],
  label: "Alternate Wavy Money Bill"
}, {
  name: "money-check",
  search: ["bank check", "buy", "checkout", "cheque", "money", "payment", "price", "purchase"],
  styles: ["solid"],
  label: "Money Check"
}, {
  name: "money-check-alt",
  search: ["bank check", "buy", "checkout", "cheque", "money", "payment", "price", "purchase"],
  styles: ["solid"],
  label: "Alternate Money Check"
}, {
  name: "monument",
  search: ["building", "historic", "landmark", "memorable"],
  styles: ["solid"],
  label: "Monument"
}, {
  name: "moon",
  search: ["contrast", "crescent", "dark", "lunar", "night"],
  styles: ["solid", "regular"],
  label: "Moon"
}, {
  name: "mortar-pestle",
  search: ["crush", "culinary", "grind", "medical", "mix", "pharmacy", "prescription", "spices"],
  styles: ["solid"],
  label: "Mortar Pestle"
}, {
  name: "mosque",
  search: ["building", "islam", "landmark", "muslim"],
  styles: ["solid"],
  label: "Mosque"
}, {
  name: "motorcycle",
  search: ["bike", "machine", "transportation", "vehicle"],
  styles: ["solid"],
  label: "Motorcycle"
}, {
  name: "mountain",
  search: ["glacier", "hiking", "hill", "landscape", "travel", "view"],
  styles: ["solid"],
  label: "Mountain"
}, {
  name: "mouse",
  search: ["click", "computer", "cursor", "input", "peripheral"],
  styles: ["solid"],
  label: "Mouse"
}, {
  name: "mouse-pointer",
  search: ["arrow", "cursor", "select"],
  styles: ["solid"],
  label: "Mouse Pointer"
}, {
  name: "mug-hot",
  search: ["caliente", "cocoa", "coffee", "cup", "drink", "holiday", "hot chocolate", "steam", "tea", "warmth"],
  styles: ["solid"],
  label: "Mug Hot"
}, {
  name: "music",
  search: ["lyrics", "melody", "note", "sing", "sound"],
  styles: ["solid"],
  label: "Music"
}, {
  name: "napster",
  search: [],
  styles: ["brands"],
  label: "Napster"
}, {
  name: "neos",
  search: [],
  styles: ["brands"],
  label: "Neos"
}, {
  name: "network-wired",
  search: ["computer", "connect", "ethernet", "internet", "intranet"],
  styles: ["solid"],
  label: "Wired Network"
}, {
  name: "neuter",
  search: [],
  styles: ["solid"],
  label: "Neuter"
}, {
  name: "newspaper",
  search: ["article", "editorial", "headline", "journal", "journalism", "news", "press"],
  styles: ["solid", "regular"],
  label: "Newspaper"
}, {
  name: "nimblr",
  search: [],
  styles: ["brands"],
  label: "Nimblr"
}, {
  name: "node",
  search: [],
  styles: ["brands"],
  label: "Node.js"
}, {
  name: "node-js",
  search: [],
  styles: ["brands"],
  label: "Node.js JS"
}, {
  name: "not-equal",
  search: ["arithmetic", "compare", "math"],
  styles: ["solid"],
  label: "Not Equal"
}, {
  name: "notes-medical",
  search: ["clipboard", "doctor", "ehr", "health", "history", "records"],
  styles: ["solid"],
  label: "Medical Notes"
}, {
  name: "npm",
  search: [],
  styles: ["brands"],
  label: "npm"
}, {
  name: "ns8",
  search: [],
  styles: ["brands"],
  label: "NS8"
}, {
  name: "nutritionix",
  search: [],
  styles: ["brands"],
  label: "Nutritionix"
}, {
  name: "object-group",
  search: ["combine", "copy", "design", "merge", "select"],
  styles: ["solid", "regular"],
  label: "Object Group"
}, {
  name: "object-ungroup",
  search: ["copy", "design", "merge", "select", "separate"],
  styles: ["solid", "regular"],
  label: "Object Ungroup"
}, {
  name: "odnoklassniki",
  search: [],
  styles: ["brands"],
  label: "Odnoklassniki"
}, {
  name: "odnoklassniki-square",
  search: [],
  styles: ["brands"],
  label: "Odnoklassniki Square"
}, {
  name: "oil-can",
  search: ["auto", "crude", "gasoline", "grease", "lubricate", "petroleum"],
  styles: ["solid"],
  label: "Oil Can"
}, {
  name: "old-republic",
  search: ["politics", "star wars"],
  styles: ["brands"],
  label: "Old Republic"
}, {
  name: "om",
  search: ["buddhism", "hinduism", "jainism", "mantra"],
  styles: ["solid"],
  label: "Om"
}, {
  name: "opencart",
  search: [],
  styles: ["brands"],
  label: "OpenCart"
}, {
  name: "openid",
  search: [],
  styles: ["brands"],
  label: "OpenID"
}, {
  name: "opera",
  search: [],
  styles: ["brands"],
  label: "Opera"
}, {
  name: "optin-monster",
  search: [],
  styles: ["brands"],
  label: "Optin Monster"
}, {
  name: "orcid",
  search: [],
  styles: ["brands"],
  label: "ORCID"
}, {
  name: "osi",
  search: [],
  styles: ["brands"],
  label: "Open Source Initiative"
}, {
  name: "otter",
  search: ["animal", "badger", "fauna", "fur", "mammal", "marten"],
  styles: ["solid"],
  label: "Otter"
}, {
  name: "outdent",
  search: ["align", "justify", "paragraph", "tab"],
  styles: ["solid"],
  label: "Outdent"
}, {
  name: "page4",
  search: [],
  styles: ["brands"],
  label: "page4 Corporation"
}, {
  name: "pagelines",
  search: ["eco", "flora", "leaf", "leaves", "nature", "plant", "tree"],
  styles: ["brands"],
  label: "Pagelines"
}, {
  name: "pager",
  search: ["beeper", "cellphone", "communication"],
  styles: ["solid"],
  label: "Pager"
}, {
  name: "paint-brush",
  search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
  styles: ["solid"],
  label: "Paint Brush"
}, {
  name: "paint-roller",
  search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
  styles: ["solid"],
  label: "Paint Roller"
}, {
  name: "palette",
  search: ["acrylic", "art", "brush", "color", "fill", "paint", "pigment", "watercolor"],
  styles: ["solid"],
  label: "Palette"
}, {
  name: "palfed",
  search: [],
  styles: ["brands"],
  label: "Palfed"
}, {
  name: "pallet",
  search: ["archive", "box", "inventory", "shipping", "warehouse"],
  styles: ["solid"],
  label: "Pallet"
}, {
  name: "paper-plane",
  search: ["air", "float", "fold", "mail", "paper", "send"],
  styles: ["solid", "regular"],
  label: "Paper Plane"
}, {
  name: "paperclip",
  search: ["attach", "attachment", "connect", "link"],
  styles: ["solid"],
  label: "Paperclip"
}, {
  name: "parachute-box",
  search: ["aid", "assistance", "rescue", "supplies"],
  styles: ["solid"],
  label: "Parachute Box"
}, {
  name: "paragraph",
  search: ["edit", "format", "text", "writing"],
  styles: ["solid"],
  label: "paragraph"
}, {
  name: "parking",
  search: ["auto", "car", "garage", "meter"],
  styles: ["solid"],
  label: "Parking"
}, {
  name: "passport",
  search: ["document", "id", "identification", "issued", "travel"],
  styles: ["solid"],
  label: "Passport"
}, {
  name: "pastafarianism",
  search: ["agnosticism", "atheism", "flying spaghetti monster", "fsm"],
  styles: ["solid"],
  label: "Pastafarianism"
}, {
  name: "paste",
  search: ["clipboard", "copy", "document", "paper"],
  styles: ["solid"],
  label: "Paste"
}, {
  name: "patreon",
  search: [],
  styles: ["brands"],
  label: "Patreon"
}, {
  name: "pause",
  search: ["hold", "wait"],
  styles: ["solid"],
  label: "pause"
}, {
  name: "pause-circle",
  search: ["hold", "wait"],
  styles: ["solid", "regular"],
  label: "Pause Circle"
}, {
  name: "paw",
  search: ["animal", "cat", "dog", "pet", "print"],
  styles: ["solid"],
  label: "Paw"
}, {
  name: "paypal",
  search: [],
  styles: ["brands"],
  label: "Paypal"
}, {
  name: "peace",
  search: ["serenity", "tranquility", "truce", "war"],
  styles: ["solid"],
  label: "Peace"
}, {
  name: "pen",
  search: ["design", "edit", "update", "write"],
  styles: ["solid"],
  label: "Pen"
}, {
  name: "pen-alt",
  search: ["design", "edit", "update", "write"],
  styles: ["solid"],
  label: "Alternate Pen"
}, {
  name: "pen-fancy",
  search: ["design", "edit", "fountain pen", "update", "write"],
  styles: ["solid"],
  label: "Pen Fancy"
}, {
  name: "pen-nib",
  search: ["design", "edit", "fountain pen", "update", "write"],
  styles: ["solid"],
  label: "Pen Nib"
}, {
  name: "pen-square",
  search: ["edit", "pencil-square", "update", "write"],
  styles: ["solid"],
  label: "Pen Square"
}, {
  name: "pencil-alt",
  search: ["design", "edit", "pencil", "update", "write"],
  styles: ["solid"],
  label: "Alternate Pencil"
}, {
  name: "pencil-ruler",
  search: ["design", "draft", "draw", "pencil"],
  styles: ["solid"],
  label: "Pencil Ruler"
}, {
  name: "penny-arcade",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "pax", "tabletop"],
  styles: ["brands"],
  label: "Penny Arcade"
}, {
  name: "people-arrows",
  search: ["covid-19", "personal space", "social distance", "space", "spread", "users"],
  styles: ["solid"],
  label: "People Arrows"
}, {
  name: "people-carry",
  search: ["box", "carry", "fragile", "help", "movers", "package"],
  styles: ["solid"],
  label: "People Carry"
}, {
  name: "pepper-hot",
  search: ["buffalo wings", "capsicum", "chili", "chilli", "habanero", "jalapeno", "mexican", "spicy", "tabasco", "vegetable"],
  styles: ["solid"],
  label: "Hot Pepper"
}, {
  name: "percent",
  search: ["discount", "fraction", "proportion", "rate", "ratio"],
  styles: ["solid"],
  label: "Percent"
}, {
  name: "percentage",
  search: ["discount", "fraction", "proportion", "rate", "ratio"],
  styles: ["solid"],
  label: "Percentage"
}, {
  name: "periscope",
  search: [],
  styles: ["brands"],
  label: "Periscope"
}, {
  name: "person-booth",
  search: ["changing", "changing room", "election", "human", "person", "vote", "voting"],
  styles: ["solid"],
  label: "Person Entering Booth"
}, {
  name: "phabricator",
  search: [],
  styles: ["brands"],
  label: "Phabricator"
}, {
  name: "phoenix-framework",
  search: [],
  styles: ["brands"],
  label: "Phoenix Framework"
}, {
  name: "phoenix-squadron",
  search: [],
  styles: ["brands"],
  label: "Phoenix Squadron"
}, {
  name: "phone",
  search: ["call", "earphone", "number", "support", "telephone", "voice"],
  styles: ["solid"],
  label: "Phone"
}, {
  name: "phone-alt",
  search: ["call", "earphone", "number", "support", "telephone", "voice"],
  styles: ["solid"],
  label: "Alternate Phone"
}, {
  name: "phone-slash",
  search: ["call", "cancel", "earphone", "mute", "number", "support", "telephone", "voice"],
  styles: ["solid"],
  label: "Phone Slash"
}, {
  name: "phone-square",
  search: ["call", "earphone", "number", "support", "telephone", "voice"],
  styles: ["solid"],
  label: "Phone Square"
}, {
  name: "phone-square-alt",
  search: ["call", "earphone", "number", "support", "telephone", "voice"],
  styles: ["solid"],
  label: "Alternate Phone Square"
}, {
  name: "phone-volume",
  search: ["call", "earphone", "number", "sound", "support", "telephone", "voice", "volume-control-phone"],
  styles: ["solid"],
  label: "Phone Volume"
}, {
  name: "photo-video",
  search: ["av", "film", "image", "library", "media"],
  styles: ["solid"],
  label: "Photo Video"
}, {
  name: "php",
  search: [],
  styles: ["brands"],
  label: "PHP"
}, {
  name: "pied-piper",
  search: [],
  styles: ["brands"],
  label: "Pied Piper Logo"
}, {
  name: "pied-piper-alt",
  search: [],
  styles: ["brands"],
  label: "Alternate Pied Piper Logo (Old)"
}, {
  name: "pied-piper-hat",
  search: ["clothing"],
  styles: ["brands"],
  label: "Pied Piper Hat (Old)"
}, {
  name: "pied-piper-pp",
  search: [],
  styles: ["brands"],
  label: "Pied Piper PP Logo (Old)"
}, {
  name: "pied-piper-square",
  search: [],
  styles: ["brands"],
  label: "Pied Piper Square Logo (Old)"
}, {
  name: "piggy-bank",
  search: ["bank", "save", "savings"],
  styles: ["solid"],
  label: "Piggy Bank"
}, {
  name: "pills",
  search: ["drugs", "medicine", "prescription", "tablets"],
  styles: ["solid"],
  label: "Pills"
}, {
  name: "pinterest",
  search: [],
  styles: ["brands"],
  label: "Pinterest"
}, {
  name: "pinterest-p",
  search: [],
  styles: ["brands"],
  label: "Pinterest P"
}, {
  name: "pinterest-square",
  search: [],
  styles: ["brands"],
  label: "Pinterest Square"
}, {
  name: "pizza-slice",
  search: ["cheese", "chicago", "italian", "mozzarella", "new york", "pepperoni", "pie", "slice", "teenage mutant ninja turtles", "tomato"],
  styles: ["solid"],
  label: "Pizza Slice"
}, {
  name: "place-of-worship",
  search: ["building", "church", "holy", "mosque", "synagogue"],
  styles: ["solid"],
  label: "Place of Worship"
}, {
  name: "plane",
  search: ["airplane", "destination", "fly", "location", "mode", "travel", "trip"],
  styles: ["solid"],
  label: "plane"
}, {
  name: "plane-arrival",
  search: ["airplane", "arriving", "destination", "fly", "land", "landing", "location", "mode", "travel", "trip"],
  styles: ["solid"],
  label: "Plane Arrival"
}, {
  name: "plane-departure",
  search: ["airplane", "departing", "destination", "fly", "location", "mode", "take off", "taking off", "travel", "trip"],
  styles: ["solid"],
  label: "Plane Departure"
}, {
  name: "plane-slash",
  search: ["airplane mode", "canceled", "covid-19", "delayed", "grounded", "travel"],
  styles: ["solid"],
  label: "Plane Slash"
}, {
  name: "play",
  search: ["audio", "music", "playing", "sound", "start", "video"],
  styles: ["solid"],
  label: "play"
}, {
  name: "play-circle",
  search: ["audio", "music", "playing", "sound", "start", "video"],
  styles: ["solid", "regular"],
  label: "Play Circle"
}, {
  name: "playstation",
  search: [],
  styles: ["brands"],
  label: "PlayStation"
}, {
  name: "plug",
  search: ["connect", "electric", "online", "power"],
  styles: ["solid"],
  label: "Plug"
}, {
  name: "plus",
  search: ["add", "create", "expand", "new", "positive", "shape"],
  styles: ["solid"],
  label: "plus"
}, {
  name: "plus-circle",
  search: ["add", "create", "expand", "new", "positive", "shape"],
  styles: ["solid"],
  label: "Plus Circle"
}, {
  name: "plus-square",
  search: ["add", "create", "expand", "new", "positive", "shape"],
  styles: ["solid", "regular"],
  label: "Plus Square"
}, {
  name: "podcast",
  search: ["audio", "broadcast", "music", "sound"],
  styles: ["solid"],
  label: "Podcast"
}, {
  name: "poll",
  search: ["results", "survey", "trend", "vote", "voting"],
  styles: ["solid"],
  label: "Poll"
}, {
  name: "poll-h",
  search: ["results", "survey", "trend", "vote", "voting"],
  styles: ["solid"],
  label: "Poll H"
}, {
  name: "poo",
  search: ["crap", "poop", "shit", "smile", "turd"],
  styles: ["solid"],
  label: "Poo"
}, {
  name: "poo-storm",
  search: ["bolt", "cloud", "euphemism", "lightning", "mess", "poop", "shit", "turd"],
  styles: ["solid"],
  label: "Poo Storm"
}, {
  name: "poop",
  search: ["crap", "poop", "shit", "smile", "turd"],
  styles: ["solid"],
  label: "Poop"
}, {
  name: "portrait",
  search: ["id", "image", "photo", "picture", "selfie"],
  styles: ["solid"],
  label: "Portrait"
}, {
  name: "pound-sign",
  search: ["currency", "gbp", "money"],
  styles: ["solid"],
  label: "Pound Sign"
}, {
  name: "power-off",
  search: ["cancel", "computer", "on", "reboot", "restart"],
  styles: ["solid"],
  label: "Power Off"
}, {
  name: "pray",
  search: ["kneel", "preach", "religion", "worship"],
  styles: ["solid"],
  label: "Pray"
}, {
  name: "praying-hands",
  search: ["kneel", "preach", "religion", "worship"],
  styles: ["solid"],
  label: "Praying Hands"
}, {
  name: "prescription",
  search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
  styles: ["solid"],
  label: "Prescription"
}, {
  name: "prescription-bottle",
  search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
  styles: ["solid"],
  label: "Prescription Bottle"
}, {
  name: "prescription-bottle-alt",
  search: ["drugs", "medical", "medicine", "pharmacy", "rx"],
  styles: ["solid"],
  label: "Alternate Prescription Bottle"
}, {
  name: "print",
  search: ["business", "copy", "document", "office", "paper"],
  styles: ["solid"],
  label: "print"
}, {
  name: "procedures",
  search: ["EKG", "bed", "electrocardiogram", "health", "hospital", "life", "patient", "vital"],
  styles: ["solid"],
  label: "Procedures"
}, {
  name: "product-hunt",
  search: [],
  styles: ["brands"],
  label: "Product Hunt"
}, {
  name: "project-diagram",
  search: ["chart", "graph", "network", "pert"],
  styles: ["solid"],
  label: "Project Diagram"
}, {
  name: "pump-medical",
  search: ["anti-bacterial", "clean", "covid-19", "disinfect", "hygiene", "medical grade", "sanitizer", "soap"],
  styles: ["solid"],
  label: "Pump Medical"
}, {
  name: "pump-soap",
  search: ["anti-bacterial", "clean", "covid-19", "disinfect", "hygiene", "sanitizer", "soap"],
  styles: ["solid"],
  label: "Pump Soap"
}, {
  name: "pushed",
  search: [],
  styles: ["brands"],
  label: "Pushed"
}, {
  name: "puzzle-piece",
  search: ["add-on", "addon", "game", "section"],
  styles: ["solid"],
  label: "Puzzle Piece"
}, {
  name: "python",
  search: [],
  styles: ["brands"],
  label: "Python"
}, {
  name: "qq",
  search: [],
  styles: ["brands"],
  label: "QQ"
}, {
  name: "qrcode",
  search: ["barcode", "info", "information", "scan"],
  styles: ["solid"],
  label: "qrcode"
}, {
  name: "question",
  search: ["help", "information", "support", "unknown"],
  styles: ["solid"],
  label: "Question"
}, {
  name: "question-circle",
  search: ["help", "information", "support", "unknown"],
  styles: ["solid", "regular"],
  label: "Question Circle"
}, {
  name: "quidditch",
  search: ["ball", "bludger", "broom", "golden snitch", "harry potter", "hogwarts", "quaffle", "sport", "wizard"],
  styles: ["solid"],
  label: "Quidditch"
}, {
  name: "quinscape",
  search: [],
  styles: ["brands"],
  label: "QuinScape"
}, {
  name: "quora",
  search: [],
  styles: ["brands"],
  label: "Quora"
}, {
  name: "quote-left",
  search: ["mention", "note", "phrase", "text", "type"],
  styles: ["solid"],
  label: "quote-left"
}, {
  name: "quote-right",
  search: ["mention", "note", "phrase", "text", "type"],
  styles: ["solid"],
  label: "quote-right"
}, {
  name: "quran",
  search: ["book", "islam", "muslim", "religion"],
  styles: ["solid"],
  label: "Quran"
}, {
  name: "r-project",
  search: [],
  styles: ["brands"],
  label: "R Project"
}, {
  name: "radiation",
  search: ["danger", "dangerous", "deadly", "hazard", "nuclear", "radioactive", "warning"],
  styles: ["solid"],
  label: "Radiation"
}, {
  name: "radiation-alt",
  search: ["danger", "dangerous", "deadly", "hazard", "nuclear", "radioactive", "warning"],
  styles: ["solid"],
  label: "Alternate Radiation"
}, {
  name: "rainbow",
  search: ["gold", "leprechaun", "prism", "rain", "sky"],
  styles: ["solid"],
  label: "Rainbow"
}, {
  name: "random",
  search: ["arrows", "shuffle", "sort", "swap", "switch", "transfer"],
  styles: ["solid"],
  label: "random"
}, {
  name: "raspberry-pi",
  search: [],
  styles: ["brands"],
  label: "Raspberry Pi"
}, {
  name: "ravelry",
  search: [],
  styles: ["brands"],
  label: "Ravelry"
}, {
  name: "react",
  search: [],
  styles: ["brands"],
  label: "React"
}, {
  name: "reacteurope",
  search: [],
  styles: ["brands"],
  label: "ReactEurope"
}, {
  name: "readme",
  search: [],
  styles: ["brands"],
  label: "ReadMe"
}, {
  name: "rebel",
  search: [],
  styles: ["brands"],
  label: "Rebel Alliance"
}, {
  name: "receipt",
  search: ["check", "invoice", "money", "pay", "table"],
  styles: ["solid"],
  label: "Receipt"
}, {
  name: "record-vinyl",
  search: ["LP", "album", "analog", "music", "phonograph", "sound"],
  styles: ["solid"],
  label: "Record Vinyl"
}, {
  name: "recycle",
  search: ["Waste", "compost", "garbage", "reuse", "trash"],
  styles: ["solid"],
  label: "Recycle"
}, {
  name: "red-river",
  search: [],
  styles: ["brands"],
  label: "red river"
}, {
  name: "reddit",
  search: [],
  styles: ["brands"],
  label: "reddit Logo"
}, {
  name: "reddit-alien",
  search: [],
  styles: ["brands"],
  label: "reddit Alien"
}, {
  name: "reddit-square",
  search: [],
  styles: ["brands"],
  label: "reddit Square"
}, {
  name: "redhat",
  search: ["linux", "operating system", "os"],
  styles: ["brands"],
  label: "Redhat"
}, {
  name: "redo",
  search: ["forward", "refresh", "reload", "repeat"],
  styles: ["solid"],
  label: "Redo"
}, {
  name: "redo-alt",
  search: ["forward", "refresh", "reload", "repeat"],
  styles: ["solid"],
  label: "Alternate Redo"
}, {
  name: "registered",
  search: ["copyright", "mark", "trademark"],
  styles: ["solid", "regular"],
  label: "Registered Trademark"
}, {
  name: "remove-format",
  search: ["cancel", "font", "format", "remove", "style", "text"],
  styles: ["solid"],
  label: "Remove Format"
}, {
  name: "renren",
  search: [],
  styles: ["brands"],
  label: "Renren"
}, {
  name: "reply",
  search: ["mail", "message", "respond"],
  styles: ["solid"],
  label: "Reply"
}, {
  name: "reply-all",
  search: ["mail", "message", "respond"],
  styles: ["solid"],
  label: "reply-all"
}, {
  name: "replyd",
  search: [],
  styles: ["brands"],
  label: "replyd"
}, {
  name: "republican",
  search: ["american", "conservative", "election", "elephant", "politics", "republican party", "right", "right-wing", "usa"],
  styles: ["solid"],
  label: "Republican"
}, {
  name: "researchgate",
  search: [],
  styles: ["brands"],
  label: "Researchgate"
}, {
  name: "resolving",
  search: [],
  styles: ["brands"],
  label: "Resolving"
}, {
  name: "restroom",
  search: ["bathroom", "john", "loo", "potty", "washroom", "waste", "wc"],
  styles: ["solid"],
  label: "Restroom"
}, {
  name: "retweet",
  search: ["refresh", "reload", "share", "swap"],
  styles: ["solid"],
  label: "Retweet"
}, {
  name: "rev",
  search: [],
  styles: ["brands"],
  label: "Rev.io"
}, {
  name: "ribbon",
  search: ["badge", "cause", "lapel", "pin"],
  styles: ["solid"],
  label: "Ribbon"
}, {
  name: "ring",
  search: ["Dungeons & Dragons", "Gollum", "band", "binding", "d&d", "dnd", "engagement", "fantasy", "gold", "jewelry", "marriage", "precious"],
  styles: ["solid"],
  label: "Ring"
}, {
  name: "road",
  search: ["highway", "map", "pavement", "route", "street", "travel"],
  styles: ["solid"],
  label: "road"
}, {
  name: "robot",
  search: ["android", "automate", "computer", "cyborg"],
  styles: ["solid"],
  label: "Robot"
}, {
  name: "rocket",
  search: ["aircraft", "app", "jet", "launch", "nasa", "space"],
  styles: ["solid"],
  label: "rocket"
}, {
  name: "rocketchat",
  search: [],
  styles: ["brands"],
  label: "Rocket.Chat"
}, {
  name: "rockrms",
  search: [],
  styles: ["brands"],
  label: "Rockrms"
}, {
  name: "route",
  search: ["directions", "navigation", "travel"],
  styles: ["solid"],
  label: "Route"
}, {
  name: "rss",
  search: ["blog", "feed", "journal", "news", "writing"],
  styles: ["solid"],
  label: "rss"
}, {
  name: "rss-square",
  search: ["blog", "feed", "journal", "news", "writing"],
  styles: ["solid"],
  label: "RSS Square"
}, {
  name: "ruble-sign",
  search: ["currency", "money", "rub"],
  styles: ["solid"],
  label: "Ruble Sign"
}, {
  name: "ruler",
  search: ["design", "draft", "length", "measure", "planning"],
  styles: ["solid"],
  label: "Ruler"
}, {
  name: "ruler-combined",
  search: ["design", "draft", "length", "measure", "planning"],
  styles: ["solid"],
  label: "Ruler Combined"
}, {
  name: "ruler-horizontal",
  search: ["design", "draft", "length", "measure", "planning"],
  styles: ["solid"],
  label: "Ruler Horizontal"
}, {
  name: "ruler-vertical",
  search: ["design", "draft", "length", "measure", "planning"],
  styles: ["solid"],
  label: "Ruler Vertical"
}, {
  name: "running",
  search: ["exercise", "health", "jog", "person", "run", "sport", "sprint"],
  styles: ["solid"],
  label: "Running"
}, {
  name: "rupee-sign",
  search: ["currency", "indian", "inr", "money"],
  styles: ["solid"],
  label: "Indian Rupee Sign"
}, {
  name: "sad-cry",
  search: ["emoticon", "face", "tear", "tears"],
  styles: ["solid", "regular"],
  label: "Crying Face"
}, {
  name: "sad-tear",
  search: ["emoticon", "face", "tear", "tears"],
  styles: ["solid", "regular"],
  label: "Loudly Crying Face"
}, {
  name: "safari",
  search: ["browser"],
  styles: ["brands"],
  label: "Safari"
}, {
  name: "salesforce",
  search: [],
  styles: ["brands"],
  label: "Salesforce"
}, {
  name: "sass",
  search: [],
  styles: ["brands"],
  label: "Sass"
}, {
  name: "satellite",
  search: ["communications", "hardware", "orbit", "space"],
  styles: ["solid"],
  label: "Satellite"
}, {
  name: "satellite-dish",
  search: ["SETI", "communications", "hardware", "receiver", "saucer", "signal", "space"],
  styles: ["solid"],
  label: "Satellite Dish"
}, {
  name: "save",
  search: ["disk", "download", "floppy", "floppy-o"],
  styles: ["solid", "regular"],
  label: "Save"
}, {
  name: "schlix",
  search: [],
  styles: ["brands"],
  label: "SCHLIX"
}, {
  name: "school",
  search: ["building", "education", "learn", "student", "teacher"],
  styles: ["solid"],
  label: "School"
}, {
  name: "screwdriver",
  search: ["admin", "fix", "mechanic", "repair", "settings", "tool"],
  styles: ["solid"],
  label: "Screwdriver"
}, {
  name: "scribd",
  search: [],
  styles: ["brands"],
  label: "Scribd"
}, {
  name: "scroll",
  search: ["Dungeons & Dragons", "announcement", "d&d", "dnd", "fantasy", "paper", "script"],
  styles: ["solid"],
  label: "Scroll"
}, {
  name: "sd-card",
  search: ["image", "memory", "photo", "save"],
  styles: ["solid"],
  label: "Sd Card"
}, {
  name: "search",
  search: ["bigger", "enlarge", "find", "magnify", "preview", "zoom"],
  styles: ["solid"],
  label: "Search"
}, {
  name: "search-dollar",
  search: ["bigger", "enlarge", "find", "magnify", "money", "preview", "zoom"],
  styles: ["solid"],
  label: "Search Dollar"
}, {
  name: "search-location",
  search: ["bigger", "enlarge", "find", "magnify", "preview", "zoom"],
  styles: ["solid"],
  label: "Search Location"
}, {
  name: "search-minus",
  search: ["minify", "negative", "smaller", "zoom", "zoom out"],
  styles: ["solid"],
  label: "Search Minus"
}, {
  name: "search-plus",
  search: ["bigger", "enlarge", "magnify", "positive", "zoom", "zoom in"],
  styles: ["solid"],
  label: "Search Plus"
}, {
  name: "searchengin",
  search: [],
  styles: ["brands"],
  label: "Searchengin"
}, {
  name: "seedling",
  search: ["flora", "grow", "plant", "vegan"],
  styles: ["solid"],
  label: "Seedling"
}, {
  name: "sellcast",
  search: ["eercast"],
  styles: ["brands"],
  label: "Sellcast"
}, {
  name: "sellsy",
  search: [],
  styles: ["brands"],
  label: "Sellsy"
}, {
  name: "server",
  search: ["computer", "cpu", "database", "hardware", "network"],
  styles: ["solid"],
  label: "Server"
}, {
  name: "servicestack",
  search: [],
  styles: ["brands"],
  label: "Servicestack"
}, {
  name: "shapes",
  search: ["blocks", "build", "circle", "square", "triangle"],
  styles: ["solid"],
  label: "Shapes"
}, {
  name: "share",
  search: ["forward", "save", "send", "social"],
  styles: ["solid"],
  label: "Share"
}, {
  name: "share-alt",
  search: ["forward", "save", "send", "social"],
  styles: ["solid"],
  label: "Alternate Share"
}, {
  name: "share-alt-square",
  search: ["forward", "save", "send", "social"],
  styles: ["solid"],
  label: "Alternate Share Square"
}, {
  name: "share-square",
  search: ["forward", "save", "send", "social"],
  styles: ["solid", "regular"],
  label: "Share Square"
}, {
  name: "shekel-sign",
  search: ["currency", "ils", "money"],
  styles: ["solid"],
  label: "Shekel Sign"
}, {
  name: "shield-alt",
  search: ["achievement", "award", "block", "defend", "security", "winner"],
  styles: ["solid"],
  label: "Alternate Shield"
}, {
  name: "shield-virus",
  search: ["antibodies", "barrier", "covid-19", "health", "protect"],
  styles: ["solid"],
  label: "Shield Virus"
}, {
  name: "ship",
  search: ["boat", "sea", "water"],
  styles: ["solid"],
  label: "Ship"
}, {
  name: "shipping-fast",
  search: ["express", "fedex", "mail", "overnight", "package", "ups"],
  styles: ["solid"],
  label: "Shipping Fast"
}, {
  name: "shirtsinbulk",
  search: [],
  styles: ["brands"],
  label: "Shirts in Bulk"
}, {
  name: "shoe-prints",
  search: ["feet", "footprints", "steps", "walk"],
  styles: ["solid"],
  label: "Shoe Prints"
}, {
  name: "shopify",
  search: [],
  styles: ["brands"],
  label: "Shopify"
}, {
  name: "shopping-bag",
  search: ["buy", "checkout", "grocery", "payment", "purchase"],
  styles: ["solid"],
  label: "Shopping Bag"
}, {
  name: "shopping-basket",
  search: ["buy", "checkout", "grocery", "payment", "purchase"],
  styles: ["solid"],
  label: "Shopping Basket"
}, {
  name: "shopping-cart",
  search: ["buy", "checkout", "grocery", "payment", "purchase"],
  styles: ["solid"],
  label: "shopping-cart"
}, {
  name: "shopware",
  search: [],
  styles: ["brands"],
  label: "Shopware"
}, {
  name: "shower",
  search: ["bath", "clean", "faucet", "water"],
  styles: ["solid"],
  label: "Shower"
}, {
  name: "shuttle-van",
  search: ["airport", "machine", "public-transportation", "transportation", "travel", "vehicle"],
  styles: ["solid"],
  label: "Shuttle Van"
}, {
  name: "sign",
  search: ["directions", "real estate", "signage", "wayfinding"],
  styles: ["solid"],
  label: "Sign"
}, {
  name: "sign-in-alt",
  search: ["arrow", "enter", "join", "log in", "login", "sign in", "sign up", "sign-in", "signin", "signup"],
  styles: ["solid"],
  label: "Alternate Sign In"
}, {
  name: "sign-language",
  search: ["Translate", "asl", "deaf", "hands"],
  styles: ["solid"],
  label: "Sign Language"
}, {
  name: "sign-out-alt",
  search: ["arrow", "exit", "leave", "log out", "logout", "sign-out"],
  styles: ["solid"],
  label: "Alternate Sign Out"
}, {
  name: "signal",
  search: ["bars", "graph", "online", "reception", "status"],
  styles: ["solid"],
  label: "signal"
}, {
  name: "signature",
  search: ["John Hancock", "cursive", "name", "writing"],
  styles: ["solid"],
  label: "Signature"
}, {
  name: "sim-card",
  search: ["hard drive", "hardware", "portable", "storage", "technology", "tiny"],
  styles: ["solid"],
  label: "SIM Card"
}, {
  name: "simplybuilt",
  search: [],
  styles: ["brands"],
  label: "SimplyBuilt"
}, {
  name: "sistrix",
  search: [],
  styles: ["brands"],
  label: "SISTRIX"
}, {
  name: "sitemap",
  search: ["directory", "hierarchy", "ia", "information architecture", "organization"],
  styles: ["solid"],
  label: "Sitemap"
}, {
  name: "sith",
  search: [],
  styles: ["brands"],
  label: "Sith"
}, {
  name: "skating",
  search: ["activity", "figure skating", "fitness", "ice", "person", "winter"],
  styles: ["solid"],
  label: "Skating"
}, {
  name: "sketch",
  search: ["app", "design", "interface"],
  styles: ["brands"],
  label: "Sketch"
}, {
  name: "skiing",
  search: ["activity", "downhill", "fast", "fitness", "olympics", "outdoors", "person", "seasonal", "slalom"],
  styles: ["solid"],
  label: "Skiing"
}, {
  name: "skiing-nordic",
  search: ["activity", "cross country", "fitness", "outdoors", "person", "seasonal"],
  styles: ["solid"],
  label: "Skiing Nordic"
}, {
  name: "skull",
  search: ["bones", "skeleton", "x-ray", "yorick"],
  styles: ["solid"],
  label: "Skull"
}, {
  name: "skull-crossbones",
  search: ["Dungeons & Dragons", "alert", "bones", "d&d", "danger", "dead", "deadly", "death", "dnd", "fantasy", "halloween", "holiday", "jolly-roger", "pirate", "poison", "skeleton", "warning"],
  styles: ["solid"],
  label: "Skull & Crossbones"
}, {
  name: "skyatlas",
  search: [],
  styles: ["brands"],
  label: "skyatlas"
}, {
  name: "skype",
  search: [],
  styles: ["brands"],
  label: "Skype"
}, {
  name: "slack",
  search: ["anchor", "hash", "hashtag"],
  styles: ["brands"],
  label: "Slack Logo"
}, {
  name: "slack-hash",
  search: ["anchor", "hash", "hashtag"],
  styles: ["brands"],
  label: "Slack Hashtag"
}, {
  name: "slash",
  search: ["cancel", "close", "mute", "off", "stop", "x"],
  styles: ["solid"],
  label: "Slash"
}, {
  name: "sleigh",
  search: ["christmas", "claus", "fly", "holiday", "santa", "sled", "snow", "xmas"],
  styles: ["solid"],
  label: "Sleigh"
}, {
  name: "sliders-h",
  search: ["adjust", "settings", "sliders", "toggle"],
  styles: ["solid"],
  label: "Horizontal Sliders"
}, {
  name: "slideshare",
  search: [],
  styles: ["brands"],
  label: "Slideshare"
}, {
  name: "smile",
  search: ["approve", "emoticon", "face", "happy", "rating", "satisfied"],
  styles: ["solid", "regular"],
  label: "Smiling Face"
}, {
  name: "smile-beam",
  search: ["emoticon", "face", "happy", "positive"],
  styles: ["solid", "regular"],
  label: "Beaming Face With Smiling Eyes"
}, {
  name: "smile-wink",
  search: ["emoticon", "face", "happy", "hint", "joke"],
  styles: ["solid", "regular"],
  label: "Winking Face"
}, {
  name: "smog",
  search: ["dragon", "fog", "haze", "pollution", "smoke", "weather"],
  styles: ["solid"],
  label: "Smog"
}, {
  name: "smoking",
  search: ["cancer", "cigarette", "nicotine", "smoking status", "tobacco"],
  styles: ["solid"],
  label: "Smoking"
}, {
  name: "smoking-ban",
  search: ["ban", "cancel", "no smoking", "non-smoking"],
  styles: ["solid"],
  label: "Smoking Ban"
}, {
  name: "sms",
  search: ["chat", "conversation", "message", "mobile", "notification", "phone", "sms", "texting"],
  styles: ["solid"],
  label: "SMS"
}, {
  name: "snapchat",
  search: [],
  styles: ["brands"],
  label: "Snapchat"
}, {
  name: "snapchat-ghost",
  search: [],
  styles: ["brands"],
  label: "Snapchat Ghost"
}, {
  name: "snapchat-square",
  search: [],
  styles: ["brands"],
  label: "Snapchat Square"
}, {
  name: "snowboarding",
  search: ["activity", "fitness", "olympics", "outdoors", "person"],
  styles: ["solid"],
  label: "Snowboarding"
}, {
  name: "snowflake",
  search: ["precipitation", "rain", "winter"],
  styles: ["solid", "regular"],
  label: "Snowflake"
}, {
  name: "snowman",
  search: ["decoration", "frost", "frosty", "holiday"],
  styles: ["solid"],
  label: "Snowman"
}, {
  name: "snowplow",
  search: ["clean up", "cold", "road", "storm", "winter"],
  styles: ["solid"],
  label: "Snowplow"
}, {
  name: "soap",
  search: ["bubbles", "clean", "covid-19", "hygiene", "wash"],
  styles: ["solid"],
  label: "Soap"
}, {
  name: "socks",
  search: ["business socks", "business time", "clothing", "feet", "flight of the conchords", "wednesday"],
  styles: ["solid"],
  label: "Socks"
}, {
  name: "solar-panel",
  search: ["clean", "eco-friendly", "energy", "green", "sun"],
  styles: ["solid"],
  label: "Solar Panel"
}, {
  name: "sort",
  search: ["filter", "order"],
  styles: ["solid"],
  label: "Sort"
}, {
  name: "sort-alpha-down",
  search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-asc"],
  styles: ["solid"],
  label: "Sort Alphabetical Down"
}, {
  name: "sort-alpha-down-alt",
  search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-asc"],
  styles: ["solid"],
  label: "Alternate Sort Alphabetical Down"
}, {
  name: "sort-alpha-up",
  search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-desc"],
  styles: ["solid"],
  label: "Sort Alphabetical Up"
}, {
  name: "sort-alpha-up-alt",
  search: ["alphabetical", "arrange", "filter", "order", "sort-alpha-desc"],
  styles: ["solid"],
  label: "Alternate Sort Alphabetical Up"
}, {
  name: "sort-amount-down",
  search: ["arrange", "filter", "number", "order", "sort-amount-asc"],
  styles: ["solid"],
  label: "Sort Amount Down"
}, {
  name: "sort-amount-down-alt",
  search: ["arrange", "filter", "order", "sort-amount-asc"],
  styles: ["solid"],
  label: "Alternate Sort Amount Down"
}, {
  name: "sort-amount-up",
  search: ["arrange", "filter", "order", "sort-amount-desc"],
  styles: ["solid"],
  label: "Sort Amount Up"
}, {
  name: "sort-amount-up-alt",
  search: ["arrange", "filter", "order", "sort-amount-desc"],
  styles: ["solid"],
  label: "Alternate Sort Amount Up"
}, {
  name: "sort-down",
  search: ["arrow", "descending", "filter", "order", "sort-desc"],
  styles: ["solid"],
  label: "Sort Down (Descending)"
}, {
  name: "sort-numeric-down",
  search: ["arrange", "filter", "numbers", "order", "sort-numeric-asc"],
  styles: ["solid"],
  label: "Sort Numeric Down"
}, {
  name: "sort-numeric-down-alt",
  search: ["arrange", "filter", "numbers", "order", "sort-numeric-asc"],
  styles: ["solid"],
  label: "Alternate Sort Numeric Down"
}, {
  name: "sort-numeric-up",
  search: ["arrange", "filter", "numbers", "order", "sort-numeric-desc"],
  styles: ["solid"],
  label: "Sort Numeric Up"
}, {
  name: "sort-numeric-up-alt",
  search: ["arrange", "filter", "numbers", "order", "sort-numeric-desc"],
  styles: ["solid"],
  label: "Alternate Sort Numeric Up"
}, {
  name: "sort-up",
  search: ["arrow", "ascending", "filter", "order", "sort-asc"],
  styles: ["solid"],
  label: "Sort Up (Ascending)"
}, {
  name: "soundcloud",
  search: [],
  styles: ["brands"],
  label: "SoundCloud"
}, {
  name: "sourcetree",
  search: [],
  styles: ["brands"],
  label: "Sourcetree"
}, {
  name: "spa",
  search: ["flora", "massage", "mindfulness", "plant", "wellness"],
  styles: ["solid"],
  label: "Spa"
}, {
  name: "space-shuttle",
  search: ["astronaut", "machine", "nasa", "rocket", "space", "transportation"],
  styles: ["solid"],
  label: "Space Shuttle"
}, {
  name: "speakap",
  search: [],
  styles: ["brands"],
  label: "Speakap"
}, {
  name: "speaker-deck",
  search: [],
  styles: ["brands"],
  label: "Speaker Deck"
}, {
  name: "spell-check",
  search: ["dictionary", "edit", "editor", "grammar", "text"],
  styles: ["solid"],
  label: "Spell Check"
}, {
  name: "spider",
  search: ["arachnid", "bug", "charlotte", "crawl", "eight", "halloween"],
  styles: ["solid"],
  label: "Spider"
}, {
  name: "spinner",
  search: ["circle", "loading", "progress"],
  styles: ["solid"],
  label: "Spinner"
}, {
  name: "splotch",
  search: ["Ink", "blob", "blotch", "glob", "stain"],
  styles: ["solid"],
  label: "Splotch"
}, {
  name: "spotify",
  search: [],
  styles: ["brands"],
  label: "Spotify"
}, {
  name: "spray-can",
  search: ["Paint", "aerosol", "design", "graffiti", "tag"],
  styles: ["solid"],
  label: "Spray Can"
}, {
  name: "square",
  search: ["block", "box", "shape"],
  styles: ["solid", "regular"],
  label: "Square"
}, {
  name: "square-full",
  search: ["block", "box", "shape"],
  styles: ["solid"],
  label: "Square Full"
}, {
  name: "square-root-alt",
  search: ["arithmetic", "calculus", "division", "math"],
  styles: ["solid"],
  label: "Alternate Square Root"
}, {
  name: "squarespace",
  search: [],
  styles: ["brands"],
  label: "Squarespace"
}, {
  name: "stack-exchange",
  search: [],
  styles: ["brands"],
  label: "Stack Exchange"
}, {
  name: "stack-overflow",
  search: [],
  styles: ["brands"],
  label: "Stack Overflow"
}, {
  name: "stackpath",
  search: [],
  styles: ["brands"],
  label: "Stackpath"
}, {
  name: "stamp",
  search: ["art", "certificate", "imprint", "rubber", "seal"],
  styles: ["solid"],
  label: "Stamp"
}, {
  name: "star",
  search: ["achievement", "award", "favorite", "important", "night", "rating", "score"],
  styles: ["solid", "regular"],
  label: "Star"
}, {
  name: "star-and-crescent",
  search: ["islam", "muslim", "religion"],
  styles: ["solid"],
  label: "Star and Crescent"
}, {
  name: "star-half",
  search: ["achievement", "award", "rating", "score", "star-half-empty", "star-half-full"],
  styles: ["solid", "regular"],
  label: "star-half"
}, {
  name: "star-half-alt",
  search: ["achievement", "award", "rating", "score", "star-half-empty", "star-half-full"],
  styles: ["solid"],
  label: "Alternate Star Half"
}, {
  name: "star-of-david",
  search: ["jewish", "judaism", "religion"],
  styles: ["solid"],
  label: "Star of David"
}, {
  name: "star-of-life",
  search: ["doctor", "emt", "first aid", "health", "medical"],
  styles: ["solid"],
  label: "Star of Life"
}, {
  name: "staylinked",
  search: [],
  styles: ["brands"],
  label: "StayLinked"
}, {
  name: "steam",
  search: [],
  styles: ["brands"],
  label: "Steam"
}, {
  name: "steam-square",
  search: [],
  styles: ["brands"],
  label: "Steam Square"
}, {
  name: "steam-symbol",
  search: [],
  styles: ["brands"],
  label: "Steam Symbol"
}, {
  name: "step-backward",
  search: ["beginning", "first", "previous", "rewind", "start"],
  styles: ["solid"],
  label: "step-backward"
}, {
  name: "step-forward",
  search: ["end", "last", "next"],
  styles: ["solid"],
  label: "step-forward"
}, {
  name: "stethoscope",
  search: ["covid-19", "diagnosis", "doctor", "general practitioner", "hospital", "infirmary", "medicine", "office", "outpatient"],
  styles: ["solid"],
  label: "Stethoscope"
}, {
  name: "sticker-mule",
  search: [],
  styles: ["brands"],
  label: "Sticker Mule"
}, {
  name: "sticky-note",
  search: ["message", "note", "paper", "reminder", "sticker"],
  styles: ["solid", "regular"],
  label: "Sticky Note"
}, {
  name: "stop",
  search: ["block", "box", "square"],
  styles: ["solid"],
  label: "stop"
}, {
  name: "stop-circle",
  search: ["block", "box", "circle", "square"],
  styles: ["solid", "regular"],
  label: "Stop Circle"
}, {
  name: "stopwatch",
  search: ["clock", "reminder", "time"],
  styles: ["solid"],
  label: "Stopwatch"
}, {
  name: "stopwatch-20",
  search: ["ABCs", "countdown", "covid-19", "happy birthday", "i will survive", "reminder", "seconds", "time", "timer"],
  styles: ["solid"],
  label: "Stopwatch 20"
}, {
  name: "store",
  search: ["building", "buy", "purchase", "shopping"],
  styles: ["solid"],
  label: "Store"
}, {
  name: "store-alt",
  search: ["building", "buy", "purchase", "shopping"],
  styles: ["solid"],
  label: "Alternate Store"
}, {
  name: "store-alt-slash",
  search: ["building", "buy", "closed", "covid-19", "purchase", "shopping"],
  styles: ["solid"],
  label: "Alternate Store Slash"
}, {
  name: "store-slash",
  search: ["building", "buy", "closed", "covid-19", "purchase", "shopping"],
  styles: ["solid"],
  label: "Store Slash"
}, {
  name: "strava",
  search: [],
  styles: ["brands"],
  label: "Strava"
}, {
  name: "stream",
  search: ["flow", "list", "timeline"],
  styles: ["solid"],
  label: "Stream"
}, {
  name: "street-view",
  search: ["directions", "location", "map", "navigation"],
  styles: ["solid"],
  label: "Street View"
}, {
  name: "strikethrough",
  search: ["cancel", "edit", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "Strikethrough"
}, {
  name: "stripe",
  search: [],
  styles: ["brands"],
  label: "Stripe"
}, {
  name: "stripe-s",
  search: [],
  styles: ["brands"],
  label: "Stripe S"
}, {
  name: "stroopwafel",
  search: ["caramel", "cookie", "dessert", "sweets", "waffle"],
  styles: ["solid"],
  label: "Stroopwafel"
}, {
  name: "studiovinari",
  search: [],
  styles: ["brands"],
  label: "Studio Vinari"
}, {
  name: "stumbleupon",
  search: [],
  styles: ["brands"],
  label: "StumbleUpon Logo"
}, {
  name: "stumbleupon-circle",
  search: [],
  styles: ["brands"],
  label: "StumbleUpon Circle"
}, {
  name: "subscript",
  search: ["edit", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "subscript"
}, {
  name: "subway",
  search: ["machine", "railway", "train", "transportation", "vehicle"],
  styles: ["solid"],
  label: "Subway"
}, {
  name: "suitcase",
  search: ["baggage", "luggage", "move", "suitcase", "travel", "trip"],
  styles: ["solid"],
  label: "Suitcase"
}, {
  name: "suitcase-rolling",
  search: ["baggage", "luggage", "move", "suitcase", "travel", "trip"],
  styles: ["solid"],
  label: "Suitcase Rolling"
}, {
  name: "sun",
  search: ["brighten", "contrast", "day", "lighter", "sol", "solar", "star", "weather"],
  styles: ["solid", "regular"],
  label: "Sun"
}, {
  name: "superpowers",
  search: [],
  styles: ["brands"],
  label: "Superpowers"
}, {
  name: "superscript",
  search: ["edit", "exponential", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "superscript"
}, {
  name: "supple",
  search: [],
  styles: ["brands"],
  label: "Supple"
}, {
  name: "surprise",
  search: ["emoticon", "face", "shocked"],
  styles: ["solid", "regular"],
  label: "Hushed Face"
}, {
  name: "suse",
  search: ["linux", "operating system", "os"],
  styles: ["brands"],
  label: "Suse"
}, {
  name: "swatchbook",
  search: ["Pantone", "color", "design", "hue", "palette"],
  styles: ["solid"],
  label: "Swatchbook"
}, {
  name: "swift",
  search: [],
  styles: ["brands"],
  label: "Swift"
}, {
  name: "swimmer",
  search: ["athlete", "head", "man", "olympics", "person", "pool", "water"],
  styles: ["solid"],
  label: "Swimmer"
}, {
  name: "swimming-pool",
  search: ["ladder", "recreation", "swim", "water"],
  styles: ["solid"],
  label: "Swimming Pool"
}, {
  name: "symfony",
  search: [],
  styles: ["brands"],
  label: "Symfony"
}, {
  name: "synagogue",
  search: ["building", "jewish", "judaism", "religion", "star of david", "temple"],
  styles: ["solid"],
  label: "Synagogue"
}, {
  name: "sync",
  search: ["exchange", "refresh", "reload", "rotate", "swap"],
  styles: ["solid"],
  label: "Sync"
}, {
  name: "sync-alt",
  search: ["exchange", "refresh", "reload", "rotate", "swap"],
  styles: ["solid"],
  label: "Alternate Sync"
}, {
  name: "syringe",
  search: ["covid-19", "doctor", "immunizations", "medical", "needle"],
  styles: ["solid"],
  label: "Syringe"
}, {
  name: "table",
  search: ["data", "excel", "spreadsheet"],
  styles: ["solid"],
  label: "table"
}, {
  name: "table-tennis",
  search: ["ball", "paddle", "ping pong"],
  styles: ["solid"],
  label: "Table Tennis"
}, {
  name: "tablet",
  search: ["apple", "device", "ipad", "kindle", "screen"],
  styles: ["solid"],
  label: "tablet"
}, {
  name: "tablet-alt",
  search: ["apple", "device", "ipad", "kindle", "screen"],
  styles: ["solid"],
  label: "Alternate Tablet"
}, {
  name: "tablets",
  search: ["drugs", "medicine", "pills", "prescription"],
  styles: ["solid"],
  label: "Tablets"
}, {
  name: "tachometer-alt",
  search: ["dashboard", "fast", "odometer", "speed", "speedometer"],
  styles: ["solid"],
  label: "Alternate Tachometer"
}, {
  name: "tag",
  search: ["discount", "label", "price", "shopping"],
  styles: ["solid"],
  label: "tag"
}, {
  name: "tags",
  search: ["discount", "label", "price", "shopping"],
  styles: ["solid"],
  label: "tags"
}, {
  name: "tape",
  search: ["design", "package", "sticky"],
  styles: ["solid"],
  label: "Tape"
}, {
  name: "tasks",
  search: ["checklist", "downloading", "downloads", "loading", "progress", "project management", "settings", "to do"],
  styles: ["solid"],
  label: "Tasks"
}, {
  name: "taxi",
  search: ["cab", "cabbie", "car", "car service", "lyft", "machine", "transportation", "travel", "uber", "vehicle"],
  styles: ["solid"],
  label: "Taxi"
}, {
  name: "teamspeak",
  search: [],
  styles: ["brands"],
  label: "TeamSpeak"
}, {
  name: "teeth",
  search: ["bite", "dental", "dentist", "gums", "mouth", "smile", "tooth"],
  styles: ["solid"],
  label: "Teeth"
}, {
  name: "teeth-open",
  search: ["dental", "dentist", "gums bite", "mouth", "smile", "tooth"],
  styles: ["solid"],
  label: "Teeth Open"
}, {
  name: "telegram",
  search: [],
  styles: ["brands"],
  label: "Telegram"
}, {
  name: "telegram-plane",
  search: [],
  styles: ["brands"],
  label: "Telegram Plane"
}, {
  name: "temperature-high",
  search: ["cook", "covid-19", "mercury", "summer", "thermometer", "warm"],
  styles: ["solid"],
  label: "High Temperature"
}, {
  name: "temperature-low",
  search: ["cold", "cool", "covid-19", "mercury", "thermometer", "winter"],
  styles: ["solid"],
  label: "Low Temperature"
}, {
  name: "tencent-weibo",
  search: [],
  styles: ["brands"],
  label: "Tencent Weibo"
}, {
  name: "tenge",
  search: ["currency", "kazakhstan", "money", "price"],
  styles: ["solid"],
  label: "Tenge"
}, {
  name: "terminal",
  search: ["code", "command", "console", "development", "prompt"],
  styles: ["solid"],
  label: "Terminal"
}, {
  name: "text-height",
  search: ["edit", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "text-height"
}, {
  name: "text-width",
  search: ["edit", "font", "format", "text", "type"],
  styles: ["solid"],
  label: "Text Width"
}, {
  name: "th",
  search: ["blocks", "boxes", "grid", "squares"],
  styles: ["solid"],
  label: "th"
}, {
  name: "th-large",
  search: ["blocks", "boxes", "grid", "squares"],
  styles: ["solid"],
  label: "th-large"
}, {
  name: "th-list",
  search: ["checklist", "completed", "done", "finished", "ol", "todo", "ul"],
  styles: ["solid"],
  label: "th-list"
}, {
  name: "the-red-yeti",
  search: [],
  styles: ["brands"],
  label: "The Red Yeti"
}, {
  name: "theater-masks",
  search: ["comedy", "perform", "theatre", "tragedy"],
  styles: ["solid"],
  label: "Theater Masks"
}, {
  name: "themeco",
  search: [],
  styles: ["brands"],
  label: "Themeco"
}, {
  name: "themeisle",
  search: [],
  styles: ["brands"],
  label: "ThemeIsle"
}, {
  name: "thermometer",
  search: ["covid-19", "mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer"
}, {
  name: "thermometer-empty",
  search: ["cold", "mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer Empty"
}, {
  name: "thermometer-full",
  search: ["fever", "hot", "mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer Full"
}, {
  name: "thermometer-half",
  search: ["mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer 1/2 Full"
}, {
  name: "thermometer-quarter",
  search: ["mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer 1/4 Full"
}, {
  name: "thermometer-three-quarters",
  search: ["mercury", "status", "temperature"],
  styles: ["solid"],
  label: "Thermometer 3/4 Full"
}, {
  name: "think-peaks",
  search: [],
  styles: ["brands"],
  label: "Think Peaks"
}, {
  name: "thumbs-down",
  search: ["disagree", "disapprove", "dislike", "hand", "social", "thumbs-o-down"],
  styles: ["solid", "regular"],
  label: "thumbs-down"
}, {
  name: "thumbs-up",
  search: ["agree", "approve", "favorite", "hand", "like", "ok", "okay", "social", "success", "thumbs-o-up", "yes", "you got it dude"],
  styles: ["solid", "regular"],
  label: "thumbs-up"
}, {
  name: "thumbtack",
  search: ["coordinates", "location", "marker", "pin", "thumb-tack"],
  styles: ["solid"],
  label: "Thumbtack"
}, {
  name: "ticket-alt",
  search: ["movie", "pass", "support", "ticket"],
  styles: ["solid"],
  label: "Alternate Ticket"
}, {
  name: "times",
  search: ["close", "cross", "error", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"],
  styles: ["solid"],
  label: "Times"
}, {
  name: "times-circle",
  search: ["close", "cross", "exit", "incorrect", "notice", "notification", "notify", "problem", "wrong", "x"],
  styles: ["solid", "regular"],
  label: "Times Circle"
}, {
  name: "tint",
  search: ["color", "drop", "droplet", "raindrop", "waterdrop"],
  styles: ["solid"],
  label: "tint"
}, {
  name: "tint-slash",
  search: ["color", "drop", "droplet", "raindrop", "waterdrop"],
  styles: ["solid"],
  label: "Tint Slash"
}, {
  name: "tired",
  search: ["angry", "emoticon", "face", "grumpy", "upset"],
  styles: ["solid", "regular"],
  label: "Tired Face"
}, {
  name: "toggle-off",
  search: ["switch"],
  styles: ["solid"],
  label: "Toggle Off"
}, {
  name: "toggle-on",
  search: ["switch"],
  styles: ["solid"],
  label: "Toggle On"
}, {
  name: "toilet",
  search: ["bathroom", "flush", "john", "loo", "pee", "plumbing", "poop", "porcelain", "potty", "restroom", "throne", "washroom", "waste", "wc"],
  styles: ["solid"],
  label: "Toilet"
}, {
  name: "toilet-paper",
  search: ["bathroom", "covid-19", "halloween", "holiday", "lavatory", "prank", "restroom", "roll"],
  styles: ["solid"],
  label: "Toilet Paper"
}, {
  name: "toilet-paper-slash",
  search: ["bathroom", "covid-19", "halloween", "holiday", "lavatory", "leaves", "prank", "restroom", "roll", "trouble", "ut oh"],
  styles: ["solid"],
  label: "Toilet Paper Slash"
}, {
  name: "toolbox",
  search: ["admin", "container", "fix", "repair", "settings", "tools"],
  styles: ["solid"],
  label: "Toolbox"
}, {
  name: "tools",
  search: ["admin", "fix", "repair", "screwdriver", "settings", "tools", "wrench"],
  styles: ["solid"],
  label: "Tools"
}, {
  name: "tooth",
  search: ["bicuspid", "dental", "dentist", "molar", "mouth", "teeth"],
  styles: ["solid"],
  label: "Tooth"
}, {
  name: "torah",
  search: ["book", "jewish", "judaism", "religion", "scroll"],
  styles: ["solid"],
  label: "Torah"
}, {
  name: "torii-gate",
  search: ["building", "shintoism"],
  styles: ["solid"],
  label: "Torii Gate"
}, {
  name: "tractor",
  search: ["agriculture", "farm", "vehicle"],
  styles: ["solid"],
  label: "Tractor"
}, {
  name: "trade-federation",
  search: [],
  styles: ["brands"],
  label: "Trade Federation"
}, {
  name: "trademark",
  search: ["copyright", "register", "symbol"],
  styles: ["solid"],
  label: "Trademark"
}, {
  name: "traffic-light",
  search: ["direction", "road", "signal", "travel"],
  styles: ["solid"],
  label: "Traffic Light"
}, {
  name: "trailer",
  search: ["carry", "haul", "moving", "travel"],
  styles: ["solid"],
  label: "Trailer"
}, {
  name: "train",
  search: ["bullet", "commute", "locomotive", "railway", "subway"],
  styles: ["solid"],
  label: "Train"
}, {
  name: "tram",
  search: ["crossing", "machine", "mountains", "seasonal", "transportation"],
  styles: ["solid"],
  label: "Tram"
}, {
  name: "transgender",
  search: ["intersex"],
  styles: ["solid"],
  label: "Transgender"
}, {
  name: "transgender-alt",
  search: ["intersex"],
  styles: ["solid"],
  label: "Alternate Transgender"
}, {
  name: "trash",
  search: ["delete", "garbage", "hide", "remove"],
  styles: ["solid"],
  label: "Trash"
}, {
  name: "trash-alt",
  search: ["delete", "garbage", "hide", "remove", "trash-o"],
  styles: ["solid", "regular"],
  label: "Alternate Trash"
}, {
  name: "trash-restore",
  search: ["back", "control z", "oops", "undo"],
  styles: ["solid"],
  label: "Trash Restore"
}, {
  name: "trash-restore-alt",
  search: ["back", "control z", "oops", "undo"],
  styles: ["solid"],
  label: "Alternative Trash Restore"
}, {
  name: "tree",
  search: ["bark", "fall", "flora", "forest", "nature", "plant", "seasonal"],
  styles: ["solid"],
  label: "Tree"
}, {
  name: "trello",
  search: ["atlassian"],
  styles: ["brands"],
  label: "Trello"
}, {
  name: "tripadvisor",
  search: [],
  styles: ["brands"],
  label: "TripAdvisor"
}, {
  name: "trophy",
  search: ["achievement", "award", "cup", "game", "winner"],
  styles: ["solid"],
  label: "trophy"
}, {
  name: "truck",
  search: ["cargo", "delivery", "shipping", "vehicle"],
  styles: ["solid"],
  label: "truck"
}, {
  name: "truck-loading",
  search: ["box", "cargo", "delivery", "inventory", "moving", "rental", "vehicle"],
  styles: ["solid"],
  label: "Truck Loading"
}, {
  name: "truck-monster",
  search: ["offroad", "vehicle", "wheel"],
  styles: ["solid"],
  label: "Truck Monster"
}, {
  name: "truck-moving",
  search: ["cargo", "inventory", "rental", "vehicle"],
  styles: ["solid"],
  label: "Truck Moving"
}, {
  name: "truck-pickup",
  search: ["cargo", "vehicle"],
  styles: ["solid"],
  label: "Truck Side"
}, {
  name: "tshirt",
  search: ["clothing", "fashion", "garment", "shirt"],
  styles: ["solid"],
  label: "T-Shirt"
}, {
  name: "tty",
  search: ["communication", "deaf", "telephone", "teletypewriter", "text"],
  styles: ["solid"],
  label: "TTY"
}, {
  name: "tumblr",
  search: [],
  styles: ["brands"],
  label: "Tumblr"
}, {
  name: "tumblr-square",
  search: [],
  styles: ["brands"],
  label: "Tumblr Square"
}, {
  name: "tv",
  search: ["computer", "display", "monitor", "television"],
  styles: ["solid"],
  label: "Television"
}, {
  name: "twitch",
  search: [],
  styles: ["brands"],
  label: "Twitch"
}, {
  name: "twitter",
  search: ["social network", "tweet"],
  styles: ["brands"],
  label: "Twitter"
}, {
  name: "twitter-square",
  search: ["social network", "tweet"],
  styles: ["brands"],
  label: "Twitter Square"
}, {
  name: "typo3",
  search: [],
  styles: ["brands"],
  label: "Typo3"
}, {
  name: "uber",
  search: [],
  styles: ["brands"],
  label: "Uber"
}, {
  name: "ubuntu",
  search: ["linux", "operating system", "os"],
  styles: ["brands"],
  label: "Ubuntu"
}, {
  name: "uikit",
  search: [],
  styles: ["brands"],
  label: "UIkit"
}, {
  name: "umbraco",
  search: [],
  styles: ["brands"],
  label: "Umbraco"
}, {
  name: "umbrella",
  search: ["protection", "rain", "storm", "wet"],
  styles: ["solid"],
  label: "Umbrella"
}, {
  name: "umbrella-beach",
  search: ["protection", "recreation", "sand", "shade", "summer", "sun"],
  styles: ["solid"],
  label: "Umbrella Beach"
}, {
  name: "underline",
  search: ["edit", "emphasis", "format", "text", "writing"],
  styles: ["solid"],
  label: "Underline"
}, {
  name: "undo",
  search: ["back", "control z", "exchange", "oops", "return", "rotate", "swap"],
  styles: ["solid"],
  label: "Undo"
}, {
  name: "undo-alt",
  search: ["back", "control z", "exchange", "oops", "return", "swap"],
  styles: ["solid"],
  label: "Alternate Undo"
}, {
  name: "uniregistry",
  search: [],
  styles: ["brands"],
  label: "Uniregistry"
}, {
  name: "unity",
  search: [],
  styles: ["brands"],
  label: "Unity 3D"
}, {
  name: "universal-access",
  search: ["accessibility", "hearing", "person", "seeing", "visual impairment"],
  styles: ["solid"],
  label: "Universal Access"
}, {
  name: "university",
  search: ["bank", "building", "college", "higher education - students", "institution"],
  styles: ["solid"],
  label: "University"
}, {
  name: "unlink",
  search: ["attachment", "chain", "chain-broken", "remove"],
  styles: ["solid"],
  label: "unlink"
}, {
  name: "unlock",
  search: ["admin", "lock", "password", "private", "protect"],
  styles: ["solid"],
  label: "unlock"
}, {
  name: "unlock-alt",
  search: ["admin", "lock", "password", "private", "protect"],
  styles: ["solid"],
  label: "Alternate Unlock"
}, {
  name: "untappd",
  search: [],
  styles: ["brands"],
  label: "Untappd"
}, {
  name: "upload",
  search: ["hard drive", "import", "publish"],
  styles: ["solid"],
  label: "Upload"
}, {
  name: "ups",
  search: ["United Parcel Service", "package", "shipping"],
  styles: ["brands"],
  label: "UPS"
}, {
  name: "usb",
  search: [],
  styles: ["brands"],
  label: "USB"
}, {
  name: "user",
  search: ["account", "avatar", "head", "human", "man", "person", "profile"],
  styles: ["solid", "regular"],
  label: "User"
}, {
  name: "user-alt",
  search: ["account", "avatar", "head", "human", "man", "person", "profile"],
  styles: ["solid"],
  label: "Alternate User"
}, {
  name: "user-alt-slash",
  search: ["account", "avatar", "head", "human", "man", "person", "profile"],
  styles: ["solid"],
  label: "Alternate User Slash"
}, {
  name: "user-astronaut",
  search: ["avatar", "clothing", "cosmonaut", "nasa", "space", "suit"],
  styles: ["solid"],
  label: "User Astronaut"
}, {
  name: "user-check",
  search: ["accept", "check", "person", "verified"],
  styles: ["solid"],
  label: "User Check"
}, {
  name: "user-circle",
  search: ["account", "avatar", "head", "human", "man", "person", "profile"],
  styles: ["solid", "regular"],
  label: "User Circle"
}, {
  name: "user-clock",
  search: ["alert", "person", "remind", "time"],
  styles: ["solid"],
  label: "User Clock"
}, {
  name: "user-cog",
  search: ["admin", "cog", "person", "settings"],
  styles: ["solid"],
  label: "User Cog"
}, {
  name: "user-edit",
  search: ["edit", "pen", "pencil", "person", "update", "write"],
  styles: ["solid"],
  label: "User Edit"
}, {
  name: "user-friends",
  search: ["group", "people", "person", "team", "users"],
  styles: ["solid"],
  label: "User Friends"
}, {
  name: "user-graduate",
  search: ["cap", "clothing", "commencement", "gown", "graduation", "person", "student"],
  styles: ["solid"],
  label: "User Graduate"
}, {
  name: "user-injured",
  search: ["cast", "injury", "ouch", "patient", "person", "sling"],
  styles: ["solid"],
  label: "User Injured"
}, {
  name: "user-lock",
  search: ["admin", "lock", "person", "private", "unlock"],
  styles: ["solid"],
  label: "User Lock"
}, {
  name: "user-md",
  search: ["covid-19", "job", "medical", "nurse", "occupation", "physician", "profile", "surgeon"],
  styles: ["solid"],
  label: "Doctor"
}, {
  name: "user-minus",
  search: ["delete", "negative", "remove"],
  styles: ["solid"],
  label: "User Minus"
}, {
  name: "user-ninja",
  search: ["assassin", "avatar", "dangerous", "deadly", "sneaky"],
  styles: ["solid"],
  label: "User Ninja"
}, {
  name: "user-nurse",
  search: ["covid-19", "doctor", "midwife", "practitioner", "surgeon"],
  styles: ["solid"],
  label: "Nurse"
}, {
  name: "user-plus",
  search: ["add", "avatar", "positive", "sign up", "signup", "team"],
  styles: ["solid"],
  label: "User Plus"
}, {
  name: "user-secret",
  search: ["clothing", "coat", "hat", "incognito", "person", "privacy", "spy", "whisper"],
  styles: ["solid"],
  label: "User Secret"
}, {
  name: "user-shield",
  search: ["admin", "person", "private", "protect", "safe"],
  styles: ["solid"],
  label: "User Shield"
}, {
  name: "user-slash",
  search: ["ban", "delete", "remove"],
  styles: ["solid"],
  label: "User Slash"
}, {
  name: "user-tag",
  search: ["avatar", "discount", "label", "person", "role", "special"],
  styles: ["solid"],
  label: "User Tag"
}, {
  name: "user-tie",
  search: ["avatar", "business", "clothing", "formal", "professional", "suit"],
  styles: ["solid"],
  label: "User Tie"
}, {
  name: "user-times",
  search: ["archive", "delete", "remove", "x"],
  styles: ["solid"],
  label: "Remove User"
}, {
  name: "users",
  search: ["friends", "group", "people", "persons", "profiles", "team"],
  styles: ["solid"],
  label: "Users"
}, {
  name: "users-cog",
  search: ["admin", "cog", "group", "person", "settings", "team"],
  styles: ["solid"],
  label: "Users Cog"
}, {
  name: "usps",
  search: ["american", "package", "shipping", "usa"],
  styles: ["brands"],
  label: "United States Postal Service"
}, {
  name: "ussunnah",
  search: [],
  styles: ["brands"],
  label: "us-Sunnah Foundation"
}, {
  name: "utensil-spoon",
  search: ["cutlery", "dining", "scoop", "silverware", "spoon"],
  styles: ["solid"],
  label: "Utensil Spoon"
}, {
  name: "utensils",
  search: ["cutlery", "dining", "dinner", "eat", "food", "fork", "knife", "restaurant"],
  styles: ["solid"],
  label: "Utensils"
}, {
  name: "vaadin",
  search: [],
  styles: ["brands"],
  label: "Vaadin"
}, {
  name: "vector-square",
  search: ["anchors", "lines", "object", "render", "shape"],
  styles: ["solid"],
  label: "Vector Square"
}, {
  name: "venus",
  search: ["female"],
  styles: ["solid"],
  label: "Venus"
}, {
  name: "venus-double",
  search: ["female"],
  styles: ["solid"],
  label: "Venus Double"
}, {
  name: "venus-mars",
  search: ["Gender"],
  styles: ["solid"],
  label: "Venus Mars"
}, {
  name: "viacoin",
  search: [],
  styles: ["brands"],
  label: "Viacoin"
}, {
  name: "viadeo",
  search: [],
  styles: ["brands"],
  label: "Video"
}, {
  name: "viadeo-square",
  search: [],
  styles: ["brands"],
  label: "Video Square"
}, {
  name: "vial",
  search: ["experiment", "lab", "sample", "science", "test", "test tube"],
  styles: ["solid"],
  label: "Vial"
}, {
  name: "vials",
  search: ["experiment", "lab", "sample", "science", "test", "test tube"],
  styles: ["solid"],
  label: "Vials"
}, {
  name: "viber",
  search: [],
  styles: ["brands"],
  label: "Viber"
}, {
  name: "video",
  search: ["camera", "film", "movie", "record", "video-camera"],
  styles: ["solid"],
  label: "Video"
}, {
  name: "video-slash",
  search: ["add", "create", "film", "new", "positive", "record", "video"],
  styles: ["solid"],
  label: "Video Slash"
}, {
  name: "vihara",
  search: ["buddhism", "buddhist", "building", "monastery"],
  styles: ["solid"],
  label: "Vihara"
}, {
  name: "vimeo",
  search: [],
  styles: ["brands"],
  label: "Vimeo"
}, {
  name: "vimeo-square",
  search: [],
  styles: ["brands"],
  label: "Vimeo Square"
}, {
  name: "vimeo-v",
  search: ["vimeo"],
  styles: ["brands"],
  label: "Vimeo"
}, {
  name: "vine",
  search: [],
  styles: ["brands"],
  label: "Vine"
}, {
  name: "virus",
  search: ["bug", "covid-19", "flu", "health", "sick", "viral"],
  styles: ["solid"],
  label: "Virus"
}, {
  name: "virus-slash",
  search: ["bug", "covid-19", "cure", "eliminate", "flu", "health", "sick", "viral"],
  styles: ["solid"],
  label: "Virus Slash"
}, {
  name: "viruses",
  search: ["bugs", "covid-19", "flu", "health", "multiply", "sick", "spread", "viral"],
  styles: ["solid"],
  label: "Viruses"
}, {
  name: "vk",
  search: [],
  styles: ["brands"],
  label: "VK"
}, {
  name: "vnv",
  search: [],
  styles: ["brands"],
  label: "VNV"
}, {
  name: "voicemail",
  search: ["answer", "inbox", "message", "phone"],
  styles: ["solid"],
  label: "Voicemail"
}, {
  name: "volleyball-ball",
  search: ["beach", "olympics", "sport"],
  styles: ["solid"],
  label: "Volleyball Ball"
}, {
  name: "volume-down",
  search: ["audio", "lower", "music", "quieter", "sound", "speaker"],
  styles: ["solid"],
  label: "Volume Down"
}, {
  name: "volume-mute",
  search: ["audio", "music", "quiet", "sound", "speaker"],
  styles: ["solid"],
  label: "Volume Mute"
}, {
  name: "volume-off",
  search: ["audio", "ban", "music", "mute", "quiet", "silent", "sound"],
  styles: ["solid"],
  label: "Volume Off"
}, {
  name: "volume-up",
  search: ["audio", "higher", "louder", "music", "sound", "speaker"],
  styles: ["solid"],
  label: "Volume Up"
}, {
  name: "vote-yea",
  search: ["accept", "cast", "election", "politics", "positive", "yes"],
  styles: ["solid"],
  label: "Vote Yea"
}, {
  name: "vr-cardboard",
  search: ["3d", "augment", "google", "reality", "virtual"],
  styles: ["solid"],
  label: "Cardboard VR"
}, {
  name: "vuejs",
  search: [],
  styles: ["brands"],
  label: "Vue.js"
}, {
  name: "walking",
  search: ["exercise", "health", "pedometer", "person", "steps"],
  styles: ["solid"],
  label: "Walking"
}, {
  name: "wallet",
  search: ["billfold", "cash", "currency", "money"],
  styles: ["solid"],
  label: "Wallet"
}, {
  name: "warehouse",
  search: ["building", "capacity", "garage", "inventory", "storage"],
  styles: ["solid"],
  label: "Warehouse"
}, {
  name: "water",
  search: ["lake", "liquid", "ocean", "sea", "swim", "wet"],
  styles: ["solid"],
  label: "Water"
}, {
  name: "wave-square",
  search: ["frequency", "pulse", "signal"],
  styles: ["solid"],
  label: "Square Wave"
}, {
  name: "waze",
  search: [],
  styles: ["brands"],
  label: "Waze"
}, {
  name: "weebly",
  search: [],
  styles: ["brands"],
  label: "Weebly"
}, {
  name: "weibo",
  search: [],
  styles: ["brands"],
  label: "Weibo"
}, {
  name: "weight",
  search: ["health", "measurement", "scale", "weight"],
  styles: ["solid"],
  label: "Weight"
}, {
  name: "weight-hanging",
  search: ["anvil", "heavy", "measurement"],
  styles: ["solid"],
  label: "Hanging Weight"
}, {
  name: "weixin",
  search: [],
  styles: ["brands"],
  label: "Weixin (WeChat)"
}, {
  name: "whatsapp",
  search: [],
  styles: ["brands"],
  label: "What's App"
}, {
  name: "whatsapp-square",
  search: [],
  styles: ["brands"],
  label: "What's App Square"
}, {
  name: "wheelchair",
  search: ["accessible", "handicap", "person"],
  styles: ["solid"],
  label: "Wheelchair"
}, {
  name: "whmcs",
  search: [],
  styles: ["brands"],
  label: "WHMCS"
}, {
  name: "wifi",
  search: ["connection", "hotspot", "internet", "network", "wireless"],
  styles: ["solid"],
  label: "WiFi"
}, {
  name: "wikipedia-w",
  search: [],
  styles: ["brands"],
  label: "Wikipedia W"
}, {
  name: "wind",
  search: ["air", "blow", "breeze", "fall", "seasonal", "weather"],
  styles: ["solid"],
  label: "Wind"
}, {
  name: "window-close",
  search: ["browser", "cancel", "computer", "development"],
  styles: ["solid", "regular"],
  label: "Window Close"
}, {
  name: "window-maximize",
  search: ["browser", "computer", "development", "expand"],
  styles: ["solid", "regular"],
  label: "Window Maximize"
}, {
  name: "window-minimize",
  search: ["browser", "collapse", "computer", "development"],
  styles: ["solid", "regular"],
  label: "Window Minimize"
}, {
  name: "window-restore",
  search: ["browser", "computer", "development"],
  styles: ["solid", "regular"],
  label: "Window Restore"
}, {
  name: "windows",
  search: ["microsoft", "operating system", "os"],
  styles: ["brands"],
  label: "Windows"
}, {
  name: "wine-bottle",
  search: ["alcohol", "beverage", "cabernet", "drink", "glass", "grapes", "merlot", "sauvignon"],
  styles: ["solid"],
  label: "Wine Bottle"
}, {
  name: "wine-glass",
  search: ["alcohol", "beverage", "cabernet", "drink", "grapes", "merlot", "sauvignon"],
  styles: ["solid"],
  label: "Wine Glass"
}, {
  name: "wine-glass-alt",
  search: ["alcohol", "beverage", "cabernet", "drink", "grapes", "merlot", "sauvignon"],
  styles: ["solid"],
  label: "Alternate Wine Glas"
}, {
  name: "wix",
  search: [],
  styles: ["brands"],
  label: "Wix"
}, {
  name: "wizards-of-the-coast",
  search: ["Dungeons & Dragons", "d&d", "dnd", "fantasy", "game", "gaming", "tabletop"],
  styles: ["brands"],
  label: "Wizards of the Coast"
}, {
  name: "wolf-pack-battalion",
  search: [],
  styles: ["brands"],
  label: "Wolf Pack Battalion"
}, {
  name: "won-sign",
  search: ["currency", "krw", "money"],
  styles: ["solid"],
  label: "Won Sign"
}, {
  name: "wordpress",
  search: [],
  styles: ["brands"],
  label: "WordPress Logo"
}, {
  name: "wordpress-simple",
  search: [],
  styles: ["brands"],
  label: "Wordpress Simple"
}, {
  name: "wpbeginner",
  search: [],
  styles: ["brands"],
  label: "WPBeginner"
}, {
  name: "wpexplorer",
  search: [],
  styles: ["brands"],
  label: "WPExplorer"
}, {
  name: "wpforms",
  search: [],
  styles: ["brands"],
  label: "WPForms"
}, {
  name: "wpressr",
  search: ["rendact"],
  styles: ["brands"],
  label: "wpressr"
}, {
  name: "wrench",
  search: ["construction", "fix", "mechanic", "plumbing", "settings", "spanner", "tool", "update"],
  styles: ["solid"],
  label: "Wrench"
}, {
  name: "x-ray",
  search: ["health", "medical", "radiological images", "radiology", "skeleton"],
  styles: ["solid"],
  label: "X-Ray"
}, {
  name: "xbox",
  search: [],
  styles: ["brands"],
  label: "Xbox"
}, {
  name: "xing",
  search: [],
  styles: ["brands"],
  label: "Xing"
}, {
  name: "xing-square",
  search: [],
  styles: ["brands"],
  label: "Xing Square"
}, {
  name: "y-combinator",
  search: [],
  styles: ["brands"],
  label: "Y Combinator"
}, {
  name: "yahoo",
  search: [],
  styles: ["brands"],
  label: "Yahoo Logo"
}, {
  name: "yammer",
  search: [],
  styles: ["brands"],
  label: "Yammer"
}, {
  name: "yandex",
  search: [],
  styles: ["brands"],
  label: "Yandex"
}, {
  name: "yandex-international",
  search: [],
  styles: ["brands"],
  label: "Yandex International"
}, {
  name: "yarn",
  search: [],
  styles: ["brands"],
  label: "Yarn"
}, {
  name: "yelp",
  search: [],
  styles: ["brands"],
  label: "Yelp"
}, {
  name: "yen-sign",
  search: ["currency", "jpy", "money"],
  styles: ["solid"],
  label: "Yen Sign"
}, {
  name: "yin-yang",
  search: ["daoism", "opposites", "taoism"],
  styles: ["solid"],
  label: "Yin Yang"
}, {
  name: "yoast",
  search: [],
  styles: ["brands"],
  label: "Yoast"
}, {
  name: "youtube",
  search: ["film", "video", "youtube-play", "youtube-square"],
  styles: ["brands"],
  label: "YouTube"
}, {
  name: "youtube-square",
  search: [],
  styles: ["brands"],
  label: "YouTube Square"
}, {
  name: "zhihu",
  search: [],
  styles: ["brands"],
  label: "Zhihu"
}];

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/icon/index.css
var icon = __webpack_require__(2826);
;// CONCATENATED MODULE: ./src/component/icon/index.css

            

var icon_options = {};

icon_options.insert = "head";
icon_options.singleton = false;

var icon_update = injectStylesIntoStyleTag_default()(icon/* default */.Z, icon_options);



/* harmony default export */ const component_icon = (icon/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/icon/index.js




const icon_icon = {};

icon_icon.all = {
  add: {
    name: 'add',
    path: 'M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z'
  },
  arrowBack: {
    name: 'arrow-back',
    path: 'M20.016 11.016v1.969h-12.188l5.578 5.625-1.406 1.406-8.016-8.016 8.016-8.016 1.406 1.406-5.578 5.625h12.188z'
  },
  arrowDownward: {
    name: 'arrow-downward',
    path: 'M20.016 12l-8.016 8.016-8.016-8.016 1.453-1.406 5.578 5.578v-12.188h1.969v12.188l5.625-5.578z'
  },
  arrowForward: {
    name: 'arrow-forward',
    path: 'M12 3.984l8.016 8.016-8.016 8.016-1.406-1.406 5.578-5.625h-12.188v-1.969h12.188l-5.578-5.625z'
  },
  arrowUpward: {
    name: 'arrow-upward',
    path: 'M3.984 12l8.016-8.016 8.016 8.016-1.453 1.406-5.578-5.578v12.188h-1.969v-12.188l-5.625 5.578z'
  },
  check: {
    name: 'check',
    path: 'M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z'
  },
  cross: {
    name: 'cross',
    path: 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z'
  },
  arrowKeyboardDown: {
    name: 'arrow-keyboard-down',
    path: 'M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'
  },
  arrowKeyboardLeft: {
    name: 'arrow-keyboard-left',
    path: 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
  },
  arrowKeyboardRight: {
    name: 'arrow-keyboard-right',
    path: 'M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z'
  },
  arrowKeyboardUp: {
    name: 'arrow-keyboard-up',
    path: 'M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'
  },
  edit: {
    name: 'edit',
    path: 'M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828c0.375-0.375 1.031-0.375 1.406 0l2.344 2.344c0.375 0.375 0.375 1.031 0 1.406zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z'
  },
  moreHorizontal: {
    name: 'more-horizontal',
    path: 'M12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM18 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM6 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016z'
  },
  moreVertical: {
    name: 'more-vertical',
    path: 'M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016 2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z'
  },
  redo: {
    name: 'redo',
    path: 'M18.422 10.594l3.563-3.609v9h-9l3.656-3.609q-2.25-1.875-5.156-1.875-2.391 0-4.617 1.594t-2.977 3.891l-2.344-0.75q1.031-3.188 3.773-5.203t6.164-2.016q3.984 0 6.938 2.578z'
  },
  refresh: {
    name: 'refresh',
    path: 'M17.672 6.328l2.344-2.344v7.031h-7.031l3.234-3.234c-1.078-1.078-2.578-1.781-4.219-1.781-3.328 0-6 2.672-6 6s2.672 6 6 6c2.625 0 4.875-1.641 5.672-3.984h2.063c-0.891 3.469-3.984 6-7.734 6-4.406 0-7.969-3.609-7.969-8.016s3.563-8.016 7.969-8.016c2.203 0 4.219 0.891 5.672 2.344z'
  },
  remove: {
    name: 'remove',
    path: 'M18.984 12.984h-13.969v-1.969h13.969v1.969z'
  },
  reorder: {
    name: 'reorder',
    path: 'M3 5.016h18v1.969h-18v-1.969zM3 11.016v-2.016h18v2.016h-18zM3 18.984v-1.969h18v1.969h-18zM3 15v-2.016h18v2.016h-18z'
  },
  replay: {
    name: 'replay',
    path: 'M12 5.016q3.328 0 5.672 2.344t2.344 5.625q0 3.328-2.367 5.672t-5.648 2.344-5.648-2.344-2.367-5.672h2.016q0 2.484 1.758 4.242t4.242 1.758 4.242-1.758 1.758-4.242-1.758-4.242-4.242-1.758v4.031l-5.016-5.016 5.016-5.016v4.031z'
  },
  settings: {
    name: 'settings',
    path: 'M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z'
  },
  undo: {
    name: 'undo',
    path: 'M12.516 8.016q3.422 0 6.141 2.016t3.797 5.203l-2.344 0.75q-0.797-2.438-2.883-3.961t-4.711-1.523q-2.906 0-5.156 1.875l3.656 3.609h-9v-9l3.563 3.609q2.953-2.578 6.938-2.578z'
  },
  unfoldLess: {
    name: 'unfold-less',
    path: 'M16.594 5.391l-4.594 4.594-4.594-4.594 1.406-1.406 3.188 3.188 3.188-3.188zM7.406 18.609l4.594-4.594 4.594 4.594-1.406 1.406-3.188-3.188-3.188 3.188z'
  },
  unfoldMore: {
    name: 'unfold-more',
    path: 'M12 18.188l3.188-3.188 1.406 1.406-4.594 4.594-4.594-4.594 1.406-1.406zM12 5.813l-3.188 3.188-1.406-1.406 4.594-4.594 4.594 4.594-1.406 1.406z'
  },
  coffee: {
    name: 'coffee',
    path: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z'
  }
};

icon_icon.render = function(name) {
  const iconElement = node('span|class:icon');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('fill', 'currentColor');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', icon_icon.all[name].path);

  svg.appendChild(path);
  iconElement.appendChild(svg);

  return iconElement;
};


;// CONCATENATED MODULE: ./src/utility/complexNode.js
const complexNode = function({ tag = 'div', text = false, attr = [], node = [] } = {}) {
  const element = document.createElement(tag);

  if (text) {
    element.innerHTML = text;
  };

  if (attr.length > 0) {
    attr.forEach((item, i) => {

      if ('key' in item && 'value' in item) {
        element.setAttribute(item.key, item.value);
      } else if ('key' in item) {
        element.setAttribute(item.key, '');
      };

    });
  };

  if (node) {
    if (typeof node != 'string') {
      if (node.length > 0) {

        node.forEach((item, i) => {
          if (item instanceof HTMLElement) {
            element.appendChild(item);
          };
        });

      } else {

        if (node instanceof HTMLElement) {
          element.appendChild(node);
        };

      };
    };
  };

  return element;
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/feedback/index.css
var feedback = __webpack_require__(2207);
;// CONCATENATED MODULE: ./src/component/form/feedback/index.css

            

var feedback_options = {};

feedback_options.insert = "head";
feedback_options.singleton = false;

var feedback_update = injectStylesIntoStyleTag_default()(feedback/* default */.Z, feedback_options);



/* harmony default export */ const form_feedback = (feedback/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/feedback/index.js





const feedback_feedback = function({ text = false } = {}) {

  const feedback = node('div|class:form-feedback');

  if (text) {
    const feedbackText = complexNode({
      tag: 'p',
      text: text,
      attr: [{
        key: 'class',
        value: 'muted small'
      }]
    });

    feedback.appendChild(feedbackText);
  };

  return feedback;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/fieldset/index.css
var fieldset = __webpack_require__(3681);
;// CONCATENATED MODULE: ./src/component/form/fieldset/index.css

            

var fieldset_options = {};

fieldset_options.insert = "head";
fieldset_options.singleton = false;

var fieldset_update = injectStylesIntoStyleTag_default()(fieldset/* default */.Z, fieldset_options);



/* harmony default export */ const form_fieldset = (fieldset/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/fieldset/index.js




const fieldset_fieldset = function({ children = false } = {}) {

  return node('fieldset|class:form-fieldset', children);

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/group/index.css
var group = __webpack_require__(7039);
;// CONCATENATED MODULE: ./src/component/form/group/index.css

            

var group_options = {};

group_options.insert = "head";
group_options.singleton = false;

var group_update = injectStylesIntoStyleTag_default()(group/* default */.Z, group_options);



/* harmony default export */ const form_group = (group/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/group/index.js




const group_group = function({ direction = 'horizontal', reverse = false, block = false, border = false, children = false } = {}) {

  const group = node('div|class:form-group', children);

  switch (direction) {
    case 'horizontal':
      group.classList.add('form-group-horizontal');
      break;

    case 'vertical':
      group.classList.add('form-group-vertical');
      break;
  };

  if (reverse) {
    group.classList.add('form-group-reverse');
  };

  if (block) {
    group.classList.add('form-group-block');
  };

  if (border) {
    group.classList.add('form-group-border');
  };

  return group;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/groupText/index.css
var groupText = __webpack_require__(5516);
;// CONCATENATED MODULE: ./src/component/form/groupText/index.css

            

var groupText_options = {};

groupText_options.insert = "head";
groupText_options.singleton = false;

var groupText_update = injectStylesIntoStyleTag_default()(groupText/* default */.Z, groupText_options);



/* harmony default export */ const form_groupText = (groupText/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/groupText/index.js




const groupText_groupText = function({ text = false, classList = [] } = {}) {

  const textElement = node('div|class:form-group-text,tabindex:1');

  if (text) {
    textElement.textContent = text;
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      textElement.classList.add(item);
    });

  };

  return textElement;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/helper/index.css
var helper = __webpack_require__(214);
;// CONCATENATED MODULE: ./src/component/form/helper/index.css

            

var helper_options = {};

helper_options.insert = "head";
helper_options.singleton = false;

var helper_update = injectStylesIntoStyleTag_default()(helper/* default */.Z, helper_options);



/* harmony default export */ const form_helper = (helper/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/helper/index.js





const helper_helper = function({ text = 'text', classList = [] } = {}) {

  const helper = complexNode({
    tag: 'p',
    text: text,
    attr: [{
      key: 'class',
      value: 'form-helper-item'
    }]
  });

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      helper.classList.add(item);
    });

  };

  return helper;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/indent/index.css
var indent = __webpack_require__(1400);
;// CONCATENATED MODULE: ./src/component/form/indent/index.css

            

var indent_options = {};

indent_options.insert = "head";
indent_options.singleton = false;

var indent_update = injectStylesIntoStyleTag_default()(indent/* default */.Z, indent_options);



/* harmony default export */ const form_indent = (indent/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/indent/index.js




const indent_indent = function({ children = false } = {}) {

  return node('div|class:form-indent', children);

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/inline/index.css
var inline = __webpack_require__(4046);
;// CONCATENATED MODULE: ./src/component/form/inline/index.css

            

var inline_options = {};

inline_options.insert = "head";
inline_options.singleton = false;

var inline_update = injectStylesIntoStyleTag_default()(inline/* default */.Z, inline_options);



/* harmony default export */ const form_inline = (inline/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/inline/index.js




const inline_inline = function({ direction = 'horizontal', reverse = false, block = false, wrap = false, gap = 'medium', children = false } = {}) {

  const inline = node('div|class:form-inline', children);

  switch (direction) {
    case 'horizontal':
      inline.classList.add('form-inline-horizontal');
      break;

    case 'vertical':
      inline.classList.add('form-inline-vertical');
      break;
  };

  switch (gap) {
    case 'small':
      inline.classList.add('form-inline-gap-small');
      break;

    case 'medium':
      inline.classList.add('form-inline-gap-medium');
      break;

    case 'large':
      inline.classList.add('form-inline-gap-large');
      break;
  };

  if (reverse) {
    inline.classList.add('form-inline-reverse');
  };

  if (block) {
    inline.classList.add('form-inline-block');
  };

  if (wrap) {
    inline.classList.add('form-inline-wrap');
  };

  return inline;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/label/index.css
var label = __webpack_require__(5071);
;// CONCATENATED MODULE: ./src/component/form/label/index.css

            

var label_options = {};

label_options.insert = "head";
label_options.singleton = false;

var label_update = injectStylesIntoStyleTag_default()(label/* default */.Z, label_options);



/* harmony default export */ const form_label = (label/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/label/index.js




const label_label = function({ forInput = false, text = 'label', description = false, srOnly = false, icon = false, classList = [] } = {}) {

  let label;

  if (forInput) {
    label = node('label|for:' + forInput);
  } else {
    label = node('label');
  };

  const labelBlock = node('span|class:label-block');

  if (srOnly) {
    if (icon) {
      labelBlock.classList.add('sr-only');
    } else {
      label.classList.add('sr-only');
    };
  };

  if (text && description) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    labelBlock.appendChild(node('span:' + description + '|class:label-block-item small muted'));
    label.appendChild(labelBlock);
  } else if (text) {
    labelBlock.appendChild(node('span:' + text + '|class:label-block-item'));
    label.appendChild(labelBlock);
  };

  if (icon) {
    label.prepend(node('span|class:label-icon'));
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      label.classList.add(item);
    });

  };

  return label;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/sticky/index.css
var sticky = __webpack_require__(460);
;// CONCATENATED MODULE: ./src/component/form/sticky/index.css

            

var sticky_options = {};

sticky_options.insert = "head";
sticky_options.singleton = false;

var sticky_update = injectStylesIntoStyleTag_default()(sticky/* default */.Z, sticky_options);



/* harmony default export */ const form_sticky = (sticky/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/sticky/index.js




const sticky_sticky = function({ children = false } = {}) {

  return node('div|class:form-sticky', children);

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/wrap/index.css
var wrap = __webpack_require__(1879);
;// CONCATENATED MODULE: ./src/component/form/wrap/index.css

            

var wrap_options = {};

wrap_options.insert = "head";
wrap_options.singleton = false;

var wrap_update = injectStylesIntoStyleTag_default()(wrap/* default */.Z, wrap_options);



/* harmony default export */ const form_wrap = (wrap/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/wrap/index.js




const wrap_wrap = function({ children = false } = {}) {

  return node('div|class:form-wrap', children);

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/grid/index.css
var form_grid = __webpack_require__(7662);
;// CONCATENATED MODULE: ./src/component/form/grid/index.css

            

var form_grid_options = {};

form_grid_options.insert = "head";
form_grid_options.singleton = false;

var form_grid_update = injectStylesIntoStyleTag_default()(form_grid/* default */.Z, form_grid_options);



/* harmony default export */ const component_form_grid = (form_grid/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/grid/index.js




const form_grid_grid = function({ children = false } = {}) {

  return node('div|class:form-grid', children);

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/checkbox/index.css
var input_checkbox = __webpack_require__(5875);
;// CONCATENATED MODULE: ./src/component/form/input/checkbox/index.css

            

var checkbox_options = {};

checkbox_options.insert = "head";
checkbox_options.singleton = false;

var checkbox_update = injectStylesIntoStyleTag_default()(input_checkbox/* default */.Z, checkbox_options);



/* harmony default export */ const form_input_checkbox = (input_checkbox/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/checkbox/index.js




const checkbox_checkbox = function({ id = false, value = false, checked = false, classList = [], func = false } = {}) {

  const input = node('input|type:checkbox,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (checked) {
    input.setAttribute('checked', '');
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('change', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/color/index.css
var color = __webpack_require__(9755);
;// CONCATENATED MODULE: ./src/component/form/input/color/index.css

            

var color_options = {};

color_options.insert = "head";
color_options.singleton = false;

var color_update = injectStylesIntoStyleTag_default()(color/* default */.Z, color_options);



/* harmony default export */ const input_color = (color/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/color/index.js




const color_color = function({ id = false, value = '#000000', classList = [], func = false } = {}) {

  const input = node('input|class:mb-0,type:color,value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('change', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/file/index.css
var file = __webpack_require__(462);
;// CONCATENATED MODULE: ./src/component/form/input/file/index.css

            

var file_options = {};

file_options.insert = "head";
file_options.singleton = false;

var file_update = injectStylesIntoStyleTag_default()(file/* default */.Z, file_options);



/* harmony default export */ const input_file = (file/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/file/index.js




const file_file = function({ id = false, classList = [], func = false } = {}) {

  const input = node('input|type:file,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('change', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/number/index.css
var number = __webpack_require__(2725);
;// CONCATENATED MODULE: ./src/component/form/input/number/index.css

            

var number_options = {};

number_options.insert = "head";
number_options.singleton = false;

var number_update = injectStylesIntoStyleTag_default()(number/* default */.Z, number_options);



/* harmony default export */ const input_number = (number/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/number/index.js




const number_number = function({ id = false, min = 0, max = 100, step = 1, value = false, placeholder = false, classList = [], func = false } = {}) {

  const input = node('input|type:number,min:' + min + ',max:' + max + ',step:' + step + ',tabindex:1');

  let delayUpdate = null;

  if (id) {
    input.setAttribute('id', id);
  };

  if (value || (typeof value === 'number' && value === 0)) {
    input.setAttribute('value', value);
  };

  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('input', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/radio/index.css
var input_radio = __webpack_require__(9610);
;// CONCATENATED MODULE: ./src/component/form/input/radio/index.css

            

var radio_options = {};

radio_options.insert = "head";
radio_options.singleton = false;

var radio_update = injectStylesIntoStyleTag_default()(input_radio/* default */.Z, radio_options);



/* harmony default export */ const form_input_radio = (input_radio/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/radio/index.js




const radio_radio = function({ id = false, radioGroup = false, value = false, checked = false, classList = [], func = false } = {}) {

  const input = node('input|type:radio,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (radioGroup) {
    input.setAttribute('name', radioGroup);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (checked) {
    input.setAttribute('checked', '');
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {
    input.addEventListener('change', function(event) {
      func();
    });
  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/range/index.css
var range = __webpack_require__(349);
;// CONCATENATED MODULE: ./src/component/form/input/range/index.css

            

var range_options = {};

range_options.insert = "head";
range_options.singleton = false;

var range_update = injectStylesIntoStyleTag_default()(range/* default */.Z, range_options);



/* harmony default export */ const input_range = (range/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/range/index.js




const range_range = function({ id = false, min = 0, max = 100, value = 0, classList = [], func = false } = {}) {

  const input = node('input|class:mb-0,type:range,min:' + min + ',max:' + max + ',value:' + value + ',tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('input', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/text/index.css
var input_text = __webpack_require__(4224);
;// CONCATENATED MODULE: ./src/component/form/input/text/index.css

            

var text_options = {};

text_options.insert = "head";
text_options.singleton = false;

var text_update = injectStylesIntoStyleTag_default()(input_text/* default */.Z, text_options);



/* harmony default export */ const form_input_text = (input_text/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/text/index.js




const text_text = function({ id = false, value = false, min = false, max = false, placeholder = false, classList = [], func = false } = {}) {

  const input = node('input|type:text,autocomplete:off,autocorrect:off,autocapitalize:off,spellcheck:false,tabindex:1');

  if (id) {
    input.setAttribute('id', id);
  };

  if (value) {
    input.setAttribute('value', value);
  };

  if (typeof min === 'number') {
    input.setAttribute('minlength', min);
  };

  if (typeof max === 'number') {
    input.setAttribute('maxlength', max);
  };

  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      input.classList.add(item);
    });

  };

  if (func) {

    input.addEventListener('input', function(event) {
      func();
    });

  };

  return input;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/textarea/index.css
var input_textarea = __webpack_require__(8843);
;// CONCATENATED MODULE: ./src/component/form/input/textarea/index.css

            

var textarea_options = {};

textarea_options.insert = "head";
textarea_options.singleton = false;

var textarea_update = injectStylesIntoStyleTag_default()(input_textarea/* default */.Z, textarea_options);



/* harmony default export */ const form_input_textarea = (input_textarea/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/textarea/index.js




const textarea_textarea = function({ id = false, value = false, placeholder = false, classList = [], func = false } = {}) {

  const textarea = node('textarea|tabindex:1,spellcheck:false');

  if (id) {
    textarea.setAttribute('id', id);
  };

  if (value) {
    textarea.setAttribute('value', value);
  };

  if (placeholder) {
    textarea.setAttribute('placeholder', placeholder);
  };

  if (checked) {
    textarea.setAttribute('checked', '');
  };

  if (classList.length > 0) {

    classList.forEach((item, i) => {
      textarea.classList.add(item);
    });

  };

  if (func) {

    textarea.addEventListener('input', function(event) {
      func();
    });

  };

  return textarea;

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/inputButton/index.css
var inputButton = __webpack_require__(9606);
;// CONCATENATED MODULE: ./src/component/form/input/inputButton/index.css

            

var inputButton_options = {};

inputButton_options.insert = "head";
inputButton_options.singleton = false;

var inputButton_update = injectStylesIntoStyleTag_default()(inputButton/* default */.Z, inputButton_options);



/* harmony default export */ const input_inputButton = (inputButton/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/inputButton/index.js




const inputButton_inputButton = function() {};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/input/index.css
var input = __webpack_require__(443);
;// CONCATENATED MODULE: ./src/component/form/input/index.css

            

var input_options = {};

input_options.insert = "head";
input_options.singleton = false;

var input_update = injectStylesIntoStyleTag_default()(input/* default */.Z, input_options);



/* harmony default export */ const form_input = (input/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/input/index.js














// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/form/index.css
var component_form = __webpack_require__(1058);
;// CONCATENATED MODULE: ./src/component/form/index.css

            

var form_options = {};

form_options.insert = "head";
form_options.singleton = false;

var form_update = injectStylesIntoStyleTag_default()(component_form/* default */.Z, form_options);



/* harmony default export */ const src_component_form = (component_form/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/form/index.js


















// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/button/index.css
var component_button = __webpack_require__(8509);
;// CONCATENATED MODULE: ./src/component/button/index.css

            

var button_options = {};

button_options.insert = "head";
button_options.singleton = false;

var button_update = injectStylesIntoStyleTag_default()(component_button/* default */.Z, button_options);



/* harmony default export */ const src_component_button = (component_button/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/button/index.js








const Button = function({ text = 'Button', srOnly = false, iconName = false, block = false, size = false, style = [], title = false, classList = [], func = false } = {}) {
  this.button = node('button|class:button,tabindex:1,type:button');

  if (text) {
    const buttonText = node('span:' + text + '|class:button-text');

    if (srOnly) {
      buttonText.classList.add('sr-only');
    };

    this.button.appendChild(buttonText);
  };

  if (iconName) {
    this.button.appendChild(icon_icon.render(iconName));
  };

  if (block) {
    this.button.classList.add('button-block');
  };

  switch (size) {
    case 'small':
      this.button.classList.add('button-small');
      break;

    case 'large':
      this.button.classList.add('button-large');
      break;
  };

  if (style.length > 0) {
    style.forEach((item, i) => {
      switch (item) {
        case 'link':
          this.button.classList.add('button-link');
          break;

        case 'line':
          this.button.classList.add('button-line');
          break;

        case 'ring':
          this.button.classList.add('button-ring');
          break;
      };
    });
  };

  if (title) {
    this.button.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (func) {
    this.button.addEventListener('click', function(event) {
      func();
    });
  };

  this.disable = () => {
    this.button.disabled = true;
  };

  this.enable = () => {
    this.button.disabled = false;
  };

  this.deactive = () => {
    this.button.classList.remove('active');
  };

  this.active = () => {
    this.button.classList.add('active');
  };

  this.wrap = () => {
    return wrap_wrap({
      children: [
        this.button
      ]
    })
  };

};

;// CONCATENATED MODULE: ./src/utility/isValidString.js
const isValidString = function(value) {
  let result = false;

  if (typeof value == 'string') {
    value = value.trim().replace(/\s/g, '');
    if (value != '') {
      result = true;
    };
  };

  return result;
};

;// CONCATENATED MODULE: ./src/utility/trimString.js
const trimString = function(value) {
  if (typeof value == 'string') {
    return value.trim().replace(/\s\s+/g, ' ');
  } else {
    return value;
  };
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/autoSuggest/index.css
var autoSuggest = __webpack_require__(8625);
;// CONCATENATED MODULE: ./src/component/autoSuggest/index.css

            

var autoSuggest_options = {};

autoSuggest_options.insert = "head";
autoSuggest_options.singleton = false;

var autoSuggest_update = injectStylesIntoStyleTag_default()(autoSuggest/* default */.Z, autoSuggest_options);



/* harmony default export */ const component_autoSuggest = (autoSuggest/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/autoSuggest/index.js












const Suggest = function({ input = false, widthElement = false, type = false, postFocus = false, action = false } = {}) {
  this.suggestPanel = false;

  this.input = input;

  this.timer = false;

  this.open = () => {
    state_state.get.current().autoSuggest = true;
    this.render.open();
  };

  this.close = () => {
    state_state.get.current().autoSuggest = false;
    this.render.close();
  };

  this.searchTerm = () => {
    return trimString(this.input.value).toLowerCase();
  };

  this.suggestItems = () => {
    const suggestType = {
      fontawesomeIcon: (string) => {
        if (isValidString(string)) {

          return fontawesome_fontawesome.filter((item) => {
            let match = false;

            if (item.name.toLowerCase().includes(string) || item.label.toLowerCase().includes(string)) {
              match = true;
            };

            item.search.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              };
            });

            item.styles.forEach((item, i) => {
              if (item.toLowerCase().includes(string)) {
                match = true;
              };
            });

            return match;
          });

        } else {
          return fontawesome_fontawesome;
        };
      }
    };

    return suggestType[type](this.searchTerm());
  };

  this.bind = {};

  this.bind.input = () => {
    this.input.addEventListener('focus', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.render.delay, 300);
    });

    this.input.addEventListener('input', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.render.delay, 300);
    });
  };

  this.bind.navigation = {
    check: (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(this.suggestPanel) && !path.includes(input)) {
        this.close();
      };
    },
    add: () => {
      window.addEventListener('click', this.bind.navigation.check, false);
      window.addEventListener('keydown', this.render.navigateResults, false);
    },
    remove: () => {
      window.removeEventListener('click', this.bind.navigation.check, false);
      window.removeEventListener('keydown', this.render.navigateResults, false);
    }
  };

  this.bind.close = {
    check: (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(this.suggestPanel) && !path.includes(input)) {
        this.close();
      };
    },
    add: () => {
      window.addEventListener('mouseup', this.bind.close.check);
    },
    remove: () => {
      window.removeEventListener('mouseup', this.bind.close.check);
    }
  };

  this.render = {};

  this.render.delay = () => {
    this.open();
  };

  this.render.open = () => {
    let suggestElement;

    const results = this.suggestItems();

    if (results.length > 0) {

      // define the current suggest panel
      if (this.suggestPanel) {
        suggestElement = this.suggestPanel;
        while (this.suggestPanel.lastChild) {
          this.suggestPanel.removeChild(this.suggestPanel.lastChild);
        };
      } else {
        suggestElement = node('div|class:auto-suggest');
        this.suggestPanel = suggestElement;
      };

      // make list
      let suggestList = node('ul|class:auto-suggest-list list-unstyled');
      suggestElement.appendChild(suggestList);

      // position and width
      const box = {
        left: input.getBoundingClientRect().left,
        top: input.getBoundingClientRect().bottom + window.scrollY,
        width: input.getBoundingClientRect().width
      };
      if (widthElement) {
        box.width = widthElement.getBoundingClientRect().width;
        box.left = widthElement.getBoundingClientRect().left;
      };

      suggestElement.style.setProperty('--auto-suggest-top', box.top);
      suggestElement.style.setProperty('--auto-suggest-left', box.left);
      suggestElement.style.setProperty('--auto-suggest-width', box.width);

      this.bind.close.add();
      this.bind.navigation.add();

      suggestElement.close = () => {
        if (suggestElement.classList.contains('is-opaque')) {
          suggestElement.classList.remove('is-opaque');
          suggestElement.classList.add('is-transparent');
        } else {
          suggestElement.remove();
        };
        this.bind.close.remove();
        this.bind.navigation.remove();
      };

      suggestElement.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
          this.remove();
        };
      });

      this.render.populateList(suggestList, results);

      document.querySelector('body').appendChild(suggestElement);

      getComputedStyle(suggestElement).opacity;

      suggestElement.classList.remove('is-transparent');
      suggestElement.classList.add('is-opaque');

      autoSuggest_autoSuggest.current = suggestElement;

    } else {

      if (this.suggestPanel) {
        this.suggestPanel.close();
      };

    };
  };

  this.render.close = () => {
    if (this.suggestPanel) {
      this.suggestPanel.close();
      this.suggestPanel = null;
    };
  };

  this.render.populateList = (suggestList, results) => {
    const listType = {
      fontawesomeIcon: () => {
        const successAction = (item) => {
          currentBookmarkForm.updateIcon(item);
          this.close();
          if (postFocus) {
            postFocus.focus();
          };
          if (action) {
            action();
          }
        };

        results.forEach((item, i) => {
          let li = node('li|class:auto-suggest-list-item');

          let resultItem = new Button({
            text: false,
            style: ['link', 'ring'],
            classList: ['auto-suggest-item'],
            func: () => {
              successAction(item);
            }
          });

          let icon = node('span|class:auto-suggest-icon fa-' + item.name);
          if (item.styles.includes('solid')) {
            icon.classList.add('fas');
          } else if (item.styles.includes('brands')) {
            icon.classList.add('fab');
          };

          let text = node('span:' + item.label + '|class:auto-suggest-icon-text');

          resultItem.button.appendChild(icon);
          resultItem.button.appendChild(text);

          li.appendChild(resultItem.button);
          suggestList.appendChild(li);
        });
      }
    };

    listType[type]();
  };

  this.render.navigateResults = (event) => {
    let elementToFocus = null;

    let focusIndex = null;

    const allSuggestItems = this.suggestPanel.querySelectorAll('.auto-suggest-item');

    const columnCount = getComputedStyle(this.suggestPanel.querySelector('.auto-suggest-list')).getPropertyValue('grid-template-columns').split(' ').length;

    const findFocus = () => {
      for (var i = 0; i < allSuggestItems.length; i++) {
        if (allSuggestItems[i] == document.activeElement) {
          focusIndex = i;
        };
      };
    };

    const keyEvents = () => {
      // up
      if (event.keyCode == 38) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex >= columnCount && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - columnCount];
          } else {
            elementToFocus = input;
          };
        };
      };
      // down
      if (event.keyCode == 40) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex < allSuggestItems.length - columnCount) {
            elementToFocus = allSuggestItems[focusIndex + columnCount];
          } else {
            elementToFocus = input;
          };
        };
      };
      // right
      if (event.keyCode == 39 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[0];
        } else {
          if (focusIndex >= 0 && focusIndex < allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex + 1];
          } else {
            elementToFocus = input;
          };
        };
      };
      // left
      if (event.keyCode == 37 && document.activeElement != input) {
        event.preventDefault();
        if (focusIndex == null) {
          elementToFocus = allSuggestItems[allSuggestItems.length - 1];
        } else {
          if (focusIndex > 0 && focusIndex <= allSuggestItems.length - 1) {
            elementToFocus = allSuggestItems[focusIndex - 1];
          } else {
            elementToFocus = input;
          };
        };
      };
      // tab
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        event.preventDefault();
        elementToFocus = allSuggestItems[0];
      };
      if (!event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[allSuggestItems.length - 1]) {
        event.preventDefault();
        elementToFocus = postFocus;
        this.close();
      };
      // shift tab
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == allSuggestItems[0]) {
        event.preventDefault();
        elementToFocus = input;
      };
      if (event.shiftKey && event.keyCode == 9 && document.activeElement == input) {
        this.close();
      };
    };

    findFocus();

    keyEvents();

    if (elementToFocus) {
      elementToFocus.focus();
    };
  };

  this.bind.input();
};

const autoSuggest_autoSuggest = {};

autoSuggest_autoSuggest.close = function() {
  const allSuggest = document.querySelectorAll('.auto-suggest');

  if (allSuggest.length > 0) {
    allSuggest.forEach((item, i) => {
      item.close();
    });

    state_state.get.current().autoSuggest = false;
  };
};

autoSuggest_autoSuggest.init = function() {
  state_state.get.current().autoSuggest = false;
};



;// CONCATENATED MODULE: ./src/component/pageLock/index.js


const pageLock = {};

pageLock.render = () => {
  const html = document.querySelector('html');

  if (state_state.get.current().modal || state_state.get.current().menu) {
    html.classList.add('is-scroll-disabled');
  } else {
    html.classList.remove('is-scroll-disabled');
  };
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/modal/index.css
var modal = __webpack_require__(4719);
;// CONCATENATED MODULE: ./src/component/modal/index.css

            

var modal_options = {};

modal_options.insert = "head";
modal_options.singleton = false;

var modal_update = injectStylesIntoStyleTag_default()(modal/* default */.Z, modal_options);



/* harmony default export */ const component_modal = (modal/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/modal/index.js












const maxHeadingLength = 50;

let previousModal = null;

const modal_modal = {}

modal_modal.mod = {};

modal_modal.mod.open = function() {
  state_state.get.current().modal = true;
};

modal_modal.mod.close = function() {
  state_state.get.current().modal = false;
};

modal_modal.bind = {};

modal_modal.bind.close = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(previousModal) && !path.includes(autoSuggest_autoSuggest.current)) {
      modal_modal.close();
    };
  },
  add: function() {
    window.addEventListener('mouseup', modal_modal.bind.close.check);
  },
  remove: function() {
    window.removeEventListener('mouseup', modal_modal.bind.close.check);
  }
};

modal_modal.bind.focus = {
  loop: function(event) {
    const allElements = document.querySelector('.modal').querySelectorAll('[tabindex]');

    const firstElement = allElements[0];

    const lastElement = allElements[allElements.length - 1];

    if (event.keyCode == 9 && event.shiftKey) {

      if (document.activeElement === firstElement) {
        lastElement.focus();

        event.preventDefault();
      }

    } else if (event.keyCode == 9) {

      if (document.activeElement === lastElement) {
        firstElement.focus();

        event.preventDefault();
      }

    };
  },
  add: function() {
    window.addEventListener('keydown', modal_modal.bind.focus.loop);
  },
  remove: function() {
    window.removeEventListener('keydown', modal_modal.bind.focus.loop);
  }
};

modal_modal.render = {};

modal_modal.render.toggle = function(options) {
  if (state_state.get.current().modal) {
    render.open(options);
  } else {
    render.close();
  };
};

modal_modal.render.close = function() {
  var allModal = document.querySelectorAll('.modal');
  if (allModal[0]) {
    for (var i = 0; i < allModal.length; i++) {
      allModal[i].close();
    };
  };
  previousModal = null;
};

modal_modal.render.open = function({ heading = 'Heading', content = 'Body', successAction = false, cancelAction = false, dismissAction = false, actionText = 'OK', cancelText = 'Cancel', size = 'medium', width = false, maxHeight = false, overscroll = false } = {}) {

  if (previousModal != null) {
    modal_modal.render.close();
  };

  modal_modal.bind.focus.add();

  modal_modal.bind.close.add();

  var modalElement = node('div|class:modal');

  var modalShade = node('div|class:modal-shade');

  if (overscroll) {
    modalElement.classList.add('modal-overscroll');
  };

  if (maxHeight) {
    modalElement.classList.add('modal-max-height');
  };

  var modalContentWrapper = node('div|class:modal-content-wrapper');

  var modalContent = node('div|class:modal-content');

  if (width && typeof width == 'number') {

    modalElement.setAttribute('style', '--modal-size: ' + width + 'em;');

  } else {

    switch (size) {
      case 'small':
        modalElement.setAttribute('style', '--modal-size: var(--modal-small);');
        break;

      case 'medium':
        modalElement.setAttribute('style', '--modal-size: var(--modal-medium);');
        break;

      case 'large':
        modalElement.setAttribute('style', '--modal-size: var(--modal-large);');
        break;
    };

  };

  modalElement.close = () => {
    if (modalShade.classList.contains('is-opaque')) {
      modalShade.classList.remove('is-opaque');
      modalShade.classList.add('is-transparent');
    } else {
      modalShade.remove();
    };

    if (modalElement.classList.contains('is-opaque')) {
      modalElement.classList.remove('is-opaque');
      modalElement.classList.add('is-transparent');
    } else {
      modalElement.remove();
    };

    modal_modal.bind.focus.remove();

    modal_modal.bind.close.remove();

    if (dismissAction) {
      dismissAction();
    };
  };

  const modalBody = node('div|class:modal-body');

  const modalControls = node('div|class:modal-controls form-group');

  const modalAction = new Button({
    text: actionText,
    style: ['line'],
    iconName: false,
    block: true,
    classList: ['modal-button'],
    func: () => {
      if (successAction) {
        successAction();
      };
      modal_modal.close();
    }
  });

  const modalCancel = new Button({
    text: cancelText,
    style: ['line'],
    iconName: false,
    block: true,
    classList: ['modal-button'],
    func: () => {
      if (cancelAction) {
        cancelAction();
      };
      modal_modal.close();
    }
  });

  modalControls.appendChild(modalCancel.button);

  modalControls.appendChild(modalAction.button);

  let modalHeading = null;

  let headingText = null;

  if (heading && isValidString(heading)) {
    if (heading.length > maxHeadingLength) {
      heading = heading.substring(0, maxHeadingLength).replace(/\s+$/, '') + '...';
    };

    modalHeading = node('div|class:modal-heading');

    headingText = complexNode({
      tag: 'h1',
      text: heading,
      attr: [{
        key: 'tabindex',
        value: 1
      }, {
        key: 'class',
        value: 'modal-heading-text'
      }]
    });

    modalHeading.appendChild(headingText);

    modalContent.appendChild(modalHeading);
  };

  if (content) {
    if (typeof content == 'string') {
      const container = node('div|class:modal-container,tabindex:1');

      const para = complexNode({
        tag: 'p',
        text: content
      });

      container.appendChild(para);

      modalBody.appendChild(container);
    } else {
      modalBody.appendChild(content);
    };
  };

  modalContent.appendChild(modalBody);

  modalContentWrapper.appendChild(modalContent);

  modalElement.appendChild(modalContentWrapper);

  modalElement.appendChild(modalControls);

  modalElement.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
      this.remove();
    };
  });

  modalShade.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
      this.remove();
    };
  });

  previousModal = modalElement;

  const body = document.querySelector('body');

  body.appendChild(modalShade);

  getComputedStyle(modalShade).opacity;

  modalShade.classList.remove('is-transparent');

  modalShade.classList.add('is-opaque');

  body.appendChild(modalElement);

  getComputedStyle(modalElement).opacity;

  modalElement.classList.remove('is-transparent');

  modalElement.classList.add('is-opaque');

  if (heading) {
    headingText.focus(this);
  } else if (content) {
    container.focus(this);
  };
};

modal_modal.open = function(options) {
  modal_modal.mod.open();
  modal_modal.render.open(options);
  pageLock.render();
};

modal_modal.close = function() {
  modal_modal.mod.close();
  modal_modal.render.close();
  pageLock.render();
};

modal_modal.init = function() {
  modal_modal.close();
};



;// CONCATENATED MODULE: ./src/utility/convertColor.js
const convertColor = {
  rgb: {},
  hsl: {},
  hex: {}
};

convertColor.rgb.hsl = function(rgb) {
  var r = rgb.r / 255;
  var g = rgb.g / 255;
  var b = rgb.b / 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  };

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  };

  var l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  };

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

convertColor.rgb.hex = function(args) {
  var integer = ((Math.round(args.r) & 0xFF) << 16) +
    ((Math.round(args.g) & 0xFF) << 8) +
    (Math.round(args.b) & 0xFF);

  var string = integer.toString(16);
  return '#' + '000000'.substring(string.length) + string;
};

convertColor.hsl.rgb = function(hsl) {
  var h = hsl.h / 360;
  var s = hsl.s / 100;
  var l = hsl.l / 100;
  var t2;
  var t3;
  var val;

  if (s === 0) {
    val = l * 255;
    return {
      r: Math.round(val),
      g: Math.round(val),
      b: Math.round(val)
    };
  };

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  };

  var t1 = 2 * l - t2;

  var rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    };

    if (t3 > 1) {
      t3--;
    };

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    };

    rgb[i] = val * 255;
  };

  return {
    r: Math.round(rgb[0]),
    g: Math.round(rgb[1]),
    b: Math.round(rgb[2])
  };
};

convertColor.hex.rgb = function(args) {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return {
      r: 0,
      g: 0,
      b: 0
    };
  };

  var colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map(function(char) {
      return char + char;
    }).join('');
  };

  var integer = parseInt(colorString, 16);
  var r = (integer >> 16) & 0xFF;
  var g = (integer >> 8) & 0xFF;
  var b = integer & 0xFF;

  return {
    r: r,
    g: g,
    b: b
  };
};

;// CONCATENATED MODULE: ./src/component/video/index.js








const Video = function({ url = false } = {}) {

  this.video = node('video|autoplay,loop,muted');

  this.source = node('source');

  this.video.appendChild(this.source);

  if (isValidString(url)) {

    this.source.src = url;

    this.video.muted = true;

    this.video.loop = true;

    this.video.autoplay = true;

  };

  if (url.includes('mp4') || url.endsWith('mp4')) {

    this.source.type = 'video/mp4';

  } else if (url.includes('webm') || url.endsWith('webm')) {

    this.source.type = 'video/webm';

  };

  this.play = () => {
    this.video.play();
  };

  this.pause = () => {
    var playPromise = this.video.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.video.pause();
      });
    };
  };
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/theme/index.css
var theme = __webpack_require__(8776);
;// CONCATENATED MODULE: ./src/component/theme/index.css

            

var theme_options = {};

theme_options.insert = "head";
theme_options.singleton = false;

var theme_update = injectStylesIntoStyleTag_default()(theme/* default */.Z, theme_options);



/* harmony default export */ const component_theme = (theme/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/theme/index.js












const theme_theme = {};

theme_theme.bind = {};

theme_theme.bind.style = {
  initial: function() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
      theme_theme.mod.style.initial();
    });
  }
};

theme_theme.mod = {};

theme_theme.mod.style = {
  initial: function() {
    switch (state_state.get.current().theme.style) {
      case 'dark':
      case 'light':
        localStorage.setItem(data.saveName + 'Style', state_state.get.current().theme.style);
        break;

      case 'system':
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          localStorage.setItem(data.saveName + 'Style', 'dark');
        } else if (window.matchMedia('(prefers-color-scheme:light)').matches) {
          localStorage.setItem(data.saveName + 'Style', 'light');
        };
        break;
    };
  },
  light: function() {
    state_state.get.current().theme.style = 'light';
  },
  dark: function() {
    state_state.get.current().theme.style = 'dark';
  }
};

theme_theme.render = {};

theme_theme.render.color = function() {
  const html = document.querySelector('html');

  let shades = (state_state.get.current().theme.color.lightness.end - state_state.get.current().theme.color.lightness.start) / (state_state.get.current().theme.color.shades - 1);

  for (var type in state_state.get.current().theme.color.range) {

    for (var i = 0; i < state_state.get.current().theme.color.shades; i++) {

      let hsl = JSON.parse(JSON.stringify(state_state.get.current().theme.color.range[type]));

      hsl.l = Math.round((shades * i) + state_state.get.current().theme.color.lightness.start);

      let rgb = convertColor.hsl.rgb(hsl);

      for (var key in rgb) {
        html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, rgb[key]);
      };

      for (var key in hsl) {
        html.style.setProperty(`--theme-${type}-${i + 1}-${key}`, hsl[key]);
      };

    };

  };

};

theme_theme.render.class = function() {
  const html = document.querySelector('html');

  if (state_state.get.current().bookmark.edit) {
    html.classList.add('is-bookmark-edit');
  } else {
    html.classList.remove('is-bookmark-edit');
  };

  const type = ['dark', 'light', 'system', 'theme', 'custom'];

  type.forEach((item, i) => {
    html.classList.remove('is-theme-style-' + item);
    html.classList.remove('is-theme-bookmark-shadow-color-type-' + item);
  });

  html.classList.add('is-theme-style-' + state_state.get.current().theme.style);
  html.classList.add('is-theme-bookmark-shadow-color-type-' + state_state.get.current().theme.bookmark.shadow.color.type);
};

theme_theme.render.accent = function() {
  const html = document.querySelector('html');
  const rgb = state_state.get.current().theme.accent.rgb;
  html.style.setProperty('--theme-accent-r', rgb.r);
  html.style.setProperty('--theme-accent-g', rgb.g);
  html.style.setProperty('--theme-accent-b', rgb.b);
};

theme_theme.render.radius = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-radius', state_state.get.current().theme.radius);
};

theme_theme.render.shadow = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-shadow', state_state.get.current().theme.shadow);
};

theme_theme.style = {
  dark: function() {
    theme_theme.mod.style.dark();
    theme_theme.mod.style.initial();
    theme_theme.render.class();
  },
  light: function() {
    theme_theme.mod.style.light();
    theme_theme.mod.style.initial();
    theme_theme.render.class();
  },
  toggle: function() {
    if (state_state.get.current().theme.style == 'dark') {
      theme_theme.style.light();
    } else if (state_state.get.current().theme.style == 'light') {
      theme_theme.style.dark();
    };
  }
}

theme_theme.render.bookmark = {};

theme_theme.render.bookmark.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--theme-bookmark-shadow-color', state_state.get.current().theme.bookmark.shadow.color.rgb.r + ', ' + state_state.get.current().theme.bookmark.shadow.color.rgb.g + ', ' + state_state.get.current().theme.bookmark.shadow.color.rgb.b);
  html.style.setProperty('--theme-bookmark-shadow-opacity', state_state.get.current().theme.bookmark.shadow.opacity);
};

theme_theme.render.background = {};

theme_theme.render.background.choices = ['theme', 'accent', 'color', 'gradient', 'image', 'video'];

theme_theme.render.background.area = function() {
  const backgroundElement = node('div|class:theme-background');

  theme_theme.render.background.choices.forEach((item, i) => {
    backgroundElement.appendChild(node('div|class:theme-background-type theme-background-type-' + item));
  });

  document.querySelector('body').appendChild(backgroundElement);
};

theme_theme.render.background.type = function() {
  const html = document.querySelector('html');

  theme_theme.render.background.choices.forEach((item, i) => {
    html.classList.remove('is-theme-background-type-' + item);
  });

  html.classList.add('is-theme-background-type-' + state_state.get.current().theme.background.type);
};

theme_theme.render.background.color = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-color', state_state.get.current().theme.background.color.rgb.r + ', ' + state_state.get.current().theme.background.color.rgb.g + ', ' + state_state.get.current().theme.background.color.rgb.b);
};

theme_theme.render.background.gradient = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-gradient-angle', state_state.get.current().theme.background.gradient.angle);

  html.style.setProperty('--theme-background-gradient-start', state_state.get.current().theme.background.gradient.start.rgb.r + ', ' + state_state.get.current().theme.background.gradient.start.rgb.g + ', ' + state_state.get.current().theme.background.gradient.start.rgb.b);

  html.style.setProperty('--theme-background-gradient-end', state_state.get.current().theme.background.gradient.end.rgb.r + ', ' + state_state.get.current().theme.background.gradient.end.rgb.g + ', ' + state_state.get.current().theme.background.gradient.end.rgb.b);
};

theme_theme.render.background.image = {};

theme_theme.render.background.image.set = function() {
  const html = document.querySelector('html');

  if (isValidString(state_state.get.current().theme.background.image.url)) {
    html.style.setProperty('--theme-background-image', 'url(' + trimString(state_state.get.current().theme.background.image.url) + ')');
  } else {
    html.style.removeProperty('--theme-background-image');
  };
};

theme_theme.render.background.image.filter = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-image-blur', state_state.get.current().theme.background.image.blur);
  html.style.setProperty('--theme-background-image-scale', state_state.get.current().theme.background.image.scale);
  html.style.setProperty('--theme-background-image-opacity', state_state.get.current().theme.background.image.opacity);
};

theme_theme.render.background.video = {};

theme_theme.render.background.video.element = false;

theme_theme.render.background.video.set = function() {
  theme_theme.render.background.video.element = new Video({
    url: state_state.get.current().theme.background.video.url
  });
};

theme_theme.render.background.video.add = function() {
  if (isValidString(state_state.get.current().theme.background.video.url)) {

    const themeBackgroundTypeVideo = document.querySelector('.theme-background-type-video');

    themeBackgroundTypeVideo.appendChild(theme_theme.render.background.video.element.video);

  } else {

    theme_theme.render.background.video.remove();

  };
};

theme_theme.render.background.video.remove = function() {
  const themeBackgroundTypeVideo = document.querySelector('.theme-background-type-video');

  if (themeBackgroundTypeVideo.lastChild) {
    while (themeBackgroundTypeVideo.lastChild) {
      themeBackgroundTypeVideo.removeChild(themeBackgroundTypeVideo.lastChild);
    };
  };
};

theme_theme.render.background.video.filter = function() {
  const html = document.querySelector('html');

  html.style.setProperty('--theme-background-video-blur', state_state.get.current().theme.background.video.blur);
  html.style.setProperty('--theme-background-video-scale', state_state.get.current().theme.background.video.scale);
  html.style.setProperty('--theme-background-video-opacity', state_state.get.current().theme.background.video.opacity);
};

theme_theme.init = function() {
  theme_theme.mod.style.initial();
  theme_theme.bind.style.initial();
  theme_theme.render.color();
  theme_theme.render.accent();
  theme_theme.render.class();
  theme_theme.render.radius();
  theme_theme.render.shadow();
  theme_theme.render.bookmark.style();
  theme_theme.render.background.area();
  theme_theme.render.background.type();
  theme_theme.render.background.color();
  theme_theme.render.background.gradient();
  theme_theme.render.background.image.set();
  theme_theme.render.background.image.filter();
  theme_theme.render.background.video.set();
  theme_theme.render.background.video.add();
  theme_theme.render.background.video.filter();
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/collapse/index.css
var collapse = __webpack_require__(5655);
;// CONCATENATED MODULE: ./src/component/collapse/index.css

            

var collapse_options = {};

collapse_options.insert = "head";
collapse_options.singleton = false;

var collapse_update = injectStylesIntoStyleTag_default()(collapse/* default */.Z, collapse_options);



/* harmony default export */ const component_collapse = (collapse/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/collapse/index.js








const Collapse = function({ type = false, radioGroup = false, checkbox = false, target = false } = {}) {

  target.forEach((item, i) => {
    item.state = {
      collapsed: true
    };

    item.area = node('div|class:collapse-area');

    item.spacer = node('div|class:collapse-spacer');
  });

  this.target = () => {
    return target;
  };

  this.collapseElement = node('div|class:collapse');

  this.collapse = () => {
    target.forEach((item, i) => {
      item.spacer.appendChild(item.content);

      item.area.appendChild(item.spacer);

      this.collapseElement.appendChild(item.area);
    });

    return this.collapseElement;
  };

  this.toggle = () => {
    target.forEach((item, i) => {
      if (item.state.collapsed) {
        item.state.collapsed = false;
      } else {
        item.state.collapsed = true;
      };
    });

    this.update();
  };

  this.renderTarget = (state, area) => {
    if (state) {
      area.classList.add('is-collapsed');
      area.setAttribute('aria-hidden', true);
    } else {
      area.classList.remove('is-collapsed');
      area.removeAttribute('aria-hidden');
    };
  };

  this.renderToggle = (state, toggle) => {
    if (state) {
      toggle.classList.remove('active');
      toggle.classList.remove('is-collapsed');
    } else {
      toggle.classList.add('active');
      toggle.classList.add('is-collapsed');
    };
  };

  this.update = () => {

    switch (type) {
      case 'radio':
        const selectedRadioValue = radioGroup.value();

        target.forEach((item, i) => {

          this.renderTarget(!(item.id === selectedRadioValue), item.area);

        });
        break;

      case 'checkbox':
        const state = checkbox.checked();

        target.forEach((item, i) => {

          this.renderTarget(!state, item.area);

        });
        break;

      case 'toggle':
        target.forEach((item, i) => {

          this.renderTarget(item.state.collapsed, item.area);

          if (item.toggle) {
            this.renderToggle(item.state.collapsed, item.toggle);
          };

        });
        break;
    };
  };
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/tab/index.css
var tab = __webpack_require__(4088);
;// CONCATENATED MODULE: ./src/component/tab/index.css

            

var tab_options = {};

tab_options.insert = "head";
tab_options.singleton = false;

var tab_update = injectStylesIntoStyleTag_default()(tab/* default */.Z, tab_options);



/* harmony default export */ const component_tab = (tab/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/tab/index.js









const Tab = function({ group = [] } = {}) {
  this.tabElement = node('div|class:tab');

  this.tabNav = node('div|class:tab-nav form-group form-group-horizontal form-group-block');

  this.tabContent = node('div|class:tab-content');

  this.tabElement.appendChild(this.tabNav);

  this.tabElement.appendChild(this.tabContent);

  this.deactive = () => {
    group.forEach((item, i) => {
      item.active = false;
    });
  };

  group.forEach((item, i) => {
    item.toggle = new Button({
      text: item.tabText,
      style: ['line'],
      classList: ['form-group-item-equal'],
      func: () => {

        this.deactive();
        item.active = true;
        this.update();

      }
    });

    this.tabNav.appendChild(item.toggle.button);

    this.tabContent.appendChild(item.area);
  });

  this.update = () => {
    group.forEach((item, i) => {

      if (item.active) {
        item.toggle.active();
        item.area.classList.remove('is-hidden');
      } else {
        item.toggle.deactive();
        item.area.classList.add('is-hidden');
      };

    });
  };

  this.update();

  this.tab = () => {
    return this.tabElement;
  };
};



;// CONCATENATED MODULE: ./src/component/hexTile/index.js














const HexTile = function({ bookmarkData = {}, index = 0, row = 0, column = 0, preview = false } = {}) {

  this.element = {
    bookmark: node('div|class:bookmark'),
    shadow: {
      wrap: node('div|class:bookmark-shadow-wrap'),
      shadow: node('div|class:bookmark-shadow')
    },
    content: {
      link: node('a|class:bookmark-link,tabindex:1'),
      wrap: node('div|class:bookmark-content-wrap'),
      display: {
        wrap: node('div|class:bookmark-display-wrap'),
        display: node('div|class:bookmark-display'),
        visual: {
          visual: node('div|class:bookmark-display-visual'),
          letter: node('div:' + bookmarkData.display.visual.letter.text + '|class:bookmark-display-visual-letter'),
          icon: node('div|class:bookmark-display-visual-icon'),
          faIcon: node('div|class:' + bookmarkData.display.visual.icon.prefix + ' fa-' + bookmarkData.display.visual.icon.name),
          image: node('div|class:bookmark-display-visual-image')
        },
        name: {
          name: node('div|class:bookmark-display-name'),
          text: node('div:' + bookmarkData.display.name.text + '|class:bookmark-display-name-text')
        }
      },
      background: {
        wrap: node('div|class:bookmark-background-wrap'),
        image: node('div|class:bookmark-background-image'),
        video: node('div|class:bookmark-background-video')
      }
    },
    control: node('div|class:bookmark-control')
  };

  if (preview) { this.element.bookmark.classList.add('bookmark-preview'); };

  this.makeStyle = (newBookmarkData) => {

    if (newBookmarkData) {
      bookmarkData = newBookmarkData;
    };

    this.element.bookmark.style.setProperty('--bookmark-row-start', row);

    this.element.bookmark.style.setProperty('--bookmark-column-start', column);

    if (isValidString(bookmarkData.url) && !preview) {
      this.element.content.link.setAttribute('href', trimString(bookmarkData.url));
    } else {
      this.element.content.link.setAttribute('href', '#');
    };

    this.element.bookmark.style.setProperty('--bookmark-transition-delay', index);

    this.element.bookmark.style.setProperty('--bookmark-color-opacity', bookmarkData.color.opacity);

    switch (bookmarkData.display.direction) {
      case 'vertical':
        switch (bookmarkData.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'column-reverse');
            break;
        };
        break;

      case 'horizontal':
        switch (bookmarkData.display.order) {
          case 'visual-name':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row');
            break;

          case 'name-visual':
            this.element.bookmark.style.setProperty('--bookmark-display-direction', 'row-reverse');
            break;
        };
        break;
    };

    this.element.bookmark.style.setProperty('--bookmark-display-translate-x', bookmarkData.display.translate.x);

    this.element.bookmark.style.setProperty('--bookmark-display-translate-y', bookmarkData.display.translate.y);

    this.element.bookmark.style.setProperty('--bookmark-display-rotate', bookmarkData.display.rotate);

    this.element.bookmark.style.setProperty('--bookmark-display-gutter', bookmarkData.display.gutter);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-size', bookmarkData.display.visual.size);

    this.element.bookmark.style.setProperty('--bookmark-display-visual-image-url', 'url(' + trimString(bookmarkData.display.visual.image.url) + ')');

    this.element.bookmark.style.setProperty('--bookmark-display-name-size', bookmarkData.display.name.size);

    if (bookmarkData.accent.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-accent-r', bookmarkData.accent.rgb.r);
      this.element.bookmark.style.setProperty('--theme-accent-g', bookmarkData.accent.rgb.g);
      this.element.bookmark.style.setProperty('--theme-accent-b', bookmarkData.accent.rgb.b);
      this.element.bookmark.style.setProperty('--theme-accent', 'var(--theme-accent-r), var(--theme-accent-g), var(--theme-accent-b)');

      this.element.bookmark.style.setProperty('--theme-accent-text', '0, 0%, calc(((((var(--theme-accent-r) * var(--theme-t-r)) + (var(--theme-accent-g) * var(--theme-t-g)) + (var(--theme-accent-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-display-visual-color', 'var(--theme-accent)');
      this.element.bookmark.style.setProperty('--bookmark-display-visual-color-focus-hover', 'var(--theme-accent)');
    };

    if (bookmarkData.color.by == 'custom') {
      this.element.bookmark.style.setProperty('--theme-color-r', bookmarkData.color.rgb.r);
      this.element.bookmark.style.setProperty('--theme-color-g', bookmarkData.color.rgb.g);
      this.element.bookmark.style.setProperty('--theme-color-b', bookmarkData.color.rgb.b);

      this.element.bookmark.style.setProperty('--theme-color-h', bookmarkData.color.hsl.h);
      this.element.bookmark.style.setProperty('--theme-color-s', bookmarkData.color.hsl.s);
      this.element.bookmark.style.setProperty('--theme-color-l', bookmarkData.color.hsl.l);

      this.element.bookmark.style.setProperty('--theme-color', bookmarkData.color.hsl.h + ', ' + bookmarkData.color.hsl.s + '%, ' + bookmarkData.color.hsl.l + '%');
      this.element.bookmark.style.setProperty('--theme-color-text', '0, 0%, calc(((((var(--theme-color-r) * var(--theme-t-r)) + (var(--theme-color-g) * var(--theme-t-g)) + (var(--theme-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

      this.element.bookmark.style.setProperty('--bookmark-color', 'var(--theme-color)');
      this.element.bookmark.style.setProperty('--bookmark-color-focus-hover', 'var(--theme-color)');

      this.element.bookmark.style.setProperty('--bookmark-display-name-color', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--bookmark-display-name-color-focus-hover', 'var(--theme-color-text)');

      this.element.bookmark.style.setProperty('--button-link-text', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-focus-hover', 'var(--theme-color-text)');
      this.element.bookmark.style.setProperty('--button-link-text-active', 'var(--theme-color-text)');
    };

    if (bookmarkData.background.show) {
      this.element.bookmark.style.setProperty('--bookmark-background-opacity', bookmarkData.background.opacity);

      switch (bookmarkData.background.type) {
        case 'image':
          if (isValidString(bookmarkData.background.image.url)) {
            this.element.bookmark.style.setProperty('--bookmark-background-image-url', 'url(' + trimString(bookmarkData.background.image.url) + ')');
          };
          break;
      };
    };

  };

  this.control = {};

  this.control.button = {
    left: new Button({
      text: 'Move this bookmark left',
      srOnly: true,
      iconName: 'arrowKeyboardLeft',
      style: ['link'],
      title: 'Edit this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-left'],
      func: () => {
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index - 1;
        if (newBookmarkData.position.destination < 0) {
          newBookmarkData.position.destination = 0;
        };
        bookmark_bookmark.mod.item.move(newBookmarkData);
        bookmark_bookmark.render.clear();
        bookmark_bookmark.render.item();
        data.save();
      }
    }),
    right: new Button({
      text: 'Move this bookmark right',
      srOnly: true,
      iconName: 'arrowKeyboardRight',
      style: ['link'],
      title: 'Move this bookmark left',
      classList: ['bookmark-control-button', 'bookmark-control-right'],
      func: () => {
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index + 1;
        if (newBookmarkData.position.destination > bookmark_bookmark.all.length - 1) {
          newBookmarkData.position.destination = bookmark_bookmark.all.length - 1;
        };
        bookmark_bookmark.mod.item.move(newBookmarkData);
        bookmark_bookmark.render.clear();
        bookmark_bookmark.render.item();
        data.save();
      }
    }),
    edit: new Button({
      text: 'Edit this bookmark',
      srOnly: true,
      iconName: 'edit',
      style: ['link'],
      title: 'Move this bookmark right',
      classList: ['bookmark-control-button', 'bookmark-control-edit'],
      func: () => {
        let newBookmarkData = new StagedLink();
        newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
        newBookmarkData.position.origin = index;
        newBookmarkData.position.destination = index;
        modal_modal.open({
          heading: 'Edit ' + bookmarkData.display.name.text,
          actionText: 'Save',
          content: bookmark_bookmark.form(newBookmarkData),
          width: 60,
          maxHeight: true,
          successAction: () => {
            bookmark_bookmark.mod.item.edit(newBookmarkData);
            bookmark_bookmark.mod.propagate.state.apply(newBookmarkData);
            bookmark_bookmark.render.clear();
            bookmark_bookmark.render.item();
            data.save();
          }
        });
      }
    }),
    remove: new Button({
      text: 'Remove this bookmark',
      srOnly: true,
      iconName: 'cross',
      style: ['link'],
      title: 'Remove this bookmark',
      classList: ['bookmark-control-button', 'bookmark-control-remove'],
      func: () => {
        let heading;
        if (isValidString(bookmarkData.display.name.text)) {
          heading = 'Remove ' + bookmarkData.display.name.text;
        } else {
          heading = 'Remove unnamed bookmark';
        };
        modal_modal.open({
          heading: heading,
          size: 'small',
          actionText: 'Remove',
          content: 'Are you sure you want to remove this Bookmark? This can not be undone.',
          successAction: () => {
            let newBookmarkData = new StagedLink();
            newBookmarkData.link = JSON.parse(JSON.stringify(bookmarkData));
            newBookmarkData.position.origin = index;
            newBookmarkData.position.destination = index;
            bookmark_bookmark.mod.item.remove(newBookmarkData);
            bookmark_bookmark.render.clear();
            bookmark_bookmark.render.item();
            data.save();
          }
        });
      }
    })
  };

  this.control.disable = () => {
    for (var key in this.control.button) {
      this.control.button[key].disable();
    };
  };

  this.control.enable = () => {
    for (var key in this.control.button) {
      this.control.button[key].enable();
    };
  };

  this.assembleElements = () => {

    if (bookmarkData.display.visual.show || bookmarkData.display.name.show) {
      if (bookmarkData.display.visual.show) {
        switch (bookmarkData.display.visual.type) {
          case 'letter':
            if (isValidString(bookmarkData.display.visual.letter.text)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.letter);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'icon':
            if (isValidString(bookmarkData.display.visual.icon.name)) {
              this.element.content.display.visual.icon.appendChild(this.element.content.display.visual.faIcon);
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.icon);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;

          case 'image':
            if (isValidString(bookmarkData.display.visual.image.url)) {
              this.element.content.display.visual.visual.appendChild(this.element.content.display.visual.image);
              this.element.content.display.display.appendChild(this.element.content.display.visual.visual);
            };
            break;
        };
      };

      if (bookmarkData.display.name.show && isValidString(bookmarkData.display.name.text)) {
        this.element.content.display.name.name.appendChild(this.element.content.display.name.text);
        this.element.content.display.display.appendChild(this.element.content.display.name.name);
      };

      this.element.content.display.wrap.appendChild(this.element.content.display.display);

      this.element.content.link.appendChild(this.element.content.display.wrap);
    };

    if (bookmarkData.background.show) {

      switch (bookmarkData.background.type) {
        case 'image':
          this.element.content.background.wrap.appendChild(this.element.content.background.image);
          break;

        case 'video':
          this.element.content.background.wrap.appendChild(this.element.content.background.video);

          if (isValidString(bookmarkData.background.video.url)) {
            const backgroundVideoElement = new Video({
              url: bookmarkData.background.video.url
            });

            this.element.content.background.video.appendChild(backgroundVideoElement.video);
          };

          break;
      };

      this.element.content.link.appendChild(this.element.content.background.wrap);
    };

    this.element.content.wrap.appendChild(this.element.content.link);

    this.element.shadow.wrap.appendChild(this.element.shadow.shadow);

    this.element.bookmark.appendChild(this.element.shadow.wrap);

    this.element.bookmark.appendChild(this.element.content.wrap);

    this.element.control.appendChild(this.control.button.left.button);

    this.element.control.appendChild(this.control.button.right.button);

    this.element.control.appendChild(this.control.button.edit.button);

    this.element.control.appendChild(this.control.button.remove.button);

    this.element.content.wrap.appendChild(this.element.control);

  };

  this.tile = () => {

    this.assembleElements();

    this.makeStyle();

    if (state_state.get.current().bookmark.edit) {
      this.control.enable();
    } else {
      this.control.disable();
    };

    return this.element.bookmark;

  };

  this.update = (newBookmarkData) => {

    this.makeStyle(newBookmarkData);

  };
};



;// CONCATENATED MODULE: ./src/component/control/helperText/index.js
















const Control_helperText = function({ text = [] } = {}) {

  this.para = [];

  text.forEach((item, i) => {
    this.para.push(helper_helper({
      tag: 'p',
      text: item
    }));
  });

  this.wrap = () => {
    const formWrap = wrap_wrap();

    this.para.forEach((item, i) => {
      formWrap.appendChild(item);
    });

    return formWrap;
  };

  this.disable = () => {
    this.para.forEach((item, i) => {
      item.classList.add('disabled');
    });
  };

  this.enable = () => {
    this.para.forEach((item, i) => {
      item.classList.remove('disabled');
    });
  };

};

;// CONCATENATED MODULE: ./src/utility/makePath.js
const makePath = function(string) {
  if (string) {
    let array;
    if (string.indexOf('[') != -1 && string.indexOf(']') != -1) {
      array = string.split('.').join(',').split('[').join(',').split(']').join(',').split(',');
      for (var i = 0; i < array.length; i++) {
        if (array[i] == '') {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };
    } else {
      array = string.split('.');
    };
    return array;
  } else {
    return false;
  };
};

;// CONCATENATED MODULE: ./src/utility/get.js


const get = function({ object = null, path = null } = {}) {
  const address = makePath(path);

  const getValue = function() {
    while (address.length > 1) {
      // shift off and store the first key
      var currentKey = address.shift();
      // if the key is not found make a new object
      if (!(currentKey in object)) {
        // make an empty object in the current object level
        if (isNaN(currentKey)) {
          object[currentKey] = {};
        } else {
          object[currentKey] = [];
        };
      };
      // drill down the object with the first key
      object = object[currentKey];
    };
    var finalKey = address.shift();
    if (!(finalKey in object)) {
      return '';
    } else {
      return object[finalKey];
    };
  };

  if (object != null && path != null) {
    return getValue();
  } else {
    return false;
  };
};

;// CONCATENATED MODULE: ./src/utility/set.js


const set = function({ path = null, object = null, value = null } = {}) {
  const address = makePath(path);

  const setValue = function() {
    while (address.length > 1) {
      // shift off and store the first key
      var currentKey = address.shift();
      // if the key is not found make a new object
      if (!(currentKey in object)) {
        // make an empty object in the current object level
        if (isNaN(currentKey)) {
          object[currentKey] = {};
        } else {
          object[currentKey] = [];
        };
      };
      // drill down the object with the first key
      object = object[currentKey];
    };
    var finalKey = address.shift();
    object[finalKey] = value;
  };

  if (object != null && path != null && value != null) {
    setValue();
  } else {
    return false;
  };
};

;// CONCATENATED MODULE: ./src/component/control/inputButton/index.js
















const Control_inputButton = function({ object = {}, path = false, id = 'name', classList = [], inputButtonClassList = [], type = false, inputHide = false, labelText = 'Name', srOnly = false, inputButton = [], action = false } = {}) {

  this.input;

  switch (type) {
    case 'file':
      this.input = file_file({
        id: id,
        func: () => {
          if (action) {
            action();
          };
        }
      });

      break;

    case 'color':
      this.input = color_color({
        id: id,
        value: convertColor.rgb.hex(get({
          object: object,
          path: path
        })),
        classList: classList,
        func: () => {
          if (path) {
            set({
              object: object,
              path: path,
              value: convertColor.hex.rgb(this.input.value)
            });
          };
          if (action) {
            action();
          };
        }
      });

      break;
  };

  this.label = label_label({
    text: labelText,
    forInput: id
  });

  this.button = node('div|class:form-input-button');

  if (inputButtonClassList.length > 0) {
    inputButtonClassList.forEach((item, i) => {
      this.button.classList.add(item);
    });
  };

  if (inputButton.length > 0) {
    inputButton.forEach((item, i) => {
      switch (item) {
        case 'link':
          this.button.classList.add('form-input-button-link');
          break;

        case 'line':
          this.button.classList.add('form-input-button-line');
          break;

        case 'ring':
          this.button.classList.add('form-input-button-ring');
          break;

        case 'dot':
          this.button.classList.add('input-color-dot');
          break;
      };
    });
  };

  if (inputHide) {
    this.button.classList.add('form-input-hide');
  };

  if (srOnly) {
    this.button.classList.add('form-input-button-sr-only');
  };

  this.button.appendChild(this.input);

  this.button.appendChild(this.label);

  this.update = () => {
    switch (type) {
      case 'color':
        this.input.value = convertColor.rgb.hex(get({
          object: object,
          path: path,
        }));

        break;
    };
  };

  this.wrap = () => {
    return wrap_wrap({
      children: [
        this.button
      ]
    })
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.input.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.input.disabled = false;
  };

};

;// CONCATENATED MODULE: ./src/component/control/groupText/index.js
















const Control_groupText = function({ text = false, classList = [] } = {}) {

  this.groupText = groupText_groupText({
    text: text,
    classList: classList
  });

  this.update = (content) => {
    while (this.groupText.lastChild) {
      this.groupText.removeChild(this.groupText.lastChild);
    };
    if (typeof content === 'string' && isValidString(content)) {
      this.groupText.textContent = content;
    } else if (content && content != '') {
      this.groupText.appendChild(content);
    };
  };

  this.wrap = () => {
    return wrap_wrap({
      children: [
        this.groupText
      ]
    })
  };

  this.disable = () => {
    this.groupText.classList.add('disabled');
  };

  this.enable = () => {
    this.groupText.classList.remove('disabled');
  };

};

;// CONCATENATED MODULE: ./src/component/control/radio/index.js
















const Control_radio = function({ radioGroup = [], object = {}, groupName = 'group', path = false, action = false } = {}) {

  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {
        radio: radio_radio({
          id: item.id,
          radioGroup: radioGroupName,
          value: item.value,
          checked: (get({
            object: object,
            path: radioGroupPath,
          }) === item.value),
          func: () => {
            set({
              object: object,
              path: radioGroupPath,
              value: item.value
            });
            if (action) {
              action();
            };
          }
        }),
        label: label_label({
          forInput: item.id,
          text: item.labelText,
          description: item.description,
          icon: true
        }),
        wrap: () => {
          return wrap_wrap({
            children: [
              radioAndLabel.radio,
              radioAndLabel.label
            ]
          });
        }
      };

      radioAndLabel.radio.update = () => {
        radioAndLabel.radio.checked = (get({
          object: object,
          path: radioGroupPath,
        }) === item.value);
      };

      radioAndLabel.radio.disable = () => {
        radioAndLabel.radio.disabled = true;
      };

      radioAndLabel.radio.enable = () => {
        radioAndLabel.radio.disabled = false;
      };

      this.radioSet.push(radioAndLabel);
    });
  };

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;
  };

  this.update = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });
  };

  this.wrap = () => {
    const group = wrap_wrap();

    this.radioSet.forEach((item, i) => {
      group.appendChild(
        wrap_wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    return group;
  };

  this.inline = () => {
    const formGroup = wrap_wrap();

    const formInline = inline_inline({
      gap: 'large',
      wrap: true
    });

    this.radioSet.forEach((item, i) => {
      formInline.appendChild(
        wrap_wrap({
          children: [
            item.radio,
            item.label
          ]
        })
      );
    });

    formGroup.appendChild(formInline);

    return formGroup;
  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });
  };

};

;// CONCATENATED MODULE: ./src/component/control/radioGrid/index.js
















const Control_radioGrid = function({ radioGroup = [], label = false, object = {}, groupName = 'group', path = false, gridSize = '3x3', action = false } = {}) {

  this.radioSet = [];

  const radioGroupName = groupName;

  const radioGroupPath = path;

  const gridElement = form_grid_grid();

  let gridLabel = false;

  if (label) {
    gridLabel = label_label({
      text: label
    });
  };

  if (radioGroup.length > 0) {
    radioGroup.forEach((item, i) => {
      const radioAndLabel = {};

      radioAndLabel.position = item.position;

      radioAndLabel.radio = radio_radio({
        id: item.id,
        radioGroup: radioGroupName,
        value: item.value,
        checked: (get({
          object: object,
          path: radioGroupPath,
        }) === item.value),
        func: () => {
          set({
            object: object,
            path: radioGroupPath,
            value: item.value
          });
          if (action) {
            action();
          };
        }
      });

      radioAndLabel.label = label_label({
        forInput: item.id,
        text: item.labelText,
        description: item.description,
        srOnly: true,
        icon: true
      });

      radioAndLabel.wrap = () => {
        return wrap_wrap({
          children: [
            radioAndLabel.radio,
            radioAndLabel.label
          ]
        });
      };

      radioAndLabel.radio.update = () => {
        radioAndLabel.radio.checked = (get({
          object: object,
          path: radioGroupPath,
        }) === item.value);
      };

      radioAndLabel.radio.disable = () => {
        radioAndLabel.radio.disabled = true;
      };

      radioAndLabel.radio.enable = () => {
        radioAndLabel.radio.disabled = false;
      };

      this.radioSet.push(radioAndLabel);
    });
  };

  this.value = () => {
    let currentSelectedRadio = false;

    this.radioSet.forEach((item, i) => {
      if (item.radio.checked) {
        currentSelectedRadio = item.radio.value;
      };
    });

    return currentSelectedRadio;
  };

  this.update = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.update();
    });
  };

  this.grid = () => {
    const wrap = wrap_wrap();

    switch (gridSize) {
      case '3x3':
        gridElement.classList.add('form-grid-3x3');
        break;

      case '3x1':
        gridElement.classList.add('form-grid-3x1');
        break;

      case '1x3':
        gridElement.classList.add('form-grid-1x3');
        break;

      case '2x2':
        gridElement.classList.add('form-grid-2x2');
        break;
    };

    this.radioSet.forEach((item, i) => {
      const wrap = wrap_wrap({
        children: [
          item.radio,
          item.label
        ]
      });

      wrap.style.setProperty('--form-grid-cell', 'cell-' + item.position);

      gridElement.appendChild(wrap);
    });

    if (label) {
      wrap.appendChild(gridLabel);
    };

    wrap.appendChild(gridElement);

    return wrap;
  };

  this.disable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.disable();
    });

    gridElement.classList.add('disabled');

    if (label) {
      gridLabel.classList.add('disabled');
    };
  };

  this.enable = () => {
    this.radioSet.forEach((item, i) => {
      item.radio.enable();
    });

    gridElement.classList.remove('disabled');

    if (label) {
      gridLabel.classList.remove('disabled');
    };
  };

};

;// CONCATENATED MODULE: ./src/component/control/checkbox/index.js
















const Control_checkbox = function({ object = {}, id = 'name', path = false, labelText = 'name', description = false, action = false } = {}) {

  this.checkbox = checkbox_checkbox({
    id: id,
    checked: (get({
      object: object,
      path: path,
    }) === true),
    func: () => {
      set({
        object: object,
        path: path,
        value: this.checkbox.checked
      });
      if (action) {
        action();
      };
    }
  });

  this.label = label_label({
    forInput: id,
    text: labelText,
    description: description,
    icon: true
  });

  this.update = () => {
    this.checkbox.checked = (get({
      object: object,
      path: path,
    }) === true);
  };

  this.checked = () => {
    return get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return wrap_wrap({
      children: [
        group_group({
          children: [
            this.checkbox,
            this.label
          ]
        })
      ]
    })
  };

  this.disable = () => {
    this.checkbox.disabled = true;
  };

  this.enable = () => {
    this.checkbox.disabled = false;
  };

};

;// CONCATENATED MODULE: ./src/utility/minMax.js
const minMax = function({ min = 0, max = 0, value = 0 } = {}) {

  if (value > max) {

    return max;

  } else if (value < min) {

    return min;

  } else if (isNaN(value)) {

    return min;

  } else {

    return value;

  };

};

;// CONCATENATED MODULE: ./src/component/control/slider/index.js

















const Control_slider = function({ object = {}, path = false, id = 'name', labelText = 'Name', hue = false, value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = label_label({
    forInput: id,
    text: labelText
  });

  const classList = [];

  if (hue) {
    classList.push('input-range-hue-spectrum');
  };

  this.range = range_range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.value()
        });
      };
      if (action) {
        action();
      };
      this.number.value = get({
        object: object,
        path: path,
      });
    }
  });

  this.number = number_number({
    value: value,
    min: min,
    max: max,
    classList: ['form-group-item-small'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: minMax({
            value: parseInt(this.number.value, 10),
            min: min,
            max: max
          })
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    func: () => {
      set({
        object: object,
        path: path,
        value: JSON.parse(JSON.stringify(defaultValue))
      });
      this.update();
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.range.value = get({
        object: object,
        path: path,
      });
      this.number.value = get({
        object: object,
        path: path,
      });
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.value = () => {
    return parseInt(this.range.value, 10);
  };

  this.wrap = () => {
    const formGroup = group_group({
      children: [
        this.number
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const formInline = inline_inline({
      block: true,
      children: [
        this.range,
        formGroup
      ]
    });

    const wrap = wrap_wrap({
      children: [
        this.label,
        formInline
      ]
    });

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
    this.number.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
    this.number.disabled = false;
    this.reset.enable();
  };

};

;// CONCATENATED MODULE: ./src/component/control/slimSlider/index.js

















const Control_slimSlider = function({ object = {}, path = false, id = 'name', labelText = 'Name', hue = false, value = 0, defaultValue = false, min = 0, max = 100, action = false } = {}) {

  this.label = label_label({
    forInput: id,
    text: labelText,
    classList: ['form-group-text', 'form-group-text-left', 'form-group-text-transparent', 'form-group-text-borderless', 'form-group-item-medium', ]
  });

  const classList = ['form-group-item-grow'];

  if (hue) {
    classList.push('input-range-hue-spectrum');
  };

  this.range = range_range({
    id: id,
    value: value,
    min: min,
    max: max,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.value()
        });
      };
      if (action) {
        action();
      };
      this.number.value = get({
        object: object,
        path: path,
      });
    }
  });

  this.number = number_number({
    value: value,
    min: min,
    max: max,
    classList: ['form-group-item-small'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: minMax({
            value: parseInt(this.number.value, 10),
            min: min,
            max: max
          })
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    func: () => {
      set({
        object: object,
        path: path,
        value: JSON.parse(JSON.stringify(defaultValue))
      });
      this.update();
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.range.value = get({
        object: object,
        path: path,
      });
      this.number.value = get({
        object: object,
        path: path,
      });
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.value = () => {
    return parseInt(this.range.value, 10);
  };

  this.wrap = () => {
    const formGroup = group_group({
      children: [
        this.number
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    const formInline = inline_inline({
      block: true,
      children: [
        this.label,
        this.range,
        formGroup
      ]
    });

    const wrap = wrap_wrap({
      children: [
        formInline
      ]
    });

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.range.disabled = true;
    this.number.disabled = true;
    this.reset.disable();
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.range.disabled = false;
    this.number.disabled = false;
    this.reset.enable();
  };

};

;// CONCATENATED MODULE: ./src/component/control/color/index.js
















const Control_color = function({ object = {}, path = false, id = 'name', labelText = 'Name', srOnly = false, value = 0, defaultValue = false, action = false, extraButtons = [] } = {}) {

  this.label = label_label({
    forInput: id,
    text: labelText,
    srOnly: srOnly
  });

  this.color = color_color({
    id: id,
    value: convertColor.rgb.hex(get({
      object: object,
      path: path
    })),
    classList: ['form-group-item-half'],
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: convertColor.hex.rgb(this.color.value)
        });
      };
      if (action) {
        action();
      };
      this.text.value = convertColor.rgb.hex(get({
        object: object,
        path: path
      }));
    }
  });

  this.text = text_text({
    value: convertColor.rgb.hex(get({
      object: object,
      path: path
    })),
    max: 7,
    classList: ['form-group-item-half'],
    placeholder: 'Hex code',
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: convertColor.hex.rgb(this.text.value)
        });
      };
      if (action) {
        action();
      };
      this.update({ delay: true });
    }
  });

  this.reset = new Button({
    text: false,
    iconName: 'replay',
    style: ['line'],
    classList: ['form-group-item-small'],
    func: () => {
      set({
        object: object,
        path: path,
        value: JSON.parse(JSON.stringify(defaultValue))
      });
      this.update({ all: true });
      if (action) {
        action();
      };
    }
  });

  this.update = ({ delay = false, all = false } = {}) => {
    let delayedUpdate = null;
    const updateControl = () => {
      this.color.value = convertColor.rgb.hex(get({
        object: object,
        path: path
      }));
      if (all) {
        this.text.value = convertColor.rgb.hex(get({
          object: object,
          path: path
        }));
      };
    };

    if (delay) {
      clearTimeout(delayedUpdate);
      delayedUpdate = setTimeout(updateControl, 2000);
    } else {
      updateControl();
    };
  };

  this.wrap = () => {
    const formGroup = group_group({
      block: true,
      children: [
        this.color,
        this.text
      ]
    });

    if (defaultValue || (typeof defaultValue === 'number' && defaultValue === 0)) {
      formGroup.appendChild(this.reset.button);
    };

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        formGroup.appendChild(item.button);
      });
    };

    const wrap = wrap_wrap({
      children: [
        this.label,
        formGroup
      ]
    });

    return wrap;
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.color.disabled = true;
    this.text.disabled = true;
    this.reset.disable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.disable();
      });
    };
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.color.disabled = false;
    this.text.disabled = false;
    this.reset.enable();

    if (extraButtons.length > 0) {
      extraButtons.forEach((item, i) => {
        item.enable();
      });
    };
  };

};

;// CONCATENATED MODULE: ./src/component/control/colorMixer/index.js



















const Control_colorMixer = function({ object = {}, path = false, defaultValue = false, minMaxObject = false, id = 'name', labelText = 'name', srOnly = false, action = false } = {}) {

  this.moreControlsToggle = new Button({
    text: false,
    iconName: 'arrowKeyboardDown',
    style: ['line'],
    classList: ['collapse-toggle', 'form-group-item-small'],
    func: () => {
      this.moreControlsCollapse.toggle();
      this.moreControlsUpdate();
    }
  });

  this.color = new Control_color({
    object: object,
    path: path + '.rgb',
    id: id + '-rgb',
    labelText: labelText,
    srOnly: srOnly,
    value: get({ object: object, path: path + '.rgb' }),
    defaultValue: defaultValue,
    extraButtons: [this.moreControlsToggle],
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderH = new Control_slimSlider({
    object: object,
    path: path + '.hsl.h',
    id: id + '-hsl-h',
    labelText: 'Hue',
    value: get({ object: object, path: path + '.hsl.h' }),
    min: get({ object: minMaxObject, path: path + '.hsl.h.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.h.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderS = new Control_slimSlider({
    object: object,
    path: path + '.hsl.s',
    id: id + '-hsl-s',
    labelText: 'Saturation',
    value: get({ object: object, path: path + '.hsl.s' }),
    min: get({ object: minMaxObject, path: path + '.hsl.s.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.s.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderL = new Control_slimSlider({
    object: object,
    path: path + '.hsl.l',
    id: id + '-hsl-l',
    labelText: 'Lightness',
    value: get({ object: object, path: path + '.hsl.l' }),
    min: get({ object: minMaxObject, path: path + '.hsl.l.min' }),
    max: get({ object: minMaxObject, path: path + '.hsl.l.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.rgb',
        value: convertColor.hsl.rgb(get({ object: object, path: path + '.hsl' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderR = new Control_slimSlider({
    object: object,
    path: path + '.rgb.r',
    id: id + '-rgb-r',
    labelText: 'Red',
    value: get({ object: object, path: path + '.rgb.r' }),
    min: get({ object: minMaxObject, path: path + '.rgb.r.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.r.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderG.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderG = new Control_slimSlider({
    object: object,
    path: path + '.rgb.g',
    id: id + '-rgb-g',
    labelText: 'Green',
    value: get({ object: object, path: path + '.rgb.g' }),
    min: get({ object: minMaxObject, path: path + '.rgb.g.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.g.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderB.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.colorSliderB = new Control_slimSlider({
    object: object,
    path: path + '.rgb.b',
    id: id + '-rgb-b',
    labelText: 'Blue',
    value: get({ object: object, path: path + '.rgb.b' }),
    min: get({ object: minMaxObject, path: path + '.rgb.b.min' }),
    max: get({ object: minMaxObject, path: path + '.rgb.b.max' }),
    action: () => {
      set({
        object: object,
        path: path + '.hsl',
        value: convertColor.rgb.hsl(get({ object: object, path: path + '.rgb' }))
      });
      this.color.update({ all: true });
      this.colorSliderR.update();
      this.colorSliderG.update();
      this.colorSliderH.update();
      this.colorSliderS.update();
      this.colorSliderL.update();
      if (action) {
        action();
      };
    }
  });

  this.moreControls = node('div', [
    node('hr'),
    this.colorSliderH.wrap(),
    this.colorSliderS.wrap(),
    this.colorSliderL.wrap(),
    node('hr'),
    this.colorSliderR.wrap(),
    this.colorSliderG.wrap(),
    this.colorSliderB.wrap()
  ]);

  this.moreControlsCollapse = new Collapse({
    type: 'toggle',
    target: [{
      toggle: this.moreControlsToggle.button,
      content: this.moreControls
    }]
  });

  this.moreControlsCollapse.update();

  this.wrap = () => {
    return wrap_wrap({
      children: [
        this.color.wrap(),
        wrap_wrap({
          children: [
            indent_indent({
              children: [
                wrap_wrap({
                  children: [
                    this.moreControlsCollapse.collapse()
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  };

  this.disable = () => {
    this.color.disable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.moreControlsUpdate();
    };
  };

  this.enable = () => {
    this.color.enable();

    if (!this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    } else {
      this.moreControlsUpdate();
    };
  };

  this.moreControlsUpdate = () => {
    if (this.moreControlsCollapse.target()[0].state.collapsed) {
      this.colorSliderH.disable();
      this.colorSliderS.disable();
      this.colorSliderL.disable();
      this.colorSliderR.disable();
      this.colorSliderG.disable();
      this.colorSliderB.disable();
    } else {
      this.colorSliderH.enable();
      this.colorSliderS.enable();
      this.colorSliderL.enable();
      this.colorSliderR.enable();
      this.colorSliderG.enable();
      this.colorSliderB.enable();
    };
  };

  this.moreControlsUpdate();

};

;// CONCATENATED MODULE: ./src/component/control/text/index.js
















const Control_text = function({ object = {}, path = false, id = 'name', value = false, min = false, max = false, placeholder = false, classList = [], labelText = 'Name', srOnly = false, action = false } = {}) {

  this.label = label_label({
    forInput: id,
    text: labelText
  });

  if (srOnly) {
    this.label.classList.add('sr-only')
  };

  this.text = text_text({
    id: id,
    classList: classList,
    func: () => {
      if (path) {
        set({
          object: object,
          path: path,
          value: this.text.value
        });
      };
      if (action) {
        action();
      };
    }
  });

  if (value) {
    this.text.value = value;
  };

  if (min) {
    this.text.min = min;
  };

  if (max) {
    this.text.max = max;
  };

  if (placeholder) {
    this.text.placeholder = placeholder;
  };

  this.update = () => {
    this.text.value = get({
      object: object,
      path: path,
    });
  };

  this.wrap = () => {
    return wrap_wrap({
      children: [
        this.label,
        this.text
      ]
    })
  };

  this.disable = () => {
    this.label.classList.add('disabled');
    this.text.disabled = true;
  };

  this.enable = () => {
    this.label.classList.remove('disabled');
    this.text.disabled = false;
  };

};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/bookmark/index.css
var bookmark = __webpack_require__(5125);
;// CONCATENATED MODULE: ./src/component/bookmark/index.css

            

var bookmark_options = {};

bookmark_options.insert = "head";
bookmark_options.singleton = false;

var bookmark_update = injectStylesIntoStyleTag_default()(bookmark/* default */.Z, bookmark_options);



/* harmony default export */ const component_bookmark = (bookmark/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/bookmark/index.js



































const defaultBookmark = {
  url: '',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: '', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: '' }, icon: { name: '', prefix: '', label: '' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
};

const minMaxBookmark = {
  display: {
    rotate: { min: -180, max: 180 },
    translate: { x: { min: -300, max: 300 }, y: { min: -300, max: 300 } },
    gutter: { min: 0, max: 500 },
    visual: { size: { min: 5, max: 200 } },
    name: { size: { min: 5, max: 200 } }
  },
  accent: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } }
  },
  color: {
    hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
    rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
    opacity: { min: 0, max: 100 }
  },
  background: {
    opacity: { min: 0, max: 100 }
  }
};

const StagedLink = function() {
  this.link = JSON.parse(JSON.stringify(defaultBookmark));

  this.position = { origin: 0, destination: 0 };

  this.newBookmark = function() {
    this.position.destination = bookmark_bookmark.all.length + 1;
  };
};

let currentBookmarkForm = null;

const bookmark_bookmark = {};

bookmark_bookmark.all = [{
  url: 'https://zombiefox.github.io/awesomeSheet/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'awesomeSheet', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'AS' }, icon: { name: 'dice-d20', prefix: 'fas', label: 'Dice D20' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.amazon.co.uk/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Amazon', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'AZ' }, icon: { name: 'amazon', prefix: 'fab', label: 'Amazon' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://mail.google.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Gmail', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'GM' }, icon: { name: 'envelope', prefix: 'fas', label: 'Envelope' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.reddit.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Reddit', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'R' }, icon: { name: 'reddit-alien', prefix: 'fab', label: 'reddit Alien' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://www.netflix.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Netflix', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'N' }, icon: { name: 'film', prefix: 'fas', label: 'Film' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://drive.google.com/drive/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Drive', size: 7 },
    visual: { show: true, type: 'letter', size: 25, letter: { text: 'DR' }, icon: { name: 'google-drive', prefix: 'fab', label: 'Drive' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://devdocs.io/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Devdocs', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'DEV' }, icon: { name: 'code', prefix: 'fas', label: 'Code' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}, {
  url: 'https://github.com/',
  display: {
    direction: 'vertical',
    order: 'visual-name',
    rotate: 0,
    translate: { x: 0, y: 0 },
    gutter: 75,
    name: { show: true, text: 'Github', size: 7 },
    visual: { show: true, type: 'icon', size: 25, letter: { text: 'GIT' }, icon: { name: 'github', prefix: 'fab', label: 'GitHub' }, image: { url: '' } }
  },
  accent: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
  color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 1 },
  background: { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } }
}];

bookmark_bookmark.mod = {};

bookmark_bookmark.mod.add = {
  open: function() {
    state_state.get.current().bookmark.add = true;
  },
  close: function() {
    state_state.get.current().bookmark.add = false;
  },
  toggle: function() {
    if (state_state.get.current().bookmark.add) {
      bookmark_bookmark.mod.add.close();
    } else {
      bookmark_bookmark.mod.add.open();
    };
  }
};

bookmark_bookmark.mod.edit = {
  open: function() {
    state_state.get.current().bookmark.edit = true;
  },
  close: function() {
    state_state.get.current().bookmark.edit = false;
  },
  toggle: function() {
    if (state_state.get.current().bookmark.edit) {
      bookmark_bookmark.mod.edit.close();
    } else {
      bookmark_bookmark.mod.edit.open();
    };
  }
};

bookmark_bookmark.mod.item = {};

bookmark_bookmark.mod.item.add = function(bookmarkData) {
  bookmark_bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);
};

bookmark_bookmark.mod.item.edit = function(bookmarkData) {
  bookmark_bookmark.all.splice(bookmarkData.position.origin, 1);
  bookmark_bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkData.link);
};

bookmark_bookmark.mod.item.remove = function(bookmarkData) {
  bookmark_bookmark.all.splice(bookmarkData.position.origin, 1);
};

bookmark_bookmark.mod.item.move = function(bookmarkData) {
  var bookmarkCopy = JSON.parse(JSON.stringify(bookmark_bookmark.all[bookmarkData.position.origin]));
  bookmark_bookmark.all.splice(bookmarkData.position.origin, 1);
  bookmark_bookmark.all.splice(bookmarkData.position.destination, 0, bookmarkCopy);
};

bookmark_bookmark.mod.propagate = {};

bookmark_bookmark.mod.propagate.state = {
  current: {
    visual: false,
    name: false,
    layout: false,
    theme: false
  },
  reset: function() {
    for (var key in bookmark_bookmark.mod.propagate.state.current) {
      bookmark_bookmark.mod.propagate.state.current[key] = false;
    }
  },
  apply: function(bookmarkData) {
    if (bookmark_bookmark.mod.propagate.state.current.layout) {
      bookmark_bookmark.all.forEach((item, i) => {
        item.display.visual.size = bookmarkData.link.display.visual.size;
        item.display.name.size = bookmarkData.link.display.name.size;
        item.display.gutter = bookmarkData.link.display.gutter;
        item.display.rotate = bookmarkData.link.display.rotate;
        item.display.translate = bookmarkData.link.display.translate;
        item.display.direction = bookmarkData.link.display.direction;
        item.display.order = bookmarkData.link.display.order;
      });
    };

    if (bookmark_bookmark.mod.propagate.state.current.visual) {
      bookmark_bookmark.all.forEach((item, i) => {
        item.display.visual.show = bookmarkData.link.display.visual.show;
      });
    };

    if (bookmark_bookmark.mod.propagate.state.current.name) {
      bookmark_bookmark.all.forEach((item, i) => {
        item.display.name.show = bookmarkData.link.display.name.show;
      });
    };

    if (bookmark_bookmark.mod.propagate.state.current.theme) {
      bookmark_bookmark.all.forEach((item, i) => {
        item.accent = bookmarkData.link.accent;
        item.color = bookmarkData.link.color;
      });
    };

    bookmark_bookmark.mod.propagate.state.reset();
  }
};

bookmark_bookmark.render = {};

bookmark_bookmark.render.clear = function() {
  while (gridList.lastChild) {
    gridList.removeChild(gridList.lastChild);
  };
};

bookmark_bookmark.render.mask = function() {
  const html = document.querySelector('html');

  html.appendChild(node('div', [
    '<svg width="0" height="0" viewBox="0 0 120 100" class="bookmark-mask">' +
    '<g id="Assets" fill="none">' +
    '<defs>' +
    '<clipPath id="bookmark-mask" clipPathUnits="objectBoundingBox" transform="scale(0.01, 0.009615384615384616)">' +
    '<path d="M1.25156 54.6013C0.46058 52.9573 0.460582 51.0427 1.25157 49.3987L23.3648 3.43714C24.3644 1.35955 26.466 0.038475 28.7716 0.038475H71.2284C73.534 0.038475 75.6356 1.35955 76.6352 3.43714L98.7484 49.3987C99.5394 51.0427 99.5394 52.9573 98.7484 54.6013L76.6352 100.563C75.6356 102.64 73.534 103.962 71.2284 103.962H28.7716C26.466 103.962 24.3644 102.64 23.3648 100.563L1.25156 54.6013Z"></path>' +
    '</clipPath>' +
    '</defs>' +
    '</g>' +
    '</svg>'
  ]));
};

bookmark_bookmark.render.tile = {};

bookmark_bookmark.render.tile.edit = {
  open: function() {
    if (bookmark_bookmark.render.tile.current.length > 0) {
      bookmark_bookmark.render.tile.current.forEach((item, i) => {
        item.control.enable();
      });
    };
  },
  close: function() {
    if (bookmark_bookmark.render.tile.current.length > 0) {
      bookmark_bookmark.render.tile.current.forEach((item, i) => {
        item.control.disable();
      });
    };
  }
};

bookmark_bookmark.render.tile.current = [];

bookmark_bookmark.render.item = function() {

  bookmark_bookmark.render.tile.current = [];

  var evenRowFlag = true; // if true the row is even

  var rowCount = 1; // used to asign and calculate the overall row start value

  var columnStart = 1; // starting grid column

  var rowStart = 1; // starting grid row

  bookmark_bookmark.all.forEach(function(item, index) {

    //
    // column start
    //
    // define what column this bookmark will sit on
    if (index > 0) {
      columnStart = columnStart + 2;
    };

    // if end of grid reset column start
    if (index % (state_state.get.current().grid.column) === 0) {
      columnStart = 1;
    };

    //
    // row start
    //
    // define what row this bookmark will sit on
    if (index > 1 && index % state_state.get.current().grid.column === 0) {
      rowCount = rowCount + 2;
    };

    // define the offset of this bookmark on this row
    // find out if row is even
    if (index % state_state.get.current().grid.column === 0) {
      // toggle the flag
      if (evenRowFlag) {
        evenRowFlag = false;
      } else {
        evenRowFlag = true;
      };
    };

    // if column count is odd
    if (state_state.get.current().grid.column % 2 === 1 && state_state.get.current().grid.column > 1) {
      if (evenRowFlag) { // if row is even
        if (index % 2 === 1) { // if index is odd
          rowStart = rowCount;
        } else { // if index is even
          rowStart = rowCount + 1;
        };
      } else { // if row is odd
        // if index is odd
        if (index % 2 === 0) { // if index is even
          rowStart = rowCount;
        } else { // if index is odd
          rowStart = rowCount + 1;
        };
      };
    };

    // if column count is even
    if (state_state.get.current().grid.column % 2 === 0 && state_state.get.current().grid.column > 1) {
      if (index % 2 === 0) { // if index is even
        rowStart = rowCount;
      } else { // if index is odd
        rowStart = rowCount + 1;
      };
    };

    // if single column
    if (state_state.get.current().grid.column === 1) {
      if (index > 0) {
        rowStart = rowStart + 2;
      };
    };

    const hex = new HexTile({
      bookmarkData: item,
      index: index,
      row: rowStart,
      column: columnStart
    });

    gridList.appendChild(hex.tile());

    bookmark_bookmark.render.tile.current.push(hex);

  });

};

bookmark_bookmark.render.style = function() {
  const html = document.querySelector('html');
  html.style.setProperty('--bookmark-size', state_state.get.current().bookmark.size);
  html.style.setProperty('--bookmark-hover-distance', state_state.get.current().bookmark.hover.distance);
  html.style.setProperty('--bookmark-hover-size', state_state.get.current().bookmark.hover.size);
  html.style.setProperty('--bookmark-shadow-blur', state_state.get.current().bookmark.shadow.blur);
  html.style.setProperty('--bookmark-shadow-distance', state_state.get.current().bookmark.shadow.distance);
};

bookmark_bookmark.render.class = function() {
  const html = document.querySelector('html');

  if (state_state.get.current().bookmark.edit) {
    html.classList.add('is-bookmark-edit');
  } else {
    html.classList.remove('is-bookmark-edit');
  };
};

bookmark_bookmark.render.add = function() {
  const newBookmarkData = new StagedLink();

  newBookmarkData.newBookmark();

  modal_modal.open({
    heading: 'Add a new Bookmark',
    size: 'small',
    actionText: 'Add',
    content: bookmark_bookmark.form(newBookmarkData),
    width: 60,
    maxHeight: true,
    successAction: () => {
      bookmark_bookmark.mod.item.add(newBookmarkData);
      bookmark_bookmark.mod.propagate.state.apply(newBookmarkData);
      bookmark_bookmark.render.clear();
      bookmark_bookmark.render.item();
      data.save();
    },
    dismissAction: () => {
      bookmark_bookmark.add.close();
      data.save();
    }
  });
};

bookmark_bookmark.form = function(bookmarkData) {

  const bookmarkForm = node('form|class:bookmark-form');

  const bookmarkFormMain = node('form|class:bookmark-form-main');

  const displayVisualShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.visual.show',
    id: 'display-visual-show',
    labelText: 'Show Visual Element',
    description: 'Display Letters, Icon or an Image on this Bookmark hexagon.',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const displayVisualType = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-visual-type-letter', labelText: 'Letter', value: 'letter' },
      { id: 'display-visual-type-icon', labelText: 'Icon', value: 'icon' },
      { id: 'display-visual-type-image', labelText: 'Image', value: 'image' }
    ],
    groupName: 'display-visual-type',
    path: 'display.visual.type',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeLetter = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.letter.text',
    id: 'display-visual-letter-text',
    value: bookmarkData.link.display.visual.letter.text,
    placeholder: 'E',
    labelText: 'Bookmark letter',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeIcon = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.icon.label',
    id: 'display-visual-icon-label',
    value: bookmarkData.link.display.visual.icon.label,
    placeholder: 'FontAwesome Brands or Icons',
    labelText: 'Bookmark icon',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeIconDisplay = new Control_groupText({
    classList: ['bookmark-form-text-icon', 'form-group-item-small']
  });

  const displayVisualTypeIconRemove = new Button({
    text: 'Remove icon',
    srOnly: true,
    style: ['line'],
    iconName: 'cross',
    classList: ['form-group-item-small'],
    func: () => {
      bookmarkData.link.display.visual.icon.label = '';
      bookmarkData.link.display.visual.icon.prefix = '';
      bookmarkData.link.display.visual.icon.name = '';
      bookmarkForm.update();
      bookmarkForm.preview.render();
    }
  });

  const displayVisualTypeImage = new Control_text({
    object: bookmarkData.link,
    path: 'display.visual.image.url',
    id: 'display-visual-image-url',
    value: bookmarkData.link.display.visual.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Bookmark image',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayVisualSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.visual.size',
    id: 'display-visual-size',
    labelText: 'Visual size',
    value: bookmarkData.link.display.visual.size,
    defaultValue: defaultBookmark.display.visual.size,
    min: minMaxBookmark.display.visual.size.min,
    max: minMaxBookmark.display.visual.size.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualShowPropagate = new Control_checkbox({
    object: bookmark_bookmark.mod.propagate.state.current,
    path: 'visual',
    id: 'apply-to-all-visual',
    labelText: 'Apply Show Visual Element to other Bookmarks',
    description: 'When saved, apply the above Visual Element visibility to all other Bookmarks.'
  });

  const displayNameShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'display.name.show',
    id: 'display-name-show',
    labelText: 'Show Name',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const displayNameText = new Control_text({
    object: bookmarkData.link,
    path: 'display.name.text',
    id: 'display-name-text',
    value: bookmarkData.link.display.name.text,
    placeholder: 'Example',
    labelText: 'Bookmark name',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const displayNameSize = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.name.size',
    id: 'display-name-size',
    labelText: 'Name size',
    value: bookmarkData.link.display.name.size,
    defaultValue: defaultBookmark.display.name.size,
    min: minMaxBookmark.display.name.size.min,
    max: minMaxBookmark.display.name.size.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayNameShowPropagate = new Control_checkbox({
    object: bookmark_bookmark.mod.propagate.state.current,
    path: 'name',
    id: 'apply-to-all-name',
    labelText: 'Apply Show Name to other Bookmarks',
    description: 'When saved, apply the above Name visibility to all other Bookmarks.'
  });

  const url = new Control_text({
    object: bookmarkData.link,
    path: 'url',
    id: 'url',
    value: bookmarkData.link.url,
    placeholder: 'https://www.example.com/',
    labelText: 'URL'
  });

  const colorBy = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'color-by-theme', labelText: 'Theme colour', description: 'Use the Colour defined by the Theme.', value: 'theme' },
      { id: 'color-by-custom', labelText: 'Custom colour', description: 'Override the Theme colour.', value: 'custom' }
    ],
    groupName: 'color-by',
    path: 'color.by',
    action: () => {
      colorMixerCollapse.update();
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const colorMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'color',
    id: 'color',
    labelText: 'Colour',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.color.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const accentBy = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'accent-by-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
      { id: 'accent-by-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
    ],
    groupName: 'accent-by',
    path: 'accent.by',
    action: () => {
      accentMixerCollapse.update();
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const accentMixer = new Control_colorMixer({
    object: bookmarkData.link,
    path: 'accent',
    id: 'accent',
    labelText: 'Accent',
    defaultValue: JSON.parse(JSON.stringify(defaultBookmark.accent.rgb)),
    minMaxObject: minMaxBookmark,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayTranslateX = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.x',
    id: 'display-translate-x',
    labelText: 'Horizontal shift',
    value: bookmarkData.link.display.translate.x,
    defaultValue: defaultBookmark.display.translate.x,
    min: minMaxBookmark.display.translate.x.min,
    max: minMaxBookmark.display.translate.x.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayTranslateY = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.translate.y',
    id: 'display-translate-y',
    labelText: 'Vertical shift',
    value: bookmarkData.link.display.translate.y,
    defaultValue: defaultBookmark.display.translate.y,
    min: minMaxBookmark.display.translate.y.min,
    max: minMaxBookmark.display.translate.y.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayRotate = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.rotate',
    id: 'display-rotate',
    labelText: 'Rotate',
    value: bookmarkData.link.display.rotate,
    defaultValue: defaultBookmark.display.rotate,
    min: minMaxBookmark.display.rotate.min,
    max: minMaxBookmark.display.rotate.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualDirection = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-direction-vertical', labelText: 'Vertical', description: 'Stack the Visual Element and Name one above the other.', value: 'vertical' },
      { id: 'display-direction-horizontal', labelText: 'Horizontal', description: 'Arrange the Visual Element and Name side by side.', value: 'horizontal' }
    ],
    groupName: 'display-direction',
    path: 'display.direction',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualOrder = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'display-order-visual-name', labelText: 'Visual element then name', description: 'Place the Visual Element before the Name.', value: 'visual-name' },
      { id: 'display-order-name-visual', labelText: 'Name then visual element', description: 'Place the Name before the Visual Element.', value: 'name-visual' }
    ],
    groupName: 'display-order',
    path: 'display.order',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayGutter = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'display.gutter',
    id: 'display-gutter',
    labelText: 'Gutter',
    value: bookmarkData.link.display.gutter,
    defaultValue: defaultBookmark.display.gutter,
    min: minMaxBookmark.display.gutter.min,
    max: minMaxBookmark.display.gutter.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayLayoutPropagate = new Control_checkbox({
    object: bookmark_bookmark.mod.propagate.state.current,
    path: 'layout',
    id: 'apply-to-all-layout',
    labelText: 'Apply this Layout to other Bookmarks',
    description: 'When saved, apply the above Layout to all other Bookmarks.'
  });

  const accentMixerArea = node('div', [
    node('hr'),
    accentMixer.wrap()
  ]);

  const accentMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: accentBy,
    target: [{
      id: accentBy.radioSet[1].radio.value,
      content: accentMixerArea
    }]
  });

  accentMixerCollapse.update();

  const colorMixerArea = node('div', [
    node('hr'),
    colorMixer.wrap()
  ]);

  const colorMixerCollapse = new Collapse({
    type: 'radio',
    radioGroup: colorBy,
    target: [{
      id: colorBy.radioSet[1].radio.value,
      content: colorMixerArea
    }]
  });

  colorMixerCollapse.update();

  const backgroundShow = new Control_checkbox({
    object: bookmarkData.link,
    path: 'background.show',
    id: 'background-show',
    labelText: 'Show background',
    description: 'Display an Image or video Background on this Bookmark tile.',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const backgroundType = new Control_radio({
    object: bookmarkData.link,
    radioGroup: [
      { id: 'background-type-image', labelText: 'Image', value: 'image' },
      { id: 'background-type-video', labelText: 'Video', value: 'video' }
    ],
    groupName: 'background-type',
    path: 'background.type',
    action: () => {
      bookmarkForm.disable();
      bookmarkForm.preview.render();
    }
  });

  const backgroundImageUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.image.url',
    id: 'background-image-url',
    value: bookmarkData.link.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const backgroundImageUrlHelper = new Control_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const backgroundVideoUrl = new Control_text({
    object: bookmarkData.link,
    path: 'background.video.url',
    id: 'background-video-url',
    value: bookmarkData.link.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    srOnly: true,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  const backgroundVideoUrlHelper = new Control_helperText({
    text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const backgroundOpacity = new Control_slimSlider({
    object: bookmarkData.link,
    path: 'background.opacity',
    id: 'background-opacity',
    labelText: 'Opacity',
    value: bookmarkData.link.background.opacity,
    defaultValue: defaultBookmark.background.opacity,
    min: minMaxBookmark.background.opacity.min,
    max: minMaxBookmark.background.opacity.max,
    action: () => {
      bookmarkForm.preview.current.update(bookmarkData.link);
    }
  });

  const displayVisualArea = fieldset_fieldset({
    children: [
      wrap_wrap({
        children: [
          node('h2:Visual element|class:mb-2'),
          node('p:Display Letters, Icon or an Image on this Bookmark tile.|class:mb-5')
        ]
      }),
      wrap_wrap({
        children: [
          indent_indent({
            children: [
              displayVisualShow.wrap(),
              wrap_wrap({
                children: [
                  indent_indent({
                    children: [
                      displayVisualType.radioSet[0].wrap(),
                      wrap_wrap({
                        children: [
                          indent_indent({
                            children: [
                              displayVisualTypeLetter.wrap()
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[1].wrap(),
                      wrap_wrap({
                        children: [
                          indent_indent({
                            children: [
                              wrap_wrap({
                                children: [
                                  displayVisualTypeIcon.label,
                                  group_group({
                                    block: true,
                                    children: [
                                      displayVisualTypeIcon.text,
                                      displayVisualTypeIconDisplay.groupText,
                                      displayVisualTypeIconRemove.button
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      displayVisualType.radioSet[2].wrap(),
                      wrap_wrap({
                        children: [
                          indent_indent({
                            children: [
                              displayVisualTypeImage.wrap()
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              node('hr'),
              displayVisualShowPropagate.wrap(),
            ]
          })
        ]
      })
    ]
  });

  const displayNameArea = fieldset_fieldset({
    children: [
      wrap_wrap({
        children: [
          node('h2:Name|class:mb-2'),
          node('p:Display a Name on this Bookmark tile.|class:mb-5')
        ]
      }),
      wrap_wrap({
        children: [
          indent_indent({
            children: [
              displayNameShow.wrap(),
              wrap_wrap({
                children: [
                  indent_indent({
                    children: [
                      displayNameText.wrap()
                    ]
                  }),
                ]
              }),
              node('hr'),
              displayNameShowPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayAddressArea = fieldset_fieldset({
    children: [
      wrap_wrap({
        children: [
          node('h2:Address|class:mb-2'),
          node('p:The websites address.'),
          complexNode({ tag: 'p', text: 'Be sure to use the full URL and include <strong>"https://..."</strong>', attr: [{ key: 'class', value: 'mb-5' }] })
        ]
      }),
      wrap_wrap({
        children: [
          indent_indent({
            children: [
              url.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayLayoutArea = fieldset_fieldset({
    children: [
      wrap_wrap({
        children: [
          node('h2:Layout|class:mb-2'),
          node('p:Change the Visual element and Name position.|class:mb-5')
        ]
      }),
      wrap_wrap({
        children: [
          indent_indent({
            children: [
              displayVisualSize.wrap(),
              displayNameSize.wrap(),
              node('hr'),
              displayTranslateX.wrap(),
              displayTranslateY.wrap(),
              displayRotate.wrap(),
              node('hr'),
              displayVisualDirection.wrap(),
              node('hr'),
              displayVisualOrder.wrap(),
              node('hr'),
              displayGutter.wrap(),
              node('hr'),
              displayLayoutPropagate.wrap()
            ]
          })
        ]
      })
    ]
  });

  const displayThemeArea = fieldset_fieldset({
    children: [
      wrap_wrap({
        children: [
          node('h2:Theme|class:mb-2'),
          node('p:Override the Theme and Accent colour.|class:mb-5')
        ]
      }),
      wrap_wrap({
        children: [
          indent_indent({
            children: [
              colorBy.wrap(),
              wrap_wrap({
                children: [
                  indent_indent({
                    children: [
                      colorMixerCollapse.collapse()
                    ]
                  })
                ]
              }),
              node('hr'),
              accentBy.wrap(),
              wrap_wrap({
                children: [
                  indent_indent({
                    children: [
                      accentMixerCollapse.collapse()
                    ]
                  })
                ]
              }),
              node('hr'),
              backgroundShow.wrap(),
              wrap_wrap({
                children: [
                  indent_indent({
                    children: [
                      backgroundType.radioSet[0].wrap(),
                      wrap_wrap({
                        children: [
                          indent_indent({
                            children: [
                              backgroundImageUrl.wrap(),
                              backgroundImageUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      backgroundType.radioSet[1].wrap(),
                      wrap_wrap({
                        children: [
                          indent_indent({
                            children: [
                              backgroundVideoUrl.wrap(),
                              backgroundVideoUrlHelper.wrap()
                            ]
                          })
                        ]
                      }),
                      node('hr'),
                      backgroundOpacity.wrap()
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });

  const formTab = new Tab({
    group: [{
      tabText: 'Visual',
      area: displayVisualArea,
      active: true
    }, {
      tabText: 'Name',
      area: displayNameArea,
      active: false
    }, {
      tabText: 'Address',
      area: displayAddressArea,
      active: false
    }, {
      tabText: 'Layout',
      area: displayLayoutArea,
      active: false
    }, {
      tabText: 'Theme',
      area: displayThemeArea,
      active: false
    }]
  });

  bookmarkFormMain.appendChild(formTab.tab());

  const bookmarkFormAside = node('div|class:bookmark-form-aside');

  const bookmarkFormPreview = node('div|class:bookmark-form-preview');

  bookmarkFormAside.appendChild(bookmarkFormPreview);

  bookmarkForm.appendChild(bookmarkFormMain);

  bookmarkForm.appendChild(bookmarkFormAside);

  if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
    displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
  } else {
    displayVisualTypeIconDisplay.update();
  };

  const displayVisualTypeIconAutoSuggest = new Suggest({
    input: displayVisualTypeIcon.text,
    widthElement: displayVisualArea,
    type: 'fontawesomeIcon',
    postFocus: displayVisualTypeIconDisplay.groupText,
    action: () => {
      bookmarkForm.preview.render();
    }
  });

  bookmark_bookmark.mod.propagate.state.reset();

  bookmarkForm.disable = () => {
    if (bookmarkData.link.display.visual.show) {
      displayVisualType.enable();
      displayVisualTypeLetter.enable();
      displayVisualTypeIcon.enable();
      displayVisualTypeIconDisplay.enable();
      displayVisualTypeIconRemove.enable();
      displayVisualTypeImage.enable();
      displayVisualSize.enable();

      switch (bookmarkData.link.display.visual.type) {
        case 'letter':
          displayVisualTypeLetter.enable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.disable();
          break;

        case 'icon':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.enable();
          displayVisualTypeIconDisplay.enable();
          displayVisualTypeIconRemove.enable();
          displayVisualTypeImage.disable();
          break;

        case 'image':
          displayVisualTypeLetter.disable();
          displayVisualTypeIcon.disable();
          displayVisualTypeIconDisplay.disable()
          displayVisualTypeIconRemove.disable();
          displayVisualTypeImage.enable();
          break;
      };
    } else {
      displayVisualType.disable();
      displayVisualTypeLetter.disable();
      displayVisualTypeIcon.disable();
      displayVisualTypeIconDisplay.disable();
      displayVisualTypeIconRemove.disable();
      displayVisualTypeImage.disable();
      displayVisualSize.disable();
    };

    if (bookmarkData.link.display.name.show) {
      displayNameText.enable();
      displayNameSize.enable();
    } else {
      displayNameText.disable();
      displayNameSize.disable();
    };

    if (bookmarkData.link.display.visual.show || bookmarkData.link.display.name.show) {
      displayTranslateX.enable();
      displayTranslateY.enable();
      displayRotate.enable();
    } else {
      displayTranslateX.disable();
      displayTranslateY.disable();
      displayRotate.disable();
    };

    if (bookmarkData.link.display.visual.show && bookmarkData.link.display.name.show) {
      displayVisualDirection.enable();
      displayVisualOrder.enable();
      displayGutter.enable();
    } else {
      displayVisualDirection.disable();
      displayVisualOrder.disable();
      displayGutter.disable();
    };

    switch (bookmarkData.link.color.by) {
      case 'theme':
        colorMixer.disable();
        break;

      case 'custom':
        colorMixer.enable();
        break;
    };

    switch (bookmarkData.link.accent.by) {
      case 'theme':
        accentMixer.disable();
        break;

      case 'custom':
        accentMixer.enable();
        break;
    };

    if (bookmarkData.link.background.show) {
      backgroundType.enable();
      backgroundOpacity.enable();

      switch (bookmarkData.link.background.type) {
        case 'image':
          backgroundImageUrl.enable();
          backgroundImageUrlHelper.enable();
          backgroundVideoUrl.disable();
          backgroundVideoUrlHelper.disable();
          break;

        case 'video':
          backgroundImageUrl.disable();
          backgroundImageUrlHelper.disable();
          backgroundVideoUrl.enable();
          backgroundVideoUrlHelper.enable();
          break;
      };
    } else {
      backgroundType.disable();
      backgroundImageUrl.disable();
      backgroundImageUrlHelper.disable();
      backgroundVideoUrl.disable();
      backgroundVideoUrlHelper.disable();
      backgroundOpacity.disable();
    };
  };

  bookmarkForm.update = () => {
    displayVisualShow.update();
    displayVisualType.update();
    displayVisualTypeLetter.update();
    displayVisualTypeIcon.update();
    if (isValidString(bookmarkData.link.display.visual.icon.prefix) && isValidString(bookmarkData.link.display.visual.icon.name)) {
      displayVisualTypeIconDisplay.update(node('span|class:bookmark-form-icon ' + bookmarkData.link.display.visual.icon.prefix + ' fa-' + bookmarkData.link.display.visual.icon.name));
    } else {
      displayVisualTypeIconDisplay.update();
    };
    displayVisualTypeImage.update();
    displayNameShow.update();
    displayNameText.update();
    url.update();
  };

  bookmarkForm.updateIcon = (autoSuggestData) => {
    bookmarkData.link.display.visual.icon.label = autoSuggestData.label;
    bookmarkData.link.display.visual.icon.name = autoSuggestData.name;
    if (autoSuggestData.styles.includes('solid')) {
      bookmarkData.link.display.visual.icon.prefix = 'fas';
    } else if (autoSuggestData.styles.includes('brands')) {
      bookmarkData.link.display.visual.icon.prefix = 'fab';
    };
    bookmarkForm.update();
  };

  bookmarkForm.preview = {};

  bookmarkForm.preview.current = false;

  bookmarkForm.preview.render = () => {
    if (bookmarkFormPreview.lastChild) {
      while (bookmarkFormPreview.lastChild) {
        bookmarkFormPreview.removeChild(bookmarkFormPreview.lastChild);
      };
    };

    bookmarkForm.preview.current = new HexTile({
      bookmarkData: bookmarkData.link,
      preview: true
    });

    bookmarkFormPreview.appendChild(bookmarkForm.preview.current.tile());
  };

  bookmarkForm.disable();

  bookmarkForm.preview.render();

  currentBookmarkForm = bookmarkForm;

  bookmarkForm.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    };
  });

  return bookmarkForm;

};

bookmark_bookmark.restore = function(dataToRestore) {
  bookmark_bookmark.all = dataToRestore.bookmark;
  console.log('bookmark restored');
};

bookmark_bookmark.add = {
  open: function() {
    bookmark_bookmark.mod.add.open();
    bookmark_bookmark.render.add();
  },
  close: function() {
    bookmark_bookmark.mod.add.close();
  }
};

bookmark_bookmark.edit = {
  open: function() {
    bookmark_bookmark.mod.edit.open();
    bookmark_bookmark.render.class();
    bookmark_bookmark.render.tile.edit.open();
  },
  close: function() {
    bookmark_bookmark.mod.edit.close();
    bookmark_bookmark.render.class();
    bookmark_bookmark.render.tile.edit.close();
  },
  toggle: function() {
    if (state_state.get.current().bookmark.edit) {
      bookmark_bookmark.edit.close();
    } else {
      bookmark_bookmark.edit.open();
    };
  }
};

bookmark_bookmark.init = function() {
  bookmark_bookmark.render.mask();
  bookmark_bookmark.add.close();
  bookmark_bookmark.render.style();
  bookmark_bookmark.render.class();
  bookmark_bookmark.render.item();
};



;// CONCATENATED MODULE: ./src/component/version/index.js
const version_version = {};

version_version.number = '3.0.0';

version_version.name = 'Quirky Llama';

version_version.compare = function(a, b) {
  var pa = a.split('.');
  var pb = b.split('.');
  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) {
      return 1;
    };
    if (nb > na) {
      return -1;
    };
    if (!isNaN(na) && isNaN(nb)) {
      return 1;
    };
    if (isNaN(na) && !isNaN(nb)) {
      return -1;
    };
  };
  return 0;
};

;// CONCATENATED MODULE: ./src/component/update/index.js


const update_update = {};

update_update.all = {
  '1.0.0': function(dataToUpdate) {
    return dataToUpdate;
  },
  '2.4.0': function(dataToUpdate) {
    dataToUpdate.state.theme.background.video = { url: '', blur: 0, scale: 100, opacity: 100 };

    if (dataToUpdate.state.theme.bookmark.shadow.type === 'theme' || dataToUpdate.state.theme.bookmark.shadow.type === 'custom') {
      dataToUpdate.state.theme.bookmark.shadow.color.type = dataToUpdate.state.theme.bookmark.shadow.type;

      delete dataToUpdate.state.theme.bookmark.shadow.type;
    };

    return dataToUpdate;
  },
  '2.5.0': function(dataToUpdate) {
    dataToUpdate.bookmark.forEach((item, i) => {
      item.display.gutter = 75;
      item.display.direction = 'vertical';
      item.display.order = 'visual-name';
    });

    return dataToUpdate;
  },
  '2.6.0': function(dataToUpdate) {
    dataToUpdate.bookmark.forEach((item, i) => {
      item.background = { show: false, type: 'image', opacity: 100, image: { url: '' }, video: { url: '' } };
    });

    return dataToUpdate;
  },
  '2.7.0': function(dataToUpdate) {
    dataToUpdate.state.toolbar = { style: 'transparent', position: 'bottom-right' };

    return dataToUpdate;
  },
  '3.0.0': function(dataToUpdate) {
    const h = dataToUpdate.state.theme.color.hsl.h;
    const s = dataToUpdate.state.theme.color.hsl.s;

    dataToUpdate.state.theme.color = {
      range: { primary: { h: h, s: s } },
      lightness: { contrast: 32, offset: null, start: null, end: null },
      shades: 9
    };

    dataToUpdate.state.theme.color.lightness.offset = 45 - dataToUpdate.state.theme.color.lightness.contrast;

    dataToUpdate.state.theme.color.lightness.start = dataToUpdate.state.theme.color.lightness.offset;

    dataToUpdate.state.theme.color.lightness.end = 100 - dataToUpdate.state.theme.color.lightness.offset;

    return dataToUpdate;
  }
};

update_update.run = function(dataToUpdate) {
  // loop over all updates in mod.all object
  for (var key in update_update.all) {
    if (version_version.compare(dataToUpdate.version, key) == -1) {
      console.log('\t > running update', key);
      dataToUpdate = update_update.all[key](dataToUpdate);
      dataToUpdate.version = key;
    };
  };

  // if no update is needed version bump
  if (version_version.compare(dataToUpdate.version, version_version.number) == -1) {
    console.log('\t > no state data to update, version bump to', version_version.number);
    dataToUpdate.version = version_version.number;
  };

  return dataToUpdate;
};



;// CONCATENATED MODULE: ./src/utility/dateTime.js
const dateTime = function() {
  const date = new Date();

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return {
    // string: date.constructor(),
    // time: date.getTime(),
    date: date.getDate(),
    day: date.getDay(),
    year: date.getFullYear(),
    hours: date.getHours(),
    milliseconds: date.getMilliseconds(),
    minutes: date.getMinutes(),
    month: date.getMonth(),
    monthString: month[date.getMonth()],
    seconds: date.getSeconds()
  };
};

;// CONCATENATED MODULE: ./src/utility/isJson.js
const isJson = function(string) {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  };
  return true;
};

;// CONCATENATED MODULE: ./src/utility/index.js











const utility_utility = {
  complexNode: complexNode,
  convertColor: convertColor,
  dateTime: dateTime,
  get: get,
  isValidString: isValidString,
  isJson: isJson,
  makePath: makePath,
  node: node,
  set: set,
  trimString: trimString
};

;// CONCATENATED MODULE: ./src/component/data/index.js








const data = {};

data.saveName = 'hexagonTab';

data.set = function(key, data) {
  localStorage.setItem(key, data);
};

data.get = function(key) {
  return localStorage.getItem(key);
};

data.import = function(input, feedback) {
  const fileList = input.files;

  if (fileList.length > 0) {
    data.validateJsonFile(fileList, input, feedback);
  };
};

data.validateJsonFile = function(fileList, input, feedback) {
  // make new file reader
  var reader = new FileReader();
  // define the on load event for the reader
  reader.onload = function(event) {
    // is this a JSON file
    if (utility_utility.isJson(event.target.result)) {
      // is this JSON from this app
      if (JSON.parse(event.target.result)[data.saveName]) {
        data.render.feedback.clear(feedback);
        data.render.feedback.success(feedback, fileList[0].name, function() {
          data.restore(JSON.parse(event.target.result));
          data.save();
          data.render.reload();
        });
        input.value = '';
      } else {
        data.render.feedback.clear(feedback);
        data.render.feedback.fail.notAppJson(feedback, fileList[0].name);
        input.value = '';
      };
    } else {
      // not a JSON file
      data.render.feedback.clear(feedback);
      data.render.feedback.fail.notJson(feedback, fileList[0].name);
      input.value = '';
    };
  };
  // invoke the reader
  reader.readAsText(fileList.item(0));
};

data.export = function() {
  let timestamp = utility_utility.dateTime();

  const leadingZero = function(value) {
    if (value < 10) {
      value = '0' + value;
    };
    return value;
  };

  timestamp.hours = leadingZero(timestamp.hours);
  timestamp.minutes = leadingZero(timestamp.minutes);
  timestamp.seconds = leadingZero(timestamp.seconds);
  timestamp.date = leadingZero(timestamp.date);
  timestamp.month = leadingZero(timestamp.month + 1);
  timestamp.year = leadingZero(timestamp.year);
  timestamp = timestamp.year + '.' + timestamp.month + '.' + timestamp.date + ' - ' + timestamp.hours + ' ' + timestamp.minutes + ' ' + timestamp.seconds;

  const fileName = data.saveName + ' backup - ' + timestamp + '.json';

  const dataToExport = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data.load()));

  const link = document.createElement('a');
  link.setAttribute('href', dataToExport);
  link.setAttribute('download', fileName);
  link.addEventListener('click', function() {
    this.remove();
  });

  document.querySelector('body').appendChild(link);
  link.click();
};

data.remove = function(key) {
  localStorage.removeItem(key);
};

data.backup = function(dataToBackup) {
  if (dataToBackup) {
    console.log('data version ' + dataToBackup.version + ' backed up');
    data.set(data.saveName + 'Backup', JSON.stringify(dataToBackup));
  };
};

data.restore = function(dataToRestore) {
  if (dataToRestore) {
    if (dataToRestore.version != version_version.number) {
      // backup save data before running update
      data.backup(dataToRestore);
      // run update on save data
      dataToRestore = update_update.run(dataToRestore);
      // save data
      data.set(data.saveName, JSON.stringify(dataToRestore));
    } else {
      console.log('data version:', version_version.number, 'no need to run update');
    };
    // restore state and bookmarks from save data
    state_state.set.restore(dataToRestore);
    bookmark_bookmark.restore(dataToRestore);
  } else {
    console.log('no data found to load');
    state_state.set.default();
  };
};

data.save = function() {
  data.set(data.saveName, JSON.stringify({
    [data.saveName]: true,
    version: version_version.number,
    state: state_state.get.current(),
    bookmark: bookmark_bookmark.all
  }));
};

data.load = function() {
  if (data.get(data.saveName) != null && data.get(data.saveName) != undefined) {
    return JSON.parse(data.get(data.saveName));
  } else {
    return false;
  };
};

data.wipe = function() {
  data.remove(data.saveName);
  data.render.reload();
};

data.render = {};

data.render.reload = function() {
  location.reload();
};

data.render.clear = function() {
  const clearContent = utility_utility.node('div');

  const para1 = utility_utility.node('p:Are you sure you want to clear all ' + data.saveName + ' Bookmarks and Settings? ' + data.saveName + ' will be restore to the default state.');

  const para2 = utility_utility.node('p:This can not be undone.');

  clearContent.appendChild(para1);

  clearContent.appendChild(para2);

  modal_modal.open({
    heading: 'Clear all ' + data.saveName + ' data?',
    content: clearContent,
    successAction: function() {
      data.wipe();
    },
    actionText: 'Clear all data',
    size: 'small'
  });

};

data.render.feedback = {
  empty: function(feedback) {
    feedback.appendChild(utility_utility.node('p:No JSON file selected.|class:muted small'));
  },
  success: function(feedback, filename, action) {
    feedback.appendChild(utility_utility.node('p:Success! Restoring ' + data.saveName + ' Bookmarks and Settings.|class:muted small'));
    feedback.appendChild(utility_utility.node('p:' + filename));
    if (action) {
      data.render.feedback.animation.set(feedback, 'is-pop', action);
    };
  },
  clear: function(feedback) {
    while (feedback.lastChild) {
      feedback.removeChild(feedback.lastChild);
    };
  },
  fail: {
    notJson: function(feedback, filename) {
      feedback.appendChild(utility_utility.node('p:Not a JSON file. Make sure the selected file came from ' + data.saveName + '.|class:small muted'));
      feedback.appendChild(utility_utility.node('p:' + filename));
      data.render.feedback.animation.set(feedback, 'is-shake');
    },
    notAppJson: function(feedback, filename) {
      feedback.appendChild(utility_utility.node('p:Not the right kind of JSON file. Make sure the selected file came from ' + data.saveName + '.|class:small muted'));
      feedback.appendChild(utility_utility.node('p:' + filename));
      data.render.feedback.animation.set(feedback, 'is-shake');
    }
  },
  animation: {
    set: function(feedback, animationClass, action) {
      feedback.classList.add(animationClass);

      const animationEndAction = function() {
        if (action) {
          action();
        };
        data.render.feedback.animation.reset(feedback);
      };

      feedback.addEventListener('animationend', animationEndAction);
    },
    reset: function(feedback) {
      feedback.classList.remove('is-shake');
      feedback.classList.remove('is-pop');
      feedback.classList.remove('is-jello');
      feedback.removeEventListener('animationend', data.render.feedback.animation.reset);
    }
  }
};

data.init = function() {
  data.restore(data.load());
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/toolbar/index.css
var toolbar = __webpack_require__(4879);
;// CONCATENATED MODULE: ./src/component/toolbar/index.css

            

var toolbar_options = {};

toolbar_options.insert = "head";
toolbar_options.singleton = false;

var toolbar_update = injectStylesIntoStyleTag_default()(toolbar/* default */.Z, toolbar_options);



/* harmony default export */ const component_toolbar = (toolbar/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/toolbar/index.js



























const toolbar_toolbar = {};

toolbar_toolbar.bar = node('div|class:toolbar');

toolbar_toolbar.edit = false;

toolbar_toolbar.accent = false;

toolbar_toolbar.render = {};

toolbar_toolbar.render.class = function() {
  const html = document.querySelector('html');

  const position = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

  position.forEach((item, i) => {
    html.classList.remove('is-toolbar-position-' + item);
  });

  html.classList.add('is-toolbar-position-' + state_state.get.current().toolbar.position);

  const style = ['bar', 'transparent'];

  style.forEach((item, i) => {
    html.classList.remove('is-toolbar-style-' + item);
  });

  html.classList.add('is-toolbar-style-' + state_state.get.current().toolbar.style);
};

toolbar_toolbar.render.style = {};

toolbar_toolbar.render.style.set = function(rgb) {
  toolbar_toolbar.bar.style.setProperty('--toolbar-color-r', rgb.r);
  toolbar_toolbar.bar.style.setProperty('--toolbar-color-g', rgb.g);
  toolbar_toolbar.bar.style.setProperty('--toolbar-color-b', rgb.b);

  toolbar_toolbar.bar.style.setProperty('--toolbar-color-text', '0, 0%, calc(((((var(--toolbar-color-r) * var(--theme-t-r)) + (var(--toolbar-color-g) * var(--theme-t-g)) + (var(--toolbar-color-b) * var(--theme-t-b))) / 255) - var(--theme-t)) * -10000000%)');

  toolbar_toolbar.bar.style.setProperty('--button-link-text', 'var(--toolbar-color-text)');
  toolbar_toolbar.bar.style.setProperty('--button-link-text-focus-hover', 'var(--toolbar-color-text)');
  toolbar_toolbar.bar.style.setProperty('--button-link-text-active', 'var(--toolbar-color-text)');
}

toolbar_toolbar.render.style.remove = function() {
  toolbar_toolbar.bar.style.removeProperty('--toolbar-color-r');
  toolbar_toolbar.bar.style.removeProperty('--toolbar-color-g');
  toolbar_toolbar.bar.style.removeProperty('--toolbar-color-b');

  toolbar_toolbar.bar.style.removeProperty('--toolbar-color-text');

  toolbar_toolbar.bar.style.removeProperty('--button-link-text');
  toolbar_toolbar.bar.style.removeProperty('--button-link-text-focus-hover');
  toolbar_toolbar.bar.style.removeProperty('--button-link-text-active');
}

toolbar_toolbar.render.style.update = function() {

  switch (state_state.get.current().toolbar.style) {

    case 'transparent':

      switch (state_state.get.current().theme.background.type) {

        case 'theme':
        case 'image':
        case 'video':
          toolbar_toolbar.render.style.remove();
          break;

        case 'accent':
          toolbar_toolbar.render.style.set(state_state.get.current().theme.accent.rgb);
          break;

        case 'color':
          toolbar_toolbar.render.style.set(state_state.get.current().theme.background.color.rgb);
          break;

        case 'gradient':
          let angle = state_state.get.current().theme.background.gradient.angle;

          switch (state_state.get.current().toolbar.position) {

            case 'top-left':
            case 'top-right':
              if (angle < 90) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 90 && angle < 180) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 180 && angle < 270) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 270) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.end.rgb);
              };
              break;

            case 'bottom-right':
            case 'bottom-left':
              if (angle < 90) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.start.rgb);
              } else if (angle >= 90 && angle < 180) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 180 && angle < 270) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.end.rgb);
              } else if (angle >= 270) {
                toolbar_toolbar.render.style.set(state_state.get.current().theme.background.gradient.start.rgb);
              };
              break;

          };

          break;

      };

      break;

    case 'bar':

      toolbar_toolbar.render.style.remove();

      break;

  };

};

toolbar_toolbar.bar.render = function() {

  const accentOptions = {
    object: state_state.get.current(),
    path: 'theme.accent.rgb',
    id: 'theme-accent-quick',
    type: 'color',
    labelText: 'Accent colour',
    srOnly: true,
    inputButton: ['dot'],
    inputButtonClassList: ['toolbar-item'],
    action: () => {
      theme_theme.render.accent();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  };

  const addOptions = {
    text: 'Add a bookmark',
    srOnly: true,
    iconName: 'add',
    classList: ['toolbar-item'],
    func: function() {
      bookmark_bookmark.add.open();
    }
  };

  const editOptions = {
    text: 'Enter edit bookmark mode',
    srOnly: true,
    iconName: 'edit',
    classList: ['toolbar-item'],
    func: function() {
      bookmark_bookmark.edit.toggle();
      toolbar_toolbar.bar.active();
      data.save();
    }
  };

  const settingsMenuOptions = {
    text: 'Open settings menu',
    srOnly: true,
    iconName: 'settings',
    classList: ['toolbar-item'],
    func: function() {
      menu_menu.toggle();
    }
  };

  switch (state_state.get.current().toolbar.style) {
    case 'bar':
      addOptions.style = ['line'];
      editOptions.style = ['line'];
      settingsMenuOptions.style = ['line'];
      accentOptions.inputButton.push('line');
      break;

    case 'transparent':
      addOptions.style = ['link'];
      editOptions.style = ['link'];
      settingsMenuOptions.style = ['link'];
      accentOptions.inputButton.push('link');
      break;
  };

  const accent = new Control_inputButton(accentOptions);

  const add = new Button(addOptions);

  const edit = new Button(editOptions);

  const settingsMenu = new Button(settingsMenuOptions);

  toolbar_toolbar.edit = edit;

  toolbar_toolbar.accent = accent;

  const toolbarControl = node('div|class:toolbar-control');

  let formGroup;

  switch (state_state.get.current().toolbar.position) {
    case 'top-right':
    case 'bottom-right':
      formGroup = group_group();

      break;

    case 'top-left':
    case 'bottom-left':
      formGroup = group_group({
        reverse: true
      });

      break;
  };

  formGroup.appendChild(accent.button);

  formGroup.appendChild(add.button);

  formGroup.appendChild(edit.button);

  formGroup.appendChild(settingsMenu.button);

  toolbarControl.appendChild(formGroup);

  toolbar_toolbar.bar.appendChild(toolbarControl);

  document.querySelector('body').appendChild(toolbar_toolbar.bar);

};

toolbar_toolbar.bar.clear = function() {
  while (toolbar_toolbar.bar.lastChild) {
    toolbar_toolbar.bar.removeChild(toolbar_toolbar.bar.lastChild);
  };
};

toolbar_toolbar.bar.active = function() {
  if (state_state.get.current().bookmark.edit) {
    toolbar_toolbar.edit.active();
  } else {
    toolbar_toolbar.edit.deactive();
  };
};

toolbar_toolbar.init = function() {
  toolbar_toolbar.render.class();
  toolbar_toolbar.render.style.update();
  toolbar_toolbar.bar.render();
  toolbar_toolbar.bar.active();
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/logo/index.css
var logo = __webpack_require__(448);
;// CONCATENATED MODULE: ./src/component/logo/index.css

            

var logo_options = {};

logo_options.insert = "head";
logo_options.singleton = false;

var logo_update = injectStylesIntoStyleTag_default()(logo/* default */.Z, logo_options);



/* harmony default export */ const component_logo = (logo/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/logo/index.js






const logo_logo = {};

logo_logo.svg =
  '<svg class="logo" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M503.292 271.036C508.678 261.736 508.678 250.264 503.292 240.964L392.667 49.9643C387.303 40.7024 377.41 35 366.707 35H145.293C134.59 35 124.697 40.7024 119.333 49.9643L8.70847 240.964C3.32195 250.264 3.32194 261.736 8.70847 271.036L119.333 462.036C124.697 471.298 134.59 477 145.293 477H366.707C377.41 477 387.303 471.298 392.667 462.036L503.292 271.036ZM416 256C416 344.366 344.366 416 256 416C167.634 416 96 344.366 96 256C96 167.634 167.634 96 256 96C344.366 96 416 167.634 416 256Z" class="logo-hexagon" />' +
  '<path d="M224 170C224 164.477 228.477 160 234 160H278C283.523 160 288 164.477 288 170V214C288 219.523 292.477 224 298 224H342C347.523 224 352 228.477 352 234V278C352 283.523 347.523 288 342 288H298C292.477 288 288 292.477 288 298V342C288 347.523 283.523 352 278 352H234C228.477 352 224 347.523 224 342V298C224 292.477 219.523 288 214 288H170C164.477 288 160 283.523 160 278V234C160 228.477 164.477 224 170 224H214C219.523 224 224 219.523 224 214V170Z" class="logo-cross"/>' +
  '</svg>';

logo_logo.render = function() {
  const element = node('div|class:version-icon');
  element.innerHTML = logo_logo.svg;

  return element;
};



;// CONCATENATED MODULE: ./src/component/link/index.js





const link_link = {};

link_link.render = function({ text = 'Link', href = '#', iconName = false, iconPosition = 'right', image = false, linkButton = false, style = [], title = false, openNew = false, classList = [], func = false } = {}) {
  const linkElement = node('a|tabindex:1');

  if (linkButton) {
    linkElement.classList.add('button');

    if (style.length > 0) {
      style.forEach((item, i) => {
        switch (item) {
          case 'link':
            linkElement.classList.add('button-link');
            break;

          case 'line':
            linkElement.classList.add('button-line');
            break;

          case 'ring':
            linkElement.classList.add('button-ring');
            break;
        };
      });
    };
  };

  if (image) {
    const linkImage = node('img|src:' + image + ',class:mr-2');

    linkElement.appendChild(linkImage);
  };

  if (text) {
    const linkText = node('span:' + text);

    if (linkButton) {
      linkText.classList.add('button-text');
    };
    linkElement.appendChild(linkText);
  };

  if (iconName) {
    switch (iconPosition) {
      case 'left':
        linkElement.prepend(icon_icon.render(iconName));
        break;

      case 'right':
        linkElement.append(icon_icon.render(iconName));
        break;
    };
  };

  if (href) {
    linkElement.setAttribute('href', href);
  };

  if (openNew) {
    linkElement.setAttribute('target', '_blank');
  };

  if (title) {
    linkElement.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      linkElement.classList.add(item);
    });
  };

  if (func) {
    linkElement.addEventListener('click', function(event) {
      func();
    });
  };

  return linkElement;
};



;// CONCATENATED MODULE: ./src/component/menu/content/layout/index.js

































const menuContentLayout = {};

menuContentLayout.size = function() {
  const menuContentItem = node('div|id:menu-content-item-size,class:menu-content-item');

  const gridSize = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.size',
    id: 'grid-size',
    labelText: 'Global size',
    value: state_state.get.current().grid.size,
    defaultValue: state_state.get.default().grid.size,
    min: state_state.get.minMax().grid.size.min,
    max: state_state.get.minMax().grid.size.max,
    action: () => {
      grid_grid.render.style();
      data.save();
    }
  });

  const gridSizeHelper = new Control_helperText({
    text: ['Resize all elements on the page.', 'Take care as some elements could scale up to outside the page.']
  });

  menuContentItem.appendChild(menu_menu.render.component.item.header('Scaling'));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      gridSize.wrap(),
      gridSizeHelper.wrap()
    ])
  );

  return menuContentItem;
};

menuContentLayout.grid = function() {
  const menuContentItem = node('div|id:menu-content-item-grid,class:menu-content-item');

  const gridColumn = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.column',
    id: 'grid-column',
    labelText: 'Grid column',
    value: state_state.get.current().grid.column,
    defaultValue: state_state.get.default().grid.column,
    min: state_state.get.minMax().grid.column.min,
    max: state_state.get.minMax().grid.column.max,
    action: () => {
      grid_grid.render.style();
      bookmark_bookmark.render.clear();
      bookmark_bookmark.render.item();
      data.save();
    }
  });

  const gridGap = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.gap',
    id: 'grid-gap',
    labelText: 'Grid gap',
    value: state_state.get.current().grid.gap,
    defaultValue: state_state.get.default().grid.gap,
    min: state_state.get.minMax().grid.gap.min,
    max: state_state.get.minMax().grid.gap.max,
    action: () => {
      grid_grid.render.style();
      data.save();
    }
  });

  const gridPerspective = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.perspective',
    id: 'grid-perspective',
    labelText: 'Grid perspective',
    value: state_state.get.current().grid.perspective,
    defaultValue: state_state.get.default().grid.perspective,
    min: state_state.get.minMax().grid.perspective.min,
    max: state_state.get.minMax().grid.perspective.max,
    action: () => {
      grid_grid.render.style();
      data.save();
    }
  });

  const gridFocus = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.transform.focus',
    id: 'grid-transform-focus',
    labelText: 'Grid tilt on hover',
    value: state_state.get.current().grid.transform.focus,
    defaultValue: state_state.get.default().grid.transform.focus,
    min: state_state.get.minMax().grid.transform.focus.min,
    max: state_state.get.minMax().grid.transform.focus.max,
    action: () => {
      data.save();
    }
  });

  const gridTransformRotateX = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.transform.rotate.x',
    id: 'grid-transform-rotate-x',
    labelText: 'Rotate grid around X axis',
    value: state_state.get.current().grid.transform.rotate.x,
    defaultValue: state_state.get.default().grid.transform.rotate.x,
    min: state_state.get.minMax().grid.transform.rotate.x.min,
    max: state_state.get.minMax().grid.transform.rotate.x.max,
    action: () => {
      grid_grid.render.style();
      grid_grid.render.rotate.style(state_state.get.current().grid.transform.rotate.x, state_state.get.current().grid.transform.rotate.y, state_state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  const gridTransformRotateY = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.transform.rotate.y',
    id: 'grid-transform-rotate-y',
    labelText: 'Rotate grid around Y axis',
    value: state_state.get.current().grid.transform.rotate.y,
    defaultValue: state_state.get.default().grid.transform.rotate.y,
    min: state_state.get.minMax().grid.transform.rotate.y.min,
    max: state_state.get.minMax().grid.transform.rotate.y.max,
    action: () => {
      grid_grid.render.style();
      grid_grid.render.rotate.style(state_state.get.current().grid.transform.rotate.x, state_state.get.current().grid.transform.rotate.y, state_state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  const gridTransformRotateZ = new Control_slider({
    object: state_state.get.current(),
    path: 'grid.transform.rotate.z',
    id: 'grid-transform-rotate-z',
    labelText: 'Rotate grid around Z axis',
    value: state_state.get.current().grid.transform.rotate.z,
    defaultValue: state_state.get.default().grid.transform.rotate.z,
    min: state_state.get.minMax().grid.transform.rotate.z.min,
    max: state_state.get.minMax().grid.transform.rotate.z.max,
    action: () => {
      grid_grid.render.style();
      grid_grid.render.rotate.style(state_state.get.current().grid.transform.rotate.x, state_state.get.current().grid.transform.rotate.y, state_state.get.current().grid.transform.rotate.z);
      data.save();
    }
  });

  menuContentItem.appendChild(menu_menu.render.component.item.header('Hex grid'));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      gridColumn.wrap(),
      gridGap.wrap(),
      gridPerspective.wrap(),
      gridFocus.wrap(),
      node('hr'),
      gridTransformRotateX.wrap(),
      gridTransformRotateY.wrap(),
      gridTransformRotateZ.wrap()
    ])
  );

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/bookmark/index.js

































const menuContentBookmark = {};

menuContentBookmark.hover = function() {
  const menuContentItem = node('div|id:menu-content-item-hover,class:menu-content-item');

  const bookmarkHoverSize = new Control_slider({
    object: state_state.get.current(),
    path: 'bookmark.hover.size',
    id: 'bookmark-hover-size',
    labelText: 'Bookmark grow on hover',
    value: state_state.get.current().bookmark.hover.size,
    defaultValue: state_state.get.default().bookmark.hover.size,
    min: state_state.get.minMax().bookmark.hover.size.min,
    max: state_state.get.minMax().bookmark.hover.size.max,
    action: () => {
      bookmark_bookmark.render.style();
      data.save();
    }
  });

  const bookmarkHoverDistance = new Control_slider({
    object: state_state.get.current(),
    path: 'bookmark.hover.distance',
    id: 'bookmark-hover-distance',
    labelText: 'Bookmark raise distance on hover',
    value: state_state.get.current().bookmark.hover.distance,
    defaultValue: state_state.get.default().bookmark.hover.distance,
    min: state_state.get.minMax().bookmark.hover.distance.min,
    max: state_state.get.minMax().bookmark.hover.distance.max,
    action: () => {
      bookmark_bookmark.render.style();
      data.save();
    }
  });

  menuContentItem.appendChild(menu_menu.render.component.item.header('Hover'));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      bookmarkHoverSize.wrap(),
      bookmarkHoverDistance.wrap(),
    ])
  );

  return menuContentItem;
};

menuContentBookmark.shadow = function() {
  const menuContentItem = node('div|id:menu-content-item-shadow,class:menu-content-item');

  const bookmarkShadowDistance = new Control_slider({
    object: state_state.get.current(),
    path: 'bookmark.shadow.distance',
    id: 'bookmark-shadow-distance',
    labelText: 'Bookmark shadow distance',
    value: state_state.get.current().bookmark.shadow.distance,
    defaultValue: state_state.get.default().bookmark.shadow.distance,
    min: state_state.get.minMax().bookmark.shadow.distance.min,
    max: state_state.get.minMax().bookmark.shadow.distance.max,
    action: () => {
      bookmark_bookmark.render.style();
      data.save();
    }
  });

  const bookmarkShadowBlur = new Control_slider({
    object: state_state.get.current(),
    path: 'bookmark.shadow.blur',
    id: 'bookmark-shadow-blur',
    labelText: 'Bookmark shadow blur',
    value: state_state.get.current().bookmark.shadow.blur,
    defaultValue: state_state.get.default().bookmark.shadow.blur,
    min: state_state.get.minMax().bookmark.shadow.blur.min,
    max: state_state.get.minMax().bookmark.shadow.blur.max,
    action: () => {
      bookmark_bookmark.render.style();
      data.save();
    }
  });

  menuContentItem.appendChild(menu_menu.render.component.item.header('Shadow'));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      bookmarkShadowDistance.wrap(),
      bookmarkShadowBlur.wrap()
    ])
  );

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/toolbar/index.js

































const menuContentToolbar = {};

menuContentToolbar.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Style'));

  const toolbarStyle = new Control_radio({
    object: state_state.get.current(),
    radioGroup: [
      { id: 'toolbar-style-transparent', labelText: 'Transparent', value: 'transparent' },
      { id: 'toolbar-style-Bar', labelText: 'Bar', value: 'bar' }
    ],
    groupName: 'toolbar-style',
    path: 'toolbar.style',
    action: () => {
      toolbar_toolbar.render.class();
      toolbar_toolbar.bar.clear();
      toolbar_toolbar.bar.render();
      toolbar_toolbar.bar.active();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const toolbarStyleHelper = new Control_helperText({
    text: ['Use the Bar style if the Toolbar is not visible with your Background.']
  });

  menuContentItem.appendChild(menu_menu.render.component.item.form([
    toolbarStyle.inline(),
    toolbarStyleHelper.wrap()
  ]));

  return menuContentItem;
};

menuContentToolbar.position = function() {
  const menuContentItem = node('div|id:menu-content-item-position,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Position'));

  const toolbarPosition = new Control_radioGrid({
    object: state_state.get.current(),
    radioGroup: [
      { id: 'toolbar-position-top-left', labelText: 'Top left', value: 'top-left', position: 1 },
      { id: 'toolbar-position-top-right', labelText: 'Top right', value: 'top-right', position: 2 },
      { id: 'toolbar-position-bottom-left', labelText: 'Bottom left', value: 'bottom-left', position: 3 },
      { id: 'toolbar-position-bottom-right', labelText: 'Bottom right', value: 'bottom-right', position: 4 }
    ],
    label: 'Toolbar position',
    groupName: 'toolbar-position',
    path: 'toolbar.position',
    gridSize: '2x2',
    action: () => {
      toolbar_toolbar.render.class();
      toolbar_toolbar.bar.clear();
      toolbar_toolbar.bar.render();
      toolbar_toolbar.bar.active();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const toolbarPositionHelper = new Control_helperText({
    text: ['Position the Toolbar in one of the four corners of the window.']
  });

  menuContentItem.appendChild(menu_menu.render.component.item.form([
    toolbarPosition.grid(),
    toolbarPositionHelper.wrap()
  ]));

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/theme/index.js

































const menuContentTheme = {};

menuContentTheme.exposeControl = {
  style: false
};

menuContentTheme.style = function() {
  const menuContentItem = node('div|id:menu-content-item-style,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Style'));

  const themeStyle = new Control_radio({
    object: state_state.get.current(),
    radioGroup: [
      { id: 'theme-style-dark', labelText: 'Dark mode', description: false, value: 'dark' },
      { id: 'theme-style-light', labelText: 'Light mode', description: false, value: 'light' },
      { id: 'theme-style-system', labelText: 'Automatic', description: 'Follow the system Light or Dark mode.', value: 'system' }
    ],
    groupName: 'theme-style',
    path: 'theme.style',
    action: () => {
      theme_theme.mod.style.initial();
      theme_theme.render.class();
      data.save();
    }
  });

  menuContentTheme.exposeControl.style = themeStyle;

  menuContentItem.appendChild(menu_menu.render.component.item.form([
    themeStyle.wrap()
  ]));

  return menuContentItem;
};

menuContentTheme.color = function() {
  const menuContentItem = node('div|id:menu-content-item-color,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Colour'));

  const shadesHelper = new Control_helperText({
    text: ['Backgrounds, Bookmarks and Modals use shades from the left.', 'Text and form elements use shades from the right.', 'For a light look switch to the Light Style and then select a Primary colour. And vice versa for a dark look.']
  });

  const themeColorRangePrimaryH = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.color.range.primary.h',
    id: 'theme-color-range-primary-h',
    labelText: 'Primary colour',
    hue: true,
    value: state_state.get.current().theme.color.range.primary.h,
    defaultValue: state_state.get.default().theme.color.range.primary.h,
    min: state_state.get.minMax().theme.color.range.primary.h.min,
    max: state_state.get.minMax().theme.color.range.primary.h.max,
    action: () => {
      theme_theme.render.color();
      data.save();
    }
  });

  const themeColorRangePrimaryS = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.color.range.primary.s',
    id: 'theme-color-range-primary-s',
    labelText: 'Saturation',
    value: state_state.get.current().theme.color.range.primary.s,
    defaultValue: state_state.get.default().theme.color.range.primary.s,
    min: state_state.get.minMax().theme.color.range.primary.s.min,
    max: state_state.get.minMax().theme.color.range.primary.s.max,
    action: () => {
      theme_theme.render.color();
      data.save();
    }
  });

  const themeColorRangeContrast = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.color.lightness.contrast',
    id: 'theme-color-range-contrast',
    labelText: 'Contrast',
    value: state_state.get.current().theme.color.lightness.contrast,
    defaultValue: state_state.get.default().theme.color.lightness.contrast,
    min: state_state.get.minMax().theme.color.lightness.contrast.min,
    max: state_state.get.minMax().theme.color.lightness.contrast.max,
    action: () => {
      state_state.get.current().theme.color.lightness.offset = 40 - state_state.get.current().theme.color.lightness.contrast;
      state_state.get.current().theme.color.lightness.start = state_state.get.current().theme.color.lightness.offset;
      state_state.get.current().theme.color.lightness.end = 100 - state_state.get.current().theme.color.lightness.offset;
      theme_theme.render.color();
      data.save();
    }
  });

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      sticky_sticky({
        children: [
          wrap_wrap({
            children: [
              menuContentTheme.shades()
            ]
          })
        ]
      }),
      shadesHelper.wrap(),
      node('hr'),
      themeColorRangePrimaryH.wrap(),
      themeColorRangePrimaryS.wrap(),
      themeColorRangeContrast.wrap()
    ])
  );

  return menuContentItem;
};

menuContentTheme.shades = function() {
  const formGroup = group_group({
    block: true,
    border: true
  });

  const shadeCount = state_state.get.current().theme.color.shades;

  for (var i = 1; i <= shadeCount; i++) {
    let count = i;

    if (count < 10) {
      count = '0' + count;
    };

    formGroup.appendChild(
      node('div|class:form-group-text form-group-text-borderless', [
        node('div|class:theme-color-box theme-color-shade-' + count + '')
      ])
    );
  };

  return formGroup;
};

menuContentTheme.accent = function() {
  const menuContentItem = node('div|id:menu-content-item-accent,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Accent'));

  const themeAccentMixer = new Control_colorMixer({
    object: state_state.get.current(),
    path: 'theme.accent',
    id: 'theme-accent',
    labelText: 'Accent colour',
    defaultValue: state_state.get.default().theme.accent.rgb,
    minMaxObject: state_state.get.minMax(),
    action: () => {
      theme_theme.render.accent();
      toolbar_toolbar.accent.update();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      themeAccentMixer.wrap()
    ])
  );

  return menuContentItem;
};

menuContentTheme.bookmark = function() {
  const menuContentItem = node('div|id:menu-content-item-bookmark,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Bookmark'));

  const themeBookmarkShadowColorBy = new Control_radio({
    object: state_state.get.current(),
    radioGroup: [
      { id: 'theme-bookmark-shadow-color-type-theme', labelText: 'Theme Accent', description: 'Use the Accent defined by the Theme.', value: 'theme' },
      { id: 'theme-bookmark-shadow-color-type-custom', labelText: 'Custom Accent', description: 'Override the Theme Accent.', value: 'custom' }
    ],
    groupName: 'theme-bookmark-shadow-color-type',
    path: 'theme.bookmark.shadow.color.type',
    action: () => {
      theme_theme.render.class();
      themeBookmarkShadowColorByCollapse.update();
      data.save();
    }
  });

  const themeBookmarkShadowColor = new Control_colorMixer({
    object: state_state.get.current(),
    path: 'theme.bookmark.shadow.color',
    id: 'theme-bookmark-shadow-color',
    labelText: 'Bookmark shadow colour',
    srOnly: true,
    defaultValue: state_state.get.default().theme.bookmark.shadow.color.rgb,
    minMaxObject: state_state.get.minMax(),
    action: () => {
      theme_theme.render.bookmark.style();
      data.save();
    }
  });

  const themeBookmarkShadowOpacity = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.bookmark.shadow.opacity',
    id: 'theme-bookmark-shadow-opacity',
    labelText: 'Bookmark shadow opacity',
    value: state_state.get.current().theme.bookmark.shadow.opacity,
    defaultValue: state_state.get.default().theme.bookmark.shadow.opacity,
    min: state_state.get.minMax().theme.bookmark.shadow.opacity.min,
    max: state_state.get.minMax().theme.bookmark.shadow.opacity.max,
    action: () => {
      theme_theme.render.bookmark.style();
      data.save();
    }
  });

  const themeBookmarkShadowColorByCustonArea = node('div', [
    node('hr'),
    themeBookmarkShadowColor.wrap(),
  ]);

  const themeBookmarkShadowColorByCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeBookmarkShadowColorBy,
    target: [{
      id: themeBookmarkShadowColorBy.radioSet[1].radio.value,
      content: themeBookmarkShadowColorByCustonArea
    }]
  });

  themeBookmarkShadowColorByCollapse.update();

  menuContentItem.appendChild(menu_menu.render.component.item.form([
    wrap_wrap({
      children: [
        label_label({
          text: 'Bookmark shadow colour'
        })
      ]
    }),
    themeBookmarkShadowColorBy.wrap(),
    wrap_wrap({
      children: [
        indent_indent({
          children: [
            themeBookmarkShadowColorByCollapse.collapse(),
            node('hr'),
            themeBookmarkShadowOpacity.wrap()
          ]
        })
      ]
    })
  ]));

  return menuContentItem;
};

menuContentTheme.background = function() {
  const menuContentItem = node('div|id:menu-content-item-background,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Background'));

  const themeBackgroundType = new Control_radio({
    object: state_state.get.current(),
    radioGroup: [
      { id: 'theme-background-type-theme', labelText: 'Background by Theme', description: 'Use the Background colour defined by the Theme.', value: 'theme' },
      { id: 'theme-background-type-accent', labelText: 'Background by Accent', description: 'Use the Accent colour for the Background.', value: 'accent' },
      { id: 'theme-background-type-color', labelText: 'Custom colour', value: 'color' },
      { id: 'theme-background-type-gradient', labelText: 'Gradient', value: 'gradient' },
      { id: 'theme-background-type-image', labelText: 'Image', value: 'image' },
      { id: 'theme-background-type-video', labelText: 'Video', value: 'video' }
    ],
    groupName: 'theme-background-type',
    path: 'theme.background.type',
    action: () => {
      theme_theme.render.background.type();
      themeBackgroundCollapse.update();
      toolbar_toolbar.render.style.update();
      updateDisabled();
      updateVideoPlayState();
      data.save();
    }
  });

  const themeBackgroundColorMixer = new Control_colorMixer({
    object: state_state.get.current(),
    path: 'theme.background.color',
    id: 'theme-background-color',
    labelText: 'Background colour',
    defaultValue: state_state.get.default().theme.background.color.rgb,
    minMaxObject: state_state.get.minMax(),
    action: () => {
      theme_theme.render.background.color();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientAngle = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.gradient.angle',
    id: 'theme-background-gradient-angle',
    labelText: 'Background gradient angle',
    value: state_state.get.current().theme.background.gradient.angle,
    defaultValue: state_state.get.default().theme.background.gradient.angle,
    min: state_state.get.minMax().theme.background.gradient.angle.min,
    max: state_state.get.minMax().theme.background.gradient.angle.max,
    action: () => {
      theme_theme.render.background.gradient();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientStartMixer = new Control_colorMixer({
    object: state_state.get.current(),
    path: 'theme.background.gradient.start',
    id: 'theme-background-gradient-start',
    labelText: 'Background gradient start',
    defaultValue: state_state.get.default().theme.background.gradient.start.rgb,
    minMaxObject: state_state.get.minMax(),
    action: () => {
      theme_theme.render.background.gradient();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundGradientEndMixer = new Control_colorMixer({
    object: state_state.get.current(),
    path: 'theme.background.gradient.end',
    id: 'theme-background-gradient-end',
    labelText: 'Background gradient end',
    defaultValue: state_state.get.default().theme.background.gradient.end.rgb,
    minMaxObject: state_state.get.minMax(),
    action: () => {
      theme_theme.render.background.gradient();
      toolbar_toolbar.render.style.update();
      data.save();
    }
  });

  const themeBackgroundImageUrl = new Control_text({
    object: state_state.get.current(),
    path: 'theme.background.image.url',
    id: 'theme-background-image-url',
    value: state_state.get.current().theme.background.image.url,
    placeholder: 'https://www.example.com/image.jpg',
    labelText: 'Background image URL',
    action: () => {
      theme_theme.render.background.image.set();
      data.save();
    }
  });

  const themeBackgroundImageUrlHelper = new Control_helperText({
    text: ['Background image only supports a direct URL to an image file.']
  });

  const themeBackgroundImageBlur = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.image.blur',
    id: 'theme-background-image-blur',
    labelText: 'Background image blur',
    value: state_state.get.current().theme.background.image.blur,
    defaultValue: state_state.get.default().theme.background.image.blur,
    min: state_state.get.minMax().theme.background.image.blur.min,
    max: state_state.get.minMax().theme.background.image.blur.max,
    action: () => {
      theme_theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundImageScale = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.image.scale',
    id: 'theme-background-image-scale',
    labelText: 'Background image scale',
    value: state_state.get.current().theme.background.image.scale,
    defaultValue: state_state.get.default().theme.background.image.scale,
    min: state_state.get.minMax().theme.background.image.scale.min,
    max: state_state.get.minMax().theme.background.image.scale.max,
    action: () => {
      theme_theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundImageOpacity = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.image.opacity',
    id: 'theme-background-image-opacity',
    labelText: 'Background image opacity',
    value: state_state.get.current().theme.background.image.opacity,
    defaultValue: state_state.get.default().theme.background.image.opacity,
    min: state_state.get.minMax().theme.background.image.opacity.min,
    max: state_state.get.minMax().theme.background.image.opacity.max,
    action: () => {
      theme_theme.render.background.image.filter();
      data.save();
    }
  });

  const themeBackgroundVideoUrl = new Control_text({
    object: state_state.get.current(),
    path: 'theme.background.video.url',
    id: 'theme-background-video-url',
    value: state_state.get.current().theme.background.video.url,
    placeholder: 'https://www.example.com/video.mp4',
    labelText: 'Background video URL',
    action: () => {
      theme_theme.render.background.video.remove();
      theme_theme.render.background.video.set();
      theme_theme.render.background.video.add();
      data.save();
    }
  });

  const themeBackgroundVideoUrlHelper = new Control_helperText({
    text: ['Background video only supports a direct URL to a video file. Supports MP4 and WebM format.', 'YouTube page URLs can not be used.']
  });

  const themeBackgroundVideoBlur = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.video.blur',
    id: 'theme-background-video-blur',
    labelText: 'Background video blur',
    value: state_state.get.current().theme.background.video.blur,
    defaultValue: state_state.get.default().theme.background.video.blur,
    min: state_state.get.minMax().theme.background.video.blur.min,
    max: state_state.get.minMax().theme.background.video.blur.max,
    action: () => {
      theme_theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundVideoScale = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.video.scale',
    id: 'theme-background-video-scale',
    labelText: 'Background video scale',
    value: state_state.get.current().theme.background.video.scale,
    defaultValue: state_state.get.default().theme.background.video.scale,
    min: state_state.get.minMax().theme.background.video.scale.min,
    max: state_state.get.minMax().theme.background.video.scale.max,
    action: () => {
      theme_theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundVideoOpacity = new Control_slider({
    object: state_state.get.current(),
    path: 'theme.background.video.opacity',
    id: 'theme-background-video-opacity',
    labelText: 'Background video opacity',
    value: state_state.get.current().theme.background.video.opacity,
    defaultValue: state_state.get.default().theme.background.video.opacity,
    min: state_state.get.minMax().theme.background.video.opacity.min,
    max: state_state.get.minMax().theme.background.video.opacity.max,
    action: () => {
      theme_theme.render.background.video.filter();
      data.save();
    }
  });

  const themeBackgroundColorArea = node('div', [
    node('hr'),
    themeBackgroundColorMixer.wrap()
  ]);

  const themeBackgroundGradientArea = node('div', [
    node('hr'),
    themeBackgroundGradientAngle.wrap(),
    node('hr'),
    themeBackgroundGradientStartMixer.wrap(),
    node('hr'),
    themeBackgroundGradientEndMixer.wrap()
  ]);

  const themeBackgroundImageArea = node('div', [
    node('hr'),
    themeBackgroundImageUrl.wrap(),
    themeBackgroundImageUrlHelper.wrap(),
    node('hr'),
    themeBackgroundImageBlur.wrap(),
    themeBackgroundImageScale.wrap(),
    themeBackgroundImageOpacity.wrap()
  ]);

  const themeBackgroundVideoArea = node('div', [
    node('hr'),
    themeBackgroundVideoUrl.wrap(),
    themeBackgroundVideoUrlHelper.wrap(),
    node('hr'),
    themeBackgroundVideoBlur.wrap(),
    themeBackgroundVideoScale.wrap(),
    themeBackgroundVideoOpacity.wrap()
  ]);

  const themeBackgroundCollapse = new Collapse({
    type: 'radio',
    radioGroup: themeBackgroundType,
    target: [{
      id: themeBackgroundType.radioSet[2].radio.value,
      content: themeBackgroundColorArea
    }, {
      id: themeBackgroundType.radioSet[3].radio.value,
      content: themeBackgroundGradientArea
    }, {
      id: themeBackgroundType.radioSet[4].radio.value,
      content: themeBackgroundImageArea
    }, {
      id: themeBackgroundType.radioSet[5].radio.value,
      content: themeBackgroundVideoArea
    }]
  });

  themeBackgroundCollapse.update();

  menuContentItem.appendChild(menu_menu.render.component.item.form([
    themeBackgroundType.wrap(),
    wrap_wrap({
      children: [
        indent_indent({
          children: [
            themeBackgroundCollapse.collapse()
          ]
        })
      ]
    })
  ]));

  const updateVideoPlayState = () => {
    if (themeBackgroundType.value() === 'video') {
      theme_theme.render.background.video.element.play();
    } else {
      theme_theme.render.background.video.element.pause();
    };
  };

  const updateDisabled = () => {
    switch (state_state.get.current().theme.background.type) {
      case 'theme':
      case 'accent':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'color':
        themeBackgroundColorMixer.enable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'gradient':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.enable();
        themeBackgroundGradientStartMixer.enable();
        themeBackgroundGradientEndMixer.enable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'image':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.enable();
        themeBackgroundImageUrlHelper.enable();
        themeBackgroundImageBlur.enable();
        themeBackgroundImageScale.enable();
        themeBackgroundImageOpacity.enable();
        themeBackgroundVideoUrl.disable();
        themeBackgroundVideoUrlHelper.disable();
        themeBackgroundVideoBlur.disable();
        themeBackgroundVideoScale.disable();
        themeBackgroundVideoOpacity.disable();
        break;

      case 'video':
        themeBackgroundColorMixer.disable();
        themeBackgroundGradientAngle.disable();
        themeBackgroundGradientStartMixer.disable();
        themeBackgroundGradientEndMixer.disable();
        themeBackgroundImageUrl.disable();
        themeBackgroundImageUrlHelper.disable();
        themeBackgroundImageBlur.disable();
        themeBackgroundImageScale.disable();
        themeBackgroundImageOpacity.disable();
        themeBackgroundVideoUrl.enable();
        themeBackgroundVideoUrlHelper.enable();
        themeBackgroundVideoBlur.enable();
        themeBackgroundVideoScale.enable();
        themeBackgroundVideoOpacity.enable();
        break;
    };
  };

  updateDisabled();

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/data/index.js

































const menuContentData = {};

menuContentData.import = function() {
  const menuContentItem = node('div|id:menu-content-item-import,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Import'));

  const importFeedback = feedback_feedback();

  data.render.feedback.empty(importFeedback);

  const importButton = new Control_inputButton({
    id: 'name',
    type: 'file',
    inputHide: true,
    labelText: 'Import data',
    action: () => {
      data.import(importButton.input, importFeedback)
    }
  });

  const importHelper = new Control_helperText({
    text: ['Restore a previously exported ' + data.saveName + ' backup.']
  });

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      importButton.wrap(),
      importHelper.wrap(),
      wrap_wrap({
        children: [
          importFeedback
        ]
      })
    ])
  );

  return menuContentItem;
};

menuContentData.backup = function() {
  const menuContentItem = node('div|id:menu-content-item-backup,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Backup'));

  const exportButton = new Button({
    text: 'Export data',
    style: ['line'],
    func: () => {
      data.export();
    }
  });

  const exportHelper = new Control_helperText({
    text: ['Download a backup of your ' + data.saveName + ' Bookmarks and Settings.', 'This file can later be imported on this or another deivce.']
  });

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      exportButton.wrap(),
      exportHelper.wrap()
    ])
  );

  return menuContentItem;
};

menuContentData.clear = function() {
  const menuContentItem = node('div|id:menu-content-item-clear,class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Clear'));

  const clearButton = new Button({
    text: 'Clear all data',
    style: ['line'],
    func: () => {
      menu_menu.close();
      data.render.clear();
    }
  });

  const clearHelper = new Control_helperText({
    text: ['Wipe all data and restore ' + data.saveName + ' to the default state.']
  });

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      clearButton.wrap(),
      clearHelper.wrap()
    ])
  );

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/coffee/index.js

































const menuContentCoffee = {};

menuContentCoffee.fuel = function() {
  const menuContentItem = node('div|class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header('Coffee for fuel'));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      complexNode({
        tag: 'p',
        text: data.saveName + ' is free, appreciation is welcome in the form of coffee!'
      }),
      node('hr'),
      wrap_wrap({
        children: [
          link_link.render({
            text: 'Buy me a coffee',
            href: 'https://www.buymeacoffee.com/zombieFox',
            iconName: 'coffee',
            iconPosition: 'left',
            linkButton: true,
            style: ['line'],
            classList: ['button-line', 'button-large', 'px-4', 'py-3']
          })
        ]
      })
    ])
  );

  return menuContentItem;
};



;// CONCATENATED MODULE: ./src/component/menu/content/app/index.js

































const menuContentApp = {};

menuContentApp.splash = function() {
  const menuContentItem = node('div|class:menu-content-item');

  menuContentItem.appendChild(menu_menu.render.component.item.header(data.saveName));

  menuContentItem.appendChild(
    menu_menu.render.component.item.form([
      node('div|class:version', [
        logo_logo.render(),
        node('div|class:version-details', [
          node('p:Version ' + version_version.number + '|class:version-number mb-0'),
          node('p:' + version_version.name + '|class:version-name small')
        ])
      ]),
      node('hr'),
      complexNode({
        tag: 'p',
        text: 'Project repository on ',
        node: [link_link.render({
          text: 'GitHub.',
          href: 'https://github.com/zombieFox/' + data.saveName,
          openNew: true
        })]
      }),
      node('hr'),
      complexNode({
        tag: 'p',
        text: 'For feedback and support, submit an ',
        node: [link_link.render({
          text: 'Issue.',
          href: 'https://github.com/zombieFox/' + data.saveName + '/issues',
          openNew: true
        })]
      })
    ])
  );

  return menuContentItem;
};



// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/menu/index.css
var menu = __webpack_require__(7525);
;// CONCATENATED MODULE: ./src/component/menu/index.css

            

var menu_options = {};

menu_options.insert = "head";
menu_options.singleton = false;

var menu_update = injectStylesIntoStyleTag_default()(menu/* default */.Z, menu_options);



/* harmony default export */ const component_menu = (menu/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/component/menu/index.js



































const MenuNav = function() {
  this.nav = node('div|class:menu-nav');

  this.navItem = [];

  menu_menu.mod.area.all.forEach((item, i) => {

    const navItem = {
      active: item.active,
      topLevel: false,
      subLevel: false
    };

    const navButton = new Button({
      text: item.name,
      style: ['link'],
      block: true,
      classList: ['menu-nav-tab'],
      func: () => {
        menu_menu.mod.area.toggle(item.name);
        menu_menu.render.component.content();
        currentContentArea.scrollTop = 0;
        this.update();
      }
    });

    navItem.topLevel = navButton.button;

    if (item.subNav) {
      const subNav = node('div|class:menu-subnav');

      item.subNav.forEach((item, i) => {

        const subNavBarItem = node('a:' + item.name + '|href:#menu-content-item-' + item.id + ',class:menu-nav-sub button button-link button-small,tabindex:1');
        subNav.appendChild(subNavBarItem);
      });

      navItem.subLevel = subNav;
    };

    this.navItem.push(navItem);

  });

  this.init = () => {
    this.navItem.forEach((item, i) => {
      if (item.subLevel) {
        item.subLevel.classList.add('active');
        item.subLevel.setAttribute('style', '--menu-subnav-height: ' + item.subLevel.getBoundingClientRect().height + 'px;');
        item.subLevel.classList.remove('active');
      };
    });
  };

  this.update = () => {
    menu_menu.mod.area.all.forEach((item, i) => {

      this.navItem[i].menuNavItem.classList.remove('active');
      this.navItem[i].topLevel.classList.remove('active');

      if (item.subNav) {
        this.navItem[i].subLevel.classList.remove('active');
      };

      if (item.active) {
        this.navItem[i].menuNavItem.classList.add('active');
        this.navItem[i].topLevel.classList.add('active');

        if (item.subNav) {
          this.navItem[i].subLevel.classList.add('active');
        };
      };

    });
  };

  this.render = () => {
    this.navItem.forEach((item, i) => {
      item.menuNavItem = node('div|class:menu-nav-item');

      if (item.active) {
        item.menuNavItem.classList.add('active');
      };

      item.menuNavItem.appendChild(item.topLevel);

      if (item.subLevel) {
        item.menuNavItem.appendChild(item.subLevel);
      };

      this.nav.appendChild(item.menuNavItem);
    });

    return this.nav;
  };
};

let currentMenu = null;

let currentContentArea = node('div|class:menu-content');

const menu_menu = {};

menu_menu.mod = {};

menu_menu.mod.open = function() {
  state_state.get.current().menu = true;
};

menu_menu.mod.close = function() {
  state_state.get.current().menu = false;
};

menu_menu.mod.area = {
  all: [{
    id: 'layout',
    name: 'Layout',
    active: true,
    overscroll: true,
    subNav: [{ id: 'size', name: 'Scaling' }, { id: 'grid', name: 'Hex grid' }]
  }, {
    id: 'bookmark',
    name: 'Bookmarks',
    active: false,
    overscroll: true,
    subNav: [{ id: 'hover', name: 'Hover' }, { id: 'shadow', name: 'Shadow' }]
  }, {
    id: 'toolbar',
    name: 'Toolbar',
    active: false,
    overscroll: true,
    subNav: [{ id: 'style', name: 'Style' }, { id: 'position', name: 'Position' }]
  }, {
    id: 'theme',
    name: 'Theme',
    active: false,
    overscroll: true,
    subNav: [{ id: 'style', name: 'Style' }, { id: 'color', name: 'Color' }, { id: 'accent', name: 'Accent' }, { id: 'bookmark', name: 'Bookmarks' }, { id: 'background', name: 'Background' }]
  }, {
    id: 'data',
    name: 'Data',
    active: false,
    overscroll: true,
    subNav: [{ id: 'import', name: 'Import' }, { id: 'backup', name: 'Backup' }, { id: 'clear', name: 'Clear' }]
  }, {
    id: 'coffee',
    name: 'Coffee',
    active: false,
    overscroll: false
  }, {
    id: 'app',
    name: data.saveName,
    active: false,
    overscroll: false
  }],
  toggle: function(name) {
    menu_menu.mod.area.all.forEach((item, i) => {
      item.active = false;
      if (item.name == name) {
        item.active = true;
      };
    });
  }
};

menu_menu.bind = {};

menu_menu.bind.close = {
  check: function(event) {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(currentMenu)) {
      menu_menu.close();
    };
  },
  add: function() {
    window.addEventListener('mouseup', menu_menu.bind.close.check);
  },
  remove: function() {
    window.removeEventListener('mouseup', menu_menu.bind.close.check);
  }
};

menu_menu.render = {};

menu_menu.render.class = () => {
  const html = document.querySelector('html');

  if (state_state.get.current().menu) {
    html.classList.add('is-menu-open');
  } else {
    html.classList.remove('is-menu-open');
  };
};

menu_menu.render.frame = {
  open: function() {
    // menu containers
    const menuElement = node('section|class:menu');

    const menuArea = node('section|class:menu-area');

    menuElement.addEventListener('transitionend', function(event, elapsed) {
      if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
        menuElement.remove();
        currentMenu = null;
      };
    });

    // menu components
    const menuClose = menu_menu.render.component.close();

    let menuNav = new MenuNav();

    menuArea.appendChild(menuNav.render());
    menuArea.appendChild(menuClose);
    menuArea.appendChild(currentContentArea);

    // add menu content for active area
    menu_menu.render.component.content();

    menuElement.appendChild(menuArea);
    document.querySelector('body').appendChild(menuElement);

    getComputedStyle(menuElement).opacity;

    menuElement.classList.remove('is-transparent');
    menuElement.classList.add('is-opaque');

    if (currentMenu) {
      menu_menu.render.frame.close();
    };

    currentMenu = menuElement;

    menuNav.init();
    menuNav.update();
  },
  close: function() {
    if (currentMenu) {
      if (currentMenu.classList.contains('is-opaque')) {
        currentMenu.classList.remove('is-opaque');
        currentMenu.classList.add('is-transparent');
      } else {
        currentMenu.remove();
      };
    } else {
      document.querySelectorAll('.menu').forEach((item, i) => {
        item.classList.add('is-opaque');
        item.classList.remove('is-transparent');
        item.remove();
      });
    };
  }
};

menu_menu.render.component = {
  close: function() {
    const menuClose = node('div|class:menu-close');

    const closeButton = new Button({
      text: 'Close settings menu',
      srOnly: true,
      style: ['link'],
      iconName: 'cross',
      classList: ['menu-close-button'],
      func: function() {
        menu_menu.close();
      }
    });

    menuClose.appendChild(closeButton.button);

    return menuClose;
  },
  content: function() {
    while (currentContentArea.lastChild) {
      currentContentArea.removeChild(currentContentArea.lastChild);
    };

    menu_menu.mod.area.all.forEach((item, i) => {
      if (item.active) {
        if (item.overscroll) {
          currentContentArea.classList.add('menu-content-overscroll');
        } else {
          currentContentArea.classList.remove('menu-content-overscroll');
        };

        if (menu_menu.render.component.section[item.id]) {
          menu_menu.render.component.section[item.id](currentContentArea);
        } else {
          currentContentArea.appendChild(node('p:' + item.id));
        };
      };
    });
  },
  item: {
    form: function(children) {
      return node('div|class:menu-item-form', children);
    },
    header: function(name) {
      const item = node('div|class:menu-item-header');
      const text = node('h1:' + name + '|class:menu-item-header-text');
      item.appendChild(text);
      return item;
    }
  },
  section: {
    layout: function(currentContentArea) {
      currentContentArea.appendChild(menuContentLayout.size());
      currentContentArea.appendChild(menuContentLayout.grid());
    },
    bookmark: function(currentContentArea) {
      currentContentArea.appendChild(menuContentBookmark.hover());
      currentContentArea.appendChild(menuContentBookmark.shadow());
    },
    toolbar: function(currentContentArea) {
      currentContentArea.appendChild(menuContentToolbar.style());
      currentContentArea.appendChild(menuContentToolbar.position());
    },
    theme: function(currentContentArea) {
      currentContentArea.appendChild(menuContentTheme.style());
      currentContentArea.appendChild(menuContentTheme.color());
      currentContentArea.appendChild(menuContentTheme.accent());
      currentContentArea.appendChild(menuContentTheme.bookmark());
      currentContentArea.appendChild(menuContentTheme.background());
    },
    data: function(currentContentArea) {
      currentContentArea.appendChild(menuContentData.import());
      currentContentArea.appendChild(menuContentData.backup());
      currentContentArea.appendChild(menuContentData.clear());
    },
    coffee: function(currentContentArea) {
      currentContentArea.appendChild(menuContentCoffee.fuel());
    },
    app: function(currentContentArea) {
      currentContentArea.appendChild(menuContentApp.splash());
    }
  }
};

menu_menu.open = function() {
  menu_menu.mod.open();
  menu_menu.render.frame.open();
  menu_menu.render.class();
  menu_menu.bind.close.add();
  pageLock.render();
};

menu_menu.close = function() {
  menu_menu.mod.close();
  menu_menu.render.frame.close();
  menu_menu.render.class();
  menu_menu.bind.close.remove();
  pageLock.render();
};

menu_menu.toggle = function() {
  if (state_state.get.current().menu) {
    menu_menu.close();
  } else {
    menu_menu.open();
  };
};

menu_menu.init = function() {
  menu_menu.close();
};



;// CONCATENATED MODULE: ./src/component/keyboard/index.js












const KeyPress = function({ keycode = false, ctrl = false, alt = false, action = false } = {}) {
  this.bind = () => {
    if (keycode) {

      window.addEventListener('keydown', function(event) {
        if ((event.keyCode == keycode) && (ctrl == event.ctrlKey) && (alt == event.altKey)) {
          event.preventDefault();
          if (action) {
            action();
          };
        };
      });

    };
  };
};

const keyboard = {};

keyboard.esc = new KeyPress({
  keycode: 27,
  action: () => {
    if (state_state.get.current().menu) {
      menu_menu.close();
    } else if (state_state.get.current().autoSuggest) {
      autoSuggest_autoSuggest.close();
    } else if (state_state.get.current().bookmark.add) {
      modal_modal.close();
    } else if (state_state.get.current().modal) {
      modal_modal.close();
    } else if (state_state.get.current().bookmark.edit) {
      bookmark_bookmark.edit.close();
    };
  }
});

keyboard.ctrAltA = new KeyPress({
  keycode: 65,
  ctrl: true,
  alt: true,
  action: () => {
    if (state_state.get.current().menu) {
      menu_menu.close();
    };
    if (!state_state.get.current().bookmark.add) {
      bookmark_bookmark.add.open();
    };
  }
});

keyboard.ctrAltE = new KeyPress({
  keycode: 69,
  ctrl: true,
  alt: true,
  action: () => {
    bookmark_bookmark.edit.toggle();
    toolbar_toolbar.bar.active();
    data.save();
  }
});

keyboard.ctrAltD = new KeyPress({
  keycode: 68,
  ctrl: true,
  alt: true,
  action: () => {
    theme_theme.style.toggle();
    if (menuContentTheme.exposeControl.style) {
      menuContentTheme.exposeControl.style.update();
    };
    data.save();
  }
});

keyboard.ctrAltM = new KeyPress({
  keycode: 77,
  ctrl: true,
  alt: true,
  action: () => {
    if (state_state.get.current().bookmark.add) {
      modal_modal.close();
    };
    menu_menu.toggle();
  }
});

keyboard.init = function() {
  keyboard.esc.bind();
  keyboard.ctrAltA.bind();
  keyboard.ctrAltE.bind();
  keyboard.ctrAltD.bind();
  keyboard.ctrAltM.bind();
};



;// CONCATENATED MODULE: ./src/component/index.js



























const component = {
  base: component_base_base,
  state: state_state,
  data: data,
  version: version_version,
  autoSuggest: autoSuggest_autoSuggest,
  fontawesome: fontawesome_fontawesome,
  form: component_form_namespaceObject,
  grid: grid_grid,
  icon: icon_icon,
  keyboard: keyboard,
  layout: layout_layout,
  link: link_link,
  logo: logo_logo,
  menu: menu_menu,
  modal: modal_modal,
  pageLock: pageLock,
  theme: theme_theme,
  toolbar: toolbar_toolbar,
  update: update_update,
  bookmark: bookmark_bookmark,
  Button: Button,
  Suggest: Suggest,
  Collapse: Collapse,
  Tab: Tab
};

;// CONCATENATED MODULE: ./src/index.js



console.log(component.data.saveName + ' version:', component.version.number, component.version.name);

component.data.init();
component.layout.init();
component.grid.init();
component.bookmark.init();
component.theme.init();
component.toolbar.init();
component.menu.init();
component.modal.init();
component.autoSuggest.init();
component.keyboard.init();

})();

/******/ })()
;