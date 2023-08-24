'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`;
function Demo() {
  const xIcon = /* @__PURE__ */ React__default.createElement(iconsReact.IconX, { style: { width: core.rem(20), height: core.rem(20) } });
  const checkIcon = /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, { style: { width: core.rem(20), height: core.rem(20) } });
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Notification, { icon: xIcon, color: "red", title: "Bummer!" }, "Something went wrong"), /* @__PURE__ */ React__default.createElement(core.Notification, { icon: checkIcon, color: "teal", title: "All good!", mt: "md" }, "Everything is fine"));
}
const icon = {
  type: "code",
  component: Demo,
  dimmed: true,
  maxWidth: 400,
  centered: true,
  code
};

exports.icon = icon;
//# sourceMappingURL=Notification.demo.icon.js.map
