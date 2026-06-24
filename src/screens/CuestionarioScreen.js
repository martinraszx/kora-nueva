import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// BANCO DE 54 PREGUNTAS ENFOCADAS EN RELACIONES DE PAREJA
const PREGUNTAS = [
  "1. ¿Sientes libertad de expresar tus opiniones sin temor a que se enoje?",
  "2. ¿Respeta tus tiempos a solas, pasatiempos y espacios individuales?",
  "3. ¿Confía en ti cuando sales con tus amigos o familiares sin su compañía?",
  "4. ¿Apoya tus metas de estudio, trabajo o crecimiento personal?",
  "5. ¿Evita revisar tu teléfono celular, mensajes o redes sociales?",
  "6. ¿Te trata con amabilidad y respeto tanto en público como en privado?",
  "7. ¿Asume la responsabilidad de sus acciones cuando comete un error?",
  "8. ¿Escucha tu punto de vista de forma empática durante una discusión?",
  "9. ¿Sientes seguridad física y emocional a su lado?",
  "10. ¿Te anima a mantener tus amistades previas a la relación?",
  "11. ¿Valora y celebra tus logros individuales sincera y alegremente?",
  "12. ¿Toma en cuenta tus decisiones financieras o planes de gasto importantes?",
  "13. ¿Muestra una actitud calmada y dialogante en momentos de estrés?",
  "14. ¿Te hace sentir una persona valiosa, inteligente y capaz?",
  "15. ¿Respeta tu forma de vestir y arreglarte sin hacer críticas negativas?",
  "16. ¿Se comunica de manera clara sin recurrir a indirectas o sarcasmos?",
  "17. ¿Te da explicaciones sinceras si notas algo extraño, sin ponerse a la defensiva?",
  "18. ¿Sientes que la distribución de tareas o cargas en la relación es justa?",
  "19. ¿Muestra interés genuino por cómo estuvo tu día o tus sentimientos?",
  "20. ¿Respeta tus límites físicos o sexuales cuando dices que no?",
  "21. ¿Mantiene una relación cordial y respetuosa con tu familia?",
  "22. ¿Resuelve los problemas contigo en lugar de castigarte con el silencio?",
  "23. ¿Te permite tener contraseñas privadas en tus cuentas personales?",
  "24. ¿Sientes que puedes crecer como persona estando dentro de esta relación?",
  "25. ¿Sus demostraciones de afecto te hacen sentir tranquilidad y paz?",
  "26. ¿Evita culparte de sus propios cambios de humor o problemas cotidianos?",
  "27. ¿Te impulsa a cuidar de tu salud física, mental y bienestar?",
  "28. ¿Reconoce tus virtudes y las destaca positivamente de forma regular?",
  "29. ¿Muestra madurez y control emocional ante los celos cotidianos?",
  "30. ¿Sientes que el amor mutuo se basa en la libertad y no en la posesión?",
  "31. ¿Planifican actividades juntos respetando los gustos de ambos por igual?",
  "32. ¿Te da tu espacio cuando necesitas procesar una emoción a solas?",
  "33. ¿Cumple con los acuerdos y promesas que establece contigo?",
  "34. ¿Evita compararte negativamente con sus parejas del pasado?",
  "35. ¿Notas que sus críticas siempre buscan construir y nunca lastimar?",
  "36. ¿Puedes hablar de cualquier tema, por incómodo que sea, sin censura?",
  "37. ¿Sientes que confía plenamente en tu fidelidad y honestidad?",
  "38. ¿Te acompaña de forma incondicional en tus momentos de vulnerabilidad?",
  "39. ¿Su presencia reduce tus niveles de ansiedad en lugar de aumentarlos?",
  "40. ¿Respeta tus creencias religiosas, valores y principios fundamentales?",
  "41. ¿Consideras que tu nivel de autoestima ha mejorado desde que están juntos?",
  "42. ¿Te anima a tomar decisiones autónomas sobre tu propia vida?",
  "43. ¿Muestra empatía cuando le comentas que algo de su actitud te dolió?",
  "44. ¿Se alegra de que pases tiempo de calidad con tus seres queridos?",
  "45. ¿Evita el uso de lenguaje hiriente o descalificativo en las peleas?",
  "46. ¿Sientes orgullo de la manera en que ambos manejan la relación?",
  "47. ¿Te sientes en una posición de igualdad de derechos dentro de la pareja?",
  "48. ¿Es capaz de disculparse de corazón sin añadir excusas a su error?",
  "49. ¿Fomenta un ambiente de paz y estabilidad dentro del hogar o espacio común?",
  "50. ¿Respeta tus opiniones políticas o visiones de mundo particulares?",
  "51. ¿Sientes que la relación fluye de forma natural sin ser un peso constante?",
  "52. ¿Te transmite seguridad respecto al futuro y estabilidad de la pareja?",
  "53. ¿Evita usar el chantaje emocional o amenazas de ruptura para controlarte?",
  "54. ¿Sientes plenitud, bienestar y paz al hacer un balance general de la relación?"
];

export default function CuestionarioScreen({ navigation }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(54).fill(0)); // Almacena el puntaje de cada pregunta

  const seleccionarEstrellas = (cantidadEstrellas) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaActual] = cantidadEstrellas;
    setRespuestas(nuevasRespuestas);
  };

const avanzarPregunta = () => {
    if (preguntaActual < PREGUNTAS.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      // 1. Sumamos todas las estrellas elegidas (Máximo 270)
      const sumaTotal = respuestas.reduce((acumulado, valor) => acumulado + valor, 0);
      
      // 2. Dividimos por 15 para obtener un nivel del 1 al 18 (redondeando hacia arriba)
      let nivelFinal = Math.ceil(sumaTotal / 15);
      if (nivelFinal === 0) nivelFinal = 1; // Por si acaso
      if (nivelFinal > 18) nivelFinal = 18; // El tope máximo es 18

      // 3. Reiniciamos el cuestionario para poder hacer otro test consecutivo
      setPreguntaActual(0);
      setRespuestas(Array(54).fill(0));

      // 4. Viajamos a Resultados enviando el nivel y una marca de tiempo (timestamp)
      // El timestamp sirve para que Resultados sepa que es un test nuevo, aunque saques el mismo puntaje
      navigation.navigate('Resultados', { 
        nuevoNivel: nivelFinal,
        timestamp: Date.now() 
      });
    }
  };

  const retrocederPregunta = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  const progreso = ((preguntaActual + 1) / PREGUNTAS.length) * 100;
  const estrellaSeleccionada = respuestas[preguntaActual];

  return (
    <SafeAreaView style={styles.container}>
      {/* BARRA DE PROGRESO */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Pregunta {preguntaActual + 1} de {PREGUNTAS.length}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progreso}%` }]} />
        </View>
      </View>

      {/* TARJETA CENTRAL DE LA PREGUNTA */}
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.scrollQuestion}>
          <Text style={styles.questionText}>{PREGUNTAS[preguntaActual]}</Text>
        </ScrollView>

        {/* SISTEMA DE CALIFICACIÓN POR ESTRELLAS */}
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity 
              key={num} 
              onPress={() => seleccionarEstrellas(num)}
              activeOpacity={0.6}
            >
              <Ionicons 
                name={num <= estrellaSeleccionada ? "star" : "star-outline"} 
                size={42} 
                color={num <= estrellaSeleccionada ? "#FFB703" : "#CCCCCC"} 
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* BOTONES DE NAVEGACIÓN */}
      <View style={styles.navigationButtons}>
        {preguntaActual > 0 ? (
          <TouchableOpacity style={styles.backButton} onPress={retrocederPregunta}>
            <Text style={styles.backButtonText}>Anterior</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1 }} /> // Relleno cuando no hay botón de atrás
        )}

        <TouchableOpacity 
          style={[styles.nextButton, { opacity: estrellaSeleccionada === 0 ? 0.5 : 1 }]} 
          onPress={avanzarPregunta}
          disabled={estrellaSeleccionada === 0} // No deja avanzar si no se ha elegido ninguna estrella
        >
          <Text style={styles.nextButtonText}>
            {preguntaActual === PREGUNTAS.length - 1 ? "Finalizar" : "Siguiente"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  progressContainer: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#971b78', // Tu magenta característico
  },
  card: {
    flex: 1,
    backgroundColor: '#FDF5FB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F4E3F0',
    padding: 25,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  scrollQuestion: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    lineHeight: 30,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  starIcon: {
    marginHorizontal: 8,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
    gap: 15,
  },
  backButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#971b78',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#971b78',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#971b78',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});