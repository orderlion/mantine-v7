import { YearPicker } from '@mantine/dates';
export { minMax } from './YearPicker.demo.minMax.js';
export { controlProps } from './YearPicker.demo.controlProps.js';
export { yearsListFormat } from './YearPicker.demo.yearsListFormat.js';
export { decadeLabelFormat } from './YearPicker.demo.decadeLabelFormat.js';
export { defaultDate } from './YearPicker.demo.defaultDate.js';
export { controlledDate } from './YearPicker.demo.controlledDate.js';
import { getSharedPickerDemos } from '../_shared/get-shared-picker-demos.js';

const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } = getSharedPickerDemos(YearPicker);

export { deselect, multiple, numberOfColumns, range, singleRange, sizeConfigurator, usage };
//# sourceMappingURL=index.js.map
