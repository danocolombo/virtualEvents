import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    Ionicons,
    FontAwesome,
    Octicons,
    FontAwesome5,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import CustomDrawerContent from '@/app/components/CustomDrawerContent';
//      ************************************
//      * This users the custom drawer component
//      * that provides a feature in the
//      * drawer for all screen.
//      ************************************
const ClassesLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    drawerHideStatusBarOnOpen: true,
                    drawerActiveBackgroundColor: '#5363df',
                    drawerActiveTintColor: '#ffffff',
                    drawerLabelStyle: {
                        marginLeft: -20,
                        fontFamily: 'roboto',
                    },
                }}
            >
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Administration',
                        headerTitle: '',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons
                                name='md-school'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='exodus'
                    options={{
                        drawerLabel: 'Exodus',
                        headerTitle: 'Exodus',
                        drawerIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name='walk'
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name='romans'
                    options={{
                        drawerLabel: 'Romans',
                        headerTitle: 'Romans',
                        drawerIcon: ({ color, size }) => (
                            <Octicons name='law' size={size} color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
};

export default ClassesLayout;
