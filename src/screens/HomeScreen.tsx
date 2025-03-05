
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }: any) => {
  // Sample data for our feed
  const feedItems = [
    { id: 1, username: 'fashion_lover', image: 'https://via.placeholder.com/300', likes: 124 },
    { id: 2, username: 'style_guru', image: 'https://via.placeholder.com/300', likes: 89 },
    { id: 3, username: 'trend_setter', image: 'https://via.placeholder.com/300', likes: 256 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Wardrobify</Text>
        </View>
        
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Collections</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity 
                key={item} 
                style={styles.collectionCard}
                onPress={() => navigation.navigate('Collection', { id: item })}
              >
                <View style={styles.collectionImageContainer}>
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/150' }} 
                    style={styles.collectionImage} 
                  />
                </View>
                <Text style={styles.collectionName}>Summer {item}</Text>
                <Text style={styles.collectionAuthor}>by User {item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.feedSection}>
          <Text style={styles.sectionTitle}>Your Feed</Text>
          {feedItems.map((item) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <Text style={styles.username}>{item.username}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.feedImage} />
              <View style={styles.feedItemFooter}>
                <Text style={styles.likes}>{item.likes} likes</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  featuredSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  horizontalScroll: {
    paddingBottom: 10,
  },
  collectionCard: {
    width: 150,
    marginRight: 15,
  },
  collectionImageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  collectionImage: {
    width: 150,
    height: 200,
  },
  collectionName: {
    fontSize: 14,
    fontWeight: '500',
  },
  collectionAuthor: {
    fontSize: 12,
    color: '#868e96',
  },
  feedSection: {
    padding: 15,
  },
  feedItem: {
    marginBottom: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    overflow: 'hidden',
  },
  feedItemHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  username: {
    fontWeight: '500',
  },
  feedImage: {
    width: '100%',
    height: 300,
  },
  feedItemFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: '500',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default HomeScreen;
