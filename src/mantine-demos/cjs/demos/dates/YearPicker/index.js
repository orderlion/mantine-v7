'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dates = require('@mantine/dates');
var YearPicker_demo_minMax = require('./YearPicker.demo.minMax.js');
var YearPicker_demo_controlProps = require('./YearPicker.demo.controlProps.js');
var YearPicker_demo_yearsListFormat = require('./YearPicker.demo.yearsListFormat.js');
var YearPicker_demo_decadeLabelFormat = require('./YearPicker.demo.decadeLabelFormat.js');
var YearPicker_demo_defaultDate = require('./YearPicker.demo.defaultDate.js');
var YearPicker_demo_controlledDate = require('./YearPicker.demo.controlledDate.js');
var getSharedPickerDemos = require('../_shared/get-shared-picker-demos.js');

const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } = getSharedPickerDemos.getSharedPickerDemos(dates.YearPicker);

exports.minMax = YearPicker_demo_minMax.minMax;
exports.controlProps = YearPicker_demo_controlProps.controlProps;
exports.yearsListFormat = YearPicker_demo_yearsListFormat.yearsListFormat;
exports.decadeLabelFormat = YearPicker_demo_decadeLabelFormat.decadeLabelFormat;
exports.defaultDate = YearPicker_demo_defaultDate.defaultDate;
exports.controlledDate = YearPicker_demo_controlledDate.controlledDate;
exports.deselect = deselect;
exports.multiple = multiple;
exports.numberOfColumns = numberOfColumns;
exports.range = range;
exports.singleRange = singleRange;
exports.sizeConfigurator = sizeConfigurator;
exports.usage = usage;
//# sourceMappingURL=index.js.map
