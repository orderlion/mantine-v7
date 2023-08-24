'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Flex,
    {
      direction: { base: "column", sm: "row" },
      gap: { base: "sm", sm: "lg" },
      justify: { sm: "center" }
    },
    /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 1"),
    /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 2"),
    /* @__PURE__ */ React__default.createElement(core.Button, null, "Button 3")
  );
}
const responsive = {
  type: "code",
  component: Demo,
  code
};

exports.responsive = responsive;
//# sourceMappingURL=Flex.demo.responsive.js.map
