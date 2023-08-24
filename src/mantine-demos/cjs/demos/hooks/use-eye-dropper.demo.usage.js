'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');
var hooks = require('@mantine/hooks');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@mantine/hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}
`;
function Demo() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(null);
  const { supported, open } = hooks.useEyeDropper();
  const pickColor = async () => {
    try {
      const { sRGBHex } = await open();
      setColor(sRGBHex);
    } catch (e) {
      setError(e);
    }
  };
  if (!supported) {
    return /* @__PURE__ */ React__default.createElement(core.Text, { ta: "center" }, "EyeDropper API is not supported in your browser");
  }
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.ActionIcon, { variant: "default", onClick: pickColor }, /* @__PURE__ */ React__default.createElement(iconsReact.IconColorPicker, { size: "1rem", stroke: 1.5 })), color ? /* @__PURE__ */ React__default.createElement(core.Group, { gap: "xs" }, /* @__PURE__ */ React__default.createElement(core.ColorSwatch, { color }), /* @__PURE__ */ React__default.createElement(core.Text, null, "Picked color: ", color)) : /* @__PURE__ */ React__default.createElement(core.Text, null, "Click the button to pick color"), error && /* @__PURE__ */ React__default.createElement(core.Text, { c: "red" }, "Error: ", error == null ? void 0 : error.message));
}
const useEyeDropperUsage = {
  type: "code",
  component: Demo,
  code
};

exports.useEyeDropperUsage = useEyeDropperUsage;
//# sourceMappingURL=use-eye-dropper.demo.usage.js.map
