import React, {useState} from 'react';
import { Text, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default ({navigation}) => {

  const [name, setName] = useState('')

  function handle() {
    alert("Deu certo!");
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
          fontSize: 28,
        }}>
        👾
      </Text>
      <Text
        style={{
          color: "#FFBF28",
          fontSize: 18,
          fontFamily: "Montserrat_700Bold",
          paddingHorizontal: 20
        }}>
        Prontinho
      </Text>

      <Text
        style={{
          color: "#FFBF28",
          fontSize: 12,
          fontFamily: 'Montserrat_600SemiBold',     
          textAlign: "center",
          paddingHorizontal: 30,
          marginVertical: 20
        }}>
        Agora vamos começar nossa jornada de aprendizado
      </Text>

      <TouchableOpacity
            onPress={() => handle()}
            style={{
              width: 250,
              backgroundColor:  "#FFBF28",
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 16,
                textAlign: "center",
                color: "white"
              }}
            >
              Começar
            </Text>
          </TouchableOpacity>
    </View>
  );
}
