import { useState } from 'react';

interface IOpenCloseModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const useOpenCloseModal = (defaultState?: boolean): IOpenCloseModal => {
  const [isOpen, setIsOpen] = useState(!!defaultState);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
};
