import React from 'react';
import { Textarea } from '@mantine/core';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Textarea,
    {
      placeholder: "Autosize with no rows limit",
      label: "Autosize with no rows limit",
      autosize: true,
      minRows: 2
    }
  ), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      label: "Autosize with 4 rows max",
      placeholder: "Autosize with 4 rows max",
      autosize: true,
      minRows: 2,
      maxRows: 4,
      mt: "md"
    }
  ));
}
const autosize = {
  type: "code",
  code,
  component: Demo,
  maxWidth: 340,
  centered: true
};

export { autosize };
//# sourceMappingURL=Textarea.demo.autosize.js.map
