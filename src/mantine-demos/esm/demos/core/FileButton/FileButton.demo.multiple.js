import React, { useState } from 'react';
import { Group, FileButton, Button, Text } from '@mantine/core';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
`;
function Demo() {
  const [files, setFiles] = useState([]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(FileButton, { onChange: setFiles, accept: "image/png,image/jpeg", multiple: true }, (props) => /* @__PURE__ */ React.createElement(Button, __spreadValues({}, props), "Upload image"))), files.length > 0 && /* @__PURE__ */ React.createElement(Text, { size: "sm", mt: "sm" }, "Picked files:"), /* @__PURE__ */ React.createElement("ul", null, files.map((file, index) => /* @__PURE__ */ React.createElement("li", { key: index }, file.name))));
}
const multiple = {
  type: "code",
  component: Demo,
  code
};

export { multiple };
//# sourceMappingURL=FileButton.demo.multiple.js.map
