import React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const getCodeTemplate = (component) => `import { ${component} } from '@mantine/dates';

function Demo() {
  return <${component} defaultValue={new Date()}{{props}} />;
}
`;
function getDemo(Component) {
  return (props) => /* @__PURE__ */ React.createElement(Component, __spreadValues({ defaultValue: /* @__PURE__ */ new Date() }, props));
}
function getPickerSizeConfiguratorDemo(Component) {
  return {
    type: "configurator",
    centered: true,
    code: getCodeTemplate(Component.displayName.replace("@mantine/dates/", "")),
    controls: [{ prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" }],
    component: getDemo(Component)
  };
}

export { getPickerSizeConfiguratorDemo };
//# sourceMappingURL=picker-sizeConfigurator.demo.js.map
