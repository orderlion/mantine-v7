'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');

function transformSelectData(data) {
  return data.map((item) => {
    if (typeof item === "string") {
      return { label: hooks.upperFirst(item), value: item };
    }
    return { value: item.value, label: hooks.upperFirst(item.label) };
  });
}

exports.transformSelectData = transformSelectData;
//# sourceMappingURL=transform-select-data.js.map
