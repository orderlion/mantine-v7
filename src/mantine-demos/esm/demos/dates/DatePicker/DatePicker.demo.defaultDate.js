import React, { useState } from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker defaultDate={new Date(2015, 1)} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(DatePicker, { defaultDate: new Date(2015, 1), value, onChange: setValue });
}
const defaultDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { defaultDate };
//# sourceMappingURL=DatePicker.demo.defaultDate.js.map
