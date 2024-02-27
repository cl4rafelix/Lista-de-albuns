import { View, Text, StyleSheet } from 'react-native'
export function Lista({ albumName, year , musics }) {
  return (
    <View> 
      <Text style={styles.nomeAlbum}>{albumName} {year}</Text>
      <Text style={styles.musicas}>{musics.join('\n')}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  nomeAlbum: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  musicas: {
    marginLeft: 10
  }
})