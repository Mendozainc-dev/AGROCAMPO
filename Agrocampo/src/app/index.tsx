import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import Login from '../components/Login';

export default function IndexScreen() {
  const router = useRouter();

  const handleLoginSuccess = (email: string) => {
    console.log('Login exitoso con:', email);
    router.push('/HomeScreen');
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
    backgroundColor: '#052e16',
  },
});
