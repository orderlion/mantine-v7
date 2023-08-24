'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: rem(300),
          height: rem(150),
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(0deg, #000, transparent)',
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
            top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
            width: rem(16),
            height: rem(16),
            border: \`\${rem(2)} solid #fff\`,
            borderRadius: rem(16),
          }}
        />
      </div>
    </div>
  );
}`;
function Demo() {
  const [value, setValue] = React.useState({ x: 0.2, y: 0.6 });
  const { ref } = hooks.useMove(setValue);
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(
    "div",
    {
      ref,
      style: {
        width: core.rem(300),
        height: core.rem(150),
        backgroundColor: "red",
        position: "relative"
      }
    },
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(90deg, #fff, transparent)"
        }
      }
    ),
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(0deg, #000, transparent)"
        }
      }
    ),
    /* @__PURE__ */ React__default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          left: `calc(${value.x * 100}% - ${core.rem(8)})`,
          top: `calc(${value.y * 100}% - ${core.rem(8)})`,
          width: core.rem(16),
          height: core.rem(16),
          border: `${core.rem(2)} solid #fff`,
          borderRadius: core.rem(16)
        }
      }
    )
  ));
}
const useMoveColor = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useMoveColor = useMoveColor;
//# sourceMappingURL=use-move.demo.color.js.map
