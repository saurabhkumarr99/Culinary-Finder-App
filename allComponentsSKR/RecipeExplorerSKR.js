import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from 'react-native';
import RecipeDetailPageSKR from './RecipeDetailPageSKR';

const RecipeExplorerSKR = () => {
  const [searchQuerySKR, setSearchQuerySKR] = useState('');
  const [recipesSKR, setRecipesSKR] = useState([]);
  const [selectedRecipeSKR, setSelectedRecipeSKR] = useState(null);

  // Define API credentials as constants
  const APP_ID_SKR = 'bc18c00e';
  const APP_KEY_SKR = '0e587224e152f47ddaf723ab207c4443';

  // Function to handle recipe search
  const handleSearchSKR = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${searchQuerySKR}&app_id=${APP_ID_SKR}&app_key=${APP_KEY_SKR}`);
      setRecipesSKR(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Function to handle viewing recipe details
  const handleViewDetailsSKR = (recipe) => {
    setSelectedRecipeSKR(recipe.recipe);
  };

  // Function to handle going back to recipe explorer
  const handleGoBackSKR = () => {
    setSelectedRecipeSKR(null);
  };

  return (
    <View style={styles.container}>
      {/* Search Input and Button */}
      {!selectedRecipeSKR && (
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for recipes"
            value={searchQuerySKR}
            onChangeText={(text) => setSearchQuerySKR(text)}
            style={styles.input}
          />
          <Button title="Search" onPress={handleSearchSKR} />
        </View>
      )}

      {/* Display Recipe Cards or Recipe Detail Page */}
      {selectedRecipeSKR ? (
        <RecipeDetailPageSKR recipeSKR={selectedRecipeSKR} onGoBack={handleGoBackSKR} />
      ) : (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {recipesSKR.map(recipe => (
            <View key={recipe.recipe.uri} style={styles.card}>
              <Image
                source={{ uri: recipe.recipe.image }}
                style={styles.image}
              />
              <Text style={styles.title}>{recipe.recipe.label}</Text>
              <Text style={styles.source}>{recipe.recipe.source}</Text>
              <Button title="View Details" onPress={() => handleViewDetailsSKR(recipe)} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 240,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  source: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default RecipeExplorerSKR;
