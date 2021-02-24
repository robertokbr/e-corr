import React from 'react';
import { SafeAreaView } from 'react-native';

import * as S from './styles';
import WebMap from '../../../components/WebMap';
import { useData } from '../../../hooks/DataContext';

const Map: React.FC = () => {
  const { points } = useData();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.MapContainer>
          <WebMap points={points} />
        </S.MapContainer>
      </S.Container>
    </SafeAreaView>
  );
};

export default Map;
