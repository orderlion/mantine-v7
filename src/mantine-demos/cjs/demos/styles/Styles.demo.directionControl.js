'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`;
function Demo() {
  const { toggleDirection, dir } = core.useDirection();
  return /* @__PURE__ */ React__default.createElement(core.ActionIcon, { onClick: () => toggleDirection(), variant: "default", radius: "md", size: "lg" }, dir === "rtl" ? /* @__PURE__ */ React__default.createElement(iconsReact.IconTextDirectionLtr, { stroke: 1.5 }) : /* @__PURE__ */ React__default.createElement(iconsReact.IconTextDirectionRtl, { stroke: 1.5 }));
}
const directionControl = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

exports.directionControl = directionControl;
//# sourceMappingURL=Styles.demo.directionControl.js.map
