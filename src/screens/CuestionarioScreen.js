import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/theme';

export default function CuestionarioScreen() {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Aquí estarán las preguntas que se mostraran en orden para que el usuario las pueda responder</Text>
        </View>

        <Text style={styles.subtitle}>Selecciona con cuántas estrellas te sientes más cómodo con respecto a esta situación</Text>

        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons 
                name={star <= rating ? "star" : "star-outline"} 
                size={45} 
                color={star <= rating ? COLORS.verdeBrillante : COLORS.morado} 
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.navButtonsRow}>
          <TouchableOpacity><Text style={styles.navText}>Pregunta anterior</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navText}>Siguiente pregunta</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco },
  scroll: { padding: 20, alignItems: 'center' },
  infoBox: { backgroundColor: COLORS.celeste, padding: 15, borderRadius: 8, width: '100%', marginBottom: 30 },
  infoText: { textAlign: 'center', fontSize: 16, color: COLORS.magenta, fontWeight: '600' },
  subtitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: COLORS.morado, marginBottom: 20 },
  starsContainer: { flexDirection: 'row', marginVertical: 30 },
  navButtonsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
  navText: { color: COLORS.magenta, fontWeight: 'bold', textDecorationLine: 'underline' }
});