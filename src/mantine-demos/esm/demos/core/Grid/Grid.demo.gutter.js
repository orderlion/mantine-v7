import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper } from './_col-wrapper.js';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Grid, { gutter: { base: 5, xs: "md", md: "xl", xl: 50 } }, /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "1"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "2"), /* @__PURE__ */ React.createElement(ColWrapper, { span: 4 }, "3"));
}
const gutter = {
  type: "code",
  code,
  component: Demo
};

export { gutter };
//# sourceMappingURL=Grid.demo.gutter.js.map
