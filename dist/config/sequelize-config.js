'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentDB = function currentDB(env) {
  if (env === 'meal-app') {
    _database2.default.currentSQL.database = 'meal-app-test';
    return _database2.default;
  }
  return _database2.default;
};
exports.default = currentDB;