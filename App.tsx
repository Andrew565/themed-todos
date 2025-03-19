import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import ThemeSelectorProvider from "./context/ThemeContext";

const Stack = createNativeStackNavigator();

export default function App() {
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
