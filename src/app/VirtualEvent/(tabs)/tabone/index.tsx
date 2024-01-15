import {
    Alert,
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
import { Agenda, AgendaEntry } from 'react-native-calendars';
import events from '@assets/data/events.json';
const TabOneScreen = () => {
    const router = useRouter();
    const navigate = useNavigation();
    const APP_NAME = 'taboneIndex';
    const today = new Date().toISOString().substring(0, 10);
    const renderItem = (reservation: AgendaEntry, firstItemInDay: boolean) => {
        const fontSize = firstItemInDay ? 16 : 14;
        const color = firstItemInDay ? 'black' : 'darkgrey';

        return (
            <View>
                <Pressable
                    style={[styles.item, { height: reservation.height }]}
                    onPress={() => Alert.alert(reservation.name)}
                >
                    <Text style={{ fontSize, color }}>{reservation.name}</Text>
                </Pressable>
            </View>
        );
    };
    const renderEmptyItem = () => {
        return (
            <View style={styles.emptyItem}>
                <Text>--</Text>
            </View>
        );
    };
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
                            <Ionicons
                                name='caret-up'
                                size={24}
                                color='black'
                                style={{ marginRight: 16 }} // Adjust the styling as needed
                            />
                        </Link>
                    ),
                }}
            />
            <View
                style={{
                    flex: 1,
                }}
            >
                <Agenda
                    items={events}
                    renderItem={renderItem}
                    renderEmptyDate={renderEmptyItem}
                    selected={today}
                    showOnlySelectedDayItems
                />
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

    title: {
        fontFamily: 'robotoBold',
        fontSize: 30,
        color: '#010101',
    },

    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyItem: {
        backgroundColor: 'beige',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
});
