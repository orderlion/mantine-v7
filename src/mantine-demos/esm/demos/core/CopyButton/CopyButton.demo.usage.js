import React from 'react';
import { CopyButton, Button } from '@mantine/core';

const code = `
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(CopyButton, { value: "https://mantine.dev" }, ({ copied, copy }) => /* @__PURE__ */ React.createElement(Button, { color: copied ? "teal" : "blue", onClick: copy }, copied ? "Copied url" : "Copy url"));
}
const usage = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { usage };
//# sourceMappingURL=CopyButton.demo.usage.js.map
