"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var monaco = _interopRequireWildcard(require("@peterschussheim/monaco-editor"));

var _react = _interopRequireWildcard(require("react"));

var _MonacoEditor = _interopRequireDefault(require("./MonacoEditor.css"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var Editor = /*#__PURE__*/function (_Component) {
  _inherits(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    var _this;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      editor: null
    });

    _defineProperty(_assertThisInitialized(_this), "containerDidMount", function (ref) {
      _this.ref = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "didMount", function (editor) {
      var didMount = _this.props.didMount;
      didMount(editor);
    });

    _defineProperty(_assertThisInitialized(_this), "didLoad", function (e) {
      var didLoad = _this.props.didLoad;

      _this.handleMount();

      didLoad();

      if (e) {
        e.target.removeEventListener("load", _this.didLoad);
      }
    });

    return _this;
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.didLoad();
    }
  }, {
    key: "handleMount",
    value: function handleMount() {
      var _this$props = this.props,
          value = _this$props.value,
          readOnly = _this$props.readOnly;
      var editor = monaco.editor.create(this.ref, {
        value: value,
        language: "plaintext",
        theme: "vs",
        lineNumbers: "off",
        fontSize: 14,
        contextmenu: false,
        minimap: {
          enabled: false
        },
        glyphMargin: false,
        folding: false,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
        lineHeight: "30px",
        readOnly: readOnly
      });
      this.didMount(editor);
      var testErrors = [{
        line: 1,
        start: 2,
        end: 5,
        message: "You are wrong"
      }, {
        line: 1,
        start: 7,
        end: 10,
        message: "You are wrong"
      }];
      var errors = testErrors.map(function (err) {
        return {
          startLineNumber: err.line,
          endLineNumber: err.line,
          startColumn: err.start,
          endColumn: err.end,
          message: "You are wrong",
          severity: 3,
          source: "Random"
        };
      });
      monaco.editor.setModelMarkers(editor.getModel(), "test", errors);
      return editor;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          readOnly = _this$props2.readOnly;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.containerDidMount,
        className: (0, _classnames["default"])(_MonacoEditor["default"].MonacoEditor, readOnly ? _MonacoEditor["default"].ReadOnly : "")
      });
    }
  }]);

  return Editor;
}(_react.Component);

_defineProperty(Editor, "defaultProps", {
  height: "100%",
  language: "javascript",
  theme: "vs-dark",
  didLoad: function didLoad() {},
  didMount: function didMount() {}
});

var _default = Editor;
exports["default"] = _default;