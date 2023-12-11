import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./Components/Homepage/Homepage.jsx";
import SecondPage from "./Components/SecondPage/SecondPage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import Register from "./Components/RegisterPage/RegisterPage.jsx";
import InAttesa from "./Components/InApprovazione/Inattesa.jsx";
import PwDimenticata from "./Components/LoginPage/PwDimenticata/PwDimenticata.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="InAttesa" component={InAttesa} />
        <Stack.Screen name="PwDimenticata" component={PwDimenticata} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

