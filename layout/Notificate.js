import React from 'react'; // Import React to define a functional component

import { StyleSheet, Text, View } from 'react-native';

import { Input, NativeBaseProvider,Button, Icon, Box, Image, AspectRatio } from 'native-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faGear, faHouse, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

function Notificate() { // Add parentheses after the function name
    const navigation = useNavigation();

    
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

    return (
        <View style={styles.container}>  
            <View style={styles.Header} >
                <Text style={styles.headertext}>Inicio</Text>
            </View>

            <View style={styles.Middle}>
                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>HOY</Text>
                        <Text style={styles.itemtime}>0:00 AM</Text>
                    </View>
                    <View >
                        <Text style={styles.data}>Se ha Detectado un nuevo movimiento</Text>
                    </View>

                </View>

                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>HOY</Text>
                        <Text style={styles.itemtime}>0:00 AM</Text>
                    </View>
                    <View >
                        <Text style={styles.data}>Se ha Detectado un nuevo movimiento</Text>
                    </View>

                </View>

                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>AYER</Text>
                        <Text style={styles.itemtime}>0:00 AM</Text>
                    </View>
                    <View >
                        <Text style={styles.data}>Se ha Detectado un nuevo movimiento</Text>
                    </View>

                </View>


                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>AYER</Text>
                        <Text style={styles.itemtime}>0:00 AM</Text>
                    </View>
                    <View >
                        <Text style={styles.data}>Se ha Detectado un nuevo movimiento</Text>
                    </View>

                </View>

                <View style={styles.middleitem}>
                    <View style={styles.dataheader}>
                        <Text style={styles.itemtitle}>AYER</Text>
                        <Text style={styles.itemtime}>0:00 AM</Text>
                    </View>
                    <View >
                        <Text style={styles.data}>Se ha Detectado un nuevo movimiento</Text>
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
       
          <Notificate />
        
      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({
    dataheader: {
        flexDirection : 'row',
        justifyContent: 'space-around'
    }
    ,
    itemtitle : {
        fontSize: 30
    }
    ,
    itemtime: {
        fontSize: 20
    },
    data: {
        fontSize: 23,
        marginLeft: 10
    },  
    container: {
      flex: 1,
      backgroundColor: '#a9a6ab',
      marginTop:20,
      height:''
    },
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
        height: '20%',
        width: '100%',

        borderTopColor: 'black',
        borderTopWidth: 5,

    }




  });