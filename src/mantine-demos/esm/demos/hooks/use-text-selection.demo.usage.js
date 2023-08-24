import React from 'react';
import { useTextSelection } from '@mantine/hooks';

const code = `
import { useTextSelection } from '@mantine/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;
function Demo() {
  const selection = useTextSelection();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "Select some text here or anywhere on the page and it will be displayed below"), /* @__PURE__ */ React.createElement("div", null, "Selected text: ", /* @__PURE__ */ React.createElement("b", null, selection == null ? void 0 : selection.toString())));
}
const useTextSelectionUsage = {
  type: "code",
  component: Demo,
  code
};

export { useTextSelectionUsage };
//# sourceMappingURL=use-text-selection.demo.usage.js.map
