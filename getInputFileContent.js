import fs from 'node:fs';

export const getInputFileContent = (filePath) => {
  const fileContentBuffer = fs.readFileSync(filePath)
  return fileContentBuffer.toString()
}