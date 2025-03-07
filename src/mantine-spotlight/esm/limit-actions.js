import { isActionsGroup } from './is-actions-group.js';

function limitActions(actions, limit) {
  const result = [];
  if (!Array.isArray(actions)) {
    return [];
  }
  for (let i = 0; i < actions.length; i += 1) {
    const item = actions[i];
    if (result.length >= limit) {
      return result;
    }
    if (isActionsGroup(item)) {
      result.push({
        group: item.group,
        actions: limitActions(item.actions, limit - result.length)
      });
    }
    if (!isActionsGroup(item)) {
      result.push(item);
    }
  }
  return result;
}

export { limitActions };
//# sourceMappingURL=limit-actions.js.map
