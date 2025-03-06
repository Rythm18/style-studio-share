
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../components/TabBar';
import { Grid, BookOpen, Bookmark, Edit, Share, MessageSquare } from 'lucide-react';

const ProfileScreen = ({ navigation }: any) => {
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
    coverImage: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80'
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
        {/* Cover Photo */}
        <View style={styles.coverContainer}>
          <Image source={{ uri: user.coverImage }} style={styles.coverImage} />
          <View style={styles.coverGradient} />
        </View>
        
        {/* Profile Header with Avatar */}
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
        
        {/* Profile Stats */}
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Edit size={16} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton}>
            <MessageSquare size={16} color="#D946EF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton}>
            <Share size={16} color="#D946EF" />
          </TouchableOpacity>
        </View>
        
        {/* Content Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => setActiveTab('posts')}
          >
            <Grid size={20} color={activeTab === 'posts' ? '#D946EF' : '#FFFFFF'} />
            {activeTab === 'posts' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => setActiveTab('collections')}
          >
            <BookOpen size={20} color={activeTab === 'collections' ? '#D946EF' : '#FFFFFF'} />
            {activeTab === 'collections' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.tab}
            onPress={() => setActiveTab('saved')}
          >
            <Bookmark size={20} color={activeTab === 'saved' ? '#D946EF' : '#FFFFFF'} />
            {activeTab === 'saved' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        </View>
        
        {/* Tab Content */}
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
              <TouchableOpacity 
                key={collection.id} 
                style={styles.collectionCard}
                onPress={() => navigation.navigate('Collection', { id: collection.id })}
              >
                <Image source={{ uri: collection.image }} style={styles.collectionImage} />
                <View style={styles.collectionOverlay} />
                <View style={styles.collectionInfo}>
                  <Text style={styles.collectionName}>{collection.name}</Text>
                  <Text style={styles.collectionItemCount}>{collection.itemCount} items</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {activeTab === 'saved' && (
          <View style={styles.emptyStateContainer}>
            <Bookmark size={50} color="#333333" />
            <Text style={styles.emptyStateTitle}>No saved items yet</Text>
            <Text style={styles.emptyStateText}>Items you save will appear here</Text>
            <TouchableOpacity style={styles.emptyStateButton}>
              <Text style={styles.emptyStateButtonText}>Browse Collections</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      
      <TabBar activeTab="profile" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  coverContainer: {
    height: 180,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 10,
  },
  profileImageContainer: {
    marginTop: -50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#D946EF',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  username: {
    fontSize: 16,
    color: '#AAAAAA',
    marginBottom: 6,
  },
  userBio: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  profileStats: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#222222',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#222222',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  primaryButton: {
    flex: 3,
    backgroundColor: '#D946EF',
    borderRadius: 8,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  secondaryButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D946EF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 5,
    position: 'relative',
    width: 60,
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -16,
    width: 30,
    height: 3,
    backgroundColor: '#D946EF',
    borderRadius: 1.5,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    height: 160,
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  collectionImage: {
    width: '100%',
    height: '100%',
  },
  collectionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  collectionInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  collectionName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  collectionItemCount: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  emptyStateContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyStateButton: {
    backgroundColor: '#D946EF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emptyStateButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default ProfileScreen;
