import React,{ useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View,StatusBar  } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/storeIndex';
import Header from './Component/Header';
import AdComponent from './Component/AdComponent';
import Screen_Navigaton_If_Else from './screen/Screen_Navigation_If_Else';
import NotificationService from './services/NotificationService';

function App(): React.JSX.Element {
  useEffect(() => {
    NotificationService.requestNotificationPermission();
    NotificationService.handleTokenRefresh();
    NotificationService.initializeForegroundHandler();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
        <View style={styles.wrapper}>
          {/* Scrollable content */}
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Header title={'कृषि साथी'} />
            <AdComponent />
            <Screen_Navigaton_If_Else />
          </ScrollView>

          <View style={styles.footer}>
            <AdComponent />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the SafeAreaView take full screen
    backgroundColor: '#ffffff',
  },
  wrapper: {
    flex: 1, // Ensures the wrapper view also takes up full screen
  },
  scrollContent: {
    flexGrow: 1, // Allows ScrollView content to expand if needed
  },
  footer: {
    borderTopColor: '#e0e0e0', // Subtle border for separation
    paddingBottom:1,
  },
});

export default App;
