import React from 'react';
import { Text } from '@mantine/core';
import { useDocumentVisibility, useDocumentTitle } from '@mantine/hooks';

const code = `
import { Text } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;
function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return /* @__PURE__ */ React.createElement(Text, null, "Switch to another tab to see document title change");
}
const useDocumentVisibilityDemo = {
  type: "code",
  code,
  component: Demo
};

export { useDocumentVisibilityDemo };
//# sourceMappingURL=use-document-visibility.demo.usage.js.map
