import React from "react"
import { TouchableHighlight } from "react-native"

import Text from "../../Text"
import { Tab } from "../../../enums"

import styles from "./styles"

interface Props {
  activeTab: Tab
  onPress(newActiveTab: Tab): void
  tab: Tab
  label: string
  isLastTab?: boolean
}

export default function TabComponent({activeTab, onPress, tab, label, isLastTab = false}: Props) {
  const onPressTab = () => onPress(tab)
  const isTabActive = activeTab === tab
  return (
      <TouchableHighlight onPress={onPressTab} underlayColor="#C0C0C0" style={[
        styles.tab,
        isTabActive && styles.activeTab,
        isLastTab && styles.isLastTab
      ]}>
        <Text underline={isTabActive} type="tabLabel">{label}</Text>
      </TouchableHighlight>
  )
}
