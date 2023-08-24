import React from 'react';
import { Fieldset, TextInput, Group, Button } from '@mantine/core';

const code = `
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Fieldset, { legend: "Personal information", disabled: true }, /* @__PURE__ */ React.createElement(TextInput, { label: "Your name", placeholder: "Your name" }), /* @__PURE__ */ React.createElement(TextInput, { label: "Email", placeholder: "Email", mt: "md" }), /* @__PURE__ */ React.createElement(Group, { justify: "flex-end", mt: "md" }, /* @__PURE__ */ React.createElement(Button, null, "Submit")));
}
const disabled = {
  type: "code",
  component: Demo,
  maxWidth: 500,
  centered: true,
  code
};

export { disabled };
//# sourceMappingURL=Fieldset.demo.disabled.js.map
