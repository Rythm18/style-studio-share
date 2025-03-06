
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeHeader from '../components/WelcomeHeader';
import FeaturedCollection from '../components/FeaturedCollection';
import TabBar from '../components/TabBar';

const SearchScreen = ({ navigation }: any) => {
  // Sample data for our collections
  const collections = [
    { 
      id: 1, 
      name: 'Summer Essentials', 
      author: 'Sophia Parker', 
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
    },
    { 
      id: 2, 
      name: 'Office Casual', 
      author: 'James Wilson', 
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    { 
      id: 3, 
      name: 'Weekend Vibes', 
      author: 'Emma Thompson', 
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    { 
      id: 4, 
      name: 'Evening Elegance', 
      author: 'Oliver Davis', 
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80'
    },
  ];

  const handleCollectionPress = (id: number) => {
    navigation.navigate('Collection', { id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WelcomeHeader 
          title="Discover Collections" 
          subtitle="Find your style inspiration" 
        />
        
        <View style={styles.searchSection}>
          <FeaturedCollection 
            collections={collections} 
            onPress={handleCollectionPress} 
          />
        </View>
      </ScrollView>
      
      <TabBar activeTab="search" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  searchSection: {
    paddingBottom: 100, // Extra padding for tab bar
  },
});

export default SearchScreen;
