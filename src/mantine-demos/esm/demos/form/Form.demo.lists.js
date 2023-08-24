import React from 'react';
import { useForm } from '@mantine/form';
import { Group, TextInput, Switch, ActionIcon, Box, Text, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

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
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.values.employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>

      <Text size="sm" fw={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
`;
function Demo() {
  const form = useForm({
    initialValues: {
      employees: [{ name: "", active: false, key: randomId() }]
    }
  });
  const fields = form.values.employees.map((item, index) => /* @__PURE__ */ React.createElement(Group, { key: item.key, mt: "xs" }, /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      placeholder: "John Doe",
      withAsterisk: true,
      style: { flex: 1 }
    }, form.getInputProps(`employees.${index}.name`))
  ), /* @__PURE__ */ React.createElement(
    Switch,
    __spreadValues({
      label: "Active"
    }, form.getInputProps(`employees.${index}.active`, { type: "checkbox" }))
  ), /* @__PURE__ */ React.createElement(ActionIcon, { color: "red", onClick: () => form.removeListItem("employees", index) }, /* @__PURE__ */ React.createElement(IconTrash, { size: "1rem" }))));
  return /* @__PURE__ */ React.createElement(Box, { maw: 500, mx: "auto" }, fields.length > 0 ? /* @__PURE__ */ React.createElement(Group, { mb: "xs" }, /* @__PURE__ */ React.createElement(Text, { fw: 500, size: "sm", style: { flex: 1 } }, "Name"), /* @__PURE__ */ React.createElement(Text, { fw: 500, size: "sm", pr: 90 }, "Status")) : /* @__PURE__ */ React.createElement(Text, { c: "dimmed", ta: "center" }, "No one here..."), fields, /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => form.insertListItem("employees", { name: "", active: false, key: randomId() })
    },
    "Add employee"
  )), /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mt: "md" }, "Form values:"), /* @__PURE__ */ React.createElement(Code, { block: true }, JSON.stringify(form.values, null, 2)));
}
const lists = {
  type: "code",
  component: Demo,
  code
};

export { lists };
//# sourceMappingURL=Form.demo.lists.js.map
