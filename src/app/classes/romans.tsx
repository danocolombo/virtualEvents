import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const ClassesScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View>
                <Text style={styles.title}>Romans Screen</Text>
                <Text style={styles.text}>Everyone falls short...</Text>
            </View>
        </SafeAreaView>
    );
};

export default ClassesScreen;

const styles = StyleSheet.create({
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
});
