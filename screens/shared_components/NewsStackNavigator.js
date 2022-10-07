import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../news_screen/NewsScreen";

const NewsStack = createNativeStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerShown: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "green" },
          presentation: "card",
          title: "Home",
        }}
      />
    </NewsStack.Navigator>
  );
}

export default NewsStackScreen;
