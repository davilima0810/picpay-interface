import React from 'react';

import Logo from '../../images/take.png'
import { Container , LogoImage } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <Container>
      <LogoImage source={Logo}/>
      <Input placeholder="CPF"/>
      <Input placeholder="Senha"/>
      <Button>Entrar</Button>
    </Container>
  );
};

export default Login;
