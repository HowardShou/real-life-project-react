import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'

const PagetitleTransformer = () => {
  const [notify, setNotify] = useState(false)

  useEffect(() => {
    let id = null
    const staticDocumentTitle = "Howard's React App"
    const newMsg = 'you got new message'
    const empty2 = '\u200E'
    // const empty1 = String.fromCharCode(8206) //alternative option
    //! const empty2 = `&lrm;` // this wont work

    if (notify) {
      id = setInterval(() => {
        if (document.title === staticDocumentTitle || document.title === empty2) document.title = newMsg
        else document.title = empty2
      }, [1000])
    } else {
      document.title = staticDocumentTitle
    }
    return () => {
      clearInterval(id)
    }
  }, [notify])

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={(e, value) => setNotify(!notify)}>
        click to see tab title transform
      </Button>
    </div>
  )
}

export default PagetitleTransformer
