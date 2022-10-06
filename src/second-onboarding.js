import React, {useState} from 'react';
import { Text, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default ({navigation}) => {

  const [name, setName] = useState('')

  function handle() {
    navigation.navigate("ThirdOnboarding")
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
          color:  "#F2637E",
          fontSize: 20,
          fontFamily: 'Montserrat_700Bold',
          paddingHorizontal: 20
        }}>
        Como podemos chamar você?
      </Text>

      <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Digite um nome"
            style={{
              borderBottomWidth: 1,
              borderColor: "#CFCFCF",
              marginVertical: 20,
              width: 250,
              textAlign: "center"
            }}
          />
          <TouchableOpacity
            onPress={() => handle()}
            style={{
              width: 250,
              backgroundColor:  "#F2637E",
              paddingVertical: 10,
              borderRadius: 10
            }}
            disabled={name.length===0}
          >
            <Text
              style={{
                fontFamily: 'Montserrat_500Medium',
                fontSize: 16,
                textAlign: "center",
                color: "white"
              }}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
    </View>
  );
}
