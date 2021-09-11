import styled from 'styled-components/native';

interface PageProps {
  width: number;
}

export const Container = styled.SafeAreaView<PageProps>`
  flex: 1;
  background: #191b1a;
`;
