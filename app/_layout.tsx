import {DarkTheme, DefaultTheme} from '@/constants/Themes';
import {ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {useColorScheme} from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
}
