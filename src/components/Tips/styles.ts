import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center', 
    paddingLeft: 16
  }
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({bgColor})=> bgColor};
  width: 150px; 
  height: 220px;
  border-radius: 8px;
  padding: 18px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;

export const Img = styled.Image`
  align-self: center;
`;
