'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var nprogress = require('@mantine/nprogress');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(nprogress.NavigationProgress, null), /* @__PURE__ */ React__default.createElement(core.Group, { justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.start(), variant: "default" }, "Start"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.stop(), variant: "default" }, "Stop"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.increment(), variant: "default" }, "Increment"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.decrement(), variant: "default" }, "Decrement"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.set(50), variant: "default" }, "Set 50%"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.reset(), variant: "default" }, "Reset"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => nprogress.nprogress.complete(), variant: "default" }, "Complete")));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=NProgress.demo.usage.js.map
