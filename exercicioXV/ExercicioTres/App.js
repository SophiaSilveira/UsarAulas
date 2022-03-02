/**
 * Exercicio Tres: Repartir a tela em 8
 */
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const App = () => {
  return (
   <View style = { styles.container }>
    <View style = { styles.containerTop }>
      <Image style = { styles.image }
      source = {require('./img/three_legendary_sannins.jpg')}/>
    </View>
    <View style = { styles.containerBottom }>
      <View style = {[styles.box, styles.boxRowOne]}>
       <Text style = {[styles.text, {fontSize: 30}]}> Os três Sannins Lendários </Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo, { marginRight: 5 }]}>
        <Image style = { styles.imageLittle }
        source = {require('./img/Orochimaru.png')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Orochimaru</Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo]}>
        <Image style = { styles.imageLittle }
        source = {require('./img/tsundade.jpeg')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Tsunade</Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo, { marginLeft: 5 }]}>
        <Image style = { styles.imageLittle }
        source = {require('./img/jiraya.jpg')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Jiraiya</Text>
      </View>
      <View style = {[styles.box, styles.boxRowThree, { marginRight: 5 } ]}>
        <Text style = {[styles.text, {fontSize: 20, marginTop: 5}]}> Com a Segunda Guerra Shinobi, eles ganham o nome SANNIN por usar o chakra da natureza!</Text>
      </View>
      <View style = {[styles.box, styles.boxRowFour, styles.borda, {backgroundColor: '#D3D3D3'}]}>
       <Text style = {[styles.text, {fontSize: 20, marginLeft: 5}]}> Chakra não produzido naturalmente pelo corpo. </Text>
      </View>
    </View>
   </View>

  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#3CB371',
 },
 containerTop: {
  flex: 2,
 },
 containerBottom: {
  flex: 3,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
 },
 box: {
  height: '30%',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
 },
 boxRowOne: {
  width: '95%',
 },
 boxRowTwo: {
  width: '31%',

 },
 boxRowThree: {
  width: '63%',
 },
 boxRowFour: {
  width: '31%',
 },
 image: {
  height: '100%',
  width: '100%',
 },
 imageLittle: {
   height: '80%',
   width: '100%',
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
 },
 text: {
  fontWeight: 'bold',
  color: '#191970',
 },
 borda: {
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: 'pink',
 }
});

export default App;