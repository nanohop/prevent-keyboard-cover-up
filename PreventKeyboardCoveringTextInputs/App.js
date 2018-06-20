import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
      >

          <View style={styles.loginHeader}>
            <Text style={styles.headerText}>App Name</Text>
          </View>

          <View style={styles.loginInputs}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
              placeholder="Username"
              style={styles.input}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
              placeholder="Password"
              style={styles.input}
              secureTextEntry={true} 
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginHeader: {
    margin: 20,
    marginTop: 100,
    padding: 20,
  },
  headerText: {
    fontSize: 40,
    color: '#0066cc',
    textAlign: 'center'
  },
  loginInputs: {
    marginTop: 150
  },
  input: {
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#888888',
    marginLeft: 80,
    marginRight: 80
  },
  label: {
    fontSize: 18,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 20,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80
  },
  loginText: {
    padding: 10,
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center'
  }
});
