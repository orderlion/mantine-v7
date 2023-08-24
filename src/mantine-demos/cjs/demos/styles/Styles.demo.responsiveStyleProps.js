'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    core.Box,
    {
      w: { base: 200, sm: 400, lg: 500 },
      py: { base: "xs", sm: "md", lg: "xl" },
      bg: { base: "blue.7", sm: "red.7", lg: "green.7" },
      c: "#fff",
      ta: "center",
      mx: "auto"
    },
    "Box with responsive style props"
  );
}
const responsiveStyleProps = {
  type: "code",
  component: Demo,
  code
};

exports.responsiveStyleProps = responsiveStyleProps;
//# sourceMappingURL=Styles.demo.responsiveStyleProps.js.map
