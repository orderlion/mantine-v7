import React, { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate={new Date(2022, 1)}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2022, 8, 1)}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    MonthPicker,
    {
      value,
      onChange: setValue,
      defaultDate: new Date(2022, 1),
      minDate: new Date(2022, 1, 1),
      maxDate: new Date(2022, 8, 1)
    }
  );
}
const minMax = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { minMax };
//# sourceMappingURL=MonthPicker.demo.minMax.js.map
