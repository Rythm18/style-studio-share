
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface FeedItemProps {
  item: {
    id: number;
    username: string;
    userAvatar: string;
    image: string;
    likes: number;
    description: string;
  };
}

const FeedItem = ({ item }: FeedItemProps) => {
  return (
    <View style={styles.feedItem}>
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
  );
};

const styles = StyleSheet.create({
  feedItem: {
    marginBottom: 24,
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
    borderWidth: 2,
    borderColor: '#F7CFD8',
  },
  username: {
    fontWeight: '600',
    color: '#73C7C7',
  },
  moreButton: {
    padding: 5,
  },
  feedImage: {
    width: '100%',
    height: 280,
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
    color: '#A6F1E0',
    fontWeight: '500',
  },
  likes: {
    fontWeight: '500',
    marginBottom: 5,
    color: '#73C7C7',
  },
  description: {
    color: '#A6F1E0',
    lineHeight: 20,
  },
});

export default FeedItem;
