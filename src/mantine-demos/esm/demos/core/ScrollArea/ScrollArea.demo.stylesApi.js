import React from 'react';
import { ScrollArea, Box } from '@mantine/core';
import { Content } from './_content.js';
import classes from './ScrollArea.demo.stylesApi.module.css.js';

const code = `
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;
const cssCode = `
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ScrollArea, { w: 300, h: 200, type: "always", offsetScrollbars: true, classNames: classes }, /* @__PURE__ */ React.createElement(Box, { w: 600 }, /* @__PURE__ */ React.createElement(Content, null)));
}
const stylesApi = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { stylesApi };
//# sourceMappingURL=ScrollArea.demo.stylesApi.js.map
