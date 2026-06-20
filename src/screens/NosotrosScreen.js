//
//import React from 'react';
//import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
//import { COLORS } from '../styles/theme';
//
//export default function NosotrosScreen() {
//  const integrantes = [1, 2, 3, 4]; // Cuatro bloques según el diseño
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <ScrollView contentContainerStyle={styles.scroll}>
//        {integrantes.map((id) => (
//          <View key={id} style={styles.row}>
//            <Text style={styles.text}>
//              Aquí se hablara de nosotros como equipo y en que se encargo cada uno, junto a su pequeña bibliografia y una foto de el
//            </Text>
//            
//            {/* Espacio para la foto */}
//            <View style={styles.avatarPlaceholder}>
//              <Text style={styles.avatarX}>X</Text>
//            </View>
//          </View>
//        ))}
//      </ScrollView>
//    </SafeAreaView>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: { flex: 1, backgroundColor: COLORS.blanco },
//  scroll: { padding: 15 },
//  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#000', padding: 12, marginBottom: 15, backgroundColor: COLORS.grisClaro, borderRadius: 6 },
//  text: { flex: 1, fontSize: 13, color: '#000', marginRight: 12, lineHeight: 18 },
//  avatarPlaceholder: { width: 75, height: 75, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000' },
//  avatarX: { fontSize: 24, fontWeight: 'bold', color: '#555' }
//});

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native';

// Lista del equipo. Aquí agregamos el campo "biografia" a cada uno.
const EQUIPO = [
  { 
    id: '1', 
    nombre: 'Eduard', 
    foto: require('../../assets/eduard.jpg'),
    biografia: 'Soy Eduard Antony Contreras Miranda y soy estudiante de la carrera ingeniería civil en informática. En el mes de Abril, yo y mi equipo nos unimos fuerzas para desarrollar el proyecto titulado Kora. Este trabajo nació con el propósito de ayudar a las parejas con mala relación o problemas tóxico, este era un problemática tan grande que quisimos resolver para la gente que sufre; irritación, miedo, abusos y violencias en estos tipos de relaciones. Durante la realización del proyecto, cada miembro aportó desde sus fortalezas individuales: Martin se enfocó en el código y la página de la aplicación, Piper lideró Diseñarlo y responsabilidad de la app, mientras que Ignición y Yo nos encargamos de investigación y apoyo del trabajo. El desafío del trabajo fue ubicarnos en cada rol e identificar los problemas de la app.'
  },
  { 
    id: '2', 
    nombre: 'Felipe', 
    foto: require('../../assets/felipe.jpg'),
    biografia: 'Buenas mi nombre es Felipe Levicán Barría, estudiante de Ingeniería Civil en Informática, y desde el mes de Abril que tenemos este proyecto, me dedique en estar encargado en la parte de liderar el equipo por parte de Diseño y en que se haga los trabajos necesarios para que este proyecto vaya por un buen camino'
  },
  { 
    id: '3', 
    nombre: 'Martín', 
    foto: require('../../assets/martin.jpg'),
    biografia: 'Soy Martin Renato Aguirre Salazar y estoy cursando el primer año de ingeniería civil en informática, junto a mi equipo nos reunimos para crear esta App llamada Kora, yo principalmente en enfoque en el desarrollo interno de la App para que funcione y sea fácil de entender, mis compañeros me ayudaron a lograr a lo que llegamos hasta ahora, aun tiene sus fallos pero esta funcionando al 100%'
  },
  { 
    id: '4', 
    nombre: 'Ignacío', 
    foto: require('../../assets/nacho.jpg'),
    biografia: 'Hola soy Ignacio Marcelo Saez Straussmann soy estudiante de primer año de la ulagos, estudio ingenieria civil informatica,  con mi grupo del proyecto integrador nos juntamos para crear y diseñar KoraApp una aplicacion que es una herramienta que ayuda a identificar conductas de manipulacion psicologica y de control en relaciones durante la etapa universitaria, en este trabajo me enfoque en parte de creacion del codigo de la app osea el desarrollo interno y tambien me encargue del diseño del logo de la app.'
  },
];

export default function NosotrosScreen() {
  // Estados para controlar la ventana flotante (Modal)
  const [modalVisible, setModalVisible] = useState(false);
  const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);

  // Función para abrir la biografía
  const abrirBiografia = (miembro) => {
    setMiembroSeleccionado(miembro);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Nuestro Equipo</Text>
          <Text style={styles.headerSubtitle}>
            Conoce a las personas detrás del desarrollo y creación de Kora. Toca una foto para leer su historia.
          </Text>
        </View>

        {/* Tarjetas del equipo */}
        <View style={styles.gridContainer}>
          {EQUIPO.map((miembro) => (
            <TouchableOpacity 
              key={miembro.id} 
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => abrirBiografia(miembro)}
            >
              <Image 
                source={miembro.foto} 
                style={styles.profileImage} 
                resizeMode="cover"
              />
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{miembro.nombre}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* MODAL FLOTANTE PARA LA BIOGRAFÍA */}
      <Modal
        animationType="slide" // Esta animación hace que suba desde abajo, dándole un toque distinto
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {miembroSeleccionado && (
              <>
                {/* Foto en grande dentro del modal */}
                <Image 
                  source={miembroSeleccionado.foto} 
                  style={styles.modalImage} 
                  resizeMode="cover"
                />
                
                <ScrollView contentContainerStyle={styles.modalBody}>
                  <Text style={styles.modalName}>{miembroSeleccionado.nombre}</Text>
                  
                  {/* Línea decorativa */}
                  <View style={styles.divider} />

                  <Text style={styles.modalBioText}>
                    {miembroSeleccionado.biografia}
                  </Text>
                </ScrollView>

                {/* Botón para cerrar */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.closeButton} 
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  scrollArea: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#971b78', 
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
  card: {
    width: '100%', 
    backgroundColor: '#FDF5FB', 
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F4E3F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  profileImage: {
    width: '100%',
    height: 350, 
  },
  nameContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F4E3F0',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 0.5,
  },

  // ESTILOS DEL MODAL DE BIOGRAFÍA
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo un poco más oscuro para resaltar la foto
    justifyContent: 'flex-end', // Esto hace que la tarjeta salga desde abajo
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '85%', // Ocupa el 85% de la pantalla para que se sienta como una tarjeta expandida
    overflow: 'hidden',
  },
  modalImage: {
    width: '100%',
    height: 250, // Muestra una porción horizontal grande de la foto
  },
  modalBody: {
    padding: 25,
    alignItems: 'center',
  },
  modalName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#971b78',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    width: 50,
    height: 4,
    backgroundColor: '#F4E3F0',
    borderRadius: 2,
    marginBottom: 20,
  },
  modalBioText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    textAlign: 'justify', // Justifica el texto para que se lea como un libro
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 40, // Espacio extra por si el celular tiene gestos en la parte inferior
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  closeButton: {
    backgroundColor: '#971b78',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});