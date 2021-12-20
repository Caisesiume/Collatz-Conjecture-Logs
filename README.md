# Random-Collatz-Conjecture
Random Collatz-Conjecture (3n+1) script logging each sequence in a given interval of integers. 

## How to use
Preferably executed with node.js, ``node 3NPlus1.js`` in terminal.

In `3NPlus1.js` the interval of numbers to calculate is defined on line 5.

Changing the arguments on line 5 to other integers will change the interval of numbers to calculate. Default is 1-49.
```js
3 ...
4 */
5 const stats = await startCount(1,50);
6
7 ...
```

### Output for each number in the interval
- Each operation in the Collatz-Conjecture,
- Lists all the visited numbers in order (e.g 5, 16, 8, 4, 2, 1),
- Total count of numbers visited.

### Output post calculation
- Highest integer reached and in what iteration(s) it's found,
- Longest sequence,
- Total numbers (nodes) visited,
- Amount of numbers (sequences) calculated.

## What is Collatz-Conjecture? 
<img src="http://online4hours.com/wp-content/uploads/2016/09/collatz.png" alt="Explaination of Collatz-Conjecture" />

<hr>

*DISCLAIMER*

*There is a minor bug where you input an interval, let's say 1 - 50, and it will stop counting at 48.*
