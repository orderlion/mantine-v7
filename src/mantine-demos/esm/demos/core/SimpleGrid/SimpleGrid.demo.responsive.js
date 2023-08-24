import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { defaultItems } from './_item.js';

const code = `
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    SimpleGrid,
    {
      cols: { base: 1, sm: 2, lg: 5 },
      spacing: { base: 10, sm: "xl" },
      verticalSpacing: { base: "md", sm: "xl" }
    },
    defaultItems
  );
}
const responsive = {
  type: "code",
  component: Demo,
  code
};

export { responsive };
//# sourceMappingURL=SimpleGrid.demo.responsive.js.map
