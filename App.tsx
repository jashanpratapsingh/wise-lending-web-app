const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOME from "./screens/HOME";
import Frame from "./screens/Frame";
import Payouts from "./screens/Payouts";
import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import BusinessHome from "./screens/BusinessHome";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Payouts1 from "./screens/Payouts1";
import HOME1 from "./screens/HOME1";
import CreditOriginal from "./screens/CreditOriginal";
import CreditTransactionVariation from "./screens/CreditTransactionVariation";
import CreditTransactionVariation1 from "./screens/CreditTransactionVariation1";
import CreditTransactionMinorButto from "./screens/CreditTransactionMinorButto";
import BusinessHomeVariation from "./screens/BusinessHomeVariation";
import PotentialVariation from "./screens/PotentialVariation";
import BusinessHomeVariation1 from "./screens/BusinessHomeVariation1";
import CreditOriginal1 from "./screens/CreditOriginal1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payouts"
              component={Payouts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHome"
              component={BusinessHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payouts1"
              component={Payouts1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME1"
              component={HOME1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditOriginal"
              component={CreditOriginal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionVariation"
              component={CreditTransactionVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionVariation1"
              component={CreditTransactionVariation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditTransactionMinorButto"
              component={CreditTransactionMinorButto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomeVariation"
              component={BusinessHomeVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PotentialVariation"
              component={PotentialVariation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BusinessHomeVariation1"
              component={BusinessHomeVariation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditOriginal1"
              component={CreditOriginal1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
