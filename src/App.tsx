
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CollectionScreen from './screens/CollectionScreen';
import SearchScreen from './screens/SearchScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          id={undefined}
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Wardrobify' }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Profile' }}
          />
          <Stack.Screen 
            name="Collection" 
            component={CollectionScreen} 
            options={{ title: 'Collection' }}
          />
          <Stack.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{ title: 'Search' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
