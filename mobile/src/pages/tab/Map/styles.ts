import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191b1a;
`;

export const TitleContainer = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: rob_bold;
  margin-top: 24px;
  margin-left: 20px;
  color: #fff;
`;

export const Description = styled.Text`
  display: block;
  color: #fff;
  opacity: 0.8;
  font-size: 16px;
  margin-top: 4px;
  font-family: rob_regular;
  margin-left: 20px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  overflow: hidden;
`;
