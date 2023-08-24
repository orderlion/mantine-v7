import React from 'react';
import { useOs } from '@mantine/hooks';
import { Text } from '@mantine/core';

const code = `
import { useOs } from '@mantine/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;
function Demo() {
  const os = useOs();
  return /* @__PURE__ */ React.createElement(Text, { ta: "center" }, "Your os is ", /* @__PURE__ */ React.createElement("b", null, os));
}
const useOsDemo = {
  type: "code",
  component: Demo,
  code
};

export { useOsDemo };
//# sourceMappingURL=use-os.demo.usage.js.map
