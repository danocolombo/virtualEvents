import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useAppSelector } from '@/hooks';
import { getCakesStatus, getCakeInventory } from '@/features/cakes/cakesSlice';
import { getPieInventory, getPiesStatus } from '@/features/pies/piesSlice';
const HomeScreen = () => {
    const reduxCakesStatus = useAppSelector(getCakesStatus);
    const reduxPiesStatus = useAppSelector(getPiesStatus);
    const inventoryCakesValue = useAppSelector(getCakeInventory);
    const inventoryPiesValue = useAppSelector(getPieInventory);
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
                        {inventoryCakesValue}
                    </Text>
                </View>
                <View style={styles.inventoryContainer}>
                    <Text style={{ fontSize: 12 }}>Inventory (pies): </Text>
                    <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                        {inventoryPiesValue}
                    </Text>
                </View>
                <View style={styles.statusContainer}>
                    <Text style={{ fontSize: 12 }}>Redux status: </Text>
                    <Text style={{ fontFamily: 'robotoBoldItalic' }}>
                        {reduxCakesStatus && reduxPiesStatus}
                    </Text>
                </View>
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
});
export default HomeScreen;
