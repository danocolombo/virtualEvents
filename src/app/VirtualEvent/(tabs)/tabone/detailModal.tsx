import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import { printObject } from '@/utils/fortson';
import event from '@assets/data/event.json';
import allEvents from '@assets/data/events.json';
import users from '@assets/data/users.json';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/app/components/CustomButton';
const ModalScreen = () => {
    const { reservation } = useLocalSearchParams();
    console.log('🚀 ~ ModalScreen ~ reservation:', reservation);
    // const thisReservation = allEvents;
    // console.log('🚀 ~ ModalScreen ~ thisReservation:', thisReservation);
    const navigation = useNavigation();
    const onAdd = () => {};
    const displayedUsers = users.slice(0, 5);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{event.name}</Text>

            <Text style={styles.dateTime}>
                <AntDesign name='calendar' size={24} color={'black'} />
                {'  '}
                {new Date(event.date).toDateString()}
            </Text>
            <View style={styles.footer}>
                <View style={styles.users}>
                    {displayedUsers.map((u, index) => {
                        return (
                            <Image
                                key={index}
                                source={{ uri: u.avatarUrl }}
                                style={[
                                    styles.userAvatar,
                                    {
                                        transform: [
                                            { translateX: -15 * index },
                                        ],
                                    },
                                ]}
                            />
                        );
                    })}
                    <View
                        style={[
                            styles.userAvatar,
                            {
                                transform: [
                                    { translateX: -15 * displayedUsers.length },
                                ],
                            },
                        ]}
                    >
                        <Text>+{users.length - displayedUsers.length}</Text>
                    </View>
                </View>
                <CustomButton
                    text='Add an entry'
                    onPress={onAdd}
                    type={'PRIMARY'}
                    bgColor={''}
                    fgColor={''}
                />
            </View>
        </View>
    );
};

export default ModalScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 25,
        backgroundColor: '#fff',
    },

    title: {
        fontFamily: 'robotoBold',
        fontSize: 24,
        color: '#010101',
        marginVertical: 10,
    },
    dateTime: {
        fontSize: 18,
    },
    footer: {
        marginTop: 'auto',
    },
    users: {
        flexDirection: 'row',
    },
    userAvatar: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
