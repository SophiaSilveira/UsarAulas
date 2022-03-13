import React from 'react';
import {View,
        Text,
        Button,
        StyleSheet,
        SafeAreaView,
        TextInput,
        StatusBar,
        TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function Home({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden />
        <View style = {{flex:1}}>
          <LinearGradient
            colors={[ "#FF6347", "#E32636","#FF007F","#C71585", "#8B008B"]}
            style = {styles.container}>
            <View style = {styles.secondContainer}>
              <TouchableOpacity style = {[styles.littleContainer, styles.margin]}></TouchableOpacity>
              <TouchableOpacity style = {[styles.littleContainer, styles.margin]}></TouchableOpacity>
            </View>
            <TouchableOpacity style = {[styles.littleContainer, styles.marginTop]}></TouchableOpacity>
            <Text style= {[styles.text, styles.textButtonColor, styles.marginTop, styles.textSize ]}>Enter the code sent to your number ending in 8691 or use your Backup Codes.</Text>
            <Text style= {[styles.text, styles.textButtonColor, styles.marginTop]}>It many take few moments to receive SMS.</Text>
            <TextInput
               style={[styles.input, styles.marginTop]}
               placeholder='Enter Two-Factor code'
               placeholderTextColor={'#C0C0C0'}
               clearButtonMode='always'/>
            <Text style = {[styles.textButtonColor, styles.textPosition]}>What is it ?</Text>
            <TouchableOpacity
              style={[styles.buttonOne, styles.marginTop]}
              onPress = { () =>
               navigation.navigate('Facebook')} >
              <Text >Login with Instagram</Text>
            </TouchableOpacity>
            <Text style = {[styles.textButtonColor, styles.marginTop]}>Back to Login</Text>
            <View style = {[styles.buttonNone]}>
              <Text style = {[styles.textButtonColor]}>or</Text>
            </View>
            <TouchableOpacity
              style={[styles.buttonTwo, styles.marginTop]}
              onPress = { () =>
               navigation.navigate('Login')}>
              <Text style = {[styles.textButtonColor]}>Repost without login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    );
}
  const styles = StyleSheet.create({
    container:{
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'flex-start',
    },

    secondContainer:{
     width: '100%',
     height: 50,
     flexDirection: 'row',
     justifyContent: 'flex-end',
    },

    littleContainer:{
     width: 50,
     height: 50,
     backgroundColor: 'pink',
    },

    input:{
     width: "85%",
     height: 60,
     borderColor: "#C0C0C0",
     borderWidth: 1,
     borderRadius: 10,
     fontSize: 20,
    },

    buttonOne:{
     width: "85%",
     height: 45,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: "#A9A9A9",
     borderWidth: 1,
    },

    buttonTwo:{
      width: "85%",
      height: 45,
      backgroundColor: "#7F2750",
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "#C71585",
      borderWidth: 1,
     },

    buttonNone:{
       width: 35,
       height: 35,
       backgroundColor: '#7F2750',
       borderRadius:50,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor: "#C71585",
       borderWidth: 1,
       marginTop: 15,
     },

     textButtonColor:{
      color: '#fff',
     },

    text: {
     fontSize: 14,
    },

    margin: {
     marginRight: 25,
    },

    marginTop:{
      marginTop: 12,
    },

    textSize:{
      width: '80%',
      textAlign: 'center',
    },

    textPosition:{
      marginLeft: '65%',
    }


  });

export default Home;