"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const offerSchema = new _mongoose2.default.Schema({
  code: String,
  description: String,
  jobType: String,
  date: String,
  courses: [String]
});

exports. default = _mongoose2.default.model("Offer", offerSchema);
