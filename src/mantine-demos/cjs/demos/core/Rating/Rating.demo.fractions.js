'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stack, null, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement("div", null, "Fractions: 2"), /* @__PURE__ */ React__default.createElement(core.Rating, { fractions: 2, defaultValue: 1.5 })), /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement("div", null, "Fractions: 3"), /* @__PURE__ */ React__default.createElement(core.Rating, { fractions: 3, defaultValue: 2.33333333 })), /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement("div", null, "Fractions: 4"), /* @__PURE__ */ React__default.createElement(core.Rating, { fractions: 4, defaultValue: 3.75 })));
}
const fractions = {
  type: "code",
  component: Demo,
  code
};

exports.fractions = fractions;
//# sourceMappingURL=Rating.demo.fractions.js.map
