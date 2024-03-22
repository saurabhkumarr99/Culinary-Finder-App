import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native';
import HomeSKR from './HomeSKR';
import ContactUsSKR from './ContactUsSKR';
import LoginSKR from './LoginSKR';
import AboutUsSKR from './AboutUsSKR';
import RecipeDetailPageSKR from './RecipeDetailPageSKR';
import RecipeExplorerSKR from './RecipeExplorerSKR';
import { useAuthSKR } from './AuthContextSKR';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { isAuthenticatedSKR, logoutSKR } = useAuthSKR();

  const handleLogoutSKR = () => {
    // Perform logout actions here (e.g., clear tokens, reset state)
    logoutSKR();
    // Handle navigation to login or any other screen after logout
    // For example, navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
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

  const handleLogoutSKR = () => {
    logoutSKR();
  };

  return (
    <Drawer.Navigator initialRouteName="Home" >

      <Drawer.Screen
        name="Home"
        component={HomeSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

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

      <Drawer.Screen
        name="About Us"
        component={AboutUsSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact Us"
        component={ContactUsSKR}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />

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

      <Drawer.Screen
        name="Recepie"
        component={RecipeExplorerSKR} // Replace with your desired component
        options={{ drawerLabel: () => null }} // Hide the label in the drawer
      />
    </Drawer.Navigator>

  );
};

export default DrawerNavigatorSKR;
