function getCurrentSharpTime(isCurrentTimeRequired) {
  const now = new Date()
  let hours
  if (isCurrentTimeRequired) {
    hours = now.getHours().toString().padStart(2, '0')
  } else {
    hours = (now.getHours() - 1).toString().padStart(2, '0')
  }
  return `${hours}00`
}
export default getCurrentSharpTime
