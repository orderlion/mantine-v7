import React from 'react';
import { Card, Group, Text, Menu, ActionIcon, rem, Image, SimpleGrid } from '@mantine/core';
import { IconDots, IconFileZip, IconEye, IconTrash } from '@tabler/icons-react';

const code = `
import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const images = [
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
];

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
`;
const images = [
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
];
function Demo() {
  return /* @__PURE__ */ React.createElement(Card, { withBorder: true, shadow: "sm", radius: "md" }, /* @__PURE__ */ React.createElement(Card.Section, { withBorder: true, inheritPadding: true, py: "xs" }, /* @__PURE__ */ React.createElement(Group, { justify: "space-between" }, /* @__PURE__ */ React.createElement(Text, { fw: 500 }, "Review pictures"), /* @__PURE__ */ React.createElement(Menu, { withinPortal: true, position: "bottom-end", shadow: "sm" }, /* @__PURE__ */ React.createElement(Menu.Target, null, /* @__PURE__ */ React.createElement(ActionIcon, { variant: "subtle", color: "gray" }, /* @__PURE__ */ React.createElement(IconDots, { style: { width: rem(16), height: rem(16) } }))), /* @__PURE__ */ React.createElement(Menu.Dropdown, null, /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconFileZip, { style: { width: rem(14), height: rem(14) } }) }, "Download zip"), /* @__PURE__ */ React.createElement(Menu.Item, { leftSection: /* @__PURE__ */ React.createElement(IconEye, { style: { width: rem(14), height: rem(14) } }) }, "Preview all"), /* @__PURE__ */ React.createElement(
    Menu.Item,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconTrash, { style: { width: rem(14), height: rem(14) } }),
      color: "red"
    },
    "Delete all"
  ))))), /* @__PURE__ */ React.createElement(Text, { mt: "sm", c: "dimmed", size: "sm" }, /* @__PURE__ */ React.createElement(Text, { span: true, inherit: true, c: "var(--mantine-color-anchor)" }, "200+ images uploaded"), " ", "since last visit, review them to select which one should be added to your gallery"), /* @__PURE__ */ React.createElement(Card.Section, { mt: "sm" }, /* @__PURE__ */ React.createElement(Image, { src: "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" })), /* @__PURE__ */ React.createElement(Card.Section, { inheritPadding: true, mt: "sm", pb: "md" }, /* @__PURE__ */ React.createElement(SimpleGrid, { cols: 3 }, images.map((image) => /* @__PURE__ */ React.createElement(Image, { src: image, key: image, radius: "sm" })))));
}
const section = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  dimmed: true
};

export { section };
//# sourceMappingURL=Card.demo.section.js.map
