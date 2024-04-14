const STONES_TO_WIN = 5

const checkIsEnoughStonesInHorizontalLine = (userStones) => {
  return userStones.find((startStone) => {
    for(let foundStones = 1; foundStones < STONES_TO_WIN; foundStones++) {
      if(!userStones.find(searchedStone => searchedStone.rowId === startStone.rowId && searchedStone.columnId === startStone.columnId + foundStones)) {
        return false
      }
    }
    return true
  }) ?? false
}

const checkIsEnoughStonesInVerticalLine = (userStones) => {
  return userStones.find((startStone) => {
    for(let foundStones = 1; foundStones < STONES_TO_WIN; foundStones++) {
      if(!userStones.find(searchedStone => searchedStone.rowId === startStone.rowId + foundStones && searchedStone.columnId === startStone.columnId)) {
        return false
      }
    }
    return true
  }) ?? false
}

const checkIsEnoughStonesInPrimaryDeahonalLine = (userStones) => {
  return userStones.find((startStone) => {
    for(let foundStones = 1; foundStones < STONES_TO_WIN; foundStones++) {
      if(!userStones.find(searchedStone => searchedStone.rowId === startStone.rowId + foundStones && searchedStone.columnId === startStone.columnId + foundStones)) {
        return false
      }
    }
    return true
  }) ?? false
}

const checkIsEnoughStonesInSecondaryDeahonalLine = (userStones) => {
  const sequenceHead = userStones.find((startStone) => {
    for(let foundStones = 1; foundStones < STONES_TO_WIN; foundStones++) {
      if(!userStones.find(searchedStone => searchedStone.rowId === startStone.rowId + foundStones && searchedStone.columnId === startStone.columnId - foundStones)) {
        return false
      }
    }
    return true
  })
  return sequenceHead ? {
    rowId: sequenceHead.rowId + STONES_TO_WIN - 1,
    columnId: sequenceHead.columnId - STONES_TO_WIN + 1,
  } : false
}

export const checkIsUserWinner = (userStones) => {
  return checkIsEnoughStonesInHorizontalLine(userStones) || checkIsEnoughStonesInVerticalLine(userStones) || checkIsEnoughStonesInPrimaryDeahonalLine(userStones) || checkIsEnoughStonesInSecondaryDeahonalLine(userStones)
}