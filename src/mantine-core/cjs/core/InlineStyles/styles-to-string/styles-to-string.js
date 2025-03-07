'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cssObjectToString = require('../css-object-to-string/css-object-to-string.js');

function stylesToString({ selector, styles, media }) {
  const baseStyles = styles ? cssObjectToString.cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString.cssObjectToString(item.styles)}}}`);
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}`.trim();
}

exports.stylesToString = stylesToString;
//# sourceMappingURL=styles-to-string.js.map
