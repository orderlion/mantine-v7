'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var codeHighlight = require('@mantine/code-highlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlight,
    {
      code: `// Custom copy label${exampleCode}`,
      language: "tsx",
      copyLabel: "Copy button code",
      copiedLabel: "Copied!"
    }
  ), /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlight,
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

exports.copy = copy;
//# sourceMappingURL=CodeHighlight.demo.copy.js.map
