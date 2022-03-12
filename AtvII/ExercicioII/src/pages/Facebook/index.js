import React from 'react';
import {SafeAreaView,
        View,
        Text,
        Button,
        StyleSheet,
        TextInput} from 'react-native';

function Facebook({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
          <Text style = {[styles.primaryTitle]} >facebook</Text>
          <TextInput
            style={styles.input}
            placeholder='email or phone'
            clearButtonMode='always'/>
          <TextInput
            style={styles.input}
            placeholder='password'
            clearButtonMode='always'/>
          <Button
            title = "Login"
            onPress = { () =>
             navigation.navigate('Login')} />
          <Text style = {[styles.primaryTitle]}>sign um for facebook</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'blue',
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

  });

export default Facebook;