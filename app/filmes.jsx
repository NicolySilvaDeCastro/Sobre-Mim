import { View, Text, Image, StyleSheet } from 'react-native';

export default function Filmes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes que Assisti:</Text>

      <View style={styles.filmes}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.blpAKCFf6k6XNq3mW29oGQHaEK?rs=1&pid=ImgDetMain' }} 
          style={styles.image}
        />
        <Text style={styles.sutitulo}>As Quatro Vidas de um Cachorro</Text>
        <Text style={styles.ano}>2016</Text>
      </View>

      <View style={styles.filmes}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/R.6d3a09cb36e8d30da26c0e8d556f7fd5?rik=EmIrlefqVqVUiA&pid=ImgRaw&r=0' }} 
          style={styles.image}
        />
        <Text style={styles.sutitulo}>Marley & Eu</Text>
        <Text style={styles.ano}>2009</Text>
      </View>

      <View style={styles.filmes}>
        <Image
          source={{ uri: 'https://aws1.vdkimg.com/film/1/7/1/1/171159_backdrop_scale_1280xauto.jpg' }} 
          style={styles.image}
        />
        <Text style={styles.sutitulo}>Space Buddies</Text>
        <Text style={styles.ano}>2009</Text>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sutitulo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ano: {
    fontSize: 15,
    color: 'gray'
  },
  filmes: {
    color: 'black',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderStyle: 'groove',
    padding: 10,

    },
  image: {
    width: 250, 
    height: 100, 
    borderRadius: 15,
    objectFit: 'cover'
  },
});
