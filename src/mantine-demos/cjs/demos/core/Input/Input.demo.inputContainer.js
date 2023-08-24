'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`;
function Demo() {
  const [focused, setFocused] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(
    core.TextInput,
    {
      label: "TextInput with tooltip",
      description: "Tooltip will be relative to the input",
      placeholder: "Focus me to see tooltip",
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      inputContainer: (children) => /* @__PURE__ */ React__default.createElement(core.Tooltip, { label: "Additional information", position: "top-start", opened: focused }, children)
    }
  );
}
const inputContainer = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

exports.inputContainer = inputContainer;
//# sourceMappingURL=Input.demo.inputContainer.js.map
