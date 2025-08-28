import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import TermosStyles from '../styles/TermosStyles';
import CustomHeader from '../components/CustomHeader';

const { width, height } = Dimensions.get('window');

export default function TermosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={TermosStyles.container}>
        <CustomHeader title="" showMenu={true} />
        
        {/* Título da página */}
        <View style={TermosStyles.newTitleContainer}>
          <View style={TermosStyles.blueBar} />
          <Text style={TermosStyles.pageTitle}>Termos de Uso do Senai Skill Up</Text>
        </View>

        {/* Conteúdo com scroll */}
        <ScrollView style={TermosStyles.content}>
          <Text style={TermosStyles.title}>1. Aceitação dos Termos</Text>
          <Text style={TermosStyles.paragraph}>
            Bem-vindo(a) ao Senai Skill Up. Estes termos de uso ("Termos") regem o acesso e a utilização da nossa plataforma web. Ao se cadastrar ou utilizar o Senai Skill Up, você concorda com estes termos na íntegra. Por favor, leia-os atentamente.
          </Text>
          <Text style={TermosStyles.title}>2. Privacidade e Proteção de Dados</Text>
          <Text style={TermosStyles.paragraph}>
            As informações e dados pessoais fornecidos por você ao se cadastrar e utilizar a plataforma são armazenados em nosso banco de dados de forma segura. Comprometemo-nos a não divulgar, compartilhar, vender ou alugar seus dados pessoais a terceiros sem o seu consentimento, exceto nos casos em que for exigido por lei.
          </Text>
          <Text style={TermosStyles.title}>3. Descrição da Plataforma</Text>
          <Text style={TermosStyles.paragraph}>
            O Senai Skill Up é uma plataforma de aprendizado interativo que oferece questionários e materiais sobre diversas matérias, criados por usuários específicos. A plataforma inclui um sistema de pontuação ("ranking") e um histórico de desempenho para cada usuário.
          </Text>
          <Text style={TermosStyles.title}>4. Cadastro e Acesso</Text>
          <Text style={TermosStyles.paragraph}>
            Para utilizar a plataforma, você deve se cadastrar fornecendo informações precisas e completas. Você é o único responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrerem em sua conta.
          </Text>
          <Text style={TermosStyles.title}>5. Conteúdo e Propriedade Intelectual</Text>
          <Text style={TermosStyles.paragraph}>
            Todo o conteúdo presente no aplicativo, incluindo questionários, textos, gráficos, imagens e o código-fonte, é de propriedade dos envolvidos neste projeto e é protegido por leis de direitos autorais. Você não pode copiar, reproduzir ou distribuir o conteúdo da plataforma sem o consentimento dos desenvolvedores.
          </Text>
          <Text style={TermosStyles.paragraph}>
            {/* Adicionando mais texto para garantir o scroll */}
            Bem-vindo(a) ao Senai Skill Up. Estes termos de uso ("Termos") regem o acesso e a utilização da nossa plataforma web. Ao se cadastrar ou utilizar o Senai Skill Up, você concorda com estes termos na íntegra. Por favor, leia-os atentamente.
            As informações e dados pessoais fornecidos por você ao se cadastrar e utilizar a plataforma são armazenados em nosso banco de dados de forma segura. Comprometemo-nos a não divulgar, compartilhar, vender ou alugar seus dados pessoais a terceiros sem o seu consentimento, exceto nos casos em que for exigido por lei.
            O Senai Skill Up é uma plataforma de aprendizado interativo que oferece questionários e materiais sobre diversas matérias, criados por usuários específicos. A plataforma inclui um sistema de pontuação ("ranking") e um histórico de desempenho para cada usuário.
            Para utilizar a plataforma, você deve se cadastrar fornecendo informações precisas e completas. Você é o único responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrerem em sua conta.
          </Text>
          <Text style={TermosStyles.title}>6. Uso do Perfil e Interação</Text>
          <Text style={TermosStyles.paragraph}>
            Ao utilizar a plataforma, você concorda que: (a) Você é responsável por todas as informações e conteúdos que postar ou enviar; (b) Você não irá postar conteúdo que seja ilegal, difamatório, ameaçador, obsceno, ou de qualquer outra forma questionável; (c) Você não irá tentar obter acesso não autorizado a qualquer parte da plataforma, ou a contas de outros usuários.
          </Text>
          <Text style={TermosStyles.title}>7. Limitação de Responsabilidade</Text>
          <Text style={TermosStyles.paragraph}>
            O aplicativo é fornecido "como está" e "conforme disponível", sem quaisquer garantias. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de uso do aplicativo.
          </Text>
          <Text style={TermosStyles.title}>8. Alterações nos Termos</Text>
          <Text style={TermosStyles.paragraph}>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. A continuação do uso do aplicativo após a publicação das alterações constitui sua aceitação dos novos termos.
          </Text>
        </ScrollView>
      </View>
    </>
  );
}
