'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ds = require('@mantine/ds');
var codeHighlight = require('@mantine/code-highlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;
const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;
const code = `
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantine/ds';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={18} />;
  const cssIcon = <CssIcon size={18} />;

  return (
    <CodeHighlightTabs
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlightTabs,
    {
      code: [
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx",
          icon: /* @__PURE__ */ React__default.createElement(ds.TypeScriptIcon, { size: 18 })
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss",
          icon: /* @__PURE__ */ React__default.createElement(ds.CssIcon, { size: 18 })
        }
      ]
    }
  );
}
const tabsIcons = {
  type: "code",
  component: Demo,
  code
};

exports.tabsIcons = tabsIcons;
//# sourceMappingURL=CodeHighlight.demo.tabsIcons.js.map
