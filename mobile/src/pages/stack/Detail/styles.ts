import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #191b1a;
  align-items: center;
`;

export const Container = styled.ScrollView.attrs({
  flex: 1,
})`
  max-width: 720px;
  width: 100%;
  position: relative;
`;

export const ImagesContainer = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 2%;
  right: 90%;
  z-index: 10;
`;

export const PointImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const DotIndicatorContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const DotIndicator = styled.View`
  height: 4px;
  width: 4px;
  background: #fff;
  border-radius: 50%;
  margin: 0 2px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 24px 80px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  font-family: rob_bold;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-family: rob_medium;
  font-size: 20px;
  line-height: 24px;
  margin-top: 8px;
  color: #fff;
`;

export const Separtor = styled.View`
  height: 1px;
  width: 100%;
  margin: 16px 0;
  background: #fff;
  opacity: 0.09;
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const TextContainer = styled.View`
  padding: 30px 0;
`;

export const Description = styled.Text`
  color: #fff;
  font-family: rob_regular;
  font-size: 14px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
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
  border-radius: 10px;
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
