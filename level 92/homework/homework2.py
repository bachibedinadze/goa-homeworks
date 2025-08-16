def flatten_and_sort(array):
    # Flatten the array using a list comprehension
    flat_list = [num for sublist in array for num in sublist]
    # Sort the flattened list in ascending order
    return sorted(flat_list)