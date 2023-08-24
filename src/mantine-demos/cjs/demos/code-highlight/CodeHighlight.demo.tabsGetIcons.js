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

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`;
function getFileIcon(fileName) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return /* @__PURE__ */ React__default.createElement(ds.TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ React__default.createElement(ds.CssIcon, { size: 18 });
  }
  return null;
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlightTabs,
    {
      getFileIcon,
      code: [
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx"
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss"
        }
      ]
    }
  );
}
const tabsGetIcons = {
  type: "code",
  component: Demo,
  code
};

exports.tabsGetIcons = tabsGetIcons;
//# sourceMappingURL=CodeHighlight.demo.tabsGetIcons.js.map
