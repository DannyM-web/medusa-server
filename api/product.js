"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _default = function _default() {
  var router = (0, _express.Router)();
  router.get("/store/products", function (req, res) {
    var productService = req.scope.resolve("productService");
    productService.list().then(function (products) {
      res.json(products);
    });
  });
  return router;
};
exports["default"] = _default;