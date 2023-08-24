import React from 'react';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(
    Select,
    {
      label: "Your favorite library",
      placeholder: "Pick value",
      data: [
        { group: "Frontend", items: ["React", "Angular"] },
        { group: "Backend", items: ["Express", "Django"] }
      ]
    }
  );
}
const groups = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 340,
  centered: true
};

export { groups };
//# sourceMappingURL=Select.demo.groups.js.map
