import styled from 'styled-components/native';
import { FiChevronRight } from 'react-icons/fi';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  padding-bottom: 40px;
  flex: 1;
  max-width: 720px;
  width: 100%;
`;

export const Wrapper = styled.View`
  flex: 1;
  background: #191b1a;
  align-items: center;
`;

export const Description = styled.Text`
  color: #fff;
  font-family: rob_regular;
  font-size: 14px;
`;

export const ChevronIcon = styled(FiChevronRight).attrs({
  name: 'chevron-thin-right',
  size: 12,
  color: '#E0E0E0',
})`
  padding-right: 9;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
`;

export const Separtor = styled.View`
  height: 1px;
  width: 100%;
  margin: 16px 0;
  background: #fff;
  opacity: 0.09;
`;
