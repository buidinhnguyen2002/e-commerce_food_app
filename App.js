import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/Navigation/AppNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}


