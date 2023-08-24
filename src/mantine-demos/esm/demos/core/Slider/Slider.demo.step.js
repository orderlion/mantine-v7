import React from 'react';
import { Text, Slider } from '@mantine/core';

const code = `
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`;
const marks = [
  { value: 0, label: "xs" },
  { value: 25, label: "sm" },
  { value: 50, label: "md" },
  { value: 75, label: "lg" },
  { value: 100, label: "xl" }
];
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, null, "Decimal step"), /* @__PURE__ */ React.createElement(
    Slider,
    {
      defaultValue: 0,
      min: -10,
      max: 10,
      label: (value) => value.toFixed(1),
      step: 0.1,
      styles: { markLabel: { display: "none" } }
    }
  ), /* @__PURE__ */ React.createElement(Text, { mt: "md" }, "Step matched with marks"), /* @__PURE__ */ React.createElement(
    Slider,
    {
      defaultValue: 50,
      label: (val) => marks.find((mark) => mark.value === val).label,
      step: 25,
      marks,
      styles: { markLabel: { display: "none" } }
    }
  ));
}
const step = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { step };
//# sourceMappingURL=Slider.demo.step.js.map
