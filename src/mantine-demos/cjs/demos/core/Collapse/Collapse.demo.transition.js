'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
`;
function Demo() {
  const [opened, { toggle }] = hooks.useDisclosure(false);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mb: 5 }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: toggle }, "Toggle with linear transition")), /* @__PURE__ */ React__default.createElement(core.Collapse, { in: opened, transitionDuration: 1e3, transitionTimingFunction: "linear" }, /* @__PURE__ */ React__default.createElement(core.Text, null, "From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xE9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")));
}
const transition = {
  type: "code",
  code,
  component: Demo
};

exports.transition = transition;
//# sourceMappingURL=Collapse.demo.transition.js.map
