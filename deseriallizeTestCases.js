const FIELD_Y_SIZE = 19

export const deseriallizeTestCases = (seriallizedTestCases) => {
  const testCases = []
  let testCase = []
  seriallizedTestCases.split('\r\n').forEach(line => {
    const parsedToNumberLine = line.split('').map(char => parseInt(char))
    if (testCase.length < FIELD_Y_SIZE) {
      testCase.push(parsedToNumberLine)
    } else {
      testCases.push([...testCase])
      testCase = [parsedToNumberLine]
    }
  })
  if (testCase.length >= FIELD_Y_SIZE) {
    testCases.push([...testCase])
  }
  return testCases
}