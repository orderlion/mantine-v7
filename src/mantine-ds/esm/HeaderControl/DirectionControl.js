import React from 'react';
import { useDirection, rem } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl.js';

function DirectionControl() {
  const { toggleDirection, dir } = useDirection();
  return /* @__PURE__ */ React.createElement(
    HeaderControl,
    {
      onClick: () => toggleDirection(),
      tooltip: `${dir === "ltr" ? "RTL" : "LTR"} direction`
    },
    dir === "rtl" ? /* @__PURE__ */ React.createElement(IconTextDirectionLtr, { style: { width: rem(22), height: rem(22) }, stroke: 1.5 }) : /* @__PURE__ */ React.createElement(IconTextDirectionRtl, { style: { width: rem(22), height: rem(22) }, stroke: 1.5 })
  );
}

export { DirectionControl };
//# sourceMappingURL=DirectionControl.js.map
