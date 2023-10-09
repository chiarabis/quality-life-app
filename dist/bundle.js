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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n    const cityInfo = document.querySelector(\".city-info\");\r\n    const h2 = cityInfo.querySelector(\"h2\");\r\n    const categoriesDiv = cityInfo.querySelector(\".categories\");\r\n    const description = cityInfo.querySelector(\".description\");\r\n    const cityScore = cityInfo.querySelector(\".city-score\");\r\n    categoriesDiv.innerHTML = \"\";\r\n\r\n    const apiUrl = `https://api.teleport.org/api/urban_areas/`;\r\n\r\n    async function search(cityInput) {\r\n        try {\r\n            const response = await fetch(apiUrl);\r\n\r\n            if (!response.ok) {\r\n                throw new Error(\"Error in the API request to search the cities\");\r\n            }\r\n\r\n            const data = await response.json();\r\n            const cities = data._links[\"ua:item\"];\r\n            //const foundCity = cities.find((city) => city.name.toLowerCase() === cityInput);\r\n            \r\n            let foundCity = null;\r\n\r\n            for (let i = 0; i < cities.length; i++) {\r\n                if (cities[i].name.toLowerCase() === cityInput) {\r\n                    foundCity = cities[i];\r\n                    break;\r\n                }\r\n            }\r\n\r\n            if (foundCity) {\r\n                return foundCity;\r\n            }\r\n            return alert(\"City not found or written incorrectly!\");\r\n\r\n        } catch (error) {\r\n            console.log(error);\r\n        }\r\n    }\r\n\r\n    const searchButton = document.getElementById(\"searchButton\");\r\n\r\n    searchButton.addEventListener(\"click\", async function () {\r\n\r\n        categoriesDiv.innerHTML = \"\";\r\n        description.innerHTML = \"\";\r\n        cityScore.textContent = \"\";\r\n        \r\n        const cityInput = document.getElementById(\"searchInput\").value.toLowerCase();\r\n        let city = \"\";\r\n\r\n        try {\r\n            const result = await search(cityInput);\r\n            city = result;\r\n        } catch (error) {\r\n            console.error(error);\r\n        }\r\n\r\n        fetch(`${city.href}scores/`)\r\n        .then((response) => {\r\n            if (!response.ok) {\r\n                throw new Error(\"Error in the API request to search the scores\");\r\n            }\r\n            return response.json();\r\n        })\r\n        .then((dataCity) => {\r\n            dataCity.categories.forEach((category) => {\r\n                const categoryDiv = document.createElement(\"div\");\r\n                categoryDiv.classList.add(\"category\");\r\n                categoryDiv.style.backgroundColor = category.color;\r\n                categoryDiv.textContent = `${category.name}: ${category.score_out_of_10}`;\r\n                categoriesDiv.appendChild(categoryDiv);\r\n            });\r\n\r\n            h2.textContent = city.name;\r\n            description.innerHTML = dataCity.summary;\r\n            cityScore.textContent = `City score: ${dataCity.teleport_city_score.toFixed(2)}`;\r\n        });\r\n    });\r\n});\n\n//# sourceURL=webpack://progetto-javascript-advanced---chiara-bissolo/./src/index.js?");

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