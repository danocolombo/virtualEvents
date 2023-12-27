import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '@/hooks';
import {
    getCakesState,
    incrementCakes,
    decrementCakes,
} from '@/features/cakes/cakesSlice';
import { resetCakesInventory } from '@/features/cakes/cakesThunks';
import {
    getPiesState,
    incrementPies,
    decrementPies,
} from '@/features/pies/piesSlice';
import { resetPiesInventory } from '@/features/pies/piesThunks';

const TestScreen = () => {
    const cakes = useAppSelector(getCakesState);
    const pies = useAppSelector(getPiesState);
    const dispatch = useAppDispatch();

    const handleSellCake = () => {
        if (cakes.inventory > 0) {
            dispatch(decrementCakes());
        }
    };
    const handleBakeCake = () => {
        dispatch(incrementCakes());
    };
    const handleResetCakes = () => {
        dispatch(resetCakesInventory(0));
    };
    const handleSellPie = () => {
        if (pies.inventory > 0) {
            dispatch(decrementPies());
        }
    };
    const handleBakePie = () => {
        dispatch(incrementPies());
    };
    const handleResetPies = () => {
        dispatch(resetPiesInventory(0));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.intro}>
                <Text style={styles.title}>Redux Values</Text>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.featureContainer}>
                    <View style={styles.featureData}>
                        <Text style={styles.subTitle}>Cakes</Text>
                        <Text style={[styles.text, styles.featureData]}>
                            Inventory: {cakes.inventory}
                        </Text>
                        <Text style={[styles.text, styles.featureData]}>
                            Status: {cakes.status}
                        </Text>
                    </View>
                </View>
                <View style={styles.featureContainer}>
                    <View style={styles.featureData}>
                        <Text style={styles.subTitle}>Pies</Text>
                        <Text style={[styles.text, styles.featureData]}>
                            Inventory: {pies.inventory}
                        </Text>
                        <Text style={[styles.text, styles.featureData]}>
                            Status: {pies.status}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleSellCake()}
                >
                    <Text style={[styles.buttonText]}>sell cake</Text>
                </Pressable>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleBakeCake()}
                >
                    <Text style={[styles.buttonText]}>bake cake</Text>
                </Pressable>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleResetCakes()}
                >
                    <Text style={[styles.buttonText]}>reset cakes</Text>
                </Pressable>
            </View>
            <View style={styles.actionsContainer}>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleSellPie()}
                >
                    <Text style={[styles.buttonText]}>sell pie</Text>
                </Pressable>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleBakePie()}
                >
                    <Text style={[styles.buttonText]}>bake pie</Text>
                </Pressable>
                <Pressable
                    style={styles.actionsButton}
                    onPress={() => handleResetPies()}
                >
                    <Text style={[styles.buttonText]}>reset pies</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.disclosureText}>
                    Resetting will simulate REST call (async/await)
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro: {
        marginHorizontal: 10,
    },
    title: {
        fontFamily: 'robotoBold',
        fontSize: 20,
    },
    subTitle: {
        fontFamily: 'robotoBold',
        fontSize: 20,
    },
    dataContainer: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 20,
    },
    featureContainer: {
        flexDirection: 'row',
        width: '100%',
        // flex: 1,
        backgroundColor: 'lightgrey',
        borderColor: '#000000',
        borderStyle: 'dotted',
        borderWidth: 2,
        // borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    featureData: {
        marginLeft: 10,
    },
    text: {
        fontFamily: 'roboto',
        fontSize: 18,
    },
    actionsContainer: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionsButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        minWidth: '30%',
    },
    buttonText: {
        fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
        color: '#ffffff',
    },
    disclosureText: {
        paddingVertical: 10,
        fontFamily: 'roboto',
        fontSize: 14,
        color: 'black',
    },
});
