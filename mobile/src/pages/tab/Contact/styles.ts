import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background: #191b1a;
  align-items: center;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  background: #191b1a;
  flex: 1;
  padding: 0 16px;
  max-width: 720px;
  width: 100%;
`;

export const Separtor = styled.View`
  height: 1px;
  width: 100%;
  margin: 8px 0;
  background: #fff;
  opacity: 0.09;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const UserContainer = styled(DetailsContainer)`
  margin: 24px 0;
  align-items: center;
  justify-content: flex-start;
`;

export const UserData = styled.View`
  margin-left: 16px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  background-color: #34cb79;
  border-radius: 4px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  color: #fff;
  font-size: 16px;
  font-family: rob_medium;
`;

export const DetailTitle = styled.Text`
  font-family: rob_medium;
  line-height: 24px;
  color: #fff;
`;

export const DetailText = styled.Text`
  font-family: rob_regular;
  line-height: 24px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-family: rob_medium;
  font-size: 20px;
  line-height: 24px;
  margin-top: 8px;
  color: #fff;
  margin-bottom: 10px;
`;
