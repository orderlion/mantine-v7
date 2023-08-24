import React from 'react';
import { ActionIcon } from '@mantine/core';

const code = `
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(ActionIcon, { size: "xl", loading: true, loaderProps: { type: "dots" } });
}
const loaderProps = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { loaderProps };
//# sourceMappingURL=ActionIcon.demo.loaderProps.js.map
