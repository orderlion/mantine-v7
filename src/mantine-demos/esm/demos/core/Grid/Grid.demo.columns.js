import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, { columns: 24 }, /* @__PURE__ */ React.createElement(ColWrapper, { span: 12 }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 6 }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 6 }, "3"));
}
const columns = {
  type: "code",
  code,
  component: Demo
};

export { columns };
//# sourceMappingURL=Grid.demo.columns.js.map
