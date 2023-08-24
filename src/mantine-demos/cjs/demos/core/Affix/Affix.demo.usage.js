'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [scroll, scrollTo] = hooks.useWindowScroll();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "Affix is located at the bottom of the screen, scroll to see it"), /* @__PURE__ */ React__default.createElement(core.Affix, { position: { bottom: 20, right: 20 } }, /* @__PURE__ */ React__default.createElement(core.Transition, { transition: "slide-up", mounted: scroll.y > 0 }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(
    core.Button,
    {
      leftSection: /* @__PURE__ */ React__default.createElement(iconsReact.IconArrowUp, { style: { width: core.rem(16), height: core.rem(16) } }),
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

exports.usage = usage;
//# sourceMappingURL=Affix.demo.usage.js.map
