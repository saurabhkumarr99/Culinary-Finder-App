import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeDetailPageSKR = ({ recipeSKR }) => {

  if (!recipeSKR) {
    return <Text>Loading...</Text>; // or any other loading indicator
  }

  return (
    <View style={styles.container}>
      {/* Display recipeSKR details */}
      <Text style={styles.title}>{recipeSKR.label}</Text>
      <Image
        source={{ uri: recipeSKR.image }}
        style={styles.image}
      />
      <Text style={styles.source}>Source: {recipeSKR.source}</Text>
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      {/* Check if ingredients exist before mapping over them */}
      {recipeSKR.ingredients && recipeSKR.ingredients.length > 0 ? (
        <View style={styles.ingredientsContainer}>
          {recipeSKR.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient.text}</Text>
          ))}
        </View>
      ) : (
        <Text>No ingredients found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#1890ff',
    paddingVertical: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  source: {
    textAlign: 'center',
    marginBottom: 10,
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  ingredientsContainer: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  ingredient: {
    marginBottom: 5,
  },
});

export default RecipeDetailPageSKR;
