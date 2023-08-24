import React, { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { UnstyledButton, Group, Avatar, Text, Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      {/* ... menu items */}
    </Menu>
  );
}
`;
const UserButton = forwardRef(
  (_a, ref) => {
    var _b = _a, { image, name, email, icon } = _b, others = __objRest(_b, ["image", "name", "email", "icon"]);
    return /* @__PURE__ */ React.createElement(
      UnstyledButton,
      __spreadValues({
        ref,
        style: {
          padding: "var(--mantine-spacing-md)",
          color: "var(--mantine-color-text)",
          borderRadius: "var(--mantine-radius-sm)"
        }
      }, others),
      /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Avatar, { src: image, radius: "xl" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500 }, name), /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "xs" }, email)), icon || /* @__PURE__ */ React.createElement(IconChevronRight, { size: "1rem" }))
    );
  }
);
function Demo() {
  return /* @__PURE__ */ React.createElement(Menu, { withArrow: true }, /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(
    UserButton,
    {
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
      name: "Harriette Spoonlicker",
      email: "hspoonlicker@outlook.com"
    }
  )), /* @__PURE__ */ React.createElement(DemoMenuItems, { withTarget: false }));
}
const customControl = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { customControl };
//# sourceMappingURL=Menu.demo.customControl.js.map
