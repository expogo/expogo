import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

const Result = ({ route, navigation }) => {
  const liePulse = route.params.paramKey1;
  const standPulse = route.params.paramKey2;

  if (liePulse <=45 || standPulse <= 60 || liePulse >= 70 || standPulse >= 100) {
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}>Проверьте введенные данные!</Text>
          <Text style={styles.textStyle}>Если данные введены верно, то стоит срочно обратиться к терапевту, так как есть подозрение на аритмию. </Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Test')}>
            <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
          </TouchableOpacity>
      </View>
     );
  } else if (standPulse - liePulse < 1) {
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>Обратитесь к терапевту! </Text>
      <Text style={styles.textStyle}>Если данные введены верно, то стоит срочно обратиться к терапевту, так как есть подозрение на патологию нервной системы.</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
      </TouchableOpacity>
      </View>
    );
  } else if (standPulse - liePulse < 12) {
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>Ваши результаты в норме!</Text>
      <Text style={styles.textStyle}>По введенным данным у вас хороший уровень физической подготовки!</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
      </TouchableOpacity>
      </View>
    );
  } else if (standPulse - liePulse < 18) {
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>Ваши результаты в норме!</Text>
      <Text style={styles.textStyle}>По введенным данным ваше здоровье в норме, но рекомендуются дополнительные физические упражнения!</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
      </TouchableOpacity>
      </View>
    );
  } else if (standPulse - liePulse < 25) {
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>Обратитесь к терапевту!</Text>
      <Text style={styles.textStyle}>Если данные введены верно, то стоит срочно обратиться к терапевту, так как есть подозрение наличия начальных стадий тахикардии.</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
      </TouchableOpacity>
      </View>
    );
  } else if (standPulse - liePulse > 25) {
    return (
      <View style={styles.container}>
      <Text style={styles.paragraph}>Обратитесь к терапевту!</Text>
      <Text style={styles.textStyle}>Если данные введены верно, то стоит срочно обратиться к терапевту, так как есть подозрения на заболевания сердечно-сосудистой системы или других проблем со здоровьем.</Text>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Test')}>
        <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
      </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}>Проверьте введенные данные!</Text>
          <Text style={styles.textStyle}>Проверьте правильность введенных данных, наличие обоих значений и их формат. </Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Test')}>
            <Text style={styles.buttontext}>ВЕРНУТЬСЯ К ТЕСТУ</Text>
          </TouchableOpacity>
      </View>
     );
  }
};

export default Result;

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 24,
    textAlign: 'center',
    color: '#960000',
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 22,
    textAlign: 'center',
    color: '#696969',
    marginTop: 20,
  },
  buttons: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#960000',
    borderRadius: 20,
    width: 280,
    alignItems: 'center',
  },
  buttontext: {
    marginVertical: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Georgia',
  }
});
