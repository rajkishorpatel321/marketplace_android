import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <View>
        <ActivityIndicator size="large" color="#FFD700" style={styles.spinner} />
        <Text style={styles.loadingText}>Loading, please wait...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    padding: 80, // Ensure there is space around the loading screen
    backgroundColor: '#F5F5F5', // Neutral background for the app
  },
  container: {
    padding: 20, // Add padding inside the loading component
    margin: 10, // Ensure space between this component and other components
    borderRadius: 10, // Rounded corners for a modern look
    backgroundColor: '#6200EE', // Vibrant background for the loading screen
    elevation: 5, // Shadow effect for depth (Android only)
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  spinner: {
    marginBottom: 20, // Space between the spinner and the text
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000', // White text for contrast
    textAlign: 'center',
    paddingHorizontal: 10, // Prevent text from touching the edges
  },
});

export default LoadingScreen;
