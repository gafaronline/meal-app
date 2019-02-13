'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('dotenv/config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _customValidator = require('./middlewares/validators/custom-validator');

var _customValidator2 = _interopRequireDefault(_customValidator);

var _customSanitizer = require('./middlewares/validators/custom-sanitizer');

var _customSanitizer2 = _interopRequireDefault(_customSanitizer);

var _transformer = require('./utils/transformer');

var _transformer2 = _interopRequireDefault(_transformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    port = process.env.PORT || '3100';

// logger
app.use((0, _morgan2.default)('dev'));

// configure validator
app.use((0, _expressValidator2.default)({ customValidators: _customValidator2.default, customSanitizers: _customSanitizer2.default }));

// 3rd party middleware
app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json());

// app.use('/api-docs', express.static(path.join(__dirname, '../server/public/api-docs')));

// use the defined routes
app.use('/', _routes2.default);

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(_transformer2.default.transformResponse(500, err));
});

app.listen(port || 3000, function () {
  console.log('Started on port ' + port);
});
// });

exports.default = app;