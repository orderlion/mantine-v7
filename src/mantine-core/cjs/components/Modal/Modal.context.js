'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [ModalProvider, useModalContext] = createSafeContext.createSafeContext(
  "Modal component was not found in tree"
);

exports.ModalProvider = ModalProvider;
exports.useModalContext = useModalContext;
//# sourceMappingURL=Modal.context.js.map
