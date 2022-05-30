import * as React from 'react';
import { Text, View,Image, StyleSheet, Pressable, Button, TouchableOpacity, ImageBackground, Dimensions, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';


const Stack = createNativeStackNavigator();

const Contacts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Контакты' }}
        />
        <Stack.Screen 
        name="Профиль" 
        component={ProfileScreen} 
        />
        <Stack.Screen 
        name="Call" 
        component={CallScreen} 
        />
        <Stack.Screen 
        name="VideoCall" 
        component={VideoCallScreen} 
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable 
        onPress={() =>
          navigation.navigate('Профиль', { name: 'Котейка', photo: 'https://www.belanta.vet/vet-blog/wp-content/uploads/2018/11/kak-vybrat-kotenka-dlya-doma_01_1.jpg', phone: "89889465197" })
        }
        style={styles.button}
      >
      <BlurView intensity={50} tint="dark" style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://www.belanta.vet/vet-blog/wp-content/uploads/2018/11/kak-vybrat-kotenka-dlya-doma_01_1.jpg',
        }}
        />
         <Text style={styles.text}>Котейка</Text>
         </BlurView>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Профиль', { name: 'Попугайчик', photo: 'https://popugauka.ru/wp-content/uploads/2017/07/12312661763_5de777ab3a_k-768x506.jpg', phone: "89887531595" })
        }
        style={styles.button}
      >
         <BlurView intensity={50} tint="dark" style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://popugauka.ru/wp-content/uploads/2017/07/12312661763_5de777ab3a_k-768x506.jpg',
        }}
        />
         <Text style={styles.text}>Попугайчик</Text>
         </BlurView>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Профиль', { name: 'Песик', photo: 'https://a.d-cd.net/b80a946s-960.jpg', phone: "89884561234" })
        }
        style={styles.button}
      >
          <BlurView intensity={50} tint="dark" style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://a.d-cd.net/b80a946s-960.jpg',
        }}
        />
         <Text style={styles.text}>Песик</Text>
         </BlurView>
      </Pressable>

      <Pressable 
        onPress={() =>
          navigation.navigate('Профиль', { name: 'Гепардик', photo: 'https://www.rabstol.net/uploads/gallery/main/349/rabstol_net_cheetah_12.jpg', phone: '89881237849' })
        }
        style={styles.button}
      >
          <BlurView intensity={50} tint="dark" style={styles.container}>
        <Image style = {styles.picture}
        source={{
          uri: 'https://www.rabstol.net/uploads/gallery/main/349/rabstol_net_cheetah_12.jpg',
        }}
        />
         <Text style={styles.text}>Гепардик</Text>
         </BlurView>
      </Pressable>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
  <View style={styles.profile}>
      <Image style = {styles.profilePicture}
        source={{
          uri: route.params.photo,
        }}
        />
      <Text style={styles.profileText}>{route.params.name}</Text>
      <Text style={styles.phoneNumber}> {route.params.phone} </Text> 

      <View style={styles.actionContainer}>
    
        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('Call', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>

          <Image style = {styles.icon}
                  source={{
                  uri: 'https://naliboki.stolbtsy-edu.gov.by/files/00524/obj/120/30163/img/540f27e940c088c6138b98cc_5fe55dd98ec52.jpg',
                  }}
                />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}>
            <Image style = {styles.icon}
                source={{
                uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png',
                }}
              />
        </TouchableOpacity>

        <TouchableOpacity  style={{flex: 1}}
          onPress={() =>
            navigation.navigate('VideoCall', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
          }>
          <Image style = {styles.icon} 
            source={{
            uri: 'https://icon-library.com/images/video-call-icon/video-call-icon-29.jpg',
            }}
          />
        </TouchableOpacity >

        <TouchableOpacity  style={{flex: 1}}>
            <Image style = {styles.icon}
                source={{
                uri: 'https://cdn.icon-icons.com/icons2/1130/PNG/512/sharethissocialcircularbutton_80252.png',
                }}
              />
        </TouchableOpacity>
      </View>
    </View>  
)};

const CallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold"}}>
           Звоним {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Профиль', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const VideoCallScreen = ({ navigation, route }) => {
  return (
      <ImageBackground style={{ flex: 1}} 
        source={{
          uri: route.params.photo,
        }}>
        <View style={{alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: 'rgba(1,1,1,0.7)'}}>
          <Image style={{width: 150, height: 150, borderRadius: 100}} source={{uri:route.params.photo}}/>
          <Text style={{textAlign: "center", fontSize:28, color:"rgb(255,255,255)", fontWeight: "bold", marginLeft: 20, marginRight: 20}}>
           Начинаем видеозвонок с {route.params.name}...
          </Text>
          <Text style={{textAlign: "center", fontSize:20, color:"rgb(255,255,255)"}}>{route.params.phone}</Text>
          <TouchableOpacity 
            onPress={() =>
            navigation.navigate('Профиль', {name: route.params.name, photo: route.params.photo, phone: route.params.phone})
            }>
          <Image style={{width: 50, height: 50, marginTop: 150}} source={{uri: "https://i.ya-webdesign.com/images/red-phone-icon-png-8.png"}}/>
        </TouchableOpacity>
        </View>
      </ImageBackground>
     
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "rgb(255, 255, 255)"
  },
  profile:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20
  },
  button: {
    height: 80,
    backgroundColor : "rgb(250, 250, 250)",
    borderRadius: 8,
    borderColor: "rgb(1,1,1)",
    margin: 1
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30
  },
  picture: {
    marginTop: 15,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 100
  },
  profilePicture: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 10
  },
  profileText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20
  },
  phoneNumber: {
    fontSize: 20
  },
  icon: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    width: 30,
    height: 30,
    borderRadius: 100,
    marginBottom: 30
  },
  actionContainer: {
    marginRight: 80,
    marginLeft: 80,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  }
});


export default Contacts;