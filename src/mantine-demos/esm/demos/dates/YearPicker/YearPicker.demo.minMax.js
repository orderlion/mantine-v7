import React, { useState } from 'react';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    YearPicker,
    {
      value,
      onChange: setValue,
      minDate: new Date(2021, 1),
      maxDate: new Date(2028, 1)
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
//# sourceMappingURL=YearPicker.demo.minMax.js.map
