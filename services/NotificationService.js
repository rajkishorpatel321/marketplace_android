import messaging from '@react-native-firebase/messaging';
import PushNotification, { Importance } from 'react-native-push-notification';

class NotificationService {
  // Request notification permission
  static requestNotificationPermission = async () => {
    try {
      await messaging().requestPermission();
      console.log('Notification permission granted.');
    } catch (error) {
      console.log('Notification permission denied:', error);
    }
  };

  // Handle token refresh
  static handleTokenRefresh = () => {
    messaging().onTokenRefresh(token => {
      console.log('Token refreshed:', token);
    });
  };

  // Initialize foreground notifications
  static initializeForegroundHandler = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
        channelDescription: 'A channel to categorize your notifications',
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );

    messaging().onMessage(async remoteMessage => {
      console.log('Notification received in foreground:', remoteMessage);
      PushNotification.localNotification({
        channelId: 'channel-id',
        title: remoteMessage.notification?.title ?? 'Default Title',
        message: remoteMessage.notification?.body ?? 'Default Message',
        playSound: true,
      });
    });
  };

  // Fetch the FCM token (optional)
  static fetchFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      return token;
    } catch (error) {
      console.log('Error fetching FCM token:', error);
    }
  };
}

export default NotificationService;
