import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';

interface LoginProps {
  onLoginSuccess?: (email: string) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Por favor ingresa tu correo electrónico.');
      return;
    }
    if (!password) {
      setErrorMessage('Por favor ingresa tu contraseña.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email.includes('@') && password.length >= 6) {
        if (onLoginSuccess) {
          onLoginSuccess(email);
        } else {
          Alert.alert('¡Bienvenido!', `Acceso exitoso para ${email}`);
        }
      } else {
        setErrorMessage('Credenciales inválidas. Verifica tu correo y contraseña.');
      }
    }, 1200);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/BackgroundImage.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.headerContainer}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/images/Logoapp.jpg')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.title}>Agrocampo</Text>
              <Text style={styles.subtitle}>Gestión Agrícola Inteligente</Text>
            </View>

            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Iniciar Sesión</Text>
              <Text style={styles.formSubtitle}>Ingresa tus datos para continuar</Text>

              {errorMessage ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{errorMessage}</Text>
                </View>
              ) : null}

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                  style={styles.input}
                  placeholder="ejemplo@agrocampo.com"
                  placeholderTextColor="#9ca3af"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    placeholderTextColor="#9ca3af"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureText}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setSecureText(!secureText)}
                  >
                    <Text style={styles.eyeButtonText}>{secureText ? '👁️‍🗨️' : '👁️‍🗨️'}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => Alert.alert('Recuperar contraseña', 'Se enviarán instrucciones a tu correo registrado.')}
              >
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#ffffff" />
                ) : (
                  <Text style={styles.buttonText}>Ingresar</Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>© 2026 Agrocampo S.A. Todos los derechos reservados.</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 46, 22, 0.4)',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logoContainer: {
    width: 72,
    height: 72,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(4, 120, 87, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#e2f8ec',
    marginTop: 4,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background for frosted glass effect
    borderRadius: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 20,
  },
  errorContainer: {
    backgroundColor: 'rgba(254, 242, 242, 0.7)',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    color: '#991b1b',
    fontSize: 13,
    lineHeight: 18,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    backgroundColor: 'rgba(249, 250, 251, 0.7)',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 46,
    fontSize: 15,
    color: '#1f2937',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 250, 251, 0.7)',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    height: 46,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#1f2937',
    height: '100%',
  },
  eyeButton: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeButtonText: {
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#065f46',
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#064e3b',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#047857',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 12,
    color: '#e2f8ec',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
