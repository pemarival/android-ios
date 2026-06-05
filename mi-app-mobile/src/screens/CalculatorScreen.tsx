import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '@/src/constants/colors';
import { ScreenSurface } from '@/src/components/ui/ScreenSurface';
import { AppButton } from '@/src/components/ui/AppButton';
import { InfoCard } from '@/src/components/ui/InfoCard';
import { divide, formatResult, multiply, subtract, sum } from '@/src/utils/calculator';
import { useColorScheme } from '@/src/hooks/useColorScheme';

type Operation = 'sum' | 'subtract' | 'multiply' | 'divide';

export default function CalculatorScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const [left, setLeft] = useState('12');
  const [right, setRight] = useState('4');
  const [operation, setOperation] = useState<Operation>('sum');

  const leftNumber = Number(left);
  const rightNumber = Number(right);

  const result = (() => {
    if (Number.isNaN(leftNumber) || Number.isNaN(rightNumber)) {
      return null;
    }

    switch (operation) {
      case 'sum':
        return sum(leftNumber, rightNumber);
      case 'subtract':
        return subtract(leftNumber, rightNumber);
      case 'multiply':
        return multiply(leftNumber, rightNumber);
      case 'divide':
        return divide(leftNumber, rightNumber);
      default:
        return null;
    }
  })();

  return (
    <ScreenSurface>
      <View style={styles.header}>
        <Text style={[styles.title, { color: palette.text }]}>Calculadora</Text>
        <Text style={[styles.subtitle, { color: palette.muted }]}>Valida entradas y resuelve operaciones comunes.</Text>
      </View>

      <InfoCard title="Operación" description="Usa utilidades puras para mantener la lógica aislada.">
        <View style={styles.inputsRow}>
          <TextInput
            value={left}
            onChangeText={setLeft}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor={palette.muted}
            style={[styles.input, { borderColor: palette.border, color: palette.text, backgroundColor: palette.background }]}
          />
          <TextInput
            value={right}
            onChangeText={setRight}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor={palette.muted}
            style={[styles.input, { borderColor: palette.border, color: palette.text, backgroundColor: palette.background }]}
          />
        </View>

        <View style={styles.operations}>
          <AppButton label="Sumar" variant={operation === 'sum' ? 'primary' : 'secondary'} onPress={() => setOperation('sum')} />
          <AppButton label="Restar" variant={operation === 'subtract' ? 'primary' : 'secondary'} onPress={() => setOperation('subtract')} />
          <AppButton label="Multiplicar" variant={operation === 'multiply' ? 'primary' : 'secondary'} onPress={() => setOperation('multiply')} />
          <AppButton label="Dividir" variant={operation === 'divide' ? 'primary' : 'secondary'} onPress={() => setOperation('divide')} />
        </View>

        <View style={[styles.resultBox, { backgroundColor: palette.tintSoft, borderColor: palette.border }]}>
          <Text style={[styles.resultLabel, { color: palette.muted }]}>Resultado</Text>
          <Text style={[styles.resultValue, { color: palette.text }]}>{formatResult(result)}</Text>
        </View>
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
  inputsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    flex: 1,
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  operations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  resultBox: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    gap: 6,
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: '900',
  },
});
