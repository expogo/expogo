import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Animated,
  TouchableOpacity,
  Alert,
  useWindowDimensions
} from "react-native";
 
const images = ['https://simple-fauna.ru/wp-content/uploads/2015/10/bolshaya-panda-vneshnij-vid.jpg','https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/dve-pandii-1-595a7e9f22c89.jpg', 'https://web-zoopark.ru/wp-content/uploads/2018/07/1-237.jpg', 'https://static.ngs.ru/news/2017/preview/9e25b4a8de7e630be0a92415166c95830d5f251e_640_630_c.jpg'];
 
const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current 
 
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

 
  return (
      <Animated.View style={[styles.scrollContainer, {opacity: fadeAnim}]}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={[{flex: 1, }, { width: windowWidth, height: 250 }]}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>
                <View style={{paddingHorizontal: 16, paddingTop: 5}}>
                  <TouchableOpacity style={styles.buttonStyle} onPress={() => Alert.alert('Я тоже думаю, что они классные!')}>
              <Text style={styles.buttonText}>Панды классные?</Text>
            </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </Animated.View>
  );
}
 
const styles = StyleSheet.create({
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  }
});
 
export default Slider;