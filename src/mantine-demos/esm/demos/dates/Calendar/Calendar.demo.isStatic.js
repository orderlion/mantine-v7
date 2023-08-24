import React from 'react';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Calendar,
    {
      static: true,
      renderDay: (date) => {
        const day = date.getDate();
        return /* @__PURE__ */ React.createElement(Indicator, { size: 6, color: "red", offset: -2, disabled: day !== 16 }, /* @__PURE__ */ React.createElement("div", null, day));
      }
    }
  );
}
const isStatic = {
  type: "code",
  centered: true,
  component: Demo,
  code
};

export { isStatic };
//# sourceMappingURL=Calendar.demo.isStatic.js.map
