'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../database/models');

var _models2 = _interopRequireDefault(_models);

var _createToken = require('../utils/create-token');

var _createToken2 = _interopRequireDefault(_createToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secretKey = process.env.JWT_SECRET;

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */

var userProcessor = function () {
  function userProcessor() {
    _classCallCheck(this, userProcessor);
  }

  _createClass(userProcessor, null, [{
    key: 'createUser',

    /**
     * @description - Creates a new user in the app and assigns a token to them
     * @param{Object} user - api request
     * @param{Object} res - route response
     * @return{json} the registered user's detail
     */
    value: async function createUser(user) {
      try {
        var createdUser = await _models2.default.User.create(user);
        // create the token after all the inputs are certified ok

        var id = createdUser.id,
            firstName = createdUser.firstName,
            lastName = createdUser.lastName,
            email = createdUser.email,
            authToken = _createToken2.default.token({
          id: id, firstName: firstName, lastName: lastName, email: email
        }, secretKey),
            resp = {
          message: 'User created successfully',
          user: {
            id: id, firstName: firstName, lastName: lastName, email: email
          },
          token: authToken
        };

        return resp;
      } catch (e) {
        // create and throw 500 error
        var err = { error: 'and error occured or user already exists' };
        throw err;
      }
    }

    /**
     * @description - Signs a user in by creating a session token
     * @param{Object} login - api request
     * @param{Object} res - route response
     * @return{json} the user's login status
     */

  }, {
    key: 'loginUser',
    value: async function loginUser(login) {
      try {
        var user = await _models2.default.User.findOne({ where: { email: login.email } });
        if (!user) {
          throw new Error('wrong login credentials!');
        } else if (!user.validPassword(login.validPassword)) {
          throw new Error('invalid password');
        } else {
          var authUser = user,
              id = authUser.id,
              firstName = authUser.firstName,
              lastName = authUser.lastName,
              email = authUser.email,
              authToken = _createToken2.default.token({
            id: id, firstName: firstName, lastName: lastName, email: email
          }, secretKey),
              resp = {
            message: 'User loggedin successfully',
            user: {
              id: id, firstName: firstName, lastName: lastName, email: email
            },
            token: authToken
          };

          return resp;
        }
      } catch (e) {
        // create and throw 500 error
        var err = { error: 'and error occured while trying to log the user in' };
        throw err;
      }
    }
  }]);

  return userProcessor;
}();

exports.default = userProcessor;