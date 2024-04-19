
import  {ImageLogo, StatusBar, Text, View } from '@/components/Themed';
import { ReactElement } from 'react';
import ScreenContainer from '@/components/screen_container/ScreenContainer';
import Styles from '@/constants/Styles';
import { ExternalLink } from '@/components/ExternalLink';
import LinkText from '@/components/text/LinkText';
import Button from '@/components/buttons/Button';
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import LinkButton from '@/components/buttons/LinkButton';

export default function WelcomeScreen():ReactElement {
  const navigation = useNavigation();

  function goToVerifyPhoneNumber (): void{
    console.log("first")
    //navigation.navigate({name:"(auth)/insert-number"});
  }

  return (
    <ScreenContainer>
      <View style={{flex:5,alignItems:"center",justifyContent:"center"}}>
        <ImageLogo style={ {width:500,height:500,resizeMode:"contain"}} />
        <Text style={Styles.title}>O MarkSapp dá-lhe as Boas vindas</Text>
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={{ textAlign: "center" }} >Deseja simplificar suas comunicações diárias? Experimente o MarkSapp, a solução perfeita para conectar-se instantaneamente com amigos, familiares e colegas.</Text>
        </View>
      </View>
        <View style={{flex:1}}>
          <LinkButton href='(auth)/insert-phone-number' text="continuar"/>
        </View>


      <StatusBar />
    </ScreenContainer>
  );
}

