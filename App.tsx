import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import ThemeSelectorProvider from "./data/ThemeContext";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Nashville: require("./assets/fonts/Nashville.ttf"),
    "Faerie Moot Simple": require("./assets/fonts/Faerie Moot Simple.ttf"),
    "Code Squared": require("./assets/fonts/Code Squared.ttf"),
  });

  if (!fontsLoaded || fontsError) {
    return null; // or a loading indicator
  }

  return (
    <ThemeSelectorProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeSelectorProvider>
  );
}
