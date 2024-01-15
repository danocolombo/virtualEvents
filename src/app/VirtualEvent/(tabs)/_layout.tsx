import { Tabs, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
export default function TabsLayout() {
    const p = useLocalSearchParams();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                // tabBarActiveBackgroundColor: 'cyan',
                // tabBarInactiveBackgroundColor: 'cyan',
            }}
        >
            <Tabs.Screen
                name='tabone'
                options={{
                    headerShown: false,
                    title: 'Events',
                    tabBarLabel: 'Events',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='calendar' size={24} color='black' />
                    ),
                }}
            />
            <Tabs.Screen
                name='tabtwo'
                options={{
                    title: 'Profile',
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='user' size={24} color='black' />
                    ),
                }}
            />
        </Tabs>
    );
}
