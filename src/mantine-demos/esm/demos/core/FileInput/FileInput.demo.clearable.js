import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(FileInput, { label: "Upload files", placeholder: "Upload files", clearable: true });
}
const clearable = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { clearable };
//# sourceMappingURL=FileInput.demo.clearable.js.map
