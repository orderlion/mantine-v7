import React from 'react';
import { Button, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';

const code = `
import { TextInput, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => {
        modals.open({
          title: "Subscribe to newsletter",
          children: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TextInput, { label: "Your email", placeholder: "Your email", "data-autofocus": true }), /* @__PURE__ */ React.createElement(Button, { fullWidth: true, onClick: () => modals.closeAll(), mt: "md" }, "Submit"))
        });
      }
    },
    "Open content modal"
  );
}
const content = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { content };
//# sourceMappingURL=Modals.demo.content.js.map
