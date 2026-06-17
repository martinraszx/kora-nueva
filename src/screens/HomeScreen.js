import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { COLORS } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>

        {/* SECCIÓN 1: Logo Dinámico (Crece hasta donde puede sin aplastar lo demás) */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo-horizontal.png')} 
            style={styles.logoImage} 
            resizeMode="contain"
          />
        </View>

        {/* SECCIÓN 2: Botones Principales (Siempre visibles) */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.mainButton} 
            onPress={() => navigation.navigate('Cuestionario')}>
            <Text style={styles.mainButtonText}>Mi termómetro{"\n"}Relacional</Text>
          </TouchableOpacity>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Resultados')}>
              <Text style={styles.gridText}>Resumen{"\n"}de resultados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridButton} onPress={() => navigation.navigate('Semaforo')}>
              <Text style={styles.gridText}>Violentómetro y{"\n"}sus niveles</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECCIÓN 3: Footer (Anclado siempre al fondo) */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Kora')}>
            <Text style={styles.footerLink}>Kora</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Nosotros')}>
            <Text style={styles.footerLink}>¿Quienes Somos?</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blanco },
  
  mainWrapper: { 
    flex: 1, 
    padding: 20, // Márgenes físicos a los lados (1 a 2 cm)
    justifyContent: 'space-between', // Distribuye las 3 secciones equitativamente
  },
  
  logoContainer: { 
    flex: 1, // Le dice al logo: "Toma todo el espacio sobrante que encuentres arriba"
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    marginBottom: 20,
    marginTop: 10,
  },
  
  logoImage: { 
    width: '100%', 
    height: '100%', // Se adapta perfectamente a la altura de su contenedor sin deformarse
  },

  buttonsContainer: {
    width: '100%',
    marginBottom: 30, // Mantiene la separación con el pie de página
  },

  mainButton: { backgroundColor: COLORS.morado, width: '100%', padding: 25, borderRadius: 12, marginBottom: 20, shadowColor: COLORS.morado, shadowOpacity: 0.3, shadowRadius: 5 },
  mainButtonText: { color: COLORS.blanco, fontSize: 25, fontWeight: 'bold', textAlign: 'center' },
  
  grid: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  gridButton: { backgroundColor: COLORS.verdeMenta, width: '48%', padding: 20, borderRadius: 8, borderBottomWidth: 4, borderBottomColor: COLORS.verdeBrillante },
  gridText: { color: COLORS.blanco, fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
  
  footer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  footerLink: { color: COLORS.magenta, fontWeight: 'bold', fontSize: 15, borderWidth: 1, borderColor: COLORS.magenta, padding: 8, borderRadius: 5 }
});

//OLA