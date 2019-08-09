"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Offer = require('./models/Offer'); var _Offer2 = _interopRequireDefault(_Offer);
var _lodash = require('lodash'); var _lodash2 = _interopRequireDefault(_lodash);

exports. default = {
  Query: {
    getOffers: () => _Offer2.default.find(),
    findOffers: (_, args) => {
      const query = {
        code: args.code,
        description: args.description,
        courses: args.course,
        date: args.date,
        jobType: args.jobType
      };

      return _Offer2.default.find(_lodash2.default.pickBy(query, _lodash2.default.identity));
    }
  }
};
