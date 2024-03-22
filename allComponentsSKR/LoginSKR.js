import React, { useEffect , useState } from 'react';
import { useAuthSKR } from './AuthContextSKR';
import { Image, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

function LoginSKR() {
  const { loginSKR , isAuthenticatedSKR } = useAuthSKR();
  const [usernameSKR, setUsernameSKR] = useState('Admin');
  const [passwordSKR, setPasswordSKR] = useState('123');
  const navigation = useNavigation();
  

  const handleLoginSKR = () => {
    if (usernameSKR && passwordSKR) {
      loginSKR();
       navigation.navigate('Recepie');
    } else {
      alert('Please enter your username and password.');
    }
  };


  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter your username"
          value={usernameSKR}
          onChangeText={(text) => setUsernameSKR(text)}
        />
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter password"
          secureTextEntry
          value={passwordSKR}
          onChangeText={(text) => setPasswordSKR(text)}
        />
        <Button title="Login" onPress={handleLoginSKR} />
      </View>
    </View>
  );
}

export default LoginSKR;