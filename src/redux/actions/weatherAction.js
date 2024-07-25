// Action Types
export const ACTION_TYPE_SET_WEATHER = 'setWeather'

export function setWeatherActionCreator(stadiumId, sky, wind, temperature) {
  return {
    type: ACTION_TYPE_SET_WEATHER,
    payload: { stadiumId, sky, wind, temperature },
  }
}
