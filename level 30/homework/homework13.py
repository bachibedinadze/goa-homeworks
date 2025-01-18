def get_strings_lengths(strings_list):
    """
    Takes a list of strings and returns a list of their lengths.

    Args:
        strings_list (list): A list of strings.

    Returns:
        list: A list of integers representing the lengths of the strings.
    """
    return [len(string) for string in strings_list]

# Example usage
strings = ["apple", "banana", "cherry"]
lengths = get_strings_lengths(strings)
print("Lengths of strings:", lengths)