"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _store = _interopRequireDefault(require("./store"));
var _medusaConfig = require("../../medusa-config");
var _default = function _default(_rootDirectory, _pluginOptions) {
  var router = (0, _express.Router)();
  var storeCorsOptions = {
    origin: _medusaConfig.projectConfig.store_cors.split(","),
    credentials: true
  };
  // router.options("*", cors(storeCorsOptions));
  (0, _store["default"])(router);
  return router;
};
exports["default"] = _default;