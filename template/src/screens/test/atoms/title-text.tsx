import React from 'react';
import styled from 'styled-components/native';

import { COLOR_PALETTE } from '@theme/colors';
import { FONTS } from '@theme/fonts';

interface ITitleText {
  name: string;
}

const TitleTextStyles = {
  View: styled.View`
    justify-content: space-between;
    background-color: ${COLOR_PALETTE.primary.blue};
    border-radius: 5px;
    width: 300px;
    height: 80px;
    align-self: center;
  `,
  ConstantText: styled.Text`
    font-size: ${FONTS.size[28]};
    color: ${COLOR_PALETTE.primary.yellow};
    text-align: center;
  `,
  ValueText: styled.Text`
    height: 40px;
    font-size: ${FONTS.size[28]};
    background-color: ${COLOR_PALETTE.primary.yellow};
    color: ${COLOR_PALETTE.primary.blue};
    text-align: center;
  `,
};

export const TitleText = ({ name }: ITitleText) => {
  return (
    <TitleTextStyles.View>
      <TitleTextStyles.ConstantText>Hello</TitleTextStyles.ConstantText>
      <TitleTextStyles.ValueText>{name || '?'}</TitleTextStyles.ValueText>
    </TitleTextStyles.View>
  );
};
