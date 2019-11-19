import { DefaultTheme, Colors } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 24,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.grey100,
    accent: Colors.grey900
  }
};
