import React from 'react';
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const code = `
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Rating, { emptySymbol: /* @__PURE__ */ React.createElement(IconSun, { size: "1rem" }), fullSymbol: /* @__PURE__ */ React.createElement(IconMoon, { size: "1rem" }) });
}
const symbol = {
  type: "code",
  component: Demo,
  code,
  centered: true
};

export { symbol };
//# sourceMappingURL=Rating.demo.symbol.js.map
