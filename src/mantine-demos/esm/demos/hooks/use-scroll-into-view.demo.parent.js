import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Group, Paper, Box, Text, Button } from '@mantine/core';

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
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Paper, { ref: scrollableRef, h: 300, style: { overflowY: "scroll", flex: 1 } }, /* @__PURE__ */ React.createElement(Box, { pt: 260, pb: 450 }, /* @__PURE__ */ React.createElement(
    Paper,
    {
      ref: targetRef,
      p: "xl",
      style: {
        backgroundColor: "var(--mantine-color-blue-light)",
        width: "100%"
      }
    },
    /* @__PURE__ */ React.createElement(Text, null, "Scroll me into view")
  ))), /* @__PURE__ */ React.createElement(Button, { onClick: () => scrollIntoView() }, "Scroll to target"));
}
const useScrollIntoViewParent = {
  type: "code",
  code,
  component: Demo
};

export { useScrollIntoViewParent };
//# sourceMappingURL=use-scroll-into-view.demo.parent.js.map
