// Action Types
export const ACTION_TYPE_WEATHER = 'setWeather'
export const ACTION_TYPE_WIND = 'setWind'
export const ACTION_TYPE_TEMPERATURE = 'setTemperature'

// Action Creators 작성하기
export function setWeatherActionCreator(weather) {
  return {
    type: ACTION_TYPE_WEATHER,
    payload: weather,
  }
}
