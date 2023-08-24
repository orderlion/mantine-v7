import React from 'react';
import { RingProgress, Text } from '@mantine/core';

const code = `
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents \u2013 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps \u2013 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other \u2013 15 Gb' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    RingProgress,
    {
      size: 170,
      thickness: 16,
      label: /* @__PURE__ */ React.createElement(Text, { size: "xs", ta: "center", px: "xs", style: { pointerEvents: "none" } }, "Hover sections to see tooltips"),
      sections: [
        { value: 40, color: "cyan", tooltip: "Documents \u2013 40 Gb" },
        { value: 25, color: "orange", tooltip: "Apps \u2013 25 Gb" },
        { value: 15, color: "grape", tooltip: "Other \u2013 15 Gb" }
      ]
    }
  );
}
const tooltip = {
  type: "code",
  code,
  centered: true,
  component: Demo
};

export { tooltip };
//# sourceMappingURL=RingProgress.demo.tooltip.js.map
