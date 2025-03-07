import { isOptionsGroup } from '../Combobox/OptionsDropdown/is-options-group.js';

function filterPickedTags({ data, value }) {
  const normalizedValue = value.map((item) => item.trim().toLowerCase());
  const filtered = data.reduce((acc, item) => {
    if (isOptionsGroup(item)) {
      acc.push({
        group: item.group,
        items: item.items.filter(
          (option) => normalizedValue.indexOf(option.label.toLowerCase().trim()) === -1
        )
      });
    } else if (normalizedValue.indexOf(item.label.toLowerCase().trim()) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
  return filtered;
}

export { filterPickedTags };
//# sourceMappingURL=filter-picked-tags.js.map
