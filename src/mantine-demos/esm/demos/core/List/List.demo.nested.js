import React from 'react';
import { List } from '@mantine/core';

const code = `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(List, { listStyleType: "disc" }, /* @__PURE__ */ React.createElement(List.Item, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"), /* @__PURE__ */ React.createElement(List.Item, null, "First order item"), /* @__PURE__ */ React.createElement(List.Item, null, "First order item with list", /* @__PURE__ */ React.createElement(List, { withPadding: true, listStyleType: "disc" }, /* @__PURE__ */ React.createElement(List.Item, null, "Nested item"), /* @__PURE__ */ React.createElement(List.Item, null, "Nested item"), /* @__PURE__ */ React.createElement(List.Item, null, "Nested item with list", /* @__PURE__ */ React.createElement(List, { withPadding: true, listStyleType: "disc" }, /* @__PURE__ */ React.createElement(List.Item, null, "Event more nested"), /* @__PURE__ */ React.createElement(List.Item, null, "Event more nested"))), /* @__PURE__ */ React.createElement(List.Item, null, "Nested item"))), /* @__PURE__ */ React.createElement(List.Item, null, "First order item"));
}
const nested = {
  type: "code",
  component: Demo,
  code
};

export { nested };
//# sourceMappingURL=List.demo.nested.js.map
