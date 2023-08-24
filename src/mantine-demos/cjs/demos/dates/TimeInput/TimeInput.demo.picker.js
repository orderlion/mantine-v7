'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`;
function Demo() {
  const ref = React.useRef(null);
  const pickerControl = /* @__PURE__ */ React__default.createElement(core.ActionIcon, { variant: "subtle", color: "gray", onClick: () => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.showPicker();
  } }, /* @__PURE__ */ React__default.createElement(iconsReact.IconClock, { style: { width: core.rem(16), height: core.rem(16) }, stroke: 1.5 }));
  return /* @__PURE__ */ React__default.createElement(dates.TimeInput, { label: "Click icon to show browser picker", ref, rightSection: pickerControl });
}
const picker = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

exports.picker = picker;
//# sourceMappingURL=TimeInput.demo.picker.js.map
