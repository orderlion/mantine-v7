import dayjs from 'dayjs';
import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    DateInput,
    {
      minDate: /* @__PURE__ */ new Date(),
      maxDate: dayjs(/* @__PURE__ */ new Date()).add(1, "month").toDate(),
      label: "Date input",
      placeholder: "Date input"
    }
  );
}
const minMax = {
  type: "code",
  centered: true,
  maxWidth: 400,
  component: Demo,
  code
};

export { minMax };
//# sourceMappingURL=DateInput.demo.minMax.js.map
