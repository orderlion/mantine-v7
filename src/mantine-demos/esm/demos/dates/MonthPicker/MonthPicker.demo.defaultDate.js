import React, { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(MonthPicker, { defaultDate: new Date(2015, 1), value, onChange: setValue });
}
const defaultDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { defaultDate };
//# sourceMappingURL=MonthPicker.demo.defaultDate.js.map
