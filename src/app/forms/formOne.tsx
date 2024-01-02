import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import CustomInput from '@/app/components/CustomInput';
import CustomButton from '@/app/components/CustomButton';
import { useForm } from 'react-hook-form';

const FormOneScreen = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: { username: '' },
    });
    const onSendPressed = () => {
        console.warn('PRESSED');
    };
    const onSignInPress = () => {
        console.warn('PRESSED');
    };
    return (
        <SafeAreaView style={styles.screen}>
            <Stack.Screen options={{ headerBackTitle: 'Back' }} />
            <View style={{ padding: 10 }}>
                <Text style={styles.title}>react-hook-form example</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.introContainer}>
                    <Text style={styles.medText}>
                        This is a sample of some controls
                    </Text>
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputContent}>
                        <Text>Simple Text Box</Text>
                        <CustomInput
                            name='username'
                            control={control}
                            placeholder='Enter text here'
                            rules={{
                                required: 'Username is required',
                            }}
                            secureTextEntry={false}
                        />
                        <Text style={styles.medText}>
                            This text box will expand to the width and then
                            scroll if the value is too long.
                        </Text>
                    </View>
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputContentRow}>
                        <View style={{ flex: 1 }}>
                            <CustomButton
                                text='Send'
                                onPress={handleSubmit(onSendPressed)}
                                type='GENERIC'
                                fgColor='white'
                                bgColor='blue'
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <CustomButton
                                text='Back to Sign in'
                                onPress={onSignInPress}
                                type='TERTIARY'
                                fgColor='white'
                                bgColor='green'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.introContainer}></View>
            </View>
        </SafeAreaView>
    );
};

export default FormOneScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
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
    formContainer: {
        // backgroundColor: 'red',
        flex: 1,
    },
    introContainer: {
        padding: 10,
    },
    inputRow: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
    },
    inputContent: {
        padding: 5,
    },
    inputContentRow: {
        flexDirection: 'row',
        flex: 1,
        gap: 10,
        padding: 10,
        // backgroundColor: 'orange',
    },
    medText: {
        fontFamily: 'roboto',
        fontSize: 18,
    },
});
