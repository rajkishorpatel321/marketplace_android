import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DateSelector from './DateSelector';

const Heading = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <DateSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically in the row
    justifyContent: 'space-between', // Space between the title and DateSelector
    marginTop:5,
    paddingBottom:5,
    paddingHorizontal: 10, // Space on the sides of the container
    backgroundColor: '#f8f9fa', // Light background to highlight the section
    borderRadius: 8, // Rounded corners
    elevation: 2, // Shadow for a slight lift effect on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
  },
  heading: {
    fontSize: 24, // Large text for heading
    fontWeight: 'bold', // Bold font
    color: '#333', // Dark text color
  },
});

export default Heading;
