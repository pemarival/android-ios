import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type AppButtonProps = PressableProps & {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  fullWidth?: boolean;
};

export function AppButton({ label, variant = 'primary', fullWidth, style, ...props }: AppButtonProps) {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  const backgroundColor =
    variant === 'primary'
      ? palette.tint
      : variant === 'secondary'
        ? palette.tintSoft
        : variant === 'danger'
          ? palette.danger
          : 'transparent';

  const textColor = variant === 'secondary' || variant === 'ghost' ? palette.text : '#FFFFFF';

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
          borderColor: variant === 'ghost' ? palette.border : 'transparent',
          opacity: pressed ? 0.88 : 1,
        },
        fullWidth && styles.fullWidth,
        style,
      ]}
      {...props}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  fullWidth: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
