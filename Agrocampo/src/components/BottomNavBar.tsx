import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

interface BottomNavBarProps {
  activeTab: string;
  onTabPress: (tabKey: string) => void;
}

export default function BottomNavBar({ activeTab, onTabPress }: BottomNavBarProps) {
  const tabs = [
    { key: 'inspeccion', label: 'Inspección', icon: '🔍' },
    { key: 'aplicacion', label: 'Aplicación', icon: '💧' },
    { key: 'cosecha', label: 'Cosecha', icon: '🌾' },
    { key: 'historial', label: 'Historial', icon: '📋' },
    { key: 'configuracion', label: 'Config.', icon: '⚙️' },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.navItem, isActive && styles.navItemActive]}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <Text style={styles.iconText}>{tab.icon}</Text>
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]} numberOfLines={1}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    height: 64,
    paddingBottom: Platform.OS === 'ios' ? 16 : 4,
    paddingTop: 8,
    paddingHorizontal: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navItemActive: {
    // Active highlight
  },
  iconText: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 2,
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#064e3b',
    fontWeight: '700',
  },
});
