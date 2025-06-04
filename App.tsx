import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Oswald': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <PaperProvider>
      <Slot />
    </PaperProvider>
  );
}
