import React from 'react';
import { Feather } from '@expo/vector-icons';

import {  Container,
          Header,
          Title, 
          Card,
          CardHeader,
          Avatar,
          Description,
          Bold,
          CardBody,
          Usename,
          CardFooter,
          Details,
          Value,
          Divider,
          Date
        } from './styles';

import img6 from '../../images/06.png';
import avatar from '../../images/avatar.png';


import Tips from '../Tips'; 

const Activies: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Artur</Bold> pagou <Bold>Davi Lima</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Usename>Davi Lima</Usename>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 22,90</Value>
          
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 horas</Date>
          </Details>
        </CardFooter>
      </Card>
      <Tips />
      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou um <Bold>Boleto</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Usename>Davi Lima</Usename>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 49,90</Value>
          
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 horas</Date>
          </Details>
        </CardFooter>
      </Card>
      
    </Container>
  );
};

export default Activies;
