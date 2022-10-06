import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { image } from '../resources';
import { AntDesign } from '@expo/vector-icons';

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export default function App({navigation}) {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) return <Text>Carregando</Text>;

  function handle() {
    navigation.navigate("SecondOnboarding")
  }

  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          color: '#04BFBF',
          fontSize: 20,
          fontFamily: 'Montserrat_700Bold',
          paddingHorizontal: 20
        }}>
        Acompanhe a LearninLab de forma fácil.
      </Text>
      <Image
        source={image}
        style={{
          height: 250,
          width: 250,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: '#04BFBF',
          paddingVertical: 20,
          paddingHorizontal: 30,
          fontFamily: "Montserrat_700Bold"
        }}>
        Não esqueça de acompanhar nossas redes sociais. Nós cuidamos de lembrar
        você sempre que precisar.
      </Text>
      <TouchableOpacity
        onPress={() => handle()}
        style={{
          height: 60,
          width: 60,
          backgroundColor: '#04BFBF',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
       <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}