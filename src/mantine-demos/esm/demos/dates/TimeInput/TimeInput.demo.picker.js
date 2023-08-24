import React, { useRef } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
import { useRef } from 'react';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`;
function Demo() {
  const ref = useRef(null);
  const pickerControl = /* @__PURE__ */ React.createElement(ActionIcon, { variant: "subtle", color: "gray", onClick: () => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.showPicker();
  } }, /* @__PURE__ */ React.createElement(IconClock, { style: { width: rem(16), height: rem(16) }, stroke: 1.5 }));
  return /* @__PURE__ */ React.createElement(TimeInput, { label: "Click icon to show browser picker", ref, rightSection: pickerControl });
}
const picker = {
  type: "code",
  centered: true,
  maxWidth: 340,
  component: Demo,
  code
};

export { picker };
//# sourceMappingURL=TimeInput.demo.picker.js.map
