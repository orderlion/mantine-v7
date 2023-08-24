import React from 'react';
import { SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(SegmentedControl, { readOnly: true, defaultValue: "Angular", data: ["React", "Angular", "Vue"] });
}
const readOnly = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { readOnly };
//# sourceMappingURL=SegmentedControl.demo.readOnly.js.map
