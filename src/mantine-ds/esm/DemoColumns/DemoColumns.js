import React from 'react';
import { Text } from '@mantine/core';
import classes from './DemoColumns.module.css.js';
import { DemoArea } from '../DemoArea/DemoArea.js';

function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  minHeight,
  title,
  description,
  controls,
  dimmed,
  striped
}) {
  return /* @__PURE__ */ React.createElement("div", { className: classes.columns }, /* @__PURE__ */ React.createElement(
    DemoArea,
    {
      withPadding,
      maxWidth,
      minHeight,
      centered,
      dimmed,
      striped
    },
    children
  ), /* @__PURE__ */ React.createElement("div", { className: classes.controls }, title && /* @__PURE__ */ React.createElement("div", { className: classes.header }, /* @__PURE__ */ React.createElement(Text, { fw: 500, fz: "sm", mb: 5 }, title), description && /* @__PURE__ */ React.createElement(Text, { c: "dimmed", fz: 11, lh: 1.45 }, description)), controls));
}

export { DemoColumns };
//# sourceMappingURL=DemoColumns.js.map
