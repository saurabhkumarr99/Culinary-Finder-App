import React, { useState } from 'react';
import { Image, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthSKR } from './AuthContextSKR';

function LoginSKR() {
  // Accessing authentication context and navigation
  const { loginSKR } = useAuthSKR();
  const navigation = useNavigation();

  // State variables for username and password
  const [usernameSKR, setUsernameSKR] = useState('Admin');
  const [passwordSKR, setPasswordSKR] = useState('123');

  // Function to handle login button press
  const handleLoginSKR = () => {
    if (usernameSKR && passwordSKR) {
      // Call login function from authentication context
      loginSKR();
      // Navigate to the Recipe page after successful login
      navigation.navigate('Recepie');
    } else {
      // Alert if username or password is empty
      alert('Please enter your username and password.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Image section */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      {/* Form section */}
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Username input field */}
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter your username"
          value={usernameSKR}
          onChangeText={(text) => setUsernameSKR(text)}
        />
        {/* Password input field */}
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter password"
          secureTextEntry
          value={passwordSKR}
          onChangeText={(text) => setPasswordSKR(text)}
        />
        {/* Login button */}
        <Button title="Login" onPress={handleLoginSKR} />
      </View>
    </View>
  );
}

export default LoginSKR;
