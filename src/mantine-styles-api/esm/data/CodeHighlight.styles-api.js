const CodeHighlightTabsStylesApi = {
  selectors: {
    root: "Root element",
    pre: "Pre element, contains code element",
    codeWrapper: "Wrapper around code element, used for expand/collapse logic",
    code: "Code element, contains highlighted code",
    header: "Header element, contains copy button and files names",
    controls: "Controls container, contains control buttons (copy/collapse, etc.)",
    control: "Control button, copy/collapse, etc.",
    files: "Files names list",
    file: "File name",
    fileIcon: "File icon",
    showCodeButton: "Button that reveals full code when it is collapsed"
  },
  vars: {}
};
const InlineCodeHighlightStylesApi = {
  selectors: {
    code: "Root element"
  },
  vars: {}
};
const CodeHighlightStylesApi = {
  selectors: {
    root: "Root element",
    pre: "Pre element, contains code element",
    code: "Code element",
    copy: "Copy button"
  },
  vars: {}
};

export { CodeHighlightStylesApi, CodeHighlightTabsStylesApi, InlineCodeHighlightStylesApi };
//# sourceMappingURL=CodeHighlight.styles-api.js.map
