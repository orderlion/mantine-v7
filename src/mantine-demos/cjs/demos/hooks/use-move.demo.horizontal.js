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
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - \${rem(8)})\`,
              top: 0,
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
}
`;
function Demo() {
  const [value, setValue] = React.useState(0.2);
  const { ref } = hooks.useMove(({ x }) => setValue(x));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref,
      style: {
        width: core.rem(400),
        height: core.rem(16),
        backgroundColor: "var(--mantine-color-blue-light)",
        position: "relative"
      }
    },
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          width: `${value * 100}%`,
          height: core.rem(16),
          backgroundColor: "var(--mantine-color-blue-filled)"
        }
      }
    ),
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: `calc(${value * 100}% - ${core.rem(8)})`,
          top: 0,
          width: core.rem(16),
          height: core.rem(16),
          backgroundColor: "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", mt: "sm" }, "Value: ", Math.round(value * 100)));
}
const useMoveHorizontal = {
  type: "code",
  code,
  component: Demo
};

exports.useMoveHorizontal = useMoveHorizontal;
//# sourceMappingURL=use-move.demo.horizontal.js.map
