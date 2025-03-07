import React, { useState } from 'react';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(YearPicker, { decadeLabelFormat: "YY", value, onChange: setValue });
}
const decadeLabelFormat = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { decadeLabelFormat };
//# sourceMappingURL=YearPicker.demo.decadeLabelFormat.js.map
