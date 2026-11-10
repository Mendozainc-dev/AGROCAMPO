import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

interface ScreenProps {
  onNavigate: (tab: string) => void;
}

export default function InspeccionScreen({ onNavigate }: ScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🔍</Text>
        <Text style={styles.title}>Sección de Inspección</Text>
        <Text style={styles.subtitle}>Supervisa el estado de tus cultivos y reportes de campo.</Text>
      </View>
      <BottomNavBar activeTab="inspeccion" onTabPress={onNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#064e3b',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#047857',
    textAlign: 'center',
  },
});
