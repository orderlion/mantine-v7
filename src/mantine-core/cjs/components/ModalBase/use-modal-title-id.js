'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ModalBase_context = require('./ModalBase.context.js');

function useModalTitle() {
  const ctx = ModalBase_context.useModalBaseContext();
  React.useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}

exports.useModalTitle = useModalTitle;
//# sourceMappingURL=use-modal-title-id.js.map
