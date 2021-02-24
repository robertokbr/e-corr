import React from 'react';
import { Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FlatList } from 'react-native-gesture-handler';
import * as S from './styles';
import CustomAvatar from '../../../components/CustomAvatar';

interface Params {
  point: Point;
}

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { point } = route.params as Params;

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleComposeWhatsapp() {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=+55${point.number}&text=E-Corr:` +
        `\nOla, gostaria de me informar sobre o anúncio "${point.title}"`,
    );
  }

  if (!point) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.BackButton onPress={handleNavigateBack}>
          <Icon name="arrow-left" color="#fff" size={24} />
        </S.BackButton>
        <S.ImagesContainer>
          <FlatList
            data={point.images}
            onRefresh={() => {}}
            refreshing={false}
            pinchGestureEnabled
            pagingEnabled
            style={{
              maxHeight: 200,
            }}
            keyExtractor={image => image}
            renderItem={image => {
              return (
                <S.PointImage
                  key={image}
                  source={{
                    uri: image.item,
                  }}
                />
              );
            }}
          />
          <S.DotIndicatorContainer>
            {point.images?.map(image => (
              <S.DotIndicator key={image} />
            ))}
          </S.DotIndicatorContainer>
        </S.ImagesContainer>
        <S.ContentContainer>
          <S.Title>R$ {point.price}</S.Title>
          <S.SubTitle>{point.title}</S.SubTitle>
          <S.Separtor />
          <S.SubTitle>Descrição</S.SubTitle>
          <S.TextContainer>
            <S.Description>{point.description}</S.Description>
          </S.TextContainer>
          <S.Separtor />
          <S.SubTitle>Detalhes</S.SubTitle>
          <S.TextContainer>
            <S.DetailsContainer>
              <S.DetailTitle>Categoria</S.DetailTitle>
              <S.DetailText>{point.category}</S.DetailText>
            </S.DetailsContainer>
            <S.DetailsContainer>
              <S.DetailTitle>Tipo</S.DetailTitle>
              <S.DetailText>{point.type}</S.DetailText>
            </S.DetailsContainer>
          </S.TextContainer>
          <S.Separtor />
          <S.SubTitle>Localização</S.SubTitle>
          <S.TextContainer>
            <S.DetailTitle>{point.address}</S.DetailTitle>
          </S.TextContainer>
          <S.Separtor />
          <S.SubTitle>Corretor</S.SubTitle>
          <S.UserContainer>
            <CustomAvatar
              name={point.user?.name}
              image={point.user?.avatar || undefined}
              largeAvatar
            />
            <S.UserData>
              <S.SubTitle>{point.user?.name}</S.SubTitle>
              <S.DetailText>{point.user?.email}</S.DetailText>
            </S.UserData>
          </S.UserContainer>
          <S.Separtor />
          <S.Button onPress={handleComposeWhatsapp}>
            <FontAwesome name="whatsapp" size={20} color="#fff" />
            <S.ButtonText>whatsapp</S.ButtonText>
          </S.Button>
          <S.Separtor />
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Detail;
