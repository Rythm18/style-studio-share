
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface TabBarProps {
  activeTab: string;
  navigation: any;
}

const TabBar = ({ activeTab, navigation }: TabBarProps) => {
  const iconColor = '#FFFFFF';
  const activeIconColor = '#D946EF';

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[
          styles.iconText,
          { color: activeTab === 'home' ? activeIconColor : iconColor }
        ]}>
          🏠
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={[
          styles.iconText,
          { color: activeTab === 'search' ? activeIconColor : iconColor }
        ]}>
          🔍
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.addButton}>
          <Text style={styles.iconText}>➕</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tabItem}>
        <Text style={[
          styles.iconText,
          { color: activeTab === 'likes' ? activeIconColor : iconColor }
        ]}>
          ❤️
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={[
          styles.iconText,
          { color: activeTab === 'profile' ? activeIconColor : iconColor }
        ]}>
          👤
        </Text>
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
  iconText: {
    fontSize: 24,
  },
});

export default TabBar;
