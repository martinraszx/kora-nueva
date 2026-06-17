import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../styles/theme';

export default function KoraScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>
          Aquí se hablara de la App junto a lo que se busca y los resultados esperados o que se puedan mejorar de cada uno como persona
        </Text>
        
        {/* Recuadro de imagen con la X del boceto */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderX}>X</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco, padding: 20 },
  card: { borderWidth: 1, borderColor: '#000', padding: 20, flex: 1, backgroundColor: COLORS.grisClaro, borderRadius: 8 },
  text: { fontSize: 16, color: '#000', lineHeight: 24, textAlign: 'left' },
  imagePlaceholder: { width: 140, height: 140, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000', alignSelf: 'center', marginTop: 60 },
  placeholderX: { fontSize: 45, fontWeight: 'bold', color: '#555' }
});