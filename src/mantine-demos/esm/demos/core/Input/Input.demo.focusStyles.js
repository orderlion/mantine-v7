import React from 'react';
import { Input, TextInput } from '@mantine/core';
import classes from './Input.demo.focusStyles.module.css.js';

const code = `
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`;
const cssCode = `
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { placeholder: "Regular Input component", classNames: classes }), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      placeholder: "TextInput component",
      label: "TextInput component",
      mt: "md",
      classNames: classes
    }
  ));
}
const focusStyles = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code: [
    { fileName: "Demo.module.css", code: cssCode, language: "css" },
    { fileName: "Demo.tsx", code, language: "tsx" }
  ]
};

export { focusStyles };
//# sourceMappingURL=Input.demo.focusStyles.js.map
