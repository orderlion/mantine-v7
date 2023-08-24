'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var stylesApi$1 = require('@mantine/styles-api');
var _content = require('./_content.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const code = `
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}{{props}}>
        <Stepper.Step label="First step" description="Create an account" loading>
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`;
function Demo(props) {
  const [active, setActive] = React.useState(1);
  const nextStep = () => setActive((current) => current < 2 ? current + 1 : current);
  const prevStep = () => setActive((current) => current > 0 ? current - 1 : current);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Stepper, __spreadValues({ active, onStepClick: setActive }, props), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "First step", description: "Create an account", loading: true }, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 1 content: Create an account")), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, { label: "Second step", description: "Verify email" }, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Step 2 content: Verify email")), /* @__PURE__ */ React__default.createElement(core.Stepper.Completed, null, /* @__PURE__ */ React__default.createElement(_content.Content, null, "Completed, click back button to get to previous step"))), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center", mt: "xl" }, /* @__PURE__ */ React__default.createElement(core.Button, { variant: "default", onClick: prevStep }, "Back"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: nextStep }, "Next step")));
}
const stylesApi = {
  type: "styles-api",
  centered: true,
  maxWidth: "100%",
  data: stylesApi$1.StepperStylesApi,
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Stepper.demo.stylesApi.js.map
