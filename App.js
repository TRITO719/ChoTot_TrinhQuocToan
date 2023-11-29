import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screen/Home"
import Sale1 from "./Screen/Sale1"
import Memb from "./Screen/Memb";
import Sp1 from "./Screen/Sp1";
import MuaSp from "./Screen/MuaSp";
import Comp from "./Screen/Comp";
import Sp2 from "./Screen/Sp2";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Sale1" component={Sale1}  />
        <Stack.Screen name="Memb" component={Memb}  />
        <Stack.Screen name="Sp1" component={Sp1}  />
        <Stack.Screen name="Sp2" component={Sp2}  />
        <Stack.Screen name="MuaSp" component={MuaSp}  />
        <Stack.Screen name="Comp" component={Comp}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


