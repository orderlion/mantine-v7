'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [CardProvider, useCardContext] = createSafeContext.createSafeContext(
  "Card component was not found in tree"
);

exports.CardProvider = CardProvider;
exports.useCardContext = useCardContext;
//# sourceMappingURL=Card.context.js.map
