import React from 'react';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { List, ThemeIcon } from '@mantine/core';

const code = `
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    List,
    {
      spacing: "xs",
      size: "sm",
      center: true,
      icon: /* @__PURE__ */ React.createElement(ThemeIcon, { color: "teal", size: 24, radius: "xl" }, /* @__PURE__ */ React.createElement(IconCircleCheck, { size: "1rem" }))
    },
    /* @__PURE__ */ React.createElement(List.Item, null, "Clone or download repository from GitHub"),
    /* @__PURE__ */ React.createElement(List.Item, null, "Install dependencies with yarn"),
    /* @__PURE__ */ React.createElement(List.Item, null, "To start development server run npm start command"),
    /* @__PURE__ */ React.createElement(List.Item, null, "Run tests to make sure your changes do not break the build"),
    /* @__PURE__ */ React.createElement(
      List.Item,
      {
        icon: /* @__PURE__ */ React.createElement(ThemeIcon, { color: "blue", size: 24, radius: "xl" }, /* @__PURE__ */ React.createElement(IconCircleDashed, { size: "1rem" }))
      },
      "Submit a pull request once you are done"
    )
  );
}
const icon = {
  type: "code",
  centered: true,
  maxWidth: 500,
  component: Demo,
  code
};

export { icon };
//# sourceMappingURL=List.demo.icon.js.map
