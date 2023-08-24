import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';

const code = `
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`;
function Demo() {
  const marks2 = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Slider, { defaultValue: 40, marks: [{ value: 10 }, { value: 40 }, { value: 95 }], mb: 32 }), /* @__PURE__ */ React.createElement(Slider, { defaultValue: 40, marks: marks2, mb: 32 }), /* @__PURE__ */ React.createElement(RangeSlider, { defaultValue: [20, 80], marks: marks2, mb: 32 }));
}
const marks = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400
};

export { marks };
//# sourceMappingURL=Slider.demo.marks.js.map
