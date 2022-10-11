import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {

  /*
    carregamento de fontes baixadas: chave e caminho
    carregamento de fontes por pacote: nome da fonte importada
  */

  let [fontsLoaded] = useFonts({
    'GemunuLibre-Bold': require('./assets/fonts/GemunuLibre-Bold.ttf'),
    Inter_900Black,
    Inter_500Medium
  })

  /* 
    Aqui é possível fazer um teste condicional para apresentar o app
    apenas quando todas as fontes estiverem carregadas, este processo
    normalmente é rápido
  */
  if(!fontsLoaded){
    return (
      <View style={styles.container}>
        <Text>Carregando fontes ...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <Text style={styles.textBold}>Sua fonte personalizada aqui</Text>
        <Text style={styles.textMediumInter}>Sua fonte personalizada aqui</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontFamily: 'GemunuLibre-Bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#1e293b'
  },
  textBoldInter: {
    fontFamily: 'Inter_900Black',
    fontSize: 24,
    textAlign: 'center',
    color: '#475569'
  },
  textMediumInter: {
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    textAlign: 'center',
    color: '#475569'
  }
});
