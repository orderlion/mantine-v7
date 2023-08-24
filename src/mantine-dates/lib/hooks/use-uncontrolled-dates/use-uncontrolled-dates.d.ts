import { DatePickerType, DatePickerValue } from '../../types';
interface UseUncontrolledDates<Type extends DatePickerType = 'default'> {
    type: Type;
    value: DatePickerValue<Type> | undefined;
    defaultValue: DatePickerValue<Type> | undefined;
    onChange: ((value: DatePickerValue<Type>) => void) | undefined;
}
export declare function useUncontrolledDates<Type extends DatePickerType = 'default'>({ type, value, defaultValue, onChange, }: UseUncontrolledDates<Type>): any[];
export {};
//# sourceMappingURL=use-uncontrolled-dates.d.ts.map