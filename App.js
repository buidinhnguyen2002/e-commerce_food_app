import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/Navigation/AppNavigation";
import { Provider } from "react-redux";
import store from "./src/store/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}


