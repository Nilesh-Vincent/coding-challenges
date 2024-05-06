function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i = i + size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
  
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkedArray = chunkArray(myArray, 3);
  console.log(chunkedArray); 
  