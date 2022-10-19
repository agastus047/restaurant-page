/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDSDtBQUNJOztBQUV4QyxzREFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZWxvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTUlMQU5PIENBRkVcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IGxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsxLnNldEF0dHJpYnV0ZSgnaHJlZicsJycpO1xuICAgIGxpbmsxLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbGluazEuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaW5rMSk7XG4gICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluazIuc2V0QXR0cmlidXRlKCdocmVmJywnJyk7XG4gICAgbGluazIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBsaW5rMi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmsyKTtcbiAgICBjb25zdCBsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rMy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCcnKTtcbiAgICBsaW5rMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGxpbmszLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGluazMpO1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib2R5Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Qm9keSk7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gICAgY29uc3QgYmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJnSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCcuLi9zcmMvcGljcy9qYXktd2VubmluZ3Rvbi1OX1k4OFRXbUd3QS11bnNwbGFzaC5qcGcnKTtcbiAgICBiZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaW1hZ2UnKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChiZ0ltYWdlKTtcbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIkFzIGdvb2QgYXMgaXQgZ2V0cyFcIjtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWRpdHMuY2xhc3NMaXN0LmFkZCgnY3JlZGl0cycpO1xuICAgIGNyZWRpdHMuaW5uZXJIVE1MID0gJzxwPlBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AamF5d2VubmluZ3Rvbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5KYXkgV2VubmluZ3RvbjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL2Zvb2Q/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+PC9wPic7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG59XG5cbmV4cG9ydCB7aW5pdGlhbExvYWR9OyIsImZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIGNvbnRlbnRCb2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50Jyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xuICAgIGNvbnN0IGJmSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBiZkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywnLi4vc3JjL3BpY3MvYnJlYWtmYXN0LmpwZycpO1xuICAgIGJmSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0LWltYWdlJyk7XG4gICAgZWxlbWVudDEuYXBwZW5kQ2hpbGQoYmZJbWFnZSk7XG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXRleHQnKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiQnJlYWtmYXN0XCI7XG4gICAgZWxlbWVudDEuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnZWxlbWVudCcpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQyKTtcbiAgICBjb25zdCBsdW5jaEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbHVuY2hJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsJy4uL3NyYy9waWNzL2x1bmNoLmpwZycpO1xuICAgIGx1bmNoSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbHVuY2gtaW1hZ2UnKTtcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChsdW5jaEltYWdlKTtcbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtdGV4dCcpO1xuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJMdW5jaFwiO1xuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHRleHQyKTtcbiAgICBjb25zdCBlbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQzLmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQnKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50Myk7XG4gICAgY29uc3QgZGlubmVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkaW5uZXJJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsJy4uL3NyYy9waWNzL2Rpbm5lci5qcGcnKTtcbiAgICBkaW5uZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdkaW5uZXItaW1hZ2UnKTtcbiAgICBlbGVtZW50My5hcHBlbmRDaGlsZChkaW5uZXJJbWFnZSk7XG4gICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0My5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LXRleHQnKTtcbiAgICB0ZXh0My50ZXh0Q29udGVudCA9IFwiRGlubmVyXCI7XG4gICAgZWxlbWVudDMuYXBwZW5kQ2hpbGQodGV4dDMpO1xufVxuXG5leHBvcnQge21lbnVMb2FkfTsiLCJmdW5jdGlvbiBob21lUmVsb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm9keScpO1xuICAgIGNvbnRlbnRCb2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgICBjb250ZW50Qm9keS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gICAgY29uc3QgYmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJnSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCcuLi9zcmMvcGljcy9qYXktd2VubmluZ3Rvbi1OX1k4OFRXbUd3QS11bnNwbGFzaC5qcGcnKTtcbiAgICBiZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaW1hZ2UnKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChiZ0ltYWdlKTtcbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIkFzIGdvb2QgYXMgaXQgZ2V0cyFcIjtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWRpdHMuY2xhc3NMaXN0LmFkZCgnY3JlZGl0cycpO1xuICAgIGNyZWRpdHMuaW5uZXJIVE1MID0gJzxwPlBob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AamF5d2VubmluZ3Rvbj91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5KYXkgV2VubmluZ3RvbjwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3MvcGhvdG9zL2Zvb2Q/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+PC9wPic7XG4gICAgY29udGVudEJvZHkuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG59XG5cbmV4cG9ydCB7aG9tZVJlbG9hZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2luaXRpYWxMb2FkfSBmcm9tIFwiLi9sb2FkSG9tZVwiO1xuaW1wb3J0IHttZW51TG9hZH0gZnJvbSBcIi4vbG9hZE1lbnVcIjtcbmltcG9ydCB7aG9tZVJlbG9hZH0gZnJvbSBcIi4vcmVsb2FkSG9tZVwiO1xuXG5pbml0aWFsTG9hZCgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhvbWVSZWxvYWQoKTtcbn0pO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBtZW51TG9hZCgpO1xufSk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=