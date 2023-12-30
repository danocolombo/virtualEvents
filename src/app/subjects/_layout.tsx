import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    Ionicons,
    FontAwesome,
    Octicons,
    FontAwesome5,
} from '@expo/vector-icons';

const SubjectsLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Home',
                        headerTitle: 'SUBJECTS',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name='home' size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='history'
                    options={{
                        drawerLabel: 'History',
                        headerTitle: 'History',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome
                                name='history'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='math'
                    options={{
                        drawerLabel: 'Math',
                        headerTitle: 'Math',
                        drawerIcon: ({ color, size }) => (
                            <Octicons name='number' size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='science'
                    options={{
                        drawerLabel: 'Science',
                        headerTitle: 'Science',
                        drawerIcon: ({ color, size }) => (
                            <FontAwesome5
                                name='microscope'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default SubjectsLayout;
