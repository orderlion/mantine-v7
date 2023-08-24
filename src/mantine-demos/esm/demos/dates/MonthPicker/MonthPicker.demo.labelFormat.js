import React, { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    MonthPicker,
    {
      decadeLabelFormat: "YY",
      yearLabelFormat: "YYYY [year]",
      value,
      onChange: setValue
    }
  );
}
const labelFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { labelFormat };
//# sourceMappingURL=MonthPicker.demo.labelFormat.js.map
