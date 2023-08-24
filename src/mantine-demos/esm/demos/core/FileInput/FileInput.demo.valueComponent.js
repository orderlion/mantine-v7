import React from 'react';
import { FileInput, Pill } from '@mantine/core';

const code = `
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
`;
const ValueComponent = ({ value }) => {
  if (value === null) {
    return null;
  }
  if (Array.isArray(value)) {
    return /* @__PURE__ */ React.createElement(Pill.Group, null, value.map((file, index) => /* @__PURE__ */ React.createElement(Pill, { key: index }, file.name)));
  }
  return /* @__PURE__ */ React.createElement(Pill, null, value.name);
};
function Demo() {
  return /* @__PURE__ */ React.createElement(
    FileInput,
    {
      label: "Upload files",
      placeholder: "Upload files",
      multiple: true,
      valueComponent: ValueComponent
    }
  );
}
const valueComponent = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340
};

export { valueComponent };
//# sourceMappingURL=FileInput.demo.valueComponent.js.map
