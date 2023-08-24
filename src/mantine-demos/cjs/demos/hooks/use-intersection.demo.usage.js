'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? 'var(--mantine-color-green-6)'
              : 'var(--mantine-color-red-6)',
            minWidth: '50%',
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`;
function Demo() {
  const containerRef = React.useRef(null);
  const { ref, entry } = hooks.useIntersection({
    root: containerRef.current,
    threshold: 1
  });
  return /* @__PURE__ */ React__default.createElement(core.Paper, { ref: containerRef, h: 300, style: { overflowY: "scroll" } }, /* @__PURE__ */ React__default.createElement(core.Box, { pt: 260, pb: 280 }, /* @__PURE__ */ React__default.createElement(
    core.Paper,
    {
      ref,
      p: "xl",
      style: {
        backgroundColor: (entry == null ? void 0 : entry.isIntersecting) ? "var(--mantine-color-green-6)" : "var(--mantine-color-red-6)",
        minWidth: "50%"
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Text, { c: "#fff", fw: 700 }, (entry == null ? void 0 : entry.isIntersecting) ? "Fully visible" : "Obscured")
  )));
}
const useIntersectionDemo = {
  type: "code",
  code,
  component: Demo
};

exports.useIntersectionDemo = useIntersectionDemo;
//# sourceMappingURL=use-intersection.demo.usage.js.map
