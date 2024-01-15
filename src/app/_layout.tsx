import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { store } from '@/store';
import { Provider } from 'react-redux';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';
/** -------------------------------------
 * ALL GLOBAL CONFIGURATIONS IN THIS FILE
-------------------------------------- */
export default function RootLayout() {
    // prevent splash screen from automatically hiding. We will
    // display after fonts are installed.
    SplashScreen.preventAutoHideAsync();
    let [fontsLoaded, fontError] = useFonts({
        roboto: Roboto_400Regular,
        robotoItalic: Roboto_400Regular_Italic,
        robotoThin: Roboto_100Thin,
        robotoThinItalic: Roboto_100Thin_Italic,
        robotoBold: Roboto_700Bold,
        robotoBoldItalic: Roboto_700Bold_Italic,
    });
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (fontError) throw fontError;
    }, [fontError]);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    //const [isAuthenticated, setIsAuthenticated] = useState(true);
    const isAuthenticated = true;
    return (
        <Provider store={store}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    headerStyle: { backgroundColor: 'lightgrey' },
                }}
            >
                <Stack.Screen
                    name='index'
                    options={{ title: 'Default Title' }}
                />
                <Stack.Screen name='test' options={{ title: 'Redux Test' }} />
            </Stack>
        </Provider>
    );
}
