'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useRandomClassName() {
  const id = React.useId().replace(/:/g, "");
  return `__m__-${id}`;
}

exports.useRandomClassName = useRandomClassName;
//# sourceMappingURL=use-random-classname.js.map
