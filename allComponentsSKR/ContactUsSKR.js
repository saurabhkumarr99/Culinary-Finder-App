import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ContactUsSKR = () => { // Appended "SKR" to component name
  const [dataSKR, setDataSKR] = useState(''); // Appended "SKR" to variable name
  const [responseSKR, setResponseSKR] = useState(''); // Appended "SKR" to variable name

  const handleFormSubmitSKR = () => {
    setResponseSKR('Soon you will receive a response');
    // Add logic here to handle form submission
  };

  return (
    <View style={{ flex: 1, padding: 20, }}>
      <View style={{ backgroundColor: '#1890ff', padding: 20 ,alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Contact us</Text>
        <Text style={{color: 'black', fontSize: 20, }}> Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          placeholder="Your name"
          value={dataSKR}
          onChangeText={(text) => setDataSKR(text)} // Appended "SKR" to function name
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your email"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Subject"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your message"
          multiline
          numberOfLines={4}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Send" onPress={handleFormSubmitSKR} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{responseSKR}</Text>
      </View>
    </View>
  );
};

export default ContactUsSKR; // Appended "SKR" to export name
