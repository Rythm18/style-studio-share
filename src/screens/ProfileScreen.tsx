
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('posts');
  
  // Mock user data
  const user = {
    username: 'style_enthusiast',
    name: 'Alex Johnson',
    bio: 'Fashion lover | Style curator | Coffee addict',
    followers: 1243,
    following: 567,
    posts: 48,
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  };

  // Mock grid images
  const gridImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      likes: 234
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      likes: 187
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1613552465135-e5bcc07a6ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 321
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      likes: 145
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 278
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 198
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 265
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      likes: 211
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      likes: 176
    },
  ];

  // Collections data
  const collections = [
    { 
      id: 1, 
      name: 'Summer Essentials', 
      itemCount: 12,
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
    },
    { 
      id: 2, 
      name: 'Office Wear', 
      itemCount: 8,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    { 
      id: 3, 
      name: 'Winter Warmers', 
      itemCount: 15,
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.userBio}>{user.bio}</Text>
          </View>
        </View>
        
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
            onPress={() => setActiveTab('posts')}
          >
            <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'collections' && styles.activeTab]}
            onPress={() => setActiveTab('collections')}
          >
            <Text style={[styles.tabText, activeTab === 'collections' && styles.activeTabText]}>Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
            onPress={() => setActiveTab('saved')}
          >
            <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>Saved</Text>
          </TouchableOpacity>
        </View>
        
        {activeTab === 'posts' && (
          <View style={styles.imageGrid}>
            {gridImages.map((item) => (
              <TouchableOpacity key={item.id} style={styles.gridItem}>
                <Image source={{ uri: item.image }} style={styles.gridImage} />
                <View style={styles.imageOverlay}>
                  <Text style={styles.imageLikes}>♥ {item.likes}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {activeTab === 'collections' && (
          <View style={styles.collectionsContainer}>
            {collections.map((collection) => (
              <TouchableOpacity key={collection.id} style={styles.collectionCard}>
                <Image source={{ uri: collection.image }} style={styles.collectionImage} />
                <View style={styles.collectionInfo}>
                  <Text style={styles.collectionName}>{collection.name}</Text>
                  <Text style={styles.collectionItemCount}>{collection.itemCount} items</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {activeTab === 'saved' && (
          <View style={styles.savedContainer}>
            <Text style={styles.emptyStateText}>No saved items yet</Text>
            <TouchableOpacity style={styles.browseButton}>
              <Text style={styles.browseButtonText}>Browse Collections</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD7C9',
  },
  profileHeader: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    padding: 3,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#A27B5C',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3930',
    marginBottom: 2,
  },
  username: {
    fontSize: 16,
    color: '#3F4F44',
    marginBottom: 6,
  },
  userBio: {
    fontSize: 14,
    color: '#A27B5C',
    lineHeight: 20,
  },
  profileStats: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    backgroundColor: 'white',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3930',
  },
  statLabel: {
    fontSize: 12,
    color: '#A27B5C',
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  editButton: {
    flex: 3,
    backgroundColor: '#3F4F44',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  editButtonText: {
    color: '#DCD7C9',
    fontWeight: '600',
  },
  shareButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3F4F44',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#3F4F44',
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#FFF',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  tabText: {
    color: '#A27B5C',
    fontWeight: '500',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2C3930',
  },
  activeTabText: {
    color: '#2C3930',
    fontWeight: '600',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(44, 57, 48, 0.5)',
    padding: 5,
  },
  imageLikes: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  collectionsContainer: {
    padding: 15,
  },
  collectionCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  collectionImage: {
    width: '100%',
    height: 180,
  },
  collectionInfo: {
    padding: 15,
  },
  collectionName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3930',
    marginBottom: 4,
  },
  collectionItemCount: {
    fontSize: 14,
    color: '#A27B5C',
  },
  savedContainer: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#3F4F44',
    marginBottom: 20,
  },
  browseButton: {
    backgroundColor: '#A27B5C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ProfileScreen;
