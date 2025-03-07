'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isActionsGroup = require('./is-actions-group.js');

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
    if (isActionsGroup.isActionsGroup(item)) {
      result.push({
        group: item.group,
        actions: limitActions(item.actions, limit - result.length)
      });
    }
    if (!isActionsGroup.isActionsGroup(item)) {
      result.push(item);
    }
  }
  return result;
}

exports.limitActions = limitActions;
//# sourceMappingURL=limit-actions.js.map
