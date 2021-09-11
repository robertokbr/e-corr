import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';
import { Container } from './src/styles/globalStyle';
import HooksProvider from './src/hooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    rob_regular: Roboto_400Regular,
    rob_medium: Roboto_500Medium,
    rob_bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <HooksProvider>
          <Routes />
        </HooksProvider>
      </Container>
    </NavigationContainer>
  );
}
