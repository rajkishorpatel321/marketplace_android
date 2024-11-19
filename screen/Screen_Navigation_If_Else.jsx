import { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import Home_Screen_1 from "./Home_Screen_1";
import CropPrice_Screen from "./CropPrice_Screen";
import MarketPlacePrice_Screen from "./MarketPlacePrice_Screen";
import LoadingScreen from "../Component/LoadingScreen";
import { useSelector } from 'react-redux';

const Screen_Navigaton_If_Else = () => {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [selectedCropItem, setSelectedCropItem] = useState(null);
  const [selectedMarketPlaceItem, setSelectedMarketPlaceItem] = useState(null);
  const selectedDate = useSelector((state) => state.date.selectedDate);

  const handleSelectCrop = (item) => {
    setSelectedCropItem(item); // Pass selected crop data
    setCurrentScreen("CropPrice"); // Switch to CropPrice_Screen
  };

  const handleSelectMarketPlace = (item) => {
    setSelectedMarketPlaceItem(item); // Pass selected marketplace data
    setCurrentScreen("MarketPlace"); // Switch to MarketPlace_Screen
  };

  const handleBackPress = () => {
    if (currentScreen === "CropPrice" || currentScreen === "MarketPlace") {
      setCurrentScreen("Home"); // Go back to Home screen
      return true; // Prevent default back action (which exits the app)
    }
    return false; // Allow default back action (exit app)
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [currentScreen]);

  if (currentScreen === "Home") {
    return <Home_Screen_1 onSelectCrop={handleSelectCrop} onSelectMarketPlace={handleSelectMarketPlace} />;
  } else if (currentScreen === "CropPrice") {
    console.log('crop price is called')
    return <CropPrice_Screen item={selectedCropItem} dateParam={selectedDate}/>;
  } else if (currentScreen === "MarketPlace") {
    return <MarketPlacePrice_Screen item={selectedMarketPlaceItem} dateParam={selectedDate}/>;
  }
  return <LoadingScreen />;
};

export default Screen_Navigaton_If_Else;
