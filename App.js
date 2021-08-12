import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./source/views/login/login";
import Home from "./source/views/home/home";
import Deposit from "./source/views/deposit/deposit";
import SendMoney from "./source/views/sendMoney/send";
import AddContact from "./source/views/addContact/addContact";
import SendMoneyToContact from "./source/views/sendMoneyToContact/sendMoneyToContact";
import Successful from "./source/views/successful/successful";
import Services from "./source/views/services/services";

export const Context = createContext();
function App() {
  const [contact, setContact] = useState([
    {
      key: "012180015789508577",
      bank: "Interbank",
      name: "Rivaldo Esteban",
      email: "rivaldoestebang@gmail.com",
    },
  ]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentContact, setCurrentContact] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([
    {
      time: { hour: 14, minutes: 55 },
      amount: 216.9,
      concept: "Mcdonalds",
      ref: 12313,
    },
  ]);
  const [balance, setBalance] = useState("15000");
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Context.Provider
        value={{
          login: { value: isSignedIn, setIsSignedIn },
          contacts: { value: contact, setContact },
          contact: { value: currentContact, setCurrentContact },
          history: { value: paymentHistory, setPaymentHistory },
          balance: { value: balance, setBalance },
        }}
      >
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Depositar"
                component={Deposit}
                options={{
                  title: "Depositar",
                  headerStyle: { backgroundColor: "rgba(3, 26, 110, 1)" },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 16,
                  },
                }}
              />
              <Stack.Screen
                name="SendMoney"
                component={SendMoney}
                options={{
                  title: "Enviar dinero a:",
                  headerStyle: { backgroundColor: "rgba(3, 26, 110, 1)" },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 16,
                  },
                }}
              />
              <Stack.Screen
                name="AddContact"
                component={AddContact}
                options={{
                  title: "Nuevo contacto",
                  headerStyle: { backgroundColor: "rgba(3, 26, 110, 1)" },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 16,
                  },
                }}
              />
              <Stack.Screen
                name="SendMoneyToContact"
                component={SendMoneyToContact}
                options={{
                  title: "Enviar dinero",
                  headerStyle: { backgroundColor: "rgba(3, 26, 110, 1)" },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 16,
                  },
                }}
              />
              <Stack.Screen
                name="Services"
                component={Services}
                options={{
                  title: "Servicios",
                  headerStyle: { backgroundColor: "rgba(3, 26, 110, 1)" },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontWeight: "700",
                    fontSize: 16,
                  },
                }}
              />
              <Stack.Screen
                name="Successful"
                component={Successful}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </Context.Provider>
    </NavigationContainer>
  );
}

export default App;
