import React, { Component } from 'react'; import { StyleSheet } from 'react-native';
const img = require('../assets/TodoList.png');

export default class Login extends Component {
    }
    const styles = StyleSheet.create({ container: {
    flex: 1,
    flexDirection: 'column' },
    topView: {
    justifyContent: 'center', alignItems: 'center', padding: 50
    }, img: {
    width: 200,
            height: 200
        },
    bottomView: { flexDirection: 'column', paddingRight: 20, paddingLeft: 20
    }, input: {
    marginBottom: 20 },
    textConteiner: { flexDirection: 'row', justifyContent: 'center', marginTop: 20
}, textRegister: {
fontWeight: 'bold' }
});