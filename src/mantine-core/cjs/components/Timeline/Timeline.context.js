'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createSafeContext = require('../../core/utils/create-safe-context/create-safe-context.js');

const [TimelineProvider, useTimelineContext] = createSafeContext.createSafeContext(
  "Timeline component was not found in tree"
);

exports.TimelineProvider = TimelineProvider;
exports.useTimelineContext = useTimelineContext;
//# sourceMappingURL=Timeline.context.js.map
