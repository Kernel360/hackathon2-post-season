import sun from '@/assets/svg/sun.svg'
import sunCloud from '@/assets/svg/cloud-sun.svg'
import cloudy from '@/assets/svg/cloudy.svg'
import rain from '@/assets/svg/cloud-rain-wind.svg'

function getImageBySkyStatus(status) {
  switch (status) {
    case '1':
      return sun
    case '2':
      return sunCloud
    case '3':
      return cloudy
    case '4':
      return rain
    default:
      return `Can't get image`
  }
}

export default getImageBySkyStatus
