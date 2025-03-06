import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeHeader from '../components/WelcomeHeader';
import FeaturedCollection from '../components/FeaturedCollection';
import FeedItem from '../components/FeedItem';
import TabBar from '../components/TabBar';

const HomeScreen = ({ navigation }: any) => {
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

  // Sample data for feed
  const feedItems = [
    { 
      id: 1, 
      username: 'fashion_lover', 
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
      likes: 124,
      description: 'Loving this new outfit combination!'
    },
    { 
      id: 2, 
      username: 'style_guru', 
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80', 
      likes: 89,
      description: 'Perfect for a day out with friends'
    },
    { 
      id: 3, 
      username: 'trend_setter', 
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80', 
      likes: 256,
      description: 'New season, new wardrobe pieces'
    },
  ];

  const handleCollectionPress = (id: number) => {
    navigation.navigate('Collection', { id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WelcomeHeader 
          title="Discover Your Style" 
          subtitle="Explore trending outfits and collections" 
        />
        
        <FeaturedCollection 
          collections={collections} 
          onPress={handleCollectionPress} 
        />
        
        <View style={styles.feedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Feed</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Refresh</Text>
            </TouchableOpacity>
          </View>
          
          {feedItems.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
      
      <TabBar activeTab="home" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD7C9',
  },
  feedSection: {
    padding: 20,
    paddingBottom: 100, // Extra padding for tab bar
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3930',
  },
  seeAllText: {
    color: '#A27B5C',
    fontWeight: '500',
  },
  Text: {
    fontWeight: '600',
    color: '#2C3930',
  },
});

export default HomeScreen;
