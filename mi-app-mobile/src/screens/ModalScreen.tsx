import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { AppButton } from '@/src/components/ui/AppButton';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function ModalScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Modal de ejemplo</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Útil para acciones puntuales o confirmaciones.</Text>
      </View>

      <InfoCard title="Comportamiento" description="En una app real este patrón sirve para capturar atención sin salir del contexto.">
        <AppButton label="Cerrar modal" onPress={() => router.back()} />
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
});
