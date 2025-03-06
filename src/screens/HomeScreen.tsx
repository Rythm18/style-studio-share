
import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeHeader from '../components/WelcomeHeader';
import FeedItem from '../components/FeedItem';
import TabBar from '../components/TabBar';

const HomeScreen = ({ navigation }: any) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <WelcomeHeader 
          title="Your Feed" 
          subtitle="See what's trending today" 
        />
        
        <View style={styles.feedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Posts</Text>
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
    backgroundColor: '#000000',
  },
  feedSection: {
    paddingBottom: 100, // Extra padding for tab bar
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  seeAllText: {
    color: '#D946EF',
    fontWeight: '500',
  },
});

export default HomeScreen;
