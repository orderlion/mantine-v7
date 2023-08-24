import { upperFirst } from '@mantine/hooks';

function transformSelectData(data) {
  return data.map((item) => {
    if (typeof item === "string") {
      return { label: upperFirst(item), value: item };
    }
    return { value: item.value, label: upperFirst(item.label) };
  });
}

export { transformSelectData };
//# sourceMappingURL=transform-select-data.js.map
