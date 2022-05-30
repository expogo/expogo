import React from 'react';
import {Share, View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts'


export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
      
 
    render(){
        return(
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#095f8b"
            }}
          >
              <View style={{
                  height:260,
                  width:"100%",
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      width:"100%",
                      paddingTop:40,
                      alignItems:"center"
                  }}>
                      <View style={{
                          width:"50%"
                      }}>
                    
                 
                      </View>
                      <View style={{
                          width:"50%",
                          alignItems:"flex-end",
                      }}>
                          <Icon name = "dots-two-vertical"
                            size={22}
                            color="#d2d2d2"
                            style={{
                                marginRight:-7,
                                marginTop:7
                            }}/>
                      </View>
                  </View>


                <Text style={{
                  
                    fontSize:25,
                    color:"#FFF",
                    paddingVertical:25,
                    textAlign:'center',

                }}>Фото друзей</Text>

                <View style={{
                    flexDirection:"row",
                    borderColor:"#9ca1a2",
                    borderRadius:25,
                    borderWidth:2,
                    height:'15%',
                    backgroundColor:"#FFF",
                    paddingVertical:5,
                    alignItems:"center"
                }}>
                    <TextInput
                        placeholder="поиск ..."
                        style={{
                            paddingHorizontal:20,
                         
                            fontSize:12,
                            width:"90%",
                            color:"#000"
                        }}
                    />
                    <Icon name="magnifying-glass"
                          size={15}
                          color="#9ca1a2"/>
                </View>

              </View>

              <View style={{
                  backgroundColor:"#FFF",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  height:1650,
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#095f8b":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6
                        }}
                      >
                          <Text style={{
                              
                              color:this.state.popularSelected ? "#095f8b":"#9ca1a2"
                          }}>ПОПУЛЯРНОЕ</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor:this.state.popularSelected ? "#FFF":"#095f8b",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                      >
                          <Text style={{
                    
                              color:this.state.popularSelected ? "#9ca1a2":"#095f8b"
                          }}>НЕДАВНЕЕ</Text>
                      </TouchableOpacity>
                  </View>
                  
                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail', {name:'Александр Блок', n:'280', n2:'2,107',n3:'104',n4:'2,089',photoS:[require('../images/c1.jpg')], photoSS:[require('../images/b2.jpg')]})}
                        name="Александр Блок"
                        profile={require('../images/c1.jpg')}
                        photo={require('../images/b1.jpg')}
                        min = "5"
                        
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#095f8b",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>



                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#095f8b",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail', {name:'Катрина Франс', n:'380', n2:'2,133',n3:'2,104',n4:'2,089', photoS:[require('../images/c2.jpg')], photoSS:[require('../images/b3c.jpg')]})}
                        name="Катрина Франс"
                       profile={require('../images/c2.jpg')}
                        photo={require('../images/b2.jpg')}
                        min = "15"
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail', {name:'Петр Петров', n:'32', n2:'2,337',n3:'22',n4:'243', photoS:[require('../images/c3.jpg')], photoSS:[require('../images/b1.jpg')]})}
                        name="Петр Петров"
                       profile={require('../images/c3.jpg')}
                        photo={require('../images/b3c.jpg')}
                        min = "20"
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#095f8b",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>
                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#095f8b",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail', {name:'Павел Рязанов', n:'220', n2:'2,875',n3:'44',n4:'2,083', photoS:[require('../images/c4.jpg')], photoSS:[require('../images/b5.jpg')]})}
                        name="Павел Рязанов"
                       profile={require('../images/c4.jpg')}
                        photo={require('../images/b4.jpg')}
                        min = "40"
                      />

                  </View>
                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail', {name:'Катрина Франс', n:'380', n2:'2,133',n3:'2,104',n4:'2,089', photoS:[require('../images/c2.jpg')], photoSS:[require('../images/b3c.jpg')]})}
                        name="Катрина Франс"
                       profile={require('../images/c2.jpg')}
                        photo={require('../images/b5.jpg')}
                        min = "44"
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#095f8b",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>
              </View>
            
          </ScrollView>
        )
    }
}