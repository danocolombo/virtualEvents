import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import users from '@assets/data/users.json';
import UserListItem from '@/app/components/UserListItem';
const UserScreen = () => {
    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <UserListItem user={item} />}
        />
    );
};

export default UserScreen;

const styles = StyleSheet.create({});
