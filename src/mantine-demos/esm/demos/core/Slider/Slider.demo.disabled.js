import React from 'react';
import { Box, Slider, RangeSlider } from '@mantine/core';

const code = `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(Slider, { defaultValue: 60, disabled: true }), /* @__PURE__ */ React.createElement(
    RangeSlider,
    {
      mt: "xl",
      mb: "xl",
      disabled: true,
      defaultValue: [25, 75],
      marks: [
        { value: 0, label: "xs" },
        { value: 25, label: "sm" },
        { value: 50, label: "md" },
        { value: 75, label: "lg" },
        { value: 100, label: "xl" }
      ]
    }
  ));
}
const disabled = {
  type: "code",
  component: Demo,
  code
};

export { disabled };
//# sourceMappingURL=Slider.demo.disabled.js.map
