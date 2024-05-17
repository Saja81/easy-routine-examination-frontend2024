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
