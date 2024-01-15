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
            <Stack.Screen
                name='detailModal'
                options={{ presentation: 'modal', headerTitle: 'Details' }}
            />
            <Stack.Screen
                name='UserScreen'
                options={{ presentation: 'modal', headerTitle: 'Users Screen' }}
            />
        </Stack>
    );
};

export default TabOneLayout;
