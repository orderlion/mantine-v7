import React, { useRef } from 'react';
import { NumberInput, Group, Button } from '@mantine/core';

const code = `
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const handlersRef = useRef(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    NumberInput,
    {
      label: "Click buttons to change value",
      placeholder: "Click the buttons",
      handlersRef,
      step: 2,
      min: 10,
      max: 20,
      defaultValue: 15
    }
  ), /* @__PURE__ */ React.createElement(Group, { mt: "md", justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => {
    var _a;
    return (_a = handlersRef.current) == null ? void 0 : _a.decrement();
  }, variant: "default" }, "Decrement by 2"), /* @__PURE__ */ React.createElement(Button, { onClick: () => {
    var _a;
    return (_a = handlersRef.current) == null ? void 0 : _a.increment();
  }, variant: "default" }, "Increment by 2")));
}
const handlers = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 340
};

export { handlers };
//# sourceMappingURL=NumberInput.demo.handlers.js.map
