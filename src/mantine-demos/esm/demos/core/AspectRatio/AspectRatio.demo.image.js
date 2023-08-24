import React from 'react';
import { AspectRatio } from '@mantine/core';

const code = `
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={720 / 1080} maw={300} mx="auto">
      <img
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(AspectRatio, { ratio: 720 / 1080, maw: 300, mx: "auto" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      alt: "Panda"
    }
  ));
}
const image = {
  type: "code",
  component: Demo,
  code
};

export { image };
//# sourceMappingURL=AspectRatio.demo.image.js.map
