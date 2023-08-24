import React from 'react';
import { Group, Center, TextInput, Box, Button, Text, Code } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import { IconGripVertical } from '@tabler/icons-react';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { Group, TextInput, Box, Text, Code, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IconGripVertical } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev' },
        { name: 'Bill Love', email: 'bill@mantine.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev' },
        { name: 'Lim Notch', email: 'lim@mantine.dev' },
        { name: 'Susan Seven', email: 'susan@mantine.dev' },
      ],
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <TextInput placeholder="John Doe" {...form.getInputProps(\`employees.\${index}.name\`)} />
          <TextInput
            placeholder="example@mail.com"
            {...form.getInputProps(\`employees.\${index}.email\`)}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box maw={500} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination?.index! })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '' })}>
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
      employees: [
        { name: "John Doe", email: "john@mantine.dev" },
        { name: "Bill Love", email: "bill@mantine.dev" },
        { name: "Nancy Eagle", email: "nanacy@mantine.dev" },
        { name: "Lim Notch", email: "lim@mantine.dev" },
        { name: "Susan Seven", email: "susan@mantine.dev" }
      ]
    }
  });
  const fields = form.values.employees.map((_, index) => /* @__PURE__ */ React.createElement(Draggable, { key: index, index, draggableId: index.toString() }, (provided) => /* @__PURE__ */ React.createElement(Group, __spreadValues({ ref: provided.innerRef, mt: "xs" }, provided.draggableProps), /* @__PURE__ */ React.createElement(Center, __spreadValues({}, provided.dragHandleProps), /* @__PURE__ */ React.createElement(IconGripVertical, { size: "1.2rem" })), /* @__PURE__ */ React.createElement(TextInput, __spreadValues({ placeholder: "John Doe" }, form.getInputProps(`employees.${index}.name`))), /* @__PURE__ */ React.createElement(
    TextInput,
    __spreadValues({
      placeholder: "example@mail.com"
    }, form.getInputProps(`employees.${index}.email`))
  ))));
  return /* @__PURE__ */ React.createElement(Box, { maw: 500, mx: "auto" }, /* @__PURE__ */ React.createElement(
    DragDropContext,
    {
      onDragEnd: ({ destination, source }) => form.reorderListItem("employees", { from: source.index, to: destination == null ? void 0 : destination.index })
    },
    /* @__PURE__ */ React.createElement(Droppable, { droppableId: "dnd-list", direction: "vertical" }, (provided) => /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, provided.droppableProps), { ref: provided.innerRef }), fields, provided.placeholder))
  ), /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => form.insertListItem("employees", { name: "", email: "" }) }, "Add employee")), /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mt: "md" }, "Form values:"), /* @__PURE__ */ React.createElement(Code, { block: true }, JSON.stringify(form.values, null, 2)));
}
const dnd = {
  type: "code",
  component: Demo,
  code
};

export { dnd };
//# sourceMappingURL=Form.demo.dnd.js.map
