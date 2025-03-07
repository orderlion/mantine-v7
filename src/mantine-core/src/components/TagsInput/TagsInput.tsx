import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  extractStyleProps,
  useStyles,
  useResolvedStylesApi,
} from '../../core';
import {
  Combobox,
  OptionsDropdown,
  useCombobox,
  getParsedComboboxData,
  getOptionsLockup,
  ComboboxLikeProps,
  ComboboxLikeStylesNames,
} from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { PillsInput } from '../PillsInput';
import { Pill } from '../Pill';
import { InputBase } from '../InputBase';
import { getSplittedTags } from './get-splitted-tags';
import { filterPickedTags } from './filter-picked-tags';

export type TagsInputStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface TagsInputProps
  extends BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<TagsInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called whe value changes */
  onChange?(value: string[]): void;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?(value: string): void;

  /** Maximum number of tags, `Infinity` by default */
  maxTags?: number;

  /** Determines whether duplicate tags are allowed, `false` by default */
  allowDuplicates?: boolean;

  /** Called when user tries to submit a duplicated tag */
  onDuplicate?(value: string): void;

  /** Characters that should trigger tags split, `[',']` by default */
  splitChars?: string[];
}

export type TagsInputFactory = Factory<{
  props: TagsInputProps;
  ref: HTMLInputElement;
  stylesNames: TagsInputStylesNames;
}>;

const defaultProps: Partial<TagsInputProps> = {
  maxTags: Infinity,
  allowDuplicates: false,
  splitChars: [','],
  size: 'sm',
};

export const TagsInput = factory<TagsInputFactory>((_props, ref) => {
  const props = useProps('TagsInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    maxTags,
    allowDuplicates,
    onDuplicate,
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    splitChars,
    onFocus,
    onBlur,
    onPaste,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error,
    withErrorStyles,
    name,
    form,
    ...others
  } = props;

  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

  const {
    styleProps,
    rest: { type, ...rest },
  } = extractStyleProps(others);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const getStyles = useStyles<TagsInputFactory>({
    name: 'TagsInput',
    classes: {} as any,
    props,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TagsInputFactory>({
    props,
    styles,
    classNames,
  });

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    const inputValue = _searchValue.trim();
    const { length } = inputValue;

    if (splitChars!.includes(event.key) && length > 0) {
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: _searchValue,
          currentTags: _value,
        })
      );
      setSearchValue('');
      event.preventDefault();
    }

    if (event.key === 'Enter' && length > 0) {
      event.preventDefault();
      const isDuplicate = _value.some((tag) => tag.toLowerCase() === inputValue.toLowerCase());

      if (isDuplicate) {
        onDuplicate?.(inputValue);
      }

      if ((!isDuplicate || (isDuplicate && allowDuplicates)) && _value.length < maxTags!) {
        setSearchValue('');

        if (inputValue.length > 0) {
          setValue([..._value, inputValue]);
        }
      }
    }

    if (event.key === 'Backspace' && length === 0 && _value.length > 0) {
      setValue(_value.slice(0, _value.length - 1));
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    onPaste?.(event);
    event.preventDefault();

    if (event.clipboardData) {
      const pastedText = event.clipboardData.getData('text/plain');
      setValue(
        getSplittedTags({
          splitChars,
          allowDuplicates,
          maxTags,
          value: pastedText,
          currentTags: _value,
        })
      );
      setSearchValue('');
    }
  };

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly}
      onRemove={() => setValue(_value.filter((i) => item !== i))}
      {...getStyles('pill')}
    >
      {item}
    </Pill>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        unstyled={unstyled}
        size={size}
        __staticSelector="TagsInput"
        onOptionSubmit={(val) => {
          onOptionSubmit?.(val);
          setSearchValue('');
          _value.length < maxTags! && setValue([..._value, optionsLockup[val].label]);
        }}
        {...comboboxProps}
      >
        <Combobox.DropdownTarget>
          <PillsInput
            {...styleProps}
            __staticSelector="TagsInput"
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            unstyled={unstyled}
            size={size}
            className={className}
            style={style}
            variant={variant}
            disabled={disabled}
            radius={radius}
            rightSection={rightSection}
            rightSectionWidth={rightSectionWidth}
            rightSectionPointerEvents={rightSectionPointerEvents}
            rightSectionProps={rightSectionProps}
            leftSection={leftSection}
            leftSectionWidth={leftSectionWidth}
            leftSectionPointerEvents={leftSectionPointerEvents}
            leftSectionProps={leftSectionProps}
            inputContainer={inputContainer}
            inputWrapperOrder={inputWrapperOrder}
            withAsterisk={withAsterisk}
            labelProps={labelProps}
            descriptionProps={descriptionProps}
            errorProps={errorProps}
            wrapperProps={wrapperProps}
            description={description}
            label={label}
            error={error}
            multiline
            withErrorStyles={withErrorStyles}
            __stylesApiProps={{ ...props, multiline: true }}
          >
            <Pill.Group disabled={disabled} {...getStyles('pillsList')}>
              {values}
              <Combobox.EventsTarget>
                <PillsInput.Field
                  {...rest}
                  ref={ref}
                  {...getStyles('inputField')}
                  unstyled={unstyled}
                  onKeyDown={handleInputKeydown}
                  onFocus={(event) => {
                    onFocus?.(event);
                    combobox.openDropdown();
                  }}
                  onBlur={(event) => {
                    onBlur?.(event);
                    combobox.closeDropdown();
                  }}
                  onPaste={handlePaste}
                  value={_searchValue}
                  onChange={(event) => setSearchValue(event.currentTarget.value)}
                  disabled={disabled}
                  readOnly={readOnly}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <OptionsDropdown
          data={filterPickedTags({ data: parsedData, value: _value })}
          hidden={readOnly || disabled}
          filter={filter}
          search={_searchValue}
          limit={limit}
          hiddenWhenEmpty
          withScrollArea={withScrollArea}
          maxDropdownHeight={maxDropdownHeight}
        />
      </Combobox>
      <input type="hidden" name={name} form={form} value={_value.join(',')} disabled={disabled} />
    </>
  );
});

TagsInput.classes = { ...InputBase.classes, ...Combobox.classes };
TagsInput.displayName = '@mantine/core/TagsInput';
