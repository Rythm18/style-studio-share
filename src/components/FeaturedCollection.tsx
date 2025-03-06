
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

interface Collection {
  id: number;
  name: string;
  author: string;
  image: string;
}

interface FeaturedCollectionProps {
  collections: Collection[];
  onPress: (id: number) => void;
}

const FeaturedCollection = ({ collections, onPress }: FeaturedCollectionProps) => {
  return (
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
            onPress={() => onPress(item.id)}
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
  );
};

const styles = StyleSheet.create({
  featuredSection: {
    padding: 20,
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
    color: '#FFFFFF',
  },
  seeAllText: {
    color: '#D946EF',
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
    backgroundColor: '#111111',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  collectionImageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  collectionImage: {
    width: 180,
    height: 220,
    borderRadius: 12,
  },
  collectionGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(217, 70, 239, 0.5)',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  collectionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 4,
    paddingHorizontal: 10,
  },
  collectionAuthor: {
    fontSize: 14,
    color: '#D946EF',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default FeaturedCollection;
