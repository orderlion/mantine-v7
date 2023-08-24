import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">span=auto</Grid.Col>
      <Grid.Col span={6}>span=6</Grid.Col>
      <Grid.Col span="auto">span=auto</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(ColWrapper, { span: "auto" }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 6 }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: "auto" }, "3"));
}
const auto = {
  type: "code",
  code,
  component: Demo
};

export { auto };
//# sourceMappingURL=Grid.demo.auto.js.map
