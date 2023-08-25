// 3n + 1 algorithm by @Caisesiume
#include <stdio.h>

typedef struct {
    int length;
    int highestValue;
} SequenceInfo;

SequenceInfo collatzSequence(int n) {
    SequenceInfo info;
    info.length = 1;
    info.highestValue = n;
    printf("%d: ", n);

    while (n != 1) {
        printf("%d, ", n);
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        if (n > info.highestValue) {
            info.highestValue = n;
        }
        info.length++;
    }
    printf("1\n");
    return info;
}

int main() {
    int upperLimit = 50;
    int highestNumber = 0;
    int highestNumberIteration = 0;
    int overallHighest = 0;
    int longest = 0;
    int longestIteration = 0;
    int totalVisited = 0;
    int totalSequences = 0;

    for (int i = 1; i <= upperLimit; i++) {
        SequenceInfo sequenceInfo = collatzSequence(i);
        totalVisited += sequenceInfo.length;
        totalSequences++;

        if (i > highestNumber) {
            highestNumber = i;
        }

        if (sequenceInfo.length > longest) {
            longest = sequenceInfo.length;
            longestIteration = i;
        }

        if (sequenceInfo.highestValue > overallHighest) {
            overallHighest = sequenceInfo.highestValue;
            highestNumberIteration = i;
        }
    }

    printf("\n-----STATS AFTER CALCULATIONS-----\n");
    printf("Overall highest integer reached: %d, reached in iteration %d\n", overallHighest, highestNumberIteration);
    printf("Longest sequence: %d nodes, occurred in iteration: %d\n", longest - 1, longestIteration);
    printf("Total numbers (nodes) visited: %d\n", totalVisited);
    printf("Amount of numbers (sequences) calculated: %d\n", totalSequences);

    return 0;
}