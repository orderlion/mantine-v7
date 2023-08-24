'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
`;
function Demo() {
  const { scrollIntoView, targetRef } = hooks.useScrollIntoView({
    offset: 60
  });
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      onClick: () => scrollIntoView({
        alignment: "center"
      })
    },
    "Scroll to target"
  ), /* @__PURE__ */ React__default.createElement(
    core.Box,
    {
      style: {
        width: "100%",
        height: "50vh",
        backgroundColor: "var(--mantine-color-blue-light)"
      }
    }
  ), /* @__PURE__ */ React__default.createElement(core.Text, { ref: targetRef }, "Hello there"));
}
const useScrollIntoViewUsage = {
  type: "code",
  code,
  component: Demo
};

exports.useScrollIntoViewUsage = useScrollIntoViewUsage;
//# sourceMappingURL=use-scroll-into-view.demo.usage.js.map
