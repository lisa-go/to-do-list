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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Ubuntu\\\";\\n  height: 100vh;\\n  width: 100%;\\n  padding: 0;\\n  margin: 0;\\n  display: grid;\\n  grid-template-columns: minmax(180px, 1fr) 4fr;\\n  grid-template-rows: 1fr 12fr 0.5fr 0.5fr;\\n}\\n\\n.createHeader {\\n  width: 100%;\\n  text-align: right;\\n  font-weight: 300;\\n  font-size: 1.7rem;\\n  background-color: #FFBCB5;\\n  color: #262322;\\n  letter-spacing: 4px;\\n  padding-top: 1.5rem;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n.createHeader img {\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n.header {\\n  grid-column: 2/3;\\n  width: 100%;\\n  font-family: \\\"Caveat Brush\\\";\\n  font-size: 3rem;\\n  background-color: #262322;\\n  color: #F2E5D7;\\n  display: flex;\\n  flex-direction: row-reverse;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#sidebar {\\n  grid-row: 2/3;\\n  background-color: #262322;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  letter-spacing: 4px;\\n}\\n#sidebar button {\\n  font-family: \\\"Ubuntu\\\";\\n  font-size: 1.3rem;\\n  cursor: pointer;\\n  border: none;\\n  letter-spacing: 4px;\\n  background-color: inherit;\\n}\\n#sidebar #openForm, #sidebar #addProject {\\n  color: #FFBCB5;\\n  padding: 0.5rem 1rem;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n}\\n#sidebar #openForm:hover, #sidebar #addProject:hover {\\n  background-color: rgba(255, 255, 255, 0.1);\\n  font-weight: 500;\\n  transition: 1s;\\n}\\n#sidebar .projheader {\\n  width: 100%;\\n  text-align: right;\\n  font-size: 1.4rem;\\n  background-color: #FFBCB5;\\n  color: #262322;\\n  padding: 0.3rem 0;\\n  margin-top: 1.5rem;\\n  display: flex;\\n  justify-content: flex-end;\\n  font-weight: 300;\\n}\\n#sidebar .projheader img {\\n  width: 2rem;\\n  height: 2rem;\\n}\\n#sidebar .project-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n#sidebar .project-list button {\\n  display: flex;\\n  justify-content: flex-end;\\n  text-align: right;\\n  width: 100%;\\n  background: none;\\n  color: #F2E5D7;\\n}\\n#sidebar .project-list button:hover {\\n  background-color: rgba(255, 255, 255, 0.1);\\n}\\n\\n#taskContainer {\\n  grid-row: 2/5;\\n  width: 100%;\\n  background-color: #F2E5D7;\\n}\\n#taskContainer taskheader {\\n  background-color: #FFBCB5;\\n  font-family: \\\"Caveat brush\\\";\\n  font-size: 1.4rem;\\n  height: 4rem;\\n  align-items: end;\\n  display: grid;\\n  grid-template-columns: 40px 1fr 2fr 0.5fr 0.5fr 0.5fr;\\n  gap: 10px;\\n}\\n#taskContainer .taskCon {\\n  display: grid;\\n  grid-template-columns: 40px 1fr 2fr 0.5fr 0.5fr 0.5fr;\\n  gap: 10px;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 10px;\\n  font-family: \\\"Ubuntu\\\";\\n  color: #262322;\\n  margin: 1rem 0.5rem;\\n  min-height: 2rem;\\n  padding: 0.5rem;\\n  box-shadow: 0 5px 10px rgb(53, 53, 53);\\n}\\n#taskContainer input {\\n  width: 18px;\\n  height: 18px;\\n}\\n#taskContainer ptitle, #taskContainer description, #taskContainer project {\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n#taskContainer settings {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  gap: 0.5rem;\\n  padding-right: 2rem;\\n  cursor: pointer;\\n}\\n#taskContainer settings img {\\n  height: 2rem;\\n  width: 2rem;\\n  border-radius: 1rem;\\n}\\n#taskContainer settings img:hover {\\n  background-color: rgb(228, 228, 228);\\n  transition: 1s;\\n}\\n\\n.clearStorage {\\n  text-align: center;\\n  padding: 1rem;\\n}\\n.clearStorage button {\\n  background-color: inherit;\\n  color: #F2E5D7;\\n  font-family: \\\"Ubuntu\\\";\\n  letter-spacing: 1px;\\n  font-size: 1rem;\\n  cursor: pointer;\\n  padding: 0.3rem 1.5rem;\\n  border: 1px solid #F2E5D7;\\n}\\n.clearStorage button:hover {\\n  transition: 1.5s;\\n  background-color: #FFBCB5;\\n  color: #262322;\\n}\\n\\n.footer, .clearStorage {\\n  background-color: #262322;\\n  color: #FFBCB5;\\n}\\n.footer a, .clearStorage a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 0.5rem;\\n}\\n\\n#formBg, #formBg4, #formBg3, #formBg2 {\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.75);\\n  position: absolute;\\n  display: none;\\n  justify-content: center;\\n}\\n\\n#formContainer, #formContainer3, #formContainer2 {\\n  background-color: rgba(255, 255, 255, 0.7607843137);\\n  box-shadow: 0 5px 10px grey;\\n  border-radius: 1rem;\\n  height: fit-content;\\n  width: fit-content;\\n  padding: 2rem;\\n  display: grid;\\n  grid-template-columns: repeat(4, 120px);\\n  gap: 0.5rem;\\n  margin-top: 15%;\\n}\\n#formContainer h3, #formContainer3 h3, #formContainer2 h3 {\\n  grid-column: 1/3;\\n  margin: 0;\\n  padding-left: 2rem;\\n}\\n#formContainer #title, #formContainer3 #title, #formContainer2 #title {\\n  grid-column: 1/5;\\n  font-size: 1.4rem;\\n}\\n#formContainer #description, #formContainer3 #description, #formContainer2 #description {\\n  grid-column: 1/5;\\n}\\n#formContainer .dueDate, #formContainer3 .dueDate, #formContainer2 .dueDate, #formContainer .priority, #formContainer3 .priority, #formContainer2 .priority, #formContainer .projectL, #formContainer3 .projectL, #formContainer2 .projectL {\\n  display: grid;\\n  justify-items: end;\\n  align-items: center;\\n}\\n#formContainer #formBtn, #formContainer3 #formBtn, #formContainer2 #formBtn {\\n  grid-column: 2/3;\\n}\\n#formContainer button, #formContainer3 button, #formContainer2 button, #formContainer input, #formContainer3 input, #formContainer2 input, #formContainer textarea, #formContainer3 textarea, #formContainer2 textarea, #formContainer select, #formContainer3 select, #formContainer2 select {\\n  font-family: \\\"Ubuntu\\\";\\n  width: 100%;\\n  font-size: 1rem;\\n  padding: 0.3rem;\\n  border-radius: 0.7rem;\\n  resize: none;\\n  border: 1px solid #767676;\\n}\\n#formContainer button, #formContainer3 button, #formContainer2 button {\\n  margin-top: 1rem;\\n  cursor: pointer;\\n}\\n\\n#formContainer2 {\\n  display: grid;\\n  grid-template-columns: repeat(2, 100px);\\n}\\n#formContainer2 h3 {\\n  padding: 0;\\n  text-align: center;\\n}\\n#formContainer2 input {\\n  grid-column: 1/3;\\n}\\n\\n#formContainer3 #etitle {\\n  grid-column: 1/5;\\n  font-size: 1.4rem;\\n}\\n#formContainer3 #edescription {\\n  grid-column: 1/5;\\n}\\n#formContainer3 .edueDate, #formContainer3 .epriority {\\n  display: grid;\\n  justify-items: end;\\n  align-items: center;\\n}\\n#formContainer3 #eformBtn {\\n  grid-column: 2/3;\\n}\\n\\n#viewContainer {\\n  margin-top: 10%;\\n  padding-bottom: 2rem;\\n  border-radius: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.8823529412);\\n  height: fit-content;\\n  width: clamp(400px, 60%, 500px);\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 5px;\\n  font-weight: 300;\\n}\\n#viewContainer * {\\n  overflow: auto;\\n  word-break: break-all;\\n  word-wrap: break-word;\\n}\\n#viewContainer .viewClose {\\n  grid-column: 1/3;\\n  display: grid;\\n  justify-items: end;\\n  justify-content: end;\\n}\\n#viewContainer .viewClose img {\\n  cursor: pointer;\\n  width: 1.8rem;\\n  height: 1.8rem;\\n  filter: invert(83%) sepia(20%) saturate(6481%) hue-rotate(316deg) brightness(87%) contrast(78%);\\n}\\n#viewContainer .viewPriority {\\n  grid-column: 1/3;\\n  margin: 0 10rem;\\n  border-radius: 1rem;\\n  height: 0.8rem;\\n}\\n#viewContainer .viewTitle {\\n  font-size: 1.5rem;\\n  margin-left: 1rem;\\n  margin-right: 0;\\n  display: grid;\\n  align-items: end;\\n  padding: 0.5rem;\\n  border-bottom: 5px double #C97D60;\\n  color: #C97D60;\\n}\\n#viewContainer .viewProject {\\n  font-size: 1.5rem;\\n  margin-right: 1rem;\\n  margin-left: 0;\\n  display: grid;\\n  align-items: end;\\n  justify-content: end;\\n  padding: 0.5rem;\\n  border-bottom: 5px double #C97D60;\\n  color: #C97D60;\\n}\\n#viewContainer .viewDescription {\\n  grid-column: 1/3;\\n  margin: 0 1rem;\\n  padding: 0.5rem;\\n  border: 4px double #C97D60;\\n  color: #63372C;\\n  border-radius: 0.5rem;\\n}\\n#viewContainer .viewDuedate {\\n  grid-column: 2/3;\\n  margin-right: 1rem;\\n  padding: 0.5rem;\\n  display: grid;\\n  align-items: end;\\n  justify-content: end;\\n  color: #C97D60;\\n}\\n\\n.filter-brown {\\n  filter: invert(82%) sepia(8%) saturate(416%) hue-rotate(343deg) brightness(114%) contrast(90%);\\n}\\n\\n.resize {\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  filter: invert(78%) sepia(2%) saturate(6963%) hue-rotate(315deg) brightness(101%) contrast(111%);\\n}\\n\\n.hidden {\\n  position: absolute;\\n  top: 50%;\\n  left: 0;\\n  border-top: 1px solid grey;\\n  background: grey;\\n  width: 100%;\\n  transform: translateY(-50%);\\n  pointer-events: none;\\n}\\n\\n.task {\\n  position: relative;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearDisplay\": () => (/* binding */ clearDisplay),\n/* harmony export */   \"createPselect\": () => (/* binding */ createPselect),\n/* harmony export */   \"displayDprojects\": () => (/* binding */ displayDprojects),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"newdisplayTask\": () => (/* binding */ newdisplayTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _images_settings_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/settings.svg */ \"./src/images/settings.svg\");\n/* harmony import */ var _images_backspace_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/backspace.svg */ \"./src/images/backspace.svg\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _images_double_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/double_arrow.svg */ \"./src/images/double_arrow.svg\");\n/* harmony import */ var _images_fullscreen_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fullscreen.svg */ \"./src/images/fullscreen.svg\");\n\n\n\n\n\n\n\nvar num;\nvar tid;\nconst taskCont = document.querySelector('#taskContainer');\n\nfunction newdisplayTask(value) {\n    if (value === 'new') {\n        num = _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.slice(-1)[0];\n    }\n\n    else {\n        num = value;\n    }\n    //* assigning index of task in array to the dom element *//\n    tid = _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.indexOf(num);\n\n    if (num[5] === 'true') {\n        //* container for task *//\n        const taskDisplay = document.createElement('task' + tid);\n        taskDisplay.classList.add('task');\n        taskDisplay.classList.add('taskCon');\n        taskCont.appendChild(taskDisplay);\n\n            const taskD1 = document.createElement('input');\n            taskD1.type = 'checkbox';\n            taskD1.id = tid;\n            taskD1.classList.add('cb' + tid);\n            taskD1.addEventListener('click', () => {\n                (0,_settings_js__WEBPACK_IMPORTED_MODULE_3__.strikeTask)(taskD1.id);\n            })\n            taskDisplay.appendChild(taskD1);\n\n            const taskD2 = document.createElement('ptitle');\n            taskD2.textContent = num[0];\n            taskDisplay.appendChild(taskD2);\n\n            const taskD3 = document.createElement('description');\n            taskD3.textContent = num[1];\n            taskDisplay.appendChild(taskD3);\n\n            const taskD4 = document.createElement('dueDate');\n            taskD4.textContent = num[2];\n            taskDisplay.appendChild(taskD4);\n\n            const taskD5 = document.createElement('project');\n            taskD5.textContent = num[4];\n            taskDisplay.appendChild(taskD5);\n\n            const taskD6 = document.createElement('settings');\n            taskDisplay.appendChild(taskD6);\n                const editP = new Image();\n                editP.src = _images_settings_svg__WEBPACK_IMPORTED_MODULE_1__;\n                editP.id = tid;\n                editP.addEventListener('click', () => {\n                    (0,_settings_js__WEBPACK_IMPORTED_MODULE_3__.editTask)(editP.id);\n                });\n                taskD6.appendChild(editP);\n                const delP = new Image();\n                delP.src = _images_backspace_svg__WEBPACK_IMPORTED_MODULE_2__;\n                delP.id = tid;\n                delP.addEventListener('click', () => {\n                    (0,_settings_js__WEBPACK_IMPORTED_MODULE_3__.delTask)(delP.id);\n                });\n                taskD6.appendChild(delP);\n                const fullP = new Image();\n                fullP.src = _images_fullscreen_svg__WEBPACK_IMPORTED_MODULE_5__;\n                fullP.id = tid;\n                fullP.addEventListener('click', () => {\n                    (0,_settings_js__WEBPACK_IMPORTED_MODULE_3__.viewFull)(fullP.id);\n                })\n                taskD6.appendChild(fullP);\n\n\n            //* color of border left changes based on priority *//\n            if (num[3] === 'Urgent') {\n                taskDisplay.style.borderLeft = '8px solid red';\n            }\n            else if (num[3] === 'High') {\n                taskDisplay.style.borderLeft = '8px solid orange';\n            }\n            else if (num[3] === 'Normal') {\n                taskDisplay.style.borderLeft = '8px solid yellow';\n            }\n            else if (num[3] === 'Low') {\n                taskDisplay.style.borderLeft = '8px solid green';\n            }\n        }\n\n        else if (num[5] === 'false') {\n            return;\n        }\n}\n\n\nfunction displayTasks(pid) {\n    let pin = pid.toString();\n    let projTask = [];\n\n    if (pin !== 'projAll') {\n        for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {\n            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i][4] === pin) {\n                projTask.push(_index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i]);\n                num = _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i];\n                newdisplayTask(num);\n            }\n        }\n    }\n\n    else {\n        for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.length; i++) {\n            projTask.push(_index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i]);\n            num = _index_js__WEBPACK_IMPORTED_MODULE_0__.myTasks[i];\n            newdisplayTask(num);\n        }  \n    }\n}\n\n\n//* create new divs for new projects *//\n    const projectCont = document.querySelector('.project-list');\nfunction displayProjects() {\n    let pid = _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.slice(-1);\n    const newProject = document.createElement('button');\n    newProject.id = pid;\n    newProject.textContent = pid;\n    newProject.addEventListener('click', () => {\n        clearDisplay('undefined');\n        displayTasks(pid);\n    });\n    \n    projectCont.appendChild(newProject);\n}\n\n\n//* default project displays *//\nfunction displayDprojects() {\n    const allProjects = document.createElement('button');\n    allProjects.id = 'projAll';\n    allProjects.textContent = 'All';\n    allProjects.addEventListener('click', () => {\n        clearDisplay('undefined');\n        let pid = allProjects.id;\n        displayTasks(pid);\n    });\n    projectCont.appendChild(allProjects);\n\n            const daicon = new Image();\n            daicon.src = _images_double_arrow_svg__WEBPACK_IMPORTED_MODULE_4__;\n            daicon.classList.add('daicon');\n            daicon.classList.add('resize');\n            allProjects.appendChild(daicon);\n\n    const defaultP = document.createElement('button');\n    defaultP.id = 'default';\n    defaultP.textContent = 'default';\n    defaultP.addEventListener('click', () => {\n        clearDisplay('undefined');\n        let pid = defaultP.id;\n        displayTasks(pid);\n    });\n    projectCont.appendChild(defaultP);\n\n    //* showing projects from local storage by default *//\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length > 1) {\n        for (let i = 1; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\n            let pid = _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[i];\n            displayProjects(pid);\n        }\n    }\n}\n\n\nfunction createPselect(value){\n    var projectName;\n    const projectList = document.querySelector('#project');\n    const projectList2 = document.querySelector('#eproject');\n\n    if (value === 'new') {\n        projectName = _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.slice(-1);\n    }\n\n    else {\n        projectName = _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[value];\n    }\n\n    const projectStr = document.createElement('option');\n    projectStr.value = projectName;\n    projectStr.textContent = projectName;\n    projectList.appendChild(projectStr);\n\n            const projectStr2 = document.createElement('option');\n            projectStr2.value = projectName;\n            projectStr2.textContent = projectName;\n            projectList2.appendChild(projectStr2);\n}\n\n\nfunction clearDisplay(value) {\n    if (value == 'undefined') {\n        let elements = document.getElementsByClassName('task');\n        while(elements.length > 0){\n            elements[0].parentNode.removeChild(elements[0]);\n        }\n    }\n\n    else if (value == 'daicon') {\n        let elements = document.getElementsByClassName('daicon');\n        while(elements.length > 0){\n            elements[0].parentNode.removeChild(elements[0]);\n        }\n    }\n\n    else {\n        let elements = document.getElementsByTagName('task' + value)\n        while(elements.length > 0){\n            elements[0].parentNode.removeChild(elements[0]);\n        }\n    }\n}\n\nprojectCont.addEventListener('click', function(event) {\n    let bID = document.querySelector('#' + event.target.id);\n    clearDisplay('daicon');\n    const daicon = new Image();\n    daicon.src = _images_double_arrow_svg__WEBPACK_IMPORTED_MODULE_4__;\n    daicon.classList.add('daicon');\n    daicon.classList.add('resize');\n    bID.appendChild(daicon); \n});\n\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"myTasks\": () => (/* binding */ myTasks)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/edit.svg */ \"./src/images/edit.svg\");\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/add.svg */ \"./src/images/add.svg\");\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/github.svg */ \"./src/images/github.svg\");\n/* harmony import */ var _images_expand_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/expand.svg */ \"./src/images/expand.svg\");\n\n\n\n\n\n\n\nlet myTasks = [];\n\nclass Task {\n    constructor(title, description, dueDate, priority, project, show) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = project;\n    this.show = show;\n    }\n        addToList(){ \n            myTasks.push([this.title, this.description, this.dueDate, this.priority, this.project, this.show]);\n            return this;\n        }\n}\n\nclass Project {\n    constructor(pname) {\n        this.pname = pname;\n    }\n        addToProjectlist() {\n            myProjects.push(this.pname);\n            return this;\n        }\n}\n\n//* adding images *//\nconst logo = new Image();\nlogo.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__;\nlogo.classList.add('filter-brown');\ndocument.querySelector('.header').appendChild(logo);\n\nconst add = new Image();\nadd.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\nadd.classList.add('resize');\ndocument.querySelector('#openForm').appendChild(add);\nconst add2 = new Image();\nadd2.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\nadd2.classList.add('resize');\ndocument.querySelector('#addProject').appendChild(add2);\n\n\n//* event listener for submit button on form *//\nconst formBtn = document.querySelector('#formBtn');\nformBtn.addEventListener(\"click\", newTask);\n\n//* create a new task with form values *//\nfunction newTask() {\n    let title = document.querySelector(\"#title\").value;\n    let description = document.querySelector(\"#description\").value;\n    let dueDate = document.querySelector(\"#dueDate\").value;\n    let priority = document.querySelector(\"#priority\").value;\n    let project = document.querySelector(\"#project\").value;\n    let show = 'true';\n\n    var task = new Task(title, description, dueDate, priority, project, show);\n\n    task.addToList();\n\n    closeForm();\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.newdisplayTask)('new');\n    localStorage[\"myTasks\"] = JSON.stringify(myTasks);\n}\n\n\n//* event listener for add task button on sidebar *//\nconst openFormBtn = document.querySelector('#openForm');\nopenFormBtn.addEventListener(\"click\", openForm);\n\n//* function to open form *//\nfunction openForm() {\n    document.querySelector('#formBg').style.display = \"flex\";\n}\n\n//* event listener for cancel button on form *//\nconst closeFormBtn = document.querySelector('#closeForm');\ncloseFormBtn.addEventListener(\"click\", closeForm);\nconst closeFormBtn2 = document.querySelector('#closeForm2');\ncloseFormBtn2.addEventListener(\"click\", closeForm);\n\n//* function to close form *//\nfunction closeForm() {\n    document.querySelector('#formBg').style.display = \"none\";\n    document.querySelector('#formBg2').style.display = \"none\";\n}\n\n//* project list on form *//\nconst projectListCont = document.querySelector('.project');\nconst projectList = document.createElement('select');\nprojectList.name = 'project';\nprojectList.id = 'project';\nprojectList.required = 'true';\nprojectListCont.appendChild(projectList);\n\n        //* project list on edit form too *//\n        const projectListCont2 = document.querySelector('.project2');\n        const projectList2 = document.createElement('select');\n        projectList2.name = 'project';\n        projectList2.id = 'eproject';\n        projectList2.required = 'true';\n        projectListCont2.appendChild(projectList2);\n\n\nconst defaultProject = document.createElement('option');\ndefaultProject.value = 'default';\ndefaultProject.textContent = 'Default';\ndefaultProject.selected = 'true';\nprojectList.appendChild(defaultProject);\n  \n        const defaultProject2 = document.createElement('option');\n        defaultProject2.value = 'default';\n        defaultProject2.textContent = 'Default';\n        defaultProject2.selected = 'true';\n        projectList2.appendChild(defaultProject2);\n\n\nlet myProjects = [projectList.value];\n\n        //* event listener for opening add project form *//\n        const addProjectBtn = document.querySelector('#addProject');\n        addProjectBtn.addEventListener(\"click\", openForm2);\n\n        function openForm2() {\n            document.querySelector('#formBg2').style.display = \"flex\";\n        }\n\n        //* add new projects *//\n        const formBtn2 = document.querySelector('#formBtn2');\n        formBtn2.addEventListener(\"click\", newProject);\n\n        function newProject() {\n            let pname = document.querySelector(\"#newProject\").value;\n            var project = new Project(pname);\n            project.addToProjectlist();\n\n            (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.createPselect)('new');\n            closeForm();\n            (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayProjects)('new');\n            localStorage[\"myProjects\"] = JSON.stringify(myProjects);\n        }\n\n//* footer *//\nconst footCont = document.querySelector('.footer');\nconst cre = document.createElement('a');\ncre.href = 'https://github.com/lisa-go';\nfootCont.appendChild(cre);\n\nconst giticon = new Image();\ngiticon.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_4__;\ngiticon.classList.add('resize');\ncre.appendChild(giticon);\n\nconst cred = document.createElement('p');\ncred.textContent = 'made by Lisa';\ncre.appendChild(cred);\n\n//* add projheader pic *//\nconst projheader = document.querySelector('.projheader');\nconst projicon = new Image();\nprojicon.src = _images_expand_svg__WEBPACK_IMPORTED_MODULE_5__;\nprojheader.appendChild(projicon);\n\n    //* add createheader pic *//\n    const createheader = document.querySelector('.createHeader');\n    const createicon = new Image();\n    createicon.src = _images_expand_svg__WEBPACK_IMPORTED_MODULE_5__;\n    createheader.appendChild(createicon);\n\n//* button to clear storage *//\nconst clearCont = document.querySelector('.clearStorage');\nconst clearBtn = document.createElement('button');\nclearBtn.textContent = 'Clear All';\nclearBtn.addEventListener('click', () => {\n    localStorage.clear();\n    myTasks = [];\n    myProjects = ['default']; \n    location.reload();\n})\nclearCont.appendChild(clearBtn);\n\n\n//* get local storage *//\nif (localStorage[\"myTasks\"] != undefined) {\n    var stored_tasks = JSON.parse(localStorage[\"myTasks\"]);\n    myTasks = stored_tasks;\n}\nif (localStorage[\"myProjects\"] != undefined){\n    var stored_projects = JSON.parse(localStorage[\"myProjects\"]);\n    myProjects = stored_projects;\n}\n\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayDprojects)();\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)('projAll');\n//* existing projects on form select *//\nfor (let i = 1; i < myProjects.length; i++) {\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.createPselect)(i);\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delTask\": () => (/* binding */ delTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"strikeTask\": () => (/* binding */ strikeTask),\n/* harmony export */   \"viewFull\": () => (/* binding */ viewFull)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _images_cancel_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cancel.svg */ \"./src/images/cancel.svg\");\n\n\n\n\nfunction delTask(value) {\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.myTasks[value][5] = 'false';\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.clearDisplay)(value);\n    localStorage[\"myTasks\"] = JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_1__.myTasks);\n}\n\nfunction editTask(value) {\n    let task = _index_js__WEBPACK_IMPORTED_MODULE_1__.myTasks[value];\n\n    openeForm();\n\n    document.querySelector(\"#etitle\").value = task[0];\n    document.querySelector(\"#edescription\").value = task[1];\n    document.querySelector(\"#edueDate\").value = task[2];\n    document.querySelector(\"#epriority\").value = task[3];\n    document.querySelector(\"#eproject\").value = task[4];\n    \n    document.querySelector('#ecloseForm').addEventListener('click', () => {\n        ecloseForm();\n    })\n\n    document.querySelector('#eformBtn').addEventListener('click', () => {\n        task[0] = document.querySelector(\"#etitle\").value;\n        task[1] = document.querySelector(\"#edescription\").value;\n        task[2] = document.querySelector(\"#edueDate\").value;\n        task[3] = document.querySelector(\"#epriority\").value;\n        task[4] = document.querySelector(\"#eproject\").value;\n        ecloseForm();\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.clearDisplay)(value);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.newdisplayTask)(task);\n        localStorage[\"myTasks\"] = JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_1__.myTasks);\n    })\n}\n\nfunction openeForm() {\n    document.querySelector('#formBg3').style.display = \"flex\";\n}\n\nfunction ecloseForm() {\n    document.querySelector('#formBg3').style.display = \"none\";\n    document.querySelector('#formBg4').style.display = \"none\";\n}\n\n\n//* function for striking through a checked checkbox input task *//\nfunction strikeTask(value) {\n    let task = document.querySelector('task' + value);\n    let taskDivs = task.childNodes;\n    let checkbox = document.querySelector('.cb' + value);\n    let str = document.createElement('str' + value);\n    str.classList.add('hidden');\n\n    if (checkbox.checked) {\n        task.appendChild(str);\n            for (let i = 0; i < taskDivs.length; i++) {\n                taskDivs[i].style.fontStyle = 'italic';\n            }\n        task.style.backgroundColor = '#eeeeee';\n    }\n    else {\n        for (let i = 0; i < taskDivs.length; i++) {\n            taskDivs[i].style.fontStyle = 'normal';\n        }\n        task.style.backgroundColor = 'white';\n\n        let elements = document.getElementsByTagName('str' + value)\n        while(elements.length > 0){\n            elements[0].parentNode.removeChild(elements[0]);\n    }\n}\n}\n\nfunction openView() {\n    document.querySelector('#formBg4').style.display = \"flex\";\n}\n\nfunction viewFull(value) {\n    openView();\n    let task = _index_js__WEBPACK_IMPORTED_MODULE_1__.myTasks[value];\n\n    //* priority bar *//\n    const viewPrio = document.querySelector('.viewPriority');\n        if (task[3] === 'Urgent') {\n            viewPrio.style.backgroundColor = 'red';\n        }\n        else if (task[3] === 'High') {\n            viewPrio.style.backgroundColor = 'orange';\n        }\n        else if (task[3] === 'Normal') {\n            viewPrio.style.backgroundColor = 'yellow';\n        }\n        else if (task[3] === 'Low') {\n            viewPrio.style.backgroundColor = 'green';\n        }\n\n    //* task name *//\n    const viewTitle = document.querySelector('.viewTitle');\n    viewTitle.textContent = task[0];\n\n    //* project name *//\n    const viewProject = document.querySelector('.viewProject');\n    viewProject.textContent = '— ' + task[4];\n\n    //* task description *//\n    const viewDescription = document.querySelector('.viewDescription');\n    viewDescription.textContent = task[1];\n\n    //* due date *//\n    const viewDuedate = document.querySelector('.viewDuedate');\n    viewDuedate.textContent = task[2];\n\n    console.log (task);\n\n\n}\n\nconst closeBtn = new Image();\ncloseBtn.src = _images_cancel_svg__WEBPACK_IMPORTED_MODULE_2__;\ncloseBtn.addEventListener('click', () => {\n    ecloseForm();\n});\ndocument.querySelector(\".viewClose\").appendChild(closeBtn);\n\n//# sourceURL=webpack://to-do-list/./src/settings.js?");

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8be36ce240a5f6eb778c.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/add.svg?");

/***/ }),

/***/ "./src/images/backspace.svg":
/*!**********************************!*\
  !*** ./src/images/backspace.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cafa6685fdbbbae86434.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/backspace.svg?");

/***/ }),

/***/ "./src/images/cancel.svg":
/*!*******************************!*\
  !*** ./src/images/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21b8e5b46145830ff5bc.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/cancel.svg?");

/***/ }),

/***/ "./src/images/double_arrow.svg":
/*!*************************************!*\
  !*** ./src/images/double_arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b9e424644eb69e84cbe.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/double_arrow.svg?");

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f629bbe34b39c066f014.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/edit.svg?");

/***/ }),

/***/ "./src/images/expand.svg":
/*!*******************************!*\
  !*** ./src/images/expand.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68f7555337d2c3824658.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/expand.svg?");

/***/ }),

/***/ "./src/images/fullscreen.svg":
/*!***********************************!*\
  !*** ./src/images/fullscreen.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ead6520c9e4bacb58c59.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/fullscreen.svg?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f6656510add442acaf6.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/settings.svg":
/*!*********************************!*\
  !*** ./src/images/settings.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ca9bd6c8064ad77a6d0.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/settings.svg?");

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