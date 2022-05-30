import React from 'react';
import {Text,View,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"

export default class Detail extends React.Component{
    state={
        collectionSelected:true
    }
    onTabPressed=()=>{
        this.setState({ collectionSelected:!this.state.collectionSelected})
    }

    render(){
        const { navigation } = this.props;  
            const user_name = navigation.getParam('name', 'NO-User');  
            const user_photo = navigation.getParam('photoS', 'NO-photot')
             const user_photo2 = navigation.getParam('photoSS', 'NO-photot')
            const user_num1 = navigation.getParam('n', 'some default value')
            const user_num2 = navigation.getParam('n2', 'n1')
            const user_num3 = navigation.getParam('n3', 'n1')
            const user_num4 = navigation.getParam('n4', 'n1')
          console.log(user_num2)
        return(
            <View style={{
                backgroundColor:"#095f8b",
                height:"100%",
            }}>
                <View style={{
                    paddingHorizontal:40,
                    backgroundColor:"#FFF",
                    height:"50%",
                    borderBottomLeftRadius:50,
                    borderBottomRightRadius:50
                }}>
                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        marginTop:40
                    }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}
                            style={{
                                width:"50%",
                            }}
                        >

                            <Icon
                                name="chevron-left"
                                size={24}
                                color="#095f8b"
                            />
                        </TouchableOpacity>
                        <View style={{
                            width:"50%",
                            alignItems:"flex-end"
                        }}>
                            <Icon
                                name="dots-two-vertical"
                                size={24}
                                color="#095f8b"
                            />
                        </View>
                    </View>

                    <Image
                        source={Number(user_photo)}
                        style={{
                            height:150,
                            width:150,
                            borderRadius:40,
                            alignSelf:"center",
                            marginVertical:20
                        }}
                    />
                    <Text style={{
                        fontSize:22,
                
                        color:"#095f8b",
                        alignSelf:"center"
                    }}>
                        {(JSON.stringify(user_name)).split('"')}
                     
                    </Text>
                    <Text style={{
            
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                        Россия
                    </Text>

                    
                    <View style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        marginTop:20
                    }}>
                        <View>
                                <Text style={{
                                  
                                    fontSize:15,
                                    color:"#095f8b",
                                    alignSelf:"center"
                                }}>{(JSON.stringify(user_num1)).split('"')}</Text>
                                <Text style={{
                                  
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    фото
                                </Text>
                        </View>

                        <View style={{marginHorizontal:40}}>
                                <Text style={{
                                 
                                    fontSize:15,
                                    color:"#095f8b",
                                    alignSelf:"center"
                                }}>{(JSON.stringify(user_num2)).split('"')}</Text>
                                <Text style={{
                                    
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    следят
                                </Text>
                        </View>


                        <View>
                                <Text style={{
                              
                                    fontSize:15,
                                    color:"#095f8b",
                                    alignSelf:"center"
                                }}>{(JSON.stringify(user_num3)).split('"')}</Text>
                                <Text style={{
                               
                                    fontSize:16,
                                    color:"#9ca1a2",
                                    alignSelf:"center"
                                }}>
                                    следит
                                </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40,
                    paddingTop:20
                }}>
                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#FFF":"#095f8b",
                            borderBottomWidth:4,
                            paddingVertical:6,
                        }}
                    >
                        <Text style={{
                            
                            color:this.state.collectionSelected ? "#FFF":"#9ca1a2"
                        }}>ВСЕ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.onTabPressed}
                        style={{
                            borderBottomColor: this.state.collectionSelected ? "#095f8b":"#FFF",
                            borderBottomWidth:4,
                            paddingVertical:6,
                            marginLeft:30
                        }}
                    >
                        <Text style={{
                          
                            color:this.state.collectionSelected ? "#9ca1a2":"#FFF"
                        }}>ЛЮБИМОЕ</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row"}}>
                    <View style={{
                        backgroundColor:"#728c8e",
                        height:260,
                        width:280,
                        marginHorizontal:40,
                        borderRadius:30,
                        marginTop:30
                    }}>
                        <ImageBackground
                        source={Number(user_photo2)}
                            style={{
                                width:280,
                                height:180
                            }}
                            imageStyle={{
                                borderRadius:30
                            }}
                        >
                            <View style={{
                                width:"100%",
                                alignItems:"flex-end"
                            }}>
                                    <TouchableOpacity style={{
                                        width:40,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        marginTop:25,
                                        borderRadius:10,
                                        padding:8,
                                        marginRight:20,
                                        backgroundColor:"#6f8d90"
                                    }}>
                                            <Icon
                                                name="edit"
                                                size={20}
                                                color="#FFF"
                                            />
                                    </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                        <View style={{
                            paddingVertical:20,
                            paddingHorizontal:30
                        }}>
                            <Text style={{
                      
                                color:"#FFF",
                                fontSize:15
                            }}>Последнее</Text>
                            <Text style={{
                           
                                color:"#dedede",
                                fontSize:12
                            }}>
                                {(JSON.stringify(user_num4)).split('"')} фото
                            </Text>
                        </View>
                    </View>
                        
                    
                    <View style={{
                        height:180,
                        backgroundColor:"#FFF",
                        width:20,
                        marginLeft:-20,
                        marginTop:70,
                        borderTopLeftRadius:20,
                        borderBottomLeftRadius:20
                    }}>

                    </View>
                </View>
            </View>
        )
    }
}