'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var StylesApiDemo_module = require('./StylesApiDemo.module.css.js');
var DemoRoot = require('../DemoRoot/DemoRoot.js');
var DemoColumns = require('../DemoColumns/DemoColumns.js');
var DemoCode = require('../DemoCode/DemoCode.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [hovered, setHovered] = React__default.useState(null);
  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => /* @__PURE__ */ React__default.createElement(
    core.UnstyledButton,
    {
      className: StylesApiDemo_module['default'].selector,
      key: selector,
      onMouseEnter: () => setHovered(selector),
      onMouseLeave: () => setHovered(null)
    },
    /* @__PURE__ */ React__default.createElement(core.Text, { mb: 2 }, selector),
    /* @__PURE__ */ React__default.createElement(core.Text, { fz: 11, c: "dimmed" }, data.selectors[selector])
  ));
  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : "";
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("style", { dangerouslySetInnerHTML: { __html: getCss(hovered) } }), /* @__PURE__ */ React__default.createElement(DemoRoot.DemoRoot, null, /* @__PURE__ */ React__default.createElement(
    DemoColumns.DemoColumns,
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
    React__default.cloneElement(children, {
      classNames: selectors.reduce((acc, item) => {
        acc[item] = item;
        return acc;
      }, {})
    })
  ), /* @__PURE__ */ React__default.createElement(
    DemoCode.DemoCode,
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

exports.StylesApiDemo = StylesApiDemo;
//# sourceMappingURL=StylesApiDemo.js.map
