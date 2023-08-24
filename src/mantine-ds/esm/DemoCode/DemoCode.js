import React from 'react';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import classes from './DemoCode.module.css.js';
import { TypeScriptIcon } from '../Icons/TypeScriptIcon.js';
import { CssIcon } from '../Icons/CssIcon.js';

function getFileIcon(fileName) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return /* @__PURE__ */ React.createElement(TypeScriptIcon, { size: 18 });
  }
  if (fileName.endsWith(".css")) {
    return /* @__PURE__ */ React.createElement(CssIcon, { size: 18 });
  }
  return null;
}
function DemoCode({ code, defaultExpanded = true }) {
  const _code = typeof code === "string" ? { code, fileName: "Demo.tsx", language: "tsx" } : code;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, _code && /* @__PURE__ */ React.createElement(
    CodeHighlightTabs,
    {
      code: _code,
      className: classes.code,
      getFileIcon,
      withExpandButton: true,
      defaultExpanded
    }
  ));
}

export { DemoCode, getFileIcon };
//# sourceMappingURL=DemoCode.js.map
