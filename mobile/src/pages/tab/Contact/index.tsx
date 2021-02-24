import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

import * as S from './styles';

const Contact: React.FC = () => {
  function handleComposeWhatsapp(number: string) {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${number}&text=E-Corr: \nOla, gostaria de me informar sobre`,
    );
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.UserContainer>
          <S.UserData>
            <S.SubTitle>👨‍💼 Corretor </S.SubTitle>
            <S.DetailText>Davi Filho</S.DetailText>
          </S.UserData>
        </S.UserContainer>
        <S.Button onPress={() => handleComposeWhatsapp('+559198160-0302')}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <S.ButtonText>whatsapp</S.ButtonText>
        </S.Button>
        <S.Separtor />
        <S.UserContainer>
          <S.UserData>
            <S.SubTitle>👨‍💻 Desenvolvedor </S.SubTitle>
            <S.DetailText>Roberto Junior</S.DetailText>
          </S.UserData>
        </S.UserContainer>
        <S.Button onPress={() => handleComposeWhatsapp('+5591983924120')}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <S.ButtonText>whatsapp</S.ButtonText>
        </S.Button>
        <S.Separtor />
        <S.UserContainer>
          <S.UserData>
            <S.SubTitle>📞 Dúvidas</S.SubTitle>
            <S.DetailText>
              Dúvidas sobre o aplicativo?{`\n`}Entre em contato através do botão
              a baixo
            </S.DetailText>
          </S.UserData>
        </S.UserContainer>
        <S.Button onPress={() => handleComposeWhatsapp('+559199193-9855')}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <S.ButtonText>whatsapp</S.ButtonText>
        </S.Button>
        <S.Separtor />
      </S.Container>
    </S.Wrapper>
  );
};

export default Contact;
