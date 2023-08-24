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
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
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
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Express", "Django"] }
      ]
    }
  );
}
const groups = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

exports.groups = groups;
//# sourceMappingURL=Autocomplete.demo.groups.js.map
