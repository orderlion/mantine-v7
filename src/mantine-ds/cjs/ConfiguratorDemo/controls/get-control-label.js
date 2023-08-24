'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');

function getControlLabel(label) {
  return hooks.upperFirst(label.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
}

exports.getControlLabel = getControlLabel;
//# sourceMappingURL=get-control-label.js.map
