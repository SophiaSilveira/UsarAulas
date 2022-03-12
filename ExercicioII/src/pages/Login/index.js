import React from 'react';
import {View,
        Text,
        StyleSheet,
        SafeAreaView,
        StatusBar} from 'react-native';

function Login({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden = {false} />
        <View style = {styles.container}>
          <View style = {styles.containerOne}></View>
          <View style = {styles.containerTwo}>
           <View style = {styles.boxOne}>
             <Text>Your Name</Text>
           </View>
           <View style = {styles.boxTwo}>
             <View style = {styles.littleBox}></View>
             <View style = {[styles.littleBox]}></View>
           </View>
           <View style = {styles.boxThree}>
             <Text>Your basic info 1</Text>
             <Text>Your basic info 2</Text>
           </View>
           <View style = {styles.boxFour}>
             <Text>ABOUT</Text>
             <Text>PHOTOS</Text>
             <Text>FRIENDS</Text>
           </View>
          </View>
          <View style = {styles.containerThree}></View>
        </View>
      </SafeAreaView>
    );

};
  const styles = StyleSheet.create ({
    container: {
     flex: 1,
    },
    containerOne:{
      flex: 1.8,
      backgroundColor: 'gray',
    },
    containerTwo:{
      flex:3.2,
      backgroundColor: 'orange',
    },
    containerThree:{
      width: '25.5%',
      height: 170,
      backgroundColor: 'green',
      position: 'absolute',
      marginTop: 180,
      marginLeft: '30%',
    },
    boxOne:{
     flex: 4,
     backgroundColor: '#fff',
     borderBottomColor: 'black',
     borderBottomWidth: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
    },
    boxTwo:{
     flex: 1.3,
     backgroundColor: 'pink',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
    },
    boxThree:{
     flex: 1.8,
     backgroundColor: '#fff',
     borderTopColor: 'black',
     borderTopWidth: 1,
    },
    boxFour:{
     flex: 1,
     backgroundColor: 'pink',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
    },

    littleBox:{
      width: 50,
      height: 50,
      backgroundColor: '#fff',
    },
 });

export default Login;