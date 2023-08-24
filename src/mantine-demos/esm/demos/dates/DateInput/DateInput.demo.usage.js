import React, { useState } from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(DateInput, { value, onChange: setValue, label: "Date input", placeholder: "Date input" });
}
const usage = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=DateInput.demo.usage.js.map
