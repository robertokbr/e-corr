import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import PointCardImage from '../PointCardImage';

import * as S from './styles';

const PointCard: React.FC<{ point: Point }> = ({ point }) => {
  const { navigate } = useNavigation();
  const [views, setViews] = useState(0);

  useEffect(() => {
    api
      .get<number>(`views/${point.id}`)
      .then(response => setViews(response.data));
  }, [point.id]);

  const handleDate = useCallback((date: string) => {
    const time = date.split('T')[0].split('-');
    return `${time[2]}/${time[1]}/${time[0]}`;
  }, []);

  const handleNavigate = useCallback(
    async (selectedPoint: Point) => {
      await api.post('/views', { point_id: selectedPoint.id });

      navigate('Detail', { point: selectedPoint });
    },
    [navigate],
  );

  return (
    <S.Container onPress={() => handleNavigate(point)}>
      <PointCardImage image={point.pointImages[0].image_url} />
      <S.TextBox>
        <S.Title>
          {point.type} | {point.title}
        </S.Title>
        <S.SubTitle>{point.category.toUpperCase()}</S.SubTitle>
        <S.Price>R$ {point.price}</S.Price>
        <S.Footer>
          <S.ViewsCounter>Visualizações: {views}</S.ViewsCounter>
          <S.Date>{handleDate(point.created_at)}</S.Date>
        </S.Footer>
      </S.TextBox>
    </S.Container>
  );
};

export default PointCard;
