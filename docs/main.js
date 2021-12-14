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

/***/ "./docs/index.js":
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/***/ (() => {

eval("const createAccount = document.getElementById(\"createAccount\");\r\ncreateAccount.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n\r\n    const username = document.getElementById('username').value.toString();\r\n    const password = document.getElementById('password').value.toString();\r\n    const passwordConfirm = document.getElementById('passwordConfirm').value.toString();\r\n    const email = document.getElementById('email').value.toString();\r\n    const firstname = document.getElementById('firstname').value.toString();\r\n    const lastname = document.getElementById('lastname').value.toString();\r\n\r\n    if (password == passwordConfirm) {\r\n        fetch(`https://web2-backend-niko-brusselaers.herokuapp.com/create-account`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify({\r\n                    \"username\": username,\r\n                    \"password\": password,\r\n                    \"email\": email,\r\n                    \"firstname\": firstname,\r\n                    \"lastname\": lastname\r\n                })\r\n            })\r\n            .then((response) => response.json())\r\n            .then(data => {\r\n                console.log(data);\r\n            }).catch((error) => {\r\n                console.error(error);\r\n            })\r\n    } else {\r\n        console.log({\r\n            error: \"password doesnt match\"\r\n        });\r\n    }\r\n})\r\n\r\nconst login = document.getElementById('login')\r\n\r\nlogin.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    const username = document.getElementById('username').value;\r\n    const password = document.getElementById('password').value;\r\n\r\n    fetch(`https://web2-backend-niko-brusselaers.herokuapp.com/login`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                \"username\": username,\r\n                \"password\": password\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(response => {\r\n            console.log(response);\r\n            localStorage.setItem('id', response.id[0]);\r\n            console.log(localStorage.getItem(id).value);\r\n        }).catch((error) => {\r\n            console.log(error);\r\n        })\r\n})\n\n//# sourceURL=webpack:///./docs/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./docs/index.js"]();
/******/ 	
/******/ })()
;