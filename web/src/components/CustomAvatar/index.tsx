import React from 'react';
import { FiX } from 'react-icons/fi';

import * as S from './styles';
import getNameInitials from '../../utils/getNameInitials';

interface AvatarProps {
  name: string;
  image?: string;
  bottomName?: boolean;
  largeAvatar?: boolean;
  closeIcon?: boolean;
}

const CustomAvatar: React.FC<AvatarProps> = ({
  name,
  image,
  bottomName,
  largeAvatar,
  closeIcon,
}) => {
  if (!name) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.Container>
        {image ? (
          <S.AvatarImage
            source={{
              uri: image,
            }}
          />
        ) : (
          <S.AvatarNoImg bigger={largeAvatar}>
            <S.AvatarName>{getNameInitials(name)}</S.AvatarName>
          </S.AvatarNoImg>
        )}
        {closeIcon && (
          <S.IconContainer state="marked">
            <FiX color="#fff" size={8} />
          </S.IconContainer>
        )}
      </S.Container>
      {bottomName && <S.BottomName numberOfLines={1}>{name}</S.BottomName>}
    </S.Wrapper>
  );
};

export default CustomAvatar;
