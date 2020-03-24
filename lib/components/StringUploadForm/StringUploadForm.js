"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../UI/Button/Button"));

var _Input = _interopRequireDefault(require("../UI/Input/Input"));

var _Label = _interopRequireDefault(require("../UI/Label/Label"));

var _StringUploadForm = _interopRequireDefault(require("./StringUploadForm.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StringUploadForm = function StringUploadForm(props) {
  var onBaseValueChange = props.onBaseValueChange,
      validateStrings = props.validateStrings,
      onTranslatedValueChange = props.onTranslatedValueChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _StringUploadForm["default"].StringUploadForm
  }, /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    value: "Enter Translated Value"
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    className: _StringUploadForm["default"].TranslatedValue,
    id: "translatedValue",
    type: "text",
    onChange: onTranslatedValueChange,
    required: true
  }), /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    value: "Enter Base Value"
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    className: _StringUploadForm["default"].BaseValue,
    id: "baseValue",
    type: "text",
    onChange: onBaseValueChange,
    required: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _StringUploadForm["default"].ValidateButton
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: validateStrings
  }, " Validate ")));
};

var _default = StringUploadForm;
exports["default"] = _default;