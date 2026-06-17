import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../styles/theme';

export default function NosotrosScreen() {
  const integrantes = [1, 2, 3, 4]; // Cuatro bloques según el diseño

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {integrantes.map((id) => (
          <View key={id} style={styles.row}>
            <Text style={styles.text}>
              Aquí se hablara de nosotros como equipo y en que se encargo cada uno, junto a su pequeña bibliografia y una foto de el
            </Text>
            
            {/* Espacio para la foto */}
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarX}>X</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco },
  scroll: { padding: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#000', padding: 12, marginBottom: 15, backgroundColor: COLORS.grisClaro, borderRadius: 6 },
  text: { flex: 1, fontSize: 13, color: '#000', marginRight: 12, lineHeight: 18 },
  avatarPlaceholder: { width: 75, height: 75, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000' },
  avatarX: { fontSize: 24, fontWeight: 'bold', color: '#555' }
});