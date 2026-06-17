import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { COLORS } from '../styles/theme';

export default function ResultadosScreen() {
  const historial = [
    { id: '1', color: 'Color Rojo', nivel: 'Nivel: 3', fecha: '15/05/2026 a las 14:30', hex: COLORS.magenta }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Aquí estará el resultado semanal del violentómetro en el tiempo transcurrido desde la instalación de Kora o su primer uso
        </Text>
      </View>

      <FlatList
        data={historial}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { borderLeftColor: item.hex }]}>
            <View>
              <Text style={[styles.cardTitle, { color: item.hex }]}>{item.color}</Text>
              <Text style={styles.cardLevel}>{item.nivel}</Text>
            </View>
            <Text style={styles.cardDate}>{item.fecha}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco, padding: 20 },
  infoBox: { backgroundColor: COLORS.celeste, padding: 15, borderRadius: 8, marginBottom: 20 },
  infoText: { textAlign: 'center', color: COLORS.magenta, fontWeight: 'bold' },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.grisClaro, padding: 20, borderRadius: 8, borderLeftWidth: 6, marginBottom: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardLevel: { fontSize: 16, color: COLORS.morado },
  cardDate: { fontSize: 12, color: '#666' }
});