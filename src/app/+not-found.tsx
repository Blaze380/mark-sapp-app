import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function NotFoundScreen () {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 items-center justify-center p-5'>
        <Text className='text-xl font-bold'>Esta Tela não existe!</Text>
        <Link href="/" className='mt-4 pt-4 pb-4'>
          <Text className='text-[#2e78b7] text-[14px]'>Voltar ao início</Text>
        </Link>
      </View>
    </>
  );
}