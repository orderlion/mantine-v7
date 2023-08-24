import React from 'react';
import { useDirection, ActionIcon } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

const code = `
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`;
function Demo() {
  const { toggleDirection, dir } = useDirection();
  return /* @__PURE__ */ React.createElement(ActionIcon, { onClick: () => toggleDirection(), variant: "default", radius: "md", size: "lg" }, dir === "rtl" ? /* @__PURE__ */ React.createElement(IconTextDirectionLtr, { stroke: 1.5 }) : /* @__PURE__ */ React.createElement(IconTextDirectionRtl, { stroke: 1.5 }));
}
const directionControl = {
  type: "code",
  component: Demo,
  centered: true,
  code
};

export { directionControl };
//# sourceMappingURL=Styles.demo.directionControl.js.map
