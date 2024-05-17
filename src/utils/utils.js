// src/utils.js

export const sortingFunction = (a, b) => {
  const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]
  const dayA = a.node.dag
  const dayB = b.node.dag
  const indexA = weekdays.indexOf(dayA)
  const indexB = weekdays.indexOf(dayB)

  if (indexA > indexB) {
    return -1
  }
  if (indexA < indexB) {
    return 1
  }
  return 0
}

export const getWeek = date => {
  const onejan = new Date(date.getFullYear(), 0, 1)
  const millisecsInDay = 86400000
  return Math.ceil(((date - onejan) / millisecsInDay + onejan.getDay() + 1) / 7)
}

export const getCurrentWeekInfo = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const weekNumber = getWeek(now)
  const weekDays = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ]
  const weekDayName = weekDays[dayOfWeek]

  return {
    now,
    dayOfWeek,
    weekNumber,
    weekDays,
    weekDayName,
  }
}

export const getMenusForWeek = weekNumber => {
  let menuOne = null
  let menuTwo = null
  let menuThree = null
  let menuFour = null

  if (weekNumber === 1 || weekNumber % 4 === 0) {
    menuOne = "menyV1"
  } else if (weekNumber === 2 || weekNumber % 4 === 1) {
    menuTwo = "menyV2"
  } else if (weekNumber === 3 || weekNumber % 4 === 2) {
    menuThree = "menyV3"
  } else if (weekNumber === 4 || weekNumber % 4 === 3) {
    menuFour = "menyV4"
  }

  return { menuOne, menuTwo, menuThree, menuFour }
}
