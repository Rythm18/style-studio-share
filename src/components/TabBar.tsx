
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Search, Heart, User, Plus } from 'lucide-react';

interface TabBarProps {
  activeTab: string;
  navigation: any;
}

const TabBar = ({ activeTab, navigation }: TabBarProps) => {
  const iconSize = 24;
  const iconColor = '#FFFFFF';
  const activeIconColor = '#D946EF';

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Home 
          size={iconSize} 
          color={activeTab === 'home' ? activeIconColor : iconColor} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Search')}
      >
        <Search 
          size={iconSize} 
          color={activeTab === 'search' ? activeIconColor : iconColor} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.addButton}>
          <Plus size={iconSize} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tabItem}>
        <Heart 
          size={iconSize} 
          color={activeTab === 'likes' ? activeIconColor : iconColor} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <User 
          size={iconSize} 
          color={activeTab === 'profile' ? activeIconColor : iconColor} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    height: 60,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#222222',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D946EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
