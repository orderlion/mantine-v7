import React from 'react';
import { Button } from '@mantine/core';
import { gradientControls } from '../../../shared/gradient-controls.js';

const code = (props) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${props.gradientFrom}', to: '${props.gradientTo}', deg: ${props.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "gradient",
      gradient: { from: props.gradientFrom, to: props.gradientTo, deg: props.gradientDegree }
    },
    "Gradient button"
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
//# sourceMappingURL=Button.demo.gradient.js.map
