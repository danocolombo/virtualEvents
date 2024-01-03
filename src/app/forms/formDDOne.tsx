import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import CustomInput from '@/app/components/CustomInput';
import CustomButton from '@/app/components/CustomButton';
import { FontAwesome } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { useForm } from 'react-hook-form';
const data = [
    { key: '1', value: 'Jammu & Kashmir' },
    { key: '2', value: 'Gujrat' },
    { key: '3', value: 'Maharashtra' },
    { key: '4', value: 'Goa' },
];

const FormOneScreen = () => {
    const [selected, setSelected] = React.useState('');
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
                <Text style={styles.title}>
                    react-native-dropdown-select-list example
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.introContainer}>
                    <Text style={styles.medText}>
                        This dropdown feature comes from
                        www.npmjs.com/package/react-native-dropdown-select-list
                        it is highly configurable, but does have annoying
                        feature where it expands the view when the drop down is
                        selected.
                    </Text>
                </View>

                <View style={styles.inputRow}>
                    <View style={styles.inputContentRow}>
                        <SelectList
                            // onSelect={() => alert(selected)}
                            setSelected={setSelected}
                            fontFamily='roboto'
                            data={data}
                            arrowicon={
                                <View style={{ paddingHorizontal: 10 }}>
                                    <FontAwesome
                                        name='chevron-down'
                                        size={12}
                                        color={'black'}
                                    />
                                </View>
                            }
                            searchicon={
                                <View style={{ paddingHorizontal: 5 }}>
                                    <FontAwesome
                                        name='search'
                                        size={12}
                                        color={'black'}
                                    />
                                </View>
                            }
                            search={true}
                            boxStyles={{
                                borderRadius: 0,
                                backgroundColor: 'yellow',

                                paddingHorizontal: 10,
                            }} //override default styles
                            defaultOption={{
                                key: '1',
                                value: 'Jammu & Kashmir',
                            }} //default selected option
                        />
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
        fontSize: 24,
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
        alignItems: 'center',
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
