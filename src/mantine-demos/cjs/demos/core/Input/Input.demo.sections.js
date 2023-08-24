'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState("Clear me");
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Input, { placeholder: "Your email", leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconAt, { size: 16 }) }), /* @__PURE__ */ React__default.createElement(
    core.Input,
    {
      placeholder: "Clearable input",
      value,
      onChange: (event) => setValue(event.currentTarget.value),
      rightSectionPointerEvents: "all",
      mt: "md",
      rightSection: /* @__PURE__ */ React__default.createElement(
        core.CloseButton,
        {
          "aria-label": "Clear input",
          onClick: () => setValue(""),
          style: { display: value ? void 0 : "none" }
        }
      )
    }
  ));
}
const sections = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

exports.sections = sections;
//# sourceMappingURL=Input.demo.sections.js.map
