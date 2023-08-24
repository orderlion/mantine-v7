'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [value, setValue] = React.useState(50);
  const [endValue, setEndValue] = React.useState(50);
  return /* @__PURE__ */ React__default.createElement(core.Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React__default.createElement(core.Slider, { value, onChange: setValue, onChangeEnd: setEndValue }), /* @__PURE__ */ React__default.createElement(core.Text, { mt: "md", size: "sm" }, "onChange value: ", /* @__PURE__ */ React__default.createElement("b", null, value)), /* @__PURE__ */ React__default.createElement(core.Text, { mt: 5, size: "sm" }, "onChangeEnd value: ", /* @__PURE__ */ React__default.createElement("b", null, endValue)));
}
const changeEnd = {
  type: "code",
  component: Demo,
  code
};

exports.changeEnd = changeEnd;
//# sourceMappingURL=Slider.demo.changeEnd.js.map
