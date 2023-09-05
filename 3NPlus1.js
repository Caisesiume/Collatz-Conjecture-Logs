(async() => {
    /* 3n + 1 algorithm by @Caisesiume
     * startCount(startingNumber, LastTestNumber)
     */
    const stats = await startCount(1, 50000);

    async function resetN(start, numbers) {
        console.log(`______ Start nr ${start} ______`);
        numbers.push(start);
    }

    async function checkIfLongest(array, obj, startNr) {
        if (array.length > obj.longest) {
            obj.longest = array.length;
            obj.longestAt = startNr;
        }
        obj.visitedNodes += array.length;
    }

    async function checkIfHighest(array, obj, startNr) {
        const maxVal = Math.max(...array);
        if (maxVal > obj.highest) {
            console.log(array);
            obj.highest = maxVal;
            obj.highestIn = startNr;
        } else if (maxVal === obj.highest) {
            obj.highestIn = [obj.highestIn, startNr];
        }
    }

    async function startCount(startFrom, upperLimit) {
        let n = startFrom;
        let startNumber = n;
        let visitedNumbers = [];
        let statsObject = {
            highest: 0,
            highestIn: 0,
            longest: 0,
            longestAt: 0,
            iterations: 0,
            visitedNodes: 0,
        };

        while (startNumber < upperLimit) {
            if (visitedNumbers.includes(n) || n <= 1) {
                await resetN(startNumber, visitedNumbers);
                if (!visitedNumbers.includes(1)) {
                    visitedNumbers.push(1);
                }
                n = startNumber;
                console.log(`Visited numbers: \n ${visitedNumbers}`);
                console.log(`Count of numbers visited: ${visitedNumbers.length}`);
                console.log(`________________________`);
                console.log(`______ Start nr ${startNumber} ______`);
                checkIfLongest(visitedNumbers, statsObject, startNumber);

                if (visitedNumbers.length > 0) {
                    checkIfHighest(visitedNumbers, statsObject, startNumber);
                }

                startNumber++;
                visitedNumbers = [];
                continue;
            } else {
                if (n % 2 === 0) {
                    visitedNumbers.push(n);
                    n = n / 2;
                    console.log(`Divided by 2 -> ${n}`);
                } else {
                    visitedNumbers.push(n);
                    n = 3 * n + 1;
                    console.log(`3n + 1 -> ${n}`);
                }
            }
        }
        statsObject.iterations = startNumber;
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
    console.log(`Sequences counted: ${stats.iterations}`);
})();