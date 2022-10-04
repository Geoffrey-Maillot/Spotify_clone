export const chunkTable = (
  array: Array<string>,
  sizeChunk: number
): string[][] => {
  const result = [];
  if (array) {
    for (let i = 0; i < array.length; i += sizeChunk) {
      const chunk = array.slice(i, i + sizeChunk);
      result.push(chunk);
    }
  }
  return result;
};

export const flatAndMergeArray = (
  arrayId: string[][],
  arrayBool: any
): { id: string; liked: boolean | undefined }[] => {
  return arrayId.flat().map((id, i) => {
    return {
      id: id,
      liked: arrayBool.flat()[i],
    };
  });
};
