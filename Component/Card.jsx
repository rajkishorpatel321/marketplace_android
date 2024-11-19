import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Card = ({title, onPress, fontSize}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, {fontSize}]} // Apply the calculated font size
          adjustsFontSizeToFit
          numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    margin: 5,
    width: '100%',
    maxWidth: 200,
    height: 80,
  },
  cardContent: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
