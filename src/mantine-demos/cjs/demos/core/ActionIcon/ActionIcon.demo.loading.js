'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.ActionIcon, { loading: true, "aria-label": "Filled loading" }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, { variant: "light", loading: true, "aria-label": "Light loading" }), /* @__PURE__ */ React__default.createElement(core.ActionIcon, { variant: "outline", loading: true, "aria-label": "Outline loading" }));
}
const loading = {
  type: "code",
  component: Demo,
  code
};

exports.loading = loading;
//# sourceMappingURL=ActionIcon.demo.loading.js.map
