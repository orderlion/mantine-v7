import React from 'react';
import { TextInput } from '@mantine/core';
import classes from './Styles.demo.sizesMedia.module.css.js';

const code = `
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`;
const cssCode = `
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "My input",
      placeholder: "My input",
      size: "xs",
      className: classes["input-mobile"]
    }
  ), /* @__PURE__ */ React.createElement(
    TextInput,
    {
      label: "My input",
      placeholder: "My input",
      size: "xl",
      className: classes["input-desktop"]
    }
  ));
}
const sizesMedia = {
  type: "code",
  component: Demo,
  code: [
    { fileName: "Demo.tsx", code, language: "tsx" },
    { fileName: "Demo.module.css", code: cssCode, language: "css" }
  ]
};

export { sizesMedia };
//# sourceMappingURL=Styles.demo.sizesMedia.js.map
