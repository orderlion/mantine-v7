'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "With prefix",
      placeholder: "Dollars",
      prefix: "$",
      defaultValue: 100,
      mb: "md"
    }
  ), /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "With suffix",
      placeholder: "Percents",
      suffix: "%",
      defaultValue: 100,
      mt: "md"
    }
  ));
}
const prefixSuffix = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

exports.prefixSuffix = prefixSuffix;
//# sourceMappingURL=NumberInput.demo.prefixSuffix.js.map
