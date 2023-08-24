import { getPickerDeselectDemo } from './picker-deselect.demo.js';
import { getPickerMultipleDemo } from './picker-multiple.demo.js';
import { getPickerRangeDemo } from './picker-range.demo.js';
import { getPickerUsageDemo } from './picker-usage.demo.js';
import { getPickerSingleRangeDemo } from './picker-singleRange.demo.js';
import { getPickerNumberOfColumnsDemo } from './picker-numberOfColumns.demo.js';
import { getPickerSizeConfiguratorDemo } from './picker-sizeConfigurator.demo.js';

function getSharedPickerDemos(component) {
  return {
    usage: getPickerUsageDemo(component),
    range: getPickerRangeDemo(component),
    multiple: getPickerMultipleDemo(component),
    deselect: getPickerDeselectDemo(component),
    singleRange: getPickerSingleRangeDemo(component),
    numberOfColumns: getPickerNumberOfColumnsDemo(component),
    sizeConfigurator: getPickerSizeConfiguratorDemo(component)
  };
}

export { getSharedPickerDemos };
//# sourceMappingURL=get-shared-picker-demos.js.map
