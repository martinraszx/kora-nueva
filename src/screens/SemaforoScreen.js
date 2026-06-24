import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Modal, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos los íconos

// Lista completa de los 18 niveles del Violentómetro
const DATOS_VIOLENTOMETRO = [
  // FASE 1: TEN CUIDADO (Amarillos / Alertas tempranas)
  { id: 1, nivel: '1', titulo: 'Chantajear', descripcion: 'Manipulación emocional para hacerte sentir culpa y obligarte a hacer cosas que no quieres hacer.', color: '#FFD166' },
  { id: 2, nivel: '2', titulo: 'Mentir / Engañar', descripcion: 'Ocultar información importante o distorsionar la realidad para mantener el control sobre ti y tus decisiones.', color: '#FFC857' },
  { id: 3, nivel: '3', titulo: 'Ignorar / Ley del hielo', descripcion: 'Castigarte con el silencio o la indiferencia absoluta para que cedas durante o después de una discusión.', color: '#FFB703' },
  { id: 4, nivel: '4', titulo: 'Celar', descripcion: 'Reclamar atención exclusiva de forma exagerada, mostrando desconfianza constante sin ningún motivo real.', color: '#FFA200' },
  { id: 5, nivel: '5', titulo: 'Ofender / Humillar', descripcion: 'Usar insultos, gritos o descalificaciones verbales para degradar la dignidad de la persona y hacerla sentir inferior o incapaz.', color: '#FF8E00' },
  { id: 6, nivel: '6', titulo: 'Intimidar / Amenazar', descripcion: 'Generar miedo mediante miradas, gestos o advertencias verbales sobre posibles consecuencias negativas si no se obedece su voluntad.', color: '#FF7B00' },

  // FASE 2: REACCIONA (Naranjas / Abuso evidente)
  { id: 7, nivel: '7', titulo: 'Controlar / Prohibir / Aislar', descripcion: 'Restringir las amistades, vestimenta, redes sociales, horarios o decisiones económicas para anular por completo la autonomía de la persona.', color: '#FF6D00' },
  { id: 8, nivel: '8', titulo: 'Destruir artículos personales', descripcion: 'Romper tus cosas, regalos, ropa o celular durante un arranque de ira para generar terror y demostrar poder.', color: '#FA5400' },
  { id: 9, nivel: '9', titulo: 'Intimidar', descripcion: 'Hacer comentarios denigrantes, gritarte o exponer tus intimidades frente a otras personas para avergonzarte.', color: '#F03A00' },
  { id: 10, nivel: '10', titulo: 'Agredir "jugando"', descripcion: 'Agresiones físicas disfrazadas de "juego" o "bromas pesadas" para normalizar el contacto violento y el dolor.', color: '#E62500' },
  { id: 11, nivel: '11', titulo: 'Empujar / Jalonear', descripcion: 'Uso de la fuerza física para moverte, retenerte para que no te vayas, o sacudirte durante una discusión.', color: '#DC1400' },
  { id: 12, nivel: '12', titulo: 'Golpear', descripcion: 'Ejercer fuerza física directa mediante manotazos, bofetadas o patadas, causando daño corporal evidente y rompiendo límites de seguridad básicos.', color: '#D00000' },

  // FASE 3: NECESITAS AYUDA URGENTE (Rojos / Violencia física y peligro extremo)
  { id: 13, nivel: '13', titulo: 'Encerrar / Secuestrar', descripcion: 'Privar de la libertad de movimiento, impidiendo que la persona salga de un espacio físico o contacte al exterior.', color: '#B30000' },
  { id: 14, nivel: '14', titulo: 'Amenazar con Objetos', descripcion: 'Utilizar objetos punzantes, cortantes o armas de fuego para aterrorizar y coaccionar bajo la promesa implícita de muerte.', color: '#990000' },
  { id: 15, nivel: '15', titulo: 'Amenazar de Muerte', descripcion: 'Advertir verbalmente o con gestos la intención de quitar la vida, infundiendo un miedo extremo para someter a la víctima.', color: '#800000' },
  { id: 16, nivel: '16', titulo: 'Abusar Sexualmente', descripcion: 'Forzar u obligar a realizar actos de carácter sexual sin consentimiento explícito, utilizando la fuerza, el chantaje o las amenazas.', color: '#660000' },
  { id: 17, nivel: '17', titulo: 'Violar', descripcion: 'Forzar a realizar actos de carácter sexual o mantener relaciones mediante el uso de la fuerza física, chantaje o amenazas.', color: '#4D0000' },
  { id: 18, nivel: '18', titulo: 'Asesinar', descripcion: 'Quitar la vida a la pareja de forma violenta, siendo el desenlace definitivo y más extremo de este ciclo destructivo.', color: '#330000' },
];

export default function SemaforoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const abrirDetalle = (item) => {
    setItemSeleccionado(item);
    setModalVisible(true);
  };

  // Función para abrir el enlace externo del PDF
  const abrirPDF = () => {
    Linking.openURL('https://www.indh.cl/bb/wp-content/uploads/2017/01/Violentometro.pdf');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Text style={styles.headerTitle}>Violentómetro</Text>
        <Text style={styles.headerSubtitle}>Toca cualquier nivel para conocer más sobre estas señales de alerta.</Text>

        {DATOS_VIOLENTOMETRO.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.itemRow} 
            activeOpacity={0.7}
            onPress={() => abrirDetalle(item)}
          >
            <View style={[styles.numberCircle, { backgroundColor: item.color }]}>
              <Text style={styles.numberText}>{item.nivel}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.titulo}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* BOTÓN FLOTANTE PARA EL PDF */}
      <TouchableOpacity 
        style={styles.floatingButton} 
        activeOpacity={0.8} 
        onPress={abrirPDF}
      >
        <Ionicons name="document-text" size={26} color="#FFF" />
      </TouchableOpacity>

      {/* MODAL FLOTANTE */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {itemSeleccionado && (
              <>
                <View style={[styles.modalHeader, { backgroundColor: itemSeleccionado.color }]}>
                  <Text style={styles.modalLevelText}>Nivel {itemSeleccionado.nivel}</Text>
                </View>
                
                <View style={styles.modalBody}>
                  <Text style={styles.modalTitle}>{itemSeleccionado.titulo}</Text>
                  <Text style={styles.modalDescription}>{itemSeleccionado.descripcion}</Text>
                  
                  <TouchableOpacity 
                    style={styles.closeButton} 
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Entendido</Text>
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
    paddingBottom: 80, // Aumentamos un poco el padding inferior para que el botón flotante no tape el último elemento
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#971b78', 
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 25,
    lineHeight: 22,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF5FB', 
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F4E3F0',
  },
  numberCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  numberText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  
  // ESTILOS DEL BOTÓN FLOTANTE
  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#971b78', // Tu magenta para que combine
    width: 60,
    height: 60,
    borderRadius: 30, // Lo hace completamente circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Sombra prominente en Android
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '92%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    padding: 16,
    alignItems: 'center',
  },
  modalLevelText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  modalBody: {
    padding: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },
  closeButton: {
    backgroundColor: '#971b78', 
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});