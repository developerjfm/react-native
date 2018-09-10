/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView , KeyboardAvoidingView, TextInput, Button,Image} from 'react-native';

const img = require('./assets/TodoList.jpg');

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <View style={styles.topView}>
            <Image style={styles.img} source={img} />
          </View>
          <View 
            style={styles.bottomView}>
             <TextInput 
              style={styles.input}
              placeholder='Email'
              keyboardType={'email-address'}
              autoCapitalize='none' />
            <TextInput 
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true} />
            <Button title='Sign In' />
            <View style={styles.textConteiner}>
              <Text>Not a member? Let's </Text>
              <Text style={styles.textRegister}>Register</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topView: {
    justifyContent: 'center', alignItems: 'center', padding: 50
  }, img: {
    width: 200,
    height: 200
  },
  bottomView: {
    flexDirection: 'column', paddingRight: 20, paddingLeft: 20
  }, input: {
    marginBottom: 20
  },
  textConteiner: {
    flexDirection: 'row', justifyContent: 'center', marginTop: 20
  }, textRegister: {
    fontWeight: 'bold'
  }
});