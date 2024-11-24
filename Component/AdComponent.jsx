import React, { useEffect,useRef } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const AdComponent = () => {
  const bannerRef = useRef(null);
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  })
  return (
    <View style={styles.container}>
      <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
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
