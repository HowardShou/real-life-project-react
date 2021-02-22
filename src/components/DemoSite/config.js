import creditCard from 'assets/dynamic-credit-card-form.png'
import creditCardGif from 'assets/dynamic-credit-card-form.gif'
import debounceThrottle from 'assets/debounceThrottle.png'
import debounceThrottleGif from 'assets/debounceThrottle.gif'
import highlightText from 'assets/highlightText.png'
import highlightTextGif from 'assets/highlightText.gif'
import marquee from 'assets/dynamic-marquee.png'
import marqueeGif from 'assets/marquee.gif'
import ptotosFetcher from 'assets/simple-photos-distributor.png'
import photoFetcherGif from 'assets/photoFetcher.gif'
import pagetitleTransformer from 'assets/pagetitle-transformer.png'
import pagetitleTransformerGif from 'assets/pagetitle-transformer.gif'
import readingProgressBar from 'assets/reading-progress-bar.png'
import readingProgressBarGif from 'assets/readingProgress.gif'
import todo from 'assets/simple-Todo-List.png'
import todoGif from 'assets/todo.gif'
import cssVarApi from 'assets/cssVarApi.png'
import cssVarApiGif from 'assets/cssVarApi.gif'
import PATHES from 'constants/pathes'

const config = [
  {
    title: 'Fancy Credit Card Form',
    content: '123',
    image: creditCard,
    gif: creditCardGif,
    showGif: true,
    linkConfig: {
      pathname: PATHES.CREDIT_CARD_FORM,
    },
  },
  {
    title: 'Multifunction Todo List',
    content: '456',
    image: todo,
    gif: todoGif,
    showGif: true,
    linkConfig: {
      pathname: PATHES.TODOLIST,
    },
  },
  {
    title: 'Photo Fetcher',
    content: '789',
    image: ptotosFetcher,
    gif: photoFetcherGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.PHOTOS_FETCHER,
    },
  },
  {
    title: 'Pagetitle transformer',
    content: '789',
    image: pagetitleTransformer,
    gif: pagetitleTransformerGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.PAGETITLE_TRANSFORMER,
    },
  },
  {
    title: 'Dynamic Reading Progress Bar',
    content: '012',
    image: readingProgressBar,
    gif: readingProgressBarGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-reading-progress-bar',
    },
  },
  {
    title: 'Debounce And Throttle',
    content: '012',
    image: debounceThrottle,
    gif: debounceThrottleGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#debounce-and-throttle',
    },
  },
  {
    title: 'Highlight Text',
    content: '012',
    image: highlightText,
    gif: highlightTextGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#highlight-text',
    },
  },
  {
    title: 'Dynamic Marquee',
    content: '345',
    image: marquee,
    gif: marqueeGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-marquee',
    },
  },
  {
    title: 'Access CSS Variable in Valina JS',
    content: '345',
    image: cssVarApi,
    gif: cssVarApiGif,
    showGif: false,
    linkConfig: {
      pathname: PATHES.ONLINE_DEMOS,
      hash: '#dynamic-marquee',
    },
  },
]

export default config
