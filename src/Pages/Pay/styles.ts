import styled from 'styled-components/native';
import { Platform } from 'react-native';
import constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android'? constants.statusBarHeight:0;

export const Container = styled.View`
  flex:1;
  background-color: #000;
  padding-top: ${statusBarHeight + 'px'};
`;
