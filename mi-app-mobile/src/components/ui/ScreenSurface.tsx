import { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type ScreenSurfaceProps = {
  children: ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

export function ScreenSurface({ children, style, contentStyle }: ScreenSurfaceProps) {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }, style]}>
      <ScrollView
        contentContainerStyle={[styles.content, { backgroundColor: palette.background }, contentStyle]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    alignSelf: 'center',
  },
  inner: {
    flex: 1,
    width: '100%',
    maxWidth: 1120,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 20,
  },
});
