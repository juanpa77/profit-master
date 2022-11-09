
export const newArrayOfNumbers = (length: number) => {
  const voidArray = Array(length).fill(0)
  return voidArray.map((_, i) => { return `${i + 1}` })
}