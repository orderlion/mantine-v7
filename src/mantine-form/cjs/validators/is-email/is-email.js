'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matches = require('../matches/matches.js');

function isEmail(error) {
  return matches.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, error);
}

exports.isEmail = isEmail;
//# sourceMappingURL=is-email.js.map
