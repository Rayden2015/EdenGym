import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.nurudin.edengymapp',
  appName: 'EdenGym',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '88370238211-jnvr2emfi92uj7ds6l85q268pck2mp2q.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
}
};

export default config;




// 88370238211-v3v8b2h0fufsnms9ldj463oddtj9sd7v.apps.googleusercontent.com
