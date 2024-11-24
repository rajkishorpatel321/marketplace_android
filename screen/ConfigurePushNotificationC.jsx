import PushNotification from 'react-native-push-notification';

const ConfigurePushNotificationC = () => {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log("Notification received:", notification);
      // Process notification (show in UI or trigger any action)
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

export default ConfigurePushNotificationC;
