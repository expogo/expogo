import * as React from 'react';
import { useEffect } from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet, BackHandler, Alert } from 'react-native';
import Constants from 'expo-constants';
import Items from "./Items";
import Header from "./Header";

import { Card } from 'react-native-paper';



export default function App() {
   const backAction = () => {
    Alert.alert("Внимание!", "Вы точно хотите выйти?", [
      {
        text: "Отмена",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Да", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const renderItem = (item) => {
    return (
      <Items
        iconName={item.item.iconName}
        name={item.item.name}
        description={item.item.description}
        color={item.item.color}
      ></Items>
    );
  };

  const keyExtractor = (item) => {
    item.id;
  };

  return (
    <View>
      <Header />
      <FlatList
        style={styles.exercisesFlatListContainer}
        data={exercisesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisesFlatListContainer: { width: "100%", height: "89%" },
});

const exercisesData = [
  {
    id: 0,
    iconName: "cat",
    name: "Мята",
    description:
      "Резвый",
    color:'#5c4544'
  },
  {
    id: 1,
    iconName: "dog",
    name: "Барри",
    description:
      "Спокойный",
    color:'#403d31'
  },
  {
    id: 2,
    iconName: "cat",
    name: "Соня",
    description:
      "Ленивый",
        color:'#d1c776'
  },
  {
    id: 3,
    iconName: "dog",
    name: "Бандит",
    description:
      "Бесстрашный",
        color:'#7d5746'
  },
  {
    id: 4,
    iconName: "cat",
    name: "Пушок",
    description:
      "Шумный",
      color:'#b87896'
  },
  {
    id: 5,
    iconName: "dog",
    name: "Никки",
    description:
      "Дружелюбный",
      color:'#7d7266'
  },
  {
    id: 6,
    iconName: "dog",
    name: "Денни",
    description: "Верный",
    color:'#806d13'
  },
];