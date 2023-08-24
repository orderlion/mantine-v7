import React from 'react';
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

const code = `
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Text, null, "You can highlight code inline:", " ", /* @__PURE__ */ React.createElement(InlineCodeHighlight, { code: "import React from 'react';", language: "tsx" }), ". Is not that cool?");
}
const inline = {
  type: "code",
  component: Demo,
  code
};

export { inline };
//# sourceMappingURL=CodeHighlight.demo.inline.js.map
