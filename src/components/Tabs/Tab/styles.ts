import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  tab: ViewStyle,
  activeTab: ViewStyle,
  isLastTab: ViewStyle
}

export default StyleSheet.create<Styles>({
  tab: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  activeTab: {
    backgroundColor: "#C0C0C0"
  },
  isLastTab: {
    borderLeftWidth: 0
  }
})
