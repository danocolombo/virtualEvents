import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
// import { useAppSelector } from '@/hooks';

const TabOneScreen = () => {
    const APP_NAME = 'VirtualEvent';
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: APP_NAME,
                    headerBackTitle: 'Main',
                }}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <View style={{ paddingHorizontal: 25 }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Tab One</Text>
                    </View>
                </View>
            </View>

            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

export default TabOneScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        padding: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'RobotoBold',
        fontSize: 30,
        color: '#010101',
    },
    newButtonArea: {
        marginVertical: 5,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00FF00',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        // width: '70%',
    },

    buttonText: {
        textAlign: 'center',
        fontFamily: 'robotoBold',
        fontSize: 14,
    },
});
