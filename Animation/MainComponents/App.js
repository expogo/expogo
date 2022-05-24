import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView, StatusBar, Button, Alert  } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);
export default function App() {
  return (
       <SafeAreaView style={styles.container}>
      
      
      <ScrollView style={styles.scrollView}
      
          vertical = {true}
          automaticallyAdjustContentInsets={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          onMomentumScrollEnd={this.onAnimationEnd}>
          
        <Text style={styles.text}>
          Unlike the more generic ScrollView, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data.
        </Text>
      
      <View>
      <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={true}>
      <Text>When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.</Text>
      </ScrollView>
      </View>
   
      </ScrollView>
       <View style={styles.viewst}>
      <ScrollView>
      <Text style={styles.viewstext}>To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.</Text>
       <Separator/>
       <Button 
        title="Press me"
        color="black"
        
        onPress={() => Alert.alert('Это была кнопка')}
      />
       <Separator />
       <Text style={{paddingTop:10, fontSize:30, fontWeight: 'bold'}}>List Views</Text>
        <Text style={{paddingTop:5}}>Many of the following components provide wrappers for commonly used Android classes.</Text>
      </ScrollView>
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
    separator: {
    borderBottomColor: '#737373',
    marginRight:20,
    marginTop:5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

    viewst: {
    flex: 4,
    colora:"red",
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20
  },    
    viewstext: {
        textAlign: 'left',
  },
  scrollView: {
    indicatorStyle: "black",
    minimumZoomScale:6,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 33,
  },
});