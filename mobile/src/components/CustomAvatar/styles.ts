import styled, { css } from 'styled-components/native';

interface AvatarNoImgColor {
  color?: string;
  bigger?: boolean;
}

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  max-width: 64px;
  max-height: 64px;
  overflow: hidden;
`;

export const Container = styled.View`
  position: relative;
`;

export const AvatarImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const AvatarNoImg = styled.View<AvatarNoImgColor>`
  background: #56ccf2;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  ${(props: { bigger: any }) =>
    props.bigger &&
    css`
      width: 64px;
      height: 64px;
      border-radius: 32px;
    `};
  align-items: center;
  justify-content: center;
`;

export const AvatarName = styled.Text`
  font-size: 18px;
  font-weight: 200;
  color: #ffffff;
  letter-spacing: 0.15px;
  line-height: 22px;
`;

export const Icon = styled.Image``;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: -8px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const BottomName = styled.Text`
  font-weight: 200;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  margin-top: 4px;
  color: #000;
`;
