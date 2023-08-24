import React from 'react';
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    ThemeIcon,
    {
      variant: "gradient",
      size: "xl",
      "aria-label": "Gradient action icon",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    /* @__PURE__ */ React.createElement(IconHeart, null)
  );
}
const gradient = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: gradientControls
};

export { gradient };
//# sourceMappingURL=ThemeIcon.demo.gradient.js.map
