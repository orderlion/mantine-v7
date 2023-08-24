import React, { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { rem } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;
  return (
    <${name}
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState(null);
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        leftSection: /* @__PURE__ */ React.createElement(IconCalendar, { style: { width: rem(18), height: rem(18) }, stroke: 1.5 }),
        leftSectionPointerEvents: "none",
        label: "Pick date",
        placeholder: "Pick date",
        value,
        onChange: setValue
      }
    );
  };
}
function getPickerInputIconDemo(Component) {
  return {
    type: "code",
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputIconDemo };
//# sourceMappingURL=picker-input-icon.demo.js.map
