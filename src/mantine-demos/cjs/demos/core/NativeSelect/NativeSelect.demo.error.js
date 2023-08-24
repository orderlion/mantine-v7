'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.NativeSelect, { error: true, label: "Boolean error", data: ["React", "Angular"] }), /* @__PURE__ */ React__default.createElement(
    core.NativeSelect,
    {
      error: "Error message",
      label: "React node error",
      data: ["React", "Angular"],
      mt: "md"
    }
  ));
}
const error = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.error = error;
//# sourceMappingURL=NativeSelect.demo.error.js.map
