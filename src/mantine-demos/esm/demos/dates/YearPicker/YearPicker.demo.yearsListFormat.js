import React, { useState } from 'react';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(YearPicker, { yearsListFormat: "YY", value, onChange: setValue });
}
const yearsListFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { yearsListFormat };
//# sourceMappingURL=YearPicker.demo.yearsListFormat.js.map
