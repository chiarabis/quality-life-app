/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function formatText(input) {\r\n  let result = \"\";\r\n  \r\n  for (let i = 0; i < input.length; i++) {\r\n      if (input[i] === \" \") {\r\n          result += \"-\";\r\n      } else {\r\n          result += input[i];\r\n      }\r\n  }\r\n  return result;\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n  const searchButton = document.querySelector(\".searchButton\");\r\n\r\n  searchButton.addEventListener(\"click\", function() {\r\n      const inputCityName = document.querySelector(\".searchInput\").value;\r\n      const input = formatText(inputCityName.toLowerCase());\r\n      const apiUrl = `https://api.teleport.org/api/urban_areas/slug:${input}/scores/`;\r\n\r\n      fetch(apiUrl)\r\n          .then(response => response.json())\r\n          .then(data => {\r\n              const cityInfoDiv = document.querySelector(\".cityInfo\");\r\n              const h2 = cityInfoDiv.querySelector(\"h2\");\r\n              const description = cityInfoDiv.querySelector(\".description\");\r\n              const cityScore = cityInfoDiv.querySelector(\".city-score\");\r\n              const categoriesDiv = cityInfoDiv.querySelector(\".categories\");\r\n\r\n              categoriesDiv.innerHTML = \"\";\r\n\r\n              data.categories.forEach(category => {\r\n                  const categoryDiv = document.createElement(\"div\");\r\n                  categoryDiv.classList.add(\"category\");\r\n                  categoryDiv.style.backgroundColor = category.color;\r\n                  categoryDiv.textContent = `${category.name}: ${category.score_out_of_10}`;\r\n                  categoriesDiv.appendChild(categoryDiv);\r\n              });\r\n\r\n              h2.textContent = input.toUpperCase();\r\n              description.innerHTML = data.summary;\r\n              cityScore.textContent = `City score: ${data.teleport_city_score.toFixed(2)}`;\r\n              \r\n          })\r\n          .catch(error => {\r\n              console.error(error);\r\n          });\r\n      });\r\n});\n\n//# sourceURL=webpack://progetto-javascript-advanced---chiara-bissolo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;