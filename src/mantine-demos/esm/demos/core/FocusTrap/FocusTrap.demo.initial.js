import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Box, Button, FocusTrap, TextInput } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`;
function Demo() {
  const [active, { toggle }] = useDisclosure(false);
  return /* @__PURE__ */ React.createElement(Box, { maw: 400, mx: "auto" }, /* @__PURE__ */ React.createElement(Button, { onClick: toggle }, active ? "Deactivate" : "Activate", " focus trap"), /* @__PURE__ */ React.createElement(FocusTrap, { active }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(TextInput, { mt: "sm", label: "First input", placeholder: "First input" }), /* @__PURE__ */ React.createElement(TextInput, { mt: "sm", label: "Second input", placeholder: "Second input", "data-autofocus": true }), /* @__PURE__ */ React.createElement(TextInput, { mt: "sm", label: "Third input", placeholder: "Third input" }))));
}
const initial = {
  type: "code",
  component: Demo,
  code
};

export { initial };
//# sourceMappingURL=FocusTrap.demo.initial.js.map
