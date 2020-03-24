"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MonacoEditor = _interopRequireDefault(require("../../container/MonacoEditor/MonacoEditor2"));

var _TErrors = _interopRequireDefault(require("./TErrors.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TErrors = function TErrors(props) {
  var baseValue = props.baseValue,
      translatedValue = props.translatedValue,
      errors = props.errors;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _TErrors["default"].TErrorEditor
  }, /*#__PURE__*/_react["default"].createElement(_MonacoEditor["default"], {
    value: translatedValue,
    errors: errors
  }), /*#__PURE__*/_react["default"].createElement(_MonacoEditor["default"], {
    value: baseValue,
    errors: errors,
    readOnly: true
  }));
};

var _default = TErrors;
exports["default"] = _default;