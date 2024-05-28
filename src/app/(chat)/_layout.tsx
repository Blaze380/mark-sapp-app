import { Octicons } from '@expo/vector-icons';
import React, { ReactElement, useRef, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { ColorSchemeName, Modal, Pressable, StyleSheet, Vibration } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Screens } from '@/constants/Screens';
import { GestureHandlerRootView, Text, TouchableOpacity, View } from '@/components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import QuickConfigurationModal from '@/components/quick_configuration_modal/QuickConfigurationModal';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon (props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const quickSettings = useRef<BottomSheet>(null)
    return (
        <GestureHandlerRootView className='h-full w-full'>
            <Tabs screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].color, headerShown: useClientOnlyValue(false, true),
                tabBarStyle: { height: 55, borderRadius: 15, ...styles.tabBar },
                tabBarLabelStyle: { fontSize: 14 }, tabBarInactiveTintColor: colorScheme === "dark" ? 'grey' : "black"
            }}>
                <Tabs.Screen
                    name={Screens.PRIVATE_CHAT_SCREEN}
                    options={{
                        title: "Mensagens",
                        tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={`${ focused ? "message-text" : "message-text-outline" }`} size={30} color={color} />,
                        headerShown: false,

                    }}
                />
                <Tabs.Screen
                    name={Screens.GROUPS_CHAT_SCREEN}
                    options={{
                        title: "Grupos",
                        tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={`${ focused ? "account-group" : "account-group-outline" }`} size={30} color={color} />,
                        headerShown: false,

                    }}
                />
                <Tabs.Screen
                    name="Options" redirect={false}
                    options={{
                        title: "",
                        tabBarIcon: ({ }) => {
                            return (
                                <TouchableOpacity className='bg-transparent absolute -top-5' onPress={(): void => quickSettings.current?.expand()} >
                                    <MaterialCommunityIcons name="plus-circle" size={60} color={Colors[colorScheme ?? 'light'].color} />
                                </TouchableOpacity>)
                        },
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={Screens.STATUS}
                    options={{
                        title: 'Status',
                        tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={`${ focused ? "star-circle" : "star-circle-outline" }`} size={30} color={color} />,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={Screens.CALLS}
                    options={{
                        title: 'Chamadas',
                        tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={`${ focused ? "phone" : "phone-outline" }`} size={30} color={color} />,
                        headerShown: false,
                    }}
                />
            </Tabs>
            <BottomSheet index={0} snapPoints={['46%']} enableHandlePanningGesture enableOverDrag enablePanDownToClose ref={quickSettings} >
                <QuickConfigurationModal />
            </BottomSheet>
        </GestureHandlerRootView >
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    }
})
