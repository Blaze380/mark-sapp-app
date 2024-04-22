
import { ImageLogo, StatusBar, Text, View } from '@/components/Themed';
import { ReactElement, useEffect } from 'react';
import ScreenContainer from '@/components/screen_container/ScreenContainer';
import Styles from '@/constants/Styles';

import { useNavigation } from 'expo-router';
import LinkButton from '@/components/buttons/LinkButton';
import { Screens } from '@/constants/Screens';
import { AppScreenNavigationProp } from '../../types';
import { createUserDatabase } from '@/utils/DatabaseCreation';
import { createAppDirectory } from '@/utils/FileDirectory';

export default function WelcomeScreen (): ReactElement {
  const navigation: any = useNavigation<AppScreenNavigationProp>();
  //TODO change the navigation screen bellow to insert phone number

  return (
    <ScreenContainer>
      <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
        <ImageLogo style={{ width: 500, height: 500, resizeMode: "contain" }} />
        <Text style={Styles.title}>O MarkSapp dá-lhe as Boas vindas</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ textAlign: "center" }} >Deseja simplificar suas comunicações diárias? Experimente o MarkSapp, a solução perfeita para conectar-se instantaneamente com amigos, familiares e colegas.</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <LinkButton href='(chat)' text="continuar" />
      </View>


      <StatusBar />
    </ScreenContainer>
  );
}

