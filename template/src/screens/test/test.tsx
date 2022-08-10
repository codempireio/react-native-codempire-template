import React from 'react';
import { Text } from 'react-native';

import { TitleText } from './atoms/title-text';
import { Input } from '@components/atoms/input';
import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';

import { TestStyled, testStyles } from './test.styles';
import { useTestState } from './test.state';
import { useOpenCloseModal } from '@services/hooks/open-close.hook';

export const Test = () => {
  const { name, onChange } = useTestState();
  const { isOpen, onToggle } = useOpenCloseModal();

  return (
    <TestStyled.View>
      <TestStyled.SubView>
        <Input placeholder={'Type your name'} value={name} onChangeText={onChange} />
        <TitleText name={name} />
      </TestStyled.SubView>
      <TestStyled.SubView>
        <Button
          styles={testStyles.button}
          onPress={onToggle}
          text={isOpen ? 'Hide developer' : 'Show developer'}
        />
        <TestStyled.LogoView isVisible={isOpen}>
          <Text>Made by: </Text>
          <Icon height={200} width={50} type={'logo'} />
        </TestStyled.LogoView>
      </TestStyled.SubView>
    </TestStyled.View>
  );
};
