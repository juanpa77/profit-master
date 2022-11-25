import { useState } from "react";

export const useModal = (
  initialValue = false
): [boolean, () => void, () => void] => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return [isOpenModal, openModal, closeModal];
};
