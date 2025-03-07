'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function identity(value) {
  return value;
}
function factory(ui) {
  const Component = React.forwardRef(ui);
  Component.extend = identity;
  return Component;
}

exports.factory = factory;
exports.identity = identity;
//# sourceMappingURL=factory.js.map
