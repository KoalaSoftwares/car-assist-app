import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.carassist.app',
  appName: 'Car Assist',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
};

export default config;
