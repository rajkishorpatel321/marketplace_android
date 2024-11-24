// react-native-push-notification.d.ts
declare module 'react-native-push-notification' {
    export interface PushNotificationOptions {
      channelId: string;
      channelName: string;
      channelDescription?: string;
      playSound?: boolean;
      soundName?: string;
      importance?: Importance;
      vibrate?: boolean;
      message?: string;  // Add message property
      title?: string;    // Add title property
    }
  
    export interface PushNotification {
      configure: (options: any) => void;
      localNotification: (options: PushNotificationOptions) => void;
      createChannel: (
        channel: {
          channelId: string; // (required)
          channelName: string; // (required)
          channelDescription?: string; // (optional)
          playSound?: boolean; // (optional)
          soundName?: string; // (optional)
          importance?: Importance; // (optional)
          vibrate?: boolean; // (optional)
        },
        callback?: (created: boolean) => void
      ) => void;
    }
  
    export const Importance: {
      LOW: number;
      DEFAULT: number;
      HIGH: number;
      MAX: number;
    };
  
    const PushNotification: PushNotification;
    export default PushNotification;
  }
  