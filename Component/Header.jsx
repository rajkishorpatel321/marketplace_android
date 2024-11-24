import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/logo_app.png')} 
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#4CAF50', // Header background color for safe area blending
  },
  headerContainer: {
    flexDirection: 'row', // Row layout for logo and title
    alignItems: 'center',
    backgroundColor: '#8E4CFF', // Primary header color
    borderRadius: 8, // Smooth corners for a refined look
    // marginHorizontal: 10, // Space on sides
    marginBottom: 5, // Space from bottom
    paddingVertical: 10, // Vertical padding for header height
    paddingHorizontal: 10, // Horizontal padding for inner spacing
    elevation: 8, // Shadow for depth on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  logo: {
    width: 30, // Logo width
    height: 30, // Logo height
    resizeMode: 'contain', // Ensures the logo scales proportionally
    marginRight: 10, // Space between logo and text
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF', // White text
    fontWeight: '600', // Semi-bold text for the title
    flex: 1, // Takes the remaining space
    textAlign: 'left', // Aligns the text to the left
  },
});
