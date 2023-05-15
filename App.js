// NOTE to setup navigation. install the npm and npx expo commands found in the docs. The individuall install the tabs and stack navigator found in the docs
// NOTE step 1 : npx expo install react-native-screens react-native-safe-area-context
// NOTE step 2: npm install react-native-screens react-native-safe-area-context
// NOTE step 3: npm install @react-navigation/native-stack
// NOTE step 4: npm install @react-navigation/bottom-tabs
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
