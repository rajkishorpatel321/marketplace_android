import { Text, View } from "react-native";
import CropPriceDisplay from "../Component/CropPriceDisplay";
import react, { useEffect, useState } from 'react';
import LoadingScreen from "../Component/LoadingScreen";
import axios from 'axios';
import { API_URL } from './utils.js';

const CropPrice_Screen = ({item,dateParam}) => {
    const id = item.cropId;
    const selectedDate = dateParam;
    const [cropData, setCropData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          const date = new Date(selectedDate);
          const dayOfWeek = date.getUTCDay(); // 0 for Sunday, 1 for Monday, etc.
          if (dayOfWeek === 0) { // 0 indicates Sunday
            setCropData("Sunday");
            setIsLoading(false);
          } else {
            try {
              const response = await axios.get(
                `${API_URL}/api/crop-prices/by-crop/name/${id}/on-date/${selectedDate}`
              );
    
              if (Array.isArray(response.data)) {
                setCropData(response.data); // Directly set the data if it’s an array
                // setCropData('Sunday')
              } else {
                console.error("Unexpected data format:", response.data);
              }
            } catch (error) {
              console.error("Error fetching crop prices:", error);
            } finally {
              setIsLoading(false);
            }
          }
        };
    
        fetchData();
      }, [id, selectedDate]);
    
      if (isLoading) {
        return <LoadingScreen />;
      }
    return(
        <View>
            <Text>
                this is Crop Pric screen
            </Text>
            <CropPriceDisplay cropTitle={item.cropName} marketplaces={cropData}/>
        </View>
    )
}

export default CropPrice_Screen;