import React from 'react';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';
import { rem, SegmentedControl, VisuallyHidden } from '@mantine/core';

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
const code = `
import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
`;
function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: "block" },
    stroke: 1.5
  };
  return /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      data: [
        {
          value: "preview",
          label: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconEye, __spreadValues({}, iconProps)), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Preview"))
        },
        {
          value: "code",
          label: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconCode, __spreadValues({}, iconProps)), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Code"))
        },
        {
          value: "export",
          label: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconExternalLink, __spreadValues({}, iconProps)), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Export"))
        }
      ]
    }
  );
}
const iconsOnly = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { iconsOnly };
//# sourceMappingURL=SegmentedControl.demo.iconsOnly.js.map
