'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.MultiSelect,
    {
      label: "Your favorite libraries",
      placeholder: "Pick value",
      data: ["React", "Angular", "Vue", "Svelte"],
      hidePickedOptions: true
    }
  );
}
const hidePickedOptions = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.hidePickedOptions = hidePickedOptions;
//# sourceMappingURL=MultiSelect.demo.hidePickedOptions.js.map
