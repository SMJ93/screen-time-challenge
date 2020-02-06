import {NativeModules} from "react-native"

export async function getAppUsage(numberOfDays: number) {
  return numberOfDays === 1 ? mocked1DayResponse : mocked7DayResponse

  // @todo finish off native api so it returns data
  try {
    const response = await NativeModules.AppUsage.getAppUsage(numberOfDays)
    console.log("response", response)
  } catch (e) {
    console.error(e);
  }
}

const mocked1DayResponse = [
  {
    icon: null,
    name: "Instagram",
    time: "40min"
  },
  {
    icon: null,
    name: "Slack",
    time: "35min"
  },
  {
    icon: null,
    name: "Chrome",
    time: "20min"
  },
  {
    icon: null,
    name: "Snapchat",
    time: "17min"
  }
]

const mocked7DayResponse = [
  {
    icon: null,
    name: "Instagram",
    time: "7hr 50min"
  },
  {
    icon: null,
    name: "Twitter",
    time: "1hr 55min"
  },
  {
    icon: null,
    name: "Chrome",
    time: "40min"
  },
  {
    icon: null,
    name: "Facebook",
    time: "37min"
  }
]
