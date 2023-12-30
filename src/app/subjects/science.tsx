import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const ScienceScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View>
                <Text style={styles.title}>Science Screen</Text>
                <Text style={styles.text}>Something to think about...</Text>
            </View>
        </SafeAreaView>
    );
};

export default ScienceScreen;

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
