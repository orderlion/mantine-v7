'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
`;
const ValueComponent = ({ value }) => {
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return /* @__PURE__ */ React__default.createElement(core.Pill.Group, null, value.map((file, index) => /* @__PURE__ */ React__default.createElement(core.Pill, { key: index }, file.name)));
  }
  return /* @__PURE__ */ React__default.createElement(core.Pill, null, value.name);
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.FileInput,
    {
      label: "Upload files",
      placeholder: "Upload files",
      multiple: true,
      valueComponent: ValueComponent
    }
  );
}
const valueComponent = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

exports.valueComponent = valueComponent;
//# sourceMappingURL=FileInput.demo.valueComponent.js.map
