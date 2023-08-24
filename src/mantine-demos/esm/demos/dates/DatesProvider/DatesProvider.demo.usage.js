import 'dayjs/locale/ru';
import React from 'react';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatesProvider, { settings: { locale: "ru", firstDayOfWeek: 0, weekendDays: [0] } }, /* @__PURE__ */ React.createElement(MonthPickerInput, { label: "Pick month", placeholder: "Pick month" }), /* @__PURE__ */ React.createElement(DatePickerInput, { mt: "md", label: "Pick date", placeholder: "Pick date" }));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=DatesProvider.demo.usage.js.map
