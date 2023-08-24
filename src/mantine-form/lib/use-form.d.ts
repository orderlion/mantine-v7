import { _TransformValues, UseFormInput, UseFormReturnType } from './types';
export declare function useForm<Values = Record<string, unknown>, TransformValues extends _TransformValues<Values> = (values: Values) => Values>({ initialValues, initialErrors, initialDirty, initialTouched, clearInputErrorOnChange, validateInputOnChange, validateInputOnBlur, transformValues, validate: rules, }?: UseFormInput<Values, TransformValues>): UseFormReturnType<Values, TransformValues>;
//# sourceMappingURL=use-form.d.ts.map