
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TabBarProps {
  activeTab: string;
  navigation: any;
}

const TabBar = ({ activeTab, navigation }: TabBarProps) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[styles.tabText, activeTab === 'home' && styles.activeTabText]}>Home</Text>
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
        <Text style={[styles.tabText, activeTab === 'profile' && styles.activeTabText]}>Profile</Text>
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
    backgroundColor: '#73C7C7',
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
    color: '#F4F8D3',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#F7CFD8',
    fontWeight: '600',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7CFD8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#73C7C7',
    fontSize: 24,
    fontWeight: '600',
    marginTop: -2,
  }
});

export default TabBar;
