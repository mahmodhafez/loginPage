import React, { useState } from 'react';
import { View, TextInput, Image, Button, StyleSheet,ScrollView, Text,image, TouchableOpacity } from 'react-native';
import { } from 'react-native-web';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogin2 = () => {
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderContent = () => {
    if (isLoggedIn) {
      return (
        
        <ScrollView style={styles.contentContainer}>
                  <Image style={styles.photo2} source={require('../my-project/assets/m2.png')}></Image>
          <Text style={styles.loggedInText}>You are logged in :)</Text>
          <Button title="Logout" onPress={handleLogout} />
        </ScrollView>
      );
    }
    return (
      
      <View style={styles.contentContainer}>
        
        <Image style={styles.photo1} source={require('../my-project/assets/m1.png')}></Image>
        <Text style={styles.title}>Login/Register Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#88888"
          onChangeText={setEmail}
          value={email}
          
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#88888"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton1} onPress={handleLogin2}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc510',
  },
  contentContainer: {
    width: '75%',
    padding: 16,
    backgroundColor: '#ef9b0f',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 2,
    borderWidth: 1,

  },
  photo1: {
    height : 300,
    width : 300
  },
  photo2: {
    height : 600,
    width : 300
  },
  title: {
    fontSize : 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf : 'center',
    paddingVertical: 22,
    borderRadius: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    color: '#222222',
  },
  loginButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 22,
    borderRadius: 4,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,

  },
  loginButton1: {
    backgroundColor: '#8eda8d',
    paddingVertical: 22,
    borderRadius: 4,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,


  },
  loginButtonText: {
    color: '#0f111a',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loggedInText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#222222',
  },
});

export default LoginPage;