import { Text, View,ScrollView,StyleSheet } from "react-native"
import Heading from "../Component/Heading";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './utils.js';
import CardContainer from "../Component/CardContainer";
import MarketPlaceCardContainer from "../Component/MarketPlaceCardConatiner.jsx";
import LoadingScreen from "../Component/LoadingScreen.jsx";

const Home_Screen_1 = ({onSelectCrop,onSelectMarketPlace}) => {
    const [cropData,setCropData] = useState(null);
    const [marketplaceData,setMarketplaceData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [cropsResponse,marketplaceResponse] = await Promise.all([
            axios.get(`${API_URL}/api/crops/getAllCrop`),
            axios.get(`${API_URL}/api/marketplace/getAllMarketPlace`),
                   ]);
            setCropData(cropsResponse.data);
            setMarketplaceData(marketplaceResponse.data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);
    
    if (isLoading || !cropData || !marketplaceData) {
        return (
        <View >
            <LoadingScreen /> 
        </View>
        );
      }
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Heading title={'फसल के अनुसार मूल्य'} />
            <CardContainer onSelectCrop={onSelectCrop} data={cropData}/>
            <Heading title={'मंडी के अनुसार मूल्य'} />
            <MarketPlaceCardContainer onSelectMarketPlace={onSelectMarketPlace} data={marketplaceData} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1, 
    },
    placeholderText: {
      marginTop: 10,
      fontSize: 16,
      color: "gray",
    }
  });
export default Home_Screen_1;