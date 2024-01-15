import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    Pressable,
} from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';
import Logo2 from './logo.png';
import Logo from '@images/logo.png';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';
import SocialSignInButtons from '@components/SocialSignInButtons';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSignInPressed = async (data) => {
        if (loading) {
            return;
        }

        setLoading(true);

        // Sign in

        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        // navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        console.log('yep');
        router.replace('./SignUpScreen');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='cover' />
            <View style={styles.container}>
                <CustomInput
                    name='email'
                    placeholder='Email'
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid',
                        },
                    }}
                    secureTextEntry={false}
                />

                <CustomInput
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message:
                                'Password should be minimum 3 characters long',
                        },
                    }}
                />

                <CustomButton
                    text={loading ? 'Loading...' : 'Sign In'}
                    onPress={handleSubmit(onSignInPressed)}
                    type={''}
                    bgColor={''}
                    fgColor={''}
                />

                <CustomButton
                    text='Forgot password?'
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                    bgColor={''}
                    fgColor={''}
                />

                <SocialSignInButtons />
                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
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
        backgroundColor: 'white',
        minHeight: '100%',
    },
    container: {
        padding: 20,
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
    },
});

export default SignInScreen;
