import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  flex-direction: row;
`;

export const TextBox = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: rob_regular;
`;

export const SubTitle = styled.Text`
  font-family: rob_medium;
  font-size: 15px;
  color: #fff;
  margin-top: 8px;
`;

export const Price = styled(SubTitle)`
  font-family: rob_medium;
`;

export const Date = styled(SubTitle)`
  font-family: rob_regular;
  opacity: 0.3;
  font-size: 11px;
`;

export const ViewsCounter = styled(Date)``;

export const Footer = styled.View`
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
