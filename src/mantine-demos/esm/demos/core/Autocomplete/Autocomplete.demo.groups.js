import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
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
    Autocomplete,
    {
      label: "Your favorite library",
      placeholder: "Pick value or enter anything",
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
//# sourceMappingURL=Autocomplete.demo.groups.js.map
