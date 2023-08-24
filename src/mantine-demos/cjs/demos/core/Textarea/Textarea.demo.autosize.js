'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.Textarea,
    {
      placeholder: "Autosize with no rows limit",
      label: "Autosize with no rows limit",
      autosize: true,
      minRows: 2
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.Textarea,
    {
      label: "Autosize with 4 rows max",
      placeholder: "Autosize with 4 rows max",
      autosize: true,
      minRows: 2,
      maxRows: 4,
      mt: "md"
    }
  ));
}
const autosize = {
  type: "code",
  code,
  component: Demo,
  maxWidth: 340,
  centered: true
};

exports.autosize = autosize;
//# sourceMappingURL=Textarea.demo.autosize.js.map
