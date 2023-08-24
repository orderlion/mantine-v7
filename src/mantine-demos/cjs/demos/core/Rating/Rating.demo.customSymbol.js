'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Rating, rem } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: rem(24),
  height: rem(24),
  color: color ? \`var(--mantine-color-\${color}-7)\` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle('red')} />;
    case 2:
      return <IconMoodSad style={getIconStyle('orange')} />;
    case 3:
      return <IconMoodSmile style={getIconStyle('yellow')} />;
    case 4:
      return <IconMoodHappy style={getIconStyle('lime')} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
`;
const getIconStyle = (color) => ({
  width: core.rem(24),
  height: core.rem(24),
  color: color ? `var(--mantine-color-${color}-7)` : void 0
});
const getEmptyIcon = (value) => {
  const iconStyle = getIconStyle();
  switch (value) {
    case 1:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCry, { style: iconStyle });
    case 2:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSad, { style: iconStyle });
    case 3:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSmile, { style: iconStyle });
    case 4:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodHappy, { style: iconStyle });
    case 5:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCrazyHappy, { style: iconStyle });
    default:
      return null;
  }
};
const getFullIcon = (value) => {
  switch (value) {
    case 1:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCry, { style: getIconStyle("red") });
    case 2:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSad, { style: getIconStyle("orange") });
    case 3:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSmile, { style: getIconStyle("yellow") });
    case 4:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodHappy, { style: getIconStyle("lime") });
    case 5:
      return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCrazyHappy, { style: getIconStyle("green") });
    default:
      return null;
  }
};
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Rating, { emptySymbol: getEmptyIcon, fullSymbol: getFullIcon, highlightSelectedOnly: true });
}
const customSymbol = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

exports.customSymbol = customSymbol;
//# sourceMappingURL=Rating.demo.customSymbol.js.map
