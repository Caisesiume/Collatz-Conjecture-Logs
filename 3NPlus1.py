# 3n + 1 algorithm by @Caisesiume

# Define a class to store sequence information
class SequenceInfo:
    def __init__(self, length, highest_value):
        self.length = length
        self.highest_value = highest_value

# Function to generate the Collatz sequence for a given number
def collatz_sequence(n):
    length = 1
    highest_value = n
    print(f"{n}: ", end='')  # Just the iteration number

    while n != 1:
        print(f"{n}, ", end='')  # Print the current number being calculated in the sequence
        if n % 2 == 0:
            n //= 2
        else:
            n = 3 * n + 1
        if n > highest_value:
            highest_value = n
        length += 1
    print("1")  # Print the final number in the sequence
    return SequenceInfo(length, highest_value)

def main():
    upper_limit = 50  # Defines the upper limit for what numbers to calculate
    highest_number = 0
    highest_number_iteration = []
    overall_highest = 0
    longest = 0
    longest_iteration = []
    total_visited = 0
    total_sequences = 0

    # Iterate through numbers from 1 to the upper limit
    for i in range(1, upper_limit + 1):
        sequence_info = collatz_sequence(i)  # Generate Collatz sequence for current number
        total_visited += sequence_info.length  # Update the total visited nodes count
        total_sequences += 1  # Increase the total sequences count

        if i > highest_number:
            highest_number = i

        # If the current sequence is longer than the longest, update the longest sequence value
        # and add the current iteration to the list
        if sequence_info.length > longest:
            longest = sequence_info.length
            longest_iteration = [i]

        # If the current sequence is equal to the longest, add the current iteration to the list
        if sequence_info.length == longest: 
            if i not in longest_iteration:
                longest_iteration.append(i)

        # If the highest value in the current sequence is higher than the overall highest,
        # update the overall highest
        if sequence_info.highest_value > overall_highest:
            overall_highest = sequence_info.highest_value
            highest_number_iteration = [i]

        # If the highest value in the current sequence is equal to the overall highest,
        # add the current iteration to the list too.
        if sequence_info.highest_value == overall_highest:
            if i not in highest_number_iteration:
                highest_number_iteration.append(i)

    # Print the calculated statistics
    print("\n-----STATS AFTER CALCULATIONS-----")
    print(f"Overall highest integer reached: {overall_highest}, reached in iteration {highest_number_iteration}")
    print(f"Longest sequence: {longest - 1} nodes, occurred in iteration: {longest_iteration}")
    print(f"Total numbers (nodes) visited: {total_visited}")
    print(f"Amount of numbers (sequences) calculated: {total_sequences}")

if __name__ == "__main__":
    main() 
