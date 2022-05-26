import React from 'react';
import { Text, View, StyleSheet, TextInput,  TouchableOpacity} from 'react-native';

const Test = ({ navigation }) => {
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  function typeOf(obj) {
    if (/^\d+$/.test(obj) == true) {
      return obj
    }
    else {
      return NaN
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textread}>Для прохождения теста необходимо лежать 5 минут. Время теста около 10-15 минут.</Text>
      <Text style={styles.paragraph}>Тест</Text>
      <Text style={styles.textread}>1. Нужно пойти и полежать 5 минут почти без движения.</Text>
      <Text style={styles.textread}>2. Сосчитайте пульс в течение минуты.</Text>
      <Text style={styles.textread}>3. Введите значение пульса в положении лежа:</Text>
      <TextInput
        value={number1}
        style={styles.input}
        onChangeText={(number1) => onChangeNumber1(number1)}
        placeholder={'Введите значение пульса'}
        />
      <Text style={styles.textread}>4. Встаньте и постойте почти без движения 5 минут.</Text>
      <Text style={styles.textread}>5. Сосчитайте пульс в течение минуты.</Text>
      <Text style={styles.textread}>6. Введите значение пульса в положении стоя:</Text>
       <TextInput
        value={number2}
        style={styles.input}
        onChangeText={(number2) => onChangeNumber2(number2)}
        placeholder={'Введите значение пульса'}
        />
      <Text style={styles.textread}>7. Нажмите «Получить результат». Тест завершен!</Text>
      <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() =>
                navigation.navigate('Result', {
                  paramKey1: parseInt(typeOf(number1)),
                  paramKey2: parseInt(typeOf(number2)),
                })
              }>               
              <Text style={styles.buttontext}>ПОЛУЧИТЬ РЕЗУЛЬТАТ</Text>
            </TouchableOpacity>
       </View>
    </View>
  );
};


export default Test;

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'left',
    padding: 24,
  },
   textread: {
    fontSize: 16,
    textAlign: 'left',
    padding: 3,
  },
  paragraph: {
    margin: 10,
    marginTop: 10,
    fontSize: 25,
    textAlign: 'left',
    color: '#960000',
  },
  input: {
    width: '70%',
    margin: 6,
    borderWidth: 1,
    height: 35,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20, 
  },
    buttons: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#960000',
    borderRadius: 20,
    width: 280,
    alignItems: 'center',
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  buttontext: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Georgia',
  }

});
