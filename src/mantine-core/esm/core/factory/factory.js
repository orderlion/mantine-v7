import { forwardRef } from 'react';

function identity(value) {
  return value;
}
function factory(ui) {
  const Component = forwardRef(ui);
  Component.extend = identity;
  return Component;
}

export { factory, identity };
//# sourceMappingURL=factory.js.map
