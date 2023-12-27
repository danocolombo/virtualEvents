import { RootState } from '@/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useAppSelector } from '@/hooks';
import { getStatus } from '@/features/counter/counterSlice';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
const HomeScreen = () => {
    const reduxStatus = useAppSelector(getStatus);
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Main Screen' }} />
            <View>
                <Image
                    source={require('@assets/images/DoItNow.jpg')}
                    style={{ height: 300, aspectRatio: 1 / 1 }}
                />
            </View>
            <View>
                <Text style={styles.title}>Great Start!!</Text>
            </View>
            <View>
                <Text style={styles.text}>This has...</Text>
                <Text style={styles.item}>Expo Typescript Aliases</Text>
                <Text style={styles.item}>src/app starting folder</Text>
                <Text style={styles.item}>Google Fonts</Text>
            </View>
            <View style={styles.statusContainer}>
                <Text style={{ fontSize: 12 }}>Redux (counter) status: </Text>
                <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                    {reduxStatus}
                </Text>
            </View>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        fontFamily: 'roboto',
    },
    item: {
        fontSize: 18,
        fontFamily: 'robotoThin',
    },
    statusContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        // marginTop: 'auto',
        justifyContent: 'center',
    },
});
export default HomeScreen;
