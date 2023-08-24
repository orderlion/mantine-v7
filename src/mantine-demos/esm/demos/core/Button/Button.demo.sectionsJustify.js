import React from 'react';
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

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
const code = (props) => `
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="${props.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${props.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${props.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${props.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`;
function Wrapper(props) {
  const icon = /* @__PURE__ */ React.createElement(IconPhoto, { size: 14 });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, __spreadValues({ fullWidth: true, leftSection: icon, rightSection: icon, variant: "default" }, props), "Button label"), /* @__PURE__ */ React.createElement(Button, __spreadValues({ fullWidth: true, leftSection: icon, variant: "default", mt: "md" }, props), "Button label"), /* @__PURE__ */ React.createElement(Button, __spreadValues({ fullWidth: true, rightSection: icon, variant: "default", mt: "md" }, props), "Button label"), /* @__PURE__ */ React.createElement(
    Button,
    __spreadValues({
      fullWidth: true,
      rightSection: icon,
      leftSection: /* @__PURE__ */ React.createElement("span", null),
      variant: "default",
      mt: "md"
    }, props),
    "Button label"
  ));
}
const sectionsJustify = {
  type: "configurator",
  component: Wrapper,
  code,
  controls: [
    {
      type: "segmented",
      prop: "justify",
      data: ["center", "space-between"],
      initialValue: "center",
      libraryValue: "__none__"
    }
  ]
};

export { sectionsJustify };
//# sourceMappingURL=Button.demo.sectionsJustify.js.map
