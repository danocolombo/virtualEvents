import { View, Text, Button } from 'react-native';
import React from 'react';
import { Stack, useNavigation } from 'expo-router';

const ModalScreen = () => {
    const navigation = useNavigation();
    const isPresented = navigation.canGoBack();

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <Button
                            title='Close'
                            onPress={() => navigation.goBack()}
                            color={'#fff'}
                        />
                    ),
                }}
            />

            <Text style={{ fontSize: 20 }}>
                app/VirtualEvent/(tabs)/tabone/modal
            </Text>
        </View>
    );
};

export default ModalScreen;
