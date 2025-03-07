import React, { createContext, useContext } from 'react';

function createOptionalContext(initialValue = null) {
  const Context = createContext(initialValue);
  const useOptionalContext = () => useContext(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
  return [Provider, useOptionalContext];
}

export { createOptionalContext };
//# sourceMappingURL=create-optional-context.js.map
