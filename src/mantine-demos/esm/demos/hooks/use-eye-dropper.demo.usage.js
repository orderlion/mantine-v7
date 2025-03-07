import React, { useState } from 'react';
import { Text, Group, ActionIcon, ColorSwatch } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';
import { useEyeDropper } from '@mantine/hooks';

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
  const [color, setColor] = useState("");
  const [error, setError] = useState(null);
  const { supported, open } = useEyeDropper();
  const pickColor = async () => {
    try {
      const { sRGBHex } = await open();
      setColor(sRGBHex);
    } catch (e) {
      setError(e);
    }
  };
  if (!supported) {
    return /* @__PURE__ */ React.createElement(Text, { ta: "center" }, "EyeDropper API is not supported in your browser");
  }
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(ActionIcon, { variant: "default", onClick: pickColor }, /* @__PURE__ */ React.createElement(IconColorPicker, { size: "1rem", stroke: 1.5 })), color ? /* @__PURE__ */ React.createElement(Group, { gap: "xs" }, /* @__PURE__ */ React.createElement(ColorSwatch, { color }), /* @__PURE__ */ React.createElement(Text, null, "Picked color: ", color)) : /* @__PURE__ */ React.createElement(Text, null, "Click the button to pick color"), error && /* @__PURE__ */ React.createElement(Text, { c: "red" }, "Error: ", error == null ? void 0 : error.message));
}
const useEyeDropperUsage = {
  type: "code",
  component: Demo,
  code
};

export { useEyeDropperUsage };
//# sourceMappingURL=use-eye-dropper.demo.usage.js.map
