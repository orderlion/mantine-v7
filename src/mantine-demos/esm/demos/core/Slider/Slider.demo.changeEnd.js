import React, { useState } from 'react';
import { Box, Slider, Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(Slider, { value, onChange: setValue, onChangeEnd: setEndValue }), /* @__PURE__ */ React.createElement(Text, { mt: "md", size: "sm" }, "onChange value: ", /* @__PURE__ */ React.createElement("b", null, value)), /* @__PURE__ */ React.createElement(Text, { mt: 5, size: "sm" }, "onChangeEnd value: ", /* @__PURE__ */ React.createElement("b", null, endValue)));
}
const changeEnd = {
  type: "code",
  component: Demo,
  code
};

export { changeEnd };
//# sourceMappingURL=Slider.demo.changeEnd.js.map
