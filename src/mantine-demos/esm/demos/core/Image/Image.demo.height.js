import React from 'react';
import { Image } from '@mantine/core';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Image,
    {
      radius: "md",
      h: 200,
      src: "https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
    }
  );
}
const height = {
  type: "code",
  component: Demo,
  code
};

export { height };
//# sourceMappingURL=Image.demo.height.js.map
