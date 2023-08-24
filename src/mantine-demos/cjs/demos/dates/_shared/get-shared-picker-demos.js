'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pickerDeselect_demo = require('./picker-deselect.demo.js');
var pickerMultiple_demo = require('./picker-multiple.demo.js');
var pickerRange_demo = require('./picker-range.demo.js');
var pickerUsage_demo = require('./picker-usage.demo.js');
var pickerSingleRange_demo = require('./picker-singleRange.demo.js');
var pickerNumberOfColumns_demo = require('./picker-numberOfColumns.demo.js');
var pickerSizeConfigurator_demo = require('./picker-sizeConfigurator.demo.js');

function getSharedPickerDemos(component) {
  return {
    usage: pickerUsage_demo.getPickerUsageDemo(component),
    range: pickerRange_demo.getPickerRangeDemo(component),
    multiple: pickerMultiple_demo.getPickerMultipleDemo(component),
    deselect: pickerDeselect_demo.getPickerDeselectDemo(component),
    singleRange: pickerSingleRange_demo.getPickerSingleRangeDemo(component),
    numberOfColumns: pickerNumberOfColumns_demo.getPickerNumberOfColumnsDemo(component),
    sizeConfigurator: pickerSizeConfigurator_demo.getPickerSizeConfiguratorDemo(component)
  };
}

exports.getSharedPickerDemos = getSharedPickerDemos;
//# sourceMappingURL=get-shared-picker-demos.js.map
