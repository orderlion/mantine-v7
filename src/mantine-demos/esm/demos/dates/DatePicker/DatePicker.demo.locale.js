import 'dayjs/locale/ru';
import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DatePicker, { locale: "ru" });
}
const locale = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { locale };
//# sourceMappingURL=DatePicker.demo.locale.js.map
