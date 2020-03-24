"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("./Label.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(props) {
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: _Label["default"].Label
  }, props.value);
};

var _default = Label;
exports["default"] = _default;