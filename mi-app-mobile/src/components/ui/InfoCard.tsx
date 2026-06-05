import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type InfoCardProps = {
  title: string;
  description?: string;
  accent?: string;
  children?: ReactNode;
};

export function InfoCard({ title, description, accent, children }: InfoCardProps) {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <View style={[styles.accent, { backgroundColor: accent ?? palette.tint }]} />
      <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
      {description ? <Text style={[styles.description, { color: palette.muted }]}>{description}</Text> : null}
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 10,
  },
  accent: {
    width: 48,
    height: 6,
    borderRadius: 999,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
  },
  children: {
    gap: 10,
    marginTop: 6,
  },
});
