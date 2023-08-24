import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "3"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "4"));
}
const rows = {
  type: "code",
  code,
  component: Demo
};

export { rows };
//# sourceMappingURL=Grid.demo.rows.js.map
