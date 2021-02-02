import { useState } from 'react'

const Image = () => {
  const [pic, setPic] = useState('')

  const handleClick = () => {
    const fetchData = async () => {
      const res = await fetch('https://picsum.photos/500/500')
      if (res.ok) setPic(res.url)
    }
    fetchData()
  }

  //   useEffect(() => {

  //   }, [])
  return (
    <div>
      <button onClick={handleClick}>fetch</button>
      <div>
        <img src={pic} />
      </div>
    </div>
  )
}

export default Image
