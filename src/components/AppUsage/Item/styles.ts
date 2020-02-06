import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  item: ViewStyle,
  imagePlaceholder: ViewStyle,
  isLastItem: ViewStyle,
  textContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  item: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderBottomWidth: 0,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  imagePlaceholder: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#C0C0C0"
  },
  isLastItem: {
    borderBottomWidth: 2
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10
  }
})
