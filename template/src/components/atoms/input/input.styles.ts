import styled from 'styled-components/native';

import { COLOR_PALETTE } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const InputStyles = {
  Input: styled.TextInput`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 40px;
    margin: 12px;
    padding: 10px;
    border-bottom-width: 2px;
    border-bottom-color: ${COLOR_PALETTE.primary.action};
    color: ${COLOR_PALETTE.font.black};
    font-size: ${FONTS.size[18]};
  `,
};
