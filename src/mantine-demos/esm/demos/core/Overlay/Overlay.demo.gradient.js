import React, { useState } from 'react';
import { AspectRatio, Overlay, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto">
        <img
          src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
`;
function Demo() {
  const [visible, setVisible] = useState(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AspectRatio, { ratio: 16 / 9, maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      alt: "Demo"
    }
  ), visible && /* @__PURE__ */ React.createElement(
    Overlay,
    {
      gradient: "linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)",
      opacity: 0.85
    }
  )), /* @__PURE__ */ React.createElement(Button, { onClick: () => setVisible((v) => !v), fullWidth: true, maw: 200, mx: "auto", mt: "xl" }, "Toggle overlay"));
}
const gradient = {
  type: "code",
  code,
  component: Demo
};

export { gradient };
//# sourceMappingURL=Overlay.demo.gradient.js.map
