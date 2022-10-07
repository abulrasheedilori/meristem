import { StyleSheet, Platform } from "react-native";
import { Colors } from "react-native-paper";
import { TextStyles } from "../../assets/constants/TextStyles";

export const platform = StyleSheet.create({
  screen:
    Platform.OS == "ios"
      ? {
          marginTop: 70,
          width: "100%",
          height: "100%",
        }
      : {
          marginTop: 40,
          width: "100%",
          height: "100%",
        },
});

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    width: 50, height: 150,
    tintColor: Colors.amber900,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    textAlign: "center",
    padding: 5,
    ...TextStyles.title,
  },

  images:{
    width: '90%',
    height: 200,
    margin: '5%',
    borderRadius: 10
  },

  productSV:{
    width: 'auto',
    height: 'auto'
  },
  productContainer:{
    width: '100%',
    height: '100%',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50
  },

  productImage:{
    width: 100,
    height: 100,
    borderRadius: 20
  },

  productLabel:{
    textAlign: "center",
    fontSize: 12,
    fontWeight: 'bold',
    color: 'green'
  },
  productMenu:{
    marginVertical: 10
  },

  message: {
    textAlign: "center",
  },

  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 10,
  },



  loginCard: {
    width: "96%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
    marginVertical: 20,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: Colors.white,
  },

  icon: {
    width: "20%",
    height: 40,
    borderWidth: 2,
  },

  textInputCont: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 10,
    marginHorizontal: "5%",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'white'
  },

  textInput: {
    width: "90%",
    height: 50,
    paddingLeft: 5,
    color: 'green',
    fontSize: 22,
    // fontWeight: 'bold'
  },
  
  link:{
      color: Colors.amberA700,
      fontSize: 18,
      fontWeight: "bold",

  },

  btn: {
    width: "90%",
    height: 50,
    marginVertical: 20,
    marginHorizontal: "5%",
    borderRadius: 10,
    backgroundColor: "green",
  },

  btnText: {
    ...TextStyles.btnText,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});
