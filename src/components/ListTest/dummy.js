const dummyGen = () => {
  const arr = []
  let i = 0
  while (i < 5000) {
    // arr.push({ value: Math.random() * 50 });
    arr.push({ value: i })
    i++
  }
  return arr
}

export default dummyGen
