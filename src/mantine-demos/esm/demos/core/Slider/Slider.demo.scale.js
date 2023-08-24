import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

const code = `
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`;
function valueLabelFormat(value) {
  const units = ["KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  let scaledValue = value;
  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }
  return `${scaledValue} ${units[unitIndex]}`;
}
const getScale = (v) => 2 ** v;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Slider,
    {
      scale: getScale,
      step: 1,
      min: 2,
      max: 30,
      labelAlwaysOn: true,
      defaultValue: 10,
      label: valueLabelFormat
    }
  ), /* @__PURE__ */ React.createElement(
    RangeSlider,
    {
      mt: 50,
      scale: getScale,
      step: 1,
      min: 2,
      max: 30,
      labelAlwaysOn: true,
      defaultValue: [10, 20],
      label: valueLabelFormat
    }
  ));
}
const scale = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { scale };
//# sourceMappingURL=Slider.demo.scale.js.map
