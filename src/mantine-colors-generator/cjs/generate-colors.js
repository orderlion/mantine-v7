'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chroma = require('chroma-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);

const LIGHTNESS_MAP = [0.96, 0.907, 0.805, 0.697, 0.605, 0.547, 0.518, 0.445, 0.395, 0.34];
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];
function getClosestLightness(colorObject) {
  const lightnessGoal = colorObject.get("hsl.l");
  return LIGHTNESS_MAP.reduce(
    (prev, curr) => Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev
  );
}
function generateColorsMap(color) {
  const colorObject = chroma__default(color);
  const closestLightness = getClosestLightness(colorObject);
  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness);
  const colors = LIGHTNESS_MAP.map((l) => colorObject.set("hsl.l", l)).map((c) => chroma__default(c)).map((c, i) => {
    const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
    return saturationDelta >= 0 ? c.saturate(saturationDelta) : c.desaturate(saturationDelta * -1);
  });
  return { baseColorIndex, colors };
}
function generateColors(color) {
  return generateColorsMap(color).colors.map((c) => c.hex());
}

exports.generateColors = generateColors;
exports.generateColorsMap = generateColorsMap;
//# sourceMappingURL=generate-colors.js.map
