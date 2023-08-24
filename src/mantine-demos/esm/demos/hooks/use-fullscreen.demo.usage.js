import React from 'react';
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

const code = `
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;
function Demo() {
  const { toggle, fullscreen } = useFullscreen();
  return /* @__PURE__ */ React.createElement(Button, { onClick: toggle, color: fullscreen ? "red" : "blue" }, fullscreen ? "Exit Fullscreen" : "Enter Fullscreen");
}
const useFullscreenDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { useFullscreenDemo };
//# sourceMappingURL=use-fullscreen.demo.usage.js.map
