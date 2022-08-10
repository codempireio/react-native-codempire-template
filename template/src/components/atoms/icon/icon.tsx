import React, { FC } from 'react';

import { View } from 'react-native';

import { ICON_MAP } from '@assets/icons';

export type TIconNames = keyof typeof ICON_MAP;

export interface IIConProps {
  type: TIconNames;
  height?: number;
  width?: number;
  size?: number;
}

const DEFAULT_ICON_HEIGHT = 40;
const DEFAULT_ICON_WIDTH = 40;

export const Icon: FC<IIConProps> = ({ type, height, width, size }) => {
  const SelectedIcon = ICON_MAP[type];

  const iconHeight = size ?? height ?? DEFAULT_ICON_HEIGHT;
  const iconWidth = size ?? width ?? DEFAULT_ICON_WIDTH;

  return (
    <View>
      <SelectedIcon style={{ width: iconWidth, height: iconHeight }} />
    </View>
  );
};
