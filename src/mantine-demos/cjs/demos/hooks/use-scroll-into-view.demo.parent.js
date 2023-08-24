'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={300} style={{ overflowY: 'scroll', flex: 1 }}>
        <Box pt={260} pb={450}>
          <Paper
            ref={targetRef}
            p="xl"
            style={{
              backgroundColor: 'var(--mantine-color-blue-light)',
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`;
function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = hooks.useScrollIntoView();
  return /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Paper, { ref: scrollableRef, h: 300, style: { overflowY: "scroll", flex: 1 } }, /* @__PURE__ */ React__default.createElement(core.Box, { pt: 260, pb: 450 }, /* @__PURE__ */ React__default.createElement(
    core.Paper,
    {
      ref: targetRef,
      p: "xl",
      style: {
        backgroundColor: "var(--mantine-color-blue-light)",
        width: "100%"
      }
    },
    /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll me into view")
  ))), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => scrollIntoView() }, "Scroll to target"));
}
const useScrollIntoViewParent = {
  type: "code",
  code,
  component: Demo
};

exports.useScrollIntoViewParent = useScrollIntoViewParent;
//# sourceMappingURL=use-scroll-into-view.demo.parent.js.map
