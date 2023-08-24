import React from 'react';
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

const code = `
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;
function Demo() {
  const clipboard = useClipboard({ timeout: 500 });
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      color: clipboard.copied ? "teal" : "blue",
      onClick: () => clipboard.copy("Hello, world!")
    },
    clipboard.copied ? "Copied" : "Copy"
  );
}
const useClipboardDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { useClipboardDemo };
//# sourceMappingURL=use-clipboard.usage.demo.js.map
