'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Group, Text, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(16),
            height: rem(120),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: \`\${value * 100}%\`,
              width: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - \${rem(8)})\`,
              left: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;
function Demo() {
  const [value, setValue] = React.useState(0.2);
  const { ref } = hooks.useMove(({ y }) => setValue(1 - y));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref,
      style: {
        width: core.rem(16),
        height: core.rem(120),
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    },
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          bottom: 0,
          height: `${value * 100}%`,
          width: core.rem(16),
          backgroundColor: "var(--mantine-color-blue-filled)"
        }
      }
    ),
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          bottom: `calc(${value * 100}% - ${core.rem(8)})`,
          left: 0,
          width: core.rem(16),
          height: core.rem(16),
          backgroundColor: "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", mt: "sm" }, "Value: ", Math.round(value * 100)));
}
const useMoveVertical = {
  type: "code",
  code,
  component: Demo
};

exports.useMoveVertical = useMoveVertical;
//# sourceMappingURL=use-move.demo.vertical.js.map
