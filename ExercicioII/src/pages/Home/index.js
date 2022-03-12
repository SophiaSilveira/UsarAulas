import React from 'react';
import {View,
        Text,
        Button,
        StyleSheet,
        SafeAreaView,
        TextInput,
        StatusBar} from 'react-native';

function Home({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden />
        <View style = {styles.container}>
          <View style = {styles.secondContainer}>
            <View style = {[styles.littleContainer, styles.margin]}></View>
            <View style = {[styles.littleContainer, styles.margin]}></View>
          </View>
          <View style = {[styles.littleContainer]}></View>
          <Text style= {styles.primaryTitle}>Enter the code sent to your number ending in 8691 or use your Backup Codes.</Text>
          <Text style= {styles.primaryTitle}>It many take few moments to receive SMS.</Text>
          <TextInput
             style={styles.input}
             placeholder='Enter Two-Factor code'
             clearButtonMode='always'/>
          <Text>What is it</Text>
          <Button
            title = "Login with Instagram"
            onPress = { () =>
             navigation.navigate('Facebook')} />
          <Text>Back to Login</Text>
          <View style = {[styles.littleContainer]}>
            <Text>or</Text>
          </View>
          <Button
            title = "Repost without login"
            onPress = { () =>
             navigation.navigate('Login')} />
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
     backgroundColor: 'green',
    },

    secondContainer:{
     width: '100%',
     height: 50,
     backgroundColor: 'blue',
     flexDirection: 'row',
     justifyContent: 'flex-end',
    },

    littleContainer:{
     width: 50,
     height: 50,
     backgroundColor: 'pink',
    },

    input:{
     width: 150,
     height: 50,
     backgroundColor: '#fff',
    },

    primaryTitle: {
    fontSize: 18,
    marginTop: 10,
    color: 'orange'
    },

    margin: {
     marginRight: 25,
    },

  });

export default Home;