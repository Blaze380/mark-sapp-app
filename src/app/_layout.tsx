import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ReactElement, useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { ColorSchemeName, Platform } from 'react-native';
import { Screens } from '@/constants/Screens';
import { Text, View } from '@/components/Themed';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout (): ReactElement | null {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav (): ReactElement {
  const colorScheme: ColorSchemeName = useColorScheme();
  //const { session, isLoading } = useSession();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name={Screens.WELCOME.INDEX as string} options={{ headerShown: false, }} />
        <Stack.Screen name={Screens.AUTH.INSERT_PHONE_NUMBER as string} options={{ headerShown: false, }} />
        <Stack.Screen name={Screens.WELCOME.MAIN_TAB.INDEX as string} options={{
          headerShown: true, headerTitle: "MarksApp", headerBackVisible: false, headerTitleStyle: { fontSize: 30 }
        }} />

      </Stack>

    </ThemeProvider>
  );
}
