
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  // Mock user data
  const user = {
    username: 'style_enthusiast',
    name: 'Alex Johnson',
    bio: 'Fashion lover | Style curator | Coffee addict',
    followers: 1243,
    following: 567,
    posts: 48,
    profileImage: 'https://via.placeholder.com/150',
  };

  // Mock grid images
  const gridImages = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: 'https://via.placeholder.com/300',
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
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
        </View>
        
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text>Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text>Saved</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.imageGrid}>
          {gridImages.map((item) => (
            <TouchableOpacity key={item.id} style={styles.gridItem}>
              <Image source={{ uri: item.image }} style={styles.gridImage} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#868e96',
  },
  profileInfo: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  userBio: {
    color: '#495057',
  },
  actionButtons: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 4,
    paddingVertical: 6,
    alignItems: 'center',
  },
  editButtonText: {
    fontWeight: '500',
  },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#212529',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
});

export default ProfileScreen;
