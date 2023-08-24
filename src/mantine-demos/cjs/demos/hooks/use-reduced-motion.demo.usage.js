'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}`;
function Demo() {
  const reduceMotion = hooks.useReducedMotion();
  return /* @__PURE__ */ React__default.createElement(
    core.Badge,
    {
      color: reduceMotion ? "red" : "teal",
      style: { transitionDuration: reduceMotion ? "0ms" : "200ms" },
      variant: "filled"
    },
    reduceMotion ? "You prefer to reduce motion" : "You prefer not to reduce motion"
  );
}
const useReducedMotionDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.useReducedMotionDemo = useReducedMotionDemo;
//# sourceMappingURL=use-reduced-motion.demo.usage.js.map
