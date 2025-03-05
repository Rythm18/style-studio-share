
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CollectionScreenProps {
  route: {
    params: {
      id: number;
    };
  };
  navigation: any;
}

const CollectionScreen = ({ route, navigation }: CollectionScreenProps) => {
  const { id } = route.params;
  
  // Mock collection data
  const collection = {
    id,
    title: `Summer Collection ${id}`,
    description: 'A curated collection of summer outfits perfect for beach days and evening parties.',
    author: 'StyleExpert',
    authorImage: 'https://via.placeholder.com/50',
    coverImage: 'https://via.placeholder.com/600/300',
    items: [
      { id: 1, name: 'Beach Shirt', image: 'https://via.placeholder.com/300', price: '$49.99' },
      { id: 2, name: 'Summer Dress', image: 'https://via.placeholder.com/300', price: '$79.99' },
      { id: 3, name: 'Straw Hat', image: 'https://via.placeholder.com/300', price: '$29.99' },
      { id: 4, name: 'Sandals', image: 'https://via.placeholder.com/300', price: '$39.99' },
      { id: 5, name: 'Sunglasses', image: 'https://via.placeholder.com/300', price: '$19.99' },
      { id: 6, name: 'Beach Bag', image: 'https://via.placeholder.com/300', price: '$59.99' },
    ],
    likes: 432,
    saves: 128,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: collection.coverImage }} style={styles.coverImage} />
        
        <View style={styles.collectionHeader}>
          <Text style={styles.collectionTitle}>{collection.title}</Text>
          
          <View style={styles.authorSection}>
            <Image source={{ uri: collection.authorImage }} style={styles.authorImage} />
            <Text style={styles.authorName}>by {collection.author}</Text>
          </View>
          
          <Text style={styles.collectionDescription}>{collection.description}</Text>
          
          <View style={styles.statsSection}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{collection.likes}</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{collection.saves}</Text>
              <Text style={styles.statLabel}>Saves</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{collection.items.length}</Text>
              <Text style={styles.statLabel}>Items</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.likeButton}>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.itemsSection}>
          <Text style={styles.sectionTitle}>Items in this collection</Text>
          
          <View style={styles.itemsGrid}>
            {collection.items.map((item) => (
              <TouchableOpacity key={item.id} style={styles.itemCard}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
  coverImage: {
    width: '100%',
    height: 200,
  },
  collectionHeader: {
    padding: 15,
  },
  collectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  authorImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  authorName: {
    color: '#495057',
  },
  collectionDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
    marginBottom: 15,
  },
  statsSection: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e9ecef',
    paddingVertical: 15,
  },
  stat: {
    flex: 1,
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
  actionButtons: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  likeButton: {
    flex: 1,
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10,
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
  },
  itemsSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  itemCard: {
    width: '50%',
    padding: 5,
    marginBottom: 15,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemInfo: {
    paddingHorizontal: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: '#495057',
  },
});

export default CollectionScreen;
