'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { hiddenFrom: "sm", color: "orange" }, "Hidden from sm"), /* @__PURE__ */ React__default.createElement(core.Button, { visibleFrom: "sm", color: "cyan" }, "Visible from sm"), /* @__PURE__ */ React__default.createElement(core.Button, { visibleFrom: "md", color: "pink" }, "Visible from md"));
}
const hiddenVisible = {
  type: "code",
  component: Demo,
  code
};

exports.hiddenVisible = hiddenVisible;
//# sourceMappingURL=Styles.demo.hiddenVisible.js.map
