'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var getVirtualizedIndex = require('./get-index/get-virtualized-index.js');

function useVirtualizedCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  totalOptionsCount,
  isOptionDisabled = () => false,
  getOptionId,
  selectedOptionIndex,
  setSelectedOptionIndex,
  activeOptionIndex,
  onSelectedOptionSubmit
} = {
  totalOptionsCount: 0,
  getOptionId: () => null,
  selectedOptionIndex: 1,
  setSelectedOptionIndex: () => {
  },
  onSelectedOptionSubmit: () => {
  }
}) {
  const [dropdownOpened, setDropdownOpened] = hooks.useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange
  });
  const listId = React.useRef(null);
  const searchRef = React.useRef(null);
  const targetRef = React.useRef(null);
  const focusSearchTimeout = React.useRef(-1);
  const focusTargetTimeout = React.useRef(-1);
  const openDropdown = () => {
    if (!dropdownOpened) {
      setDropdownOpened(true);
      onDropdownOpen == null ? void 0 : onDropdownOpen();
    }
  };
  const closeDropdown = () => {
    if (dropdownOpened) {
      setDropdownOpened(false);
      onDropdownClose == null ? void 0 : onDropdownClose();
    }
  };
  const toggleDropdown = () => {
    if (dropdownOpened) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };
  const selectOption = (index) => {
    const nextIndex = index >= totalOptionsCount ? 0 : index < 0 ? totalOptionsCount - 1 : index;
    setSelectedOptionIndex(nextIndex);
    return getOptionId(nextIndex);
  };
  const selectActiveOption = () => selectOption(activeOptionIndex != null ? activeOptionIndex : 0);
  const selectNextOption = () => selectOption(
    getVirtualizedIndex.getNextIndex({ currentIndex: selectedOptionIndex, isOptionDisabled, totalOptionsCount, loop })
  );
  const selectPreviousOption = () => selectOption(
    getVirtualizedIndex.getPreviousIndex({
      currentIndex: selectedOptionIndex,
      isOptionDisabled,
      totalOptionsCount,
      loop
    })
  );
  const selectFirstOption = () => selectOption(getVirtualizedIndex.getFirstIndex({ isOptionDisabled, totalOptionsCount }));
  const resetSelectedOption = () => {
    setSelectedOptionIndex(-1);
  };
  const clickSelectedOption = () => {
    onSelectedOptionSubmit == null ? void 0 : onSelectedOptionSubmit(selectedOptionIndex);
  };
  const setListId = (id) => {
    listId.current = id;
  };
  const focusSearchInput = () => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current.focus(), 0);
  };
  const focusTarget = () => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current.focus(), 0);
  };
  React.useEffect(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
    },
    []
  );
  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectedOptionIndex,
    selectOption,
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex: () => {
    },
    listId: listId.current,
    setListId,
    clickSelectedOption,
    searchRef,
    focusSearchInput,
    targetRef,
    focusTarget
  };
}

exports.useVirtualizedCombobox = useVirtualizedCombobox;
//# sourceMappingURL=use-virtualized-combobox.js.map
