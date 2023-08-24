import React, { useState, useRef } from 'react';
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
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
`;
function Demo() {
  const [file, setFile] = useState(null);
  const resetRef = useRef(null);
  const clearFile = () => {
    var _a;
    setFile(null);
    (_a = resetRef.current) == null ? void 0 : _a.call(resetRef);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(FileButton, { resetRef, onChange: setFile, accept: "image/png,image/jpeg" }, (props) => /* @__PURE__ */ React.createElement(Button, __spreadValues({}, props), "Upload image")), /* @__PURE__ */ React.createElement(Button, { disabled: !file, color: "red", onClick: clearFile }, "Reset")), file && /* @__PURE__ */ React.createElement(Text, { size: "sm", ta: "center", mt: "sm" }, "Picked file: ", file.name));
}
const reset = {
  type: "code",
  component: Demo,
  code
};

export { reset };
//# sourceMappingURL=FileButton.demo.reset.js.map
