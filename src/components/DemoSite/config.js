import creditCard from 'assets/dynamic-credit-card-form.png'
import todo from 'assets/simple-Todo-List.png'
import marquee from 'assets/dynamic-marquee.png'
import readingProgressBar from 'assets/reading-progress-bar.png'
import debounceThrottle from 'assets/debounce-and-throttle.png'
import ptotos from 'assets/simple-photos-distributor.png'
import PATHES from 'constants/pathes'

const config = [
  {
    title: 'Fancy Credit Card Form',
    content: '123',
    image: creditCard,
    linkConfig: {
      pathname: PATHES.CREDIT_CARD_FORM,
    },
  },
  {
    title: 'Multifunction Todo List',
    content: '456',
    image: todo,
    linkConfig: {
      pathname: PATHES.TODOLIST,
    },
  },
  {
    title: 'Photo Fetcher',
    content: '789',
    image: ptotos,
    linkConfig: {
      pathname: PATHES.PHOTOS_FETCHER,
    },
  },
  {
    title: 'Dynamic Reading Progress Bar',
    content: '012',
    image: readingProgressBar,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-reading-progress-bar',
    },
  },
  {
    title: 'Debounce And Throttle',
    content: '012',
    image: debounceThrottle,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#debounce-and-throttle',
    },
  },
  {
    title: 'Dynamic Marquee',
    content: '345',
    image: marquee,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-marquee',
    },
  },
]

export default config
