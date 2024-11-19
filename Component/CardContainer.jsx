import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';

const CardContainer = ({onSelectCrop = () => {}, data = []}) => {
  return (
    <View style={styles.container}>
      {Array.isArray(data) &&
        data.map(item => (
          <View key={item.id || item.cropName} style={styles.cardWrapper}>
            <Card title={item.cropName} onPress={() => onSelectCrop(item)} />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    marginRight:7,
  },
  cardWrapper: {
    width: '25%', // Creates a 4-column layout
    padding: 5,
  },
});

export default CardContainer;
