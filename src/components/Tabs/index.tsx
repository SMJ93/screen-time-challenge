import React from "react"
import { View } from "react-native"

import { Tab } from "../../enums"

import TabComponent from "./Tab"
import styles from "./styles"

interface Props {
  activeTab: Tab,
  setActiveTab(newActiveTab: Tab): void
}

export default function TabsComponent({activeTab, setActiveTab}: Props) {
  const onPressTab = (newActiveTab: Tab) => setActiveTab(newActiveTab)

  return (
    <View style={styles.tabs}>
      <TabComponent activeTab={activeTab} onPress={onPressTab} tab={Tab.TODAY} label="Today" />
      <TabComponent activeTab={activeTab} onPress={onPressTab} tab={Tab.LAST_7_DAYS} label="Last 7 days" isLastTab />
    </View>
  )
}
