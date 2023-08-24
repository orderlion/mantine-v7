import React from 'react';
import { Badge } from '@mantine/core';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient badge
    </Badge>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    Badge,
    {
      size: "xl",
      variant: "gradient",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    "Gradient badge"
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
//# sourceMappingURL=Badge.demo.gradient.js.map
