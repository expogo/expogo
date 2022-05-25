import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function Login({ navigation }) {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
      <View
        style={{
          flex: 1, 
          justifyContent: 'center',
     
          padding: 40,
          paddingTop: 70,
          backgroundColor: '#355ba6'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/bg2.jpg')}
            style={{
              width: "100%",
              height: 200,
               display:"block"
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Авторизация
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#b4bccc',
            marginBottom: 50,
            marginTop:20,
          }}>
          Введите логин и пароль, которые создавали ранее при регистрации.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#4b6bab'
          }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#152647" />
           <TextInput placeholder="Email"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#b4bccc' }}
           onChangeText={(inputLogin) => setLogin(inputLogin)} />
        </View>

        <View style={{
          flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#4b6bab'
        }}>
          <AntDesign name="lock" size={24} color="#152647" />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor='#b4bccc'
            secureTextEntry
            style={{ paddingHorizontal: 10 }}
            onChangeText={(inputPassword) => setPassword(inputPassword)}
          />
        </View>

        <Button 
          title="Войти"
          color="black"
          onPress={() => {
              navigation.navigate("NewUser", {
                login: login,
                password: password,
                message: "Вы успешно зашли",
                
              });
            }}
        />
        <View style={{alignItems:'center', marginTop:20,}}>
        <Text style={{fontSize:16, color:"#152647"}}>Еще нет профиля?</Text>
        <Text 
          style={{
           fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 15,
            color: '#b4bccc'
          }}
          onPress={() =>
            navigation.navigate('Registration')
          }
        >
          Зарегистрироваться
        </Text>
        </View>
      </View>
    );
  
}