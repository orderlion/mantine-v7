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
    return /* @__PURE__ */ React.createElement(TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ React.createElement(CssIcon, { size: 18 });
  }
  return null;
}
function Demo() {
  return /* @__PURE__ */ React.createElement(
    CodeHighlightTabs,
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

export { tabsGetIcons };
//# sourceMappingURL=CodeHighlight.demo.tabsGetIcons.js.map
