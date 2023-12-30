import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const SubjectsScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View>
                <Text style={styles.title}>Subjects Screen</Text>
                <Text style={styles.text}>Checkout all our subjects!!!</Text>
            </View>
        </SafeAreaView>
    );
};

export default SubjectsScreen;

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
