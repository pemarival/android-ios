import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { AppButton } from '@/src/components/ui/AppButton';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function ButtonsScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Botones reutilizables</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Variantes visuales consistentes para usar en todo el proyecto.</Text>
      </View>

      <InfoCard title="Estados" description="Se pueden combinar variantes y ancho completo sin duplicar estilos.">
        <AppButton label="Primario" fullWidth />
        <AppButton label="Secundario" variant="secondary" fullWidth />
        <AppButton label="Ghost" variant="ghost" fullWidth />
        <AppButton label="Destructivo" variant="danger" fullWidth />
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
