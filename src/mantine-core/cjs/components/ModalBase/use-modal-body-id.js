'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ModalBase_context = require('./ModalBase.context.js');

function useModalBodyId() {
  const ctx = ModalBase_context.useModalBaseContext();
  React.useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}

exports.useModalBodyId = useModalBodyId;
//# sourceMappingURL=use-modal-body-id.js.map
