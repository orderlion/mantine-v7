'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pickerInputUsage_demo = require('./picker-input-usage.demo.js');
var pickerInputMultiple_demo = require('./picker-input-multiple.demo.js');
var pickerInputRange_demo = require('./picker-input-range.demo.js');
var pickerInputConfigurator_demo = require('./picker-input-configurator.demo.js');
var pickerInputModal_demo = require('./picker-input-modal.demo.js');
var pickerInputIcon_demo = require('./picker-input-icon.demo.js');
var pickerInputClearable_demo = require('./picker-input-clearable.demo.js');

function getSharedPickerInputDemos(component) {
  return {
    usage: pickerInputUsage_demo.getPickerInputUsageDemo(component),
    multiple: pickerInputMultiple_demo.getPickerInputMultipleDemo(component),
    range: pickerInputRange_demo.getPickerInputRangeDemo(component),
    configurator: pickerInputConfigurator_demo.getPickerInputConfiguratorDemo(component),
    modal: pickerInputModal_demo.getPickerInputModalDemo(component),
    icon: pickerInputIcon_demo.getPickerInputIconDemo(component),
    clearable: pickerInputClearable_demo.getPickerInputClearableDemo(component)
  };
}

exports.getSharedPickerInputDemos = getSharedPickerInputDemos;
//# sourceMappingURL=get-shared-picker-input-demos.js.map
