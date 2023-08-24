import React from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Text, Affix, Transition, Button, rem } from '@mantine/core';

const code = `
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = useWindowScroll();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { ta: "center" }, "Affix is located at the bottom of the screen, scroll to see it"), /* @__PURE__ */ React.createElement(Affix, { position: { bottom: 20, right: 20 } }, /* @__PURE__ */ React.createElement(Transition, { transition: "slide-up", mounted: scroll.y > 0 }, (transitionStyles) => /* @__PURE__ */ React.createElement(
    Button,
    {
      leftSection: /* @__PURE__ */ React.createElement(IconArrowUp, { style: { width: rem(16), height: rem(16) } }),
      style: transitionStyles,
      onClick: () => scrollTo({ y: 0 })
    },
    "Scroll to top"
  ))));
}
const usage = {
  type: "code",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=Affix.demo.usage.js.map
