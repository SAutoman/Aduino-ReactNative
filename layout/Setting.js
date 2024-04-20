import React, {useState} from 'react'; // Import React to define a functional component

import { StyleSheet, Text, View, Switch } from 'react-native';

import { Input, NativeBaseProvider,Button, Icon, Box, Image, AspectRatio } from 'native-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faExclamation, faGear, faHouse, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { marginTop } from 'styled-system';



function Setting() { // Add parentheses after the function name
    const navigation = useNavigation();

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);

    const toggleSwitch1 = () => {
        setIsEnabled1(previousState => !previousState);
      };

    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState);
      };
    
    const toggleSwitch3 = () => {
        setIsEnabled3(previousState => !previousState);
    }

    const handleHome = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Home');
      };

      const handleNotificate = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Home');
      };

      const handleSetting = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Setting');
      };

      const handleLogin = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Login');
      };

    return (
        <View style={styles.container}>  
            <View style={styles.Header} >
                <Text style={styles.headertext}>Inicio</Text>
            </View>

            <View style={styles.Middle}>
                <View style={styles.middleitem1}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>Permitir Notificaciones</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                            />
                    </View>
                </View>

                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>Vibraciones</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                            />
                    </View>


                </View>

                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>Sonido</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                            />
                    </View>


                </View>




                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>Acerca De</Text>
                        <Button style={styles.btnlogout} onPress={handleLogin}><FontAwesomeIcon icon={faExclamation} size={20} color="black" /></Button>

                    </View>


                </View>


            </View>

            <View style={styles.Footer}>
                <Button backgroundColor={'white'} onPress={handleHome}><FontAwesomeIcon icon={faHouse} size={40} color="black" /></Button>
                <Button backgroundColor={'white'} onPress={handleNotificate}><FontAwesomeIcon icon={faBell} size={40} color="black" /></Button>
                <Button backgroundColor={'white'} onPress={handleSetting}><FontAwesomeIcon icon={faGear} size={40} color="black" /></Button>
            </View>


        </View>
    );
}

export default () => {
    return (
      <NativeBaseProvider>
       
          <Setting />
        
      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({

    itemtitle: {
        marginLeft: 20
    },
    btnlogout: {
        borderRadius: 50,
        backgroundColor: '#676060'
    },
    container: {
      flex: 1,
      backgroundColor: '#a9a6ab',
      marginTop:20,
      height:''
    },
    dataheader: {
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
    ,
    LoginText: {
      marginTop:100,
      fontSize:30,
      fontWeight:'bold',
    },
    Header:{
        height:100,
        backgroundColor:'#a134df',


        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 30
    }
    ,
    headertext : {
        color:'white',
        fontSize:50
        
    }
    ,
    Middle:{
        alignItems:'center',
        justifyContent:'center',
  
        height: '70%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
  
        
      },
    firstMiddle: {
        height:130,
        borderRadius: 30,
        backgroundColor: 'white',
        top:'10%'
    },

    secondMiddle: {
        height:130,
        borderRadius: 30,
        backgroundColor: 'white',
        top:'15%'
    },
    Footer: {
        height:100,
        borderRadius: 30,
        backgroundColor: 'white',
        top:'0%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    middleitem: {
        height: '10%',
        width: '100%',

        borderTopColor: 'black',
        borderTopWidth: 5,
        justifyContent: 'center',


    },
    middleitem1: {
        height: '10%',
        width: '100%',

        borderTopColor: 'black',
        borderTopWidth: 5,
        justifyContent: 'center',
        marginTop: 100


    }




  });