import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
} from 'react-native';
import { useAppSelector } from '@/hooks';
import { getCakesState } from '@/features/cakes/cakesSlice';
import { getPiesState } from '@/features/pies/piesSlice';
const HomeScreen = () => {
    const pies = useAppSelector(getPiesState);
    const cakes = useAppSelector(getCakesState);
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
                <Text style={styles.item}>Reduxjs.Toolkit</Text>
            </View>
            <View style={styles.reduxContainer}>
                <View style={styles.inventoryContainer}>
                    <Text style={{ fontSize: 12 }}>Inventory (cakes): </Text>
                    <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                        {cakes.inventory}
                    </Text>
                </View>
                <View style={styles.inventoryContainer}>
                    <Text style={{ fontSize: 12 }}>Inventory (pies): </Text>
                    <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                        {pies.inventory}
                    </Text>
                </View>
                <View style={styles.statusContainer}>
                    <Text style={{ fontSize: 12 }}>Redux status: </Text>
                    <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                        {cakes.status && pies.status}
                    </Text>
                </View>
            </View>
            <Link href={'test'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Test Redux</Text>
                    </View>
                </Pressable>
            </Link>
            <Link href={'forms/order'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Order Form</Text>
                    </View>
                </Pressable>
            </Link>
            <Link href={'subjects'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Subjects</Text>
                    </View>
                </Pressable>
            </Link>
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
    reduxContainer: {
        paddingVertical: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
    },
    inventoryContainer: {
        flexDirection: 'row',
    },
    statusContainer: {
        flexDirection: 'row',
        // paddingVertical: 20,
        // marginTop: 'auto',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'robotoBold',
    },
});
export default HomeScreen;
