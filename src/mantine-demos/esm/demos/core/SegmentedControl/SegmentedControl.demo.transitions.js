import React from 'react';
import { Text, SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mt: 3 }, "No transitions"), /* @__PURE__ */ React.createElement(SegmentedControl, { data: ["React", "Angular", "Vue", "Svelte"], transitionDuration: 0 }), /* @__PURE__ */ React.createElement(Text, { size: "sm", fw: 500, mt: "md" }, "500ms linear transition"), /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      data: ["React", "Angular", "Vue", "Svelte"],
      transitionDuration: 500,
      transitionTimingFunction: "linear"
    }
  ));
}
const transitions = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { transitions };
//# sourceMappingURL=SegmentedControl.demo.transitions.js.map
