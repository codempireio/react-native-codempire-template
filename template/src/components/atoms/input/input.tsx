import React, { FC } from 'react';

import { InputStyles } from './input.styles';

import { COLOR_PALETTE } from '@theme/colors';

interface IButton {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

export const Input: FC<IButton> = ({ value, placeholder, onChangeText }) => {
  return (
    <InputStyles.Input
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={COLOR_PALETTE.font.black}
    />
  );
};
