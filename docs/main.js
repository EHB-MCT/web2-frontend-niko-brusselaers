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

eval("const webpage = window.location.href;\nconsole.log(webpage);\nconst createAccount = document.getElementById(\"createAccountForm\");\ncreateAccount.addEventListener('click', (event) => {\n    event.preventDefault();\n\n    const username = document.getElementById('username').value.toString();\n    const password = document.getElementById('password').value.toString();\n    const passwordConfirm = document.getElementById('passwordConfirm').value.toString();\n    const email = document.getElementById('email').value.toString();\n    const firstname = document.getElementById('firstname').value.toString();\n    const lastname = document.getElementById('lastname').value.toString();\n\n    if (password == passwordConfirm) {\n        fetch(`https://web2-backend-niko-brusselaers.herokuapp.com/create-account`, {\n                method: \"POST\",\n                headers: {\n                    'Content-Type': 'application/json',\n                },\n                body: JSON.stringify({\n                    \"username\": username,\n                    \"password\": password,\n                    \"email\": email,\n                    \"firstname\": firstname,\n                    \"lastname\": lastname\n                })\n            })\n            .then((response) => response.json())\n            .then(data => {\n                console.log(data);\n            }).catch((error) => {\n                console.error(error);\n            })\n    } else {\n        console.log({\n            error: \"password doesnt match\"\n        });\n    }\n})\n\nconst login = document.getElementById('loginForm')\n\nlogin.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    const username = document.getElementById('username').value;\n    const password = document.getElementById('password').value;\n\n    fetch(`https://web2-backend-niko-brusselaers.herokuapp.com/login`, {\n            method: \"POST\",\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                \"username\": username,\n                \"password\": password\n            })\n        })\n        .then(response => response.json())\n        .then(response => {\n            console.log(response);\n            localStorage.setItem('id', response.id[0]);\n            console.log(localStorage.getItem(id).value);\n        }).catch((error) => {\n            console.log(error);\n        })\n})\n\n//# sourceURL=webpack:///./docs/index.js?");

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