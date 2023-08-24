import React from 'react';
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
function Button() {
  return <button>Click me</button>;
}
`;
const code = `
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${exampleCode}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    CodeHighlight,
    {
      code: `// Custom copy label${exampleCode}`,
      language: "tsx",
      copyLabel: "Copy button code",
      copiedLabel: "Copied!"
    }
  ), /* @__PURE__ */ React.createElement(
    CodeHighlight,
    {
      code: `// Without copy button${exampleCode}`,
      language: "tsx",
      withCopyButton: false,
      mt: "md"
    }
  ));
}
const copy = {
  type: "code",
  component: Demo,
  code
};

export { copy };
//# sourceMappingURL=CodeHighlight.demo.copy.js.map
