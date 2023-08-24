'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _CustomIcon = require('./_CustomIcon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
`;
const iconCode = `
import { rem } from '@mantine/core';

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Button, { leftSection: /* @__PURE__ */ React__default.createElement(_CustomIcon.AddressBookIcon, { size: 18 }) }, "Demo");
}
const customIcon = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "AddressBookIcon.tsx", code: iconCode, language: "tsx" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

exports.customIcon = customIcon;
//# sourceMappingURL=Guides.demo.customIcon.js.map
