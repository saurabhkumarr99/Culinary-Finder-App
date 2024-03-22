import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

// AboutUsSKR component definition
const AboutUsSKR = () => {
  return (
    <View style={styles.containerSKR}>
      {/* Header */}
      <View style={styles.headerSKR}>
        <Text style={styles.name}> Dive into the journey of our extraordinary team. Witness our synergy as you resize your browser window.</Text>
      </View>

      {/* Team Section */}
      <Text style={styles.teamHeaderSKR}>Meet Our Stellar Squad</Text>

      {/* ScrollView for scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {/* Jane's Profile */}
          <View style={styles.cardSKR}>
            <Image
              source={require('../assets/jane.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Jane Doe</Text>
              <Text style={styles.role}>CEO & Founder</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          {/* Mike's Profile */}
          <View style={styles.cardSKR}>
            <Image
              source={require('../assets/mike.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Mike Ross</Text>
              <Text style={styles.role}>Art Director</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          {/* John's Profile */}
          <View style={styles.cardSKR}>
            <Image
              source={require('../assets/john.jpg')}
              style={{ width: 287, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.role}>Designe</Text>
              <Text>Mastering the art of captivating designs.</Text>
              <Text>jane@gmail.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  containerSKR: {
    flex: 1,
  },
  headerSKR: {
    backgroundColor: '#1890ff',
    padding: 20,
    alignItems: 'center',
  },
  teamHeaderSKR: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column', // Display items vertically
    alignItems: 'center', // Center items horizontally
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  cardSKR: {
    width: '80%', // Adjust the width as per your preference
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
});

export default AboutUsSKR;
