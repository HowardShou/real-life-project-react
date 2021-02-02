import { useState } from 'react'

const Image = () => {
  const [pic, setPic] = useState('')
  const [data, setData] = useState('')

  const handleClick1 = () => {
    const fetchData = async () => {
      const res = await fetch('https://picsum.photos/500/500')
      if (res.ok) setPic(res.url)
    }
    fetchData()
  }

  const handleClick2 = () => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data
      if (res.ok) {
        data = await res.json()
        console.log('🚹🚺🚻🛏️🚼 ~ file: index.js ~ line 21 ~ fetchData ~ data', data)
        setData(JSON.stringify(data))
      }
    }
    fetchData()
  }

  //   useEffect(() => {

  //   }, [])
  return (
    <div>
      <button onClick={handleClick1}>fetch img</button>
      <button onClick={handleClick2}>fetch json placeholder</button>
      <div>
        <img src={pic} />
        <div>{data}</div>
      </div>
    </div>
  )
}

export default Image
