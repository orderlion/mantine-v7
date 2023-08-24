import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

const code = `
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Slider, { inverted: true, defaultValue: 80 }), /* @__PURE__ */ React.createElement(RangeSlider, { inverted: true, defaultValue: [40, 80], mt: "xl" }));
}
const inverted = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { inverted };
//# sourceMappingURL=Slider.demo.inverted.js.map
