import React from 'react';
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Group, Button } from '@mantine/core';

const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!";
const code = `
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button variant="outline" color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button variant="outline" onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count).fill(0).map((_, index) => /* @__PURE__ */ React.createElement("p", { key: index }, lorem));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ScrollArea.Autosize, { mah: 300, maw: 400, mx: "auto" }, content), /* @__PURE__ */ React.createElement(Group, { justify: "center", mt: "md" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", color: "red", onClick: handlers.decrement }, "Remove paragraph"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: handlers.increment }, "Add paragraph")));
}
const maxHeight = {
  type: "code",
  component: Demo,
  code
};

export { maxHeight };
//# sourceMappingURL=ScrollArea.demo.maxHeight.js.map
