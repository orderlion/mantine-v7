import React from 'react';
import { NativeSelect } from '@mantine/core';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NativeSelect, { label: "With children options" }, /* @__PURE__ */ React.createElement("optgroup", { label: "Frontend libraries" }, /* @__PURE__ */ React.createElement("option", { value: "react" }, "React"), /* @__PURE__ */ React.createElement("option", { value: "angular" }, "Angular"), /* @__PURE__ */ React.createElement("option", { value: "vue", disabled: true }, "Vue")), /* @__PURE__ */ React.createElement("optgroup", { label: "Backend libraries" }, /* @__PURE__ */ React.createElement("option", { value: "express" }, "Express"), /* @__PURE__ */ React.createElement("option", { value: "koa" }, "Koa"), /* @__PURE__ */ React.createElement("option", { value: "django" }, "Django")));
}
const options = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code
};

export { options };
//# sourceMappingURL=NativeSelect.demo.options.js.map
