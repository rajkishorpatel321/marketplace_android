import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DateSelector from './DateSelector';

const MarketPlacePriceDisplay = ({marketPlaceTitle, cropPrice}) => {
  const renderMarketplaceItem = ({item, index}) => (
    <View
      style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <Text style={[styles.cell, styles.nameCell]}>{item.cropName}</Text>
      <Text style={[styles.cell, styles.priceCell]}>{item.priceHighest}</Text>
      <Text style={[styles.cell, styles.priceCell]}>{item.priceLowest}</Text>
      <Text style={[styles.cell, styles.priceCell]}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{marketPlaceTitle}</Text>
        <View style={styles.dateSelectorContainer}>
          <DateSelector />
        </View>
      </View>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.headerText, styles.nameCell]}>
          फसल
        </Text>
        <Text style={[styles.cell, styles.headerText, styles.priceCell]}>
          अधिकत्तम
        </Text>
        <Text style={[styles.cell, styles.headerText, styles.priceCell]}>
          न्यूनतम
        </Text>
        <Text style={[styles.cell, styles.headerText, styles.priceCell]}>
          मॉडल
        </Text>
      </View>
      {cropPrice === 'Sunday' ? (
        <Text style={styles.sundayMessage}>
          रविवार को सभी बाजार बंद हैं। कृपया अन्य तारीख चुनें। तारीख चुनने के
          लिए कैलेंडर के आइकन पर क्लिक करें।
        </Text>
      ) : cropPrice.length > 0 ? (
        <FlatList
          data={cropPrice}
          renderItem={renderMarketplaceItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noDataText}>
          क्षमा करें, हमारे पास इस तारीख का भाव उपलब्ध नहीं है। कृपया अन्य तारीख
          चुनें।
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom:5,
    paddingRight:5,
    paddingLeft:5,
    borderRadius:5,
    backgroundColor: '#e8eaf6', // Background color inside the container
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateSelectorContainer: {
    marginLeft: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#6200EE',
    paddingBottom: 8,
    marginBottom: 8,
    backgroundColor: '#e8eaf6',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  evenRow: {
    backgroundColor: '#f1f1f1',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  nameCell: {
    flex: 2,
  },
  priceCell: {
    flex: 1,
  },
  noDataText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    fontSize: 16,
  },
  sundayMessage: {
    textAlign: 'center',
    color: '#d32f2f',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MarketPlacePriceDisplay;
