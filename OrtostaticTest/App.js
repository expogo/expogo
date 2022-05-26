import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './components/Test';
import Result from './components/Result';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            title: 'Ортостатический тест',
            headerStyle: {
              backgroundColor: '#960000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: 'Результат',
            headerStyle: {
              backgroundColor: '#960000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;