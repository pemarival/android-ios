import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { FeatureGrid } from '@/src/components/FeatureGrid';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { featureTiles } from '@/src/data/options';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <ScreenSurface>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: palette.text }]}>Módulos disponibles</Text>
        <Text style={[styles.sectionSubtitle, { color: palette.muted }]}>Cada tarjeta lleva a una pantalla funcional y mantenible.</Text>
      </View>

      <FeatureGrid
        items={featureTiles}
        onPressItem={(route) => {
          router.push(route);
        }}
      />
    </ScreenSurface>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    gap: 6,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '900',
  },
  sectionSubtitle: {
    fontSize: 14,
    lineHeight: 21,
  },
});
