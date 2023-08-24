'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true \u2013 each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false \u2013 children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, { style: { overflow: "hidden" } }, /* @__PURE__ */ React__default.createElement(core.Box, { maw: 500, p: "md", mx: "auto", bg: "var(--mantine-color-blue-light)" }, /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", mb: 5 }, "preventGrowOverflow: true \u2013 each child width is always limited to 33% of parent width (since there are 3 children)"), /* @__PURE__ */ React__default.createElement(core.Group, { grow: true, wrap: "nowrap" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "First button"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "Second button with large content"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "Third button")), /* @__PURE__ */ React__default.createElement(core.Text, { size: "sm", mb: 5, mt: "md" }, "preventGrowOverflow: false \u2013 children will grow based on their content, they can take more than 33% of parent width"), /* @__PURE__ */ React__default.createElement(core.Group, { grow: true, preventGrowOverflow: false, wrap: "nowrap" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "First button"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "Second button with large content"), /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default" }, "Third button"))));
}
const preventGrowOverflow = {
  type: "code",
  component: Demo,
  code
};

exports.preventGrowOverflow = preventGrowOverflow;
//# sourceMappingURL=Group.demo.preventGrowOverflow.js.map
