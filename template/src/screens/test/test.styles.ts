import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const TestStyled = {
  View: styled.View`
    justify-content: space-evenly;
    align-self: center;
    flex: 1;
  `,
  SubView: styled.View`
    justify-content: space-evenly;
    flex: 1;
  `,
  LogoView: styled.View`
    opacity: ${(props: { isVisible: boolean }) => (props.isVisible ? 1 : 0)};
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  `,
};

export const testStyles = StyleSheet.create({
  button: {
    height: 40,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
});
