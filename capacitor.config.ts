import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.carassist.app',
  appName: 'Car Assist',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  },
};

export default config;
