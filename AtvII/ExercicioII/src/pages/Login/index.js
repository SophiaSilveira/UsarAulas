import React from 'react';
import {View,
        Text,
        StyleSheet,
        SafeAreaView,
        StatusBar} from 'react-native';

function Login({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden = {false} translucent={true} backgroundColor={'transparent'}/>
        <View style = {[styles.container]}>
          <View style = {[styles.containerOne]}></View>
          <View style = {[styles.containerTwo]}>
           <View style = {[styles.boxOne]}>
             <Text style = {[styles.textName]}>Your Name</Text>
           </View>
           <View style = {[styles.boxTwo]}>
             <View style = {[styles.littleBox]}></View>
             <View style = {[styles.littleBox]}></View>
           </View>
           <View style = {[styles.boxThree]}>
             <Text style = {[styles.marginLeft]}>Your basic info 1</Text>
             <Text style = {[styles.marginLeft, styles.marginTop]}>Your basic info 2</Text>
           </View>
           <View style = {[styles.boxFour]}>
             <Text style = {[ styles.finalLineText]}>ABOUT</Text>
             <Text style = {[ styles.finalLineText]}>PHOTOS</Text>
             <Text style = {[ styles.finalLineText]}>FRIENDS</Text>
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
      backgroundColor: '#bfc4dc',
    },
    containerTwo:{
      flex:3.2,
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    containerThree:{
      width: '25.5%',
      height: 160,
      backgroundColor: '#dfe1ee',
      position: 'absolute',
      marginTop: 180,
      marginLeft: '30%',
      borderColor: '#fff',
      borderWidth: 3,
    },
    boxOne:{
     flex: 4,
     width: '90%',
     borderBottomColor: 'black',
     borderBottomWidth: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
    },
    boxTwo:{
     flex: 1.5,
     width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
    },
    boxThree:{
     flex: 1.7,
     borderTopColor: 'black',
     width: '90%',
     borderTopWidth: 1,
     justifyContent: 'center',
    },
    boxFour:{
     flex: 1,
     width: '100%',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-around',
     backgroundColor: '#f5f5f5',
    },

    littleBox:{
      width: 50,
      height: 50,
      backgroundColor: 'pink',
    },

    textName: {
     color: '#000',
     fontSize: 33,
     marginBottom: 20,
    },

    finalLineText: {
      fontWeight: 'bold',
      fontSize: 18,
    },

    marginLeft:{
     marginLeft: 40,
     fontSize: 16,
    },
    marginTop: {
     marginTop: 10,
    },

 });

export default Login;