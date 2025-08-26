// app/index.js
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Senai Skill Up!</Text>
      <Link href="/contato" style={styles.link}>Fale Conosco</Link>
      <Link href="/suporte" style={styles.link}>Suporte</Link>
      <Link href="/termos" style={styles.link}>Termos de Uso</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  link: { fontSize: 18, color: '#007BFF', marginVertical: 10 },
});