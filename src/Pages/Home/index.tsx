import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance }  from './styles';

import Suggestions from '../../components/Suggestions';
import Activies from '../../components/Activies';
import Tips from '../../components/Tips';

const HomeScreen: React.FC = () => {
  return (
    <Wrapper>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={25} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          
          <AntDesign name="gift" size={25} color="#10c86e" />
        </Header>
        <Container>
          <Suggestions></Suggestions>
          <Activies />
        </Container>
    </Wrapper>
  );
};

export default HomeScreen;
