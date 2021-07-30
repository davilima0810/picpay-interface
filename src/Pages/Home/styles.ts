import styled from 'styled-components/native';
import { Platform } from 'react-native';
import constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android'? constants.statusBarHeight:0;

export const Wrapper = styled.SafeAreaView`
  flex:1;
  background-color: #000;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  align-items: center;
`;

export const BalanceTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);  
`;

export const Balance = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;
