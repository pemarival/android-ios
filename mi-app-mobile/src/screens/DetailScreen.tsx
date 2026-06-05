import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function DetailScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const params = useLocalSearchParams<{ title?: string }>();
  const title = params.title ?? 'Detalle de pantalla';

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Vista de detalle para mostrar contenido secundario o información contextual.</Text>
      </View>

      <InfoCard title="Información" description="Este patrón funciona bien para ver un ítem, resumen o estado de selección.">
        <Text style={[styles.body, { color: palette.text }]}>Puedes pasar parámetros por ruta y renderizar el detalle con datos específicos.</Text>
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
  body: {
    fontSize: 15,
    lineHeight: 23,
  },
});
