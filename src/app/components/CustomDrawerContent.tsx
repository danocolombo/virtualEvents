import { View, Text, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
//      ************************************
//      * This provides additional features
//      * in the drawer. In this basic
//      * example we add Quit to go to "/"
//      ************************************
export default function CustomDrawerContent(props: any) {
    const router = useRouter();
    const { top, bottom } = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
                contentContainerStyle={{
                    backgroundColor: '#dde3fe',
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <FontAwesome name='bank' size={45} color='black' />
                    <Text
                        style={{
                            fontFamily: 'robotoBoldItalic',
                            fontSize: 12,
                            paddingVertical: 5,
                            textAlign: 'center',
                        }}
                    >
                        Hardy University
                    </Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={'Quit'}
                    onPress={() => router.replace('/')}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    borderTopColor: '#dde3fe',
                    borderTopWidth: 1,
                    padding: 20,
                    paddingBottom: 20 + bottom,
                }}
            >
                <Image
                    source={{
                        uri: 'https://s3.amazonaws.com/fortson.guru/moolah/images/hardy.png',
                    }}
                    style={{
                        width: 150,
                        aspectRatio: 2 / 1,
                        alignSelf: 'center',
                    }}
                />
            </View>
        </View>
    );
}
