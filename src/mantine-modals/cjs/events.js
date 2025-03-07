'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

const [useModalsEvents, createEvent] = core.createUseExternalEvents("mantine-modals");
const openModal = createEvent("openModal");
const closeModal = createEvent("closeModal");
const closeAllModals = createEvent("closeAllModals");
const openConfirmModal = createEvent("openConfirmModal");
const openContextModal = (payload) => createEvent("openContextModal")(payload);
const modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal
};

exports.closeAllModals = closeAllModals;
exports.closeModal = closeModal;
exports.createEvent = createEvent;
exports.modals = modals;
exports.openConfirmModal = openConfirmModal;
exports.openContextModal = openContextModal;
exports.openModal = openModal;
exports.useModalsEvents = useModalsEvents;
//# sourceMappingURL=events.js.map
