"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _fileCompare = _interopRequireDefault(require("../../../icons/file-compare.png"));

var _googleTranslate = _interopRequireDefault(require("../../../icons/google-translate.png"));

var _Header = _interopRequireDefault(require("./Header.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: _Header["default"].Header
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _Header["default"].HeaderText
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: _Header["default"].NavListItems
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: _Header["default"].NavList
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: _Header["default"].NavItem
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: _Header["default"].NavLink
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: _Header["default"].HeaderIcon,
    src: _fileCompare["default"]
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _Header["default"].NavLinkText
  }, "Documents"))), /*#__PURE__*/_react["default"].createElement("li", {
    className: _Header["default"].NavItem
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/string-validator",
    className: _Header["default"].NavLink
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: _Header["default"].HeaderIcon,
    src: _googleTranslate["default"]
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _Header["default"].NavLinkText
  }, " Text"))))));
};

var _default = _react["default"].memo(Header);

exports["default"] = _default;