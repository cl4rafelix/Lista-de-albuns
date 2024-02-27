import { SafeAreaView, Text, StyleSheet } from 'react-native'
import {Lista} from './components/componentes.js'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Albuns da Banda Oficina G3</Text>
      <Lista
      albumName={'Indiferença'}
      year={'(1996)'}
      musics={['1. Davi,', '2. Fé,', '3. Magia Alguma,', '4. Glória,', '5. Profecias']}
      />
      <Lista
      albumName={'Além do os olhos podem ver'}
      year={'(2004)'}
      musics={['1. Intro,', '2. Mais Alto,', '3. Reu ou Juiz,', '4. Meu Legado,', '5. Através da Porta']}
      />
      <Lista
      albumName={'Depois da guerra'}
      year={'(2008)'}
      musics={['1. D.AG,', '2. Meus Próprios Meios,', '3. Eu Sou,', '4. Meus Passos,', '5. Continuar']}
      />

    </SafeAreaView>
  ) 
}
const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '700'
  }
})
