/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    font-family: 'Grenze Gotisch', cursive;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 450px;\r\n    font-size: 1.8rem;\r\n    background-color:#071108;\r\n    width: 100%;\r\n    height: 8%;\r\n    color: #DBD4D3;\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    gap: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.main {\r\n    background-color: rgba(7, 7, 7, 0.6);\r\n    padding: 25px;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: #F0F7F4;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.restaurant-name {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #DBD4D3;\r\n    cursor: pointer;\r\n}\r\n\r\n.info {\r\n    color: white;\r\n}\r\n\r\n.hero {\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n    color: orange;\r\n}\r\n\r\n.small {\r\n    font-size: 2rem;\r\n    color: #95A3A4;\r\n}\r\n\r\n#order {\r\n    width: 140px;\r\n    height: 50px;\r\n    font-size: 1.4rem;\r\n    appearance: none;\r\n    background-color: #3C3C3C;\r\n    color: #d6b750;\r\n    border-radius: 8px;\r\n    border: 2px solid #1E1D1D;\r\n    transition-duration: 0.2s;\r\n}\r\n\r\n#order:hover {\r\n    transform: scale(1.1);\r\n    background-color: #373636;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    height: 20vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n    gap: 40px;\r\n    color: rgb(191, 132, 23);\r\n}\r\n\r\n.location, .hours {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu {\r\n    margin: 20px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: 80px;\r\n    column-gap: 200px;\r\n    margin-bottom: 8%;\r\n}\r\n\r\n.food {\r\n    height: 200px;\r\n    width: 300px;\r\n    background-color: rgba(7, 7, 7, 0.6);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    gap: 10px;\r\n    border: 5px solid grey;\r\n    border-radius: 8px;\r\n}\r\n\r\n.food-name {\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-weight: bold;\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n.ingridients {\r\n    color: rgba(255, 255, 255, 0.729);\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.img-food {\r\n    margin-top: -30px;\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 35px;\r\n}\r\n\r\n.price {\r\n    color: white;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 3rem;\r\n    color: orange;\r\n}\r\n\r\n.contactsInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(7, 7, 7, 0.6);\r\n    padding: 25px;\r\n    border-radius: 12px;\r\n    margin-bottom: 300px;\r\n}\r\n\r\n.contactsInfo > h2 {\r\n    color: white;\r\n    font-size: 3rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n\r\n\r\nlet page = \"Home\";\r\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n\r\nlet navLinks = Array.from(document.querySelectorAll(\".navlink\"));\r\n\r\nfunction loadPage(){\r\n    let target = this;\r\n    if (this.tagName === \"BUTTON\"){\r\n        target = navLinks[1];\r\n    }\r\n    \r\n    page = target.innerHTML;\r\n\r\n    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.clearSite)();\r\n    \r\n    if (page === \"Home\") {\r\n        (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n    } else if (page === \"Menu\"){\r\n        (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();\r\n    } else if (page === \"Contacts\"){\r\n        (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadContacts)();\r\n    }\r\n    \r\n    navLinks.forEach(navlink => {\r\n        navlink.style.color = \"#DBD4D3\";\r\n    });\r\n    target.style.color = \"orange\";\r\n}\r\n\r\nnavLinks.forEach(link => {\r\n    link.addEventListener(\"click\", loadPage)\r\n});\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSite: () => (/* binding */ clearSite),\n/* harmony export */   loadContacts: () => (/* binding */ loadContacts),\n/* harmony export */   loadHome: () => (/* binding */ loadHome),\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _images_cheese_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cheese burger.png */ \"./src/images/cheese burger.png\");\n/* harmony import */ var _images_chicken_basket_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chicken basket.png */ \"./src/images/chicken basket.png\");\n/* harmony import */ var _images_chicken_sandwich_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chicken sandwich.png */ \"./src/images/chicken sandwich.png\");\n/* harmony import */ var _images_hotdog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hotdog.png */ \"./src/images/hotdog.png\");\nconst content = document.querySelector(\"#content\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement(\"div\");\r\n    header.classList.add(\"header\");\r\n\r\n    const restaurantName = document.createElement(\"div\");\r\n    restaurantName.textContent = \"Hour Cookery\";\r\n    restaurantName.classList.add(\"restaurant-name\");\r\n\r\n    const navbar = document.createElement(\"div\");\r\n    navbar.classList.add(\"navbar\");\r\n\r\n    const home = document.createElement(\"a\");\r\n    home.textContent = \"Home\";\r\n    home.classList.add(\"navlink\");\r\n    const menu = document.createElement(\"a\");\r\n    menu.textContent = \"Menu\";\r\n    menu.classList.add(\"navlink\");\r\n    const contacts = document.createElement(\"a\");\r\n    contacts.textContent = \"Contacts\";\r\n    contacts.classList.add(\"navlink\");\r\n\r\n    navbar.appendChild(home);\r\n    navbar.appendChild(menu);\r\n    navbar.appendChild(contacts);\r\n\r\n    header.appendChild(restaurantName);\r\n    header.appendChild(navbar);\r\n\r\n    return header;\r\n}\r\n\r\nfunction createHomeMain() {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n\r\n    const hero = document.createElement(\"div\");\r\n    hero.textContent = \"Visit our restaurant full of delicious food!\";\r\n    hero.classList.add(\"hero\");\r\n\r\n    const small = document.createElement(\"div\");\r\n    small.textContent = \"Cheap and tasty!\";\r\n    small.classList.add(\"small\");\r\n\r\n    const order = document.createElement(\"button\");\r\n    order.textContent = \"Order Now\";\r\n    order.setAttribute(\"id\", \"order\");\r\n    order.addEventListener(\"click\", _index_js__WEBPACK_IMPORTED_MODULE_1__.loadPage);\r\n\r\n    main.appendChild(hero);\r\n    main.appendChild(small);\r\n    main.appendChild(order);\r\n\r\n    return main;\r\n}\r\n\r\nfunction createHomeInfo() {\r\n    const info = document.createElement(\"div\");\r\n    info.classList.add(\"info\");\r\n\r\n    const location = document.createElement(\"div\");\r\n    location.classList.add(\"location\");\r\n\r\n    const address1 = document.createElement(\"div\");\r\n    address1.textContent = \"160 Sherman Court\";\r\n\r\n    const address2 = document.createElement(\"div\");\r\n    address2.textContent = \"New York, NY 10031\";\r\n\r\n    const hours = document.createElement(\"div\");\r\n    hours.classList.add(\"hours\");\r\n\r\n    const hours1 = document.createElement(\"div\");\r\n    hours1.textContent = \"Mon-Thurs: 7am-7pm\";\r\n\r\n    const hours2 = document.createElement(\"div\");\r\n    hours2.textContent = \"Fri-Sun: 7am-10pm\";\r\n\r\n    hours.appendChild(hours1);\r\n    hours.appendChild(hours2);\r\n\r\n    location.appendChild(address1);\r\n    location.appendChild(address2);\r\n\r\n    info.appendChild(location);\r\n    info.appendChild(hours);\r\n\r\n    return info;\r\n}\r\n\r\nconst createFood = (name, price, ingridients, image) => {\r\n    return {name, price, ingridients, image};\r\n}\r\n\r\nconst foods = [\r\n    createFood(\"Cheese Burger\", \"3\", \"Homestyle Patty: Beef, Encapsulated Salt, Spice, Toasted Bun\", _images_cheese_burger_png__WEBPACK_IMPORTED_MODULE_2__),\r\n    createFood(\"Chicken Sandwich\", \"2,6\", \"Nice Chicken Strips\", _images_chicken_sandwich_png__WEBPACK_IMPORTED_MODULE_4__),\r\n    createFood(\"Hot Dog\", \"2,2\", \"Classic Delicious Hotdog\", _images_hotdog_png__WEBPACK_IMPORTED_MODULE_5__),\r\n    createFood(\"Chicken Basket\", \"4\", \"White meat seasoned chicken strips are served with crispy fries\", _images_chicken_basket_png__WEBPACK_IMPORTED_MODULE_3__)\r\n]\r\n\r\n\r\nfunction createMenu() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n\r\n    for (let i = 0; i < 4; i++) {\r\n        const currentFood = foods[i];\r\n\r\n        const foodDiv = document.createElement(\"div\");\r\n        foodDiv.classList.add(\"food\");\r\n\r\n        const foodName = document.createElement(\"div\");\r\n        foodName.classList.add(\"food-name\");\r\n        foodName.textContent = currentFood.name;\r\n\r\n        const container = document.createElement(\"div\");\r\n        container.classList.add(\"container\");\r\n\r\n        const ingridients = document.createElement(\"div\");\r\n        ingridients.classList.add(\"ingridients\");\r\n        ingridients.textContent = currentFood.ingridients;\r\n\r\n        const imgFood = document.createElement(\"img\");\r\n        imgFood.classList.add(\"img-food\");\r\n        imgFood.setAttribute(\"src\", currentFood.image);\r\n\r\n        const price = document.createElement(\"div\");\r\n        price.classList.add(\"price\");\r\n        price.textContent = currentFood.price + \" $\";\r\n\r\n        container.appendChild(imgFood);\r\n        container.appendChild(price);\r\n\r\n        foodDiv.appendChild(foodName);\r\n        foodDiv.appendChild(container);\r\n        foodDiv.appendChild(ingridients);\r\n\r\n        menu.appendChild(foodDiv);\r\n    }\r\n\r\n    return menu;\r\n}\r\n\r\nfunction createContacts() {\r\n    const contactsInfo = document.createElement(\"div\");\r\n    contactsInfo.classList.add(\"contactsInfo\");\r\n\r\n    const phoneNumber = document.createElement(\"h2\");\r\n    phoneNumber.textContent = \"(302) 123-1234\";\r\n\r\n    const email = document.createElement(\"h2\");\r\n    email.textContent = \"hourcookery@gmail.com\";\r\n\r\n    contactsInfo.appendChild(phoneNumber);\r\n    contactsInfo.appendChild(email);\r\n\r\n    return contactsInfo;\r\n}\r\n\r\nconst loadHome = () => {\r\n    content.appendChild(createHomeMain());\r\n    content.appendChild(createHomeInfo());\r\n};\r\n\r\nconst loadMenu = () => {\r\n    content.appendChild(createMenu());\r\n};\r\n\r\nconst loadContacts = () => {\r\n    content.appendChild(createContacts());\r\n};\r\n\r\nconst clearSite = () => {\r\n    for (let i = 1; i <= content.childElementCount; i++) {\r\n        content.removeChild(content.lastElementChild);\r\n    }\r\n}\r\n\r\ncontent.appendChild(createHeader());\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/page-load.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4208d1ec829fc47f7b26.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/cheese burger.png":
/*!**************************************!*\
  !*** ./src/images/cheese burger.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69f3eba58c9a77909b59.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/cheese_burger.png?");

/***/ }),

/***/ "./src/images/chicken basket.png":
/*!***************************************!*\
  !*** ./src/images/chicken basket.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3c4bf028912eac5773b.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/chicken_basket.png?");

/***/ }),

/***/ "./src/images/chicken sandwich.png":
/*!*****************************************!*\
  !*** ./src/images/chicken sandwich.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ec9b8438ced01e03e0e.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/chicken_sandwich.png?");

/***/ }),

/***/ "./src/images/hotdog.png":
/*!*******************************!*\
  !*** ./src/images/hotdog.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0df24288196f78faa729.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/images/hotdog.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;