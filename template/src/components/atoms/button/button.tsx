import React, { FC, PropsWithChildren } from 'react';
import { TextStyle } from 'react-native';

import { ButtonStyles } from './button.styles';

interface IButton extends PropsWithChildren {
  text?: string;
  styles?: TextStyle;
  onPress: () => void;
}

export const Button: FC<IButton> = ({ children, onPress, text, styles }) => {
  return (
    <ButtonStyles.Button style={styles} onPress={onPress}>
      {text ? <ButtonStyles.Text>{text}</ButtonStyles.Text> : children}
    </ButtonStyles.Button>
  );
};
