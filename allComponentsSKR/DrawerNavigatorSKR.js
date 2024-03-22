const CustomDrawerContent = (props) => {
  const { isAuthenticatedSKR, logoutSKR } = useAuthSKR();

  // Function to handle logout action
  const handleLogoutSKR = () => {
    // Perform logout actions here (e.g., clear tokens, reset state)
    logoutSKR();
    // Handle navigation to login or any other screen after logout
    // For example, navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} /> {/* Render default drawer items */}
      {/* Render logout button if user is authenticated */}
      {isAuthenticatedSKR && (
        <View style={{ marginHorizontal: 16, marginTop: 10 }}>
          <Button title="Logout" onPress={handleLogoutSKR} />
        </View>
      )}
    </DrawerContentScrollView>
  );
};

const DrawerNavigatorSKR = () => {
  const { isAuthenticatedSKR, logoutSKR } = useAuthSKR();

  // Function to handle logout action
  const handleLogoutSKR = () => {
    logoutSKR();
  };

  return (
    <Drawer.Navigator initialRouteName="Home" >
      {/* Home screen */}
      <Drawer.Screen
        name="Home"
        component={HomeSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Explore Recipe screen */}
      {isAuthenticatedSKR && (
        <Drawer.Screen
          name="Explore Recepie"
          component={RecipeExplorerSKR}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-variant" size={size} color={color} />
              ),
          }}
        />
      )}

      {/* About Us screen */}
      <Drawer.Screen
        name="About Us"
        component={AboutUsSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Contact Us screen */}
      <Drawer.Screen
        name="Contact Us"
        component={ContactUsSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Login screen if user is not authenticated */}
      {!isAuthenticatedSKR &&
        <Drawer.Screen
          name="Login"
          component={LoginSKR}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />}

      {/* Logout button if user is authenticated */}
      {isAuthenticatedSKR && (
        <Drawer.Screen
          name="Logout"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" size={size} color={color} />
            ),
          }}
          component={() => <Button title="Logout" onPress={handleLogoutSKR} />}
        />
      )}

      {/* Recipe screen (example) */}
      <Drawer.Screen
        name="Recepie"
        component={RecipeExplorerSKR} // Replace with your desired component
        options={{ drawerLabel: () => null }} // Hide the label in the drawer
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorSKR;
