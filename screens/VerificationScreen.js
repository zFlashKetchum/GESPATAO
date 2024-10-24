import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.png';

export default function VerificationScreen() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.header}>Código de verificação</Text>

        <View style={styles.codeContainer}>
          {verificationCode.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50, // Ajustando o título mais para o topo
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
    },
    header: {
      fontSize: 26, // Ajustado para um tamanho menor e mais sutil
      color: '#1a2e5c',
      fontWeight: 'bold',
      marginBottom: 40, // Maior espaço entre o título e os inputs
      textAlign: 'center', // Centralizado
      position: 'absolute', // Colocando o título no topo da tela
      top: 30,
    },
    codeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 30,
      marginTop: -200, // Ajuste para dar mais espaço entre o topo e os inputs
    },
    codeInput: {
      width: 50, // Aumentado para ficar mais quadrado e grande
      height: 60, // Altura maior para manter um estilo mais retangular
      backgroundColor: '#F0F0F0',
      borderRadius: 1,
      textAlign: 'center',
      fontSize: 22, // Aumentado o tamanho do texto dentro do input
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonContainer: {
      position: 'absolute', // Colocando o botão mais abaixo na tela
      bottom: 200, // Ajuste de posição para o botão ficar na parte azul
      width: '100%', // Garantir que o botão fique centralizado e ocupe a largura correta
      alignItems: 'center',
    },
    button: {
      width: '90%', // Ocupa quase toda a largura disponível, similar à imagem
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
  