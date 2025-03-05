
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
  const collections = [
    { 
      id: 1, 
      title: 'Summer Essentials', 
      description: 'A curated collection of light, breathable items perfect for hot summer days and warm nights.',
      author: 'Sophia Parker',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      coverImage: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
      items: [
        { id: 1, name: 'Linen Shirt', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', price: '$49.99', brand: 'Essential Clothing' },
        { id: 2, name: 'Summer Dress', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80', price: '$79.99', brand: 'Urban Style' },
        { id: 3, name: 'Straw Hat', image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$29.99', brand: 'Accessory World' },
        { id: 4, name: 'Leather Sandals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$59.99', brand: 'Comfort Step' },
        { id: 5, name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$39.99', brand: 'Vision Plus' },
        { id: 6, name: 'Beach Bag', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$45.99', brand: 'Beach Days' },
      ],
      likes: 432,
      saves: 128,
    },
    { 
      id: 2, 
      title: 'Office Casual', 
      description: 'Professional yet comfortable outfits suitable for modern workplace environments.',
      author: 'James Wilson',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      coverImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      items: [
        { id: 1, name: 'Blazer', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80', price: '$129.99', brand: 'Business Attire' },
        { id: 2, name: 'Button-Up Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', price: '$59.99', brand: 'Professional Line' },
        { id: 3, name: 'Trousers', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: '$79.99', brand: 'Classic Wear' },
        { id: 4, name: 'Leather Belt', image: 'https://images.unsplash.com/photo-1553704571-c32d20af6b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', price: '$45.99', brand: 'Accessorize' },
      ],
      likes: 367,
      saves: 95,
    },
    { 
      id: 3, 
      title: 'Weekend Vibes', 
      description: 'Casual and comfortable outfits perfect for weekend outings and relaxation.',
      author: 'Emma Thompson',
      authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      coverImage: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      items: [
        { id: 1, name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', price: '$89.99', brand: 'Casual Comfort' },
        { id: 2, name: 'Graphic Tee', image: 'https://images.unsplash.com/photo-1598522311354-9943e8174a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', price: '$29.99', brand: 'Urban Prints' },
        { id: 3, name: 'Jogger Pants', image: 'https://images.unsplash.com/photo-1580906462740-ec453a2dbcb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80', price: '$49.99', brand: 'Active Lifestyle' },
        { id: 4, name: 'Sneakers', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', price: '$79.99', brand: 'Street Style' },
        { id: 5, name: 'Cap', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80', price: '$24.99', brand: 'Headwear Co.' },
      ],
      likes: 285,
      saves: 76,
    },
    { 
      id: 4, 
      title: 'Evening Elegance', 
      description: 'Sophisticated outfits for special occasions and evening events.',
      author: 'Oliver Davis',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80',
      items: [
        { id: 1, name: 'Evening Dress', image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80', price: '$199.99', brand: 'Elegance' },
        { id: 2, name: 'Suit', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$299.99', brand: 'Formal Wear' },
        { id: 3, name: 'Clutch Bag', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', price: '$79.99', brand: 'Evening Accessories' },
        { id: 4, name: 'Dress Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', price: '$159.99', brand: 'Formal Steps' },
      ],
      likes: 412,
      saves: 143,
    },
  ];
  
  const collection = collections.find(c => c.id === id) || collections[0];
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.coverImageContainer}>
          <Image source={{ uri: collection.coverImage }} style={styles.coverImage} />
          <View style={styles.coverGradient} />
          <View style={styles.coverContent}>
            <Text style={styles.collectionTitle}>{collection.title}</Text>
          </View>
        </View>
        
        <View style={styles.collectionDetails}>
          <View style={styles.authorSection}>
            <Image source={{ uri: collection.authorImage }} style={styles.authorImage} />
            <View>
              <Text style={styles.byText}>Curated by</Text>
              <Text style={styles.authorName}>{collection.author}</Text>
            </View>
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
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonIcon}>♥</Text>
            <Text style={styles.actionButtonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonIcon}>🔖</Text>
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonIcon}>↗</Text>
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.itemsSection}>
          <Text style={styles.sectionTitle}>Items in this collection</Text>
          
          <View style={styles.itemsGrid}>
            {collection.items.map((item) => (
              <TouchableOpacity key={item.id} style={styles.itemCard}>
                <View style={styles.itemImageContainer}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemBrand}>{item.brand}</Text>
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
    backgroundColor: '#FEF3E2',
  },
  coverImageContainer: {
    height: 260,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 260,
    position: 'absolute',
  },
  coverGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  coverContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  collectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  collectionDetails: {
    padding: 20,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  byText: {
    fontSize: 12,
    color: '#868e96',
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343a40',
  },
  collectionDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
    marginBottom: 20,
  },
  statsSection: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FA812F',
  },
  statLabel: {
    fontSize: 12,
    color: '#868e96',
    marginTop: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 18,
    marginRight: 5,
    color: '#FA812F',
  },
  actionButtonText: {
    color: '#495057',
    fontWeight: '500',
  },
  itemsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#343a40',
    marginBottom: 20,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  itemCard: {
    width: '50%',
    padding: 8,
    marginBottom: 16,
  },
  itemImageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    aspectRatio: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    marginTop: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#343a40',
  },
  itemBrand: {
    fontSize: 14,
    color: '#868e96',
    marginVertical: 2,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FA812F',
  },
});

export default CollectionScreen;
