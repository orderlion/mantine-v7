import { getPickerInputUsageDemo } from './picker-input-usage.demo.js';
import { getPickerInputMultipleDemo } from './picker-input-multiple.demo.js';
import { getPickerInputRangeDemo } from './picker-input-range.demo.js';
import { getPickerInputConfiguratorDemo } from './picker-input-configurator.demo.js';
import { getPickerInputModalDemo } from './picker-input-modal.demo.js';
import { getPickerInputIconDemo } from './picker-input-icon.demo.js';
import { getPickerInputClearableDemo } from './picker-input-clearable.demo.js';

function getSharedPickerInputDemos(component) {
  return {
    usage: getPickerInputUsageDemo(component),
    multiple: getPickerInputMultipleDemo(component),
    range: getPickerInputRangeDemo(component),
    configurator: getPickerInputConfiguratorDemo(component),
    modal: getPickerInputModalDemo(component),
    icon: getPickerInputIconDemo(component),
    clearable: getPickerInputClearableDemo(component)
  };
}

export { getSharedPickerInputDemos };
//# sourceMappingURL=get-shared-picker-input-demos.js.map
