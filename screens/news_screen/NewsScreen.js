// import axios from "axios";
import React, {memo, Suspense, useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image, ScrollView, TouchableOpacity
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../login_screen/LoginStyles";
import { Colors } from "react-native-paper";
import Loading from "../components/Loading";


//lazy loading component
// const LazyNewsItem = React.lazy(() => import("../components/NewsItem"));

const NewsScreen = React.memo(({ navigation }) => {

  return (
    <ImageBackground
      style={{ flex: 1, marginTop: 30 }}
      source={require("../../assets/images/news_bg_gradient.png")}
    >
      <StatusBar backgroundColor="green" />
      <View>
        <Text style={styles.title}>Meristem</Text>
      </View>

      <View>
        <Image style={styles.images} source={require("../../assets/images/landing_page.png")} />
      </View>

      <ScrollView style={styles.productSV}>
      <Text style={{ ...styles.title, fontSize: 22}}> Products And Services</Text>
        <View style={styles.productContainer}>
          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/invest.png")} />
            <Text style={styles.productLabel}>Invest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/stock.png")} />
            <Text style={styles.productLabel}>Stock Trading</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/estate.png")} />
            <Text style={styles.productLabel}>Estates And Trustees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/financial.png")} />
            <Text style={styles.productLabel}>Financial Advisory</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/wealth.png")} />
            <Text style={styles.productLabel}>Wealth Management</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/registrars.png")} />
            <Text style={styles.productLabel}>Registrars And Probate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productMenu} onPress={null}>
            <Image style={styles.productImage} source={require("../../assets/images/loans.png")} />
            <Text style={styles.productLabel}>Loans And Leases</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
    </ImageBackground>
  );
});
export default NewsScreen;
