def find_maximum(numbers):
    if not numbers:  # Check if the list is empty
        raise ValueError("The list is empty.")
    max_value = numbers[0]  # Initialize the first element as the maximum
    for num in numbers:
        if num > max_value:
            max_value = num
    return max_value

# Example usage
print(find_maximum([3, 1, 4, 1, 5, 9]))  # Output: 9
print(find_maximum([-10, -20, -5, -30]))  # Output: -5