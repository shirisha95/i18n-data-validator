"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _StringUploadForm = _interopRequireDefault(require("../../components/StringUploadForm/StringUploadForm"));

var _TErrors = _interopRequireDefault(require("../../components/TErrors/TErrors"));

var _Header = _interopRequireDefault(require("../../components/UI/Header/Header"));

var _TStringsValidator = require("../../store/actions/TStringsValidator");

var _TStringsValidator2 = _interopRequireDefault(require("./TStringsValidator.css"));

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

var TStringsValidator = /*#__PURE__*/function (_PureComponent) {
  _inherits(TStringsValidator, _PureComponent);

  var _super = _createSuper(TStringsValidator);

  function TStringsValidator() {
    var _this;

    _classCallCheck(this, TStringsValidator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      translatedValue: null,
      baseValue: null
    });

    _defineProperty(_assertThisInitialized(_this), "onTranslatedValueChange", function (translatedValue) {
      _this.setState({
        translatedValue: translatedValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBaseValueChange", function (baseValue) {
      _this.setState({
        baseValue: baseValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateStrings", function () {
      var _this$state = _this.state,
          translatedValue = _this$state.translatedValue,
          baseValue = _this$state.baseValue;

      _this.props.validateStrings(translatedValue, baseValue);
    });

    return _this;
  }

  _createClass(TStringsValidator, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          translatedValue = _this$state2.translatedValue,
          baseValue = _this$state2.baseValue;
      var errors = this.props.errors;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        title: "Translations Validator"
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_StringUploadForm["default"], {
        onBaseValueChange: this.onBaseValueChange,
        onTranslatedValueChange: this.onTranslatedValueChange,
        validateStrings: this.validateStrings
      }), /*#__PURE__*/_react["default"].createElement("br", null), errors && /*#__PURE__*/_react["default"].createElement(_TErrors["default"], {
        translatedValue: translatedValue,
        baseValue: baseValue,
        errors: errors
      }));
    }
  }]);

  return TStringsValidator;
}(_react.PureComponent);

var getErrors = function getErrors(state) {
  return state.errors;
};

var errorsSelector = (0, _reselect.createSelector)(getErrors, function (errors) {
  return errors;
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: errorsSelector(state)
  };
};

var mapDispatchToProps = {
  validateStrings: _TStringsValidator.validateStrings
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TStringsValidator);

exports["default"] = _default;