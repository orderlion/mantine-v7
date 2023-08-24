import React from 'react';
import { Tooltip, Button } from '@mantine/core';
import { FLOATING_POSITION_DATA } from '../../../shared/floating-position-data.js';

const code = (props) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${props.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${props.mainAxis}, crossAxis: ${props.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Wrapper(props) {
  return /* @__PURE__ */ React.createElement(
    Tooltip,
    {
      position: props.position,
      opened: true,
      label: "Tooltip",
      offset: { mainAxis: props.mainAxis, crossAxis: props.crossAxis }
    },
    /* @__PURE__ */ React.createElement(Button, null, "Button with tooltip")
  );
}
const offsetAxis = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "select",
      prop: "position",
      initialValue: "top",
      data: FLOATING_POSITION_DATA,
      libraryValue: null
    },
    { type: "number", prop: "mainAxis", initialValue: 5, libraryValue: null, min: -50, max: 50 },
    { type: "number", prop: "crossAxis", initialValue: 0, libraryValue: null, min: -50, max: 50 }
  ]
};

export { offsetAxis };
//# sourceMappingURL=Tooltip.demo.offsetAxis.js.map
