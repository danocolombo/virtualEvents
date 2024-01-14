import { Stack } from 'expo-router';

const TabTwoLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle: 'Tab 2' }} />
        </Stack>
    );
};

export default TabTwoLayout;
