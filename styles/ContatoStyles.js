import { StyleSheet } from 'react-native';


// Definindo constantes de cores para reutilização
const Cores = {
  primaria: '#00ABFF', 
  blueBar: '#1CB0FC',
  fundo: '#FFFFFF', 
  textoPrincipal: '#626361', 
  textoInput: '#ABABAB', 
  bordaInput: '#CACACA', 
  branco: '#FFFFFF',
  pageTitle: '#000000',
};
const ContatoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  newTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
    marginTop: 50,
  },
  blueBar: {
    width: 7.86,
    height: 23.6, // Altura da barra
    backgroundColor: Cores.blueBar,
    marginRight: 10,// Espaço entre a barra e o texto
   borderRadius: 71.87 
  },
  pageTitle: {
    fontSize: 20, 
    fontWeight: 'Poppins',
    color: Cores.pageTitle,
  },

  // Estilo do conteúdo principal com padding
  content: {
    padding: 20,
  },

  // Estilos de texto
  label: {
    fontSize: 13.37,
    fontWeight: 'Poppins',
    color: Cores.textoPrincipal,
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },

  // Estilos dos campos de input
  input: {
    backgroundColor: Cores.branco,
    width: 316.5,
    height: 29.88,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Cores.bordaInput,
    textAlignVertical: 'top',
    color: Cores.textoInput,
  },
  textArea: {
    backgroundColor: Cores.branco,
    width: 316.5, 
    height: 132.31,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: Cores.bordaInput,
    color: Cores.textoInput,
    fontSize: 11.8,
  },

  // Estilos do botão
  button: {
    backgroundColor: Cores.primaria,
    width: 110.49,
    height: 33.93,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: Cores.branco,
    fontSize: 16,
    fontWeight: 'Blinker',
   contenttAlign: 'center',
   paddingTop: 5

  },
});

export default ContatoStyles;