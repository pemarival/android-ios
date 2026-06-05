import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import type { FeatureTile } from '@/src/data/options';

type FeatureGridProps = {
  items: FeatureTile[];
  onPressItem: (route: FeatureTile['route']) => void;
};

export function FeatureGrid({ items, onPressItem }: FeatureGridProps) {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const columns = 1;

  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <Pressable
          key={item.title}
          onPress={() => onPressItem(item.route)}
          style={({ pressed }) => [
            styles.card,
            {
              width: columns === 1 ? '100%' : `${100 / columns}%`,
              backgroundColor: palette.surface,
              borderColor: palette.border,
              opacity: pressed ? 0.92 : 1,
            },
          ]}>
          <View style={[styles.pill, { backgroundColor: item.accent }]} />
          <Text style={[styles.title, { color: palette.text }]}>{item.title}</Text>
          <Text style={[styles.description, { color: palette.muted }]}>{item.description}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 18,
    minHeight: 144,
    gap: 10,
  },
  pill: {
    width: 44,
    height: 6,
    borderRadius: 999,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
  },
});
