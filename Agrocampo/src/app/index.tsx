import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from '../components/Login';

export default function HomeScreen() {
  const handleLoginSuccess = (email: string) => {
    // You can handle navigation or app state after successful login here
    console.log('Login exitoso con:', email);
  };

  return (
    <View style={styles.container}>
      <Login onLoginSuccess={handleLoginSuccess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
});
