import styled from 'styled-components/native';

import { COLOR_PALETTE } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const ButtonStyles = {
  Button: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${COLOR_PALETTE.primary.action};
  `,
  Text: styled.Text`
    color: ${COLOR_PALETTE.font.white};
    font-size: ${FONTS.size[18]};
  `,
};
