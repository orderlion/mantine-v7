'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var codeHighlight = require('@mantine/code-highlight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const tsxCode = `
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`;
const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;
const code = `
import { CodeHighlightTabs } from '@mantine/code-highlight';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandCodeLabel="Show full code"
      collapseCodeLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(
    codeHighlight.CodeHighlightTabs,
    {
      withExpandButton: true,
      defaultExpanded: false,
      expandCodeLabel: "Show full code",
      collapseCodeLabel: "Show less",
      code: [
        { fileName: "Demo.tsx", code: tsxCode, language: "tsx" },
        { fileName: "Demo.module.css", code: cssCode, language: "scss" }
      ]
    }
  );
}
const expand = {
  type: "code",
  component: Demo,
  code
};

exports.expand = expand;
//# sourceMappingURL=CodeHighlight.demo.expand.js.map
