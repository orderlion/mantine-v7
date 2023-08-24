import React, { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}
`;
function Demo() {
  const [favicon, setFavicon] = useState("https://mantine.dev/favicon.svg");
  const setTwitterFavicon = () => setFavicon("https://twitter.com/favicon.ico");
  const setMantineFavicon = () => setFavicon("https://mantine.dev/favicon.svg");
  useFavicon(favicon);
  return /* @__PURE__ */ React.createElement(Group, { justify: "center" }, /* @__PURE__ */ React.createElement(Button, { onClick: setTwitterFavicon }, "Twitter favicon"), /* @__PURE__ */ React.createElement(Button, { onClick: setMantineFavicon }, "Mantine favicon"));
}
const useFaviconUsage = {
  type: "code",
  component: Demo,
  code
};

export { useFaviconUsage };
//# sourceMappingURL=use-favicon.demo.usage.js.map
