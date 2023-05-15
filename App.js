// NOTE to setup navigation. install the npm and npx expo commands found in the docs. The individuall install the tabs and stack navigator found in the docs
// NOTE step 1 : npx expo install react-native-screens react-native-safe-area-context
// NOTE step 2: npm install react-native-screens react-native-safe-area-context
// NOTE step 3: npm install @react-navigation/native-stack
// NOTE step 4: npm install @react-navigation/bottom-tabs
import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Global } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Global.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Global.colors.primary500 },
        tabBarActiveTintColor: Global.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              // NOTE we had double headers since we are using the stack and bottom tabs. So we are hiding one of the headers
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
