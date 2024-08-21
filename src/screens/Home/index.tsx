import { styles } from './styles';

import { Text, View } from '@/components/Themed';
import { TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { Participant } from '@/src/components/Participant';

export function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'joao', 'luiza' ]; 

  function handleParticipantAdd() {
    console.log("Voce clicou no botao de Adicionar!")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou para remover o participante ${name}!`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Rodrigo")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda ? Adivione participantes a sua lista de presenca.
          </Text>
        )}
      />

 

      
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant} 
              name="Rodrigo" 
              onRemove={() => handleParticipantRemove("Rodrigo")}
            /> 
          ))
        }
      </ScrollView> */}

    

    </View>
  );
}