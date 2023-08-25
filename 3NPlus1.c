#include <stdio.h>

int collatzSequence(int n) {
    int length = 1;
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        length++;
    }
    return length;
}

int main() {
    int upperLimit = 50; // How high/long the algorithm will test
    int longest = 0; // Length of longest sequence
    int longestNumber = 0; // Number that had the longest sequence

    for (int i = 1; i <= upperLimit; i++) {
        int sequenceLength = collatzSequence(i);
        if (sequenceLength > longest) {
            longest = sequenceLength;
            longestNumber = i;
        }
    }

    printf("Number %d had the longest sequence of %d nodes.\n", longestNumber, longest);

    return 0;
}