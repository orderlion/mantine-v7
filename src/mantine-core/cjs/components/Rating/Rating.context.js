'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [RatingProvider, useRatingContext] = createSafeContext.createSafeContext(
  "Rating was not found in tree"
);

exports.RatingProvider = RatingProvider;
exports.useRatingContext = useRatingContext;
//# sourceMappingURL=Rating.context.js.map
