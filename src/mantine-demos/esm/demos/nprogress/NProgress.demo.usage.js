import React from 'react';
import { Group, Button } from '@mantine/core';
import { NavigationProgress, nprogress } from '@mantine/nprogress';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavigationProgress, null), /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.start(), variant: "default" }, "Start"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.stop(), variant: "default" }, "Stop"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.increment(), variant: "default" }, "Increment"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.decrement(), variant: "default" }, "Decrement"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.set(50), variant: "default" }, "Set 50%"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.reset(), variant: "default" }, "Reset"), /* @__PURE__ */ React.createElement(Button, { onClick: () => nprogress.complete(), variant: "default" }, "Complete")));
}
const usage = {
  type: "code",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=NProgress.demo.usage.js.map
