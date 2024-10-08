import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
    <ImageBackground style={styles.container}
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/995/698/large_2x/aesthetic-minimal-office-workspace-interior-design-illustration-ai-generative-free-photo.jpg' }} 
    >
      <View style={styles.textos}>
      <Text style={styles.title}>Sobre Mim</Text>

      <Text style={styles.descricao}>
      Olá! Meu nome é Nicoly, sou estudante do terceiro ano no Ensino Médio 
      Técnico em Análise e Desenvolvimento de Sistemas do SESI SENAI.
      </Text>
      <Text style={styles.descricao2}>
      Aqui estão algumas informações sobre mim:
      </Text>
      </View>
      <View style={styles.botoes}>
      <Link href="/filmes">
        <Button style={styles.botao} title="Meus Filmes" />
      </Link>
      <Link href="/viagens">
        <Button style={styles.botao} title="Minhas Viagens" />
      </Link>
      <Link href="/camera">
        <Button style={styles.botao} title="Minha Câmera" />
      </Link>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  textos: {
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  descricao: {
    textAlign: 'center',
    width: 300,
    color: 'white'
  },
  descricao2: {
    textAlign: 'center',
    width: 300,
    fontWeight: 'bold',
    color: 'white'
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  botoes: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10
  }
});
