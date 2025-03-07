import React from 'react';
import { Timeline, Text, Avatar, ThemeIcon } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

const code = `
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size="0.8rem" />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size="0.8rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Timeline, { bulletSize: 24 }, /* @__PURE__ */ React.createElement(Timeline.Item, { title: "Default bullet" }, /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "Default bullet without anything")), /* @__PURE__ */ React.createElement(
    Timeline.Item,
    {
      title: "Avatar",
      bullet: /* @__PURE__ */ React.createElement(
        Avatar,
        {
          size: 22,
          radius: "xl",
          src: "https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        }
      )
    },
    /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "Timeline bullet as avatar image")
  ), /* @__PURE__ */ React.createElement(Timeline.Item, { title: "Icon", bullet: /* @__PURE__ */ React.createElement(IconSun, { size: "0.8rem" }) }, /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "Timeline bullet as icon")), /* @__PURE__ */ React.createElement(
    Timeline.Item,
    {
      title: "ThemeIcon",
      bullet: /* @__PURE__ */ React.createElement(
        ThemeIcon,
        {
          size: 22,
          variant: "gradient",
          gradient: { from: "lime", to: "cyan" },
          radius: "xl"
        },
        /* @__PURE__ */ React.createElement(IconVideo, { size: "0.8rem" })
      )
    },
    /* @__PURE__ */ React.createElement(Text, { c: "dimmed", size: "sm" }, "Timeline bullet as ThemeIcon component")
  ));
}
const bullet = {
  type: "code",
  centered: true,
  maxWidth: 320,
  component: Demo,
  code
};

export { bullet };
//# sourceMappingURL=Timeline.demo.bullet.js.map
