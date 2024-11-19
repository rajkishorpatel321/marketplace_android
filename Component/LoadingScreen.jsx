import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6200EE" />
      <Text style={styles.loadingText}>Loading, please wait...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop:20,
  },
  loadingText: {
    marginTop: 20, // Space between the spinner and text
    fontSize: 18,
    fontWeight: '600',
    color: '#333', // Neutral dark gray text
    textAlign: 'center',
  },
});

export default LoadingScreen;
