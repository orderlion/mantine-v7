'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stack, { align: "center" }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", fw: 500, mb: 3 }, "Disabled control"), /* @__PURE__ */ React__default.createElement(
    core.SegmentedControl,
    {
      disabled: true,
      data: [
        {
          value: "preview",
          label: "Preview"
        },
        {
          value: "code",
          label: "Code"
        },
        {
          value: "export",
          label: "Export"
        }
      ]
    }
  )), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", fw: 500, mb: 3 }, "Disabled option"), /* @__PURE__ */ React__default.createElement(
    core.SegmentedControl,
    {
      data: [
        {
          value: "preview",
          label: "Preview",
          disabled: true
        },
        {
          value: "code",
          label: "Code"
        },
        {
          value: "export",
          label: "Export"
        }
      ]
    }
  )));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

exports.disabled = disabled;
//# sourceMappingURL=SegmentedControl.demo.disabled.js.map
