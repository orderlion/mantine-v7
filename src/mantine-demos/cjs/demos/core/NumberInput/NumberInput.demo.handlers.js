'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const handlersRef = React.useRef(null);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    core.NumberInput,
    {
      label: "Click buttons to change value",
      placeholder: "Click the buttons",
      handlersRef,
      step: 2,
      min: 10,
      max: 20,
      defaultValue: 15
    }
  ), /* @__PURE__ */ React__default.createElement(core.Group, { mt: "md", justify: "center" }, /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => {
    var _a;
    return (_a = handlersRef.current) == null ? void 0 : _a.decrement();
  }, variant: "default" }, "Decrement by 2"), /* @__PURE__ */ React__default.createElement(core.Button, { onClick: () => {
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

exports.handlers = handlers;
//# sourceMappingURL=NumberInput.demo.handlers.js.map
