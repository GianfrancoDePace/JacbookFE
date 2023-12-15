import React from "react";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./Components/Homepage/Homepage.jsx";
import SecondPage from "./Components/SecondPage/SecondPage.jsx";
import ThirdPage from "./Components/ThirdPage/ThirdPage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import Register from "./Components/RegisterPage/RegisterPage.jsx";
import InAttesa from "./Components/InApprovazione/Inattesa.jsx";
import PwDimenticata from "./Components/LoginPage/PwDimenticata/PwDimenticata.jsx";
import Profile from "./Components/ProfiloUtente/Utente.jsx";
import client from "./Connection.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="InAttesa" component={InAttesa} />
          <Stack.Screen name="PwDimenticata" component={PwDimenticata} />
          <Stack.Screen name="Utente" component={Profile} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;

