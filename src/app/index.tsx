import React, { useState } from "react"
import { ScrollView } from "react-native"

import { Text, Tabs, AppUsage } from "../components"
import { Tab } from "../enums"

import styles from "./styles"

export default function App() {
  const [activeTab, setActiveTab] = useState(Tab.TODAY)

  return (
    <ScrollView style={styles.screen}>
      <Text type="title">Screen Time</Text>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <AppUsage activeTab={activeTab} />
    </ScrollView>
  )
}
