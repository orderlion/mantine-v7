'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dates = require('@mantine/dates');
var DatePickerInput_demo_valueFormat = require('./DatePickerInput.demo.valueFormat.js');
var DatePickerInput_demo_disabled = require('./DatePickerInput.demo.disabled.js');
var getSharedPickerInputDemos = require('../_shared/get-shared-picker-input-demos.js');

const { usage, multiple, range, configurator, modal, icon, clearable } = getSharedPickerInputDemos.getSharedPickerInputDemos(dates.DatePickerInput);

exports.valueFormat = DatePickerInput_demo_valueFormat.valueFormat;
exports.disabled = DatePickerInput_demo_disabled.disabled;
exports.clearable = clearable;
exports.configurator = configurator;
exports.icon = icon;
exports.modal = modal;
exports.multiple = multiple;
exports.range = range;
exports.usage = usage;
//# sourceMappingURL=index.js.map
