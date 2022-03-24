// Pre-Populated SQLite Database in React Native
// https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native
// Screen to update the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

// Connction to access the pre-populated user_db.db
const db = openDatabase({name: 'user_db.db', createFromLocation: 1});

const Login = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');
  let [inputUserContact, setInputUserContact] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId, inputUserContact );
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tbl_user where (user_name, user_contact) = (?,?)',
        [inputUserId, inputUserContact],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_contact, res.user_address);
            navigation.navigate('HomeScreen');
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Enter User Id"
                style={{padding: 10}}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mytextinput
                              placeholder="Enter User Id"
                              style={{padding: 10}}
                              onChangeText={
                                (inputUserContact) => setInputUserContact(inputUserContact)
                              }
                            />
              <Mybutton
                title="Search User"
                customClick={searchUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;