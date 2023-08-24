import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(
    DatePicker,
    {
      defaultLevel: "decade",
      decadeLabelFormat: "YY",
      yearLabelFormat: "YYYY [year]",
      monthLabelFormat: "MM/YY",
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
//# sourceMappingURL=DatePicker.demo.labelFormat.js.map
