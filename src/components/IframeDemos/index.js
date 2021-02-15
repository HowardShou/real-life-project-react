import { useEffect, useCallback } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'

const iframeWidth = {
  width: '100%',
}

function ReadingProgressBar() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='dynamic-reading-progress-bar'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Dynamic Reading Progress Bar`}</Box>
      </Typography>
      <iframe
        height='640'
        style={iframeWidth}
        scrolling='no'
        title='dynamic progress bar depends on scroll height'
        src='https://codepen.io/Aksas/embed/RwGYXRE?height=640&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency
        allowFullScreen
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/RwGYXRE'>dynamic progress bar depends on scroll height</a> by
        HowardShou (<a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function DebounceThrottleDemo() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='debounce-and-throttle'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Debounce And Throttle`}</Box>
      </Typography>
      <iframe
        height='585'
        style={iframeWidth}
        scrolling='no'
        title='debounce and throttle'
        src='https://codepen.io/Aksas/embed/QWyYgyG?height=585&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen='true'
      >
        See the Pen <a href='https://codepen.io/Aksas/pen/QWyYgyG'>debounce and throttle</a> by HowardShou (
        <a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

function DynamicMarquee() {
  return (
    <Box mb={3}>
      <Typography component='div' variant='h4' id='dynamic-marquee'>
        <Box mb={2} color='common.black' letterSpacing={1}>{`Dynamic Marquee`}</Box>
      </Typography>
      <iframe
        height='500'
        style={iframeWidth}
        scrolling='no'
        title='Dynamic Marquee(controled by web animation api)'
        src='https://codepen.io/Aksas/embed/WNrzWKz?height=265&theme-id=dark&default-tab=js,result'
        frameBorder='no'
        loading='lazy'
        allowtransparency
        allowFullScreen
      >
        See the Pen{' '}
        <a href='https://codepen.io/Aksas/pen/WNrzWKz'>Marquee control by js example(controled by web animation api)</a>
        by HowardShou (<a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
    </Box>
  )
}

const Iframes = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const a = document.body.appendChild(document.createElement('a'))
      a.href = location.hash
      a.click()
      document.body.removeChild(a)
    }
  }, [location.hash])

  return (
    <Box display='flex' width='80%' maxWidth='80%' flexDirection='column' justifyContent='centerer'>
      <ReadingProgressBar />
      <DebounceThrottleDemo />
      <DynamicMarquee />
    </Box>
  )
}

export default Iframes
