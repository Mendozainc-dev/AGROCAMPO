import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InspeccionScreen from '../screens/InspeccionScreen';
import AplicacionScreen from '../screens/AplicacionScreen';
import CosechaScreen from '../screens/CosechaScreen';
import HistorialScreen from '../screens/HistorialScreen';
import ConfiguracionScreen from '../screens/ConfiguracionScreen';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('inspeccion');

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case 'inspeccion':
        return <InspeccionScreen onNavigate={setActiveTab} />;
      case 'aplicacion':
        return <AplicacionScreen onNavigate={setActiveTab} />;
      case 'cosecha':
        return <CosechaScreen onNavigate={setActiveTab} />;
      case 'historial':
        return <HistorialScreen onNavigate={setActiveTab} />;
      case 'configuracion':
        return <ConfiguracionScreen onNavigate={setActiveTab} />;
      default:
        return <InspeccionScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderCurrentScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
});
