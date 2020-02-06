import React, { ReactNode } from "react"
import { Text } from "react-native"
import styles from "./styles"


interface Props {
  type?: "title" | "tabLabel" | "subTitle" | "body",
  children: ReactNode,
  underline?: boolean
}

export default function TextComponent({type = "body", underline = false, ...props}: Props) {
  return (
    <Text {...props} style={[
      styles.text,
      styles[type],
      underline && styles.underline
    ]} />
  )
}
