
import { ImageLogo, StatusBar, Text, View } from '@/components/Themed';
import { ReactElement } from 'react';
import ScreenContainer from '@/components/screen_container/ScreenContainer'

import { Href, Link, LinkProps, router, useNavigation } from 'expo-router';
import LinkButton from '@/components/buttons/LinkButton';
import { Screens } from '@/constants/Screens';
import { AppScreenNavigationProp } from '../../types';
import { testDatabase } from '@/utils/test';

export default function WelcomeScreen (): ReactElement {
  const navigation: any = useNavigation<AppScreenNavigationProp>();
  //TODO change the navigation screen bellow to insert phone number
  //testDatabase();


  return (
    <ScreenContainer>
      <View className='flex-[4] items-center justify-center' >
        <ImageLogo className='w-[400] h-[400] resize-[contain] ' />
        <Text className='text-[20px] font-bold'>O MarkSapp dá-lhe as Boas vindas</Text>
        <View className='items-center justify-center'>
          <Text className='text-center' >Deseja simplificar suas comunicações diárias? Experimente o MarkSapp, a solução perfeita para conectar-se instantaneamente com amigos, familiares e colegas.</Text>
        </View>
      </View>
      <View className='flex-[1]'>
        <LinkButton href={`/main_tab/private_chats_tab/PrivateChatScreen`} text="continuar" />
      </View>

      <StatusBar />
    </ScreenContainer>
  );
}

