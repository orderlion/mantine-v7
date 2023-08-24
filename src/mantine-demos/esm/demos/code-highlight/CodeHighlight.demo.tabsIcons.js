import React from 'react';
import { TypeScriptIcon, CssIcon } from '@mantine/ds';
import { CodeHighlightTabs } from '@mantine/code-highlight';

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
  return /* @__PURE__ */ React.createElement(
    CodeHighlightTabs,
    {
      code: [
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx",
          icon: /* @__PURE__ */ React.createElement(TypeScriptIcon, { size: 18 })
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss",
          icon: /* @__PURE__ */ React.createElement(CssIcon, { size: 18 })
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

export { tabsIcons };
//# sourceMappingURL=CodeHighlight.demo.tabsIcons.js.map
