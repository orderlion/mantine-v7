'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Group, Text, Code, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
              top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;
function Demo() {
  const [value, setValue] = React.useState({ x: 0.2, y: 0.6 });
  const { ref, active } = hooks.useMove(setValue);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref,
      style: {
        width: core.rem(400),
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
          left: `calc(${value.x * 100}% - ${core.rem(8)})`,
          top: `calc(${value.y * 100}% - ${core.rem(8)})`,
          width: core.rem(16),
          height: core.rem(16),
          backgroundColor: active ? "var(--mantine-color-teal-7)" : "var(--mantine-color-blue-7)"
        }
      }
    )
  )), /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center", mt: "sm" }, "Values ", /* @__PURE__ */ React__default.createElement(core.Code, null, `{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`)));
}
const useMoveUsage = {
  type: "code",
  code,
  component: Demo
};

exports.useMoveUsage = useMoveUsage;
//# sourceMappingURL=use-move.demo.usage.js.map
