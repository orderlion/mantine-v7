import React from 'react';
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    ActionIcon,
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
//# sourceMappingURL=ActionIcon.demo.gradient.js.map
