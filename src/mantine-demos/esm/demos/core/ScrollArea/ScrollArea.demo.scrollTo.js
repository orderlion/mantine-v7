import React, { useRef } from 'react';
import { Stack, ScrollArea, Group, Button } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom} variant="outline">
          Scroll to bottom
        </Button>
        <Button onClick={scrollToCenter} variant="outline">
          Scroll to center
        </Button>
        <Button onClick={scrollToTop} variant="outline">
          Scroll to top
        </Button>
      </Group>
    </Stack>
  );
}
`;
function Demo() {
  const viewport = useRef(null);
  const scrollToBottom = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: "smooth" });
  const scrollToCenter = () => viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: "smooth" });
  const scrollToTop = () => viewport.current.scrollTo({ top: 0, behavior: "smooth" });
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(ScrollArea, { w: 300, h: 200, viewportRef: viewport }, /* @__PURE__ */ React.createElement(Content, null)), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: scrollToBottom, variant: "outline" }, "Scroll to bottom"), /* @__PURE__ */ React.createElement(Button, { onClick: scrollToCenter, variant: "outline" }, "Scroll to center"), /* @__PURE__ */ React.createElement(Button, { onClick: scrollToTop, variant: "outline" }, "Scroll to top")));
}
const scrollTo = {
  type: "code",
  component: Demo,
  code
};

export { scrollTo };
//# sourceMappingURL=ScrollArea.demo.scrollTo.js.map
