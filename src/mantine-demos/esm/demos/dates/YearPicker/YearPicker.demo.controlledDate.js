import React, { useState } from 'react';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }

    setValue(val);
  };

  return (
    <YearPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState([null, null]);
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const handleChange = (val) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 20, 1));
    }
    setValue(val);
  };
  return /* @__PURE__ */ React.createElement(
    YearPicker,
    {
      date,
      onDateChange: setDate,
      type: "range",
      value,
      onChange: handleChange
    }
  );
}
const controlledDate = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { controlledDate };
//# sourceMappingURL=YearPicker.demo.controlledDate.js.map
