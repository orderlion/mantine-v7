import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, { span: 3, order: { base: 2, sm: 1, lg: 3 } }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 3, order: { base: 3, sm: 2, lg: 2 } }, "3"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 3, order: { base: 1, sm: 3, lg: 1 } }, "1"));
}
const order = {
  type: "code",
  code,
  component: Demo
};

export { order };
//# sourceMappingURL=Grid.demo.order.js.map
