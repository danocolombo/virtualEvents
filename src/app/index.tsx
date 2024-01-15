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
import { getCakesState } from '@features/cakes/cakesSlice';
import { getPiesState } from '@features/pies/piesSlice';
const HomeScreen = () => {
    const pies = useAppSelector(getPiesState);
    const cakes = useAppSelector(getCakesState);
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Main Screen' }} />
            {/* <View>
                <Image
                    source={require('@assets/images/DoItNow.jpg')}
                    style={{ height: 300, aspectRatio: 1 / 1 }}
                />
            </View> */}
            <View>
                <Text style={styles.title}>Virtual Event App</Text>
            </View>
            <View>
                <Text style={styles.text}>From NotJustDev</Text>
            </View>
            {/* <View style={styles.reduxContainer}>
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
            </View> */}

            {/* <Link href={'test'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Test Redux</Text>
                    </View>
                </Pressable>
            </Link>
            <Link href={'forms'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Form Samples</Text>
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
            <Link href={'classes'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Classes</Text>
                    </View>
                </Pressable>
            </Link> */}
            <Link href={'VirtualEvent'} asChild>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Virtual Event</Text>
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
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 2,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'robotoBold',
    },
});
export default HomeScreen;
