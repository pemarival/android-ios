import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { AppButton } from '@/src/components/ui/AppButton';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { feedItems } from '@/src/data/items';
import { useLoading } from '@/src/hooks/useLoading';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function ScrollLoadingScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const { loading, startLoading } = useLoading(false);
  const [items, setItems] = useState(feedItems.slice(0, 6));

  useEffect(() => {
    startLoading(700);
  }, [startLoading]);

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Scroll loading</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Lista con carga simulada y más contenido al final.</Text>
      </View>

      <InfoCard title="Carga progresiva" description={loading ? 'Preparando contenido...' : 'Puedes seguir cargando bloques cuando llegues al final.'}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={[styles.row, { backgroundColor: palette.background, borderColor: palette.border }]}>
              <Text style={[styles.rowTitle, { color: palette.text }]}>{item.title}</Text>
              <Text style={[styles.rowSubtitle, { color: palette.muted }]}>{item.subtitle}</Text>
            </View>
          )}
          ListFooterComponent={
            <AppButton
              label={loading ? 'Cargando...' : 'Cargar más'}
              onPress={() => {
                startLoading(650);
                setTimeout(() => {
                  setItems((currentItems) => {
                    const nextIndex = currentItems.length;
                    const nextItems = feedItems.slice(nextIndex, nextIndex + 4);
                    return [...currentItems, ...nextItems];
                  });
                }, 650);
              }}
            />
          }
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
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
  row: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    gap: 4,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  rowSubtitle: {
    fontSize: 13,
    lineHeight: 19,
  },
});
