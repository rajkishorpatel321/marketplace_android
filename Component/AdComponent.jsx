import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AdComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AD Of Company text image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: '#ADD8E6', // Gold color for visibility
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
  },
  text: {
    fontSize: 18,
    color: '#000', // Black text color
  },
});

export default AdComponent;
