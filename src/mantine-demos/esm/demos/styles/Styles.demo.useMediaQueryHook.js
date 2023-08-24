import React from 'react';
import { em, Tooltip, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const code = `
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return /* @__PURE__ */ React.createElement(Tooltip, { label: isMobile ? "Mobile" : "Desktop" }, /* @__PURE__ */ React.createElement(Button, null, "Hover me"));
}
const useMediaQueryHook = {
  type: "code",
  component: Demo,
  code
};

export { useMediaQueryHook };
//# sourceMappingURL=Styles.demo.useMediaQueryHook.js.map
