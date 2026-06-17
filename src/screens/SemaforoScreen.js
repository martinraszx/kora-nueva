import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Modal, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos los íconos

// Lista completa de los 18 niveles del Violentómetro
const DATOS_VIOLENTOMETRO = [
  // FASE 1: TEN CUIDADO (Amarillos / Alertas tempranas)
  { id: 1, nivel: '1', titulo: 'Bromas hirientes', descripcion: 'Comentarios que parecen chistes pero tienen la intención de ofender, humillar o ridiculizarte.', color: '#FFD166' },
  { id: 2, nivel: '2', titulo: 'Chantajear', descripcion: 'Manipulación emocional para hacerte sentir culpa y obligarte a hacer cosas que no quieres hacer.', color: '#FFC857' },
  { id: 3, nivel: '3', titulo: 'Mentir / Engañar', descripcion: 'Ocultar información importante o distorsionar la realidad para mantener el control sobre ti y tus decisiones.', color: '#FFB703' },
  { id: 4, nivel: '4', titulo: 'Ignorar / Ley del hielo', descripcion: 'Castigarte con el silencio o la indiferencia absoluta para que cedas durante o después de una discusión.', color: '#FFA200' },
  { id: 5, nivel: '5', titulo: 'Celar', descripcion: 'Reclamar atención exclusiva de forma exagerada, mostrando desconfianza constante sin ningún motivo real.', color: '#FF8E00' },
  { id: 6, nivel: '6', titulo: 'Culpabilizar', descripcion: 'Hacerte responsable de sus propios errores, de sus ataques de ira o de todos los problemas en la relación.', color: '#FF7B00' },

  // FASE 2: REACCIONA (Naranjas / Abuso evidente)
  { id: 7, nivel: '7', titulo: 'Descalificar', descripcion: 'Hacerte sentir que tus opiniones, tus gustos o tus logros no valen nada, minimizando quién eres.', color: '#FF6D00' },
  { id: 8, nivel: '8', titulo: 'Ridiculizar / Ofender', descripcion: 'Burlarse de ti de forma directa, usando palabras hirientes sobre tu físico, tu intelecto o tu familia.', color: '#FA5400' },
  { id: 9, nivel: '9', titulo: 'Humillar en público', descripcion: 'Hacer comentarios denigrantes, gritarte o exponer tus intimidades frente a otras personas para avergonzarte.', color: '#F03A00' },
  { id: 10, nivel: '10', titulo: 'Intimidar', descripcion: 'Causar miedo de forma intencional a través de miradas, gestos amenazantes, gritos o actitudes agresivas.', color: '#E62500' },
  { id: 11, nivel: '11', titulo: 'Controlar / Prohibir', descripcion: 'Decidir sobre tu forma de vestir, prohibirte ver a tus amistades, revisar tus redes sociales o controlar tu dinero.', color: '#DC1400' },
  { id: 12, nivel: '12', titulo: 'Destruir artículos personales', descripcion: 'Romper tus cosas, regalos, ropa o celular durante un arranque de ira para generar terror y demostrar poder.', color: '#D00000' },

  // FASE 3: NECESITAS AYUDA URGENTE (Rojos / Violencia física y peligro extremo)
  { id: 13, nivel: '13', titulo: 'Manosear sin consentimiento', descripcion: 'Tocamientos físicos incómodos o de carácter sexual cuando tú has expresado claramente que no quieres.', color: '#B30000' },
  { id: 14, nivel: '14', titulo: 'Golpear "jugando"', descripcion: 'Agresiones físicas disfrazadas de "juego" o "bromas pesadas" para normalizar el contacto violento y el dolor.', color: '#990000' },
  { id: 15, nivel: '15', titulo: 'Pellizcar / Arañar', descripcion: 'Causar dolor físico directo e intencional, dejando marcas sutiles o evidentes en tu cuerpo.', color: '#800000' },
  { id: 16, nivel: '16', titulo: 'Empujar / Jalonear', descripcion: 'Uso de la fuerza física para moverte, retenerte para que no te vayas, o sacudirte durante una discusión.', color: '#660000' },
  { id: 17, nivel: '17', titulo: 'Aislar', descripcion: 'Alejarte por completo de tu familia, amigos y red de apoyo mediante prohibiciones, para dejarte sin opciones de ayuda.', color: '#4D0000' },
  { id: 18, nivel: '18', titulo: 'Amenazar / Forzar', descripcion: 'Obligarte a tener relaciones sexuales bajo presión, o amenazar con quitarte la vida a ti, a tus seres queridos o a sí mismo. ¡Pide ayuda profesional inmediatamente!', color: '#330000' },
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