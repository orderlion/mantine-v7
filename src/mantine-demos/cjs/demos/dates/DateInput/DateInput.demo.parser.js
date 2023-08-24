'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { DateInput, DateInputProps } from '@mantine/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
`;
const dateParser = (input) => {
  if (input === "WW2") {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    dates.DateInput,
    {
      dateParser,
      valueFormat: "DD/MM/YYYY",
      label: "Type WW2",
      placeholder: "Type WW2"
    }
  );
}
const parser = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.parser = parser;
//# sourceMappingURL=DateInput.demo.parser.js.map
