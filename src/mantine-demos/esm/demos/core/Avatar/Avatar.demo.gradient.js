import React from 'react';
import { Avatar } from '@mantine/core';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      GR
    </Avatar>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    Avatar,
    {
      size: "xl",
      variant: "gradient",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    "GR"
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
//# sourceMappingURL=Avatar.demo.gradient.js.map
