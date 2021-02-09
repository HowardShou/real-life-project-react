function ReadingProgressBar() {
  return (
    <iframe
      height='640'
      style={{ width: '100%' }}
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
  )
}

function DebounceThrottleDemo() {
  return (
    <iframe
      height='405'
      style={{ width: '100%' }}
      scrolling='no'
      title='debounce and throttle'
      src='https://codepen.io/Aksas/embed/QWyYgyG?height=800&theme-id=dark&default-tab=js,result'
      frameBorder='no'
      loading='lazy'
      allowtransparency
      allowFullScreen
    >
      See the Pen <a href='https://codepen.io/Aksas/pen/QWyYgyG'>debounce and throttle</a> by HowardShou (
      <a href='https://codepen.io/Aksas'>@Aksas</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
  )
}

function CreditCardForm() {
  return (
    <iframe
      src='https://codesandbox.io/embed/fancy-credit-card-form-igfpk?fontsize=14&hidenavigation=1&theme=dark'
      style={{ width: '100%', height: '600px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
      title='fancy credit card form'
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    ></iframe>
  )
}

const Iframes = () => {
  return (
    <div style={{ width: '100%' }}>
      {/* <CreditCardForm /> */}
      <ReadingProgressBar />
      <DebounceThrottleDemo />
    </div>
  )
}

export default Iframes
