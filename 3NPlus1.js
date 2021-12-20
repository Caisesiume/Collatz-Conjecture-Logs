(async () => {
/* 3n + 1 algorithm by @Caisesiume
* startCount(startingNumber, LastTestNumber)
*/
const stats = await startCount(1,50);


async function resetN(start, numbers) {
  if (start === 1) {
    console.log(`______Start nr ${start}______`);
    numbers.push(start)
  }
  return start++
}

async function checkIfLongest(array, obj, startNr) {
  if (obj.longest < array.length) {
    obj.longest = array.length;
    obj.longestAt = startNr;
  }
  obj.visitedNodes = obj.visitedNodes + array.length
  return obj;
}

async function checkIfHighest(array, obj, startNr) {
  if (array.length > 0) {
    if (obj.highest < Math.max(array)) {
      console.log(array);
      obj.highest = Math.max(array);
      obj.highestIn = startNr
    }
  }
  return obj;
}

async function startCount(startFrom, upperLimit) {
  let n = startFrom  //Math.floor(Math.random() * 10)
  let startNumber = n
  let visitedNumbers = [];
  let statsObject = {
    "highest": 0,
    "highestIn": 0,
    "longest": 0,
    "longestAt": 0,
    "iterations": 0,
    "visitedNodes": 0
  }

  for (startNumber; startNumber < upperLimit; startNumber + 0) {
    if (visitedNumbers.includes(n) || n <= 1) {
      let newNstart = await resetN(startNumber, visitedNumbers)
      if (!visitedNumbers.includes(1)) {
        visitedNumbers.push(1);
      }
      n = newNstart;
      console.log(`Visited numbers: \n ${visitedNumbers}`);
      console.log(`Count of numbers visited: ${visitedNumbers.length}`);
      console.log(`________________________`);
      console.log(`______ Start nr ${startNumber} ______`);
      statsObject = await checkIfLongest(visitedNumbers, statsObject, startNumber);
      if (visitedNumbers.length > 0) {
        if (Math.max.apply(null, visitedNumbers) > statsObject.highest) {
          statsObject.highest = Math.max.apply(null, visitedNumbers);
          statsObject.highestIn = startNumber
        } else if (Math.max.apply(null, visitedNumbers) == statsObject.highest) {
          let array1 = [statsObject.highestIn];
          array1.push(startNumber)
          statsObject.highestIn = array1;
        }
      }
      startNumber++;
      visitedNumbers = []
      continue;
    } else {
      if (n % 2 == 0) {
        visitedNumbers.push(n)
        n = n/2
        console.log(`Divided by 2 -> ${n}`);
      } else {
        visitedNumbers.push(n)
        n = 3* n + 1
        console.log(`3n + 1 -> ${n}`);
      }
    }
  }
  statsObject.iterations = startNumber
  return statsObject;
}
console.log(`--------------- TOTAL STATS -------------`);
console.log(`Highest counted integer: ${stats.highest}`);
console.log(`Highest integer (${stats.highest}) found in: #${stats.highestIn}`);
console.log(`----------------------------------------------`);
console.log(`Number ${stats.longestAt} had the longest sequences of ${stats.longest} nodes`);
console.log(`----------------------------------------------`);
console.log(`Total amount of nodes visited: ${stats.visitedNodes}`);
console.log(`----------------------------------------------`);
console.log(`sequences counted: ${stats.iterations}`);
})();
