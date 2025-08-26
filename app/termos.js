import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function TermosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Termos de Uso do Senai Skill Up</Text>
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
          <Text style={styles.paragraph}>
            Ao acessar e usar o aplicativo Senai Skill Up, você concorda em cumprir e
            se comprometer com estes Termos de Uso.
          </Text>

          <Text style={styles.sectionTitle}>2. Uso do Serviço</Text>
          <Text style={styles.paragraph}>
            O aplicativo destina-se a fins educacionais e de aprimoramento profissional.
            O uso indevido, incluindo a violação de leis ou de direitos de terceiros, é proibido.
          </Text>

          <Text style={styles.sectionTitle}>3. Direitos de Propriedade Intelectual</Text>
          <Text style={styles.paragraph}>
            Todo o conteúdo presente no aplicativo, incluindo textos, imagens e logotipos,
            é de propriedade do Senai Skill Up ou de seus licenciadores, e está protegido por
            leis de direitos autorais.
          </Text>

          <Text style={styles.sectionTitle}>4. Limitação de Responsabilidade</Text>
          <Text style={styles.paragraph}>
            O aplicativo é fornecido "no estado em que se encontra". Não garantimos que o
            serviço será ininterrupto ou livre de erros.
          </Text>

          <Text style={styles.sectionTitle}>5. Modificações dos Termos</Text>
          <Text style={styles.paragraph}>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As
            alterações serão comunicadas no aplicativo.
          </Text>

          <Text style={styles.sectionTitle}>6. Lei Aplicável</Text>
          <Text style={styles.paragraph}>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e8e8e8' },
  header: { backgroundColor: '#007BFF', height: 100, justifyContent: 'flex-end', padding: 20 },
  headerText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  content: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  paragraph: { fontSize: 14, lineHeight: 22, color: '#555', marginBottom: 10 },
});