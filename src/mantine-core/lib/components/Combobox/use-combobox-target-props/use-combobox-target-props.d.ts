/// <reference types="react" />
interface UseComboboxTargetPropsInput {
    targetType: 'input' | 'button' | undefined;
    withAriaAttributes: boolean | undefined;
    withKeyboardNavigation: boolean | undefined;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}
export declare function useComboboxTargetProps({ onKeyDown, withKeyboardNavigation, withAriaAttributes, targetType, }: UseComboboxTargetPropsInput): {
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    'aria-haspopup': string;
    'aria-expanded': boolean | undefined;
    'aria-controls': string | null;
    'aria-activedescendant': string | undefined;
    autoComplete: string;
    'data-expanded': boolean | undefined;
} | {
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    'aria-haspopup'?: undefined;
    'aria-expanded'?: undefined;
    'aria-controls'?: undefined;
    'aria-activedescendant'?: undefined;
    autoComplete?: undefined;
    'data-expanded'?: undefined;
};
export {};
