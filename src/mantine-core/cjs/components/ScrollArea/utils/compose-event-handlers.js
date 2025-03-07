'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

exports.composeEventHandlers = composeEventHandlers;
//# sourceMappingURL=compose-event-handlers.js.map
