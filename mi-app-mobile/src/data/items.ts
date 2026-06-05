export const feedItems = Array.from({ length: 12 }, (_, index) => ({
  id: `item-${index + 1}`,
  title: `Bloque ${index + 1}`,
  subtitle: `Elemento generado para la lista ${index + 1}`,
}));

export const profileHighlights = [
  'Navegación limpia',
  'Componentes reutilizables',
  'Validación básica de datos',
  'Diseño adaptable',
];
