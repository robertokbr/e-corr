import React from 'react';

import * as S from './styles';

interface PointCardImageProps {
  image: string;
}

const PointCardImage: React.FC<PointCardImageProps> = ({ image }) => {
  return (
    <S.Container>
      <S.PointImage
        source={{
          uri: image,
        }}
      />
    </S.Container>
  );
};

export default PointCardImage;
