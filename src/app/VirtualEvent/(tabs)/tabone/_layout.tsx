import { Stack } from 'expo-router';

const TabOneLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{ headerShown: false, headerTitle: 'Agenda' }}
            />
            <Stack.Screen
                name='modal'
                options={{ presentation: 'modal', headerTitle: 'Modal' }}
            />
        </Stack>
    );
};

export default TabOneLayout;
