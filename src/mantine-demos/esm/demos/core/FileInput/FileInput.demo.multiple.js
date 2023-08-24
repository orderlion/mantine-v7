import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, { multiple: true, label: "Upload files", placeholder: "Upload files" });
}
const multiple = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { multiple };
//# sourceMappingURL=FileInput.demo.multiple.js.map
