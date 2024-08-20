import { styles } from './styles';


import { Text, View } from '@/components/Themed';

import { TextInput, TouchableOpacity } from 'react-native';

export function Home() {

  function handleParticipantAdd() {
    console.log("Voce clicou no botao de Adicionar!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento Full</Text>

      <Text style={styles.eventData}>
        Tuesday, August 20 of 2024.
      </Text>

      <View style={styles.form}>
        <TextInput style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          keyboardType='default'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    

    </View>
  );
}