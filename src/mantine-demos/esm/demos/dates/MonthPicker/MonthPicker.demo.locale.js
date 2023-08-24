import 'dayjs/locale/ru';
import React from 'react';
import { MonthPicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(MonthPicker, { locale: "ru" });
}
const locale = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { locale };
//# sourceMappingURL=MonthPicker.demo.locale.js.map
