import { getInputFileContent } from './getInputFileContent.js'
import { checkIsUserWinner } from './checkIsUserWinner.js'
import { deseriallizeTestCases } from './deseriallizeTestCases.js'

const INPUT_FILE_PATH = './input.txt'
const NEW_LINE_CHARACTERS = '\r\n'
const TEST_CASES_NUMBER_POSITION = 0
const FIRST_USER_STONE_VALUE = 1
const SECOND_USER_STONE_VALUE = 2

const parsedFileContent = getInputFileContent(INPUT_FILE_PATH)
const testCasesNumber = parsedFileContent[TEST_CASES_NUMBER_POSITION]
const seriallizedTestCases = parsedFileContent.slice(TEST_CASES_NUMBER_POSITION + NEW_LINE_CHARACTERS.length + 1)
const testCases = deseriallizeTestCases(seriallizedTestCases)
const limitedTestCases = testCases.slice(0, testCasesNumber) 
limitedTestCases.forEach((testCase, id) => {
  console.table(testCase)
  const firstUserStones = []
  const seconsUserStones = []
  testCase.forEach((row, rowId) => {
    row.forEach((value, columnId) => {
      if (value === FIRST_USER_STONE_VALUE) {
        firstUserStones.push({
          rowId,
          columnId
        })
      } else if (value === SECOND_USER_STONE_VALUE){
        seconsUserStones.push({
          rowId,
          columnId
        })
      }
    })
  })
  const isFirstUserWinner = checkIsUserWinner(firstUserStones)
  const isSecondUserWinner = checkIsUserWinner(seconsUserStones)
  if(isFirstUserWinner) {
    console.log(`${FIRST_USER_STONE_VALUE}
${isFirstUserWinner.rowId + 1} ${isFirstUserWinner.columnId + 1}`)
  }
  else if (isSecondUserWinner) {
    console.log(`${SECOND_USER_STONE_VALUE}
${isSecondUserWinner.rowId + 1} ${isSecondUserWinner.columnId + 1}`)
  }
  else {
    console.log('0')
  }
})

