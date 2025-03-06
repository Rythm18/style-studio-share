
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeHeaderProps {
  title: string;
  subtitle: string;
}

const WelcomeHeader = ({ title, subtitle }: WelcomeHeaderProps) => {
  return (
    <View style={styles.welcomeSection}>
      <Text style={styles.welcomeTitle}>{title}</Text>
      <Text style={styles.welcomeSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    padding: 20,
    marginTop: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#73C7C7',
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#A6F1E0',
  },
});

export default WelcomeHeader;
