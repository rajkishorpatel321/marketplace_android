import { Text, View } from "react-native";
import MarketPlacePriceDisplay from "../Component/MarketPlacePriceDisplay";
import react, { useEffect, useState } from 'react';
import LoadingScreen from "../Component/LoadingScreen";
import axios from 'axios';
import { API_URL } from './utils.js';

const MarketPlacePrice_Screen = ({item,dateParam}) =>{
  
    const selectedDate = dateParam;
    const id = item.marketplaceId;
    const [cropPrice, setCropPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const date = new Date(selectedDate);
        const dayOfWeek = date.getUTCDay(); // Sunday is 0, Monday is 1, etc.
    
        if (dayOfWeek === 0) {
          // If the selected day is Sunday, set cropPrice to "Sunday" without calling the API
          setCropPrice("Sunday");
          setIsLoading(false);
        } else {
          const fetchData = async () => {
            try {
              const response = await axios.get(
                `${API_URL}/api/marketplace/by-marketplace/${id}/on-date/${selectedDate}`
              );
              if (Array.isArray(response.data)) {
                setCropPrice(response.data);
              } else {
                console.error("Unexpected data format:", response.data);
              }
            } catch (error) {
              console.error("Error fetching crop prices:", error);
            } finally {
              setIsLoading(false);
            }
          };
    
          fetchData();
        }
      }, [id, selectedDate]);
    
      if (isLoading) {
        return <LoadingScreen />;
      }
    return(
        <View>
            <Text>
                This is the market place screen
            </Text>
            <MarketPlacePriceDisplay marketPlaceTitle={item.marketplaceName} cropPrice={cropPrice}/>
        </View>
    )
}

export default MarketPlacePrice_Screen;