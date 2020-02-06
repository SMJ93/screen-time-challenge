import { StyleSheet, TextStyle } from "react-native";

interface Styles {
  text: TextStyle,
  title: TextStyle,
  tabLabel: TextStyle,
  subTitle: TextStyle,
  body: TextStyle,
  underline: TextStyle
}

export default StyleSheet.create<Styles>({
  text: {
    color: "#333",
    marginVertical: 20,
    textTransform: "uppercase"
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  tabLabel: {
    fontSize: 18
  },
  subTitle: {
    fontSize: 16
  },
  body: {
    fontSize: 14,
    textTransform: "none"
  },
  underline: {
    textDecorationLine: "underline"
  }
})
