// Pre-Populated SQLite Database in React Native
// https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native
// Screen to view all the user*/

import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

// Connction to access the pre-populated user_db.db
const db = openDatabase({name: 'user_db.db', createFromLocation: 1});

const Sugestao = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tbl_categorias where id_categorias = 1',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
      });
    });
  }, []);


  let listItemView = (item) => {
        return (
          <View
            key={item.id_categorias}
            style={{backgroundColor: 'white', padding: 20}}>
            <Text style={{fontSize: 24, color: 'blue'}}>Id Categorias: {item.id_categorias}</Text>
            <View style={{ width: '100%', height: 50, backgroundColor: 'black'}}></View>
            <Text>Name: {item.user_id}</Text>
            <Text>Contact: {item.nome}</Text>
          </View>
        );
      };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sugestao;