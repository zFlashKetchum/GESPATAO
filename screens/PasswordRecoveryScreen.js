import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import backgroundImage from '../assets/background.png'; // Assuming you have the image in the correct path

export default function PasswordRecoveryScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        {/* Contêiner separado para o título */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Recuperar Senha</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="person" size={20} color="#555" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#555" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Código de acesso"
            placeholderTextColor="#888"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon name={passwordVisible ? "visibility-off" : "visibility"} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Contêiner para o botão */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Coloca o conteúdo no topo
    alignItems: 'center',
    paddingTop: 30, // Espaço no topo para o título
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%', // Ocupa toda a largura da tela
    alignItems: 'top', // Centraliza o título
    marginBottom: 100, // Espaço abaixo do título
  },
  header: {
    fontSize: 36,
    color: '#1a2e5c',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '80%', // Campos de input ocupando 80% da largura do contêiner
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  buttonContainer: {
    position: 'absolute', // Mantém o botão mais abaixo na tela
    bottom: 200, // Ajuste de posição para o botão
    width: '100%', // Garantir que o botão fique centralizado e ocupe a largura correta
    alignItems: 'center',
  },
  button: {
    width: '90%', // Ocupa quase toda a largura disponível
    padding: 15,
    backgroundColor: '#F4A400', // Mesmo laranja do botão anterior
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
