import React from 'react';
import { Card, Image, Group, Text, Badge, Button } from '@mantine/core';

const code = `
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Card, { shadow: "sm", padding: "lg", radius: "md", withBorder: true }, /* @__PURE__ */ React.createElement(Card.Section, null, /* @__PURE__ */ React.createElement(
    Image,
    {
      src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      height: 160,
      alt: "Norway"
    }
  )), /* @__PURE__ */ React.createElement(Group, { justify: "space-between", mt: "md", mb: "xs" }, /* @__PURE__ */ React.createElement(Text, { fw: 500 }, "Norway Fjord Adventures"), /* @__PURE__ */ React.createElement(Badge, { color: "pink", variant: "light" }, "On Sale")), /* @__PURE__ */ React.createElement(Text, { size: "sm", c: "dimmed" }, "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"), /* @__PURE__ */ React.createElement(Button, { variant: "light", color: "blue", fullWidth: true, mt: "md", radius: "md" }, "Book classic tour now"));
}
const usage = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
  dimmed: true
};

export { usage };
//# sourceMappingURL=Card.demo.usage.js.map
