import React from "react"
import { View } from "react-native"

import Text from "../../Text"
import { Tab } from "../../../enums"

import styles from "./styles"

interface Props {
  item: {
    icon: any,
    name: string,
    time: string
  },
  isLastItem?: boolean
}

export default function Item({item: {icon, name, time}, isLastItem = false}: Props) {
  return (
      <View style={[
        styles.item,
        isLastItem && styles.isLastItem
      ]}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
          <Text>{name}</Text>
          <Text>{time}</Text>
        </View>
      </View>
  )
}
