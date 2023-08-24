import { DatePicker } from '@mantine/dates';
export { controlledDate } from './DatePicker.demo.controlledDate.js';
export { controlProps } from './DatePicker.demo.controlProps.js';
export { defaultDate } from './DatePicker.demo.defaultDate.js';
export { labelFormat } from './DatePicker.demo.labelFormat.js';
export { listFormat } from './DatePicker.demo.listFormat.js';
export { locale } from './DatePicker.demo.locale.js';
export { maxLevel } from './DatePicker.demo.maxLevel.js';
export { minMax } from './DatePicker.demo.minMax.js';
export { defaultLevel } from './DatePicker.demo.defaultLevel.js';
export { firstDayOfWeek } from './DatePicker.demo.firstDayOfWeek.js';
export { weekendDays } from './DatePicker.demo.weekendDays.js';
export { renderDay } from './DatePicker.demo.renderDay.js';
export { hideWeekdays } from './DatePicker.demo.hideWeekdays.js';
export { hideOutsideDates } from './DatePicker.demo.hideOutsideDates.js';
import { getSharedPickerDemos } from '../_shared/get-shared-picker-demos.js';

const { usage, multiple, deselect, range, singleRange, numberOfColumns, sizeConfigurator } = getSharedPickerDemos(DatePicker);

export { deselect, multiple, numberOfColumns, range, singleRange, sizeConfigurator, usage };
//# sourceMappingURL=index.js.map
