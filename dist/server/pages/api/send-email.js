"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/send-email";
exports.ids = ["pages/api/send-email"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send-email.js":
/*!*********************************!*\
  !*** ./pages/api/send-email.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"M\\xe9todo n\\xe3o permitido\"\n        });\n    }\n    const { name , email , subject , message  } = req.body;\n    console.log(\"REQ BODY\", JSON.stringify(req.body));\n    if (!name || !email || !subject || !message) {\n        return res.status(400).json({\n            error: \"Todos os campos s\\xe3o obrigat\\xf3rios.\"\n        });\n    }\n    try {\n        // Configuração do transporte de e-mail\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Configuração do e-mail\n        const mailOptions = {\n            from: email,\n            to: \"kontempler@gmail.com\",\n            subject: subject,\n            text: `Nome: ${name}\\nE-mail: ${email}\\nMensagem: ${message}`\n        };\n        await transporter.sendMail(mailOptions);\n        return res.status(200).json({\n            success: \"E-mail enviado com sucesso!\"\n        });\n    } catch (error) {\n        console.error(error);\n        return res.status(500).json({\n            error: error.message + \"Erro ao enviar e-mail.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC1lbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXVCO0lBQzlELENBQUM7SUFFRCxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBRSxHQUFHVCxJQUFJVSxJQUFJO0lBRWxEQyxRQUFRQyxHQUFHLENBQUMsWUFBWUMsS0FBS0MsU0FBUyxDQUFDZCxJQUFJVSxJQUFJO0lBQy9DLElBQUksQ0FBQ0osUUFBUSxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBQ0MsU0FBUztRQUMzQyxPQUFPUixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0M7SUFDM0UsQ0FBQztJQUVELElBQUk7UUFDRix1Q0FBdUM7UUFDdkMsTUFBTVUsY0FBY2pCLGlFQUEwQixDQUFDO1lBQzdDbUIsU0FBUztZQUNUQyxNQUFNO2dCQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7WUFDOUI7UUFDRjtRQUVBLHlCQUF5QjtRQUN6QixNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNbkI7WUFDTm9CLElBQUk7WUFDSm5CLFNBQVNBO1lBQ1RvQixNQUFNLENBQUMsTUFBTSxFQUFFdEIsS0FBSyxVQUFVLEVBQUVDLE1BQU0sWUFBWSxFQUFFRSxRQUFRLENBQUM7UUFDL0Q7UUFFQSxNQUFNTSxZQUFZYyxRQUFRLENBQUNKO1FBRTNCLE9BQU94QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUUwQixTQUFTO1FBQThCO0lBQ3ZFLEVBQUUsT0FBT3pCLE9BQU87UUFDZE0sUUFBUU4sS0FBSyxDQUFDQTtRQUNkLE9BQU9KLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBT0EsTUFBTUksT0FBTyxHQUFHO1FBQXlCO0lBQ2hGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZtYXJpYW5uYWxvdXJlbmNvLy4vcGFnZXMvYXBpL3NlbmQtZW1haWwuanM/NmE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG7Do28gcGVybWl0aWRvJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKCdSRVEgQk9EWScsIEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5KSk7XG4gIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXN1YmplY3QgfHwgIW1lc3NhZ2UpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RvZG9zIG9zIGNhbXBvcyBzw6NvIG9icmlnYXTDs3Jpb3MuJyB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gQ29uZmlndXJhw6fDo28gZG8gdHJhbnNwb3J0ZSBkZSBlLW1haWxcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQ29uZmlndXJhw6fDo28gZG8gZS1tYWlsXG4gICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiBlbWFpbCxcbiAgICAgIHRvOiAna29udGVtcGxlckBnbWFpbC5jb20nLCAvLyBEZXN0aW5hdMOhcmlvXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgdGV4dDogYE5vbWU6ICR7bmFtZX1cXG5FLW1haWw6ICR7ZW1haWx9XFxuTWVuc2FnZW06ICR7bWVzc2FnZX1gLFxuICAgIH07XG5cbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiAnRS1tYWlsIGVudmlhZG8gY29tIHN1Y2Vzc28hJyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSArICdFcnJvIGFvIGVudmlhciBlLW1haWwuJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1MiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInRleHQiLCJzZW5kTWFpbCIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/send-email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send-email.js"));
module.exports = __webpack_exports__;

})();