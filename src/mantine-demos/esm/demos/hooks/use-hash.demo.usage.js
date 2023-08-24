import React from 'react';
import { useHash, randomId } from '@mantine/hooks';
import { Group, Button, Text, Code } from '@mantine/core';

const code = `
import { useHash, randomId } from '@mantine/hooks';
import { Button, Text, Code } from '@mantine/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;
function Demo() {
  const [hash, setHash] = useHash();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => setHash(randomId()) }, "Set hash to random string")), /* @__PURE__ */ React.createElement(Text, { ta: "center", mt: "md" }, "Current hash: ", /* @__PURE__ */ React.createElement(Code, null, hash)));
}
const useHashDemo = {
  type: "code",
  code,
  component: Demo
};

export { useHashDemo };
//# sourceMappingURL=use-hash.demo.usage.js.map
