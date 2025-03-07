import React from 'react';

function FileIcon({ fileIcon, fileName, getFileIcon, className, style }) {
  if (fileIcon) {
    return /* @__PURE__ */ React.createElement("span", { className, style }, fileIcon);
  }
  if (getFileIcon && fileName) {
    return /* @__PURE__ */ React.createElement("span", { className, style }, getFileIcon(fileName));
  }
  return null;
}

export { FileIcon };
//# sourceMappingURL=FileIcon.js.map
