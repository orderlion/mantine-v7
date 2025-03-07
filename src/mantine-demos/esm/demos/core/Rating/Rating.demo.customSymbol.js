import React from 'react';
import { Rating, rem } from '@mantine/core';
import { IconMoodCrazyHappy, IconMoodHappy, IconMoodSmile, IconMoodSad, IconMoodCry } from '@tabler/icons-react';

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
  width: rem(24),
  height: rem(24),
  color: color ? `var(--mantine-color-${color}-7)` : void 0
});
const getEmptyIcon = (value) => {
  const iconStyle = getIconStyle();
  switch (value) {
    case 1:
      return /* @__PURE__ */ React.createElement(IconMoodCry, { style: iconStyle });
    case 2:
      return /* @__PURE__ */ React.createElement(IconMoodSad, { style: iconStyle });
    case 3:
      return /* @__PURE__ */ React.createElement(IconMoodSmile, { style: iconStyle });
    case 4:
      return /* @__PURE__ */ React.createElement(IconMoodHappy, { style: iconStyle });
    case 5:
      return /* @__PURE__ */ React.createElement(IconMoodCrazyHappy, { style: iconStyle });
    default:
      return null;
  }
};
const getFullIcon = (value) => {
  switch (value) {
    case 1:
      return /* @__PURE__ */ React.createElement(IconMoodCry, { style: getIconStyle("red") });
    case 2:
      return /* @__PURE__ */ React.createElement(IconMoodSad, { style: getIconStyle("orange") });
    case 3:
      return /* @__PURE__ */ React.createElement(IconMoodSmile, { style: getIconStyle("yellow") });
    case 4:
      return /* @__PURE__ */ React.createElement(IconMoodHappy, { style: getIconStyle("lime") });
    case 5:
      return /* @__PURE__ */ React.createElement(IconMoodCrazyHappy, { style: getIconStyle("green") });
    default:
      return null;
  }
};
function Demo() {
  return /* @__PURE__ */ React.createElement(Rating, { emptySymbol: getEmptyIcon, fullSymbol: getFullIcon, highlightSelectedOnly: true });
}
const customSymbol = {
  type: "code",
  code,
  component: Demo,
  centered: true
};

export { customSymbol };
//# sourceMappingURL=Rating.demo.customSymbol.js.map
