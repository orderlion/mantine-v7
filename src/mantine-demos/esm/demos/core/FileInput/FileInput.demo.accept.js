import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, { accept: "image/png,image/jpeg", label: "Upload files", placeholder: "Upload files" });
}
const accept = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { accept };
//# sourceMappingURL=FileInput.demo.accept.js.map
