import { upperFirst } from '@mantine/hooks';

function getControlLabel(label) {
  return upperFirst(label.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
}

export { getControlLabel };
//# sourceMappingURL=get-control-label.js.map
