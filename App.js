import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import CuestionarioScreen from './src/screens/CuestionarioScreen';
import SemaforoScreen from './src/screens/SemaforoScreen';
import ResultadosScreen from './src/screens/ResultadosScreen';
import NosotrosScreen from './src/screens/NosotrosScreen';
import KoraScreen from './src/screens/KoraScreen';
import { COLORS } from './src/styles/theme';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerTintColor: COLORS.magenta,
        drawerStyle: { backgroundColor: COLORS.berenjena, width: 240 },
        drawerActiveTintColor: COLORS.blanco,
        drawerInactiveTintColor: COLORS.rosa_viejo,
      }}>
        <Drawer.Screen name="Inicio" component={HomeScreen} options={{ title: 'Principal' }} />
        <Drawer.Screen name="Resultados" component={ResultadosScreen} />
        <Drawer.Screen name="Semaforo" component={SemaforoScreen} options={{ title: 'Violentómetro' }} />
        <Drawer.Screen name="Nosotros" component={NosotrosScreen} options={{ title: 'Nosotros' }} />
        <Drawer.Screen name="Kora" component={KoraScreen} options={{ title: 'Kora' }} />
        
        {/* Oculto del menú lateral */}
        <Drawer.Screen name="Cuestionario" component={CuestionarioScreen} options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}