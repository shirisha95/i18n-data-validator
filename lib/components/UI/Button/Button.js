"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement("button", {
    disabled: props.disabled,
    className: _Button["default"].Button,
    onClick: props.onClick
  }, props.children);
};

var _default = Button;
exports["default"] = _default;