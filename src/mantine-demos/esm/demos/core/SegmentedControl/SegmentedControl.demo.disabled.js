import React from 'react';
import { Stack, Text, SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled option */}
      <SegmentedControl
        data={[
          { value: 'preview', label: 'Preview', disabled: true },
          { value: 'code', label: 'Code' },
          { value: 'export', label: 'Export' },
        ]}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, { align: "center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mb: 3 }, "Disabled control"), /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      disabled: true,
      data: [
        {
          value: "preview",
          label: "Preview"
        },
        {
          value: "code",
          label: "Code"
        },
        {
          value: "export",
          label: "Export"
        }
      ]
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mb: 3 }, "Disabled option"), /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      data: [
        {
          value: "preview",
          label: "Preview",
          disabled: true
        },
        {
          value: "code",
          label: "Code"
        },
        {
          value: "export",
          label: "Export"
        }
      ]
    }
  )));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=SegmentedControl.demo.disabled.js.map
