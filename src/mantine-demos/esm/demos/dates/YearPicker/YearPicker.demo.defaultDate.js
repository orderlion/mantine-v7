import React, { useState } from 'react';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker defaultDate={new Date(2040, 1)} value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(YearPicker, { defaultDate: new Date(2040, 1), value, onChange: setValue });
}
const defaultDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { defaultDate };
//# sourceMappingURL=YearPicker.demo.defaultDate.js.map
