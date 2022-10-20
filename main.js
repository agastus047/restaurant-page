/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad() {
    const contentBody = document.querySelector('.content-body');
    contentBody.textContent = '';
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contentBody.appendChild(contactContent);
    const element1 = document.createElement('div');
    element1.classList.add('elementC');
    contactContent.appendChild(element1);
    const header1 = document.createElement('div');
    header1.classList.add('headerC');
    header1.textContent = "ADDRESS";
    element1.appendChild(header1);
    const text1 = document.createElement('div');
    text1.classList.add('textC');
    element1.appendChild(text1);
    const t1p1 = document.createElement('div');
    t1p1.textContent = "16 Ring Road";
    text1.appendChild(t1p1);
    const t1p2 = document.createElement('div');
    t1p2.textContent = "Delhi-01";
    text1.appendChild(t1p2);
    const element2 = document.createElement('div');
    element2.classList.add('elementC');
    contactContent.appendChild(element2);
    const header2 = document.createElement('div');
    header2.classList.add('headerC');
    header2.textContent = "PHONE";
    element2.appendChild(header2);
    const text2 = document.createElement('div');
    text2.classList.add('textC');
    element2.appendChild(text2);
    const t2p1 = document.createElement('div');
    t2p1.textContent = "+91-0000000000";
    text2.appendChild(t2p1);
    const element3 = document.createElement('div');
    element3.classList.add('elementC');
    contactContent.appendChild(element3);
    const header3 = document.createElement('div');
    header3.classList.add('headerC');
    header3.textContent = "WORKING HOURS";
    element3.appendChild(header3);
    const text3 = document.createElement('div');
    text3.classList.add('textC');
    element3.appendChild(text3);
    text3.textContent = "Everyday from 9 AM to 10 PM";
    const element4 = document.createElement('div');
    element4.classList.add('elementC');
    contactContent.appendChild(element4);
    const header4 = document.createElement('div');
    header4.classList.add('headerC');
    header4.textContent = "EMAIL";
    element4.appendChild(header4);
    const text4 = document.createElement('div');
    text4.classList.add('textC');
    element4.appendChild(text4);
    text4.textContent = "milanocafe@example.com";
}



/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
function initialLoad() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    const title = document.createElement('h1');
    title.textContent = "MILANO CAFE";
    header.appendChild(title);
    const link1 = document.createElement('a');
    link1.setAttribute('href','');
    link1.textContent = "Home";
    link1.classList.add('home');
    header.appendChild(link1);
    const link2 = document.createElement('a');
    link2.setAttribute('href','');
    link2.textContent = "Menu";
    link2.classList.add('menu');
    header.appendChild(link2);
    const link3 = document.createElement('a');
    link3.setAttribute('href','');
    link3.textContent = "Contact";
    link3.classList.add('contact');
    header.appendChild(link3);
    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');
    content.appendChild(contentBody);
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    contentBody.appendChild(homeContent);
    const bgImage = document.createElement('img');
    bgImage.setAttribute('src','../src/pics/jay-wennington-N_Y88TWmGwA-unsplash.jpg');
    bgImage.classList.add('home-image');
    homeContent.appendChild(bgImage);
    const infoText = document.createElement('h2');
    infoText.textContent = "As good as it gets!";
    homeContent.appendChild(infoText);
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = '<p>Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>';
    contentBody.appendChild(credits);
}



/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
function menuLoad() {
    const contentBody = document.querySelector('.content-body');
    contentBody.textContent = '';
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    contentBody.appendChild(menuContent);
    const element1 = document.createElement('div');
    element1.classList.add('element');
    menuContent.appendChild(element1);
    const bfImage = document.createElement('img');
    bfImage.setAttribute('src','../src/pics/breakfast.jpg');
    bfImage.classList.add('breakfast-image');
    element1.appendChild(bfImage);
    const text1 = document.createElement('div');
    text1.classList.add('element-text');
    text1.textContent = "Breakfast";
    element1.appendChild(text1);
    const element2 = document.createElement('div');
    element2.classList.add('element');
    menuContent.appendChild(element2);
    const lunchImage = document.createElement('img');
    lunchImage.setAttribute('src','../src/pics/lunch.jpg');
    lunchImage.classList.add('lunch-image');
    element2.appendChild(lunchImage);
    const text2 = document.createElement('div');
    text2.classList.add('element-text');
    text2.textContent = "Lunch";
    element2.appendChild(text2);
    const element3 = document.createElement('div');
    element3.classList.add('element');
    menuContent.appendChild(element3);
    const dinnerImage = document.createElement('img');
    dinnerImage.setAttribute('src','../src/pics/dinner.jpg');
    dinnerImage.classList.add('dinner-image');
    element3.appendChild(dinnerImage);
    const text3 = document.createElement('div');
    text3.classList.add('element-text');
    text3.textContent = "Dinner";
    element3.appendChild(text3);
}



/***/ }),

/***/ "./src/reloadHome.js":
/*!***************************!*\
  !*** ./src/reloadHome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeReload": () => (/* binding */ homeReload)
/* harmony export */ });
function homeReload() {
    const contentBody = document.querySelector('.content-body');
    contentBody.textContent = '';
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    contentBody.appendChild(homeContent);
    const bgImage = document.createElement('img');
    bgImage.setAttribute('src','../src/pics/jay-wennington-N_Y88TWmGwA-unsplash.jpg');
    bgImage.classList.add('home-image');
    homeContent.appendChild(bgImage);
    const infoText = document.createElement('h2');
    infoText.textContent = "As good as it gets!";
    homeContent.appendChild(infoText);
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = '<p>Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>';
    contentBody.appendChild(credits);
}



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _reloadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reloadHome */ "./src/reloadHome.js");
/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContact */ "./src/loadContact.js");





(0,_loadHome__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click',(e) => {
    e.preventDefault();
    (0,_reloadHome__WEBPACK_IMPORTED_MODULE_2__.homeReload)();
});
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();
});
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    (0,_loadContact__WEBPACK_IMPORTED_MODULE_3__.contactLoad)();
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0g7QUFDSTtBQUNFOztBQUUxQyxzREFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVsb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gICAgY29uc3QgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib2R5Jyk7XG4gICAgY29udGVudEJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGVudCcpO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQxLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRDJyk7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xuICAgIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIxLmNsYXNzTGlzdC5hZGQoJ2hlYWRlckMnKTtcbiAgICBoZWFkZXIxLnRleHRDb250ZW50ID0gXCJBRERSRVNTXCI7XG4gICAgZWxlbWVudDEuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0QycpO1xuICAgIGVsZW1lbnQxLmFwcGVuZENoaWxkKHRleHQxKTtcbiAgICBjb25zdCB0MXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdDFwMS50ZXh0Q29udGVudCA9IFwiMTYgUmluZyBSb2FkXCI7XG4gICAgdGV4dDEuYXBwZW5kQ2hpbGQodDFwMSk7XG4gICAgY29uc3QgdDFwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHQxcDIudGV4dENvbnRlbnQgPSBcIkRlbGhpLTAxXCI7XG4gICAgdGV4dDEuYXBwZW5kQ2hpbGQodDFwMik7XG4gICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdlbGVtZW50QycpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQyKTtcbiAgICBjb25zdCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyMi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJDJyk7XG4gICAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiUEhPTkVcIjtcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChoZWFkZXIyKTtcbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHRDJyk7XG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICAgIGNvbnN0IHQycDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0MnAxLnRleHRDb250ZW50ID0gXCIrOTEtMDAwMDAwMDAwMFwiO1xuICAgIHRleHQyLmFwcGVuZENoaWxkKHQycDEpO1xuICAgIGNvbnN0IGVsZW1lbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudDMuY2xhc3NMaXN0LmFkZCgnZWxlbWVudEMnKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50Myk7XG4gICAgY29uc3QgaGVhZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlcjMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyQycpO1xuICAgIGhlYWRlcjMudGV4dENvbnRlbnQgPSBcIldPUktJTkcgSE9VUlNcIjtcbiAgICBlbGVtZW50My5hcHBlbmRDaGlsZChoZWFkZXIzKTtcbiAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQzLmNsYXNzTGlzdC5hZGQoJ3RleHRDJyk7XG4gICAgZWxlbWVudDMuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICAgIHRleHQzLnRleHRDb250ZW50ID0gXCJFdmVyeWRheSBmcm9tIDkgQU0gdG8gMTAgUE1cIjtcbiAgICBjb25zdCBlbGVtZW50NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQ0LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnRDJyk7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDQpO1xuICAgIGNvbnN0IGhlYWRlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXI0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlckMnKTtcbiAgICBoZWFkZXI0LnRleHRDb250ZW50ID0gXCJFTUFJTFwiO1xuICAgIGVsZW1lbnQ0LmFwcGVuZENoaWxkKGhlYWRlcjQpO1xuICAgIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDQuY2xhc3NMaXN0LmFkZCgndGV4dEMnKTtcbiAgICBlbGVtZW50NC5hcHBlbmRDaGlsZCh0ZXh0NCk7XG4gICAgdGV4dDQudGV4dENvbnRlbnQgPSBcIm1pbGFub2NhZmVAZXhhbXBsZS5jb21cIjtcbn1cblxuZXhwb3J0IHtjb250YWN0TG9hZH07IiwiZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1JTEFOTyBDQUZFXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rMS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCcnKTtcbiAgICBsaW5rMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGxpbmsxLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGluazEpO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsyLnNldEF0dHJpYnV0ZSgnaHJlZicsJycpO1xuICAgIGxpbmsyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbGluazIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaW5rMik7XG4gICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluazMuc2V0QXR0cmlidXRlKCdocmVmJywnJyk7XG4gICAgbGluazMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBsaW5rMy5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmszKTtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRCb2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm9keScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEJvZHkpO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250ZW50Jyk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgIGNvbnN0IGJnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiZ0ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywnLi4vc3JjL3BpY3MvamF5LXdlbm5pbmd0b24tTl9ZODhUV21Hd0EtdW5zcGxhc2guanBnJyk7XG4gICAgYmdJbWFnZS5jbGFzc0xpc3QuYWRkKCdob21lLWltYWdlJyk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmdJbWFnZSk7XG4gICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJBcyBnb29kIGFzIGl0IGdldHMhXCI7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVkaXRzLmNsYXNzTGlzdC5hZGQoJ2NyZWRpdHMnKTtcbiAgICBjcmVkaXRzLmlubmVySFRNTCA9ICc8cD5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpheXdlbm5pbmd0b24/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+SmF5IFdlbm5pbmd0b248L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9mb29kP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPjwvcD4nO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGNyZWRpdHMpO1xufVxuXG5leHBvcnQge2luaXRpYWxMb2FkfTsiLCJmdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICBjb250ZW50Qm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnZWxlbWVudCcpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICBjb25zdCBiZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmZJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsJy4uL3NyYy9waWNzL2JyZWFrZmFzdC5qcGcnKTtcbiAgICBiZkltYWdlLmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdC1pbWFnZScpO1xuICAgIGVsZW1lbnQxLmFwcGVuZENoaWxkKGJmSW1hZ2UpO1xuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC10ZXh0Jyk7XG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIkJyZWFrZmFzdFwiO1xuICAgIGVsZW1lbnQxLmFwcGVuZENoaWxkKHRleHQxKTtcbiAgICBjb25zdCBlbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQnKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG4gICAgY29uc3QgbHVuY2hJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGx1bmNoSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCcuLi9zcmMvcGljcy9sdW5jaC5qcGcnKTtcbiAgICBsdW5jaEltYWdlLmNsYXNzTGlzdC5hZGQoJ2x1bmNoLWltYWdlJyk7XG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQobHVuY2hJbWFnZSk7XG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXRleHQnKTtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiTHVuY2hcIjtcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZCh0ZXh0Mik7XG4gICAgY29uc3QgZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50My5jbGFzc0xpc3QuYWRkKCdlbGVtZW50Jyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDMpO1xuICAgIGNvbnN0IGRpbm5lckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGlubmVySW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCcuLi9zcmMvcGljcy9kaW5uZXIuanBnJyk7XG4gICAgZGlubmVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnZGlubmVyLWltYWdlJyk7XG4gICAgZWxlbWVudDMuYXBwZW5kQ2hpbGQoZGlubmVySW1hZ2UpO1xuICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dDMuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC10ZXh0Jyk7XG4gICAgdGV4dDMudGV4dENvbnRlbnQgPSBcIkRpbm5lclwiO1xuICAgIGVsZW1lbnQzLmFwcGVuZENoaWxkKHRleHQzKTtcbn1cblxuZXhwb3J0IHttZW51TG9hZH07IiwiZnVuY3Rpb24gaG9tZVJlbG9hZCgpIHtcbiAgICBjb25zdCBjb250ZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvZHknKTtcbiAgICBjb250ZW50Qm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250ZW50Jyk7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgIGNvbnN0IGJnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiZ0ltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywnLi4vc3JjL3BpY3MvamF5LXdlbm5pbmd0b24tTl9ZODhUV21Hd0EtdW5zcGxhc2guanBnJyk7XG4gICAgYmdJbWFnZS5jbGFzc0xpc3QuYWRkKCdob21lLWltYWdlJyk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoYmdJbWFnZSk7XG4gICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJBcyBnb29kIGFzIGl0IGdldHMhXCI7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xuICAgIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVkaXRzLmNsYXNzTGlzdC5hZGQoJ2NyZWRpdHMnKTtcbiAgICBjcmVkaXRzLmlubmVySFRNTCA9ICc8cD5QaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpheXdlbm5pbmd0b24/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+SmF5IFdlbm5pbmd0b248L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9zL3Bob3Rvcy9mb29kP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPjwvcD4nO1xuICAgIGNvbnRlbnRCb2R5LmFwcGVuZENoaWxkKGNyZWRpdHMpO1xufVxuXG5leHBvcnQge2hvbWVSZWxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbml0aWFsTG9hZH0gZnJvbSBcIi4vbG9hZEhvbWVcIjtcbmltcG9ydCB7bWVudUxvYWR9IGZyb20gXCIuL2xvYWRNZW51XCI7XG5pbXBvcnQge2hvbWVSZWxvYWR9IGZyb20gXCIuL3JlbG9hZEhvbWVcIjtcbmltcG9ydCB7Y29udGFjdExvYWR9IGZyb20gXCIuL2xvYWRDb250YWN0XCI7XG5cbmluaXRpYWxMb2FkKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaG9tZVJlbG9hZCgpO1xufSk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1lbnVMb2FkKCk7XG59KTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb250YWN0TG9hZCgpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9