'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var factory = require('./factory.js');

function polymorphicFactory(ui) {
  const Component = React.forwardRef(ui);
  Component.extend = factory.identity;
  return Component;
}

exports.polymorphicFactory = polymorphicFactory;
//# sourceMappingURL=polymorphic-factory.js.map
