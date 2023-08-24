import React from 'react';
import { Text, Slider } from '@mantine/core';

const code = `
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xB0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { size: "sm" }, "No label"), /* @__PURE__ */ React.createElement(Slider, { defaultValue: 40, label: null }), /* @__PURE__ */ React.createElement(Text, { size: "sm", mt: "xl" }, "Formatted label"), /* @__PURE__ */ React.createElement(Slider, { defaultValue: 40, label: (value) => `${value} \xB0C` }), /* @__PURE__ */ React.createElement(Text, { size: "sm", mt: "xl" }, "Label always visible"), /* @__PURE__ */ React.createElement(Slider, { defaultValue: 40, labelAlwaysOn: true }), /* @__PURE__ */ React.createElement(Text, { size: "sm", mt: "xl" }, "Custom label transition"), /* @__PURE__ */ React.createElement(
    Slider,
    {
      defaultValue: 40,
      labelTransitionProps: {
        transition: "skew-down",
        duration: 150,
        timingFunction: "linear"
      }
    }
  ));
}
const label = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { label };
//# sourceMappingURL=Slider.demo.label.js.map
