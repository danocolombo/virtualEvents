import {
    Button,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import { Link, Stack, useNavigation, useRouter } from 'expo-router';
import { useAppSelector } from '@/hooks';
import { Ionicons } from '@expo/vector-icons';

const TabOneScreen = () => {
    const router = useRouter();
    const navigate = useNavigation();
    const APP_NAME = 'taboneIndex';
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: APP_NAME,
                    headerLeft: () => (
                        <Ionicons
                            name='caret-back'
                            size={24}
                            color='black'
                            onPress={() => {
                                navigate.goBack();
                            }}
                            style={{ marginRight: 16 }} // Adjust the styling as needed
                        />
                    ),
                    headerRight: () => (
                        <Link href='/VirtualEvent/tabone/modal' asChild>
                            <Button title='Open Modal' />
                        </Link>
                        // <Ionicons
                        //     name='caret-up-outline'
                        //     size={24}
                        //     color='black'
                        //     onPress={(e) => {
                        //         e.preventDefault();

                        //         router.push('modal');
                        //     }}
                        //     style={{ marginRight: 16 }} // Adjust the styling as needed
                        // />
                    ),
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

            <StatusBar />
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
});
