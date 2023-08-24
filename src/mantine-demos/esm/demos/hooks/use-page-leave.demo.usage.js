import React, { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';
import { Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;
function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return /* @__PURE__ */ React.createElement(Text, { ta: "center" }, "Mouse left the page ", leftsCount, " times");
}
const usePageLeaveDemo = {
  type: "code",
  component: Demo,
  code
};

export { usePageLeaveDemo };
//# sourceMappingURL=use-page-leave.demo.usage.js.map
