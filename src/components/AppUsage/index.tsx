import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Tab } from '../../enums'
import Text from "../Text"
import { getAppUsage } from '../../api'
import styles from "./styles"
import Item from './Item'

interface Props {
  activeTab: Tab
}

export default function AppUsage({activeTab}: Props) {
  const [appUsage, setAppUsage] = useState([])

  useEffect(() => {
    (async function anyNameFunction() {
      const numberOfDays = activeTab === Tab.TODAY ? 1 : 7
      const newAppUsage = await getAppUsage(numberOfDays)
      setAppUsage(newAppUsage)
    })();
  }, [activeTab])

  const subtitle = activeTab === Tab.TODAY
    ? "Most used apps today"
    : "Most used apps in the last 7 days"

  return (
    <View style={styles.appUsage}>
      <Text type="subTitle">{subtitle}</Text>
      {appUsage.map((item, i) => (
        <Item key={i} item={item} isLastItem={i === appUsage.length - 1} />
      ))}
    </View>
  )
}
