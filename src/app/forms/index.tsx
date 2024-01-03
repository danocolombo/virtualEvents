import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const FormsScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
            }}
        >
            <View style={{ padding: 10 }}>
                <Text style={styles.title}>Form Samples</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Link href={'/forms/formOne'} asChild>
                    <Pressable>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                react-hook-form sample
                            </Text>
                        </View>
                    </Pressable>
                </Link>
                <Link href={'/forms/formDDOne'} asChild>
                    <Pressable>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                react-native-dropdown-select-list
                            </Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default FormsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        fontFamily: 'robotoBold',
        fontSize: 26,
        textAlign: 'center',
    },
    text: {
        fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        marginHorizontal: 40,
    },
    button: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: '#000000',
        fontFamily: 'robotoBold',
        fontSize: 18,
        textAlign: 'center',
    },
});
