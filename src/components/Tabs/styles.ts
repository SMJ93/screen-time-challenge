import { StyleSheet, ViewStyle } from "react-native";

interface Styles {
  tabs: ViewStyle
}

export default StyleSheet.create<Styles>({
  tabs: {
    flexDirection: "row",
    marginHorizontal: 20
  }
})
