import React, { useEffect } from 'react';
import { Slider } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`;
function Demo() {
  useEffect(
    () => () => {
      document.documentElement.style.fontSize = "100%";
    },
    []
  );
  return /* @__PURE__ */ React.createElement(
    Slider,
    {
      defaultValue: 100,
      min: 70,
      max: 130,
      onChange: (value) => {
        document.documentElement.style.fontSize = `${value}%`;
      }
    }
  );
}
const remSlider = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { remSlider };
//# sourceMappingURL=Styles.demo.remSlider.js.map
