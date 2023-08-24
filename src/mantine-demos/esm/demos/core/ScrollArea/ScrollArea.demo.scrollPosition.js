import React, { useState } from 'react';
import { Stack, ScrollArea, Box, Text, Code } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;
function Demo() {
  const [scrollPosition2, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement(ScrollArea, { w: 300, h: 200, onScrollPositionChange }, /* @__PURE__ */ React.createElement(Box, { w: 600 }, /* @__PURE__ */ React.createElement(Content, null))), /* @__PURE__ */ React.createElement(Text, null, "Scroll position: ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${scrollPosition2.x}, y: ${scrollPosition2.y} }`)));
}
const scrollPosition = {
  type: "code",
  component: Demo,
  code
};

export { scrollPosition };
//# sourceMappingURL=ScrollArea.demo.scrollPosition.js.map
