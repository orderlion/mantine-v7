import React from 'react';
import { UnstyledButton, Text } from '@mantine/core';
import classes from './StylesApiDemo.module.css.js';
import { DemoRoot } from '../DemoRoot/DemoRoot.js';
import { DemoColumns } from '../DemoColumns/DemoColumns.js';
import { DemoCode } from '../DemoCode/DemoCode.js';

function getCss(hovered) {
  return hovered ? `.${hovered} {
  outline: 2px solid #fe0d45;
  outline-offset: -2px; 
}
` : "/*\n * Hover over selectors to apply outline styles\n *\n */";
}
function StylesApiDemo({
  data,
  code,
  withPadding,
  maxWidth,
  centered,
  children,
  dimmed,
  striped
}) {
  const [hovered, setHovered] = React.useState(null);
  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => /* @__PURE__ */ React.createElement(
    UnstyledButton,
    {
      className: classes.selector,
      key: selector,
      onMouseEnter: () => setHovered(selector),
      onMouseLeave: () => setHovered(null)
    },
    /* @__PURE__ */ React.createElement(Text, { mb: 2 }, selector),
    /* @__PURE__ */ React.createElement(Text, { fz: 11, c: "dimmed" }, data.selectors[selector])
  ));
  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : "";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", { dangerouslySetInnerHTML: { __html: getCss(hovered) } }), /* @__PURE__ */ React.createElement(DemoRoot, null, /* @__PURE__ */ React.createElement(
    DemoColumns,
    {
      withPadding,
      maxWidth,
      centered,
      controls,
      dimmed,
      striped,
      title: "Component Styles API",
      description: "Hover over selectors to highlight corresponding elements"
    },
    React.cloneElement(children, {
      classNames: selectors.reduce((acc, item) => {
        acc[item] = item;
        return acc;
      }, {})
    })
  ), /* @__PURE__ */ React.createElement(
    DemoCode,
    {
      code: [
        { fileName: "Demo.module.css", language: "css", code: getCss(hovered) },
        {
          fileName: "Demo.tsx",
          language: "tsx",
          code: code.replace("{{props}}", classNamesProp)
        }
      ]
    }
  )));
}

export { StylesApiDemo };
//# sourceMappingURL=StylesApiDemo.js.map
