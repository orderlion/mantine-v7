'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const inlineCode = `
import { Button, rem, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': rem(60),
        '--button-padding-x': rem(30),
        '--button-fz': rem(24),
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': rem(24),
        '--button-padding-x': rem(10),
        '--button-fz': rem(10),
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`;
const providerCode = `
import { Button, rem, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': rem(60),
              '--button-padding-x': rem(30),
              '--button-fz': rem(24),
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': rem(24),
              '--button-padding-x': rem(10),
              '--button-fz': rem(10),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const varsResolver = (theme, props) => {
  if (props.size === "xxl") {
    return {
      root: {
        "--button-height": core.rem(60),
        "--button-padding-x": core.rem(30),
        "--button-fz": core.rem(24)
      }
    };
  }
  if (props.size === "xxs") {
    return {
      root: {
        "--button-height": core.rem(24),
        "--button-padding-x": core.rem(10),
        "--button-fz": core.rem(10)
      }
    };
  }
  return { root: {} };
};
core.Button.extend({
  vars: (theme, props) => {
    if (props.size === "xxl") {
      return {
        root: {
          "--button-height": core.rem(60),
          "--button-padding-x": core.rem(30),
          "--button-fz": core.rem(24)
        }
      };
    }
    if (props.size === "xxs") {
      return {
        root: {
          "--button-height": core.rem(24),
          "--button-padding-x": core.rem(10),
          "--button-fz": core.rem(10)
        }
      };
    }
    return { root: {} };
  }
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Button, { vars: varsResolver, size: "xxl" }, "XXL Button"), /* @__PURE__ */ React__default.createElement(core.Button, { vars: varsResolver, size: "xxs" }, "XXS Button"));
}
const vars = {
  type: "code",
  component: Demo,
  centered: true,
  code: [
    { code: providerCode, language: "tsx", fileName: "MantineProvider.tsx" },
    { code: inlineCode, language: "tsx", fileName: "Inline.tsx" }
  ]
};

exports.vars = vars;
//# sourceMappingURL=Styles.demo.vars.js.map
