import React from 'react'; // Import React to define a functional component

import { StyleSheet, Text, View } from 'react-native';

import { Input, NativeBaseProvider,Button, Icon, Box, Image, AspectRatio } from 'native-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faGear, faHouse, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { alignItems } from 'styled-system';

function Home() { // Add parentheses after the function name
    const navigation = useNavigation();

    const DATA = [
        {
          id: '1',
          title: 'Se ha Detectado un nuevo movimiento',
          time: '0:00 AM',
        },
        {
          id: '2',
          title: 'Se ha Detectado un nuevo movimiento',
          time: '0:00 AM',
        },
        // ... more items
      ];

      const Item = ({ title, time }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      );
    
    const handleHome = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Home');
      };

      const handleNotificate = () => {
        // Perform login logic here
    
        // Navigate to the "Home" screen
        navigation.navigate('Notificate');
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




            <View style={styles.firstMiddle} >
                <View style={styles.firsttext}>
                    <Text style={styles.titletext}>ALETRA</Text>
                    <Text style={styles.timetext}>0:00 AM</Text>
                </View>
                <View>
                    <Text style={styles.maintext}>Se ha Detectado un nuevo</Text>
                </View>
                <View>
                    <Text style={styles.lasttext}>movimiento</Text>
                </View>
                
            </View>



            <View style={styles.secondMiddle} >
            <View style={styles.firsttext}>
                    <Text style={styles.titletext}>ALETRA</Text>
                    <Text style={styles.timetext}>0:00 AM</Text>
                </View>
                <View>
                    <Text style={styles.maintext}>Se ha Detectado un nuevo</Text>
                </View>
                <View>
                    <Text style={styles.lasttext}>movimiento</Text>
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
       
          <Home />
        
      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({
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
        top:'50%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    firsttext: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20

    },
    titletext: {
        fontSize: 30
    },
    timetext: {
        fontSize: 15
    },
    maintext: {
        fontSize: 20,
        marginLeft: 50
    },
    lasttext: {
        fontSize: 20,
        textAlign: 'right',
        marginRight: 20
        
    }


    




  });