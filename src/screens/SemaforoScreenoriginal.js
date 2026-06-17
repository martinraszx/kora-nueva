import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { COLORS } from '../styles/theme';

export default function SemaforoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {/* Caja de información introductoria */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Aquí va a ir el violentómetro de "INDH ciudadano" junto a sus escalas y niveles de precaución y riesgo</Text>
        </View>

        {/* Reemplazamos la barra vertical por la imagen detallada real */}
        <Image 
          source={require('../../assets/violentometro.png')} 
          style={styles.violentometroImage} 
          resizeMode="contain"
        />

        {/* Caja de aclaración final */}
        <View style={styles.footerBox}>
          <Text style={styles.infoText}>Aquí va a ir una pequeña aclaración del violentómetro y sus bases</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.blanco, 
    padding: 20 
  },
  scroll: { 
    alignItems: 'center', 
    paddingBottom: 40 
  },
  infoBox: { 
    borderWidth: 1, 
    borderColor: COLORS.magenta, 
    padding: 15, 
    width: '100%', 
    borderRadius: 5, 
    marginBottom: 30,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  infoText: { 
    textAlign: 'center', 
    color: COLORS.magenta, 
    fontWeight: '500',
    lineHeight: 22 // Mejora la legibilidad
  },
  violentometroImage: { 
    width: 320, // Lo suficientemente ancho para ver el detalle
    height: 600, // Lo suficientemente alto para ver todos los 18 niveles
    marginBottom: 30,
    alignSelf: 'center', // Centrado horizontal
  },
  footerBox: { 
    backgroundColor: COLORS.grisClaro, 
    padding: 15, 
    width: '100%', 
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  }
});