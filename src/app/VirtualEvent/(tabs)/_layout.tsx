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
                    title: 'One',
                    tabBarLabel: 'Tab 1',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='list' size={24} color='black' />
                    ),
                }}
            />
            <Tabs.Screen
                name='tabtwo'
                options={{
                    title: 'Two',
                    tabBarLabel: 'Tab 2',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='calendar' size={24} color='black' />
                    ),
                }}
            />
        </Tabs>
    );
}
