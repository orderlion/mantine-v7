import { createContext, useContext } from 'react';

const MantineContext = createContext(null);
function useMantineContext() {
  const ctx = useContext(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

export { MantineContext, useMantineClassNamesPrefix, useMantineContext, useMantineCssVariablesResolver, useMantineStyleNonce };
//# sourceMappingURL=Mantine.context.js.map
