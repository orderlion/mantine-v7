import { createUseExternalEvents } from '@mantine/core';

const [useModalsEvents, createEvent] = createUseExternalEvents("mantine-modals");
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

export { closeAllModals, closeModal, createEvent, modals, openConfirmModal, openContextModal, openModal, useModalsEvents };
//# sourceMappingURL=events.js.map
