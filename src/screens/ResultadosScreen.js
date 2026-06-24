import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { COLORS } from '../styles/theme';

export default function ResultadosScreen({ route }) {
  // Convertimos tu arreglo en una variable de "estado" para poder agregarle más cosas
  const [historial, setHistorial] = useState([
    { id: '1', color: 'Color Rojo', nivel: 'Nivel: 3', fecha: '15/05/2026 a las 14:30', hex: COLORS.magenta }
  ]);

  // Esto "escucha" cada vez que llegamos a esta pantalla desde el Cuestionario
  useEffect(() => {
    if (route.params?.nuevoNivel && route.params?.timestamp) {
      const nivel = route.params.nuevoNivel;

      // Dependiendo del nivel (1 al 18), le asignamos un texto y un color para tu tarjeta
      let nombreColor = 'Alerta Temprana';
      let colorHex = '#FFB703'; // Amarillo

      if (nivel >= 7 && nivel <= 12) {
        nombreColor = 'Abuso Evidente';
        colorHex = '#E85D04'; // Naranja
      } else if (nivel >= 13) {
        nombreColor = 'Peligro Inminente';
        colorHex = '#9D0208'; // Rojo oscuro
      }

      // Creamos la nueva tarjeta de resultado
      const nuevoRegistro = {
        id: route.params.timestamp.toString(), // ID único basado en la hora
        color: nombreColor,
        nivel: `Nivel: ${nivel}`,
        // Obtenemos la fecha y hora actual automáticamente
        fecha: new Date().toLocaleDateString('es-CL') + ' a las ' + new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }),
        hex: colorHex
      };

      // Agregamos el nuevo resultado al inicio de la lista
      setHistorial(historialPrevio => [nuevoRegistro, ...historialPrevio]);
    }
  }, [route.params?.timestamp]); // Reacciona cada vez que el "timestamp" cambia

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Aquí se mostraran los resultados aproximados de ámbito de la gravedad pero no sera exactamente lo que es, tendrás que ir a ver el Violentómetro para ver cual es el problema
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