import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    NativeSelect,
    {
      data: [
        {
          group: "Frontend libraries",
          items: [
            { label: "React", value: "react" },
            { label: "Angular", value: "angular" },
            { label: "Vue", value: "vue", disabled: true }
          ]
        },
        {
          group: "Backend libraries",
          items: [
            { label: "Express", value: "express" },
            { label: "Koa", value: "koa" },
            { label: "Django", value: "django" }
          ]
        }
      ]
    }
  );
}
const data = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { data };
//# sourceMappingURL=NativeSelect.demo.data.js.map
