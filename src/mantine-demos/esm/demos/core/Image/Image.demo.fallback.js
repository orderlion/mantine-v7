import React from 'react';
import { Image } from '@mantine/core';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Image,
    {
      radius: "md",
      src: null,
      h: 200,
      fallbackSrc: "https://placehold.co/600x400?text=Placeholder"
    }
  );
}
const fallback = {
  type: "code",
  component: Demo,
  code
};

export { fallback };
//# sourceMappingURL=Image.demo.fallback.js.map
