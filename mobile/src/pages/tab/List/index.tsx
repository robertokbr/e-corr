import React from 'react';
import PointCard from '../../../components/PointCard';

import { useData } from '../../../hooks/DataContext';

import * as S from './styles';

const List: React.FC = () => {
  const { points } = useData();

  return (
    <S.Wrapper>
      <S.Container>
        {points.map(point => (
          <>
            <PointCard point={point} />
            <S.Separtor />
          </>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default List;
