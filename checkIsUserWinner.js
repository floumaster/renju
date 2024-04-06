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

const checkIsEnoughStonesInDeahonalLine = (userStones) => {
  return userStones.find((startStone) => {
    for(let foundStones = 1; foundStones < STONES_TO_WIN; foundStones++) {
      if(!userStones.find(searchedStone => searchedStone.rowId === startStone.rowId + foundStones && searchedStone.columnId === startStone.columnId + foundStones)) {
        return false
      }
    }
    return true
  }) ?? false
}

export const checkIsUserWinner = (userStones) => {
  return checkIsEnoughStonesInHorizontalLine(userStones) || checkIsEnoughStonesInVerticalLine(userStones) || checkIsEnoughStonesInDeahonalLine(userStones)
}