import { MonthPicker } from '@mantine/dates';
export { controlledDate } from './MonthPicker.demo.controlledDate.js';
export { controlProps } from './MonthPicker.demo.controlProps.js';
export { labelFormat } from './MonthPicker.demo.labelFormat.js';
export { defaultDate } from './MonthPicker.demo.defaultDate.js';
export { minMax } from './MonthPicker.demo.minMax.js';
export { listFormat } from './MonthPicker.demo.listFormat.js';
export { maxLevel } from './MonthPicker.demo.maxLevel.js';
export { locale } from './MonthPicker.demo.locale.js';
import { getSharedPickerDemos } from '../_shared/get-shared-picker-demos.js';

const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } = getSharedPickerDemos(MonthPicker);

export { deselect, multiple, numberOfColumns, range, singleRange, sizeConfigurator, usage };
//# sourceMappingURL=index.js.map
