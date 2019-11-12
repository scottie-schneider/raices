"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _products = require("./products");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  margin: 20px;\n  .btn {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px 16px;\n    border-radius: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    background-color: purple;\n    color: white;\n    border: none;\n    margin: 4px;\n  }\n  \n  .btn:hover {\n    opacity: 0.8;\n    font-weight: normal;\n  }\n  \n  .btn:disabled {\n    opacity: 0.5;\n    cursor: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Styled = _styledComponents["default"].div(_templateObject());

var ProductList =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductList, _Component);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductList).apply(this, arguments));
  }

  _createClass(ProductList, [{
    key: "share",
    value: function share() {
      window.alert('The product has been shared!');
    }
  }, {
    key: "view",
    value: function view() {
      window.alert('The product has been viewed!');
    }
  }, {
    key: "getProduct",
    value: function getProduct(product, index) {
      return _react["default"].createElement("div", {
        key: index
      }, _react["default"].createElement("h3", null, _react["default"].createElement("a", {
        title: product.name + ' details',
        href: "/"
      }, product.name)), _react["default"].createElement("p", null, "Description: ", product.description, " "), _react["default"].createElement("button", {
        className: "btn",
        onClick: this.share
      }, "Share"), _react["default"].createElement("button", {
        className: "btn",
        onClick: this.view
      }, "View"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react["default"].createElement(Styled, null, _react["default"].createElement("h2", null, "Products"), _react["default"].createElement("br", null), _react["default"].createElement("div", null, _products.products.map(function (product, index) {
        return _this.getProduct(product, index);
      })));
    }
  }]);

  return ProductList;
}(_react.Component);

exports["default"] = ProductList;

//# sourceMappingURL=index.js.map