import * as React from 'react';
import { 
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  Animated,
  Easing 
} from 'react-native';
import Constants from 'expo-constants';
import Slider from './images';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplashScreen: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
          this.setState({ showSplashScreen: false });
        }, 4000);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Красота чернобелых панд:</Text>
        <Slider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 30,
  },
});

export default App;