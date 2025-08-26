import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function SuporteScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [verificacao, setVerificacao] = useState('');

  const handleEnviar = () => {
    if (!nome || !email || !verificacao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', 'Sua solicitação de suporte foi enviada!');
    setNome('');
    setEmail('');
    setVerificacao('');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Suporte</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>
            Nosso suporte tem o prazer de conversar com você. Envie uma mensagem para a nossa equipe.
          </Text>
          <Text style={styles.inputLabel}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={styles.inputLabel}>Verificação:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Fale um pouco sobre o problema"
            value={verificacao}
            onChangeText={setVerificacao}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Já tem uma conta?</Text>
          <Link href="/login" style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e8e8e8' },
  header: { backgroundColor: '#007BFF', height: 100, justifyContent: 'flex-end', padding: 20 },
  headerText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  content: { padding: 20 },
  label: { fontSize: 16, color: '#555', marginBottom: 15 },
  inputLabel: { fontSize: 14, color: '#888', marginBottom: 5 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 15, borderWidth: 1, borderColor: '#ccc' },
  textArea: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 15, height: 100, textAlignVertical: 'top', borderWidth: 1, borderColor: '#ccc' },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  loginText: { textAlign: 'center', marginTop: 20, color: '#888' },
  loginButton: { width: '100%', alignItems: 'center' },
  loginButtonText: { color: '#888', fontWeight: 'bold', marginTop: 5, fontSize: 16 },
});