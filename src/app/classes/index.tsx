import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
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
                <Image
                    source={{
                        uri: 'https://s3.amazonaws.com/fortson.guru/moolah/images/hardy-h-1.png',
                    }}
                    style={{ width: 100, height: 100, alignSelf: 'center' }}
                />
                <Text style={styles.title}>University</Text>
                <Text style={styles.text}>Never stop learning</Text>
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
