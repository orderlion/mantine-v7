import React from 'react';
import { Rating } from '@mantine/core';

const code = `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Rating, { value: 3.5, fractions: 2, readOnly: true });
}
const readOnly = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { readOnly };
//# sourceMappingURL=Rating.demo.readOnly.js.map
