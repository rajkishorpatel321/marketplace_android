import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './Component/Header';
import AdComponent from './Component/AdComponent';
import { Provider } from 'react-redux';
import store from './store/storeIndex';
import react, { useState } from "react";
import Screen_Navigaton_If_Else from './screen/Screen_Navigation_If_Else';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Header title={'कृषि साथी'}/>
      <AdComponent/>
      <Screen_Navigaton_If_Else />
     <AdComponent/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff' 
  }
});

export default App;
