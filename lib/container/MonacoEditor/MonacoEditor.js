"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@monaco-editor/react");

var _react2 = _interopRequireWildcard(require("react"));

var _MonacoEditor = _interopRequireDefault(require("./MonacoEditor.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BAD_WORD = "eval";
var WARNING_MESSAGE = " <- hey man, what's this?";

var MonacoEditor = /*#__PURE__*/function (_Component) {
  _inherits(MonacoEditor, _Component);

  var _super = _createSuper(MonacoEditor);

  function MonacoEditor(props) {
    var _this;

    _classCallCheck(this, MonacoEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleEditorDidMount", function (_, editor) {
      _this.editorRef.current = editor;
      var errors = [{
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: 1,
        endColumn: 4,
        message: "Warning!",
        severity: 2
      }];
      var model = editor.getModel(); //monaco.editor.setModelMarkers(model, "jshint", errors);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditorChange", function (ev, value) {
      if (ev.changes[0].text === ev.eol) {
        return _this.props.value;
      }

      return value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE) ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE) : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD) ? value.replace(WARNING_MESSAGE, "") : value;
    });

    _this.editorRef = _react2["default"].createRef();
    return _this;
  }

  _createClass(MonacoEditor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          readOnly = _this$props.readOnly;
      return /*#__PURE__*/_react2["default"].createElement("div", {
        className: _MonacoEditor["default"].MonacoEditor
      }, /*#__PURE__*/_react2["default"].createElement(_react.ControlledEditor, {
        height: "40px",
        value: value,
        onChange: this.handleEditorChange,
        editorDidMount: this.handleEditorDidMount,
        editorWillMount: this.editorWillMount,
        language: "plaintext",
        theme: "light",
        options: _defineProperty({
          readOnly: readOnly,
          lineNumbers: "off",
          lineHeight: "30px",
          contextmenu: false,
          minimap: {
            enabled: false
          },
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0
        }, "lineHeight", "40px")
      }));
    }
  }]);

  return MonacoEditor;
}(_react2.Component);

var _default = MonacoEditor;
exports["default"] = _default;