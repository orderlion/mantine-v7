'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Autocomplete,
    {
      label: "Your favorite library",
      placeholder: "Pick value or enter anything",
      data: [
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "vue", label: "Vue", disabled: true },
        { value: "svelte", label: "Svelte", disabled: true }
      ]
    }
  );
}
const disabledOptions = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.disabledOptions = disabledOptions;
//# sourceMappingURL=Autocomplete.demo.disabledOptions.js.map
