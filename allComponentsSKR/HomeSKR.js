const HomeSKR = ({ theme }) => {
  // List of key features
  const keyFeatures = [
    'Personalized Recommendations',
    'Smart Search Functionality',
    'Dietary and Allergen Filters',
    'Interactive Cooking Experience',
  ];

  // Styles for different themes
  const styles = {
    light: {
      textColor: '#000000',
      headerColor: '#1890ff',
    }
  };

  // Select styles based on the provided theme or default to light theme
  const selectedStyles = styles[theme] || styles.light;

  return (
    <>
      {/* Header section */}
      <View style={{ backgroundColor: selectedStyles.headerColor, paddingVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: selectedStyles.textColor, fontSize: 20, fontWeight: 'bold' }}>Welcome to the Recipe Radar!</Text>
      </View>
      {/* Main content */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        {/* Introduction */}
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>
          Recipe Radar is an innovative culinary application designed to revolutionize the way users discover and explore recipes.
          Unlike traditional recipe platforms, Recipe Radar employs advanced AI algorithms to curate personalized recipe recommendations based on individual preferences, dietary restrictions, and cooking habits.
        </Text>
        {/* Key features section */}
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Key Features:</Text>
        {/* Display key features */}
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: selectedStyles.headerColor, borderRadius: 5 }}>
          {keyFeatures.map((feature, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>{feature}</Text>
            </View>
          ))}
        </View>
        {/* Explore section */}
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Explore Now:</Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>Get started by exploring our features</Text>
      </View>
    </>
  );
};

export default HomeSKR;
