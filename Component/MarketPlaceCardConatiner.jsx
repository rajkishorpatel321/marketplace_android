import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';
import {useSelector} from 'react-redux';

const MarketPlaceCardContainer = ({onSelectMarketPlace, data}) => {
  const selectedDate = useSelector(state => state.date.selectedDate);

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.marketplaceId} style={styles.cardWrapper}>
          <Card
            title={item.marketplaceName}
            onPress={() => onSelectMarketPlace(item)}
          />
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
    width: '25%',
    padding: 5,
  },
});

export default MarketPlaceCardContainer;
