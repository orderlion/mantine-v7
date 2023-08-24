import React from 'react';
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

const code = `
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input<any> component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Input, { component: IMaskInput, mask: "+7 (000) 000-00-00", placeholder: "Your phone" });
}
const mask = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { mask };
//# sourceMappingURL=Input.demo.mask.js.map
