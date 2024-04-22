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
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon (props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);
    const quickSettings = useRef<BottomSheet>(null)
    return (
        <GestureHandlerRootView className='h-full w-full'>
            <Tabs screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].color, headerShown: useClientOnlyValue(false, true),
                tabBarStyle: { height: 75, borderRadius: 15, ...styles.tabBar },
                tabBarLabelStyle: { fontSize: 16 }, tabBarInactiveTintColor: colorScheme === "dark" ? 'grey' : "black"
            }}>
                <Tabs.Screen
                    name={Screens.PRIVATE_CHAT_SCREEN}
                    options={{
                        title: "Mensagens",
                        tabBarIcon: ({ color, focused }) => focused ? <MaterialCommunityIcons name="message-text" size={35} color={color} /> : <MaterialCommunityIcons name="message-text-outline" size={35} color={color} />,
                        headerShown: false,

                    }}
                />
                <Tabs.Screen
                    name={Screens.GROUP_CHAT_SCREEN}
                    options={{
                        title: "Grupos",
                        tabBarIcon: ({ color, focused }) => focused ? <MaterialCommunityIcons name="group" size={35} color={color} /> : <MaterialCommunityIcons name="message-text-outline" size={35} color={color} />,
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
                                    <MaterialCommunityIcons name="plus-circle" size={80} color={Colors[colorScheme ?? 'light'].color} />
                                </TouchableOpacity>)
                        },
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={Screens.STATUS}
                    options={{
                        title: 'Status',
                        tabBarIcon: ({ color, focused }) => focused ? <MaterialCommunityIcons name="star-circle" size={35} color={color} /> : <MaterialCommunityIcons name="star-circle-outline" size={35} color={color} />,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={Screens.CALLS}
                    options={{
                        title: 'Chamadas',
                        tabBarIcon: ({ color, focused }) => focused ? <MaterialCommunityIcons name="phone" size={35} color={color} /> : <MaterialCommunityIcons name="phone-outline" size={35} color={color} />,
                        headerShown: false,
                    }}
                />
            </Tabs>
            <BottomSheet index={0} snapPoints={['46%']} enableHandlePanningGesture enableOverDrag enablePanDownToClose ref={quickSettings} >
                <View className='flex items-center justify-center' style={{ backgroundColor: Colors[colorScheme ?? 'light'].bottomSheetBackground }}>
                    <View className='flex items-center justify-start h-20 -ml-32 flex-row space-x-3 bg-transparent' >
                        <Text className='text-2xl font-bold'>Configurações Rápidas</Text>
                    </View>
                    <View className='border-b-2 w-11/12 mb-10' style={{ borderBottomColor: Colors[colorScheme ?? 'light'].buttonText }} />
                    <ScrollView className='w-full h-full space-y-3'>
                        <View className='flex items-center justify-between flex-row bg-transparent'>
                            <View className=' ml-5 flex items-center justify-start flex-row space-x-5 bg-transparent'>
                                <MaterialCommunityIcons name="brightness-7" size={40} color={Colors[colorScheme ?? 'light'].color} />
                                <Text className='text-xl font-semibold'>Modo escuro</Text>
                            </View>
                            <Switch className='mr-10' value={enableDarkMode} thumbColor={enableDarkMode ? Colors.light.buttonBackground : '#f4f3f4'} trackColor={{ false: '#767577', true: Colors.light.buttonBackground }} onValueChange={(): void => setEnableDarkMode(!enableDarkMode)}></Switch>
                        </View>
                        <TouchableOpacity className=' ml-5 flex items-center justify-start flex-row space-x-5 bg-transparent'>
                            <MaterialCommunityIcons name="chat-plus-outline" size={40} color={Colors[colorScheme ?? 'light'].color} />
                            <Text className='text-xl font-semibold'>Nova Conversa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=' ml-5 flex items-center justify-start flex-row space-x-5 bg-transparent'>
                            <Octicons name="gear" size={40} color={Colors[colorScheme ?? 'light'].color} />
                            <Text className='text-xl font-semibold'>Configurações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className=' ml-5 flex items-center justify-start flex-row space-x-5 bg-transparent'>
                            <MaterialCommunityIcons name="contacts-outline" size={40} color={Colors[colorScheme ?? 'light'].color} />
                            <Text className='text-xl font-semibold'>Adicionar contacto</Text>
                        </TouchableOpacity>
                        {/* <Switch className='bg-white ' value={enableDarkMode} thumbColor={enableDarkMode ? '#f5dd4b' : '#f4f3f4'} trackColor={{ false: '#767577', true: '#81b0ff' }} onValueChange={(): void => setEnableDarkMode(!enableDarkMode)}></Switch> */}
                    </ScrollView>
                </View>
            </BottomSheet>
        </GestureHandlerRootView >
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    }
})
