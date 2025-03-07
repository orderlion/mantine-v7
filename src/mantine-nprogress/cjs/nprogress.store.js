'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('@mantine/hooks');
var store = require('@mantine/store');

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getIntervalProgressValue(currentProgress) {
  let next = 0.5;
  if (currentProgress >= 0 && currentProgress <= 20) {
    next = 10;
  } else if (currentProgress >= 20 && currentProgress <= 50) {
    next = 4;
  } else if (currentProgress >= 50 && currentProgress <= 80) {
    next = 2;
  } else if (currentProgress >= 80 && currentProgress <= 99) {
    next = 1;
  } else if (currentProgress >= 99 && currentProgress <= 100) {
    next = 0;
  }
  return currentProgress + next;
}
const createNprogressStore = () => store.createStore({
  mounted: false,
  progress: 0,
  interval: 0,
  step: 1,
  stepInterval: 100,
  timeouts: []
});
const useNprogress = (store$1) => store.useStore(store$1);
function updateNavigationProgressStateAction(update, store) {
  const state = store.getState();
  store.setState(__spreadValues(__spreadValues({}, state), update(store.getState())));
}
function decrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (state) => ({ progress: Math.max(state.progress - state.step, 0) }),
    store
  );
}
function setNavigationProgressAction(value, store) {
  updateNavigationProgressStateAction(
    () => ({ progress: hooks.clamp(value, 0, 100), mounted: true }),
    store
  );
}
function cleanupNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    state.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    return { timeouts: [] };
  }, store);
}
function completeNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  updateNavigationProgressStateAction((state) => {
    const mountedTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ mounted: false }), store);
    }, 50);
    const resetTimeout = window.setTimeout(() => {
      updateNavigationProgressStateAction(() => ({ progress: 0 }), store);
    }, state.stepInterval + 50);
    return { progress: 100, timeouts: [mountedTimeout, resetTimeout] };
  }, store);
}
function startNavigationProgressAction(store) {
  updateNavigationProgressStateAction(
    (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
    store
  );
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    const interval = window.setInterval(() => {
      updateNavigationProgressStateAction(
        (s) => ({ progress: getIntervalProgressValue(s.progress), mounted: true }),
        store
      );
    }, state.stepInterval);
    return { interval, mounted: true };
  }, store);
}
function stopNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    window.clearInterval(state.interval);
    return { interval: -1 };
  }, store);
}
function resetNavigationProgressAction(store) {
  cleanupNavigationProgressAction(store);
  stopNavigationProgressAction(store);
  updateNavigationProgressStateAction(() => ({ progress: 0, mounted: false }), store);
}
function incrementNavigationProgressAction(store) {
  updateNavigationProgressStateAction((state) => {
    const nextValue = Math.min(state.progress + state.step, 100);
    const nextMounted = nextValue !== 100 && nextValue !== 0;
    if (!nextMounted) {
      const timeout = window.setTimeout(
        () => resetNavigationProgressAction(store),
        state.stepInterval + 50
      );
      return {
        progress: nextValue,
        mounted: nextMounted,
        timeouts: [...state.timeouts, timeout]
      };
    }
    return {
      progress: nextValue,
      mounted: nextMounted
    };
  }, store);
}
function createNprogress() {
  const store = createNprogressStore();
  const actions = {
    start: () => startNavigationProgressAction(store),
    stop: () => stopNavigationProgressAction(store),
    reset: () => resetNavigationProgressAction(store),
    set: (value) => setNavigationProgressAction(value, store),
    increment: () => incrementNavigationProgressAction(store),
    decrement: () => decrementNavigationProgressAction(store),
    complete: () => completeNavigationProgressAction(store),
    cleanup: () => cleanupNavigationProgressAction(store)
  };
  return [store, actions];
}
const [nprogressStore, nprogress] = createNprogress();
const {
  start: startNavigationProgress,
  stop: stopNavigationProgress,
  reset: resetNavigationProgress,
  set: setNavigationProgress,
  increment: incrementNavigationProgress,
  decrement: decrementNavigationProgress,
  complete: completeNavigationProgress,
  cleanup: cleanupNavigationProgress
} = nprogress;

exports.cleanupNavigationProgress = cleanupNavigationProgress;
exports.cleanupNavigationProgressAction = cleanupNavigationProgressAction;
exports.completeNavigationProgress = completeNavigationProgress;
exports.completeNavigationProgressAction = completeNavigationProgressAction;
exports.createNprogress = createNprogress;
exports.createNprogressStore = createNprogressStore;
exports.decrementNavigationProgress = decrementNavigationProgress;
exports.decrementNavigationProgressAction = decrementNavigationProgressAction;
exports.incrementNavigationProgress = incrementNavigationProgress;
exports.incrementNavigationProgressAction = incrementNavigationProgressAction;
exports.nprogress = nprogress;
exports.nprogressStore = nprogressStore;
exports.resetNavigationProgress = resetNavigationProgress;
exports.resetNavigationProgressAction = resetNavigationProgressAction;
exports.setNavigationProgress = setNavigationProgress;
exports.setNavigationProgressAction = setNavigationProgressAction;
exports.startNavigationProgress = startNavigationProgress;
exports.startNavigationProgressAction = startNavigationProgressAction;
exports.stopNavigationProgress = stopNavigationProgress;
exports.stopNavigationProgressAction = stopNavigationProgressAction;
exports.updateNavigationProgressStateAction = updateNavigationProgressStateAction;
exports.useNprogress = useNprogress;
//# sourceMappingURL=nprogress.store.js.map
