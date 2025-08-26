import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomHeader = ({ title, showMenu = false }) => {
  return (
    <View style={styles.header}>
      {showMenu && (
        <TouchableOpacity style={styles.menuButton}>
          {/* Ícone de menu (três barras brancas) */}
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
          <View style={styles.menuIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00A9FF', // Azul mais claro para o header
    height: 60, // Altura padrão de um header
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  menuIcon: {
    width: 25,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

export default CustomHeader;
