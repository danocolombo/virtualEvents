import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const HistoryScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View>
                <Text style={styles.title}>History Screen</Text>
                <Text style={styles.text}>Nothing new...</Text>
            </View>
        </SafeAreaView>
    );
};

export default HistoryScreen;

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
