import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 

export default class Register extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
          padding: 40,
          paddingTop: 50,
          backgroundColor: 'white'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Image
            source={require('../assets/image.jpg')}
            style={{
              width: 250,
              height: 80,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Регистрация
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'grey',
            marginBottom: 50,
          }}>
          Заполните пункты ниже
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          <Icon name="mail" size={24} color="#00716F" />
          <TextInput placeholder="Email" style={{ paddingHorizontal: 10 }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          <Icon name="lock" size={24} color="#00716F" />
          <TextInput
            placeholder="Пароль"
            secureTextEntry
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          marginBottom: 30,
          paddingHorizontal: 10,
          borderColor: '#00716F',
          paddingVertical: 5,
          borderRadius: 10,
        }}>
          <Icon name="lock" size={24} color="#00716F" />
          <TextInput 
            placeholder="Повторите пароль"
            secureTextEntry
            style={{paddingHorizontal: 10}}
          />
        </View>

        <Button 
          title="Регистрация"
          color="#00716F"
          style={{
            marginHorizontal: 10,
          }}
          onPress={() => Alert.alert('Вы зарегистрировались!')} 
        />

        <Text 
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 30,
            color: '#00716F'
          }}
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        >
          Войти
        </Text>

      </View>
    );
  }
}