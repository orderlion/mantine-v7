import React from 'react';
import { ColorInput } from '@mantine/core';
import { ColorInputStylesApi } from '@mantine/styles-api';

const code = `
import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`;
function Demo(props) {
  return /* @__PURE__ */ React.createElement(
    ColorInput,
    {
      label: "Label",
      placeholder: "ColorInput",
      description: "Description",
      error: "Error",
      withAsterisk: true,
      swatches: ["#000", "#fff", "#f00", "#0f0", "#00f"],
      format: "rgba",
      classNames: props.classNames
    }
  );
}
const stylesApi = {
  type: "styles-api",
  data: ColorInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { stylesApi };
//# sourceMappingURL=ColorInput.demo.stylesApi.js.map
