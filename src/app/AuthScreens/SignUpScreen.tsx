import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    Pressable,
} from 'react-native';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import { Link } from 'expo-router';
import SocialSignInButtons from '@components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = async (data) => {
        const { name, email, password } = data;
        try {
            <Link href={'SignInScreen'} asChild>
                <Pressable>
                    <View>
                        <Text>Signin</Text>
                    </View>
                </Pressable>
            </Link>;
        } catch (e) {
            Alert.alert('Oops', (e as Error).message);
        }
    };

    const onSignInPress = () => {
        console.warn('OUCH');
        //navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    name='name'
                    control={control}
                    placeholder='Name'
                    rules={{
                        required: 'Name is required',
                        minLength: {
                            value: 3,
                            message:
                                'Name should be at least 3 characters long',
                        },
                        maxLength: {
                            value: 24,
                            message: 'Name should be max 24 characters long',
                        },
                    }}
                    secureTextEntry={undefined}
                />

                <CustomInput
                    name='email'
                    control={control}
                    placeholder='Email'
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid',
                        },
                    }}
                    secureTextEntry={undefined}
                />
                <CustomInput
                    name='password'
                    control={control}
                    placeholder='Password'
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message:
                                'Password should be at least 8 characters long',
                        },
                    }}
                />
                <CustomInput
                    name='password-repeat'
                    control={control}
                    placeholder='Repeat Password'
                    secureTextEntry
                    rules={{
                        validate: (value) =>
                            value === pwd || 'Password do not match',
                    }}
                />

                <CustomButton
                    text='Register'
                    onPress={handleSubmit(onRegisterPressed)}
                    type={''}
                    bgColor={''}
                    fgColor={''}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <SocialSignInButtons />

                <CustomButton
                    text='Have an account? Sign in'
                    onPress={onSignInPress}
                    type='TERTIARY'
                    bgColor={''}
                    fgColor={''}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default SignUpScreen;
