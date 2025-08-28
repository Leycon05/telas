import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Definindo constantes de cores para reutilização
const Cores = {
  primaria: '#00ABFF', 
  blueBar: '#1CB0FC',
  fundo: '#FFFFFF', 
  textoPrincipal: '#626361', 
  branco: '#FFFFFF',
  pageTitle: '#000000',
};

const TermosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  newTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
    marginBottom: height * 0.01,
    marginTop: 50
  },
  blueBar: {
    width: width * 0.02,
    height: height * 0.04,
    backgroundColor: Cores.blueBar,
    marginRight: width * 0.02,
    borderRadius: 71.87 
  },
  pageTitle: {
    fontSize: width * 0.05, 
    fontWeight: 'bold', 
    color: Cores.pageTitle,
  },
  content: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: Cores.textoPrincipal,
    marginTop: height * 0.02,
    marginBottom: height * 0.005,
  },
  paragraph: {
    fontSize: width * 0.04,
    color: Cores.textoPrincipal,
    lineHeight: height * 0.03,
    marginBottom: height * 0.015,
  },
});

export default TermosStyles;
