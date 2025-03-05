
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Discover Your Style</Text>
          <Text style={styles.welcomeSubtitle}>Explore trending outfits and collections</Text>
        </View>
        
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Collections</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {collections.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.collectionCard}
                onPress={() => navigation.navigate('Collection', { id: item.id })}
              >
                <View style={styles.collectionImageContainer}>
                  <Image 
                    source={{ uri: item.image }} 
                    style={styles.collectionImage} 
                  />
                  <View style={styles.collectionGradient} />
                </View>
                <Text style={styles.collectionName}>{item.name}</Text>
                <Text style={styles.collectionAuthor}>by {item.author}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.feedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Feed</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Refresh</Text>
            </TouchableOpacity>
          </View>
          
          {feedItems.map((item) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                  <Image source={{ uri: item.userAvatar }} style={styles.userAvatar} />
                  <Text style={styles.username}>{item.username}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <Text>•••</Text>
                </TouchableOpacity>
              </View>
              
              <Image source={{ uri: item.image }} style={styles.feedImage} />
              
              <View style={styles.feedItemFooter}>
                <View style={styles.interactionButtons}>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text style={styles.interactionText}>♥ Like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text style={styles.interactionText}>💬 Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.interactionButton}>
                    <Text style={styles.interactionText}>↗ Share</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.likes}>{item.likes} likes</Text>
                <Text style={styles.description}>
                  <Text style={styles.username}>{item.username}</Text> {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
  },
  welcomeSection: {
    padding: 20,
    marginTop: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FA812F',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#868e96',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FA812F',
  },
  seeAllText: {
    color: '#FAB12F',
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingBottom: 10,
  },
  collectionCard: {
    width: 180,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  collectionImageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  collectionImage: {
    width: 180,
    height: 240,
    borderRadius: 12,
  },
  collectionGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  collectionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343a40',
    marginTop: 4,
  },
  collectionAuthor: {
    fontSize: 14,
    color: '#868e96',
  },
  feedSection: {
    padding: 20,
    paddingBottom: 100, // Extra padding for tab bar
  },
  feedItem: {
    marginBottom: 30,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
    overflow: 'hidden',
  },
  feedItemHeader: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  username: {
    fontWeight: '600',
    color: '#343a40',
  },
  moreButton: {
    padding: 5,
  },
  feedImage: {
    width: '100%',
    height: 300,
  },
  feedItemFooter: {
    padding: 15,
  },
  interactionButtons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  interactionButton: {
    marginRight: 15,
  },
  interactionText: {
    color: '#FA812F',
    fontWeight: '500',
  },
  likes: {
    fontWeight: '500',
    marginBottom: 5,
    color: '#343a40',
  },
  description: {
    color: '#495057',
    lineHeight: 20,
  },
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
    height: 60,
    paddingBottom: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#868e96',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FA812F',
    fontWeight: '600',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FAB12F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginTop: -2,
  }
});

export default HomeScreen;
