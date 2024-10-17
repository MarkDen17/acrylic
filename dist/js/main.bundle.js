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

/***/ "./src/js/_calculator.js":
/*!*******************************!*\
  !*** ./src/js/_calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst calculator = document.querySelector('[data-js=calculator]');\r\nconst calculatorItems = calculator.querySelector('.calculator__items');\r\nconst VALUE_PER_ITEM = 1;\r\n\r\nconst itemTemplate = `\r\n        <div class=\"calculator__item calculator__item_new\">\r\n          <label class=\"calculator__property\">\r\n            <span class=\"calculator__property-name\">Тип материала\r\n            </span>\r\n            <select name=\"materials\" data-js=\"materials\"\r\n              class=\"calculator__property-value calculator__property-value_select\">\r\n              <option class=\"calculator__property-option\" disabled selected>Выберите материал\r\n              </option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 1,5мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 2мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 3мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 4мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 5мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 6мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 8мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло прозрачное 10мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло Молочное(белое) 2мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло Молочное(белое) 3мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло Черное 3мм</option>\r\n              <option class=\"calculator__property-option\">Акрилл Золотой зеркальный 3мм</option>\r\n              <option class=\"calculator__property-option\">Акрилл Серебряный зеркальный 3мм</option>\r\n              <option class=\"calculator__property-option\">Оргстекло Сатиновое(матовое) 4мм</option>\r\n              <option class=\"calculator__property-option\">ПЭТ 1мм</option>\r\n              <option class=\"calculator__property-option\">ПЭТ 0,5мм</option>\r\n            </select>\r\n          </label>\r\n          <label class=\"calculator__property\">\r\n            <span class=\"calculator__property-name\">Длинна</span>\r\n            <input type=\"number\" class=\"calculator__property-value\" data-js=\"size\" placeholder=\"Укажите размер\">\r\n          </label>\r\n          <label class=\"calculator__property\">\r\n            <span class=\"calculator__property-name\">Ширина</span>\r\n            <input type=\"number\" class=\"calculator__property-value\" data-js=\"size\" placeholder=\"Укажите размер\">\r\n          </label>\r\n          <label class=\"calculator__property\">\r\n            <span class=\"calculator__property-name\">Количество</span>\r\n            <input type=\"number\" class=\"calculator__property-value\" data-js=\"amount\" placeholder=\"Укажите количество\">\r\n          </label>\r\n          <div class=\"calculator__item-summary\">\r\n            <span class=\"calculator__item-text\">Стоимость товара</span>\r\n            <span class=\"calculator__item-value\" data-js=\"item-price\">0 руб.</span>\r\n            <span class=\"calculator__item-text\">Вес позиции</span>\r\n            <span class=\"calculator__item-value\">0 кг.</span>\r\n          </div>\r\n          <button class=\"calculator__add-button\" data-js=\"add-button\">Добавить позицию</button>\r\n        </div>\r\n`;\r\n\r\nwindow.addEventListener('click', (event) => {\r\n  if (event.target.dataset.js === 'add-button') {\r\n    calculatorItems.insertAdjacentHTML(\"beforeend\", itemTemplate)\r\n    event.target.setAttribute(\"disabled\", true)\r\n  }\r\n});\r\n\r\ncalculator.addEventListener('input', (event) => itemPriceHandler(event));\r\n\r\n\r\nfunction itemPriceHandler(event) {\r\n  const item = event.target.closest('.calculator__item');\r\n  const $priceEl = item.querySelector('[data-js=\"item-price\"]');\r\n  const amount = item.querySelector('[data-js=\"amount\"]').value || 0;\r\n\r\n  validateInput(event)\r\n  $priceEl.innerText = `${getPrice(item) * amount} руб.`;\r\n  totalPriceHandler();\r\n}\r\n\r\nfunction totalPriceHandler() {\r\n  const $totaPriceEl = calculator.querySelector('[data-js=\"total-price\"]');\r\n  $totaPriceEl.innerText = `${getTotalPrice()} руб.`;\r\n}\r\n\r\nfunction getArea(element) {\r\n  return [...element.querySelectorAll('[data-js=\"size\"]')].reduce((acc, element) => acc * parseInt(element.value), 1) || 0;\r\n}\r\nfunction getPrice(element) {\r\n  return getArea(element) * VALUE_PER_ITEM;\r\n}\r\n\r\nfunction validateInput(event) {\r\n  if (event.target.dataset.js === 'size') {\r\n    event.target.value = Math.abs(event.target.value)\r\n  }\r\n\r\n  if (event.target.dataset.js === 'amount') {\r\n    event.target.value = Math.abs(event.target.value) || 0\r\n  }\r\n}\r\n\r\nfunction getTotalPrice() {\r\n  let $pricesArray = [...calculator.querySelectorAll('.calculator__item-value[data-js=item-price]')]\r\n  return $pricesArray.reduce((acc, element) => {\r\n    return acc + parseInt(element.innerText)\r\n  }, 0)\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./src/js/_calculator.js?");

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp/./src/js/_vendor.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor.js */ \"./src/js/_vendor.js\");\n/* harmony import */ var _calculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_calculator.js */ \"./src/js/_calculator.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./src/js/main.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;