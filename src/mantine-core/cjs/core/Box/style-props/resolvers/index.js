'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var colorResolver = require('./color-resolver/color-resolver.js');
var fontSizeResolver = require('./font-size-resolver/font-size-resolver.js');
var spacingResolver = require('./spacing-resolver/spacing-resolver.js');
var identityResolver = require('./identity-resolver/identity-resolver.js');
var sizeResolver = require('./size-resolver/size-resolver.js');
var lineHeightResolver = require('./line-height-resolver/line-height-resolver.js');

const resolvers = {
  color: colorResolver.colorResolver,
  fontSize: fontSizeResolver.fontSizeResolver,
  spacing: spacingResolver.spacingResolver,
  identity: identityResolver.identityResolver,
  size: sizeResolver.sizeResolver,
  lineHeight: lineHeightResolver.lineHeightResolver
};

exports.resolvers = resolvers;
//# sourceMappingURL=index.js.map
