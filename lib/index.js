"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _App = _interopRequireDefault(require("./App"));

var _registerServiceWorker = _interopRequireDefault(require("./registerServiceWorker"));

var _TStringsValidator = _interopRequireDefault(require("./store/reducers/TStringsValidator"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_TStringsValidator["default"]);

var app = /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_App["default"], null));

_reactDom["default"].render(app, document.getElementById("root"));

(0, _registerServiceWorker["default"])();