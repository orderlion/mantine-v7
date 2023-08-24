import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NativeSelect, { error: true, label: "Boolean error", data: ["React", "Angular"] }), /* @__PURE__ */ React.createElement(
    NativeSelect,
    {
      error: "Error message",
      label: "React node error",
      data: ["React", "Angular"],
      mt: "md"
    }
  ));
}
const error = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { error };
//# sourceMappingURL=NativeSelect.demo.error.js.map
