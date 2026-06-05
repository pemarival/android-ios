import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { AppButton } from '@/src/components/ui/AppButton';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { isValidEmail } from '@/src/utils/validators';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const [email, setEmail] = useState('alex@demo.com');

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>
          Perfil
        </Text>

        <Text style={[styles.subtitle, { color: palette.muted }]}>
          Validación básica y una tarjeta clara para datos de usuario.
        </Text>
      </View>

      <InfoCard
        title="Alex Rivera"
        description={
          isValidEmail(email) ? 'Correo válido' : 'Correo inválido'
        }
        accent={palette.success}
      >
        <View
          style={[
            styles.avatar,
            { backgroundColor: palette.tint },
          ]}
        >
          <Text style={styles.avatarText}>AR</Text>
        </View>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="correo@ejemplo.com"
          placeholderTextColor={palette.muted}
          style={[
            styles.input,
            {
              color: palette.text,
              borderColor: palette.border,
              backgroundColor: palette.background,
            },
          ]}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <AppButton label="Guardar perfil" />
      </InfoCard>
    </ScreenSurface>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },

  input: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 16,
  },
});