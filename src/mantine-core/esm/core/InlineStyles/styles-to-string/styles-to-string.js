import { cssObjectToString } from '../css-object-to-string/css-object-to-string.js';

function stylesToString({ selector, styles, media }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}`.trim();
}

export { stylesToString };
//# sourceMappingURL=styles-to-string.js.map
