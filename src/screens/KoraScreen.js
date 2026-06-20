//import React from 'react';
//import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
//import { COLORS } from '../styles/theme';
//
//export default function KoraScreen() {
//  return (
//    <SafeAreaView style={styles.container}>
//      <View style={styles.card}>
//        <Text style={styles.text}>
//          Aquí se hablara de la App junto a lo que se busca y los resultados esperados o que se puedan mejorar de cada uno como persona
//        </Text>
//        
//        {/* Recuadro de imagen con la X del boceto */}
//        <View style={styles.imagePlaceholder}>
//          <Text style={styles.placeholderX}>X</Text>
//        </View>
//      </View>
//    </SafeAreaView>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: { flex: 1, backgroundColor: COLORS.blanco, padding: 20 },
//  card: { borderWidth: 1, borderColor: '#000', padding: 20, flex: 1, backgroundColor: COLORS.grisClaro, borderRadius: 8 },
//  text: { fontSize: 16, color: '#000', lineHeight: 24, textAlign: 'left' },
//  imagePlaceholder: { width: 140, height: 140, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000', alignSelf: 'center', marginTop: 60 },
//  placeholderX: { fontSize: 45, fontWeight: 'bold', color: '#555' }
//});


import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function KoraScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        
        {/* CONTENEDOR DEL LOGO HORIZONTAL */}
        <View style={styles.logoContainer}>
          {/* Si tu archivo tiene guion en vez de guion bajo, cámbialo a logo-horizontal.png */}
          <Image 
            source={require('../../assets/logo-horizontal.png')} 
            style={styles.logoImage} 
            resizeMode="contain"
          />
        </View>

        {/* CONTENIDO DE LA PANTALLA */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>¿Qué es Kora?</Text>
          <Text style={styles.description}>
            La creación de la App inició como una aplicación de seguridad para chiloé en donde las personas podían pedir ayuda desde cualquier lugar en cualquier momento, pero por el costo y la magnitud de la app fue rechazada la idea, luego de una búsqueda de ideas llegamos a kora, la App actual en donde lo que puedes hacer un autodiagnóstico en cómo está tu relación actualmente, así puedes llevar la relación de mejor manera y saber qué está pasando, por que normalmente uno nunca sabe qué es lo que está pasando por el amor de uno hacia otro haciendo difícil entenderse, ahora claramente no daría una explicación o una razón tan clara pero te ayudará a entender lo que está pasando en la relación y saber si es bueno o malo, tambien te ayudara a salir de situaciones peligrosas o tóxicas que uno claramente no desearía estar, nuestra visión es ayudar a las 3 sedes de la universidad en conjunto con Dirección de Género y si va a un buen ritmo puede mejorar la  App usarse en colegios en la  media para que los alumnos no sufran por esto
            {"\n\n"}
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco limpio
  },
  scrollArea: {
    padding: 20,
  },
  
  // ESTILOS PARA CENTRAR Y AGRANDAR EL LOGO
  logoContainer: {
    alignItems: 'center',        // Centra el logo horizontalmente
    marginTop: 30,               // Espacio desde arriba
    marginBottom: 40,            // Espacio antes del texto
  },
  logoImage: {
    width: '90%',                // Ocupa casi todo el ancho de la pantalla
    height: 150,                 // Le da buena altura para que luzca grande
  },

  // ESTILOS DEL TEXTO
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FDF5FB',  // Un fondo súper sutil rosado/magenta para resaltar el texto
    padding: 20,
    borderRadius: 15,            // Bordes redondeados modernos
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#971b78',            // El magenta característico de la app
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 26,
  },
});