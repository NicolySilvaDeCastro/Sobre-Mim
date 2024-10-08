import { View, Text, Image, StyleSheet } from 'react-native';

export default function Viagens() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Viagens</Text>

      <View style={styles.local}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.vTCCJtx0UYvtfNgHN9D3hgHaEg?rs=1&pid=ImgDetMain' }} 
          style={styles.image} 
        />
        <Text style={styles.sutitulo}>Distrito Federal</Text>
        <Text style={styles.ano}>2024</Text>
      </View>

      <View style={styles.local}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.nSEtS5VhlJIjhpCYC53f6gHaE8?rs=1&pid=ImgDetMain' }} // URL da imagem
          style={styles.image}
        />
        <Text style={styles.sutitulo}> Rio de Janeiro</Text>
        <Text style={styles.ano}>2023</Text>
      </View>

      <View style={styles.local}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.37N-ZISy22ZtI4lRZwNWkQHaE8?rs=1&pid=ImgDetMain' }} // URL da imagem
          style={styles.image} 
        />
        <Text style={styles.sutitulo}>São Paulo</Text>
        <Text style={styles.ano}>2018</Text>
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
  local: {
    color: 'black',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'lightgray',
    borderStyle: 'groove',
    padding: 10,

    },
  image: {
    width: 250, // Defina a largura da imagem
    height: 100, // Defina a altura da imagem
    borderRadius: 15,
  },
});
