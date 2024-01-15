import { Stack } from 'expo-router';

const TabOneLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{ headerShown: false, headerTitle: 'Tab 1' }}
            />
            <Stack.Screen
                name='modal'
                options={{ presentation: 'modal', headerTitle: 'Modal' }}
            />
        </Stack>
    );
};

export default TabOneLayout;
