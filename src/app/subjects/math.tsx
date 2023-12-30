import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const MathScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View>
                <Text style={styles.title}>Math Screen</Text>
                <Text style={styles.text}>It all adds up...</Text>
            </View>
        </SafeAreaView>
    );
};

export default MathScreen;

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
