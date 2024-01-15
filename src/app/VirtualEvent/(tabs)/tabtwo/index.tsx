import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import CustomButton from '@/app/components/CustomButton';
import users from '@assets/data/users.json';

const user = users[0];
const TabTwoScreen = () => {
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
            <View style={styles.container}>
                <Image
                    source={{ uri: user?.avatarUrl }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>{user?.displayName}</Text>
                <View style={{ marginTop: 'auto' }}>
                    <CustomButton
                        onPress={() => {}}
                        text='Sign out'
                        type='TERTIARY'
                        fgColor='crimson'
                        bgColor={''}
                    />
                </View>
            </View>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titleContainer: {
        padding: 2,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'robotoBold',
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

    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 15,
        color: 'dimgray',
    },
});
