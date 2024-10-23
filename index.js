const plantData = [
  {
    plant_id: 1,
    name: 'Aloe Vera',
    watering_frequency: 7,
  },
  {
    plant_id: 2,
    name: 'Peace Lily',
    watering_frequency: 3,
  },
  {
    plant_id: 3,
    name: 'Spider Plant',
    watering_frequency: 5,
  },
  {
    plant_id: 4,
    name: 'Snake Plant',
    watering_frequency: 14,
  },
  {
    plant_id: 5,
    name: 'Fern',
    watering_frequency: 2,
  },
  {
    plant_id: 6,
    name: 'Cactus',
    watering_frequency: 10,
  },
  {
    plant_id: 7,
    name: 'Orchid',
    watering_frequency: 7,
  },
  {
    plant_id: 8,
    name: 'Bamboo',
    watering_frequency: 4,
  },
  {
    plant_id: 9,
    name: 'Money Plant',
    watering_frequency: 6,
  },
  {
    plant_id: 10,
    name: 'Lavender',
    watering_frequency: 8,
  },
]

// get next monday
const getMonday = () => {
  const date = new Date() // current date
  const currentDay = date.getDay() // getting currentDay
  const daysUntilNextMonday = currentDay === 0 ? 1 : 8 - currentDay // calculating the next monday depending on the currentDay
  const nextMOnday = new Date(date)
  nextMOnday.setDate(date.getDate() + daysUntilNextMonday) // setting next monday
  return nextMOnday
}

// const nextDate = getMonday()

// console.log(nextDate.toLocaleDateString())

// --------- Looping Throuhg Each Plant ------------

const isWeekend = (date) => {
  const currentDay = date.getDay()
  return currentDay === 0 || currentDay === 6
}

const waterSchedule = () => {
  const plantSchedule = {} // store plant name and dates
  const nextMonday = getMonday()

  // looping through each plant

  plantData.forEach((plant) => {
    const wateringFrequency = plant.watering_frequency
    const schedule = []

    // storing the first watering date (next monday)
    let currentDate = new Date(nextMonday)
    schedule.push(currentDate.toLocaleDateString())
    for (let i = 0; i < 84; i += wateringFrequency) {
      currentDate.setDate(currentDate.getDate() + wateringFrequency)
      if (isWeekend(currentDate)) {
        while (isWeekend(currentDate)) {
          currentDate.setDate(currentDate.getDate() + 1) // loop will go on untill the current date reaches the next weekday if the current day is weekend
        }
      }
      schedule.push(currentDate.toDateString())
    }
    plantSchedule[plant.name] = schedule
  })
  return plantSchedule
}

const uiSchedule = (plantSchedule) => {
  const uiDiv = document.getElementById('scheduleOutput')
  uiDiv.innerHTML = ''

  Object.keys(plantSchedule).forEach((plantName) => {
    const schedule = plantSchedule[plantName]

    const card = document.createElement('div')
    card.className = 'card'

    const heading = document.createElement('h3')
    heading.textContent = plantName
    card.appendChild(heading)

    const list = document.createElement('ul')

    schedule.forEach((date) => {
      const listItem = document.createElement('li')
      listItem.textContent = date
      list.appendChild(listItem)
    })
    card.appendChild(list)
    uiDiv.appendChild(card)
  })
}

document.getElementById('Btn').addEventListener('click', () => {
  const plantsSchedule = waterSchedule()
  uiSchedule(plantsSchedule)
})
