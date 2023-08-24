import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { Group, Text, Button } from '@mantine/core';

const code = `
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group justify="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Text, null, "Scroll position x: ", scroll.x, ", y: ", scroll.y), /* @__PURE__ */ React.createElement(Button, { onClick: () => scrollTo({ y: 0 }) }, "Scroll to top"));
}
const useWindowScrollDemo = {
  type: "code",
  code,
  component: Demo
};

export { useWindowScrollDemo };
//# sourceMappingURL=use-window-scroll.demo.usage.js.map
